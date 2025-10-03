import { motion } from 'framer-motion'

export default function Profile(){
  return (
    <section id="profile" className="px-4 md:px-8 mt-14">
      <div className="rounded-2xl border border-white/10 neu-surface p-6 md:p-10 grid md:grid-cols-[200px_1fr] gap-6">
        <motion.div initial={{opacity:0, y:6}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="flex md:block">
          <img
            src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
            alt="Profile"
            className="h-24 w-24 md:h-40 md:w-40 rounded-xl object-cover ring-1 ring-white/10 shadow-soft animate-float"
          />
        </motion.div>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="space-y-3">
          <h2 className="text-2xl font-extrabold">About Me</h2>
          <p className="text-white/80">
            I’m Mahir — a Software Engineering student at the University of Victoria who loves building things that solve real problems.
            I play drums, guitar, squash and cricket, write poems, and tinker with Python, Java, and C. I'm currently expanding my skills in cybersecurity and full-stack systems.
          </p>
          <ul className="text-white/70 text-sm list-disc pl-5">
            <li>Member of CyberSecurity Club @ UVIC</li>
            <li>Member of Satellite Design Club @ UVIC</li>
            <li>There's more to life than engineering!</li>
            <li>Love Drumming and playing Guitar</li>
            <li>Believe in giving back to society.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
