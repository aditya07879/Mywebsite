"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Modern, fast, and responsive websites built to scale.",
    href: "",
  },
  {
    num: "02",
    title: "API & Backend Services",
    description: "Reliable backend systems with clean architecture.",
    href: "",
  },
  {
    num: "03",
    title: "Performance & Optimization",
    description: "Improving speed, SEO, and overall user experience.",
    href: "",
  },
];

function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="mx-auto w-full max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="  w-[70px] h-[70px] rounded-full bg-background border border-border flex justify-center items-center transition-all duration-500 hover:bg-accent hover:-rotate-45  " >
                    <BsArrowDownRight
                      className=" text-3xl text-foreground transition-colors duration-500 group-hover:text-primary " />
                  </Link>
                </div>
                <h2
                  className=" text-[42px] font-bold leading-none text-foreground transition-colors duration-500 hover:text-accent">
                  {service.title}
                </h2>
                <p className="text-white/100">{service.description}</p>
                <div className="border-b border-black/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
