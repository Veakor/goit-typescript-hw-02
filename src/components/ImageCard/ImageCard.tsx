type Image = {
  urls: {
    small: string;
    regular: string;
  };
  alt: string;
};

type ImageCardProps = {
  image: Image;
  onImageClick: (url: string, alt: string) => void;
};

const ImageCard: React.FC<ImageCardProps> = ({ image, onImageClick }) => {
  return (
    <img
      src={image.urls.small}
      alt={image.alt}
      onClick={() => onImageClick(image.urls.regular, image.alt)}
    />
  );
};

export default ImageCard;