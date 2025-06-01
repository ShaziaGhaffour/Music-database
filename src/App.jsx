import React, { useState } from 'react';
import Navbar from './Components/Navbar/nevbar';
import Sidebar from './Components/sidebar/side';
import Category from './Components/Mainpage/Category';
import AudioPlayer from './Components/AudioPlayer/AudioPlayer';
import './App.css';
const categoriesWithoutMusic = [
  {
    name: 'Pop',
    videos: [
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      'https://www.youtube.com/watch?v=JGwWNGJdvx8',
      'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
      'https://www.youtube.com/watch?v=09R8_2nJtjg',
      'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
      'https://www.youtube.com/watch?v=OPf0YbXqDm0',
      'https://www.youtube.com/watch?v=pRpeEdMmmQ0',
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
  {
    name: 'Hip Hop',
    videos: [
      'https://www.youtube.com/watch?v=LsoLEjrDogU',
      'https://www.youtube.com/watch?v=ktvTqknDobU',
      'https://www.youtube.com/watch?v=uelHwf8o7_U',
      'https://www.youtube.com/watch?v=60ItHLz5WEA',
      'https://www.youtube.com/watch?v=fJ9rUzIMcZQ',
      'https://www.youtube.com/watch?v=SlPhMPnQ58k',
      'https://www.youtube.com/watch?v=8UVNT4wvIGY',
    ],
  },
  {
    name: 'Classical',
    videos: [
      'https://www.youtube.com/watch?v=GRxofEmo3HA',
      'https://www.youtube.com/watch?v=7maJOI3QMu0',
      'https://www.youtube.com/watch?v=Rb0UmrCXxVA',
      'https://www.youtube.com/watch?v=_4IRMYuE1hI',
      'https://www.youtube.com/watch?v=JFvujknrBuE',
      'https://www.youtube.com/watch?v=kLPQn7yDT3Y',
      'https://www.youtube.com/watch?v=E2LM3ZlcDnk',
    ],
  },
  {
    name: 'Electronic',
    videos: [
      'https://www.youtube.com/watch?v=fLexgOxsZu0',
      'https://www.youtube.com/watch?v=hTWKbfoikeg',
      'https://www.youtube.com/watch?v=IcrbM1l_BoI',
      'https://www.youtube.com/watch?v=3tmd-ClpJxA',
      'https://www.youtube.com/watch?v=60ItHLz5WEA',
      'https://www.youtube.com/watch?v=1-xGerv5FOk',
      'https://www.youtube.com/watch?v=JRfuAukYTKg',
    ],
  },
  {
    name: 'Reggae',
    videos: [
      'https://www.youtube.com/watch?v=LanCLS_hIo4',
      'https://www.youtube.com/watch?v=CHekNnySAfM',
      'https://www.youtube.com/watch?v=zaGUr6wzyT8',
      'https://www.youtube.com/watch?v=2U-rBZREQMw',
      'https://www.youtube.com/watch?v=zYIr2KuhyCI',
      'https://www.youtube.com/watch?v=HyHNuVaZJ-k',
      'https://www.youtube.com/watch?v=EYGwxf1gCC4',
    ],
  },
  {
    name: 'Chill',
    videos: [
      'https://www.youtube.com/watch?v=2vjPBrBU-TM',
      'https://www.youtube.com/watch?v=Dx5qFachd3A',
      'https://www.youtube.com/watch?v=8UVNT4wvIGY',
      'https://www.youtube.com/watch?v=lTRiuFIWV54',
      'https://www.youtube.com/watch?v=OpQFFLBMEPI',
      'https://www.youtube.com/watch?v=eVTXPUF4Oz4',
      'https://www.youtube.com/watch?v=nfWlot6h_JM',
    ],
  },
  {
    name: 'Live',
    videos: [
      'https://www.youtube.com/watch?v=a04fIRvz6pI',
      'https://www.youtube.com/watch?v=ueOi5nWgViA',
      'https://www.youtube.com/watch?v=0KSOMA3QBU0',
      'https://www.youtube.com/watch?v=mWRsgZuwf_8',
      'https://www.youtube.com/watch?v=ktvTqknDobU',
      'https://www.youtube.com/watch?v=YQHsXMglC9A',
      'https://www.youtube.com/watch?v=fLexgOxsZu0',
    ],
  },
  {
    name: 'Motivation',
    videos: [
      'https://www.youtube.com/watch?v=mgmVOuLgFB0',
      'https://www.youtube.com/watch?v=ZXsQAXx_ao0',
      'https://www.youtube.com/watch?v=26U_seo0a1g',
      'https://www.youtube.com/watch?v=wnHW6o8WMas',
      'https://www.youtube.com/watch?v=mgmVOuLgFB0',
      'https://www.youtube.com/watch?v=mgmVOuLgFB0',
      'https://www.youtube.com/watch?v=CqVGbIUlUu8',
    ],
  },
];

// Step 2: Create Music category using videos from all others
const musicVideos = categoriesWithoutMusic.flatMap(category => category.videos);

const allCategories = [...categoriesWithoutMusic, { name: 'Music', videos: musicVideos }];

// Step 3: Helper to extract YouTube video ID
const extractVideoId = (url) => {
  const regex = /(?:youtube\.com\/.*v=|youtu\.be\/)([^&#?/]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
  };

  const filteredCategory =
    activeCategory === 'All'
      ? allCategories
      : allCategories.filter((cat) => cat.name === activeCategory);

  return (
    <div>
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="app-container">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="main-content">
          <Category
            onSelectCategory={handleCategorySelect}
            activeCategory={activeCategory}
          />
          {filteredCategory.length > 0 ? (
            filteredCategory.map((cat, index) => (
              <AudioPlayer
                key={index}
                categoryName={cat.name}
                videoIds={cat.videos.map(extractVideoId)}
              />
            ))
          ) : (
            <p>No songs found for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;



