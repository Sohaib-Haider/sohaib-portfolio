import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Calendar, AppWindow } from "lucide-react";
import * as Icons from "lucide-react";
import { projects } from "@/data/projects";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import VoiceAILayout from "./VoiceAILayout";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for static site generation
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-zinc-800">
      
      {/* Header / Nav */}
      <nav className="w-full max-w-5xl mx-auto px-6 py-12 flex justify-between items-center">
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-semibold group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>
      </nav>

      {/* Main Content */}
      <main className="w-full max-w-5xl mx-auto px-6 pb-24 scroll-fade-in">
        
        {/* Project Header */}
        <header className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-[10px] font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
              <Calendar size={12} /> {project.dateRange}
            </span>
            <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-[10px] font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
              <AppWindow size={12} /> {project.type}
            </span>
            {project.isLive && (
              <span className="px-3 py-1 bg-white text-black rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                Live
              </span>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {project.title}
          </h1>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-12">
            {project.tech.split(", ").map((t, i) => (
              <span key={i} className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-semibold rounded-full">
                {t}
              </span>
            ))}
          </div>
        </header>

        {/* Hero Image */}
        <div className="w-full bg-[#0a0a0a] border border-zinc-800/50 rounded-3xl overflow-hidden mb-20 relative shadow-2xl flex items-center justify-center">
          {project.thumbnail ? (
            <Image 
              src={project.thumbnail} 
              alt={project.title} 
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-zinc-700">
              <AppWindow size={48} className="mb-4 opacity-30" />
              <span className="text-sm font-mono opacity-40 uppercase tracking-widest">Image Pending</span>
            </div>
          )}
        </div>

        {project.slug === "voice-ai-booking-agent" ? (
          <VoiceAILayout project={project} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* Main Description */}
            <div className="md:col-span-8">
              <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
              <div className="prose prose-invert prose-zinc max-w-none mb-12">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {project.detailedDesc || project.desc}
                </ReactMarkdown>
              </div>

              {project.keyFeatures && (
                <>
                  <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
                  <ul className="space-y-4">
                    {project.keyFeatures.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-300">
                        <span className="text-zinc-500 mt-1">✦</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="md:col-span-4">
              <div className="p-8 bg-[#0d0d0d] border border-zinc-800/50 rounded-2xl sticky top-8 shadow-xl">
                <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-6">Project Links</h3>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-between px-6 py-4 bg-white text-black font-semibold rounded-xl hover:bg-zinc-200 transition-colors group"
                >
                  <span>View Project</span>
                  <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
            
          </div>
        )}

        {/* --- CUSTOM RICH LAYOUT SECTIONS --- */}

        {/* Features Grid */}
        {project.slug !== "voice-ai-booking-agent" && project.features && project.features.length > 0 && (
          <div className="mt-32 pt-16 border-t border-zinc-900/50">
            <div className="text-center mb-16">
              <span className="text-blue-500 font-bold tracking-widest text-[10px] uppercase mb-4 block">Platform Features</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Everything Your Business Needs</h2>
              <p className="text-zinc-400 text-lg">Nine integrated modules working together — from raw inventory data to AI-powered conversation.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature, idx) => {
                const IconComponent = (Icons as any)[feature.icon] || AppWindow;
                return (
                  <div key={idx} className="bg-[#0a0a0a] hover:bg-[#111] transition-all duration-300 border border-zinc-800/50 hover:border-zinc-700 rounded-[2rem] p-8 group flex flex-col h-full shadow-2xl relative overflow-hidden">
                    {/* Subtle gradient background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300 relative z-10">
                      <IconComponent className="text-zinc-300 group-hover:text-blue-400 transition-colors" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 relative z-10">{feature.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow relative z-10">{feature.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                      {feature.tags.map((tag, tagIdx) => (
                        <span key={tagIdx} className="px-3 py-1 bg-zinc-900/80 border border-zinc-800 text-[10px] font-bold text-zinc-300 rounded-full uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Tech Stack Grid */}
        {project.slug !== "voice-ai-booking-agent" && project.techStackExtended && project.techStackExtended.length > 0 && (
          <div className="mt-32">
            <div className="text-center mb-16">
              <span className="text-blue-500 font-bold tracking-widest text-[10px] uppercase mb-4 block">Technology</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Built on Battle-Tested Stack</h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">Enterprise-grade architecture with modern ML infrastructure — built to scale.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {project.techStackExtended.map((tech, idx) => (
                <div key={idx} className="flex items-center gap-3 px-6 py-3.5 bg-white text-black hover:bg-zinc-200 transition-all rounded-full font-bold text-sm shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:-translate-y-1 duration-300 cursor-default">
                  <span className={`w-2 h-2 rounded-full ${tech.dotColor} shadow-[0_0_10px_currentColor]`}></span>
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Roadmap Timeline */}
        {project.slug !== "voice-ai-booking-agent" && project.roadmap && project.roadmap.length > 0 && (
          <div className="mt-32 mb-12">
            <div className="text-center mb-24">
              <span className="text-blue-500 font-bold tracking-widest text-[10px] uppercase mb-4 block">Implementation</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Development Roadmap</h2>
              <p className="text-zinc-400 text-lg">Four phases to a fully operational AI-powered platform.</p>
            </div>
            
            <div className="relative max-w-5xl mx-auto">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-8 left-12 right-12 h-[2px] bg-gradient-to-r from-blue-600 via-purple-500 to-zinc-800 z-0 rounded-full"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
                {project.roadmap.map((phase, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    {/* Circle */}
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg mb-8 shadow-2xl border-4 border-black ${idx === 0 ? 'bg-blue-600' : idx === 1 ? 'bg-[#1a1a2e]' : idx === 2 ? 'bg-purple-500' : 'bg-transparent border-dashed border-zinc-700 text-zinc-500'}`}>
                      {phase.phase}
                    </div>
                    
                    <h3 className={`text-xl font-bold mb-4 ${idx === 3 ? 'text-zinc-500' : 'text-white'}`}>{phase.title}</h3>
                    <ul className="space-y-3">
                      {phase.items.map((item, itemIdx) => (
                        <li key={itemIdx} className={`text-sm font-medium ${idx === 3 ? 'text-zinc-600' : 'text-zinc-400'}`}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
