import { motion } from "framer-motion";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";

const Projects = () => {
  const data = [
    {
      id: 1,
      title: `Dragon News`,
      image: `/projects/dragon_news.png`,
      description: `Dragon News is a web-based news platform that fetch data from ChatGPT api and shows the news in the website. I have also implemented the authentication process using Firebase. After authentication, user can show the news in details in the private route.`,
      link: `https://dragon-news-6715f.web.app/`,
      github: `https://github.com/shadidniloy1/Dragon-News-WebApp`,
    },
    {
      id: 2,
      title: `Cara Shoping`,
      image: `/projects/cara.png`,
      description: `Cara Shopping is an e-commerce website to sell the garments product to the customer. Cart system is added in the website. User can show and buy the products and also save them in cart`,
      link: `https://cara-shopping-chi.vercel.app/`,
      github: `https://github.com/shadidniloy1/cara-shopping-website`,
    },
    {
      id: 3,
      title: `Weather App`,
      image: `/projects/weather.png`,
      description: `Weathering with API is a web applicaiton to show the current temperature of different cities of the world. It also shows both daily and hourly forecast of the city.`,
      link: `https://weathering-with-api.vercel.app/`,
      github: `https://github.com/shadidniloy1/weather-app-using-api`,
    },
    {
      id: 4,
      title: `PaperLabs`,
      image: `/projects/paperlabs.png`,
      description: `PaperLabs is a web-based educational platform designed to simplify the process of submitting and evaluating laboratory reports for students and teachers. As the front-end developer and product designer, I built the application using React, Node.js, and GitHub integration.`,
      link: ``,
      github: ``,
    },
    {
      id: 5,
      title: `Modern Kitchenware`,
      image: `/projects/kitchenware.png`,
      description: `Modern Kitchenware is a kitchen shop website which is used in online marketing. After clicking every section of products, items will be added on cart. If you use promo code SELL200 and click on apply, you will get 20% discount.`,
      link: `https://shadidsummersale.surge.sh/`,
      github: `https://github.com/shadidniloy1/summer-sale`,
    },
  ];

  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`${className} !left-2 z-10`} onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-600 hover:text-blue-800 transition"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`${className} !right-2 z-10`} onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-600 hover:text-blue-800 transition"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Projects
        </h2>

        <Slider {...settings}>
          {data.map((d, index) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="px-3 h-125"
            >
              <div className="bg-white shadow-lg rounded-2xl p-6 h-full flex flex-col">
                {/* Fixed height for image */}
                <div className="w-full h-75 flex justify-center items-center overflow-hidden">
                  <img
                    className="object-cover h-full w-full rounded-md"
                    src={d.image}
                    alt={d.title}
                  />
                </div>

                {/* Info pushed to bottom */}
                <div className="flex flex-col flex-grow mt-4">
                  <h3 className="text-xl font-semibold mb-3">{d.title}</h3>
                  <p className="text-gray-600 flex-grow">{d.description}</p>
                  <a
                    href={d.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-blue-600 hover:underline"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
