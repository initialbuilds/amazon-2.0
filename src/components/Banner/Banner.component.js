import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="relative">
      <div className="w-full absolute h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-1" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            loading="lazy"
            src="https://links.papareact.com/gi1"
            alt="Carousel Image"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://links.papareact.com/6ff"
            alt="Carousel Image"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://links.papareact.com/7ma"
            alt="Carousel Image"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
