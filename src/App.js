import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import flower from "./image/flower2.jpeg";
function App() {
  return (
    <div>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="titleRed">Saadani Jihène</h1>
        <br />
        <img src={flower} alt="flower2" />
        <br />
        <img src={"./image/flower1.jpg"} alt="flower1" />
      </div>
      <iframe
        video
        width="320"
        height="240"
        controls
        src="https://www.youtube.com/embed/rtL5oMyBHPs"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default App;
