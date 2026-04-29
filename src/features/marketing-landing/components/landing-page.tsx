"use client";

import { useState } from "react";
import { playfair } from "@/lib/fonts";
import { FeatureCard } from "./feature-card";
import { LoginModal } from "@/features/auth/components/login-modal";
import { RegisterModal } from "@/features/auth/components/register-modal";
import Image from "next/image"
export function LandingPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
   <main className="min-h-screen flex flex-col" style={{ background: "var(--green)" }}>
  <div className="flex flex-col flex-1">
        <header className="flex items-center px-4 md:px-8 py-4">
          <nav className="flex gap-2 md:gap-3 ml-auto">
            <button
              onClick={() => setShowRegister(true)}
              className="bg-black text-white px-3 py-2 md:px-4 md:py-2 text-sm md:text-base rounded-lg cursor-pointer border-none"
            >
              Cadastra-se
            </button>
            <button
              onClick={() => setShowLogin(true)}
              className="bg-black text-white px-3 py-2 md:px-4 md:py-2 text-sm md:text-base rounded-lg cursor-pointer border-none"
            >
              Fazer login
            </button>
          </nav>
        </header>

        {/* Hero Section */}
        <div className="flex flex-col items-center text-center pt-8 px-4">
          <h1
            className={`text-4xl md:text-6xl font-bold text-white ${playfair.className}`}
            style={{ textShadow: "1px 1px 0 var(--ink), -1px -1px 0 var(--ink), 1px -1px 0 var(--ink), -1px 1px 0 var(--ink)" }}
          >
            Estude na AcademiQuest
          </h1>
          <h2 className={`text-base md:text-xl text-white mt-2 ${playfair.className}`}>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          </h2>
        </div>

{/* Larissa's collage edit */}
<div className="relative flex-1">
  <Image src="/images/rats.png" alt="artwork" fill className="object-contain" />
</div>

        {/* Features Section */}
    <div className="max-w-3xl mx-auto pb-16 px-4 w-full">
          <div className="rounded-2xl p-4 md:p-6 grid grid-cols-2 md:flex gap-3 md:gap-4" style={{ backgroundColor: "var(--ink)" }}>
            <FeatureCard text="Transforme editais PDFs em cronogramas." bg="var(--red)" textColor="white" />
            <FeatureCard text="Descubra o qual método de estudo você se adapta melhor." bg="var(--stone)" textColor="var(--ink)" />
            <FeatureCard text="Compartilhe vitorias com seus amigos." bg="var(--cream)" textColor="var(--ink)" />
            <FeatureCard text="Receba motivação constante para estudar." bg="var(--stone)" textColor="var(--ink)" />
          </div>
        </div>
      </div>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
    </main>
  );
}