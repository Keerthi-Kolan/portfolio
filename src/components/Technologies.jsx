import React from "react";
import {
  RiReactjsLine,
  RiJavascriptLine,
  RiGitBranchLine,
} from "react-icons/ri";
import {
  TbBrandRedux,
  TbBrandNextjs,
  TbBrandDjango,
  TbBrandMysql,
} from "react-icons/tb";
import {
  FaNodeJs,
  FaAws,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa6";
import {
  SiMongodb,
  SiOracle,
  SiPostgresql,
  SiNumpy,
  SiPandas,
  SiSpringboot,
  SiTypescript,
  SiCplusplus,
  SiOpencv,
  SiExpress,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { BsDatabaseCheck } from "react-icons/bs";

import { MdOutlineSecurity } from "react-icons/md";

const Section = ({ title, items }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-semibold mb-6 text-center">{title}</h2>
    <div className="flex flex-wrap justify-center gap-6">
      {items.map(({ name, icon }, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center w-32 h-32 rounded-2xl border-4 border-neutral-800 p-4 text-center"
        >
          {icon}
          <span className="mt-2 text-sm">{name}</span>
        </div>
      ))}
    </div>
  </div>
);

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>

      <Section
        title="Programming Languages"
        items={[
          {
            name: "Java",
            icon: <FaJava className="text-5xl text-[#f89820]" />,
          },
          {
            name: "Python",
            icon: <FaPython className="text-5xl text-blue-400" />,
          },
          {
            name: "C++",
            icon: <SiCplusplus className="text-5xl text-blue-500" />,
          },
          {
            name: "JavaScript",
            icon: <RiJavascriptLine className="text-5xl text-yellow-400" />,
          },
          {
            name: "TypeScript",
            icon: <SiTypescript className="text-5xl text-blue-400" />,
          },
          {
            name: "SQL",
            icon: <BsDatabaseCheck className="text-5xl text-teal-300" />,
          },
        ]}
      />

      <Section
        title="Frameworks & Libraries"
        items={[
          {
            name: "React",
            icon: <RiReactjsLine className="text-5xl text-cyan-400" />,
          },
          {
            name: "OpenCV",
            icon: <SiOpencv className="text-5xl text-purple-400" />,
          },
          {
            name: "Django",
            icon: <TbBrandDjango className="text-5xl text-green-500" />,
          },
          {
            name: "Node.js",
            icon: <FaNodeJs className="text-5xl text-green-400" />,
          },
          {
            name: "Express",
            icon: <SiExpress className="text-5xl text-gray-300" />,
          },
          {
            name: "Spring Boot",
            icon: <SiSpringboot className="text-5xl text-green-500" />,
          },
        ]}
      />

      <Section
        title="Databases & Backend"
        items={[
          {
            name: "PostgreSQL",
            icon: <SiPostgresql className="text-5xl text-blue-400" />,
          },
          {
            name: "MySQL",
            icon: <TbBrandMysql className="text-5xl text-[#f29111]" />,
          },
          {
            name: "MongoDB",
            icon: <SiMongodb className="text-5xl text-green-500" />,
          },
          {
            name: "NoSQL",
            icon: <BsDatabaseCheck className="text-5xl text-orange-400" />,
          },
        ]}
      />

      <Section
        title="AWS Services"
        items={[
          { name: "EC2", icon: <FaAws className="text-5xl text-[#ff9900]" /> },
          {
            name: "S3",
            icon: <FaAws className="text-5xl text-[#ff9900]" />,
          },
          {
            name: "Load Balancer",
            icon: <FaAws className="text-5xl text-[#ff9900]" />,
          },
          {
            name: "DynamoDB",
            icon: <FaAws className="text-5xl text-[#ff9900]" />,
          },
          {
            name: "Lambda",
            icon: <FaAws className="text-5xl text-[#ff9900]" />,
          },
          {
            name: "IAM",
            icon: <FaAws className="text-5xl text-[#ff9900]" />,
          },
        ]}
      />

      <Section
        title="Version Control"
        items={[
          {
            name: "Git",
            icon: <FaGitAlt className="text-5xl text-orange-500" />,
          },
          {
            name: "GitHub",
            icon: <FaGithub className="text-5xl text-white" />,
          },
        ]}
      />
    </div>
  );
};

export default Technologies;
