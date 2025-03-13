"use client";
import Image from "next/image";
import React from "react";
import { RenderPhotoProps } from "react-photo-album";

const GalleryImage = ({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) => {
  return (
    <div
      style={{ ...wrapperStyle }}
      className="relative overflow-hidden border-[1px] border-transparent"
    >
      <Image
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        className={`hover:scale-125 transition-all duration-300 cursor-pointer hover:rotate-2 ${className}`}
        layout="responsive"
        width={600} // Default width (will scale based on container)
        height={400} // Default height (adjust based on the image aspect ratio)
        onClick={onClick}
        objectFit="cover" // Ensures image covers the container area
      />
    </div>
  );
};

export default GalleryImage;
