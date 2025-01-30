import React from 'react';
import VideoSlider from '../components/VideoSlider';

const Videos = () => {
  const allVideos = [
    {
      id: 1,
      title: 'Addis Sport: Highlights',
      thumbnail: '/images/22.jpg',
      youtubeLink: 'https://youtube.com/addissport',
    },
    {
      id: 2,
      title: 'Addis Entertainment: New Music',
      thumbnail: '/images/222.jpg',
      youtubeLink: 'https://youtube.com/addisentertainment',
    },
    {
      id: 3,
      title: 'Addis Mezenagna: Comedy Skit',
      thumbnail: '/images/1.jpg',
      youtubeLink: 'https://youtube.com/addismezenagna',
    },
    {
      id: 4,
      title: 'Addis Sport Lyu: Analysis',
      thumbnail: '/images/11.jpg',
      youtubeLink: 'https://youtube.com/addissportlyu',
    },
  ];

  return (
    <section className="videos">
      <h2 className="heading">All Videos</h2>
      <VideoSlider videos={allVideos} />
    </section>
  );
};

export default Videos;