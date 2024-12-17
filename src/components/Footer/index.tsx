import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

import { SITE_DATA } from "@/data";

const Footer = async () => {
  return (
    <footer className=" border-t-2 border-secondary text-white py-8 bg-primary ">
      <div className="flex flex-col sm:flex-row px-4 sm:px-12 sm:justify-between items-center">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-16 px-4">
          <div className="flex flex-col gap2">
            <h3 className="text-2xl font-bold">Socials</h3>
            <div className="flex flex-row sm:flex-col flex-wrap gap-2 justify-between">
              {SITE_DATA.social_links.map((social, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <SocialIcon
                    url={social.url}
                    fgColor="#fff"
                    bgColor="transparent"
                    style={{ height: 40, width: 40 }}
                  />

                  <Link
                    href={social.url}
                    className="text-white hidden sm:inline-block "
                  >
                    {social.username}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t-[1px] my-2 border-base" />
      <p className="text-white mt-6 text-center">
        Copyright © 2024 Canspan Construction INC.
      </p>
    </footer>
  );
};

export default Footer;
