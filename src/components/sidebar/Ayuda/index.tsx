import { motion } from "framer-motion";

const AyudaPage = () => {
    return (
        <div className="flex flex-col h-full bg-white w-full pb-20 rounded-r-2xl rounded-b-2xl shadow-lg p-4">

            <span>
                Este proyecto se encuentra en fase de desarrollo.
            </span>

            <br />

            <span>
                Todas las dudas, sugerencias e indicaciones lo puedes dejar como un issue en el GitHub de este repositorio

            </span><br />
            <a className="text-blue-500 italic" href="https://github.com/ebercalderon/projectFrontend">
                https://github.com/ebercalderon/projectFrontend
            </a><br />
            <a className="text-blue-500 italic" href="https://github.com/ebercalderon/projectBackend">
                https://github.com/ebercalderon/projectBackend
            </a>
            <div className="flex w-full h-full justify-center items-center"
            >
                <motion.div className="flex flex-col w-14 h-14 bg-cyan-500"
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                        transition: { ease: "linear", duration: 3, repeat: Infinity }
                    }}
                />

            </div>
        </div>
    );
}

export default AyudaPage;