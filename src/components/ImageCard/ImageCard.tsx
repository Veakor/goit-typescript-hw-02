import {Image}from "../types";


type ImageCardProps = {
  imageUrl: string;
  alt: string;
  onImageClick: (url: string, alt: string) => void;
};

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, alt, onImageClick }) => {
  const handleClick = () => {
    onImageClick(imageUrl, alt);
  };

  return (
    <div className={style.imageCard} onClick={handleClick}>
      <img src={imageUrl} alt={alt} />
    </div>
  );
};

export default ImageCard;