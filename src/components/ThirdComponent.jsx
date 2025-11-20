import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ThirdComponent = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="flex flex-col md:flex-row w-full justify-center ">
                {/* LEFT SIDE - Your 3D Model Area */}
                <div className=" h-full flex items-center justify-center text-center  ">
                    {/* <div className="w-[350px] h-[350px] bg-gray-800/40 rounded-3xl border border-gray-700 backdrop-blur-xl shadow-2xl flex items-center justify-center"> */}

                    <img
                        src="https://srbpwyxjbrbxzlerdust.supabase.co/storage/v1/object/public/portfolio-images/3Dmodels/newone.png"
                        alt="no"
                        className="max-w-[350px] max-h-[350px]"
                    />

                    {/* </div> */}
                </div>

                <div className=" flex items-center justify-center gap-20 p-6 ">

                    <div>
                        {/* RIGHT SIDE - Animated Social Panel */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="w-full flex flex-col gap-6 text-white "
                        >
                            <h1 className="text-4xl font-bold tracking-wide">Connect With Me</h1>
                            <p className="text-gray-400 max-w-md leading-relaxed">
                                Stay connected across my social platforms. Feel free to explore my
                                work, message me, or follow for updates!
                            </p>


                            {/* SOCIAL ICONS */}
                            <div className="flex gap-6 mt-4">
                                {[
                                    { icon: <FaLinkedin size={30} />, color: "#0A66C2", link: "www.linkedin.com/in/atish-chavan-944460270" },
                                    { icon: <FaGithub size={30} />, color: "#f5f5f5", link: "https://github.com/Attu001" },
                                    // { icon: <FaInstagram size={30} />, color: "#E4405F" },
                                    { icon: <FaTwitter size={30} />, color: "#1DA1F2" },
                                ].map((item, index) => (
                                    <motion.a
                                        key={index}
                                        whileHover={{ y: -6, scale: 1.15 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg cursor-pointer"
                                        style={{ color: item.color }}
                                        href={item.link}
                                    >
                                        {item.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ThirdComponent;
