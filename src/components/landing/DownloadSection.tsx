import { useMemo } from "react";
import { motion } from "framer-motion";
import { Download, Monitor, Apple, Terminal, ExternalLink, Loader2 } from "lucide-react";
import { useLatestRelease, detectOS } from "@/hooks/useLatestRelease";

// ─── Types ────────────────────────────────────────────────────────────────────
interface DownloadItem {
  label: string;
  sub: string;
  url: string;
  os: "mac" | "win" | "linux";
}

const OsIcon = ({ os }: { os: "mac" | "win" | "linux" | "other" }) => {
  if (os === "mac")   return <Apple className="h-5 w-5" />;
  if (os === "win")   return <Monitor className="h-5 w-5" />;
  if (os === "linux") return <Terminal className="h-5 w-5" />;
  return <Download className="h-5 w-5" />;
};

const OS_COLORS = {
  mac:   "from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-400",
  win:   "from-cyan-500/20 to-cyan-600/10 border-cyan-500/30 text-cyan-400",
  linux: "from-orange-500/20 to-orange-600/10 border-orange-500/30 text-orange-400",
};

const OS_BTN = {
  mac:   "bg-blue-600 hover:bg-blue-500 text-white",
  win:   "bg-cyan-500 hover:bg-cyan-400 text-gray-900",
  linux: "bg-orange-500 hover:bg-orange-400 text-white",
};

// ─── Sub-components ───────────────────────────────────────────────────────────
function PrimaryButton({
  url,
  os,
  version,
}: {
  url: string;
  os: "mac" | "win" | "linux" | "other";
  version: string;
}) {
  const label =
    os === "mac"   ? "Download for Mac" :
    os === "win"   ? "Download for Windows" :
    os === "linux" ? "Download for Linux" :
                     "View All Downloads";

  const cls =
    os === "mac"   ? OS_BTN.mac :
    os === "win"   ? OS_BTN.win :
    os === "linux" ? OS_BTN.linux :
                     "bg-primary hover:bg-primary/90 text-primary-foreground";

  return (
    <a
      href={url}
      target={os === "other" ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 rounded-xl px-8 py-4 text-base font-semibold transition-all duration-200 active:scale-95 shadow-lg ${cls}`}
    >
      <OsIcon os={os} />
      {label}
      {version && (
        <span className="ml-1 text-sm font-normal opacity-70">{version}</span>
      )}
    </a>
  );
}

function DownloadCard({ item }: { item: DownloadItem }) {
  const color = OS_COLORS[item.os];

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className={`flex items-center justify-between gap-4 rounded-xl border bg-gradient-to-br p-4 transition-all duration-200 ${color}`}
    >
      <div className="flex items-center gap-3 min-w-0">
        <div className="flex-shrink-0">
          <OsIcon os={item.os} />
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-foreground text-sm truncate">{item.label}</p>
          <p className="text-xs text-muted-foreground truncate">{item.sub}</p>
        </div>
      </div>
      <a
        href={item.url}
        className="flex-shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-current/20 bg-background/30 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm hover:bg-background/50 transition-colors"
      >
        <Download className="h-3 w-3" />
        Download
      </a>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function DownloadSection() {
  const { release, downloads, loading, error } = useLatestRelease();
  const os = useMemo(() => detectOS(), []);

  const version = release?.tag_name ?? "";

  // Primary button URL — best file for detected OS
  const primaryUrl =
    os === "mac"   ? (downloads.mac ?? release?.html_url ?? "#") :
    os === "win"   ? (downloads.winX64 ?? release?.html_url ?? "#") :
    os === "linux" ? (downloads.linuxAppImage ?? release?.html_url ?? "#") :
                     (release?.html_url ?? "https://github.com/Cksahu143/meku-time-flow/releases/latest");

  // All downloads list
  const allDownloads: DownloadItem[] = [
    downloads.mac        && { label: "macOS",              sub: "Universal — Intel + Apple Silicon (.dmg)", url: downloads.mac,         os: "mac"   as const },
    downloads.macZip     && { label: "macOS ZIP",          sub: "Manual install fallback",                  url: downloads.macZip,      os: "mac"   as const },
    downloads.winX64     && { label: "Windows 64-bit",     sub: "NSIS installer (.exe)",                    url: downloads.winX64,      os: "win"   as const },
    downloads.winIa32    && { label: "Windows 32-bit",     sub: "For older PCs (.exe)",                     url: downloads.winIa32,     os: "win"   as const },
    downloads.winPortable&& { label: "Windows Portable",   sub: "No install — run from USB (.exe)",         url: downloads.winPortable, os: "win"   as const },
    downloads.linuxAppImage && { label: "Linux x64",       sub: "AppImage — any distro, no install",        url: downloads.linuxAppImage,os:"linux"  as const },
    downloads.linuxArm64 && { label: "Linux ARM64",        sub: "Raspberry Pi 4/5, modern ARM",             url: downloads.linuxArm64,  os: "linux" as const },
    downloads.linuxArmv7l&& { label: "Linux ARMv7",        sub: "Raspberry Pi 2/3, old ARM devices",        url: downloads.linuxArmv7l, os: "linux" as const },
    downloads.linuxDeb   && { label: "Linux .deb",         sub: "Ubuntu / Debian",                          url: downloads.linuxDeb,    os: "linux" as const },
    downloads.linuxRpm   && { label: "Linux .rpm",         sub: "Fedora / RHEL / CentOS",                   url: downloads.linuxRpm,    os: "linux" as const },
  ].filter(Boolean) as DownloadItem[];

  return (
    <section id="download" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            <Download className="h-3.5 w-3.5" />
            Free Desktop App
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Download{" "}
            <span className="text-gradient-hero">EDAS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Available for every platform — Mac, Windows, and Linux.
            Even works on 20-year-old computers.
          </p>
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-center gap-3 mb-16"
        >
          {loading ? (
            <div className="inline-flex items-center gap-3 rounded-xl bg-muted px-8 py-4 text-base font-semibold text-muted-foreground">
              <Loader2 className="h-5 w-5 animate-spin" />
              Loading latest release...
            </div>
          ) : error ? (
            <a
              href="https://github.com/Cksahu143/meku-time-flow/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
              View on GitHub Releases
            </a>
          ) : (
            <PrimaryButton url={primaryUrl} os={os} version={version} />
          )}

          {!loading && !error && release && (
            <p className="text-sm text-muted-foreground">
              {version} &nbsp;·&nbsp;{" "}
              <a
                href={release.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Release notes
              </a>
              &nbsp;·&nbsp;
              <a href="#all-downloads" className="text-primary hover:underline">
                Other platforms ↓
              </a>
            </p>
          )}
        </motion.div>

        {/* All downloads grid */}
        {!loading && !error && allDownloads.length > 0 && (
          <motion.div
            id="all-downloads"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground text-center mb-6">
              All Platforms
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {allDownloads.map((item) => (
                <DownloadCard key={item.url} item={item} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
