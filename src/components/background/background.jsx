import "./background.css";

function getWindowSize() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
export default function Background() {
  return <div className="background">{content}</div>;
}
