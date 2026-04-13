"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { ArrowRight } from "lucide-react"

const message = `Hiiiiee Duaaaa🤍
    
Happy Birthday to my unexpected online Pakistani dost 💗, 
May Allah always bless you and fulfill all your wishes🤍🤍

Wo Developer hi kya jo apni dost ke liye chhoti si website na bana paye — so yes, I made one for you,
Hope you like it 🫶🏻✨

You are amazing and beautiful, just like the weather of this month☁️🌺
It’s been one year of our friendship, and honestly, it still feels unbelievable to me😊
I never thought a bond like this could exist until I met you🤝🫂

We could be offline friends Agar aapke buzurg border ke thoda idhar aa jate , mtlb yrr tehalte hue hi aa jate rajasthan door nhi tha😄
Khair… ab mulaqat shayad Hajj ya Umrah par hi hogi, InshaAllah.(delusion level 100😄)🖤

Thanks to that red-heart GC with the Tom PFP where we met — Neha Kakkar aur Atif Aslam ki deal karte-karte dosti ho gayi… what a deal😂
Our friendship would have ended with that GC but maybe IT'S GOD'S PLAN😉
Thank you for inviting me into your DM — warna main to kabhi himmat nahi karta,i wanted to say but
Socha,ye sochegi " another lafanga detected, dm me bula rha h ,sab ladke same hote hain.”😭😂

I know one day life will take us to different paths. 
But I hope someday you’ll remember that once a friend made a whole website just for you 
maybe you will forget my name bus yaad rahega tha ek “bloody Indian” dost 😄

You are truly a unique and amazing girl. I have seen your beauty, your loyalty, your heart and your level of love. In my eyes, you are a perfect girl.
At the end i want to say that- BUDDYY you are a beautiful soul Just save your love, protect your heart.
Allah will write a beautiful naseeb for you and give behtreen se bhi behtreen so you will forget what you 
lost So Keep sabr,NO sadness,NO blame Just keep smiling ,Because..
"TU HASDI HUI HI SOHNI LAGDI HAI"🌷🌸🌹🌺🌻💐

AND SOOO SOORYYYY for taking your pictures without your permission,maafiiii🙏🏻🙏🏻

Once again — Happyyyy Birthdayyyyy 🤍
Enjoy YOUR DAYYY💗
Love from India🫶🏻✨
You deserve a love as pure as the one you give🌹🌹

`

export default function MessageScreen({ onNext }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(message.slice(0, i));
      i++;
      if (i > message.length) clearInterval(interval);
    }, 25); // typing speed (smaller = faster)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-4 md:px-6 py-10 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow mb-6 leading-tight"
      >
        A Special Message For You🖤
      </motion.h2>

      <div className="mx-auto relative w-full max-w-3xl flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="h-auto max-w-xl bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 rounded-2xl shadow-lg p-4 md:p-6 text-center"
        >
          <p className="text-[#301733] text-base md:text-lg leading-relaxed overflow-y-auto max-h-[400px] pr-2 whitespace-pre-line">
            {displayed}
            <span className="animate-pulse">|</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}



















// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import GradientButton from "../GradientButton"
// import { ArrowRight } from "lucide-react";

// export default function MessageScreen({ onNext }) {
//     const [flipped, setFlipped] = useState(false);

//     return (
//         <div className="px-4 md:px-6 py-10 text-center">
//             <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow mb-6 leading-tight"
//             >
//                 A Special Message From My Heart💘
//             </motion.h2>

//             <div className="mx-auto relative w-full max-w-3xl flex justify-center">
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 1 }}
//                     className=" h-auto max-w-xl bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 rounded-2xl shadow-lg p-4 md:p-6 text-center"
//                 >
//                     <p className="text-[#301733] text-base md:text-lg leading-relaxed overflow-y-auto max-h-[400px] pr-2">
//                         Hiiiiieee 🤍 <br />

//                         If there was a way to pause time,
//                         I would pause it on every moment you smiled 🤌🏻🫶🏻 <br />

//                         Out of all the people in this world,
//                         I’m just grateful that somehow our paths crossed 💞 <br />

//                         You don’t even realize what you are.
//                         You think you’re just trying your best…
//                         but to me, you are comfort, strength, softness, and home — all at once 🙇🏻💗 <br />

//                         In a world that feels loud and heavy,
//                         you are the quiet place I rest my heart in ✨🫶🏻 <br />

//                         I don’t know what the future holds.
//                         I don’t know where life will take us.
//                         But I know this —
//                         knowing you has changed me in the most beautiful way 🫶🏻🫶🏻🫠 <br />

//                         If you ever doubt yourself,
//                         if you ever feel small,
//                         I wish you could see yourself through my eyes —
//                         you would never question your worth again 💅🏻💅🏻 <br />

//                         You are not just important to me.
//                         You are a chapter I never want to end 🤭🫣  <br />

//                         And today, on your birthday,
//                         I just want you to know —
//                         my prayers for you are sincere,
//                         my respect for you is real,
//                         and what I feel for you…
//                         comes from the deepest, quietest part of my heart 💗 <br />

//                         Happyyyy Birthdayyyyy 🤍
//                         You deserve a love as pure as the one you give✨
//                     </p>
//                 </motion.div>
//             </div>
//         </div>
//     )
// }