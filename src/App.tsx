import  { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoaderComponent from './components/Loader/LoaderComponent';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal'

type Image = {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string;
};

type SelectedImage = {
  imageUrl: string;
  alt: string;
};

type SearchResponse = {
  data: {
    results: Image[];
  };
  status: number;
  statusText: string;
};

// Компонент App
const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [page, setPage] = useState<number>(1);

  async function fetchImages(searchTerm: string, page: number)  {
    try {
      setLoading(true);
      const response = await axios.get<SearchResponse>(`https://api.unsplash.com/search/photos?query=${searchTerm}&page=${page}`, {
        headers: {
          Authorization: 'Client-ID qGnIJ82TK4aWAvZ_LXe10mkMvKrzLj-ANSCPrgtH1cY',
        },
      });
      setImages(prevImages => [...prevImages, ...response.data.data.results]);
      setLoading(false);
    } 
    
    catch (error) {
      console.error('Error fetching images:', error);
     
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchTerm !== '') {
      fetchImages(searchTerm, page);
    }
  }, [searchTerm, page]);

  const handleSubmit = (term: string) => {
    setSearchTerm(term);
    setPage(1);
    setImages([]);
  };

  const handleImageClick = (imageUrl: string, alt: string) => {
    setSelectedImage({ imageUrl, alt });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {loading && <LoaderComponent />}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && <ImageGallery images={images} onImageClick={handleImageClick} />}
      {!loading && images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
      {isModalOpen && selectedImage && (
        <ImageModal 
          isOpen={isModalOpen} 
          onRequestClose={closeModal} 
          imageUrl={selectedImage.imageUrl} 
          alt={selectedImage.alt} 
        />
      )}
    </div>
  );
};

export default App;