import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useRef, useEffect } from "react";
import { i } from "framer-motion/client";

const Chatbot = () => {
    const [messages, setMessages] = useState([
        { from: "bot", text: "Hi! How can I help you today?" },
    ]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null);
    const firstRender = useRef(true);
    const Apkey=import.meta.env.VITE_GEMINI_KEY

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;   // ❌ Skip scroll on first page load
        }
        scrollToBottom(); // ✔ Scroll only after user sends message
    }, [messages]);



    const WEBSITE_KNOWLEDGE = `
You are a chatbot for Atish Chavan’s portfolio website.

Only answer based on the information given below:

ABOUT ME:
- I am a Junior Data Engineer with experience in SQL, Python, Docker, Vue.js, Django, and React.
- I work on face recognition, YOLO, Kafka integration, Databricks PySpark, and more.

SERVICES I OFFER:
- Web development (React, Vue, Node, Django)
- Data Engineering (Snowflake, SQL, ETL, Airflow)
- AI/ML model building (OpenCV, DeepFace, YOLO)

PROJECTS:
// Sample project data for the showcase
export const projectsData = [
    {
        id: 1,
        title: "Shopper",
        description: "E-commers Website",
        technologies: ["React", "bootsTrap CSS"],
        image: "https://portfolio-atish.netlify.app/static/media/Shoper-head.e2298f0d2b274a76605d.png",
        githubUrl: "https://github.com/Attu001/SHOPPER",
        liveUrl: "https://shopper-explore-the-collection.netlify.app/",
        category: "Web App",
        status: "Completed"
    },
    {
        id: 2,
        title: "Tomato",
        description: "The Food Ordering Website Tomato is a modern web application designed to provide a seamless food ordering experience.",
        technologies: ["Vue.js", "react.js", "CSS"],
        image: "https://portfolio-atish.netlify.app/static/media/Tomato-head.0358a517be42bc0b5788.png",
        githubUrl: "https://github.com/Attu001/Tomato",
        liveUrl: "https://tomato-the-food-ordering-website.netlify.app/",
        category: "Web App",
        status: "Completed"
    },
    {
        id: 3,
        title: "Harborlight",
        description: "Hotel website Front pages.",
        technologies: ["JavaScript", "css", "Bootstrap"],
        image: "https://portfolio-atish.netlify.app/static/media/Harborlight-head.eb655463168e665a8e9d.png",
        githubUrl: "https://github.com/Attu001/HarborLights",
        liveUrl: "https://attu001.github.io/HarborLights/",
        category: "Dashboard",
        status: "Completed"
    },
    {
        id: 4,
        title: "RebootDash",
        description: "A responsive portfolio website showcasing creative work with smooth animations and modern design.",
        technologies: ["HTML5", "CSS3", "JavaScript", "node.js"],
        image: "data:image/jpeg;base64,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",
        githubUrl: "",
        liveUrl: "https://portfolio-demo.com",
        category: "Website",
        status: "Completed"
    },
    {
        id: 5,
        title: "Chat Application",
        description: "Real-time chat application with multiple rooms, file sharing, and user authentication.",
        technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240223113231/Online-Chat-Application.webp",
        githubUrl: "https://github.com/username/chat-app",
        liveUrl: "https://chat-demo.com",
        category: "Web App",
        status: "In Progress"
    },

];

export const categories = ["All", "Dashboard", "Website"];
IMPORTANT RULES:
- If a user asks anything outside my portfolio / skills / services, reply:
  "I am a portfolio assistant and I can only answer questions related to Atish Chavan’s work or skills."
- Never talk about general topics like politics, movies, history, science, etc.
- Keep answers short, clear and professional.
`;


    const genAI = new GoogleGenerativeAI(Apkey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const handleSend = async () => {
        if (!input.trim()) return;

        // Add user message
        const userMessage = input;
        setMessages((prev) => [...prev, { from: "user", text: userMessage }]);
        setInput("");

        // Call Gemini AI
        try {
            const prompt = `
      ${WEBSITE_KNOWLEDGE}

      USER QUESTION: ${userMessage}

      IMPORTANT:
      - If user question is not related to the website info above, politely decline.
      - Never hallucinate or make up information.
      - you cal also make casual conversation like hello,hi,how are you
    `;
            const result = await model.generateContent(prompt);
            const reply = result.response.text();

            setMessages((prev) => [...prev, { from: "bot", text: reply }]);

        } catch (err) {
            console.error(err);
            setMessages((prev) => [
                ...prev,
                { from: "bot", text: "Oops! Something went wrong." },
            ]);
        }
    };

    return (
        <div className="w-[300px] lg:w-full h-full  flex items-center justify-center z-50">
            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl flex flex-col overflow-hidden border border-gray-200 ">

                {/* Header */}
                <div className="bg-indigo-600 text-white p-4 font-semibold text-lg">
                    Chatbot
                </div>

                {/* Chat Screen */}
                <div className="flex-1 p-4 overflow-y-auto hide-scrollbar space-y-3  max-h-[200px]   ">
                    {messages.map((msg, i) => (
                        <div
                            key={i}
                            className={`max-w-[80%] px-4 py-2 rounded-xl ${msg.from === "user"
                                ? "bg-indigo-500 text-white self-end ml-auto"
                                : "bg-white text-gray-800 shadow"
                                }`}
                        >
                            {msg.text}
                        </div>
                    ))}
                    <div ref={messagesEndRef}></div>
                </div>

                {/* Input */}
                <div className="p-3 w-full flex-col flex gap-2 bg-white border-t border-gray-200 ">
                    <input
                        type="text"
                        className="flex-1 px-4 py-2 rounded-xl text-black border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
                        placeholder="Type your message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    />

                    <button
                        onClick={handleSend}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
                    >
                        Send
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Chatbot;
