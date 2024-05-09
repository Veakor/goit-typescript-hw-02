import style from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images, onImageClick }) => {
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