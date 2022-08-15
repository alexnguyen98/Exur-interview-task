import cn from 'classnames';
import { FC, ReactNode, JSXElementConstructor } from 'react';

type Variant = 'heading' | 'sectionHeading' | 'link' | 'big' | 'body' | 'small';

type Props = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  html?: string;
};

const Text: FC<Props> = ({
  className = '',
  variant = 'body',
  children,
  html,
}) => {
  const componentsMap: {
    [P in Variant]: React.ComponentType<any> | string;
  } = {
    small: 'p', // smaller than default
    body: 'p', // default
    big: 'div', // bold
    link: 'div', // bold link text
    sectionHeading: 'h2', // section titles
    heading: 'h1', // page titles
  };

  const Component:
    | JSXElementConstructor<any>
    | React.ReactElement<any>
    | React.ComponentType<any>
    | string = componentsMap![variant!];

  const htmlContentProps = html
    ? {
        dangerouslySetInnerHTML: { __html: html },
      }
    : {};

  return (
    <Component
      className={cn(
        {
          ['text-zinc-700']: variant === 'body',
          ['font-semibold']: variant === 'big',
          ['font-semibold text-blue-700']: variant === 'link',
          ['text-3xl md:text-5xl font-bold	text-blue-700']:
            variant === 'heading',
        },
        className
      )}
      {...htmlContentProps}
    >
      {children}
    </Component>
  );
};

export default Text;
