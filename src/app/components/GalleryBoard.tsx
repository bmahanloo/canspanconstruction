"use client";
import React from "react";
import PhotoAlbum from "react-photo-album";
import { useMediaQuery } from "react-responsive";

import GalleryImage from "@/components/Common/GalleryImage";
import { IGalleryImage } from "@/helpers/gallery";

const GalleryBoard = ({ gallery }: { gallery: IGalleryImage[] }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <PhotoAlbum
      photos={gallery.map((image) => ({
        height: image.height ? image.height / (isMobile ? 500 : 100) : 1,
        width: image.width ? image.width / (isMobile ? 500 : 100) : 1,
        src: image.src,
        alt: image.alt,
      }))}
      layout="rows"
      spacing={0}
      renderPhoto={GalleryImage}
      defaultContainerWidth={1200}
      sizes={{ size: "calc(100vw - 240px)" }}
    />
  );
};

export default GalleryBoard;
