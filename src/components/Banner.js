import React from "react";

import Image from "../assets/avatar.svg";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center ">
          <div className=" flex-1 text-center font-secondary lg:text-left">
            {/* Text */}
            <h1 className="text-[55px] font-bold leading-[0.8] lg:text-[110px]">
              Chathura <span> Janaka </span>
            </h1>

            <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Front-end Web Developer",
                  2000,
                  "Designer",
                  2000,
                  "IT enthusiast",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className="mb-8 max-w-lg mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
              justo nec odio ultrices mattis. Quisque auctor vel purus a
              convallis. Nulla facilisi. Nam id tincidunt lorem.
            </p>
            <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 ">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>

            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="#">
                 <FaGithub/>
              </a>
              <a href="#">
                 <FaFacebook/>
              </a>
              <a href="#">
                 <FaLinkedin/>
              </a>
            </div>
          </div>
          <div>
            {/* Image */}
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
