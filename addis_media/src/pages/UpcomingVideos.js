import React from 'react';
import VideoSlider from '../components/VideoSlider';

const UpcomingVideos = () => {
  const upcomingVideos = [
    {
      id: 1,
      title: 'Addis Sport: Upcoming Match',
      thumbnail: '/images/1.jpg',
      youtubeLink: 'https://youtube.com/addissport',
    },
    {
      id: 2,
      title: 'Addis Entertainment: New Release',
      thumbnail: '/images/11.jpg',
      youtubeLink: 'https://youtube.com/addisentertainment',
    },
  ];

  return (
    <section className="upcoming-videos">
      <h2 className="heading">Upcoming Videos</h2>
      <VideoSlider videos={upcomingVideos} />
    </section>
  );
};

export default UpcomingVideos;