import React, { useState, useEffect, useRef } from 'react';
import fruitImage from '../../assets/fruits.png';
import bgImage from '../../assets/banner.avif';

const FruitPromoBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Store targetDate in a ref to persist across renders
  const targetDateRef = useRef(new Date().getTime() + 3 * 24 * 60 * 60 * 1000); // 3 days from now

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDateRef.current - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center mt-6 px-4 py-10 lg:py-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse px-8 lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-5 w-full lg:w-1/2">
          <span className="text-sm font-semibold text-green-600 bg-green-100 px-4 py-1 rounded-full inline-block">
            Special Offer
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1E1E1E] leading-tight">
            Seasonal Fruit Bundle
          </h1>

          <p className="text-xl md:text-2xl text-[#1E1E1E] font-medium">
            Discount up to <span className="text-[#FF6F3D] font-bold">80% OFF</span>
          </p>

          {/* Countdown */}
          <div className="flex justify-center lg:justify-start gap-4 mt-6">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hour', value: timeLeft.hours },
              { label: 'Min', value: timeLeft.minutes },
              { label: 'Second', value: timeLeft.seconds },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white text-[#1E1E1E] px-4 py-3 rounded-lg w-20 shadow"
              >
                <div className="text-2xl md:text-3xl font-bold">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-xs font-semibold">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Promo Code */}
          <div className="mt-6 inline-block bg-[#2ECC71] text-white px-6 py-2 rounded-full font-semibold text-lg">
            CODE : <span className="text-yellow-300 font-bold">FRESH28</span>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={fruitImage}
            alt="Seasonal Fruits"
            className="w-[300px] md:w-[400px] lg:w-[550px] xl:w-[600px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default FruitPromoBanner;
