import style from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => {

    return (
        <button className={style.loadMoreButton} onClick={onClick}>Load more</button>
    );
};

export default LoadMoreBtn;