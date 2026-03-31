import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Real Estate | Fame by Sheeraz",
};

export default function RealEstatePage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 py-24">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-5xl w-full">
        {/* 3D Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/images/logo-3d.png"
            alt="FAME 3D Logo"
            width={280}
            height={280}
            className="w-48 h-48 md:w-72 md:h-72 object-contain"
            unoptimized
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black italic text-[#F14312] leading-tight max-w-lg">
            Connecting Celebrities and Influencers to Real Estate Companies
          </h1>
          <p className="text-[#8794A7] text-lg font-sans">Coming Soon</p>
          <Link href="/contact" className="btn-orange text-sm uppercase tracking-wider">
            Join the Waitlist
          </Link>
        </div>
      </div>
    </section>
  );
}
