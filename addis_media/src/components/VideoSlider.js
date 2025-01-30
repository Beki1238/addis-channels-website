import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const VideoSlider = ({ videos }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="video-slider-container">
      <Slider {...settings}>
        {videos.map(video => (
          <div key={video.id} className="video-item">
            <div className="box-img">
              <img src={video.thumbnail} alt={video.title} />
              <a href={video.youtubeLink} className="trailer-btn">Watch Now</a>
            </div>
            <h3>{video.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoSlider;