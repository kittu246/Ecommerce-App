
import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div className="w-full">

      {/* About Us Heading */}
      <div className="text-center pt-10 pb-8">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={assets.about_img}
              alt="About Forever"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 text-gray-600 leading-7">

            <p className="mb-6">
              Forever was born out of a passion for innovation and a desire
              to revolutionize the way people shop online. Our journey began
              with a simple idea: to provide a platform where customers can
              easily discover, explore, and purchase a wide range of products
              from the comfort of their homes.
            </p>

            <p className="mb-8">
              Since our inception, we've worked tirelessly to curate a diverse
              selection of high-quality products that cater to every taste and
              preference. From fashion and beauty to electronics and home
              essentials, we offer an extensive collection sourced from
              trusted brands and suppliers.
            </p>

            {/* Mission */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              OUR MISSION
            </h2>

            <p>
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>

          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">

        <div className="text-center mb-10">
          <Title text1={"WHY"} text2={"CHOOSE US"} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

          {/* Quality */}
          <div className="border border-gray-200 p-8 lg:p-10">
            <h3 className="font-semibold text-gray-800 mb-4">
              Quality Assurance:
            </h3>

            <p className="text-gray-600 leading-7">
              We meticulously select and vet each product to ensure it meets
              our stringent quality standards.
            </p>
          </div>

          {/* Convenience */}
          <div className="border border-gray-200 p-8 lg:p-10">
            <h3 className="font-semibold text-gray-800 mb-4">
              Convenience:
            </h3>

            <p className="text-gray-600 leading-7">
              With our user-friendly interface and hassle-free ordering
              process, shopping has never been easier.
            </p>
          </div>

          {/* Customer Service */}
          <div className="border border-gray-200 p-8 lg:p-10">
            <h3 className="font-semibold text-gray-800 mb-4">
              Exceptional Customer Service:
            </h3>

            <p className="text-gray-600 leading-7">
              Our team of dedicated professionals is here to assist you,
              ensuring your satisfaction is our top priority.
            </p>
          </div>

        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-20">
        <NewsLetterBox />
      </div>

    </div>
  );
};

export default About;
