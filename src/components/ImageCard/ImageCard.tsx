import {Image}from "../types"


type ImageCardProps = {
  image: Image;
  onImageClick: (url: string, alt: string) => void;
};

const ImageCard: React.FC<ImageCardProps> = ({ image, onImageClick }) => {
  return (
    <img
      src={image.urls.small}
      alt={image.alt_description}
      onClick={() => onImageClick(image.urls.regular, image.alt_description)}
    />
  );
};

export default ImageCard;