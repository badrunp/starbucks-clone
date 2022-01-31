import Link from 'next/link';
import TypePage from '../interface/TypePage';

const PageItems = ({
  id,
  title,
  content,
  textButton,
  url,
  image,
  imageSize,
  reverse,
  titleTextSize,
  contentTextSize,
  backgroundColor,
  colSpan,
  color,
}: TypePage) => {
  return (
    <div
      key={id}
      className={`${backgroundColor} ${color} ${colSpan === 2 ? 'grid-col-1 md:col-span-2' : 'col-span-1'} ${
        colSpan === 2 && 'grid grid-cols-1 md:grid-cols-2 items-center'
      }`}
    >
      <div className={`relative flex items-center ${imageSize} ${reverse ? 'md:order-1' : 'md:order-2'}`}>
        <img src={image} alt={title} className='object-cover w-full h-full' />
      </div>
      <div
        className={`py-10 flex flex-col justify-center items-center space-y-6 text-center tracking-normal ${
          reverse ? 'md:order-2' : 'md:order-1'
        } ${colSpan === 2 ? 'px-12' : 'px-8'}`}
      >
        <h2 className={`${titleTextSize} font-bold`}>{title}</h2>
        <h4 className={`${contentTextSize} font-semibold`}>{content}</h4>
        <Link href={url}>
          <a className={`block py-1 px-4 rounded-full border ${color} font-semibold`}>{textButton}</a>
        </Link>
      </div>
    </div>
  );
};

export default PageItems;
