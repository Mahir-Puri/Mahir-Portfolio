import { useRef } from 'react'
import { motion } from 'framer-motion'
import Card from './Card'

type Item = {
  title: string
  description: string
  cover: string
  slug?: string
  tags?: string[]
}

export default function Carousel({ title, subtitle, items, type }:{title:string, subtitle?:string, items:Item[], type:'project'|'achievement'|'experience'}){
  const scroller = useRef<HTMLDivElement>(null)
  const scrollBy = (dir:number) => {
    scroller.current?.scrollBy({ left: dir * 600, behavior: 'smooth' })
  }
  return (
    <section className="space-y-2">
      <div className="flex items-end justify-between pr-2">
        <div>
          <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
          {subtitle && <p className="text-white/60 text-sm">{subtitle}</p>}
        </div>
        <div className="hidden md:flex gap-2">
          <button onClick={()=>scrollBy(-1)} className="neu-surface px-3 py-1.5 rounded border border-white/10 hover:border-white/30">◀</button>
          <button onClick={()=>scrollBy(1)} className="neu-surface px-3 py-1.5 rounded border border-white/10 hover:border-white/30">▶</button>
        </div>
      </div>

      <motion.div
        initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
        ref={scroller}
        className="flex gap-4 overflow-x-auto snap-x-mandatory pb-3"
      >
        {items.map((it, idx)=> (
          <div key={idx} className="snap-start shrink-0 w-64">
            <Card item={it} type={type} />
          </div>
        ))}
      </motion.div>
    </section>
  )
}
