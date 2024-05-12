import { FC } from "react";
import { ImageType, CardImageType } from "../types";

import ImageCard from "../ImageCard/ImageCard";

import clsx from "clsx";
import style from "./ImageGallery.module.css";

interface ImageProps {
  cardImages: ImageType[];
  openModal: (object: CardImageType) => void;
}

const ImageGallery: FC<ImageProps> = ({ cardImages, openModal }) => {
  return (
    <ul className={clsx(style.galleryList)}>
      {Array.isArray(cardImages) &&
        cardImages.map((item) => {
          return (
            <ImageCard key={item.id} dataImages={item} openModal={openModal} />
          );
        })}
    </ul>
  );
};

export default ImageGallery;