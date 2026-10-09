"use client";

import React, { useState } from "react";
import {
  UploadCloud,
  FileText,
  CheckCircle,
  Clock,
  Layers,
  Database,
  Search,
  Eye,
  Trash2,
  FolderOpen,
  Tag,
  ArrowRight,
  Shield,
  FileCheck,
} from "lucide-react";

interface DocItem {
  id: string;
  name: string;
  category: string;
  size: string;
  pages: number;
  chunks: number;
  status: "ready" | "indexing";
  date: string;
  sampleText: string;
}

export default function DocumentVault() {
  const [docs, setDocs] = useState<DocItem[]>([
    {
      id: "doc-1",
      name: "Clinical_Trial_Protocol_v2.pdf",
      category: "Healthcare",
      size: "2.4 MB",
      pages: 18,
      chunks: 42,
      status: "ready",
      date: "Today, 10:24 AM",
      sampleText:
        "Eligibility criteria mandate that enrolled subjects must be between 18 and 65 years of age with confirmed baseline HbA1c between 7.5% and 10.5%...",
    },
    {
      id: "doc-2",
      name: "Master_Services_Agreement_2026.pdf",
      category: "Legal & Compliance",
      size: "1.8 MB",
      pages: 12,
      chunks: 28,
      status: "ready",
      date: "Yesterday",
      sampleText:
        "The Vendor covenants that no Customer Confidential Information will be transferred to third-party cloud infrastructure or unapproved LLM APIs...",
    },
    {
      id: "doc-3",
      name: "Audited_Financial_Statement_Q3.pdf",
      category: "Finance",
      size: "4.1 MB",
      pages: 34,
      chunks: 85,
      status: "ready",
      date: "Oct 04, 2026",
      sampleText:
        "Operating EBITDA increased by 14.2% year-over-year, driven by disciplined capital expenditures in edge inference infrastructure...",
    },
  ]);

  const [selectedDoc, setSelectedDoc] = useState<DocItem>(docs[0]);
  const [isUploading, setIsUploading] = useState(false);
  const [pipelineStage, setPipelineStage] = useState(0);

  const simulateUpload = () => {
    setIsUploading(true);
    setPipelineStage(1);

    setTimeout(() => setPipelineStage(2), 700); // Chunking
    setTimeout(() => setPipelineStage(3), 1400); // Embedding
    setTimeout(() => setPipelineStage(4), 2100); // Indexing
    setTimeout(() => {
      const newDoc: DocItem = {
        id: `doc-${Date.now()}`,
        name: "Defense_Security_Briefing_Classified.pdf",
        category: "Government/Defense",
        size: "3.2 MB",
        pages: 16,
        chunks: 39,
        status: "ready",
        date: "Just Now",
        sampleText:
          "Tactical operations report on uncrewed reconnaissance drones operating in zero-RF electromagnetic quiet environments...",
      };
      setDocs((prev) => [newDoc, ...prev]);
      setSelectedDoc(newDoc);
      setIsUploading(false);
      setPipelineStage(0);
    }, 2800);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {/* Top Banner / Ingestion Pipeline Visualizer */}
      <div className="glass-panel" style={{ padding: "1.5rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "1.2rem",
          }}
        >
          <div>
            <h2 style={{ fontSize: "1.25rem", color: "#FFF", marginBottom: "4px" }}>
              Zero-Trust Local Document Ingestion
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
              Documents are parsed, chunked, and embedded completely on your device. No bytes ever leave your device.
            </p>
          </div>
          <button
            onClick={simulateUpload}
            disabled={isUploading}
            className="btn-primary"
            id="simulate-upload-btn"
          >
            <UploadCloud size={16} />
            {isUploading ? "Ingesting Document..." : "Simulate Local PDF Upload"}
          </button>
        </div>

        {/* 4-Step Pipeline Indicator */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
            backgroundColor: "rgba(10, 13, 20, 0.6)",
            padding: "1rem",
            borderRadius: "12px",
            border: "1px solid var(--border-subtle)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color:
                pipelineStage >= 1
                  ? "var(--emerald-400)"
                  : "var(--text-muted)",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                backgroundColor:
                  pipelineStage >= 1
                    ? "rgba(16, 185, 129, 0.2)"
                    : "rgba(255, 255, 255, 0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.8rem",
                fontWeight: 700,
              }}
            >
              1
            </div>
            <div>
              <div style={{ fontSize: "0.82rem", fontWeight: 600 }}>PDF Parsing & OCR</div>
              <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>
                Text sanitization
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color:
                pipelineStage >= 2
                  ? "var(--emerald-400)"
                  : "var(--text-muted)",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                backgroundColor:
                  pipelineStage >= 2
                    ? "rgba(16, 185, 129, 0.2)"
                    : "rgba(255, 255, 255, 0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.8rem",
                fontWeight: 700,
              }}
            >
              2
            </div>
            <div>
              <div style={{ fontSize: "0.82rem", fontWeight: 600 }}>Semantic Chunking</div>
              <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>
                512 tok + 64 overlap
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color:
                pipelineStage >= 3
                  ? "var(--emerald-400)"
                  : "var(--text-muted)",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                backgroundColor:
                  pipelineStage >= 3
                    ? "rgba(16, 185, 129, 0.2)"
                    : "rgba(255, 255, 255, 0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.8rem",
                fontWeight: 700,
              }}
            >
              3
            </div>
            <div>
              <div style={{ fontSize: "0.82rem", fontWeight: 600 }}>Local Embedding</div>
              <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>
                BGE-small (384-dim)
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color:
                pipelineStage >= 4
                  ? "var(--emerald-400)"
                  : "var(--text-muted)",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                backgroundColor:
                  pipelineStage >= 4
                    ? "rgba(16, 185, 129, 0.2)"
                    : "rgba(255, 255, 255, 0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.8rem",
                fontWeight: 700,
              }}
            >
              4
            </div>
            <div>
              <div style={{ fontSize: "0.82rem", fontWeight: 600 }}>SQLite FTS & Vector Index</div>
              <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>
                AES-256 encrypted
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Document List & Chunk Inspector */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {/* Document List */}
        <div className="glass-panel" style={{ padding: "1.5rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1.2rem",
            }}
          >
            <h3 style={{ fontSize: "1.1rem", color: "#FFF" }}>Indexed Documents</h3>
            <span className="badge-pill badge-emerald">{docs.length} Active Vaults</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {docs.map((d) => {
              const isSelected = selectedDoc.id === d.id;
              return (
                <div
                  key={d.id}
                  onClick={() => setSelectedDoc(d)}
                  style={{
                    padding: "1rem",
                    borderRadius: "12px",
                    backgroundColor: isSelected
                      ? "rgba(16, 185, 129, 0.12)"
                      : "rgba(255, 255, 255, 0.03)",
                    border: isSelected
                      ? "1px solid var(--emerald-400)"
                      : "1px solid var(--border-subtle)",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "6px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <FileText
                        size={16}
                        color={isSelected ? "var(--emerald-400)" : "var(--cyan-400)"}
                      />
                      <span
                        style={{
                          fontSize: "0.92rem",
                          fontWeight: 600,
                          color: isSelected ? "#FFF" : "var(--text-primary)",
                        }}
                      >
                        {d.name}
                      </span>
                    </div>
                    <span className="badge-pill badge-cyan" style={{ fontSize: "0.7rem" }}>
                      {d.category}
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "14px",
                      fontSize: "0.76rem",
                      color: "var(--text-muted)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    <span>{d.pages} pages</span>
                    <span>•</span>
                    <span>{d.chunks} chunks</span>
                    <span>•</span>
                    <span>{d.size}</span>
                    <span>•</span>
                    <span style={{ color: "var(--emerald-400)" }}>{d.date}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Chunk & Representation Inspector */}
        <div className="glass-panel" style={{ padding: "1.5rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1.2rem",
            }}
          >
            <div>
              <h3 style={{ fontSize: "1.1rem", color: "#FFF" }}>
                Under-The-Hood Vector & Lexical Inspector
              </h3>
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                Inspect how EdgeMind represents & indexes: <strong>{selectedDoc.name}</strong>
              </p>
            </div>
            <span className="badge-pill badge-cyan">SQLite Local Storage</span>
          </div>

          {/* Sample Chunk Preview */}
          <div
            style={{
              backgroundColor: "rgba(10, 13, 20, 0.7)",
              borderRadius: "10px",
              padding: "1rem",
              border: "1px solid var(--border-subtle)",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                fontFamily: "var(--font-mono)",
                color: "var(--emerald-400)",
                marginBottom: "6px",
              }}
            >
              CHUNK ID: #001 (512 TOKENS • OVERLAP: 64)
            </div>
            <p
              style={{
                fontSize: "0.85rem",
                lineHeight: 1.6,
                color: "var(--text-secondary)",
              }}
            >
              &ldquo;{selectedDoc.sampleText}&rdquo;
            </p>
          </div>

          {/* Dual Index Representation */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            {/* Dense Vector */}
            <div
              style={{
                backgroundColor: "rgba(6, 182, 212, 0.06)",
                border: "1px solid rgba(6, 182, 212, 0.2)",
                borderRadius: "10px",
                padding: "1rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "var(--cyan-400)",
                  fontFamily: "var(--font-mono)",
                  marginBottom: "6px",
                }}
              >
                DENSE VECTOR EMBEDDING
              </div>
              <div
                style={{
                  fontSize: "0.74rem",
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-muted)",
                  lineHeight: 1.5,
                }}
              >
                Model: <strong>BGE-small-en-v1.5</strong>
                <br />
                Dimensions: <strong>384-float32</strong>
                <br />
                Vector Sample:
                <div
                  style={{
                    backgroundColor: "rgba(0,0,0,0.4)",
                    padding: "4px 6px",
                    borderRadius: "4px",
                    marginTop: "4px",
                    color: "var(--cyan-400)",
                  }}
                >
                  [-0.041, 0.082, 0.015, -0.091, 0.114, ...]
                </div>
              </div>
            </div>

            {/* Sparse BM25 Lexical */}
            <div
              style={{
                backgroundColor: "rgba(16, 185, 129, 0.06)",
                border: "1px solid rgba(16, 185, 129, 0.2)",
                borderRadius: "10px",
                padding: "1rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "var(--emerald-400)",
                  fontFamily: "var(--font-mono)",
                  marginBottom: "6px",
                }}
              >
                SPARSE BM25 INDEX
              </div>
              <div
                style={{
                  fontSize: "0.74rem",
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-muted)",
                  lineHeight: 1.5,
                }}
              >
                Engine: <strong>SQLite FTS5</strong>
                <br />
                Key Inverted Tokens:
                <div
                  style={{
                    backgroundColor: "rgba(0,0,0,0.4)",
                    padding: "4px 6px",
                    borderRadius: "4px",
                    marginTop: "4px",
                    color: "var(--emerald-400)",
                  }}
                >
                  criteria(tf:3), hba1c(tf:2), egfr(tf:1), dosage(tf:4)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
