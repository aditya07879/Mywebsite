"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function SuccessMessage({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="
            fixed 
            top-6 
            left-1/2 
            -translate-x-1/2
            z-50
            w-[90%]
            max-w-md
            rounded-xl
            bg-[#1f2933]
            border border-green-500/40
            px-6 py-4
            shadow-2xl
            backdrop-blur
          "
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">✅</span>
            <p className="text-green-400 text-base font-medium">
              Message sent successfully!
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
