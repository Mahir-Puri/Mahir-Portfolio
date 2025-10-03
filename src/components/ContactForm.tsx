import { useState } from "react"

// Your Formspree endpoint
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgvnypon"

export default function ContactForm() {
  const [state, setState] = useState<{ loading: boolean; sent: boolean; error?: string }>({
    loading: false,
    sent: false,
  })

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // Honeypot (hidden field). If bots fill it, do nothing.
    if ((data.get("company") as string)?.trim()) return

    setState({ loading: true, sent: false })
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      })
      if (!res.ok) throw new Error("Failed to send")
      setState({ loading: false, sent: true })
      form.reset()
    } catch (err: any) {
      setState({ loading: false, sent: false, error: err?.message || "Error" })
    }
  }

  if (state.sent) return <div className="text-sm text-green-300">Thanks! I’ll get back to you soon.</div>

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      {/* honeypot */}
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
      <input required name="name" placeholder="Your Name" className="w-full bg-black/40 border border-white/10 rounded px-3 py-2" />
      <input required name="email" type="email" placeholder="Email" className="w-full bg-black/40 border border-white/10 rounded px-3 py-2" />
      <textarea required name="message" placeholder="Message" className="w-full bg-black/40 border border-white/10 rounded px-3 py-2 h-24" />
      <button disabled={state.loading} className="px-4 py-2 rounded bg-[var(--accent)] text-white font-semibold border border-white/10 hover:shadow-glow disabled:opacity-70">
        {state.loading ? "Sending..." : "Send"}
      </button>
      {state.error && <div className="text-sm text-red-300">{state.error}</div>}
    </form>
  )
}
