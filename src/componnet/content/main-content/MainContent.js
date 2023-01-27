import React, { useState } from 'react';
import './MainContent.scss';
import Slideshow from '../slide-show/Slideshow';
import Paginate from '../paginate/Paginate';
import Grid from '../grid/Grid';

const MainContent = () => {
  const images = [
    {
      url: 'https://media.istockphoto.com/id/1395273170/de/foto/frau-zu-hause-w%C3%A4hlt-eine-farbe-um-die-w%C3%A4nde-zu-streichen.jpg?s=2048x2048&w=is&k=20&c=jKHRMdgCGPt_6f3gVZh833MJKZeF_hdZPT-mnFm8b8A=',
      rating: 2.5
    },
    {
      url: 'https://media.istockphoto.com/id/1371290125/de/foto/canary-wharf-district-at-night-london-vereinigtes-k%C3%B6nigreich.jpg?s=1024x1024&w=is&k=20&c=_-cYfjrCy6RWurMODg1UejjA7MEgUzOiChCCYnIlBO0=',
      rating: 8.5
    },
    {
      url: 'https://media.istockphoto.com/id/1358181814/de/foto/farbmuster-mit-farbe-des-jahres-2022-in-der-hand-very-peri-farbtrendpalette-draufsicht-flache.jpg?s=2048x2048&w=is&k=20&c=UMgAySPu-G5wmZmuoxzAMdvQ16A-P96m7m71ePfBWaw=',
      rating: 9.7
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (type) => {
    if (type === 'prev' && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    } else {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="main-content">
      <Slideshow images={images} auto={true} showArrows={true} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">
          <Paginate currentPage={currentPage} totalPages={10} paginate={paginate} />
        </div>
      </div>
      <Grid images={images} />
    </div>
  );
};

export default MainContent;
