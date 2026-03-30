"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const caseStudies = [
  {
    name: "Jennifer Lopez",
    image: "/images/case-study-1.jpg",
    label: "CASE STUDY",
    link: "https://www.youtube.com/watch?v=KkKrJpb2klA",
  },
  {
    name: "Kim x Dubai",
    image: "/images/case-study-2.jpg",
    label: "CASE STUDY",
    link: "https://www.youtube.com/watch?v=MsmvKU3xqpA",
  },
  {
    name: "Lele Pons",
    image: "/images/case-study-3.jpg",
    label: "CASE STUDY",
    link: "https://www.youtube.com/watch?v=eCHPl7oUK64",
  },
  {
    name: "Paris Hilton",
    image: "/images/case-study-4.jpg",
    label: "CASE STUDY",
    link: "#",
  },
  {
    name: "Pamela Anderson",
    image: "/images/case-study-5.jpg",
    label: "CASE STUDY",
    link: "#",
  },
  {
    name: "Selena Gomez",
    image: "/images/case-study-6.jpg",
    label: "CASE STUDY",
    link: "#",
  },
  {
    name: "Ricky Martin",
    image: "/images/case-study-7.jpg",
    label: "CASE STUDY",
    link: "#",
  },
  {
    name: "Adam Waheed",
    image: "/images/case-study-8.jpg",
    label: "CASE STUDY",
    link: "#",
  },
  {
    name: "Nelk Boys",
    image: "/images/case-study-9.jpg",
    label: "CASE STUDY",
    link: "#",
  },
  {
    name: "Logan Paul",
    image: "/images/case-study-10.jpg",
    label: "CASE STUDY",
    link: "#",
  },
  {
    name: "Zendaya",
    image: "/images/case-study-11.jpg",
    label: "CASE STUDY",
    link: "#",
  },
  {
    name: "Priyanka Chopra",
    image: "/images/case-study-12.jpg",
    label: "CASE STUDY",
    link: "#",
  },
  {
    name: "CZ (Binance)",
    image: "/images/case-study-13.jpg",
    label: "CASE STUDY",
    link: "#",
  },
  {
    name: "Gabriel Macht",
    image: "/images/case-study-14.jpg",
    label: "CASE STUDY",
    link: "#",
  },
  {
    name: "Angelababy x Huang Xiaoming",
    image: "/images/case-study-15.png",
    label: "CASE STUDY",
    link: "#",
  },
  {
    name: "Niki and Gabi",
    image: "/images/case-study-16.png",
    label: "CASE STUDY",
    link: "#",
  },
];

export default function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.02 }
    );

    const elements =
      sectionRef.current?.querySelectorAll(".fade-target") ?? [];
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="case-studies"
      className="py-20 sm:py-28 bg-black relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="fade-target text-sm uppercase tracking-[0.3em] text-muted mb-4">
            Watch the
          </p>
          <h2 className="fade-target delay-100 text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight">
            Case <span className="text-gold-gradient">Studies</span>
          </h2>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {caseStudies.map((study, index) => (
            <a
              key={study.name}
              href={study.link}
              target={study.link.startsWith("http") ? "_blank" : undefined}
              rel={
                study.link.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className={`fade-target group relative aspect-[3/4] overflow-hidden card-overlay`}
              style={{ animationDelay: `${Math.min(index * 0.05, 0.5)}s` }}
            >
              {/* Image */}
              <Image
                src={study.image}
                alt={study.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-3 sm:p-4">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gold mb-1">
                  {study.label}
                </span>
                <h3 className="text-sm sm:text-base font-semibold leading-tight">
                  {study.name}
                </h3>
              </div>

              {/* Play icon for video links */}
              {study.link.startsWith("http") && (
                <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gold/90 flex items-center justify-center backdrop-blur-sm">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-black ml-0.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
