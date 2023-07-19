import React, { useState, useEffect } from 'react';
import { animateScroll } from 'react-scroll';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

export default function App() {
  const [galleryName, setGalleryName] = useState('');
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [gallery, setGallery] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (galleryName === '') {
      return;
    }

    const fetchData = async () => {
      try {
        setStatus('pending');

        const response = await fetch(
          `https://pixabay.com/api/?q=${galleryName}&page=${page}&key=37532394-4be77775868909c78ad8f61fa&image_type=photo&orientation=horizontal&per_page=12`
        );
        const galleryData = await response.json();
        const { hits, totalHits } = galleryData;

        setGallery(prevGallery => [...prevGallery, ...hits]);
        setTotalHits(totalHits);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
      }
    };

    fetchData();
  }, [galleryName, page]);

  const handleFormSubmit = galleryName => {
    setGalleryName(galleryName);
    setPage(1);
    setTotalHits(0);
    setGallery([]);
  };

  const handleButtonMore = () => {
    setPage(prevPage => prevPage + 1);
    scrollToBottomButton();
  };

    const scrollToBottomButton = () => {
    animateScroll.scrollToBottom({
      duration: 2000,
      delay: 10,
      smooth: 'linear',
    });
  };

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery galleryName={galleryName} page={page} status={status} gallery={gallery} />
      {gallery.length < totalHits && gallery.length > 0 && <Button handleButtonMore={handleButtonMore} />}
    </div>
  );
}