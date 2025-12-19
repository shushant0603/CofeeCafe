import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="relative w-full h-[70vh] md:h-[50vh] flex items-center text-white overflow-hidden"
      style={{
        backgroundImage: "url(fotter_image.png)", // <-- tum yahan image link daalna
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* GRADIENT OVERLAY (same as old background color) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(68,40,8,0.85) 0%, rgba(109,64,13,0.85) 100%)",
        }}
      ></div>

      {/* CONTENT */}
      <div
        className="
          relative z-10
          flex flex-row flex-wrap
          justify-between
          gap-8
          px-6 md:px-20
          w-full
        "
      >
        {/* Brand */}
        <div className="max-w-xs">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4"
            style={{ fontFamily: "Clicker Script" }}
          >
            Bean Scene
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          {/* Social Icons */}
          <div className="flex flex-row gap-3">
            <Icon color="text-blue-600"><FaFacebook /></Icon>
            <Icon color="text-pink-600"><FaInstagram /></Icon>
            <Icon color="text-red-600"><FaYoutube /></Icon>
            <Icon color="text-blue-400"><FaTwitter /></Icon>
          </div>
        </div>

        {/* About */}
        <Column
          title="About"
          items={["Menu", "Features", "News & Blogs", "Help & Support"]}
        />

        {/* Company */}
        <Column
          title="Company"
          items={["How we work", "Terms of service", "Pricing", "FAQ"]}
        />

        {/* Contact */}
        <div className="min-w-[200px]">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">
            Contact Us
          </h2>
          <ul className="space-y-2 text-sm sm:text-base md:text-lg lg:text-xl">
            <li>Bangalore, India</li>
            <li>+1 202-918-2132</li>
            <li>beanscene@mail.com</li>
            <li>www.beanscene.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

/* ---------- Helpers ---------- */

const Icon = ({ children, color }) => (
  <div
    className={`
      w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12
      flex items-center justify-center
      bg-white rounded-full
      ${color}
      hover:bg-yellow-400
      transition
    `}
  >
    <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
      {children}
    </span>
  </div>
);

const Column = ({ title, items }) => (
  <div className="min-w-[150px]">
    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">
      {title}
    </h2>
    <ul className="space-y-2 text-sm sm:text-base md:text-lg lg:text-xl">
      {items.map((item) => (
        <li
          key={item}
          className="hover:text-yellow-400 cursor-pointer transition"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
