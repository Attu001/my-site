import { LuLoader } from "react-icons/lu";

const Loader = () => {
    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">

            <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl px-10 py-8 shadow-2xl flex flex-col items-center">

                <LuLoader className="animate-spin text-white text-5xl drop-shadow-lg" />

                <p className="text-white mt-4 text-lg font-medium tracking-wide">
                    Please Wait...
                </p>

            </div>
        </div>
    );
};

export default Loader;
