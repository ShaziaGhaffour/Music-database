import React, { useState } from 'react';
import Navbar from './Components/Navbar/nevbar';
import Sidebar from './Components/sidebar/side';
import Category from './Components/Mainpage/Category';
import AudioPlayer from './Components/AudioPlayer/AudioPlayer';
import './App.css';
const allCategories = [
  {
    name: 'Pop',
    videos: [
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      'https://www.youtube.com/watch?v=JGwWNGJdvx8',
      'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
      'https://www.youtube.com/watch?v=09R8_2nJtjg',
    ],
  },
  {
    name: 'Rock',
    videos: [
      'https://www.youtube.com/watch?v=fJ9rUzIMcZQ',
      'https://www.youtube.com/watch?v=ktvTqknDobU',
      'https://www.youtube.com/watch?v=YQHsXMglC9A',
      'https://www.youtube.com/watch?v=tAGnKpE4NCI',
      'https://www.youtube.com/watch?v=QH2-TGUlwu4',
      'https://www.youtube.com/watch?v=2vjPBrBU-TM',
      'https://www.youtube.com/watch?v=eVTXPUF4Oz4',
    ],
  },
  {
    name: 'Jazz',
    videos: [
      'https://www.youtube.com/watch?v=DSGyEsJ17cI',
      'https://www.youtube.com/watch?v=HMnrl0tmd3k',
      'https://www.youtube.com/watch?v=VMnjF1O4eH0',
      'https://www.youtube.com/watch?v=sY9PeJOZpeA',
      'https://www.youtube.com/watch?v=dxP2wD92kwo',
      'https://www.youtube.com/watch?v=vmDDOFXSgAs',
      'https://www.youtube.com/watch?v=yc5AWImplfE',
    ],
  },
];

const extractVideoId = (url) => {
  const regex = /(?:youtube\.com\/.*v=|youtu\.be\/)([^&#?/]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filteredCategory, setFilteredCategory] = useState(allCategories);

  const handleSearch = (searchQuery) => {
    const filtered = allCategories.filter(category =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCategory(filtered.length > 0 ? filtered : []);
  };

  return (
    <div>
      <Navbar 
        onMenuClick={() => setSidebarOpen(!sidebarOpen)} 
        onSearch={handleSearch} 
      />
      <div className="app-container">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="main-content">
          <Category />
          {filteredCategory.map((cat, index) => (
            <AudioPlayer
              key={index}
              categoryName={cat.name}
              videoIds={cat.videos.map(extractVideoId)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

