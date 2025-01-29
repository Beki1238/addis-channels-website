import React from 'react';
import addisSportLogo from '../assets/images.png'; // Import the logo
import addisMezenagnaLogo from '../assets/addissport.jpg'; // Import the logo
import addisEntertainmentLogo from '../assets/addissport.jpg'; // Import the logo
import addisSportLyuLogo from '../assets/addissport.jpg'; // Import the logo

const channels = [
  {
    id: 1,
    name: 'Addis Sport',
    logo: addisSportLogo, // Use the imported logo
    description: 'The latest in sports highlights and news.',
    link: 'https://youtube.com/addissport',
  },
  {
    id: 2,
    name: 'Addis Mezenagna',
    logo: addisMezenagnaLogo, // Use the imported logo
    description: 'Entertainment and fun for everyone.',
    link: 'https://youtube.com/addismezenagna',
  },
  {
    id: 3,
    name: 'Addis Entertainment',
    logo: addisEntertainmentLogo, // Use the imported logo
    description: 'Your go-to for music, movies, and more.',
    link: 'https://youtube.com/addisentertainment',
  },
  {
    id: 4,
    name: 'Addis Sport Lyu',
    logo: addisSportLyuLogo, // Use the imported logo
    description: 'Exclusive sports content and analysis.',
    link: 'https://youtube.com/addissportlyu',
  },
];

const Channels = () => {
  return (
    <section className="movies-container">
      <h2 className="heading">Our Channels</h2>
      <div className="movies-container">
        {channels.map(channel => (
          <div key={channel.id} className="box">
            <div className="box-img">
              <img src={channel.logo} alt={channel.name} />
              <button className="book-btn">View channel</button>
            </div>
            <h3>{channel.name}</h3>
            <span>{channel.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Channels;