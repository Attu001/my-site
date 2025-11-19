import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "../slices/loaderSlice";
import Loader from "../components/Loader";
import { setSuccess } from "../slices/successSlice";
import Success from "../components/Success";


const Contact = () => {
    const formRef = useRef();
    const dispatch = useDispatch()
    // const loader = useSelector((state) => state.loader.value);
    const success = useSelector((state) => state.success)
    // console.log(loader)

    const sendEmail = async (e) => {
        e.preventDefault();
        // dispatch(setLoader(true))
         emailjs
            .sendForm(
                "service_tdx9i9e",
                "template_hle75gg",
                formRef.current,
                "jkCHjrFtPVTcjyyL8"
            )
            .then(
                (result) => {
                    // dispatch(setLoader(false))
                    dispatch(setSuccess(true))
                    
                },
                (error) => {                  
                    // dispatch(setLoader(false))
                }
            );
    };

    return (
        <div className="h-screen w-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-6 overflow-auto">
            {/* {
                loader && <Loader />
            } */}
            {
                success && <Success/>
            }
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-10 w-full max-w-2xl">

                <h1 className="text-4xl font-extrabold text-white text-center tracking-wide">
                    Contact Us
                </h1>
                <p className="text-center text-gray-200 mt-2 mb-8">
                    We’d love to hear from you! Fill out the form below.
                </p>

                <form ref={formRef} onSubmit={sendEmail} className="space-y-5">

                    <div>
                        <label className="text-white text-sm">Name</label>
                        <input
                            type="text"
                            name="from_name"
                            required
                            className="w-full mt-1 px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-200 focus:bg-white/30 outline-none focus:ring-2 focus:ring-pink-300"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label className="text-white text-sm">Email</label>
                        <input
                            type="email"
                            name="from_email"
                            required
                            className="w-full mt-1 px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-200 focus:bg-white/30 outline-none focus:ring-2 focus:ring-pink-300"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="text-white text-sm">Message</label>
                        <textarea
                            name="message"
                            required
                            className="w-full mt-1 px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-200 focus:bg-white/30 outline-none focus:ring-2 focus:ring-pink-300"
                            rows="4"
                            placeholder="Write your message..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-white text-indigo-700 font-semibold py-3 rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-300"
                    >
                        Send Message
                    </button>

                </form>
            </div>
        </div>
    );
};

export default Contact;
