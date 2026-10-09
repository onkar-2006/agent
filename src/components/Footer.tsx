import React from "react";
import Link from "next/link";
import { Shield, Lock, Terminal, Code2, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-subtle)",
        backgroundColor: "var(--bg-darkest)",
        padding: "4rem 1.5rem 2.5rem 1.5rem",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "3rem",
          marginBottom: "3rem",
        }}
      >
        {/* Col 1: Brand Info */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background:
                  "linear-gradient(135deg, var(--emerald-500) 0%, var(--cyan-500) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Lock size={18} color="#05070B" strokeWidth={2.5} />
            </div>
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "#FFFFFF",
              }}
            >
              EdgeMind<span style={{ color: "var(--emerald-400)" }}>.AI</span>
            </span>
          </div>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.9rem",
              lineHeight: 1.6,
              marginBottom: "1.5rem",
            }}
          >
            A Privacy-Preserving On-Device Intelligent Document Assistant powered by fine-tuned SLMs and local Hybrid RAG. Built for high-compliance healthcare, legal, finance, and defense sectors.
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <span className="badge-pill badge-emerald">100% Offline</span>
            <span className="badge-pill badge-cyan">llama.cpp INT4</span>
            <span className="badge-pill badge-coral">Zero-Leak Guardrail</span>
          </div>
        </div>



        {/* Col 4: Architecture & Security */}
        <div>
          <h4
            style={{
              color: "#FFF",
              fontSize: "1rem",
              marginBottom: "1.2rem",
              letterSpacing: "0.02em",
            }}
          >
            Enterprise Security
          </h4>
          <p
            style={{
              fontSize: "0.86rem",
              color: "var(--text-muted)",
              lineHeight: 1.6,
              marginBottom: "1rem",
            }}
          >
            EdgeMind runs without telemetry or analytics beacons. All vector representations, BM25 indices, and conversations are encrypted using local AES-256 storage.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              color: "var(--emerald-400)",
            }}
          >
            <Shield size={16} /> Air-Gapped Compliance Ready
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          borderTop: "1px solid var(--border-dim)",
          paddingTop: "2rem",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          fontSize: "0.85rem",
          color: "var(--text-muted)",
        }}
      >
        <div>
          © 2026 EdgeMind AI. Open Source under Apache 2.0 License.
        </div>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <span>Department of Computer Engineering</span>
          <span>Review 1 Capstone Submission</span>
        </div>
      </div>
    </footer>
  );
}
