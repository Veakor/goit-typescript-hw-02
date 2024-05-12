import style from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import {Image} from "../types";

type ImageGalleryProps = {
  images: Image[];
  onImageClick: (url: string, alt: string) => void;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className={style.imageGallery}>
      {images.map((image, index) => (
        <li key={index}>
          <ImageCard 
            image={image} 
            onImageClick={onImageClick}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;