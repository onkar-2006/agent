"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Cpu,
  FileText,
  MessageSquare,
  Activity,
  Menu,
  X,
  Lock,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface NavbarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  isAppView?: boolean;
}

export default function Navbar({
  activeTab = "home",
  onTabChange,
  isAppView = false,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "chat", label: "Chat Studio", icon: MessageSquare },
    { id: "documents", label: "Document Vault", icon: FileText },
    { id: "security", label: "Guardrail Shield", icon: ShieldCheck },
    { id: "telemetry", label: "Model Telemetry", icon: Cpu },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        backgroundColor: "rgba(10, 13, 20, 0.8)",
        borderBottom: "1px solid var(--border-dim)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 1.25rem",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "12px",
              background:
                "linear-gradient(135deg, var(--emerald-500) 0%, var(--cyan-500) 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 20px rgba(16, 185, 129, 0.35)",
            }}
          >
            <Lock size={22} color="#05070B" strokeWidth={2.5} />
          </div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "#FFFFFF",
                }}
              >
                EdgeMind<span style={{ color: "var(--emerald-400)" }}>.AI</span>
              </span>
              <span className="badge-pill badge-emerald">v1.0 BE-P13</span>
            </div>
            <div
              style={{
                fontSize: "0.72rem",
                color: "var(--text-muted)",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              100% On-Device • Zero Egress
            </div>
          </div>
        </Link>

        {/* Desktop Navigation / Mode Tabs */}
        {isAppView && onTabChange ? (
          <nav
            style={{
              display: "none",
              gap: "6px",
              backgroundColor: "rgba(22, 28, 44, 0.6)",
              padding: "4px",
              borderRadius: "12px",
              border: "1px solid var(--border-subtle)",
            }}
            className="md-flex"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    fontFamily: "var(--font-heading)",
                    transition: "all 0.2s ease",
                    backgroundColor: isActive
                      ? "rgba(16, 185, 129, 0.15)"
                      : "transparent",
                    color: isActive ? "var(--emerald-400)" : "var(--text-secondary)",
                    boxShadow: isActive ? "0 0 14px rgba(16, 185, 129, 0.2)" : "none",
                  }}
                >
                  <Icon size={16} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        ) : (
          <nav
            style={{
              display: "none",
              gap: "24px",
              alignItems: "center",
            }}
            className="md-flex"
          >
            <Link
              href="#features"
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.92rem",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
            >
              Features
            </Link>
            <Link
              href="#architecture"
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.92rem",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
            >
              Architecture
            </Link>
            <Link
              href="#comparison"
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.92rem",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
            >
              Benchmarks
            </Link>
            <Link
              href="#about"
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.92rem",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
            >
              BE Project Team
            </Link>
          </nav>
        )}

        {/* Right CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              display: "none",
              alignItems: "center",
              gap: "6px",
              padding: "6px 12px",
              borderRadius: "8px",
              backgroundColor: "rgba(16, 185, 129, 0.08)",
              border: "1px solid rgba(16, 185, 129, 0.2)",
              fontSize: "0.8rem",
              fontFamily: "var(--font-mono)",
              color: "var(--emerald-400)",
            }}
            className="lg-flex"
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "var(--emerald-400)",
                boxShadow: "0 0 8px var(--emerald-400)",
              }}
            />
            AIR-GAPPED READY
          </div>

          {!isAppView ? (
            <Link href="/app" className="btn-primary" id="launch-studio-nav-btn">
              <Sparkles size={16} />
              Launch Studio
            </Link>
          ) : (
            <Link href="/" className="btn-secondary" id="back-home-nav-btn">
              Exit to Home
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid var(--border-subtle)",
              color: "#FFF",
              cursor: "pointer",
            }}
            className="md-hide"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: "var(--bg-secondary)",
            borderBottom: "1px solid var(--border-subtle)",
            padding: "1rem 1.25rem",
          }}
          className="md-hide"
        >
          {isAppView && onTabChange ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onTabChange(item.id);
                      setMobileMenuOpen(false);
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      border: "none",
                      textAlign: "left",
                      backgroundColor: isActive
                        ? "rgba(16, 185, 129, 0.15)"
                        : "transparent",
                      color: isActive ? "var(--emerald-400)" : "var(--text-secondary)",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    <Icon size={18} />
                    {item.label}
                  </button>
                );
              })}
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Link
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: "var(--text-secondary)", padding: "6px 0" }}
              >
                Features
              </Link>
              <Link
                href="#architecture"
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: "var(--text-secondary)", padding: "6px 0" }}
              >
                Architecture
              </Link>
              <Link
                href="#comparison"
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: "var(--text-secondary)", padding: "6px 0" }}
              >
                Benchmarks
              </Link>
              <Link
                href="/app"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary"
                style={{ width: "100%", marginTop: "8px" }}
              >
                Launch Studio App
              </Link>
            </div>
          )}
        </div>
      )}

      <style jsx global>{`
        @media (min-width: 768px) {
          .md-flex {
            display: flex !important;
          }
          .md-hide {
            display: none !important;
          }
        }
        @media (min-width: 1024px) {
          .lg-flex {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
