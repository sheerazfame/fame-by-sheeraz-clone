"use client";

import { useEffect, useRef, useState } from "react";

const NODES = [
  { id: "gpt", label: "GPT-5", role: "Reasoning", x: 80, y: 90 },
  { id: "claude", label: "Claude Opus 4", role: "Long-form copy", x: 80, y: 200 },
  { id: "gemini", label: "Gemini 2", role: "Search distribution", x: 80, y: 310 },
  { id: "grok", label: "Grok 3", role: "Cultural pulse", x: 80, y: 420 },
  { id: "perplexity", label: "Perplexity Pro", role: "Citation research", x: 80, y: 530 },
];

const HUB = { x: 480, y: 310 };

const OUTPUTS = [
  { id: "press", label: "Tier-1 Press", x: 860, y: 110 },
  { id: "social", label: "Social Atomization", x: 860, y: 230 },
  { id: "search", label: "AI Search Win", x: 860, y: 350 },
  { id: "leads", label: "Inbound Leads", x: 860, y: 470 },
  { id: "fame", label: "FAME", x: 860, y: 590 },
];

function useInView<T extends Element>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function AiOrchestrationViz() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section
      ref={ref}
      className="relative bg-[#01060D] py-20 sm:py-28 border-y border-[#D9B26B]/15 overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(241,67,18,0.08), transparent 70%)",
        }}
      />
      <div className="absolute inset-0 bg-grid opacity-[0.07] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[#FFB347] mb-4">
            The FAME AI Orchestrator
          </p>
          <h2
            className="font-[family-name:var(--font-barlow)] font-black italic uppercase text-[#EEEEEE] leading-[0.95] mb-5"
            style={{ fontSize: "clamp(34px, 4.8vw, 64px)" }}
          >
            Five models. <span className="text-gradient-fame">One conductor.</span>
            <br />
            Sheeraz.
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-[#EEEEEE]/55 text-base sm:text-lg">
            Other agencies pick a side in the AI wars. We don&apos;t.
            Each model does what it&apos;s best at — and Sheeraz signs off on
            every output.
          </p>
        </div>

        {/* SVG Diagram */}
        <div
          className="relative panel-luxe rounded-3xl p-5 sm:p-8 lg:p-12 overflow-hidden"
          style={{ minHeight: 460 }}
        >
          <svg
            viewBox="0 0 960 640"
            preserveAspectRatio="xMidYMid meet"
            className="w-full h-auto"
            role="img"
            aria-label="AI orchestration diagram: GPT, Claude, Gemini, Grok and Perplexity flow through Sheeraz into press, social, search, leads and fame."
          >
            <defs>
              <linearGradient id="line-fire" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#F14312" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#FFB347" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#D9B26B" stopOpacity="0.15" />
              </linearGradient>
              <radialGradient id="hub-fill" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="#F14312" stopOpacity="0.95" />
                <stop offset="60%" stopColor="#B83004" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#01060D" stopOpacity="0" />
              </radialGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Lines: input → hub */}
            {NODES.map((n, i) => (
              <path
                key={`in-${n.id}`}
                d={`M ${n.x + 110} ${n.y} C ${(n.x + HUB.x) / 2} ${n.y}, ${(n.x + HUB.x) / 2} ${HUB.y}, ${HUB.x - 80} ${HUB.y}`}
                stroke="url(#line-fire)"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="6 4"
                style={{
                  strokeDashoffset: inView ? 0 : 220,
                  transition: `stroke-dashoffset 1.4s ease-out ${i * 0.12}s`,
                }}
              />
            ))}

            {/* Lines: hub → output */}
            {OUTPUTS.map((o, i) => (
              <path
                key={`out-${o.id}`}
                d={`M ${HUB.x + 80} ${HUB.y} C ${(HUB.x + o.x) / 2} ${HUB.y}, ${(HUB.x + o.x) / 2} ${o.y}, ${o.x} ${o.y}`}
                stroke="url(#line-fire)"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="6 4"
                style={{
                  strokeDashoffset: inView ? 0 : 220,
                  transition: `stroke-dashoffset 1.4s ease-out ${0.5 + i * 0.12}s`,
                }}
              />
            ))}

            {/* Animated dots travelling along lines */}
            {NODES.map((n, i) => (
              <circle key={`d-${n.id}`} r="3" fill="#FFB347">
                <animateMotion
                  dur="3.8s"
                  repeatCount="indefinite"
                  begin={`${i * 0.5}s`}
                  path={`M ${n.x + 110} ${n.y} C ${(n.x + HUB.x) / 2} ${n.y}, ${(n.x + HUB.x) / 2} ${HUB.y}, ${HUB.x - 80} ${HUB.y}`}
                />
              </circle>
            ))}
            {OUTPUTS.map((o, i) => (
              <circle key={`do-${o.id}`} r="3" fill="#F14312">
                <animateMotion
                  dur="3.8s"
                  repeatCount="indefinite"
                  begin={`${1.5 + i * 0.5}s`}
                  path={`M ${HUB.x + 80} ${HUB.y} C ${(HUB.x + o.x) / 2} ${HUB.y}, ${(HUB.x + o.x) / 2} ${o.y}, ${o.x} ${o.y}`}
                />
              </circle>
            ))}

            {/* Input nodes */}
            {NODES.map((n, i) => (
              <g
                key={n.id}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateX(0)" : "translateX(-20px)",
                  transition: `opacity 0.6s ease-out ${i * 0.08}s, transform 0.6s ease-out ${i * 0.08}s`,
                }}
              >
                <rect
                  x={n.x - 18}
                  y={n.y - 22}
                  width={130}
                  height={44}
                  rx={22}
                  fill="#060c18"
                  stroke="rgba(217, 178, 107, 0.4)"
                  strokeWidth="1"
                />
                <circle cx={n.x - 4} cy={n.y} r="4" fill="#FFB347">
                  <animate
                    attributeName="opacity"
                    values="0.4;1;0.4"
                    dur="2.5s"
                    begin={`${i * 0.3}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                <text
                  x={n.x + 10}
                  y={n.y - 2}
                  fill="#EEEEEE"
                  fontFamily="var(--font-barlow)"
                  fontSize="13"
                  fontStyle="italic"
                  fontWeight="800"
                >
                  {n.label}
                </text>
                <text
                  x={n.x + 10}
                  y={n.y + 13}
                  fill="rgba(238, 238, 238, 0.45)"
                  fontFamily="var(--font-mono)"
                  fontSize="9"
                  letterSpacing="1.5"
                >
                  {n.role.toUpperCase()}
                </text>
              </g>
            ))}

            {/* Hub: Sheeraz */}
            <g style={{ opacity: inView ? 1 : 0, transition: "opacity 0.8s ease-out 0.6s" }}>
              <circle
                cx={HUB.x}
                cy={HUB.y}
                r="80"
                fill="url(#hub-fill)"
                filter="url(#glow)"
              />
              <circle
                cx={HUB.x}
                cy={HUB.y}
                r="80"
                fill="none"
                stroke="rgba(241, 67, 18, 0.7)"
                strokeWidth="1.5"
              >
                <animate
                  attributeName="r"
                  values="80;88;80"
                  dur="4s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-opacity"
                  values="0.7;0.2;0.7"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </circle>
              <text
                x={HUB.x}
                y={HUB.y - 4}
                textAnchor="middle"
                fill="#EEEEEE"
                fontFamily="var(--font-barlow)"
                fontSize="22"
                fontStyle="italic"
                fontWeight="900"
              >
                SHEERAZ
              </text>
              <text
                x={HUB.x}
                y={HUB.y + 16}
                textAnchor="middle"
                fill="rgba(238, 238, 238, 0.55)"
                fontFamily="var(--font-mono)"
                fontSize="9"
                letterSpacing="2"
              >
                THE CONDUCTOR
              </text>
            </g>

            {/* Output nodes */}
            {OUTPUTS.map((o, i) => {
              const isFinal = o.id === "fame";
              return (
                <g
                  key={o.id}
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateX(0)" : "translateX(20px)",
                    transition: `opacity 0.6s ease-out ${0.8 + i * 0.08}s, transform 0.6s ease-out ${0.8 + i * 0.08}s`,
                  }}
                >
                  <rect
                    x={o.x - 60}
                    y={o.y - 22}
                    width={140}
                    height={44}
                    rx={22}
                    fill={isFinal ? "rgba(241, 67, 18, 0.18)" : "#060c18"}
                    stroke={isFinal ? "rgba(241, 67, 18, 0.7)" : "rgba(241, 67, 18, 0.35)"}
                    strokeWidth={isFinal ? "1.5" : "1"}
                  />
                  <text
                    x={o.x + 10}
                    y={o.y + 4}
                    textAnchor="middle"
                    fill={isFinal ? "#F14312" : "#EEEEEE"}
                    fontFamily="var(--font-barlow)"
                    fontSize={isFinal ? "16" : "13"}
                    fontStyle="italic"
                    fontWeight={isFinal ? "900" : "700"}
                  >
                    {o.label}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Caption */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#EEEEEE]/45 justify-center">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFB347]" /> AI Models
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F14312]" /> Sheeraz Hub
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D9B26B]" /> Fame Outputs
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
