import type { GetStaticProps } from 'next';
import dataPage from '../data/page';
import TypePage from '../interface/TypePage';
import Layout from '../components/Layout';
import PageMain from '../components/PageMain';
import sbContent from '../data/sbContent';

const Home = ({ pages }: { pages: TypePage[] }) => {
  return (
    <Layout title='Starbucks Coffe Company'>
      <div className='py-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
        <PageMain pages={pages} />
      </div>
      <div className='px-4 md:px-6 lg:px-[40px] flex flex-col space-y-24 items-center py-8 border-b shadow'>
        {sbContent.map((item, index) => (
          <div
            key={index}
            className='text-center max-w-2xl tracking-tight font-semibold text-sm md:text-[15px]'
          >
            {item}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      pages: dataPage,
    },
  };
};

export default Home;
