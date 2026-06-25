import React from 'react';
import { Database, Server, Cpu, Brain, Network, Bot, ShieldAlert, BarChart3, Lock, LineChart, FileJson, Combine, Package, Users, Activity } from "lucide-react";

export default function BusinessInsightsLayout({ project }: { project: any }) {
  return (
    <div className="flex flex-col gap-16 md:gap-24 scroll-fade-in mt-12">
      
      {/* 1. Architecture Overview */}
      <section>
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">System Architecture Overview</h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            BISFT is structured as a decoupled, dual-backend system sharing a single production database. It splits transactional operations (OLTP) from high-computation analysis and AI processing (OLAP).
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-[#0a0a0a] border border-zinc-800/50 rounded-3xl p-8 hover:border-zinc-700 transition-colors shadow-xl">
            <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
              <Server className="text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Node.js Operational API (OLTP)</h3>
            <p className="text-zinc-400 text-sm mb-4 font-mono bg-zinc-900 inline-block px-2 py-1 rounded">Port: 5000 | Prisma ORM</p>
            <ul className="space-y-3 text-zinc-300 text-sm mt-4">
              <li className="flex gap-3 items-start"><span className="text-blue-500">✦</span> Uses Prisma schema linking operational modules (users, products, inventory, logs).</li>
              <li className="flex gap-3 items-start"><span className="text-blue-500">✦</span> Implements Row-Level Locking (SELECT ... FOR UPDATE) preventing stock race conditions.</li>
              <li className="flex gap-3 items-start"><span className="text-blue-500">✦</span> Robust Write Auditing middleware logging all state diffs and IPs.</li>
            </ul>
          </div>

          <div className="bg-[#0a0a0a] border border-zinc-800/50 rounded-3xl p-8 hover:border-zinc-700 transition-colors shadow-xl">
            <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6">
              <Brain className="text-purple-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Python FastAPI Engine (OLAP)</h3>
            <p className="text-zinc-400 text-sm mb-4 font-mono bg-zinc-900 inline-block px-2 py-1 rounded">Port: 8000 | ML & AI</p>
            <ul className="space-y-3 text-zinc-300 text-sm mt-4">
              <li className="flex gap-3 items-start"><span className="text-purple-500">✦</span> Communicates directly with PostgreSQL via SQLAlchemy.</li>
              <li className="flex gap-3 items-start"><span className="text-purple-500">✦</span> Hosts Facebook Prophet and TensorFlow DNN for forecasting and churn models.</li>
              <li className="flex gap-3 items-start"><span className="text-purple-500">✦</span> Hosts Local Hugging Face embeddings (ChromaDB) and LangGraph Multi-Agent flow.</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#050505] border border-zinc-800 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-emerald-500/10 rounded-2xl">
              <Database className="text-emerald-400" size={32} />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-1">Shared PostgreSQL Database</h4>
              <p className="text-zinc-400 text-sm font-mono">bisft_inventory (Operational & Analytical)</p>
            </div>
          </div>
          <p className="text-zinc-500 text-sm max-w-sm text-right hidden md:block">
            Both backends seamlessly share data for real-time reads and audited writes.
          </p>
        </div>
      </section>

      {/* 2. Data Ingestion */}
      <section className="bg-[#0d0d0d] rounded-[3rem] p-8 md:p-12 lg:p-16 border border-zinc-800/50 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-zinc-800/20 rounded-full blur-[100px] pointer-events-none"></div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 flex items-center gap-4 relative z-10">
          <Combine className="text-accent" size={32} /> Data Ingestion & Seeding Pipeline
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          <div className="bg-black/40 p-6 rounded-2xl border border-zinc-800/30">
            <div className="text-accent font-mono text-sm mb-3">Step 1</div>
            <h4 className="text-white font-bold mb-3 text-lg">Analytical Ingestion</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">Processes raw UK Online Retail datasets and cleans/merges 9 raw Brazilian Olist CSVs into structured local SQL formats.</p>
          </div>
          <div className="bg-black/40 p-6 rounded-2xl border border-zinc-800/30">
            <div className="text-accent font-mono text-sm mb-3">Step 2</div>
            <h4 className="text-white font-bold mb-3 text-lg">PostgreSQL Schema</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">Node.js uses Prisma ORM to initialize database tables via automated migrations (<code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded font-mono text-xs">npx prisma migrate dev</code>).</p>
          </div>
          <div className="bg-black/40 p-6 rounded-2xl border border-zinc-800/30">
            <div className="text-accent font-mono text-sm mb-3">Step 3</div>
            <h4 className="text-white font-bold mb-3 text-lg">Database Seeding</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">TypeScript script migrates 3,000+ sellers and 32,000+ products (generating SKUs, translating categories) into production tables.</p>
          </div>
        </div>
      </section>

      {/* 3. Core Platform Features */}
      <section>
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Platform Features</h2>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto">An interactive suite of tools transforming raw metrics into actionable intelligence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#0a0a0a] border border-zinc-800/50 rounded-3xl p-8 hover:border-zinc-700 transition-all shadow-xl flex flex-col group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-500/10 rounded-2xl group-hover:bg-blue-500/20 transition-colors">
                <Package className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white leading-tight">Batch Inventory Tracking</h3>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Track each purchase batch with its real cost price. Eliminate averaging errors and see actual per-product profitability down to the lot level.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300 rounded-lg">FIFO Costing</span>
              <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300 rounded-lg">Per-Batch Profit</span>
              <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300 rounded-lg">Dead Stock Alerts</span>
            </div>
          </div>

          <div className="bg-[#0a0a0a] border border-zinc-800/50 rounded-3xl p-8 hover:border-zinc-700 transition-all shadow-xl flex flex-col group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-emerald-500/10 rounded-2xl group-hover:bg-emerald-500/20 transition-colors">
                <LineChart className="text-emerald-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white leading-tight">Sales Forecasting</h3>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Dual-engine forecasting with Meta's Prophet for trend & seasonality, combined with LSTM deep learning for complex temporal demand patterns.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300 rounded-lg">Prophet</span>
              <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300 rounded-lg">LSTM</span>
              <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300 rounded-lg">Demand Planning</span>
            </div>
          </div>

          <div className="bg-[#0a0a0a] border border-zinc-800/50 rounded-3xl p-8 hover:border-zinc-700 transition-all shadow-xl flex flex-col group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-purple-500/10 rounded-2xl group-hover:bg-purple-500/20 transition-colors">
                <BarChart3 className="text-purple-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white leading-tight">Real-Time Dashboard</h3>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Live KPI monitoring with WebSocket-powered updates, Redis caching, and interactive drill-downs. Every metric always fresh, never stale.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300 rounded-lg">WebSocket Live</span>
              <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300 rounded-lg">Redis Cache</span>
              <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300 rounded-lg">Export Reports</span>
            </div>
          </div>

          <div className="bg-[#0a0a0a] border border-zinc-800/50 rounded-3xl p-8 hover:border-zinc-700 transition-all shadow-xl flex flex-col group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-orange-500/10 rounded-2xl group-hover:bg-orange-500/20 transition-colors">
                <Users className="text-orange-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white leading-tight">Customer Segmentation</h3>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              KNN-based clustering automatically identifies Champions, At-Risk, New, and Dormant customers — enabling precision targeting and CLV analysis.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300 rounded-lg">KNN Clustering</span>
              <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300 rounded-lg">CLV Analysis</span>
              <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300 rounded-lg">RFM Scoring</span>
            </div>
          </div>

          <div className="bg-[#0a0a0a] border border-zinc-800/50 rounded-3xl p-8 hover:border-zinc-700 transition-all shadow-xl flex flex-col group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-red-500/10 rounded-2xl group-hover:bg-red-500/20 transition-colors">
                <ShieldAlert className="text-red-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white leading-tight">Churn Prediction</h3>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Multi-model ensemble (Random Forest, Gradient Boosting, Logistic Regression) flags customers likely to churn weeks before they actually leave.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300 rounded-lg">Random Forest</span>
              <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300 rounded-lg">Gradient Boosting</span>
              <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300 rounded-lg">Early Warnings</span>
            </div>
          </div>

          <div className="bg-[#0a0a0a] border border-zinc-800/50 rounded-3xl p-8 hover:border-zinc-700 transition-all shadow-xl flex flex-col group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-cyan-500/10 rounded-2xl group-hover:bg-cyan-500/20 transition-colors">
                <Bot className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white leading-tight">RAG-Powered AI Chatbot</h3>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Ask anything in plain English and get precise, data-grounded answers instantly. Built on LangChain, FAISS vector search, and transformer embeddings.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300 rounded-lg">LangChain</span>
              <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300 rounded-lg">FAISS Vector Search</span>
              <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300 rounded-lg">Transformer NLP</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ML Layer */}
      <section>
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Machine Learning & Deep Learning</h2>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto">Three core machine learning systems deployed for predictive business intelligence.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#0a0a0a] border border-zinc-800/50 rounded-3xl p-8 hover:bg-[#111] transition-colors shadow-xl">
            <LineChart className="text-blue-400 mb-6" size={36} />
            <h3 className="text-2xl font-bold text-white mb-6">Sales Forecasting Stack</h3>
            <ul className="space-y-6 text-zinc-400 text-sm leading-relaxed">
              <li><strong className="text-zinc-200 block mb-1 text-base">Prophet Model</strong> Additive model configured for seasonal trends, injecting UK bank holidays to prevent false anomalies. Used for calculating baseline bounds.</li>
              <li><strong className="text-zinc-200 block mb-1 text-base">Random Forest Regressor</strong> Iterative multi-day prediction using rolling lag aggregates (1-day, 7-day, 30-day offsets). Predicts t+1, updates lags, and predicts t+2 continuously.</li>
              <li><strong className="text-zinc-200 block mb-1 text-base">Torch LSTM (Experimental)</strong> Deploys a deep sequence LSTM using PyTorch to validate long-range cyclical patterns.</li>
            </ul>
          </div>

          <div className="bg-[#0a0a0a] border border-zinc-800/50 rounded-3xl p-8 hover:bg-[#111] transition-colors shadow-xl">
            <ShieldAlert className="text-orange-400 mb-6" size={36} />
            <h3 className="text-2xl font-bold text-white mb-6">Customer Churn Prediction</h3>
            <ul className="space-y-6 text-zinc-400 text-sm leading-relaxed">
              <li><strong className="text-zinc-200 block mb-1 text-base">Feature Engineering</strong> Computes RFM values (Recency, Frequency, Monetary), average unit prices, and product variety flags.</li>
              <li><strong className="text-zinc-200 block mb-1 text-base">SMOTE Oversampling</strong> Uses <code className="bg-zinc-900 text-zinc-300 px-1 rounded">imblearn</code> to synthetically rebalance the training partition, correcting high class-imbalance.</li>
              <li><strong className="text-zinc-200 block mb-1 text-base">TensorFlow DNN</strong> Deep network structure: Input (11) → Dense(128) → BatchNorm → Dropout(0.3) → Dense(64) → Dense(32) → Dense(1, Sigmoid). AUC-ROC: 0.82.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. RAG & LangGraph */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] to-[#121212] border border-zinc-800 rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-2xl">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 border-b border-zinc-800/50 pb-12">
            <div className="bg-white/10 p-5 rounded-[2rem]"><Bot className="text-white" size={40} /></div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Local RAG & LangGraph Agent</h2>
              <p className="text-zinc-400 text-lg max-w-3xl leading-relaxed">
                A conversational AI consultant built completely without external cloud LLM embedding APIs, orchestrating multi-agent state flows locally.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-black/40 p-8 md:p-10 rounded-[2.5rem] border border-zinc-800/50 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-8">1. Hugging Face Semantic Search</h3>
              <ul className="space-y-8 text-zinc-400 text-sm">
                <li>
                  <strong className="text-blue-400 block text-base mb-2">Model: all-MiniLM-L6-v2</strong>
                  A lightweight 384-dimensional Sentence-Transformer model running entirely locally.
                </li>
                <li>
                  <strong className="text-blue-400 block text-base mb-2">ChromaDB Vector Store</strong>
                  Saved locally to <code className="bg-zinc-900 px-1.5 py-0.5 rounded text-zinc-300 font-mono text-xs">/data/vector_db</code> for sub-millisecond retrieval latency, executed via SentenceTransformerEmbeddingFunction.
                </li>
                <li>
                  <strong className="text-blue-400 block text-base mb-2">Ingested Knowledge</strong>
                  Embeds KPI SQL mappings, model registry architectures, and hardcoded business rules (e.g., Revenue = SUM(price + freight_value)).
                </li>
              </ul>
            </div>

            <div className="bg-black/40 p-8 md:p-10 rounded-[2.5rem] border border-zinc-800/50 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-8">2. LangGraph Stateful Flow</h3>
              <ul className="space-y-8 text-zinc-400 text-sm">
                <li>
                  <strong className="text-purple-400 block text-base mb-2">Router & Planner Nodes</strong>
                  Evaluates input via Llama 3. The planner deconstructs complex questions into structured task lists.
                </li>
                <li>
                  <strong className="text-purple-400 block text-base mb-2">Data Gatherer & SQL Safety Guardian</strong>
                  Executes the planner's checklist, triggers KPI scripts, drafts temporary SQL, and strictly blocks mutating keywords.
                </li>
                <li>
                  <strong className="text-purple-400 block text-base mb-2">RAG Retriever & Synthesizer</strong>
                  Queries ChromaDB for semantic matches. Merges memory, raw data, and rules into a polished executive markdown report using Llama 3.3 70B.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
