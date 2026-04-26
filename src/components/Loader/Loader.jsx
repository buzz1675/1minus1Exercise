import { useState, useEffect } from "react";
import "./loader.scss";
import useIsMobile from "../../Hooks/useMobile";

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsExiting(true), 500);
          setTimeout(onComplete, 1200);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  const pathLength = 4500;
  const offset = pathLength + (progress / 100) * pathLength;
  const mobilePathLength = 800;
  const mobileOffset = mobilePathLength - (progress / 100) * mobilePathLength;

  const isMobile = useIsMobile();

  return (
    <div
      className={`loader-screen ${isExiting ? "loader-screen--exit-up" : ""}`}
    >
      <div className="loader-screen__counter-container">
        <span>{progress}%</span>
      </div>
      <div className="loader-screen__loader-bg-layer">
        {isMobile ? (
          <svg
            viewBox="0 0 360 503"
            fill="none"
            preserveAspectRatio="none"
            className="loader-svg-mobile"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-154.882 477.167C-21.4669 462.546 -5.01988 324.564 102.878 315.755C154.27 311.559 205.189 370.041 297.449 236.837C389.709 103.634 497.626 214.068 556.968 112.561C602.116 35.3347 560.503 -82.7807 618.887 -173.102"
              stroke="rgba(255, 255, 255, 0.3)"
              stroke-width="50"
              strokeLinejoin="round"
              style={{
                strokeDasharray: mobilePathLength,
                strokeDashoffset: mobileOffset,
              }}
            />
          </svg>
        ) : (
          <div>
            <svg
              viewBox="0 0 1920 546"
              fill="none"
              className="loader-svg"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2067.82 260.053C1768.51 -33.6634 1413 99.2647 1320.94 162.148C1151.78 277.69 963.415 470.264 640.452 470.264C197.616 470.264 233.243 59.7637 -66.5239 75.4314"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="150"
                strokeLinejoin="round"
                style={{
                  strokeDasharray: pathLength,
                  strokeDashoffset: offset,
                }}
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default Loader;
