import Image from "next/image";
import React from "react";

import { SITE_DATA } from "@/data";

import AboutCarousel from "./components/AboutCarousel";

const About = () => {
  return (
    <div className="flex flex-col w-full ">
      <AboutCarousel />
      <div className="flex flex-col items-center justify-center w-full bg-base text-white p-12">
        <h1 className="text-4xl font-bold">About Us</h1>
        <div className="text-lg mt-4 flex flex-col gap-2 max-w-3xl text-pretty">
          <p className="indent-10">
            Canspan Construction is a construction company located in North
            Vancouver, BC, Canada.
          </p>
          <p className="indent-10">We specialise in</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full bg-base text-white p-12">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <div className="text-lg mt-4 flex flex-col gap-2 max-w-3xl">
          <p>
            For inquiries or project discussions, reach out to us via phone,
            email, or our website. We're eager to assist you with top-notch
            construction services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 font-bold">
            <p>
              <span>Email: </span>
              <a
                className="hover:text-primary transition-all"
                href={`mailto:${SITE_DATA.contact_info.email}`}
              >
                {SITE_DATA.contact_info.email}
              </a>
            </p>
            <p>
              <span>Phone: </span>
              <a
                className="hover:text-primary transition-all"
                href={`tel:${SITE_DATA.contact_info.phone}`}
              >
                {SITE_DATA.contact_info.phone}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
