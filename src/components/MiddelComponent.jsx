import React from "react";
import { FaReact, FaPython, FaJava, FaNodeJs } from "react-icons/fa";
import { SiDjango, SiMysql, SiDocker, SiTensorflow,  SiPytorch } from "react-icons/si";
import Chatbot from "../chatbot/Chatbot";

const MiddleComponent = () => {
  return (
    <div className="w-full h-full py-20 px-6 flex items-center justify-center">
      
      <div className="w-full max-w-6xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Skills Grid */}
        <div className="w-full md:w-1/2 grid grid-cols-3 sm:grid-cols-4 gap-6">
          
          {[
            { icon: <FaReact />, label: "React" },
            { icon: <FaPython />, label: "Python" },
            { icon: <FaJava />, label: "Java" },
            { icon: <FaNodeJs />, label: "Node.js" },
            { icon: <SiDjango />, label: "Django" },
            { icon: <SiMysql />, label: "MySQL" },
            { icon: <SiDocker />, label: "Docker" },
            { icon: <SiTensorflow />, label: "TensorFlow" },
            // { icon: <SiKafka />, label: "Kafka" },
            { icon: <SiPytorch />, label: "PyTorch" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 bg-white/20 p-4 rounded-2xl shadow-lg border border-white/30 cursor-pointer hover:bg-white/30 hover:scale-110 transition-all duration-300"
            >
              <div className="text-white text-4xl">{item.icon}</div>
              <p className="text-white text-sm font-medium">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Right 3D Model Placeholder */}
        <div className="w-full md:w-1/2 flex justify-center items-center ">
          <div className=" md:w-[350px] md:h-[350px]  rounded-3xl  shadow-lg flex items-center justify-center text-white text-lg ">
           <Chatbot/>
          </div>
        </div>

      </div>

    </div>
  );
};

export default MiddleComponent;
