"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"

export default function Startpage({ onNext }) {

    // useEffect(() => {   
    //     const timer = setTimeout(() => {
    //         onDone?.()
    //     }, 3000)
    //     return () => clearTimeout(timer)
    // }, [onDone])

    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center will-change-transform"
        >
            {/* <motion.div
                className="text-6xl md:text-7xl will-change-transform"
            >
                🎂
            </motion.div> */}
            <motion.div className="relative z-10 left-0 w-full text-center text-3xl md:text-4xl font-semibold text-secondary drop-shadow leading-tight px-4 will-change-transform text-red-400 "
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            >
                 <h1 className="text-pretty text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 drop-shadow leading-tight"
                        style={{
                            filter: "drop-shadow(0 0 20px rgba(255,105,180,0.4))",
                        }}>
                        A Cutiepie was born today, 20 years ago!
                    </h1>
                {/* Happy 21's Birthday, AYSHUU! */}
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="my-4 text-xl md:text-2xl font-semibold text-foreground text-center text-pink-200">
                I have a surprise for you... Are you ready to see it?
            </motion.p>

            <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            >
                <button className="px-6 py-3 mt-6 bg-primary text-white rounded-md shadow-md hover:bg-primary/90 transition bg-violet-600" onClick={() => {
                    onNext?.()
                }}>
                    Yes
                </button>
                <button className="px-6 py-3 mt-6 ml-4 bg-gray-300 text-gray-700 rounded-md shadow-md hover:bg-gray-300/90 transition">
                    No
                </button>
            </motion.div>

        </motion.div>
    )
}
















// "use client"

// import { useEffect, useState } from "react"
// import { motion } from "framer-motion"

// export default function LoaderScreen({ onDone }) {
//     const [count, setCount] = useState(3)

//     useEffect(() => {
//         const t = setInterval(() => {
//             setCount((c) => {
//                 if (c <= 1) {
//                     clearInterval(t)
//                     setTimeout(() => onDone?.(), 420)
//                     return 0
//                 }
//                 return c - 1
//             })
//         }, 900)
//         return () => clearInterval(t)
//     }, [])

//     return (
//         <div className="w-full grid place-items-center">
//             <div className="relative">
//                 <div className="spinner">
//                     <div className="spinner1"></div>
//                 </div>

//                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
//                     <motion.div
//                         key={count}
//                         initial={{ scale: 0.3, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         className="text-[110px] md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-violet-400 drop-shadow-[0_0_30px_rgba(236,72,153,0.25)] p-0.5 pt-7"
//                     >
//                         {count}
//                     </motion.div>
//                 </div>
//             </div>
//             <motion.h1
//                 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-fuchsia-400 mt-14 text-center py-1.5"
//                 animate={{ opacity: [0.8, 1, 0.8] }}
//                 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//             >
//                 Crafting your special moment...
//             </motion.h1>
//         </div>
//     )
// }
