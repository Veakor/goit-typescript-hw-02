import Modal from 'react-modal';
import style from './ImageModal.module.css';

const ImageModal = ({ isOpen, onRequestClose, imageUrl, alt }) => {
    console.log('imageUrl:', imageUrl);
    console.log('alt:', alt);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Image Modal"
            className={style.imageModal}
        >
            <img src={imageUrl} alt={alt} />
        </Modal>
    );
};

export default ImageModal;