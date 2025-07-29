"use client";

import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 800,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      <main
        className="flex h-screen w-full flex-col justify-between bg-cover bg-top px-6 pt-6 pb-20"
        style={{ backgroundImage: "url('/robot-bg.webp')" }}
      >
        <Image
          src="/logo.svg"
          width={220}
          height={0}
          alt="logo"
          className="mx-auto"
          style={{ height: "auto" }}
          data-aos="fade-down"
        />

        {/* Content vertically centered in remaining space */}
        <div
          className="flex flex-grow items-center"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <div className="container mx-auto">
            <div className="mx-auto flex max-w-fit flex-col items-center justify-center gap-8 rounded-2xl border-[.5px] border-slate-500/70 bg-slate-900/70 p-10">
              <h1 className="text-[var(--font-montserrat) max-w-3xl text-center text-5xl leading-tight font-bold text-white">
                Supercharge your workday with{" "}
                <span className="bg-gradient-to-r from-[#0FC2F4] via-[#3426FD] to-[#F204AE] bg-clip-text text-transparent">
                  AI Teammates
                </span>
              </h1>

              <Link href="/ai-teammate">
                <div className="shine-button focus:none relative cursor-pointer overflow-hidden rounded-md px-4 py-3 font-bold text-white uppercase shadow-lg shadow-slate-900/55 transition-all duration-300 ease-in-out">
                  Create AI Teammate
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .shine-button::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 2rem;
          height: 2rem;
          background-color: #fff;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          animation: button-animation 4s linear infinite;
          filter: blur(12px);
        }

        .shine-button::after {
          content: "Create AI Teammate";
          position: absolute;
          top: 2%;
          left: 0.5%;
          width: 99%;
          height: 96%;
          background-color: #3527fd;
          border-radius: inherit;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: 0.3s all ease;
        }

        .shine-button:hover::after {
          background-color: #2217c2;
        }

        @keyframes button-animation {
          0% {
            left: 0;
            top: 0;
          }

          35% {
            left: 100%;
            top: 0;
          }

          55% {
            left: 100%;
            top: 100%;
          }

          85% {
            left: 0%;
            top: 100%;
          }
        }
      `}</style>
    </>
  );
}
