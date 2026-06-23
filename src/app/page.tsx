"use client";

import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { 
  Mail, 
  ArrowRight, 
  Download, 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  Send, 
  MessageSquare, 
  Cpu, 
  Layers, 
  TrendingUp, 
  ThumbsUp, 
  ChevronRight,
  ExternalLink,
  AppWindow,
  Briefcase
} from "lucide-react";

const Github = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.35 6.5-1.56 6.5-7.14a5.8 5.8 0 0 0-1.5-3.8 5.3 5.3 0 0 0-.15-3.72s-1.2-.38-3.9 1.45a13.4 13.4 0 0 0-7 0c-2.7-1.83-3.9-1.45-3.9-1.45a5.3 5.3 0 0 0-.15 3.72 5.8 5.8 0 0 0-1.5 3.8c0 5.58 3.32 6.78 6.5 7.14a4.8 4.8 0 0 0-1 3.02v4"/>
  </svg>
);

const Linkedin = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger and useGSAP
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// Resume Data for RAG Chatbot
const KNOWLEDGE_BASE = [
  {
    keywords: ["project", "projects", "what did you build", "portfolio"],
    answer: "I have built several high-impact AI and Data Science projects. The main ones are: 1) AI Virtual Try-On (scalable backend using Fastify, BullMQ, and Redis), 2) Business Insights & Sales Forecasting Tool (full-stack BI with XGBoost, batch costing, and a RAG chatbot), 3) Smart Movie Recommendation System (cosine similarity and NLP), and 4) Airline Customer Satisfaction Predictor (Random Forest, Logistic Regression)."
  },
  {
    keywords: ["voice ai", "speedy drive", "car rental", "voice agent", "dubai"],
    answer: "At Speedy Drive Car Rental (Dubai, Remote), I engineered a production-grade Voice AI Agent that automated sales calls (rental pricing, booking confirmation, logistics) with zero human intervention. I integrated Vapi API, built real-time backend tool-calling workflows, and designed a dashboard in TypeScript/JS tracking booking success, call duration, and revenue."
  },
  {
    keywords: ["try on", "virtual try", "try-on", "bullmq", "redis", "fastify"],
    answer: "My AI Virtual Try-On project is a scalable backend pipeline. It uses Fastify for multipart API endpoints (handling image URLs/uploads) and BullMQ + Redis for a distributed, asynchronous task queue. This architecture ensures reliable processing of heavy AI tasks at scale with complete lifecycle monitoring."
  },
  {
    keywords: ["forecasting", "sales", "business insights", "xgboost"],
    answer: "The Business Insights & Sales Forecasting Tool is a full-stack platform. It features time-series sales forecasting (XGBoost), inventory profit tracking with batch costing, and an integrated RAG-powered chatbot that lets e-commerce business owners query sales, profit, and inventory metrics in plain English."
  },
  {
    keywords: ["education", "university", "fast", "nuces", "degree"],
    answer: "I hold a BS in Data Science from FAST National University of Computer & Emerging Sciences (NUCES) in Lahore, Pakistan. My coursework included Artificial Intelligence, Data Structures & Algorithms, Database Systems, and Software Engineering."
  },
  {
    keywords: ["skills", "languages", "tech stack", "technologies"],
    answer: "My key technologies include: Python (XGBoost, scikit-learn, time-series, NLP), TypeScript/JavaScript (Next.js, Fastify, React, Node.js), Data/Databases (SQL, Redis, BullMQ), and AI Architectures (Vapi API, RAG, prompt engineering, agentic workflows)."
  },
  {
    keywords: ["contact", "email", "phone", "location", "hire"],
    answer: "You can reach me via email at sohaibhaider01@gmail.com, call or WhatsApp me at +923064565203, or connect on LinkedIn (linkedin.com/in/sohaibhaider-). I am based in Lahore, Pakistan (54000) and open to remote and local roles!"
  }
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProjectTab, setActiveProjectTab] = useState("all");

  // Form State
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // References for Scroll Animations
  const heroRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormState({ name: "", email: "", message: "" });
      setFormSubmitted(false);
    }, 4000);
  };

  // Entrance and Scroll animations
  useGSAP(() => {
    // Initial Load Animations for Hero Section
    const tl = gsap.timeline();
    // Center portrait fade in and scale up FIRST
    tl.fromTo(
      ".hero-portrait-anim",
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power4.out" }
    );

    // Left & Right columns fade and slide in TOGETHER
    tl.fromTo(
      ".hero-left-anim",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.0, stagger: 0.15, ease: "power3.out" },
      "-=0.5"
    );

    tl.fromTo(
      ".hero-right-anim",
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1.0, stagger: 0.15, ease: "power3.out" },
      "<"
    );

    // Background shapes animations
    gsap.fromTo(
      ".bg-shape-glow",
      { opacity: 0, scale: 0.8 },
      { opacity: 0.6, scale: 1, duration: 2.5, ease: "sine.out" }
    );

    // Scroll trigger animations for other sections
    const sections = [
      { ref: experienceRef, trigger: "#experience" },
      { ref: projectsRef, trigger: "#projects" },
      { ref: contactRef, trigger: "#contact" }
    ];

    sections.forEach(({ ref, trigger }) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current.querySelectorAll(".scroll-fade-in"),
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: trigger,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    });

    // Zig-Zag scroll animation for projects
    if (projectsRef.current) {
      const projectCards = projectsRef.current.querySelectorAll(".project-card");
      projectCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { 
            opacity: 0, 
            x: index % 2 === 0 ? -100 : 100 
          },
          {
            opacity: 1,
            x: 0,
            duration: 1.0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      });
    }
  });

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden">
      
      {/* Background neon elements are now positioned contextually in columns to match Inaya layout */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Glow blobs for depth */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[150px] pointer-events-none"></div>
      </div>

      {/* HEADER / NAVIGATION */}
      <header className="relative w-full px-6 md:px-16 xl:px-20 py-8 flex items-center justify-between z-50 max-w-[max(1536px,calc(100vw_-_384px))] mx-auto">
        <div className="flex items-center gap-16 md:gap-24 hero-left-anim">
          <a href="#" className="group text-2xl font-serif font-bold tracking-tight text-white hover:text-accent transition-colors flex flex-col items-start">
            Sohaib
            {/* Styled underline/dash logo mark inspired by Inaya checkmark */}
            <svg className="w-3 h-2 text-accent mt-0.5 ml-8 transform -rotate-12 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
              <path d="M4 12l6 6L20 6" />
            </svg>
          </a>
          <a 
            href="mailto:sohaibhaider01@gmail.com" 
            className="hidden md:block text-xs font-sans tracking-widest text-zinc-400 hover:text-white transition-colors duration-300"
          >
            sohaibhaider01@gmail.com
          </a>
        </div>

        <button 
          onClick={() => setMobileMenuOpen(true)}
          className="p-2 text-white hover:text-accent transition-colors hero-right-anim flex flex-col gap-1.5 justify-center items-end"
          aria-label="Toggle menu"
        >
          <span className="h-[2px] w-6 bg-white rounded-full"></span>
          <span className="h-[2px] w-4 bg-white rounded-full transition-all duration-300"></span>
        </button>
      </header>

      {/* MOBILE MENU MODAL */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center gap-8 backdrop-blur-lg">
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white transition-colors"
          >
            <X size={28} />
          </button>
          <a 
            href="#" 
            onClick={() => setMobileMenuOpen(false)} 
            className="text-3xl font-serif hover:text-accent transition-colors"
          >
            Home
          </a>
          <a 
            href="#experience" 
            onClick={() => setMobileMenuOpen(false)} 
            className="text-3xl font-serif hover:text-accent transition-colors"
          >
            Experience
          </a>
          <a 
            href="#projects" 
            onClick={() => setMobileMenuOpen(false)} 
            className="text-3xl font-serif hover:text-accent transition-colors"
          >
            Projects
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)} 
            className="text-3xl font-serif hover:text-accent transition-colors"
          >
            Contact
          </a>

          <div className="flex flex-col items-center gap-4 mt-8">
            <a href="mailto:sohaibhaider01@gmail.com" className="text-zinc-400 hover:text-white flex items-center gap-2">
              <Mail size={16} className="text-accent" /> sohaibhaider01@gmail.com
            </a>
            <div className="flex gap-4 mt-2">
              <a href="https://linkedin.com/in/sohaibhaider-" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white" aria-label="LinkedIn">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://github.com/Sohaib-Haider" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white" aria-label="GitHub">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* HERO SECTION - Three Columns layout with absolute centered portrait inspired by Inaya */}
      {/* Section is intentionally taller than viewport — scroll down to see social bar & chat anchor */}
      <section ref={heroRef} className="relative min-h-[500px] lg:min-h-[600px] xl:min-h-[650px] pb-12 max-w-[max(1536px,calc(100vw_-_384px))] mx-auto px-6 md:px-16 xl:px-20 z-10">
        
        {/* Main 12-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full relative">
          
          {/* LEFT COLUMN: Hero Greetings (Spans 5 Columns) */}
          <div ref={leftColRef} className="lg:col-span-5 z-20 flex flex-col justify-start h-full order-2 lg:order-1 text-left pt-6 lg:pt-[110px] xl:pt-[clamp(135px,10vw,195px)]">
            <h2 className="text-[32px] sm:text-[34px] lg:text-[42px] xl:text-[48px] font-serif font-bold text-white mb-2 hero-left-anim leading-[1.1] tracking-tight">
              Hi,<br />
              I'm <span className="text-accent font-serif tracking-wide block sm:inline">Sohaib Haider</span>
            </h2>
            <p className="text-lg md:text-xl xl:text-[22px] tracking-wide text-white mb-6 hero-left-anim max-w-md font-normal mt-0" style={{ fontFamily: "'Inter', sans-serif" }}>
              AI Engineer & Data Scientist
            </p>

            {/* Split "Hire Me" Button (Explicitly styled rounded rectangle to match inspiration) */}
            <div className="hero-left-anim flex justify-start mt-4 lg:mt-6">
              <a 
                href="#contact" 
                className="group flex items-center bg-accent text-white overflow-hidden font-sans font-semibold transition-all duration-300 hover:bg-rose-600 hover:shadow-lg hover:shadow-accent/20 h-[46px]"
                style={{ borderRadius: "10px" }}
              >
                <span className="px-5 text-[14px] font-bold tracking-wider">Hire Me</span>
                <span className="h-full w-[1px] bg-white/20"></span>
                <span className="px-5 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300">
                  <ArrowRight size={16} />
                </span>
              </a>
            </div>

            {/* Social Icons for Mobile/Tablet Viewports - Hidden on Desktop */}
            <div className="flex lg:hidden flex-col gap-6 mt-12 items-start text-zinc-400 w-full">
              {/* LinkedIn Icon */}
              <a href="https://linkedin.com/in/sohaibhaider-" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors duration-300 w-5 h-5 flex items-center justify-center" aria-label="LinkedIn">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              {/* GitHub Icon */}
              <a href="https://github.com/Sohaib-Haider" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors duration-300 w-5 h-5 flex items-center justify-center" aria-label="GitHub">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              
              {/* Bottom Row: Mail Icon + Text Link horizontally aligned */}
              <div className="flex items-center gap-6">
                <a href="mailto:sohaibhaider01@gmail.com" className="text-zinc-500 hover:text-white transition-colors duration-300 w-5 h-5 flex items-center justify-center" aria-label="Email">
                  <Mail size={20} />
                </a>
                
                <div className="flex items-center gap-2 text-zinc-500 font-sans text-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse"></span>
                  <a href="https://github.com/Sohaib-Haider" target="_blank" rel="noreferrer" className="hover:text-white hover:underline transition-all duration-300">
                    github.com/Sohaib-Haider
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div 
            ref={portraitRef} 
            className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-64 z-10 w-[400px] lg:w-[450px] xl:w-[550px] h-[600px] lg:h-[680px] xl:h-[clamp(720px,52vw,1000px)] pointer-events-none select-none"
          >
            <div className="relative w-full h-full hero-portrait-anim">
              {/* Profile image rendered fully using object-contain and aligned to the bottom to display coat details */}
              <Image 
                src="/sohaib.jpg" 
                alt="Sohaib Haider" 
                fill
                priority
                className="object-contain object-bottom select-none filter grayscale-[10%]"
                sizes="(max-w-7xl) 40vw, 100vw"
              />

              {/* Seamless double gradient masks to completely blend boundary lines */}
              {/* Bottom linear fade - height reduced to show coat details and buttons */}
              <div className="absolute bottom-0 inset-x-0 h-[8%] bg-gradient-to-t from-black to-transparent z-25"></div>
              {/* Horizontal edge fades */}
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-25 opacity-90"></div>
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-25 opacity-90"></div>
              {/* Overlay strictly restricted to the bottom 65% so it NEVER touches the face at any zoom level */}
              <div className="absolute bottom-0 inset-x-0 h-[65%] bg-[linear-gradient(to_top,rgba(0,0,0,1)_0%,rgba(0,0,0,0.6)_70%,transparent_100%)] z-20 pointer-events-none"></div>
            </div>
          </div>

          {/* Mobile/Tablet relative portrait placeholder */}
          <div className="lg:hidden z-10 flex justify-center items-center w-full order-1">
            <div className="relative w-[280px] h-[340px] md:w-[320px] md:h-[400px] overflow-hidden rounded-3xl hero-portrait-anim">
              <Image 
                src="/sohaib.jpg" 
                alt="Sohaib Haider" 
                fill
                priority
                className="object-cover object-top select-none brightness-[0.95] filter grayscale-[10%]"
                sizes="100vw"
              />
              <div className="absolute bottom-0 inset-x-0 h-[65%] bg-[linear-gradient(to_top,rgba(0,0,0,1)_0%,rgba(0,0,0,0.6)_70%,transparent_100%)] pointer-events-none"></div>

              <div className="absolute inset-0 rounded-3xl border border-white/5 pointer-events-none"></div>
            </div>
          </div>

          {/* RIGHT COLUMN: Expertise, Rings, and Downloads */}
          <div ref={rightColRef} className="lg:col-span-4 lg:col-start-9 z-20 flex flex-col justify-start lg:items-end h-full order-3 text-center lg:text-left relative pt-6 lg:pt-[110px] xl:pt-[clamp(135px,10vw,195px)]">
            {/* Decorative Floating Circles */}
            <div className="hidden lg:block absolute top-[-40px] lg:top-[12px] xl:top-[clamp(15px,1.2vw,22px)] left-[30%] lg:left-[50%] w-full h-[160px] pointer-events-none hero-right-anim z-0 -translate-y-6 lg:-translate-y-8">
              {/* Large cyan circle outline */}
              <div className="absolute left-[15%] lg:left-[15%] top-[10%] w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full border-[3px] border-cyan-400 opacity-80 animate-[float-subtle-1_6s_ease-in-out_infinite]"></div>
              {/* Small red/orange circle outline (overlapping top right of large cyan) */}
              <div className="absolute left-[30%] lg:left-[32%] top-[5%] w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] rounded-full border-2 border-[#FF5A36] opacity-90 animate-[float-subtle-2_4s_ease-in-out_infinite] z-10"></div>
              {/* Solid cyan dot (bottom right) */}
              <div className="absolute left-[35%] lg:left-[40%] top-[55%] w-[24px] h-[24px] lg:w-[30px] lg:h-[30px] rounded-full bg-cyan-400 opacity-90 animate-[float-subtle-3_7s_ease-in-out_infinite]"></div>
            </div>

            <div className="mb-2 hero-right-anim z-10">
              <span className="text-sm font-medium text-accent block mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                Expert on
              </span>
              <h3 className="text-[26px] xl:text-[28px] font-medium text-white leading-[1.3] max-w-sm mx-auto lg:mx-0" style={{ fontFamily: "'Inter', sans-serif" }}>
                Based in Pakistan i'm AI engineer and automation developer.
              </h3>
            </div>

            <div className="mb-8 hero-right-anim z-10">
              <p className="text-[16px] xl:text-[17px] leading-relaxed text-zinc-300 max-w-sm mx-auto lg:mx-0" style={{ fontFamily: "'Inter', sans-serif" }}>
                Hey, are you looking for an engineer to build your agentic systems and scale your data platforms? Let's shake hands.
              </p>
            </div>

            <div className="hero-right-anim flex justify-center lg:justify-start z-10">
              <a 
                href="/Sohaib_Haider_CV.pdf" 
                download="Sohaib_Haider_CV.pdf"
                className="group inline-flex items-center gap-2 text-[15px] font-medium text-accent border-b border-accent pb-1 hover:text-white hover:border-white transition-all duration-300" style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Download CV
                <Download size={14} className="group-hover:translate-y-0.5 transition-transform duration-300" />
              </a>
            </div>

          </div>

        </div>

      </section>

      {/* SECTION: WORK EXPERIENCE / TIMELINE */}
      <section id="experience" ref={experienceRef} className="relative py-24 px-6 md:px-16 xl:px-20 max-w-[max(1536px,calc(100vw_-_384px))] mx-auto z-10 border-t border-zinc-900 bg-black">
        
        <div className="flex flex-col items-center justify-center mb-24 scroll-fade-in text-center">
          <span className="text-xs font-semibold tracking-widest text-accent uppercase flex items-center gap-2 mb-6">
            <Briefcase size={14} /> Experience
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight">
            Professional Journey
          </h2>
          <p className="text-zinc-400 max-w-xl text-sm md:text-base mt-6">
            My engineering background sits at the intersection of Agentic AI, high-performance distributed systems, and predictive data science.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l border-zinc-800 ml-4 md:ml-12 pl-8 md:pl-16 py-4 space-y-16">
          
          {/* Item 1 */}
          <div className="relative scroll-fade-in group">
            {/* Timeline Dot */}
            <span className="absolute -left-[41px] md:-left-[73px] top-1.5 w-6 h-6 rounded-full bg-black border border-accent flex items-center justify-center group-hover:bg-accent transition-all duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-black"></span>
            </span>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-accent transition-colors">
                  AI Engineer (Voice AI & Automation)
                </h3>
                <p className="text-zinc-400 text-sm md:text-base font-semibold mt-1">
                  Speedy Drive Car Rental • Dubai, UAE (Remote)
                </p>
              </div>
              <span className="px-3 py-1 bg-zinc-900 border border-zinc-850 rounded-full text-xs font-mono text-zinc-400 w-fit">
                Sept 2025 – Feb 2026
              </span>
            </div>

            <ul className="space-y-3 text-white text-sm md:text-base max-w-4xl list-disc list-outside pl-4">
              <li>
                Built a production-grade Voice AI Agent automating end-to-end car rental sales calls (handling availability checks, pricing, deposit selection, delivery, and booking with zero human intervention).
              </li>
            </ul>
          </div>

          {/* Item 2 (Education) */}
          <div className="relative scroll-fade-in group">
            {/* Timeline Dot */}
            <span className="absolute -left-[41px] md:-left-[73px] top-1.5 w-6 h-6 rounded-full bg-black border border-zinc-800 flex items-center justify-center group-hover:border-accent transition-all duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-accent"></span>
            </span>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  BS in Data Science
                </h3>
                <p className="text-zinc-400 text-sm md:text-base mt-1">
                  FAST National University of Computer & Emerging Sciences (NUCES) • Lahore, Pakistan
                </p>
              </div>

            </div>
            
            <p className="text-white text-sm md:text-base max-w-4xl leading-relaxed">
              Specialized in machine learning, statistics, and software engineering foundations. Relevant coursework: Artificial Intelligence, Data Structures & Algorithms, Database Systems, Software Engineering.
            </p>
          </div>

        </div>

      </section>

      {/* SECTION: PROJECTS */}
      <section id="projects" ref={projectsRef} className="relative py-24 px-6 md:px-16 xl:px-20 max-w-[max(1536px,calc(100vw_-_384px))] mx-auto z-10 border-t border-zinc-900 bg-black">
        
        {/* Header centered */}
        <div className="flex flex-col items-center justify-center mb-24 scroll-fade-in text-center">
          <span className="text-xs font-semibold tracking-widest text-accent uppercase flex items-center gap-2 mb-6">
            <AppWindow size={14} /> Projects
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight">
            Projects That Delivered Real Impact
          </h2>
        </div>

        {/* Project List */}
        <div className="flex flex-col gap-12">
          {projects.map((project, idx) => (
            <div key={idx} className="relative bg-[#0d0d0d] border border-zinc-800/50 rounded-[2rem] p-8 md:p-12 lg:p-16 project-card opacity-0 group hover:bg-[#111] transition-colors duration-500 overflow-hidden">
              

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative z-10 h-full items-center">
                
                {/* Left Content (Title, Desc, Button) */}
                <div className="lg:col-span-5 flex flex-col justify-center h-full">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 lg:mb-16 pr-16 lg:pr-0">
                    {project.title}
                  </h3>

                  <div>
                    <p className="text-zinc-400 leading-relaxed text-sm md:text-base mb-6 max-w-md">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-10 max-w-md">
                      {project.tech.split(", ").map((t, i) => (
                        <span key={i} className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-semibold rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-3 group/btn"
                    >
                      <span className="px-7 py-3.5 bg-black text-white border border-zinc-800 rounded-full text-sm font-semibold group-hover/btn:bg-white group-hover/btn:text-black transition-colors duration-300 shadow-lg">
                        Explore Project
                      </span>
                      <span className="flex items-center justify-center w-12 h-12 bg-black text-white border border-zinc-800 rounded-full group-hover/btn:bg-white group-hover/btn:text-black transition-colors duration-300 shadow-lg">
                        <ArrowRight size={18} />
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Right Image Container */}
                <div className="lg:col-span-7 h-full flex items-center justify-end mt-8 lg:mt-0">
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-black border border-zinc-800/50">
                    {project.thumbnail ? (
                      <Image 
                        src={project.thumbnail} 
                        alt={project.title} 
                        fill 
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-zinc-700 bg-[#0a0a0a]">
                        <AppWindow size={48} className="mb-4 opacity-30" />
                        <span className="text-sm font-mono opacity-40 uppercase tracking-widest">Image Pending</span>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>


      {/* SECTION: CONTACT */}
      <section id="contact" ref={contactRef} className="relative py-24 px-6 md:px-16 xl:px-20 max-w-[max(1536px,calc(100vw_-_384px))] mx-auto z-10 border-t border-zinc-900 bg-black">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Details */}
          <div className="lg:col-span-5 scroll-fade-in flex flex-col justify-center">
            <div>
              <span className="text-xs font-semibold tracking-widest text-accent uppercase flex items-center gap-2 mb-6">
                <Mail size={14} /> Connect
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Let's Shake Hands
              </h2>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base mb-10 max-w-md">
                Have an automation pipeline to build or data infrastructure to design? Drop me a message, let's explore how we can collaborate.
              </p>
            </div>

            <div className="space-y-4 text-sm text-zinc-300 font-mono mt-4">
              <a href="mailto:sohaibhaider01@gmail.com" className="flex items-center gap-3 hover:text-accent transition-colors duration-300">
                <Mail size={16} className="text-accent" />
                sohaibhaider01@gmail.com
              </a>
              <a href="tel:+923064565203" className="flex items-center gap-3 hover:text-accent transition-colors duration-300">
                <Phone size={16} className="text-accent" />
                +92 306 4565203 (Call & WhatsApp)
              </a>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-accent" />
                Lahore, Pakistan, 54000
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <a href="https://linkedin.com/in/sohaibhaider-" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-zinc-900/50 hover:bg-zinc-800 text-white border border-zinc-800 hover:border-zinc-700 rounded-xl transition-all duration-300 font-semibold text-sm">
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a href="https://github.com/Sohaib-Haider" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-zinc-900/50 hover:bg-zinc-800 text-white border border-zinc-800 hover:border-zinc-700 rounded-xl transition-all duration-300 font-semibold text-sm">
                <Github size={18} />
                GitHub
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 scroll-fade-in">
            <div className="bg-zinc-950/60 border border-zinc-900 p-8 md:p-10 rounded-3xl backdrop-blur-sm">
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16">
                  <span className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6">
                    <ThumbsUp size={20} />
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-zinc-400 text-sm font-mono max-w-xs">
                    Your message has been processed. I will reply to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="form-name" className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Name</label>
                      <input 
                        id="form-name"
                        type="text" 
                        required
                        value={formState.name}
                        onChange={e => setFormState(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="John Doe"
                        className="w-full bg-zinc-900/40 border border-zinc-850 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent text-white transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="form-email" className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Email Address</label>
                      <input 
                        id="form-email"
                        type="email" 
                        required
                        value={formState.email}
                        onChange={e => setFormState(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="john@example.com"
                        className="w-full bg-zinc-900/40 border border-zinc-850 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent text-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="form-message" className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Message</label>
                    <textarea 
                      id="form-message"
                      rows={5} 
                      required
                      value={formState.message}
                      onChange={e => setFormState(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Hi, let's talk about the..."
                      className="w-full bg-zinc-900/40 border border-zinc-850 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent text-white transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-accent hover:bg-rose-600 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-accent/15"
                  >
                    Send Message
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 bg-black py-12 px-6 max-w-7xl mx-auto z-10 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-500 text-xs font-mono">
            &copy; {new Date().getFullYear()} Sohaib Haider. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-zinc-500 text-xs font-mono">
            <a href="#" className="hover:text-accent transition-colors">Home</a>
            <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
            <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
