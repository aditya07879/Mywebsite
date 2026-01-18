"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaDocker,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiPostgresql, SiGooglegemini, SiNestjs, SiRedis } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

/* ===================== DATA ===================== */

const about = {
  title: "About Me",
  description:
    "I’m a passionate web developer focused on building modern, user-friendly web applications with clean code and practical solutions.",
  info: [
    { fieldName: "Name:", fieldValue: "Aditya Tomar" },
    { fieldName: "Experience:", fieldValue: "Web Developer" },
    { fieldName: "Nationality:", fieldValue: "Indian" },
    { fieldName: "Email:", fieldValue: "adityatomar07879@gmail.com" },
    { fieldName: "X:", fieldValue: "@aditya_07879" },
    { fieldName: "Freelance:", fieldValue: "Available" },
    { fieldName: "Languages:", fieldValue: "English, Hindi" },
  ],
};


const experience = {
  title: "My Experience",
  description: "No corporate working experience till now.",
};

const education = {
  title: "My Education",
  description: "Academic and online learning background.",
  items: [
    {
      Institution: "ITM GOI",
      degree: "Bachelors in Computer Science",
      duration: "4 Years",
    },
    {
      Institution: "Pragati Vidya Peeth",
      degree: "High School",
      duration: "2 Years",
    },
    {
      Institution: "Online Platform",
      degree: "Backend Development",
      duration: "6 Months",
    },
    {
      Institution: "Online Platform",
      degree: "Frontend Development",
      duration: "3 Months",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "Technologies and tools I work with.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3 />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiGooglegemini />, name: "Gemini" },
    { icon: <SiNestjs />, name: "NestJs" },
    { icon: <SiRedis />, name: "Redis" },
  ],
};

/* ===================== COMPONENT ===================== */

export default function Resume() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4, ease: "easeIn" }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          {/* LEFT */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* RIGHT */}
          <div className="w-full min-h-[70vh]">
            {/* EXPERIENCE */}
            <TabsContent value="experience">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
              </div>
            </TabsContent>

            {/* EDUCATION */}
            <TabsContent value="education">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60">
                  {education.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center gap-2"
                      >
                        <span className="text-white/60">{item.duration}</span>
                        <h3 className="text-xl">{item.degree}</h3>
                        <div className="flex items-center gap-2">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                          <p className="text-white/60">{item.Institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* SKILLS */}
            <TabsContent value="skills">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60">
                  {skills.description}
                </p>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl transition-all duration-300 group-hover:text-accent">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* ABOUT */}
            <TabsContent value="about">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60">
                  {about.description}
                </p>

                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]">
                  {about.info.map((item, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
}
