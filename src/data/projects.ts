export interface ProjectFeature {
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface ProjectTech {
  name: string;
  dotColor: string;
}

export interface ProjectRoadmap {
  phase: string;
  title: string;
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  tech: string;
  desc: string;
  category: string;
  dateRange: string;
  type: string;
  link: string;
  thumbnail: string;
  isLive: boolean;
  detailedDesc?: string;
  keyFeatures?: string[];
  features?: ProjectFeature[];
  techStackExtended?: ProjectTech[];
  roadmap?: ProjectRoadmap[];
}

export const projects: Project[] = [
  {
    slug: "voice-ai-booking-agent",
    title: "Voice AI Booking Agent",
    tech: "Voice AI, Speech-to-Text (STT), Text-to-Speech (TTS), LLM Orchestration, n8n Workflows",
    desc: "Built a production-grade Voice AI Agent automating end-to-end car rental sales calls, handling availability, dynamic pricing, and bookings with zero human intervention. Handled 30% more leads running 24/7.",
    category: "ai-agents",
    dateRange: "SEPT 2025 - FEB 2026",
    type: "VOICE AI",
    link: "https://github.com/Sohaib-Haider",
    thumbnail: "/voice-ai-booking-agent-v4.png",
    isLive: false,
    detailedDesc: "Developed a fully autonomous Voice AI Agent for Speedy Drive Car Rental. The system handles end-to-end sales calls, performing live availability lookups, calculating dynamic pricing through backend data extraction, and completing bookings without human intervention. By integrating Vapi API tool-calling architecture, Twilio telephony, and Deepgram Nova-2, it eliminates pricing hallucinations and seamlessly routes mid-call data. Latency was optimized from 1500ms down to 1050ms, while cost-per-minute was reduced by over 60%.",
    keyFeatures: [
      "End-to-end automated voice sales calls via Twilio & Vapi",
      "Dynamic pricing calculations mapped to 7 distinct rental durations",
      "Structured Outputs extraction for bookings (Name, Car, Email, Phone)",
      "Deepgram Nova-2 + GPT-4o Orchestration"
    ]
  },
  {
    slug: "business-insights-and-sales-forecasting",
    title: "Business Insights & Predictive Intelligence Platform",
    tech: "PyTorch, Llama 3, LangGraph, FastAPI, TensorFlow, XGBoost",
    desc: "Developed a full-stack AI-driven business intelligence platform featuring a LangGraph-powered multi-agent consultant, XGBoost time-series forecasting, and deep learning models for customer churn prediction.",
    category: "data-science",
    dateRange: "FEB 2024 - APR 2024",
    type: "DASHBOARD",
    link: "https://github.com/Sohaib-Haider",
    thumbnail: "/business-insights-dark-v4.png",
    isLive: false,
    detailedDesc: "This comprehensive Business Intelligence platform empowers e-commerce store owners to make data-driven decisions. It integrates an advanced XGBoost model for accurate time-series sales forecasting, an inventory management system with batch-level profit tracking, and a Retrieval-Augmented Generation (RAG) chatbot that allows non-technical users to query business metrics using natural language.",
    keyFeatures: [
      "Time-series forecasting with XGBoost",
      "Batch-costing inventory management system",
      "Interactive analytics dashboard",
      "Natural language querying via RAG Chatbot"
    ],
    features: [
      {
        title: "Multi-Agent AI Consultant",
        description: "Agentic orchestration using LangGraph and Llama 3. Automates data extraction from vector stores (ChromaDB) and SQL databases to provide executive business advice.",
        icon: "Bot",
        tags: ["LangGraph", "Llama 3", "Agents"]
      },
      {
        title: "Sales Forecasting Engine",
        description: "Multi-model forecasting using Facebook Prophet and LSTM neural networks. 30/60/90-day predictions with lag feature engineering and confidence intervals.",
        icon: "TrendingUp",
        tags: ["Prophet", "LSTM", "Time-Series"]
      },
      {
        title: "Deep Learning Churn Prediction",
        description: "Customer churn prediction using a multi-layer DNN built with TensorFlow. Addresses class imbalance dynamically using SMOTE oversampling.",
        icon: "UserMinus",
        tags: ["TensorFlow", "SMOTE", "Classification"]
      },
      {
        title: "Unsupervised Segmentation",
        description: "RFM-based feature engineering combined with K-Nearest Neighbors (KNN) clustering to automatically identify Champions, Loyalists, and At-Risk customer profiles.",
        icon: "Users",
        tags: ["KNN", "Clustering", "RFM"]
      },
      {
        title: "Dashboard Overview",
        description: "Real-time KPI monitoring with revenue, orders, profit, and churn metrics. Customizable widgets with live data feeds and trend indicators.",
        icon: "LayoutDashboard",
        tags: ["Real-time", "KPI Tracking"]
      },
      {
        title: "Inventory Management",
        description: "Batch-wise tracking with FIFO/LIFO support. Real-time stock levels, aging reports, reorder alerts, and dead stock identification.",
        icon: "PackageSearch",
        tags: ["Batch Tracking", "FIFO/LIFO"]
      }
    ],
    techStackExtended: [
      { name: "PyTorch & TensorFlow", dotColor: "bg-orange-500" },
      { name: "LangGraph & LangChain", dotColor: "bg-green-500" },
      { name: "Llama 3 (Groq API)", dotColor: "bg-purple-400" },
      { name: "ChromaDB Vector Store", dotColor: "bg-cyan-500" },
      { name: "Hugging Face Embeddings", dotColor: "bg-yellow-400" },
      { name: "XGBoost & Scikit-learn", dotColor: "bg-orange-600" },
      { name: "Facebook Prophet", dotColor: "bg-blue-400" },
      { name: "FastAPI (Python)", dotColor: "bg-emerald-500" },
      { name: "React + TypeScript", dotColor: "bg-cyan-400" },
      { name: "PostgreSQL & SQLite", dotColor: "bg-blue-500" }
    ],
    roadmap: [
      {
        phase: "01",
        title: "Foundation",
        items: [
          "Database design",
          "Core backend APIs",
          "Basic dashboard",
          "Auth & user mgmt"
        ]
      },
      {
        phase: "02",
        title: "Intelligence",
        items: [
          "ML model integration",
          "Sales forecasting",
          "Customer segmentation",
          "Churn prediction"
        ]
      },
      {
        phase: "03",
        title: "AI Integration",
        items: [
          "RAG chatbot build",
          "NLP query engine",
          "FAISS vector store",
          "Report automation"
        ]
      },
      {
        phase: "04",
        title: "Scale & Optimize",
        items: [
          "Performance tuning",
          "Multi-branch support",
          "Mobile app",
          "API marketplace"
        ]
      }
    ]
  },
  {
    slug: "ai-virtual-try-on",
    title: "AI Virtual Try-On SaaS",
    tech: "TypeScript, Fastify, BullMQ, Redis, Gemini 2.5 Flash, Cloudflare R2",
    desc: "A highly-scalable, production-grade virtual try-on API and embeddable widget. Built with Fastify, a distributed BullMQ/Redis job queue, and Gemini 2.5 Flash for photorealistic garment rendering.",
    category: "backend",
    dateRange: "JAN 2026 - PRESENT",
    type: "BACKEND",
    link: "https://github.com/Sohaib-Haider",
    thumbnail: "/try-on-v1.png",
    isLive: false,
    features: [
      {
        title: "Photorealistic AI Generation",
        description: "Powered by Gemini 2.5 Flash Vision. Automatically enhances, upscales, and renders garments with realistic physics while preserving the user's exact facial structure and pose.",
        icon: "Sparkles",
        tags: ["Gemini 2.5 Flash", "Generative AI"]
      },
      {
        title: "Distributed Task Queue",
        description: "Heavy AI generation workloads are offloaded to background worker processes using BullMQ and ioredis, ensuring the main HTTP server never blocks under high traffic.",
        icon: "Layers",
        tags: ["BullMQ", "Background Workers"]
      },
      {
        title: "High-Performance API",
        description: "Built on Fastify for ultra-low overhead. Includes multipart parsing for image uploads, CORS for merchant domains, and strict IP rate-limiting for DDoS protection.",
        icon: "Cpu",
        tags: ["Fastify", "Rate Limiting"]
      },
      {
        title: "Embeddable Client Widget",
        description: "Vanilla JS (ES6+) widget with Scoped CSS that injects seamlessly into merchant websites, automatically scanning for product images and rendering try-on buttons.",
        icon: "AppWindow",
        tags: ["Vanilla JS", "Widget Injection"]
      },
      {
        title: "Zero-Egress Asset CDN",
        description: "User photos and AI-generated results are streamed directly to Cloudflare R2 object storage via AWS S3 SDK presigned URLs to eliminate bandwidth costs.",
        icon: "Database",
        tags: ["Cloudflare R2", "S3 SDK"]
      },
      {
        title: "Real-time Status Polling",
        description: "The frontend widget continuously polls the Fastify API (backed by high-speed Redis lookups) to seamlessly update users on job lifecycle statuses.",
        icon: "RefreshCw",
        tags: ["Status Polling", "Redis Cache"]
      }
    ],
    techStackExtended: [
      { name: "Node.js & TypeScript", dotColor: "bg-blue-500" },
      { name: "Fastify Framework", dotColor: "bg-zinc-300" },
      { name: "BullMQ & ioredis", dotColor: "bg-red-500" },
      { name: "Gemini 2.5 Flash Vision", dotColor: "bg-cyan-400" },
      { name: "Cloudflare R2 (S3)", dotColor: "bg-orange-500" },
      { name: "PostgreSQL & Prisma", dotColor: "bg-indigo-500" },
      { name: "Vanilla JS Widget", dotColor: "bg-yellow-400" }
    ],
    roadmap: [
      {
        phase: "01",
        title: "Infrastructure",
        items: [
          "Fastify API setup",
          "PostgreSQL & Prisma",
          "Merchant Auth limits"
        ]
      },
      {
        phase: "02",
        title: "Async Queue",
        items: [
          "BullMQ configuration",
          "Redis job state machine",
          "Background workers"
        ]
      },
      {
        phase: "03",
        title: "AI & Storage",
        items: [
          "Gemini 2.5 Flash prompts",
          "Cloudflare R2 uploads",
          "Image enhancement"
        ]
      },
      {
        phase: "04",
        title: "Client Widget",
        items: [
          "Vanilla JS bundler",
          "DOM injection scripts",
          "Real-time polling UI"
        ]
      }
    ]
  },
  {
    slug: "smart-movie-recommendation-system",
    title: "Simple Movie Recommendation System",
    tech: "Python, NLP, scikit-learn, TMDB API",
    desc: "Built a content-based recommendation engine using NLP feature engineering (cosine similarity matching on tags). Integrated TMDB API to dynamically render poster images and details.",
    category: "data-science",
    dateRange: "MAR 2024 - APR 2024",
    type: "SYSTEM",
    link: "https://github.com/Sohaib-Haider",
    thumbnail: "/movie-recommendation-v3.png",
    isLive: false,
    detailedDesc: "A robust content-based movie recommendation system that goes beyond simple genre matching. By applying Natural Language Processing (NLP) techniques to analyze plot summaries, keywords, cast, and crew data, the engine builds dense feature vectors and uses cosine similarity to find highly relevant recommendations. It integrates seamlessly with the TMDB API to fetch high-quality metadata and posters in real-time.",
    keyFeatures: [
      "Content-based filtering using Cosine Similarity",
      "NLP feature engineering on metadata tags",
      "Real-time data integration with TMDB API",
      "Dynamic user interface for browsing recommendations"
    ]
  },
  {
    slug: "flight-customer-satisfaction-predictor",
    title: "Flight Customer Satisfaction Predictor",
    tech: "Python, scikit-learn, Random Forest, KNN",
    desc: "Conducted thorough EDA and engineered a classification pipeline comparing Random Forest, Logistic Regression, and KNN models to identify customer satisfaction drivers.",
    category: "data-science",
    dateRange: "JAN 2024 - AUG 2024",
    type: "MACHINE LEARNING",
    link: "https://github.com/Sohaib-Haider",
    thumbnail: "/flight-customer.png",
    isLive: false,
    detailedDesc: "This data science project focuses on uncovering the key drivers behind airline passenger satisfaction. Through extensive Exploratory Data Analysis (EDA) and rigorous feature engineering, various classification models including Random Forest, Logistic Regression, and K-Nearest Neighbors (KNN) were trained and evaluated. The final model accurately predicts customer satisfaction and provides actionable insights into service areas needing improvement.",
    keyFeatures: [
      "Comprehensive Exploratory Data Analysis (EDA)",
      "Model comparison (Random Forest, Logistic Regression, KNN)",
      "Hyperparameter tuning and cross-validation",
      "Feature importance analysis for actionable business insights"
    ]
  }
];
