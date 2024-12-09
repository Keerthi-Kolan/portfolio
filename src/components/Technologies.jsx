import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandDjango } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { SiOracle } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { VscAzure } from "react-icons/vsc";
import { SiNumpy } from "react-icons/si";
import { SiPandas } from "react-icons/si";
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl text-[#fffff]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandRedux className="text-7xl text-[#764abc]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandDjango className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-[#30bd5c]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandMysql className="text-7xl text-[#f29111]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiOracle className="text-7xl text-[#c74634]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPostgresql className="text-7xl text-[#599cd3]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaAws className="text-7xl text-[#ff9900]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <VscAzure className="text-7xl text-[#3CCBF4]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPandas className="text-7xl text-[#6ae708]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiNumpy className="text-7xl text-[#4DABCF]" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
