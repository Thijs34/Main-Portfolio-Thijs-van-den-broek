import React from "react";
import { AnimatePresence, motion } from "framer-motion";

type LightboxImage = {
  src: string;
  label?: string;
};

type ImageLightboxProps = {
  image: LightboxImage | null;
  onClose: () => void;
};

const ImageLightbox = ({ image, onClose }: ImageLightboxProps) => {
  return (
    <AnimatePresence>
      {image ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.figure
            className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#050714]"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
          >
            <img
              src={image.src}
              alt={image.label ?? "Expanded media"}
              className="h-full w-full object-contain"
            />
            {image.label ? (
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-6 py-4 text-sm tracking-wide text-white">
                {image.label}
              </figcaption>
            ) : null}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/80 transition hover:bg-black"
            >
              Close
            </button>
          </motion.figure>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default ImageLightbox;
