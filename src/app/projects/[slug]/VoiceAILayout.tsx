"use client";

import React from "react";
import { Project } from "@/data/projects";
import { ExternalLink, Terminal, Activity, PhoneCall, Zap, Database, GitBranch, Key, Cpu, ShieldCheck, CheckCircle2, Search, BrainCircuit, Blocks } from "lucide-react";

export default function VoiceAILayout({ project }: { project: Project }) {
  return (
    <div className="w-full flex flex-col gap-24 pb-20">
      
      {/* 1. Hero Metrics Banner */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard 
            icon={<Zap size={24} className="text-yellow-400" />}
            title="Latency Drop"
            value="1.05s"
            subtext="Down from 1500ms"
            trend="+30% Faster"
          />
          <MetricCard 
            icon={<Activity size={24} className="text-green-400" />}
            title="Cost Optimization"
            value="$0.18"
            subtext="Per minute rate"
            trend="-64% Cost Drop"
          />
          <MetricCard 
            icon={<PhoneCall size={24} className="text-blue-400" />}
            title="Lead Conversion"
            value="+30%"
            subtext="Higher booking rate"
            trend="Over human agents"
          />
          <MetricCard 
            icon={<Database size={24} className="text-purple-400" />}
            title="Availability"
            value="24/7"
            subtext="Zero downtime"
            trend="Always online"
          />
        </div>
      </section>

      {/* 2. Architecture & Telephony Flow */}
      <section className="relative mt-12">
        <div className="text-center mb-12">
          <span className="text-cyan-400 font-bold tracking-widest text-[10px] uppercase mb-4 block">Telephony Architecture</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Orchestrating Sub-Second Voice AI</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Routing standard UAE numbers into a high-performance VoIP pipeline connecting directly to cutting-edge LLMs and real-time TTS.
          </p>
        </div>

        <div className="bg-[#0a0a0a] border border-zinc-800 rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            {/* Step 1: Twilio */}
            <FlowBox 
              icon={<PhoneCall size={28} className="text-red-500" />}
              title="Twilio SIP Trunking"
              desc="Local UAE number routing to VoIP"
            />
            
            <FlowArrow />
            
            {/* Step 2: Vapi Orchestrator */}
            <div className="flex flex-col items-center">
              <FlowBox 
                icon={<Cpu size={28} className="text-cyan-400" />}
                title="Vapi Engine"
                desc="Real-time WebRTC Orchestration"
                highlight
              />
              
              <div className="flex gap-4 mt-8 pt-8 border-t border-zinc-800 relative w-full justify-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-8 bg-zinc-800"></div>
                
                <SubFlowBox title="Deepgram" sub="Nova-2 STT (100ms)" />
                <SubFlowBox title="GPT-4o" sub="Core LLM (600ms)" />
                <SubFlowBox title="ElevenLabs" sub="Elliot TTS (250ms)" />
              </div>
            </div>

            <FlowArrow />
            
            {/* Step 3: Action */}
            <FlowBox 
              icon={<Database size={28} className="text-green-400" />}
              title="Backend APIs"
              desc="7 Dynamic Pricing Data Sheets"
            />
          </div>
        </div>
      </section>

      {/* NEW: Agentic Tool Calling & RAG Pipeline */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 mb-12">
        <div>
          <span className="text-orange-400 font-bold tracking-widest text-[10px] uppercase mb-4 block">Agentic Capabilities</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Dynamic Tool Calling & n8n Workflows</h2>
          <p className="text-zinc-400 text-lg mb-6">
            The AI acts autonomously, shifting from conversational chat to hard data retrieval mid-sentence. By binding custom tools to the LLM, the agent triggers an <strong>n8n backend workflow</strong> to directly access live pricing data.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4 p-4 rounded-xl bg-zinc-900 border border-zinc-800">
              <Blocks size={24} className="text-orange-400 flex-shrink-0" />
              <div>
                <h4 className="text-white font-bold text-sm mb-1">Available_cars_details Tool</h4>
                <p className="text-zinc-400 text-xs leading-relaxed">Asynchronous tool execution that pauses the TTS output, triggers the n8n webhook with the requested duration/vehicle, and seamlessly injects the returned pricing payload back into the dialogue context window.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl bg-zinc-900 border border-zinc-800">
              <BrainCircuit size={24} className="text-blue-400 flex-shrink-0" />
              <div>
                <h4 className="text-white font-bold text-sm mb-1">Google Sheets JSON Extraction</h4>
                <p className="text-zinc-400 text-xs leading-relaxed">n8n workflows directly query 7 distinct Google Sheets (Daily, Weekly, Monthly, etc.) via API. Custom JSON scripts extract the exact base rates, waiver fees, and insurance costs before returning them instantly to the agent.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-[#0a0a0a] rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden flex flex-col justify-center p-8 relative">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-orange-500/10 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="space-y-4 relative z-10">
            {/* User Speech */}
            <div className="bg-zinc-900 p-4 rounded-xl rounded-tl-sm w-[85%] border border-zinc-800 self-start">
              <p className="text-zinc-300 text-sm">"I need an SUV for about 45 days. Do you have the Kia Sportage available, and what's the deposit waiver?"</p>
            </div>
            
            {/* Tool Execution Logic (Hidden from user, shown in UI) */}
            <div className="w-full flex justify-center py-2">
              <div className="bg-black border border-orange-500/30 px-4 py-2 rounded-lg font-mono text-[10px] text-orange-400 flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <Search size={12} />
                  <span>EXECUTING: Available_cars_details</span>
                </div>
                <div className="text-zinc-500">{`{ "vehicle": "Kia Sportage", "duration": "monthly" }`}</div>
                <div className="text-blue-400">{`> Found: Base 2,500 AED/mo, Waiver 200 AED/mo`}</div>
              </div>
            </div>

            {/* Agent Response */}
            <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-xl rounded-tr-sm w-[85%] self-end ml-auto">
              <p className="text-blue-100 text-sm">"Kia Sportage is five thousand dirhams for forty-five days. Without deposit adds four hundred. S-C-D-W adds three hundred. Total is five thousand seven hundred, excluding VAT."</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Structured Outputs & Extraction */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 bg-[#111] rounded-2xl p-6 font-mono text-sm border border-zinc-800 shadow-xl overflow-x-auto">
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-zinc-800">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="text-zinc-500 ml-2">POST /api/webhook/booking</span>
          </div>
          <pre className="text-zinc-300">
            <code>
{`{
  "booking_status": "confirmed",
  "customer": {
    "name": "John Doe",
    "phone": "+971501234567",
    "email": "john.doe@example.com"
  },
  "rental_details": {
    "vehicle": "Kia Sportage",
    "duration_days": 45,
    "total_price_aed": 5700,
    "insurance": "SCDW",
    "deposit_waiver": true
  },
  "delivery": {
    "location": "Dubai Business Bay",
    "fee": 0
  }
}`}
            </code>
          </pre>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-purple-400 font-bold tracking-widest text-[10px] uppercase mb-4 block">Information Extraction</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Structured Output Mapping</h2>
          <p className="text-zinc-400 text-lg mb-8">
            The AI doesn't just talk. It extracts hard data mid-conversation. By utilizing OpenAI's Structured Outputs, the agent maps conversational intent directly into strict JSON payloads sent to the backend webhook the moment the call ends.
          </p>
          
          <ul className="space-y-4">
            {["Customer Name, Email, & Phone", "Vehicle Model & Category", "Exact Rental Duration", "Selected Insurance & Waiver Type", "Delivery Location Coordinates"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-zinc-300">
                <CheckCircle2 size={18} className="text-purple-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Prompt Engineering Terminal */}
      <section>
        <div className="text-center mb-12">
          <span className="text-green-400 font-bold tracking-widest text-[10px] uppercase mb-4 block">System Prompt Engineering</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Controlling the AI Brain</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            A heavily engineered persona prompt enforces strict conversational guardrails, preventing hallucination and enforcing natural speech patterns.
          </p>
        </div>

        <div className="w-full bg-[#0d0d0d] rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden">
          <div className="bg-zinc-900 px-6 py-3 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal size={16} className="text-zinc-500" />
              <span className="text-xs font-mono text-zinc-400">system_prompt.md</span>
            </div>
          </div>
          <div className="p-6 md:p-8 font-mono text-sm leading-relaxed overflow-x-auto">
            <div className="text-blue-400 mb-4">## Core Identity</div>
            <div className="text-zinc-300 mb-6">You are a professional AI sales agent for Speedy Drive Car Rental in Dubai, UAE. You handle rental inquiries and bookings in English with efficiency and natural conversation flow.</div>

            <div className="text-blue-400 mb-4">## Conversation Style</div>
            <div className="text-zinc-500 mb-2"># Critical Voice Guidelines:</div>
            <ul className="text-zinc-300 space-y-2 mb-6 ml-4">
              <li className="flex gap-2"><span className="text-green-400">-</span> Keep responses to 1-2 sentences unless more detail is requested</li>
              <li className="flex gap-2"><span className="text-green-400">-</span> Spell out all numbers naturally (e.g., "sixty dirhams" not "60 AED")</li>
              <li className="flex gap-2"><span className="text-green-400">-</span> Answer only what's asked - don't volunteer additional information</li>
              <li className="flex gap-2"><span className="text-green-400">-</span> Ask ONE question at a time, wait for response</li>
            </ul>

            <div className="text-zinc-500 mb-2"># What NOT to do:</div>
            <ul className="text-zinc-300 space-y-2 ml-4">
              <li className="flex gap-2"><span className="text-red-400">-</span> Don't list multiple options unprompted</li>
              <li className="flex gap-2"><span className="text-red-400">-</span> Don't mention deposit, insurance, or delivery unless customer asks</li>
              <li className="flex gap-2"><span className="text-red-400">-</span> Don't provide information beyond the specific rental period mentioned</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}

// Sub-components for styling
function MetricCard({ title, value, subtext, trend, icon }: { title: string, value: string, subtext: string, trend: string, icon: React.ReactNode }) {
  return (
    <div className="bg-[#0d0d0d] border border-zinc-800 p-6 rounded-2xl flex flex-col relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>
      <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-2">{title}</span>
      <span className="text-4xl font-bold text-white mb-2">{value}</span>
      <span className="text-zinc-400 text-sm mb-4">{subtext}</span>
      <div className="mt-auto inline-flex px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-zinc-300 w-fit">
        {trend}
      </div>
    </div>
  );
}

function FlowBox({ title, desc, icon, highlight = false }: { title: string, desc: string, icon: React.ReactNode, highlight?: boolean }) {
  return (
    <div className={`flex flex-col items-center text-center p-6 rounded-2xl w-full lg:w-64 z-10 ${highlight ? 'bg-zinc-900 border-2 border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.2)]' : 'bg-[#111] border border-zinc-800'}`}>
      <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="text-white font-bold mb-2">{title}</h4>
      <span className="text-zinc-500 text-xs font-mono">{desc}</span>
    </div>
  );
}

function SubFlowBox({ title, sub }: { title: string, sub: string }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 flex flex-col items-center text-center w-32 shadow-xl z-10">
      <span className="text-white font-bold text-sm mb-1">{title}</span>
      <span className="text-zinc-500 text-[10px] uppercase">{sub}</span>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="hidden lg:flex flex-col justify-center items-center text-zinc-600">
      <div className="w-8 h-[2px] bg-zinc-700"></div>
      <div className="w-3 h-3 border-t-2 border-r-2 border-zinc-700 transform rotate-45 -ml-1"></div>
    </div>
  );
}
