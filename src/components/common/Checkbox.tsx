import React, { ReactNode } from 'react';
import cn from 'classnames';

type Props = {
  children: ReactNode;
  className?: string;
  value?: string;
  name?: string;
  required?: boolean;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: React.FC<Props> = ({ className, children, ...props }) => (
  <label className={cn('flex items-center', className)}>
    <input type="checkbox" className="form-checkbox checkbox mr-3" {...props} />
    <span className="text-zinc-700">{children}</span>
  </label>
);

export default Checkbox;
