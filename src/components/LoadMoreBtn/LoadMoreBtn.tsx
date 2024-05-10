import style from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
    onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
    return (
        <button className={style.loadMoreButton} onClick={onClick}>Load more</button>
    );
};

export default LoadMoreBtn;