import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="relative w-full text-white"
      style={{
        backgroundImage: "url(fotter_image.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(68,40,8,0.85), rgba(109,64,13,0.85))",
        }}
      />

      <div className="relative z-10 mx-auto max-w-screen-2xl px-6 py-12">
        {/* TOP */}
        <div className="md:flex md:justify-between mb-10">
          
          {/* BRAND */}
          <div className="mb-8 md:mb-0 max-w-sm">
            <h1
              className="mb-4"
              style={{
                fontFamily: "Clicker Script",
                fontSize: "clamp(2rem,4vw,3.5rem)",
              }}
            >
              Bean Scene
            </h1>

            <p className="text-sm leading-relaxed mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <div className="flex gap-3">
              <Icon><FaFacebook /></Icon>
              <Icon><FaInstagram /></Icon>
              <Icon><FaYoutube /></Icon>
              <Icon><FaTwitter /></Icon>
            </div>
          </div>

          {/* LINKS GRID (FLOWBITE STYLE) */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            
            <FooterColumn
              title="About"
              items={["Menu", "Features", "News & Blogs", "Help & Support"]}
            />

            <FooterColumn
              title="Company"
              items={["How we work", "Terms of service", "Pricing", "FAQ"]}
            />

            <FooterColumn
              title="Contact Us"
              items={[
                "Bangalore, India",
                "+1 202-918-2132",
                "beanscene@mail.com",
                "www.beanscene.com",
              ]}
            />
          </div>
        </div>

        {/* DIVIDER */}
        <hr className="border-white/20 mb-6" />

        {/* BOTTOM BAR */}
        <div className="sm:flex sm:items-center sm:justify-between text-sm">
          <span className="opacity-80">
            © 2025 Bean Scene. All Rights Reserved.
          </span>

          <div className="flex gap-4 mt-4 sm:mt-0">
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
            <FaTwitter />
          </div>
        </div>
      </div>
    </footer>
  );
};

/* ---------- Helpers ---------- */

const FooterColumn = ({ title, items }) => (
  <div>
    <h2 className="mb-4 text-sm font-semibold uppercase">
      {title}
    </h2>
    <ul className="space-y-2 text-sm opacity-90">
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

const Icon = ({ children }) => (
  <div className="w-9 h-9 flex items-center justify-center bg-white text-black rounded-full hover:bg-yellow-400 transition">
    {children}
  </div>
);

export default Footer;
