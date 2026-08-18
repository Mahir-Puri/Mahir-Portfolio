export default function Footer(){
  return (
    <footer className="print:hidden px-4 md:px-8 py-10 text-center text-white/50 text-sm space-y-1">
      <div>MAHIRFLIX · Mahir Puri, {new Date().getFullYear()}</div>
      <div className="text-white/25 text-xs font-mono">
        build {__BUILD_COMMIT__} · {__BUILD_DATE__}
      </div>
    </footer>
  )
}
