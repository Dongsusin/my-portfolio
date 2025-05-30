import React, { useState, useEffect, useRef } from "react";
import "./Music.css";

const API_URL = "https://itunes.apple.com/search?term=";

export default function App() {
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [view, setView] = useState("search");

  const audioRef = useRef(null);

  const searchTracks = async () => {
    if (!query.trim()) return;
    const res = await fetch(
      `${API_URL}${encodeURIComponent(query)}&media=music`
    );
    const data = await res.json();
    setTracks(data.results);
    setView("search");
  };

  const handlePlay = (track) => {
    setCurrentTrack(track);
    setProgress(0);
    setIsPlaying(true);
    setView("player");
  };

  const onTimeUpdate = () => setProgress(audioRef.current.currentTime);
  const onLoadedMetadata = () => setDuration(audioRef.current.duration);
  const onSeek = (e) => {
    const time = e.target.value;
    audioRef.current.currentTime = time;
    setProgress(time);
  };

  const onVolumeChange = (e) => {
    const vol = e.target.value;
    setVolume(vol);
    if (audioRef.current) audioRef.current.volume = vol;
  };

  const onPlay = () => setIsPlaying(true);
  const onPause = () => setIsPlaying(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [currentTrack, volume]);

  const formatTime = (sec) => {
    if (isNaN(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="music">
      <header>
        <input
          type="text"
          placeholder="Search music..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchTracks()}
        />
        <button
          className="view-toggle"
          onClick={() => setView(view === "search" ? "player" : "search")}
        >
          {view === "search" ? "재생 보기" : "검색 보기"}
        </button>
      </header>

      <div className="main unified">
        {view === "player" && currentTrack && (
          <div className="player">
            <img
              src={currentTrack.artworkUrl100}
              alt="art"
              className={isPlaying ? "playing" : ""}
            />
            <div className="info">
              <h3>{currentTrack.trackName}</h3>
              <p>
                {currentTrack.artistName} - {currentTrack.collectionName}
              </p>
              <audio
                ref={audioRef}
                src={currentTrack.previewUrl}
                onTimeUpdate={onTimeUpdate}
                onLoadedMetadata={onLoadedMetadata}
                onPlay={onPlay}
                onPause={onPause}
                controls
                autoPlay
              />
              <div className="progress-bar">
                <span>{formatTime(progress)}</span>
                <input
                  type="range"
                  min="0"
                  max={duration}
                  value={progress}
                  onChange={onSeek}
                  step="0.1"
                />
                <span>{formatTime(duration)}</span>
              </div>
              <div className="volume-control">
                <label>Sound:</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={onVolumeChange}
                />
              </div>
            </div>
          </div>
        )}

        {view === "search" && (
          <div className="right">
            <h2>검색 결과</h2>
            {tracks.length === 0 ? (
              <p>검색 결과 없음</p>
            ) : (
              tracks.map((track) => (
                <div key={track.trackId} className="track">
                  <img src={track.artworkUrl60} alt="art" />
                  <div>
                    <p>{track.trackName}</p>
                    <button onClick={() => handlePlay(track)}>재생</button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
