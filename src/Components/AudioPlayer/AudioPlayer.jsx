import React from 'react';
import './AudioPlayer.css';

const AudioPlayer = ({ videoIds = [], categoryName }) => {
  if (!videoIds.length) return null;

  return (
    <div className="audio-player-category">
      <h2 className="category-title">{categoryName}</h2>
      <div className="audio-player-container">
        {videoIds.slice(0, 7).map((id, index) => (
          <div key={id} className="video-card">
            <img
              src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
              alt={`Music Track ${index + 1}`}
              className="thumbnail"
              loading="lazy"
            />
            <div className="video-info">
              <p className="video-title">Music Track {index + 1}</p>
              <div className="iframe-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`YouTube Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudioPlayer;



