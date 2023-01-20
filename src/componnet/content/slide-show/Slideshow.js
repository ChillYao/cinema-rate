import React, { useState } from 'react';
import './Slideshow.scss';

const Slideshow = () => {
  const images = [
    {
      url: 'https://media.istockphoto.com/id/1395273170/de/foto/frau-zu-hause-w%C3%A4hlt-eine-farbe-um-die-w%C3%A4nde-zu-streichen.jpg?s=2048x2048&w=is&k=20&c=jKHRMdgCGPt_6f3gVZh833MJKZeF_hdZPT-mnFm8b8A='
    },
    {
      url: 'https://media.istockphoto.com/id/1371290125/de/foto/canary-wharf-district-at-night-london-vereinigtes-k%C3%B6nigreich.jpg?s=1024x1024&w=is&k=20&c=_-cYfjrCy6RWurMODg1UejjA7MEgUzOiChCCYnIlBO0='
    },
    {
      url: 'https://media.istockphoto.com/id/1358181814/de/foto/farbmuster-mit-farbe-des-jahres-2022-in-der-hand-very-peri-farbtrendpalette-draufsicht-flache.jpg?s=2048x2048&w=is&k=20&c=UMgAySPu-G5wmZmuoxzAMdvQ16A-P96m7m71ePfBWaw='
    }
  ];

  const [state, setState] = useState({
    slideShow: images[0],
    slideIndex: 0
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const { slideShow, slideIndex } = state;

  const moveSlideWithArrows = (type) => {
    let index = currentIndex;

    if (type === 'prev') {
      if (currentIndex <= 0) {
        index = images.length - 1;
      } else {
        index -= 1;
      }
    }

    if (type === 'next') {
      if (currentIndex >= images.length - 1) {
        index = 0;
      } else {
        index += 1;
      }
    }

    setCurrentIndex(index);
    setState((prev) => ({
      ...prev,
      slideIndex: index,
      slideShow: images[index]
    }));
  };

  const RenderArrows = () => {
    return (
      <div className="slider-arrows">
        <div className="slider-arrow slider-arrow--left" onClick={() => moveSlideWithArrows('prev')} />
        <div className="slider-arrow slider-arrow--right" onClick={() => moveSlideWithArrows('next')} />
      </div>
    );
  };

  const Indicators = (props) => {
    // eslint-disable-next-line react/prop-types
    const { currentSlide } = props;
    const listIndicators = images.map((slide, i) => {
      const btnClasses = i === currentSlide ? 'slider-navButton slider-navButton--active' : 'slider-navButton';
      return <button className={btnClasses} key={i} />;
    });
    return <div className="slider-nav">{listIndicators}</div>;
  };

  return (
    <>
      <div className="slider">
        <div className="slider-slides">
          {images && images.length && slideShow && (
            <div className="slider-image" style={{ backgroundImage: `url(${slideShow.url})` }}></div>
          )}
        </div>
        <Indicators currentSlide={slideIndex} />
        <RenderArrows />
      </div>
    </>
  );
};

export default Slideshow;
