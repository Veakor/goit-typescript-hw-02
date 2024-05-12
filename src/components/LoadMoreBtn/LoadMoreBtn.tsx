import { FC } from "react";

import clsx from "clsx";
import style from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={clsx(style.loreMoreBtn)} type="button" onClick={onClick}>
      <span>Load more</span>
    </button>
  );
};

export default LoadMoreBtn;