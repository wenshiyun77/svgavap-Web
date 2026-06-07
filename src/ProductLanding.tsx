import { useState } from 'react';
import {
  ArrowDownToLine,
  AudioLines,
  Film,
  ImagePlus,
  Layers,
  MessageCircle,
  Orbit,
  Sparkles,
  X,
  Zap,
} from 'lucide-react';

import heroBg from './assets/hero-bg.jpg';
import featuresBg from './assets/features-bg.jpg';
import contactQr from './assets/contact-qr.jpg';

const downloads = [
  {
    label: 'Mac Apple 芯片',
    detail: 'M1 / M2 / M3 / M4',
    href: import.meta.env.VITE_DOWNLOAD_MAC_ARM64 || '/downloads/svga-vap-lab-mac-arm64.zip',
    className: 'bg-[linear-gradient(135deg,#00e5ff,#2563eb)] text-white shadow-[0_18px_50px_rgba(37,99,235,0.36)] hover:brightness-110',
  },
  {
    label: 'Mac Intel 芯片',
    detail: 'Intel macOS',
    href: import.meta.env.VITE_DOWNLOAD_MAC_X64 || '/downloads/svga-vap-lab-mac-x64.zip',
    className: 'bg-[linear-gradient(135deg,#ffb000,#ff4d00)] text-white shadow-[0_18px_50px_rgba(255,77,0,0.34)] hover:brightness-110',
  },
  {
    label: 'Windows x64',
    detail: 'Windows 10 / 11',
    href: import.meta.env.VITE_DOWNLOAD_WINDOWS_X64 || '/downloads/svga-vap-lab-windows-x64.exe',
    className: 'bg-[linear-gradient(135deg,#4f46e5,#0ea5e9)] text-white shadow-[0_18px_50px_rgba(14,165,233,0.34)] hover:brightness-110',
  },
];

const features = [
  {
    title: 'SVGA编辑器',
    body: '序列帧、动效节点和透明资源集中处理。',
    icon: Layers,
  },
  {
    title: '声浪生成器',
    body: '音频节奏快速生成可交付声浪素材。',
    icon: AudioLines,
  },
  {
    title: 'VAP生成器',
    body: '面向透明视频物料的一站式预览导出。',
    icon: Film,
  },
  {
    title: '粒子系统',
    body: '快速组织光效、粒子和动态装饰元素。',
    icon: Orbit,
  },
];

function LogoMark() {
  return (
    <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-md border border-white/14 bg-white/8 shadow-[0_14px_44px_rgba(0,0,0,0.32)] backdrop-blur-md">
      <span className="absolute inset-x-2 top-2 h-px bg-cyan-200/80" />
      <span className="absolute bottom-2 left-2 h-px w-4 bg-amber-200/80" />
      <Zap className="relative h-5 w-5 text-white" strokeWidth={1.8} />
    </span>
  );
}

function ContactModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/72 px-5 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-lg border border-white/14 bg-[#101216] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.46)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 id="contact-title" className="text-xl font-black text-white">
            联系作者
          </h2>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/6 text-white/70 transition hover:bg-white/12 hover:text-white"
            onClick={onClose}
            aria-label="关闭联系作者二维码"
          >
            <X size={18} />
          </button>
        </div>
        <div className="rounded-md bg-white p-3">
          <img src={contactQr} alt="联系作者二维码" className="block w-full rounded-sm" />
        </div>
      </div>
    </div>
  );
}

export default function ProductLanding() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#07090d] text-white selection:bg-cyan-300/25">
      <header className="fixed inset-x-0 top-0 z-40">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 pt-3">
          <a href="/" className="flex items-center gap-3" aria-label="SVGA VAP Lab 首页">
            <LogoMark />
            <span className="text-sm font-black tracking-[0.18em] text-white/92">SVGA VAP LAB</span>
          </a>
          <button
            type="button"
            className="inline-flex h-10 items-center gap-2 rounded-md border border-white/16 bg-white/10 px-4 text-sm font-black text-white shadow-[0_16px_48px_rgba(0,0,0,0.22)] backdrop-blur-md transition hover:border-cyan-200/42 hover:bg-white/16"
            onClick={() => setIsContactOpen(true)}
          >
            <MessageCircle size={16} />
            咨询
          </button>
        </div>
      </header>

      <section className="relative flex min-h-screen overflow-hidden">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,9,13,0.95)_0%,rgba(7,9,13,0.82)_35%,rgba(7,9,13,0.28)_72%,rgba(7,9,13,0.48)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#07090d] to-transparent" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-5 pt-20 md:pt-24">
          <div className="max-w-4xl py-12 md:py-20">
            <div className="mb-7 inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/8 px-3 py-2 text-xs font-black tracking-[0.16em] text-cyan-100/88 backdrop-blur-md">
              <Sparkles size={14} />
              TOOLKIT FOR MOTION MATERIALS
            </div>
            <h1 className="max-w-4xl text-6xl font-black leading-[0.95] tracking-normal text-white md:text-8xl">
              一站式社交 App 物料编辑器
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
              Ai时代的SVGA、VAP高效率制作工具，制作、预览、导出一站式解决方案
            </p>

            <div className="mt-10 grid max-w-3xl gap-3 md:grid-cols-3">
              {downloads.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`group flex min-h-20 items-center justify-between gap-4 rounded-md px-4 py-3 font-black transition ${item.className}`}
                >
                  <span>
                    <span className="block text-sm font-black text-white">{item.label}</span>
                    <span className="mt-1 block text-xs font-medium text-white/72">{item.detail}</span>
                  </span>
                  <ArrowDownToLine className="shrink-0 text-white" size={20} strokeWidth={2.4} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex min-h-screen overflow-hidden border-t border-white/10">
        <img
          src={featuresBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,9,13,0.93)_0%,rgba(7,9,13,0.72)_42%,rgba(7,9,13,0.52)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(117,215,255,0.16),transparent_32%),radial-gradient(circle_at_88%_72%,rgba(255,177,91,0.13),transparent_26%)]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 px-5 py-10 md:grid-cols-[0.92fr_1.08fr] md:gap-12 md:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/8 px-3 py-2 text-xs font-black tracking-[0.16em] text-amber-100/90 backdrop-blur-md">
              <ImagePlus size={14} />
              FEATURE WORKFLOW
            </div>
            <h2 className="text-4xl font-black leading-tight tracking-normal text-white md:text-6xl">
              从素材到交付，可能只需要1分钟
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/66 md:mt-6 md:text-lg md:leading-8">
              导入素材、处理动效、确认预览、输出可用资源
            </p>
          </div>

          <div className="grid gap-3 md:gap-4">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className="rounded-lg border border-white/13 bg-[#0d1117]/62 p-4 shadow-[0_22px_70px_rgba(0,0,0,0.28)] backdrop-blur-md md:p-5"
              >
                <div className="flex gap-4">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md md:h-12 md:w-12 ${
                      index === 1 ? 'bg-amber-200 text-[#101216]' : 'bg-cyan-100 text-[#101216]'
                    }`}
                  >
                    <feature.icon size={21} strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-white">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/62 md:leading-7">{feature.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {isContactOpen ? <ContactModal onClose={() => setIsContactOpen(false)} /> : null}
    </main>
  );
}
