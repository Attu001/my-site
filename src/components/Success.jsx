import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSuccess } from "../slices/successSlice";
import { LuCircleCheck } from "react-icons/lu";

const Success = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setSuccess(false));
        }, 3000);

        return () => clearTimeout(timer);
    }, [dispatch]);

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex items-center justify-center animate-fadeIn">

            <div className="relative bg-white/20 backdrop-blur-2xl border border-green-300/40 shadow-2xl 
                            rounded-3xl px-12 py-10 flex flex-col items-center text-center 
                            animate-scaleIn">

                <div className="absolute -top-4 -left-4 w-20 h-20 bg-green-400/30 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-green-300/20 rounded-full blur-2xl"></div>

                <LuCircleCheck className="text-green-500 text-6xl drop-shadow-xl" />

                <h2 className="text-white text-2xl font-bold mt-4 drop-shadow">
                    Message Sent!
                </h2>

                <p className="text-green-100 text-sm mt-2 max-w-xs">
                    Thank you for contacting me. I’ll respond soon!
                </p>

                <div className="mt-4 w-16 h-1 bg-green-400 rounded-full animate-bounce"></div>
            </div>
        </div>
    );
};

export default Success;
