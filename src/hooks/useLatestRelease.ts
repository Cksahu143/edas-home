import { useEffect, useState } from "react";

const OWNER = "Cksahu143";
const REPO = "meku-time-flow";

export interface ReleaseAsset {
  name: string;
  browser_download_url: string;
  size: number;
}

export interface LatestRelease {
  tag_name: string;
  published_at: string;
  html_url: string;
  assets: ReleaseAsset[];
}

export interface PlatformDownloads {
  mac?: string;
  macZip?: string;
  winX64?: string;
  winIa32?: string;
  winPortable?: string;
  linuxAppImage?: string;
  linuxArm64?: string;
  linuxArmv7l?: string;
  linuxDeb?: string;
  linuxRpm?: string;
}

function matchAssets(assets: ReleaseAsset[]): PlatformDownloads {
  const find = (pred: (a: ReleaseAsset) => boolean) =>
    assets.find(pred)?.browser_download_url;

  return {
    mac:          find(a => a.name.endsWith(".dmg")),
    macZip:       find(a => a.name.endsWith("-universal.zip")),
    winX64:       find(a => a.name.includes("Setup") && a.name.includes("x64") && a.name.endsWith(".exe")),
    winIa32:      find(a => a.name.includes("Setup") && a.name.includes("ia32") && a.name.endsWith(".exe")),
    winPortable:  find(a => !a.name.includes("Setup") && a.name.endsWith(".exe") && !a.name.includes("arm")),
    linuxAppImage:find(a => !a.name.includes("arm") && (a.name.endsWith("-x64.AppImage") || (a.name.endsWith(".AppImage") && !a.name.includes("arm")))),
    linuxArm64:   find(a => a.name.endsWith("-arm64.AppImage")),
    linuxArmv7l:  find(a => a.name.endsWith("-armv7l.AppImage")),
    linuxDeb:     find(a => a.name.endsWith("amd64.deb")),
    linuxRpm:     find(a => a.name.endsWith(".rpm")),
  };
}

export function useLatestRelease() {
  const [release, setRelease] = useState<LatestRelease | null>(null);
  const [downloads, setDownloads] = useState<PlatformDownloads>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${OWNER}/${REPO}/releases/latest`)
      .then(r => { if (!r.ok) throw new Error(); return r.json(); })
      .then((data: LatestRelease) => {
        setRelease(data);
        setDownloads(matchAssets(data.assets));
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { release, downloads, loading, error };
}

export function detectOS(): "mac" | "win" | "linux" | "other" {
  const ua = navigator.userAgent;
  const platform = navigator.platform || "";
  if (/Mac/.test(platform) || /Mac OS/.test(ua)) return "mac";
  if (/Win/.test(platform) || /Windows/.test(ua)) return "win";
  if (/Linux/.test(platform) || /Linux/.test(ua)) return "linux";
  return "other";
}
