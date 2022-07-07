import "./App.css";
import { useEffect, useState } from "react";
import video from "./videos/music.mp4";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const result = await fetch(
          "http://orangevalleycaa.org/api/videos"
        ).then((res) => res.json());
        setData(result);
      };

      //fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="App">
      <header className="header">Art videos</header>
      <div key="2w23">
        <h4>Test</h4>
        <video src={video} controls height={120}></video>
      </div>

      {data.map((video) => (
        <div key={video.id}>
          <h4>{video.name}</h4>
          <video src={video.video_url} controls height={120}></video>
        </div>
      ))}
    </div>
  );
}

export default App;
