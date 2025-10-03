// src/components/Hero.tsx
import { motion } from 'framer-motion'

export default function Hero({ recruiterMode }:{recruiterMode:boolean}){
  return (
    <section className="relative px-4 md:px-8 pt-8">
      <div className="relative rounded-2xl overflow-hidden shadow-soft neu-surface">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
        <div className="relative z-10 grid md:grid-cols-2 gap-6 md:gap-10 p-6 md:p-10">
          <div className="space-y-4 md:space-y-6">
            <motion.h1
              initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
              className="text-3xl md:text-5xl font-extrabold leading-tight"
            >
              {recruiterMode
                ? 'Engineering that ships. Impact you can measure.'
                : 'Streaming my craft — projects, ideas, and momentum.'}
            </motion.h1>
            <p className="text-white/80 max-w-xl">
              Hello, Je m'appelle Mahir Puri. I grew up curious about how things work and even more curious about making them better.
              This is my cinematic portfolio — browse like a streaming app, but it’s all me.
            </p>

            <div className="flex gap-3">
              <a href="#projects" className="shine inline-flex items-center gap-2 bg-[var(--accent)] px-4 py-2 rounded-md font-semibold shadow-glow">
                Start Browsing
              </a>
              <a href="#links" className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-md border border-white/10 hover:border-white/30">
                Quick Links
              </a>
            </div>
          </div>

          <motion.div
            initial={{opacity:0, scale:0.98}} whileInView={{opacity:1, scale:1}} viewport={{once:true}}
            className="aspect-video rounded-xl overflow-hidden border border-white/10 bg-black/50 shine"
            title="Intro image"
          >
            <img
              src="/hero.jpeg"  
              alt="Mahir intro"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
