import {
  ArrowDownToLine,
  Film,
  Layers,
  Mic2,
  WandSparkles,
} from 'lucide-react';

const downloads = [
  {
    label: 'Mac Apple 芯片',
    detail: 'M1 / M2 / M3 / M4',
    href: import.meta.env.VITE_DOWNLOAD_MAC_ARM64 || '/downloads/svga-vap-lab-mac-arm64.zip',
  },
  {
    label: 'Mac Intel 芯片',
    detail: 'Intel macOS',
    href: import.meta.env.VITE_DOWNLOAD_MAC_X64 || '/downloads/svga-vap-lab-mac-x64.zip',
  },
  {
    label: 'Windows x64',
    detail: 'Windows 10 / 11',
    href: import.meta.env.VITE_DOWNLOAD_WINDOWS_X64 || '/downloads/svga-vap-lab-windows-x64.exe',
  },
];

const features = [
  { title: 'SVGA 编辑', icon: Layers },
  { title: 'VAP 生成', icon: Film },
  { title: '声浪 WebP', icon: Mic2 },
  { title: '动态抠图', icon: WandSparkles },
];

const macButtonClass =
  'bg-[linear-gradient(135deg,#ffffff,#d7dce5)] text-[#050607] shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:brightness-110';

const winButtonClass =
  'bg-[linear-gradient(135deg,#00a4ef,#0078d4)] text-white shadow-[0_0_30px_rgba(0,120,212,0.34)] hover:brightness-110';

const getDownloadCardClass = (label: string) =>
  label.includes('Windows')
    ? 'hover:border-[#0078d4]/70 hover:bg-[#0078d4]/12'
    : 'hover:border-white/45 hover:bg-white/10';

const getDownloadIconClass = (label: string) =>
  label.includes('Windows')
    ? 'group-hover:bg-[linear-gradient(135deg,#00a4ef,#0078d4)] group-hover:text-white'
    : 'group-hover:bg-[linear-gradient(135deg,#ffffff,#d7dce5)] group-hover:text-black';

function LogoMark() {
  return (
    <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-md border border-[#49e6ff]/30 bg-[#071015]/80 shadow-[0_0_28px_rgba(73,230,255,0.22)] backdrop-blur">
      <span className="absolute -left-3 top-1 h-9 w-4 rotate-[28deg] rounded-full bg-[#49e6ff]/80 blur-[2px]" />
      <span className="absolute -bottom-3 right-1 h-8 w-4 rotate-[28deg] rounded-full bg-[#ff5668]/80 blur-[2px]" />
      <svg viewBox="0 0 24 24" className="relative h-5 w-5" aria-hidden="true">
        <path
          d="M6.2 16.8 10.6 5.9c.32-.78 1.42-.78 1.74.01l5.46 13.24c.36.88-.67 1.64-1.38 1.01l-3.54-3.12a1.35 1.35 0 0 0-1.77 0l-3.51 3.08c-.72.63-1.76-.13-1.4-1.02Z"
          fill="url(#logoBeam)"
        />
        <path
          d="M7.4 15.7h9.2"
          stroke="rgba(255,255,255,.82)"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="logoBeam" x1="4" y1="4" x2="20" y2="21" gradientUnits="userSpaceOnUse">
            <stop stopColor="#49e6ff" />
            <stop offset="0.52" stopColor="#326dff" />
            <stop offset="1" stopColor="#ff5668" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  );
}

function LightField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#050607]" />
      <div className="light-ribbon light-ribbon-blue" />
      <div className="light-ribbon light-ribbon-red" />
      <div className="light-edge-red" />
      <div className="light-lines" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,transparent_0,rgba(5,6,7,0.2)_34%,rgba(5,6,7,0.96)_82%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,transparent_0%,transparent_34%,rgba(5,6,7,0.9)_54%,rgba(5,6,7,0.98)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#050607] to-transparent" />
    </div>
  );
}

export default function ProductLanding() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050607] text-white selection:bg-[#49e6ff]/25">
      <style>{`
        @keyframes light-drift-blue {
          0% { transform: translate3d(-18%, -12%, 0) rotate(-22deg) scale(1); opacity: 0.84; }
          50% { transform: translate3d(-8%, -4%, 0) rotate(-18deg) scale(1.07); opacity: 1; }
          100% { transform: translate3d(-22%, 1%, 0) rotate(-25deg) scale(1.03); opacity: 0.9; }
        }

        @keyframes light-drift-red {
          0% { transform: translate3d(22%, 8%, 0) rotate(-20deg) scale(1); opacity: 0.7; }
          50% { transform: translate3d(10%, 0%, 0) rotate(-16deg) scale(1.1); opacity: 0.95; }
          100% { transform: translate3d(26%, -5%, 0) rotate(-23deg) scale(1.04); opacity: 0.78; }
        }

        @keyframes line-flow {
          0% { background-position: 0 0; opacity: 0.22; }
          50% { opacity: 0.38; }
          100% { background-position: 160px 0; opacity: 0.24; }
        }

        @keyframes red-edge-flow {
          0% { transform: translate3d(10%, 8%, 0) rotate(-20deg) scale(1); opacity: 0.62; }
          50% { transform: translate3d(2%, 1%, 0) rotate(-17deg) scale(1.08); opacity: 0.9; }
          100% { transform: translate3d(13%, -3%, 0) rotate(-22deg) scale(1.03); opacity: 0.7; }
        }

        .light-ribbon {
          position: absolute;
          width: 78vw;
          height: 132vh;
          top: -18vh;
          border-radius: 48%;
          filter: blur(24px);
          will-change: transform, opacity;
          mix-blend-mode: screen;
        }

        .light-ribbon-blue {
          left: -20vw;
          background:
            linear-gradient(102deg, rgba(17, 221, 255, 0.95) 0%, rgba(36, 105, 255, 0.86) 34%, rgba(168, 75, 255, 0.46) 58%, rgba(255, 68, 92, 0.16) 76%, transparent 92%);
          animation: light-drift-blue 13s ease-in-out infinite alternate;
        }

        .light-ribbon-red {
          right: -24vw;
          background:
            linear-gradient(102deg, transparent 0%, rgba(96, 34, 98, 0.28) 25%, rgba(255, 60, 78, 0.82) 56%, rgba(255, 99, 65, 0.95) 76%, rgba(120, 20, 30, 0.3) 100%);
          animation: light-drift-red 15s ease-in-out infinite alternate;
        }

        .light-edge-red {
          position: absolute;
          right: -18vw;
          bottom: -24vh;
          width: 76vw;
          height: 88vh;
          background: linear-gradient(118deg, transparent 0%, rgba(121, 31, 111, 0.18) 26%, rgba(255, 40, 82, 0.74) 57%, rgba(255, 105, 67, 0.92) 78%, transparent 100%);
          filter: blur(30px);
          mix-blend-mode: screen;
          will-change: transform, opacity;
          animation: red-edge-flow 12s ease-in-out infinite alternate;
        }

        .light-lines {
          position: absolute;
          inset: 28% -10% -20% -10%;
          transform: rotate(-13deg);
          background:
            repeating-linear-gradient(90deg, rgba(255,255,255,0.14) 0 1px, transparent 1px 8px);
          mask-image: linear-gradient(to bottom, transparent 0%, black 24%, black 70%, transparent 100%);
          animation: line-flow 7s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .light-ribbon,
          .light-edge-red,
          .light-lines {
            animation: none;
          }
        }
      `}</style>

      <LightField />

      <header className="fixed inset-x-0 top-0 z-30">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <a href="/" className="flex items-center gap-3">
            <LogoMark />
            <span className="text-sm font-black tracking-[0.16em]">SVGA VAP LAB</span>
          </a>
          <div className="flex items-center gap-2">
            <a
              href={downloads[0].href}
              className={`inline-flex h-10 items-center gap-2 rounded-md px-4 text-xs font-black transition ${macButtonClass}`}
            >
              <ArrowDownToLine size={15} />
              下载Mac
            </a>
            <a
              href={downloads[2].href}
              className={`inline-flex h-10 items-center gap-2 rounded-md px-4 text-xs font-black transition ${winButtonClass}`}
            >
              <ArrowDownToLine size={15} />
              下载Win
            </a>
          </div>
        </div>
      </header>

      <section className="relative z-10 mx-auto flex min-h-[82vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-28">
        <div className="max-w-4xl">
          <h1 className="text-[76px] font-black leading-[0.9] tracking-normal text-white max-md:text-5xl">
            SVGA VAP Lab
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/68 max-md:text-base">
            本地动效物料工具。
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={downloads[0].href}
              className={`inline-flex h-12 items-center gap-2 rounded-md px-5 text-sm font-black transition ${macButtonClass}`}
            >
              <ArrowDownToLine size={18} />
              下载Mac
            </a>
            <a
              href={downloads[2].href}
              className={`inline-flex h-12 items-center gap-2 rounded-md px-5 text-sm font-black transition ${winButtonClass}`}
            >
              <ArrowDownToLine size={18} />
              下载Win
            </a>
          </div>
        </div>

        <div id="features" className="mt-14 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
          {features.map((feature, index) => (
            <div key={feature.title} className="flex items-center gap-3 border-t border-white/14 pt-4 text-white/78">
              <feature.icon
                size={18}
                strokeWidth={1.7}
                className={index % 2 === 0 ? 'text-[#49e6ff]' : 'text-[#ff6b68]'}
              />
              <span className="text-sm font-bold">{feature.title}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="downloads" className="relative z-10 border-t border-white/10 bg-[#050607]/88 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <div className="mb-8 flex items-end justify-between gap-6 max-md:flex-col max-md:items-start">
            <h2 className="text-3xl font-black tracking-normal">下载</h2>
            <p className="text-sm text-white/46">选择对应系统版本</p>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {downloads.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`group rounded-lg border border-white/10 bg-white/[0.045] p-5 backdrop-blur transition ${getDownloadCardClass(item.label)}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-lg font-black text-white">{item.label}</div>
                    <div className="mt-2 text-sm text-white/46">{item.detail}</div>
                  </div>
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white text-black transition ${getDownloadIconClass(item.label)}`}>
                    <ArrowDownToLine size={19} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
