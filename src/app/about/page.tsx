import Image from "next/image";
import React from "react";

import { SITE_DATA } from "@/data";

const About = () => {
  return (
    <div className="flex flex-col w-full ">
      <div className="relative">
        <img
          className="w-full h-2/3 max-h-96 object-cover"
          src="/images/cover1.jpg"
          alt="About Image"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full bg-base text-white p-12">
        <h1 className="text-4xl font-bold">About Us</h1>
        <div className="text-lg mt-4 flex flex-col gap-2 max-w-3xl text-pretty">
          <p className="indent-10">
            Canspan Construction is a construction company located in North
            Vancouver, BC, Canada. We have experience building in the Lower
            Mainland for over 40 years, dealing in all types of construction
            from industrial to residential. We specialize in new residential
            construction and laneway homes.
          </p>
        </div>
        <br />
        <br />
        <h1 className="text-4xl font-bold">Why Us</h1>
        <div className="text-lg mt-4 flex flex-col gap-2 max-w-3xl text-pretty">
          <p className="indent-10">
            We understand that you have a busy schedule and that construction
            can be stressful. When you hire us as your building contractor, you
            deal solely with us to make the process simple and stress free. We
            guide you through the entire process from design to construction. We
            deal with other sub-contractors, engineers, city officials and
            architects on your behalf so you only have one point of contact
            throughout the whole building process.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full bg-base text-white p-12">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <div className="text-lg mt-4 flex flex-col gap-2 max-w-3xl">
          <p>
            For inquiries or project discussions, reach out to us via phone,
            email, or our website.
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
