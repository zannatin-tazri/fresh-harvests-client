import React from 'react';
import person1 from '../../assets/person1.avif';
import person2 from '../../assets/person2.avif';
import person3 from '../../assets/person3.avif';

const testimonialsData = [
  {
    name: 'Jane Doe',
    title: 'Professional chef',
    quote:
      "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.",
    image: person1,
  },
  {
    name: 'John Smith',
    title: 'Food Blogger',
    quote:
      "Fresh Harvest never disappoints! Their fruits are top-notch and perfectly ripe every time. I recommend them to everyone who values freshness and taste.",
    image: person2,
  },
  {
    name: 'Emily Clark',
    title: 'Nutritionist',
    quote:
      "Their selection is amazing and I love how sustainable their practices are. It’s my favorite service for healthy living.",
    image: person3,
  },
];

const Testimonials = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <span className="text-sm font-semibold text-green-600 bg-green-100 px-4 py-1 rounded-full">
          Testimonial
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mt-3">
          What Our Customers Say
        </h2>
        <p className="text-sm md:text-base text-gray-500 mt-2 max-w-md mx-auto">
          Don’t just take our word for it—here’s what some of our customers have to say about their experience with Fresh Harvest:
        </p>
      </div>

    
      <div className="carousel w-full rounded-lg">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            id={`slide${index}`}
            className="carousel-item flex flex-col md:flex-row items-center gap-8 w-full px-6 md:px-12 py-8"
          >
           
            <div className="flex-shrink-0">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-64 h-64 md:w-48 md:h-48 rounded-full object-cover shadow-md"
              />
            </div>

           
            <div className="bg-gray-100 p-6 rounded-xl max-w-2xl">
              <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">
                “{testimonial.quote}”
              </p>
              <p className="font-semibold text-[#1E1E1E] text-sm md:text-base">
                {testimonial.name} <span className="text-gray-500">– {testimonial.title}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

     
      <div className="flex justify-center gap-2 mt-6">
        {testimonialsData.map((_, index) => (
          <a
            key={index}
            href={`#slide${index}`}
            className={`w-3 h-3 rounded-full ${
              index === 0 ? 'bg-green-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
