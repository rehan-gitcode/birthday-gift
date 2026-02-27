"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { ArrowRight } from "lucide-react";

export default function MessageScreen({ onNext }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="px-4 md:px-6 py-10 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow mb-6 leading-tight"
            >
                A Special Message From My Heart💘
            </motion.h2>

            <div className="mx-auto relative w-full max-w-3xl flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className=" h-auto max-w-xl bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 rounded-2xl shadow-lg p-4 md:p-6 text-center"
                >
                    <p className="text-[#301733] text-base md:text-lg leading-relaxed overflow-y-auto max-h-[400px] pr-2">
                        Hiiiiieee 🤍 <br />

                        If there was a way to pause time,
                        I would pause it on every moment you smiled 🤌🏻🫶🏻 <br />

                        Out of all the people in this world,
                        I’m just grateful that somehow our paths crossed 💞 <br />

                        You don’t even realize what you are.
                        You think you’re just trying your best…
                        but to me, you are comfort, strength, softness, and home — all at once 🙇🏻💗 <br />

                        In a world that feels loud and heavy,
                        you are the quiet place I rest my heart in ✨🫶🏻 <br />

                        I don’t know what the future holds.
                        I don’t know where life will take us.
                        But I know this —
                        knowing you has changed me in the most beautiful way 🫶🏻🫶🏻🫠 <br />

                        If you ever doubt yourself,
                        if you ever feel small,
                        I wish you could see yourself through my eyes —
                        you would never question your worth again 💅🏻💅🏻 <br />

                        You are not just important to me.
                        You are a chapter I never want to end 🤭🫣  <br />

                        And today, on your birthday,
                        I just want you to know —
                        my prayers for you are sincere,
                        my respect for you is real,
                        and what I feel for you…
                        comes from the deepest, quietest part of my heart 💗 <br />

                        Happyyyy Birthdayyyyy 🤍
                        You deserve a love as pure as the one you give✨
                    </p>
                </motion.div>
            </div>
        </div>
    )
}