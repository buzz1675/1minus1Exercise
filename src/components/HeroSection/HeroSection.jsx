import { useEffect, useState } from "react";
import "./heroSection.scss";
import GodOfWar from "../../assets/god-of-war.png";
import Prey from "../../assets/prey.png";
import Bioshock from "../../assets/bioshock.png";
import useIsMobile from "../../hooks/useMobile";
import learnMoreButton from "../../assets/right-arrow.png";

const images = [
  {
    image: GodOfWar,
    alt: "Kratos from God of War stands with his back to the camera, holding the Leviathan Axe as a massive, crocodile-like Dreki monster leaps into the air with its jaws wide open.",
  },
  {
    image: Prey,
    alt: "Morgan Yu from the game Prey wearing a red space suit and glowing glass helmet, standing before looming black Typhon smoke tendrils.",
  },
  {
    image: Bioshock,
    alt: "A Bouncer-class Big Daddy from BioShock lunging forward with a large drill arm and a glowing porthole helmet, with a Little Sister visible in the bottom corner.",
  },
];
const HeroSection = ({ isReady }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const isMobile = useIsMobile();
  return (
    <>
      <div
        className={`placeholder-text ${isReady ? "placeholder-text--loaded" : ""}`}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur. <br />
          Vestibulum fringilla est in mauris auctor,
        </p>
      </div>
      <section className={`hero ${isReady ? "hero--loaded" : ""}`}>
        <div className="hero__bg-layer">
          {isMobile ? (
            <div className="hero__vector hero__vector--mobile">
              <svg
                viewBox="0 0 360 503"
                fill="none"
                className="hero__svg"
                preserveAspectRatio="xMidYMin slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-154.882 477.167C-21.4669 462.546 -5.01988 324.564 102.878 315.755C154.27 311.559 205.189 370.041 297.449 236.837C389.709 103.634 497.626 214.068 556.968 112.561C602.116 35.3347 560.503 -82.7807 618.887 -173.102"
                  stroke="#FF8702"
                  strokeWidth="50"
                />
              </svg>
            </div>
          ) : (
            <div className="hero__vector hero__vector--desktop">
              <svg
                viewBox="0 0 1920 546"
                fill="none"
                className="hero__svg"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2067.82 260.053C1768.51 -33.6634 1413 99.2647 1320.94 162.148C1151.78 277.69 963.415 470.264 640.452 470.264C197.616 470.264 233.243 59.7637 -66.5239 75.4314"
                  stroke="#FF8702"
                  strokeWidth="150"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
        </div>

        <div className="hero__content">
          <div className="hero__stack">
            <div className="hero__text">
              <h1 className="hero__title">
                <span className="hero__line-group">
                  <span className="hero__mask">
                    <span className="hero__line hero__line--1">Tell</span>
                  </span>

                  <span className="hero__mask">
                    <span className="hero__line hero__line--2">Big</span>
                  </span>
                </span>

                <span className="hero__mask">
                  <span className="hero__line hero__line--3">Tails</span>
                </span>
              </h1>
            </div>

            <div className="hero__image-container">
              <div className="hero__image-reveal-mask">
                <img
                  key={currentIdx}
                  src={images[currentIdx].image}
                  className="hero__image"
                  alt={images[currentIdx].alt}
                />
              </div>
            </div>
          </div>

          <div className="hero__footer">
            <div className="hero__scroll">
              <button
                type="button"
                className="hero__scroll-btn"
                aria-label="Scroll down"
              >
                <div className="hero__scroll-circle">
                  <svg viewBox="0 0 108 108" fill="none">
                    <line
                      x1="54"
                      y1="36"
                      x2="54"
                      y2="70"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <path
                      d="M68 57L54 71L40 57"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </button>
            </div>

            <div className="hero__actions">
              <button type="button" className="hero__btn hero__btn--primary">
                LEARN MORE
                <img src={learnMoreButton} className="hero__btn-arrow" />
              </button>

              <button type="button" className="hero__btn hero__btn--link">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
