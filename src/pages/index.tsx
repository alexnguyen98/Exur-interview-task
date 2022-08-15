import React from 'react';
import Text from '../components/common/Text';
import Layout from '../components/layout/Layout';
import ProductFilterDesktop from '../components/search/filter/ProductFilter.desktop';
import ProductFilterMobile from '../components/search/filter/ProductFilter.mobile';
import ProductOverview from '../components/search/product/ProductOverview';

const Home = () => {
  return (
    <Layout>
      <div className="my-8 text-zinc-400">
        Forside /{' '}
        <span className="text-zinc-700">
          Se farlige og mangelfulde produkter
        </span>
      </div>
      <div className="flex">
        <ProductFilterDesktop />
        <div className="flex-1">
          <Text variant="heading">Se farlige og mangelfulde produkter</Text>
          <ProductFilterMobile />
          <Text className="mt-8">
            Når myndigheder i Danmark og resten af EU opdager et farligt eller
            et mangelfuldt produkt, offentliggør danske myndigheder information
            om de farlige og mangelfulde produkter.
          </Text>
          <Text className="mt-4 mb-10">
            Alvorligheden af fejl og mangler afgør om et produkt er farligt
            eller mangelfuldt. Du kan komme alvorligt til skade på et farligt
            produkt. Et mangelfuldt produkt har mindre fejl på produktet eller i
            dokumentationen, men det er ikke farligt at bruge.
          </Text>
          <ProductOverview />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
