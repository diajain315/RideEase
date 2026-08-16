import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCalendarCheck,
  faLocationDot,
  faShieldHalved,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const ImageSlider = () => {
  const images = useMemo(
    () => [
      "/images/udi3.jpg",
      "/images/udi4.jpg",
      "/images/udi5.jpg",
      "/images/udi6.jpg",
      "/images/udaipurimg.jpg",
      "/images/udaipurimg5.jpg",
      "/images/udaipurimg4.jpg",
    ],
    []
  );

  const stats = [
    { label: "Daily rides", value: "50+" },
    { label: "Average rating", value: "4.8" },
    { label: "Pickup support", value: "24/7" },
  ];

  const highlights = [
    { icon: faShieldHalved, text: "Verified, well-maintained bikes" },
    { icon: faCalendarCheck, text: "Quick booking for city rides" },
    { icon: faLocationDot, text: "Made for exploring Udaipur" },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4500);

    return () => clearInterval(imageInterval);
  }, [images.length]);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-[#fff7f0]">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt="Udaipur city"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#241611]/85 via-[#4b2c21]/70 to-[#fff7f0]/20" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#fff7f0] to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[#FFD9A0] shadow-sm backdrop-blur">
            <FontAwesomeIcon icon={faStar} className="text-[#FFD166]" />
            Padharo Sa, ride Udaipur your way
          </div>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Bike rentals made easy for every Udaipur plan.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-8 text-[#fff4e6] sm:text-lg">
            Pick a scooter or bike, book quickly, and move through lakes,
            markets, palaces, and sunset roads without waiting on transport.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/bikerentsection"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#FFD9A0] px-6 py-3 text-base font-bold text-[#5B2C1D] shadow-lg transition hover:bg-white hover:shadow-xl"
            >
              Book a ride
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md border border-white/35 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              Talk to us
            </Link>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-3 overflow-hidden rounded-lg border border-white/15 bg-white/10 backdrop-blur">
            {stats.map((stat) => (
              <div key={stat.label} className="border-r border-white/10 px-4 py-4 last:border-r-0">
                <p className="text-2xl font-extrabold text-[#FFD9A0]">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase text-[#fff4e6]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="ml-auto hidden w-[360px] rounded-lg border border-white/15 bg-white/90 p-5 shadow-2xl lg:block">
          <img
            src="/images/bikemain1.png"
            alt="Rental bike"
            className="mx-auto h-44 object-contain"
          />
          <div className="mt-4 space-y-3">
            {highlights.map((item) => (
              <div key={item.text} className="flex items-center gap-3 rounded-md bg-[#fff7f0] px-4 py-3 text-[#5a4239]">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#8B4D3A] text-[#FFD9A0]">
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                <span className="text-sm font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
