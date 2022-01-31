import TypePage from '../interface/TypePage';
import PageItems from './PageItems';

const PageMain = ({ pages }: { pages: TypePage[] }) => {
  return (
    <>
      {pages.map(
        ({
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
        }) => (
          <PageItems
            key={id}
            id={id}
            title={title}
            content={content}
            textButton={textButton}
            url={url}
            image={image}
            imageSize={imageSize}
            reverse={reverse}
            titleTextSize={titleTextSize}
            contentTextSize={contentTextSize}
            backgroundColor={backgroundColor}
            colSpan={colSpan}
            color={color}
          />
        )
      )}
    </>
  );
};

export default PageMain;
