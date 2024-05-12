import { useEffect, useState } from "react";
import "./App.css";

import { getImages } from "./services/API";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/LoaderComponent";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import MoreLoader from "./components/MoreLoader/MoreLoader";

import { CardImageType, ImageType } from "./components/types";

function App() {
  const [cardArr, setCardArr] = useState<ImageType[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const [moreLoader, setMoreLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [valueInput, setValueInput] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [showLoreMore, setShowLoreMore] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalValueImg, setModalValueImg] = useState<CardImageType>(Object);

  useEffect(() => {
    if (!valueInput) return;

    async function dataImages(): Promise<void> {
      setError(false);
      try {
        const data: ImageType[] = await getImages(valueInput, pageNumber);
        setCardArr([...cardArr, ...data]);
        setShowLoreMore(true);
      } catch (error) {
        setShowLoreMore(false);
        setError(true);
      } finally {
        setLoader(false);
        setMoreLoader(false);
      }
    }
    dataImages();
  }, [valueInput, pageNumber]);

  const onSubmit = (event: string): void => {
    setLoader(true);
    setCardArr([]);
    setPageNumber(1);
    setValueInput(event);
  };

  const onClick = (): void => {
    setMoreLoader(true);
    setPageNumber(pageNumber + 1);
  };

  const openModal = (event: CardImageType): void => {
    setModalIsOpen(event.bool);
    setModalValueImg(event);
  };

  const closeModal = (): void => {
    setModalIsOpen(false);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {loader && <Loader />}
      {error ? (
        <ErrorMessage />
      ) : (
        <ImageGallery cardImages={cardArr} openModal={openModal} />
      )}
      {moreLoader && <MoreLoader />}
      {showLoreMore && <LoadMoreBtn onClick={onClick} />}
      {modalIsOpen && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          cardImages={modalValueImg}
        />
      )}
    </>
  );
}

export default App;