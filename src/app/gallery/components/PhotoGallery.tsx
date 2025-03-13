"use client";

import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

import GalleryImage from "@/components/Common/GalleryImage";
import { IGalleryImage } from "@/helpers/gallery";

interface PhotoGalleryProps {
  photos: IGalleryImage[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
  // Store the index of the clicked image for lightbox display
  const [index, setIndex] = useState<number>(-1);

  // Map the photos to the format expected by PhotoAlbum
  const mappedPhotos = photos.map((image) => ({
    height: image.height ? image.height / 10 : 100, // Adjust height
    width: image.width ? image.width / 10 : 100, // Adjust width
    src: image.src, // Image source URL
    alt: image.alt, // Image alt text
  }));

  return (
    <>
      {/* PhotoAlbum component to display images in rows */}
      <PhotoAlbum
        photos={mappedPhotos}
        layout="rows"
        spacing={0}
        renderPhoto={GalleryImage}
        defaultContainerWidth={1200}
        sizes={{ size: "calc(100vw - 240px)" }}
        onClick={(e) => setIndex(e.index)} // Set clicked photo index for lightbox
      />

      {/* Lightbox component to display selected image in a modal */}
      <Lightbox
        index={index}
        slides={photos}
        open={index >= 0}
        close={() => setIndex(-1)} // Close lightbox by resetting the index
      />
    </>
  );
};

export default PhotoGallery;
