import { motion } from "framer-motion";
import {
  Heart,
  ChevronDown,
  CalendarDays,
  MapPinned,
  Gift,
} from "lucide-react";

const timelineData = [
  {
    title: "The Beginning",
    description:
      "We started as two completely different souls trying to understand each other. Somewhere between the laughs, late-night talks, misunderstandings, and little moments, you slowly became the most important person in my life.",
    icon: <Heart size={22} />,
  },
  {
    title: "Through Every Hardship",
    description:
      "Love was never perfect for us. We had painful days, silence, distance, overthinking, and moments where things felt heavy. But even during those storms, my heart still kept choosing you every single time.",
    icon: <MapPinned size={22} />,
  },
  {
    title: "The Times I Hurt You",
    description:
      "I know there were moments where I broke your heart, made you cry, or made you feel alone when I should have protected your smile instead. I carry guilt for those moments, and I truly am sorry for every tear caused by my mistakes.",
    icon: <Gift size={22} />,
  },
  {
    title: "A Promise For This Year",
    description:
      "This year, I want to love you better than I ever did before. I want to become calmer, more understanding, more patient, and someone who gives you peace instead of pain. No matter what happens, I never want us to stop fighting for our love.",
    icon: <CalendarDays size={22} />,
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1200&auto=format&fit=crop",
];

function FloatingHearts() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            y: "110vh",
            x: Math.random() * window.innerWidth,
            opacity: 0,
            scale: Math.random() * 0.6 + 0.4,
          }}
          animate={{
            y: "-10vh",
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          className="absolute text-pink-400/20"
        >
          <Heart
            fill="currentColor"
            size={Math.random() * 22 + 14}
          />
        </motion.div>
      ))}
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center text-4xl sm:text-5xl md:text-6xl mb-20 bg-gradient-to-r from-pink-200 via-pink-400 to-rose-300 bg-clip-text text-transparent"
      style={{ fontFamily: "Playfair Display" }}
    >
      {children}
    </motion.h2>
  );
}

function App() {
  return (
    <div className="bg-[#0f0f0f] text-white overflow-hidden relative">

      <FloatingHearts />

      {/* HERO SECTION */}

      <section className="hero-bg min-h-screen flex items-center justify-center relative px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center max-w-5xl relative z-10"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="uppercase tracking-[6px] sm:tracking-[8px] text-pink-200 text-xs sm:text-sm mb-6"
          >
            Happy Anniversary
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-5xl sm:text-6xl md:text-8xl font-bold leading-tight bg-gradient-to-r from-white via-pink-200 to-pink-400 bg-clip-text text-transparent"
            style={{ fontFamily: "Playfair Display" }}
          >
            mitali
            <span className="text-pink-400"> & </span>
            venkatesh
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-gray-300 text-base sm:text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto px-2"
          >
            Our journey was never perfect, but maybe that's what made it real.
            We survived misunderstandings, pain, distance, healing, and growth —
            yet somehow our hearts still kept finding their way back to each other.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-10"
          >
            <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full text-pink-100">
              <Heart
                size={18}
                className="fill-pink-400 text-pink-400"
              />
              Together Since May 27, 2025
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 14, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <ChevronDown size={38} className="text-pink-300" />
        </motion.div>
      </section>

      {/* TIMELINE */}

      <section className="py-24 px-6 md:px-20 relative z-10">
        <div className="max-w-6xl mx-auto">

          <SectionTitle>
            Our Journey
          </SectionTitle>

          <div className="relative">

            <div className="absolute left-5 md:left-1/2 top-0 w-[2px] h-full timeline-line transform md:-translate-x-1/2"></div>

            <div className="space-y-20">

              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -100 : 100,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    index % 2 === 0
                      ? "md:flex-row-reverse"
                      : ""
                  }`}
                >

                  <div className="md:w-1/2"></div>

                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center shadow-lg shadow-pink-500/40">
                    {item.icon}
                  </div>

                  <motion.div
                    whileHover={{
                      y: -6,
                    }}
                    className="ml-16 md:ml-0 md:w-1/2"
                  >
                    <div className="glass-card rounded-3xl p-6 sm:p-8">

                      {index === 0 && (
                        <p className="text-pink-300 mb-2">
                          May 27, 2025
                        </p>
                      )}

                      <h3 className="text-2xl font-semibold mb-4">
                        {item.title}
                      </h3>

                      <p className="text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>

                </motion.div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}

      <section className="py-24 px-6 md:px-20 relative z-10">

        <SectionTitle>
          Beautiful Memories
        </SectionTitle>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 max-w-7xl mx-auto">

          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                rotate: index % 2 === 0 ? 1 : -1,
              }}
              className="overflow-hidden rounded-3xl"
            >
              <img
                src={image}
                alt="Couple Memory"
                className="w-full object-cover rounded-3xl hover:brightness-110 transition duration-500"
              />
            </motion.div>
          ))}

        </div>
      </section>

      {/* LOVE LETTER */}

      <section className="py-24 px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          whileHover={{
            y: -4,
          }}
          className="max-w-4xl mx-auto glass-card rounded-[40px] p-8 sm:p-10 md:p-16 text-center"
        >

          <Heart
            className="mx-auto text-pink-400 mb-8"
            size={50}
          />

          <h2
            className="text-4xl sm:text-5xl md:text-6xl mb-10 bg-gradient-to-r from-pink-200 to-pink-400 bg-clip-text text-transparent"
            style={{ fontFamily: "Playfair Display" }}
          >
            To My Forever Love
          </h2>

          <p
            className="text-xl sm:text-2xl md:text-3xl text-pink-100 leading-relaxed"
            style={{ fontFamily: "Great Vibes" }}
          >
            I know I have not always been the best version of myself.
            There were times I hurt you, misunderstood you, or made your heart heavy,
            and I will always regret those moments deeply.

            But even after everything, thank you for still holding my hand through all the chaos.
            Thank you for loving me when I was difficult to love.

            This year, I promise to become better for you,
            to protect your heart more carefully,
            and to love you in the way you truly deserve.
          </p>

        </motion.div>
      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 py-10 text-center text-gray-400 relative z-10">
        <p className="flex items-center justify-center gap-2 flex-wrap px-4">
          Made with
          <Heart size={18} className="text-pink-400 fill-pink-400" />
          for forever memories
        </p>
      </footer>

    </div>
  );
}

export default App;