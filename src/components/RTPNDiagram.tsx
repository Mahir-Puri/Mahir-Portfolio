// A real (if simplified) diagram of RTPN's actual message flow, not decoration.
// Kept as plain SVG: no chart library, renders identically in both themes.

function Node({ x, y, w, h, label, sub, accent }: { x: number; y: number; w: number; h: number; label: string; sub?: string; accent?: boolean }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={8}
        fill="rgba(255,255,255,0.04)"
        stroke={accent ? 'var(--accent)' : 'rgba(255,255,255,0.35)'}
        strokeWidth={1.25}
      />
      <text x={x + w / 2} y={y + h / 2 + (sub ? -3 : 4)} textAnchor="middle" fontSize="11.5" fontWeight={600} fill="#fff">
        {label}
      </text>
      {sub && (
        <text x={x + w / 2} y={y + h / 2 + 12} textAnchor="middle" fontSize="9.5" fill="rgba(255,255,255,0.5)">
          {sub}
        </text>
      )}
    </g>
  )
}

export default function RTPNDiagram() {
  return (
    <div className="rounded-xl border border-white/10 bg-black/30 p-4">
      <svg
        viewBox="0 0 640 420"
        role="img"
        aria-label="Diagram: Institution A and Institution B publish to a Kafka payments topic. A consumer applies retries with backoff, forwarding permanently failed messages to a dead-letter queue. Successful messages reach the Ledger Service, which checks an idempotency key before writing to the PostgreSQL double-entry ledger. A read-only AI operations agent queries the ledger without writing to it."
        className="w-full h-auto"
      >
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="rgba(255,255,255,0.55)" />
          </marker>
          <marker id="arrow-accent" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--accent)" />
          </marker>
        </defs>

        <Node x={40} y={16} w={150} h={44} label="Institution A" />
        <Node x={450} y={16} w={150} h={44} label="Institution B" />

        <line x1={115} y1={60} x2={280} y2={98} stroke="rgba(255,255,255,0.55)" strokeWidth={1.25} markerEnd="url(#arrow)" />
        <line x1={525} y1={60} x2={360} y2={98} stroke="rgba(255,255,255,0.55)" strokeWidth={1.25} markerEnd="url(#arrow)" />

        <Node x={220} y={100} w={200} h={46} label="Kafka" sub="topic: payments.events" />

        <line x1={320} y1={146} x2={320} y2={178} stroke="rgba(255,255,255,0.55)" strokeWidth={1.25} markerEnd="url(#arrow)" />

        <Node x={220} y={180} w={200} h={46} label="Consumer" sub="retries with backoff" />

        <line x1={420} y1={203} x2={460} y2={203} stroke="var(--accent)" strokeWidth={1.25} strokeDasharray="4 3" markerEnd="url(#arrow-accent)" />
        <text x={440} y={195} textAnchor="middle" fontSize="8.5" fill="var(--accent)">
          after N failures
        </text>
        <Node x={460} y={180} w={150} h={46} label="Dead-letter queue" accent />

        <line x1={320} y1={226} x2={320} y2={258} stroke="rgba(255,255,255,0.55)" strokeWidth={1.25} markerEnd="url(#arrow)" />
        <text x={335} y={245} fontSize="8.5" fill="rgba(255,255,255,0.5)">
          idempotency key check
        </text>

        <Node x={220} y={260} w={200} h={46} label="Ledger Service" sub="Spring Boot" />

        <line x1={320} y1={306} x2={320} y2={338} stroke="rgba(255,255,255,0.55)" strokeWidth={1.25} markerEnd="url(#arrow)" />

        <Node x={195} y={340} w={250} h={44} label="PostgreSQL" sub="double-entry ledger" />

        <line x1={220} y1={283} x2={190} y2={283} stroke="rgba(255,255,255,0.4)" strokeWidth={1.25} strokeDasharray="3 3" markerEnd="url(#arrow)" />
        <Node x={20} y={260} w={170} h={46} label="AI Ops Agent" sub="read-only, no writes" />
      </svg>
      <p className="text-[11px] text-white/40 mt-2 text-center">
        Simplified message flow: publish, consume with retries, dead-letter after N failures, idempotent write, read-only query path.
      </p>
    </div>
  )
}
