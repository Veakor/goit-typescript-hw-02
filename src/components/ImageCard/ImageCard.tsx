const ImageCard = ({ image, onImageClick }) => {
    return (
      <img
        src={image.urls.small}
        alt={image.alt}
        onClick={() => onImageClick(image.urls.regular, image.alt)}
      />
    );
  };
  
  export default ImageCard;