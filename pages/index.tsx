import type { GetStaticProps } from 'next';
import dataPage from '../data/page';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export interface TypePage {
  id: number;
  title: string;
  content: string;
  textButton: string;
  url: string;
  image: string;
  imageSize: string;
  reverse: boolean;
  titleTextSize: string;
  contentTextSize: string;
  backgroundColor: string;
  colSpan: number;
  color: string;
}

const Home = ({ pages }: { pages: TypePage[] }) => {
  return (
    <div>
      <Navbar />
      <div className='py-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
        {pages.map((item) => (
          <div
            key={item.id}
            className={`${item.backgroundColor} ${item.color} ${
              item.colSpan === 2 ? 'grid-col-1 md:col-span-2' : 'col-span-1'
            } ${item.colSpan === 2 && 'grid grid-cols-1 md:grid-cols-2 items-center'}`}
          >
            <div className={`relative ${item.imageSize} ${item.reverse ? 'md:order-1' : 'md:order-2'}`}>
              <Image src={item.image} layout='fill' alt={item.title} className='object-cover' />
            </div>
            <div
              className={`py-10 flex flex-col justify-center items-center space-y-6 text-center tracking-normal ${
                item.reverse ? 'md:order-2' : 'md:order-1'
              } ${item.colSpan === 2 ? 'px-12' : 'px-8'}`}
            >
              <h2 className={`${item.titleTextSize} font-bold`}>{item.title}</h2>
              <h4 className={`${item.contentTextSize} font-semibold`}>{item.content}</h4>
              <Link href={item.url}>
                <a className={`block py-1 px-4 rounded-full border ${item.color} font-semibold`}>
                  {item.textButton}
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
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
