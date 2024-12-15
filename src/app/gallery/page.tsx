import React from "react";

import {
  get_latest_files_from_gallery,
  get_old_files_from_gallery,
} from "@/helpers/gallery";

import GalleryCarousel from "./components/GalleryCarousel";
import PhotoGallery from "./components/PhotoGallery";

const Gallery = async () => {
  async function getLatestGallery() {
    "use server";
    const files = await get_latest_files_from_gallery();
    return files;
  }

  async function getOldGallery() {
    "use server";
    const files = await get_old_files_from_gallery();
    return files;
  }

  const latestGallery = await getLatestGallery();
  const oldGallery = await getOldGallery();
  return (
    <div className="flex flex-col w-full ">
      <GalleryCarousel />
      <div className="flex flex-col mx-auto bg-base text-white p-12 gap-8 sm:w-4/5">
        <div className=" w-full min-h-screen">
          <PhotoGallery photos={latestGallery} />
        </div>
        <br />
        <div className=" w-full min-h-screen">
          <PhotoGallery photos={oldGallery} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
