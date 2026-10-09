"use client";

import React, { useState } from "react";
import {
  Cpu,
  Zap,
  Activity,
  HardDrive,
  BatteryCharging,
  Gauge,
  CheckCircle,
  Download,
  RotateCcw,
  Sparkles,
} from "lucide-react";

interface GGUFModel {
  id: string;
  name: string;
  params: string;
  quant: string;
  ramUsage: string;
  tps: number;
  ttft: string;
  status: "active" | "ready" | "downloadable";
  contextWindow: string;
}

export default function ModelTelemetry() {
  const [models, setModels] = useState<GGUFModel[]>([
    {
      id: "m-1",
      name: "Llama-3.2-1B-Instruct",
      params: "1.23B",
      quant: "GGUF Q4_K_M",
      ramUsage: "1.2 GB",
      tps: 18.6,
      ttft: "1.12s",
      status: "active",
      contextWindow: "4,096 tokens",
    },
    {
      id: "m-2",
      name: "Qwen-2.5-1.5B-Instruct",
      params: "1.54B",
      quant: "GGUF Q4_K_M",
      ramUsage: "1.45 GB",
      tps: 15.2,
      ttft: "1.34s",
      status: "ready",
      contextWindow: "4,096 tokens",
    },
    {
      id: "m-3",
      name: "Gemma-2-2B-IT",
      params: "2.1B",
      quant: "GGUF Q4_K_M",
      ramUsage: "1.82 GB",
      tps: 12.8,
      ttft: "1.65s",
      status: "ready",
      contextWindow: "8,192 tokens",
    },
  ]);

  const [activeModelId, setActiveModelId] = useState("m-1");
  const activeModel = models.find((m) => m.id === activeModelId) || models[0];

  const handleSelectModel = (id: string) => {
    setActiveModelId(id);
    setModels((prev) =>
      prev.map((m) => ({
        ...m,
        status: m.id === id ? "active" : "ready",
      }))
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {/* Top Banner */}
      <div
        className="glass-panel"
        style={{
          padding: "1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
            <Cpu size={20} color="var(--emerald-400)" />
            <h2 style={{ fontSize: "1.25rem", color: "#FFF" }}>
              On-Device Inference & Telemetry Engine
            </h2>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
            Real-time inference profiling powered by <strong>llama.cpp</strong> with 4-bit integer quantization on Snapdragon 8-series processors.
          </p>
        </div>

        <span className="badge-pill badge-emerald">
          <Activity size={12} />
          Active: {activeModel.name}
        </span>
      </div>

      {/* Hardware Telemetry Live Gauges */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1rem",
        }}
      >
        {/* Metric 1: TPS */}
        <div className="glass-panel" style={{ padding: "1.25rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
              Generation Speed
            </span>
            <Zap size={16} color="var(--emerald-400)" />
          </div>
          <div
            style={{
              fontSize: "1.8rem",
              fontWeight: 800,
              fontFamily: "var(--font-mono)",
              color: "#FFF",
            }}
          >
            {activeModel.tps}{" "}
            <span style={{ fontSize: "0.9rem", color: "var(--emerald-400)", fontWeight: 500 }}>
              tok/sec
            </span>
          </div>
          <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "4px" }}>
            Measured on Adreno GPU / Snapdragon 8 Gen 2
          </div>
        </div>

        {/* Metric 2: TTFT */}
        <div className="glass-panel" style={{ padding: "1.25rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
              Time to First Token
            </span>
            <Gauge size={16} color="var(--cyan-400)" />
          </div>
          <div
            style={{
              fontSize: "1.8rem",
              fontWeight: 800,
              fontFamily: "var(--font-mono)",
              color: "#FFF",
            }}
          >
            {activeModel.ttft}
          </div>
          <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "4px" }}>
            Includes hybrid retrieval + prompt ingestion
          </div>
        </div>

        {/* Metric 3: RAM Footprint */}
        <div className="glass-panel" style={{ padding: "1.25rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
              RAM Footprint
            </span>
            <HardDrive size={16} color="var(--emerald-400)" />
          </div>
          <div
            style={{
              fontSize: "1.8rem",
              fontWeight: 800,
              fontFamily: "var(--font-mono)",
              color: "#FFF",
            }}
          >
            {activeModel.ramUsage}{" "}
            <span style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: 500 }}>
              / 8 GB
            </span>
          </div>
          <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "4px" }}>
            Model weights + KV-Cache combined
          </div>
        </div>

        {/* Metric 4: Battery Efficiency */}
        <div className="glass-panel" style={{ padding: "1.25rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
              Battery Drain Rate
            </span>
            <BatteryCharging size={16} color="var(--cyan-400)" />
          </div>
          <div
            style={{
              fontSize: "1.8rem",
              fontWeight: 800,
              fontFamily: "var(--font-mono)",
              color: "#FFF",
            }}
          >
            ~2.2%{" "}
            <span style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: 500 }}>
              / hr
            </span>
          </div>
          <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "4px" }}>
            Measured during active sustained inference
          </div>
        </div>
      </div>

      {/* Model Selection & Quantization Profiles */}
      <div className="glass-panel" style={{ padding: "1.5rem" }}>
        <h3 style={{ fontSize: "1.1rem", color: "#FFF", marginBottom: "1.2rem" }}>
          Local GGUF Models & Quantization Profiles
        </h3>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
          {models.map((m) => {
            const isActive = m.id === activeModelId;
            return (
              <div
                key={m.id}
                onClick={() => handleSelectModel(m.id)}
                style={{
                  padding: "1.25rem",
                  borderRadius: "12px",
                  backgroundColor: isActive
                    ? "rgba(16, 185, 129, 0.1)"
                    : "rgba(255, 255, 255, 0.03)",
                  border: isActive
                    ? "1px solid var(--emerald-400)"
                    : "1px solid var(--border-subtle)",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "10px",
                  }}
                >
                  <div>
                    <h4 style={{ fontSize: "1rem", color: "#FFF", marginBottom: "4px" }}>
                      {m.name}
                    </h4>
                    <span className="badge-pill badge-cyan">{m.quant}</span>
                  </div>
                  {isActive ? (
                    <span className="badge-pill badge-emerald">ACTIVE</span>
                  ) : (
                    <button
                      className="btn-secondary"
                      style={{ padding: "4px 10px", fontSize: "0.75rem" }}
                    >
                      Load
                    </button>
                  )}
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "8px",
                    fontSize: "0.76rem",
                    color: "var(--text-secondary)",
                    fontFamily: "var(--font-mono)",
                    marginTop: "12px",
                    paddingTop: "10px",
                    borderTop: "1px solid var(--border-dim)",
                  }}
                >
                  <div>
                    Parameters: <strong style={{ color: "#FFF" }}>{m.params}</strong>
                  </div>
                  <div>
                    Context: <strong style={{ color: "#FFF" }}>{m.contextWindow}</strong>
                  </div>
                  <div>
                    RAM: <strong style={{ color: "#FFF" }}>{m.ramUsage}</strong>
                  </div>
                  <div>
                    Speed: <strong style={{ color: "var(--emerald-400)" }}>{m.tps} tok/s</strong>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* RAGAS & Academic Accuracy Benchmarks (Slide 5 & 18) */}
      <div className="glass-panel" style={{ padding: "1.5rem" }}>
        <h3 style={{ fontSize: "1.1rem", color: "#FFF", marginBottom: "1rem" }}>
          Accuracy & RAGAS Framework Benchmarks
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
          }}
        >
          <div
            style={{
              padding: "1rem",
              backgroundColor: "rgba(10, 13, 20, 0.7)",
              borderRadius: "10px",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Faithfulness</div>
            <div
              style={{
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "var(--emerald-400)",
                fontFamily: "var(--font-mono)",
              }}
            >
              94.2%
            </div>
            <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>
              Zero hallucination grounded in retrieved chunks
            </div>
          </div>

          <div
            style={{
              padding: "1rem",
              backgroundColor: "rgba(10, 13, 20, 0.7)",
              borderRadius: "10px",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Answer Relevance</div>
            <div
              style={{
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "var(--cyan-400)",
                fontFamily: "var(--font-mono)",
              }}
            >
              91.8%
            </div>
            <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>
              High contextual precision to user prompt
            </div>
          </div>

          <div
            style={{
              padding: "1rem",
              backgroundColor: "rgba(10, 13, 20, 0.7)",
              borderRadius: "10px",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Context Recall</div>
            <div
              style={{
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "var(--emerald-400)",
                fontFamily: "var(--font-mono)",
              }}
            >
              89.5%
            </div>
            <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>
              Reciprocal Rank Fusion (Dense + BM25)
            </div>
          </div>

          <div
            style={{
              padding: "1rem",
              backgroundColor: "rgba(10, 13, 20, 0.7)",
              borderRadius: "10px",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Perplexity Degradation</div>
            <div
              style={{
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                fontFamily: "var(--font-mono)",
              }}
            >
              +0.21 PPL
            </div>
            <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>
              INT4 quantization loss vs FP16 baseline
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
