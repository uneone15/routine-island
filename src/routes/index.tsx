import { createFileRoute } from "@tanstack/react-router";
import { Download, Sparkles, Users, Layers, Trophy, Instagram } from "lucide-react";
import screen1 from "@/assets/screen_1.png.asset.json";
import screen2 from "@/assets/screen_2.png.asset.json";
import screen3 from "@/assets/screen_3.png.asset.json";
import screen4 from "@/assets/screen_4.png.asset.json";
import screen5 from "@/assets/screen_5.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "루틴아일랜드 — 작은 습관으로 쌓아올리는 나만의 섬" },
      { name: "description", content: "루틴으로 나만의 아일랜드를 키워보세요. 함께하는 습관 형성, 다양한 테마의 루틴을 게임처럼 즐기는 자기계발 앱." },
      { property: "og:title", content: "루틴아일랜드" },
      { property: "og:description", content: "작은 습관으로 쌓아올리는 나만의 루틴아일랜드" },
    ],
  }),
  component: Landing,
});

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`px-5 py-20 md:py-28 ${className}`}>{children}</section>;
}

function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[280px]">
      <div className="absolute -inset-6 bg-brand-gradient opacity-20 blur-3xl rounded-full" aria-hidden />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="relative w-full h-auto rounded-[2rem] shadow-[0_30px_80px_-20px_rgba(118,63,255,0.5)]"
      />
    </div>
  );
}

function Landing() {
  return (
    <main className="min-h-screen bg-[#121223] text-white overflow-hidden">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#121223]/70 border-b border-white/5">
        <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-brand-gradient grid place-items-center glow-purple">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold tracking-tight">루틴아일랜드</span>
          </div>
          <a href="#download" className="text-xs md:text-sm px-4 py-2 rounded-full bg-brand-gradient font-semibold hover:opacity-90 transition">
            앱 다운로드
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative px-5 pt-16 pb-12 md:pt-24 md:pb-20" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-6xl text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#763FFF] animate-pulse" />
            루틴을 게임처럼, 습관을 섬처럼
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            작은 습관으로 쌓아올리는
            <br />
            <span className="text-gradient-brand">나만의 루틴아일랜드</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            매일의 루틴 인증으로 나만의 섬이 자라납니다.
            <br className="hidden md:block" />
            혼자가 아닌, 같은 목표의 사람들과 함께.
          </p>

          <div className="mt-8 flex justify-center" id="download">
            <a href="https://app.routineisland.com/download" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-brand-gradient font-semibold glow-purple hover:scale-[1.02] transition">
              <Download className="w-5 h-5" /> 앱 다운로드
            </a>
          </div>

          <div className="mt-16 relative animate-float">
            <img
              src={screen1.url}
              alt="루틴아일랜드 앱 메인 화면 - 나만의 섬"
              className="mx-auto w-full max-w-[340px] h-auto rounded-[2rem] shadow-[0_40px_120px_-20px_rgba(118,63,255,0.6)]"
            />
            <div className="absolute inset-0 -z-10 bg-brand-gradient opacity-30 blur-[100px] rounded-full" aria-hidden />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-5 py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-4xl grid grid-cols-3 gap-4 text-center">
          {[
            { v: "120K+", l: "다운로드" },
            { v: "4.8★", l: "앱 평점" },
            { v: "30+", l: "루틴 테마" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-2xl md:text-4xl font-bold text-gradient-brand">{s.v}</div>
              <div className="text-xs md:text-sm text-white/50 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE 1 - Island game */}
      <Section>
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#763FFF]/15 text-[#9d6dff] text-xs font-semibold mb-4">
              <Trophy className="w-3.5 h-3.5" /> GAME · 게임화
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              루틴을 인증할수록
              <br />
              <span className="text-gradient-brand">섬이 자라납니다</span>
            </h2>
            <p className="mt-5 text-white/65 leading-relaxed">
              지루한 체크리스트는 그만. 매일의 습관 인증이 별이 되고, 별이 모여 나만의 환상의 섬을 만들어갑니다.
              레벨이 오를수록 더 멋진 건축물과 보석이 해금돼요.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {["습관 인증 → 별 획득 → 섬 성장", "레벨업으로 해금되는 30+ 건축물", "친구에게 응원받고 별 보너스"].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#763FFF] flex-none" />
                  <span className="text-white/80">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <PhoneFrame src={screen1.url} alt="섬이 자라나는 메인 화면" />
          </div>
        </div>
      </Section>

      {/* FEATURE 2 - Themes */}
      <Section className="bg-white/[0.02]">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <PhoneFrame src={screen2.url} alt="다양한 루틴 테마" />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#763FFF]/15 text-[#9d6dff] text-xs font-semibold mb-4">
              <Layers className="w-3.5 h-3.5" /> THEMES · 테마
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              확실한 습관 형성을 위한
              <br />
              <span className="text-gradient-brand">맞춤 루틴 테마</span>
            </h2>
            <p className="mt-5 text-white/65 leading-relaxed">
              미라클 모닝, 건강 관리, 무기력 탈출, 셀프 그루밍까지.
              내 라이프스타일에 딱 맞는 30가지 이상의 큐레이션된 루틴 테마를 만나보세요.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["🌞 미라클 모닝", "🌙 불면증 해소", "💪 최상의 건강", "🧠 뇌 상태 최적화", "✨ 1주일 청소", "💰 지출 관리"].map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* FEATURE 3 - Community */}
      <Section>
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#763FFF]/15 text-[#9d6dff] text-xs font-semibold mb-4">
              <Users className="w-3.5 h-3.5" /> COMMUNITY · 함께
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              같은 목표의 사람들과
              <br />
              <span className="text-gradient-brand">함께라서 더 단단한 습관</span>
            </h2>
            <p className="mt-5 text-white/65 leading-relaxed">
              혼자선 작심삼일, 함께라면 평생 습관. 같은 루틴을 하는 참여원들과 인증을 공유하고,
              서로 응원하며 매일을 채워나가세요.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <PhoneFrame src={screen4.url} alt="참여원들과 함께하는 루틴" />
          </div>
        </div>
      </Section>

      {/* FEATURE 4 - Character + Mirror */}
      <Section className="bg-white/[0.02]">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <PhoneFrame src={screen3.url} alt="감정 캐릭터 프로필" />
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#763FFF]/15 text-[#9d6dff] text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" /> CHARACTER · 캐릭터
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              내 감정을 공감해주는
              <br />
              <span className="text-gradient-brand">루틴 캐릭터 프로필</span>
            </h2>
            <p className="mt-5 text-white/65 leading-relaxed">
              화나밍, 글루밍, 씬나밍… 오늘의 감정에 맞는 캐릭터로 나를 표현해요.
              함께하는 친구들의 인증을 보며 긍정적인 미러링 효과까지.
            </p>
          </div>
        </div>
      </Section>

      {/* Mirror highlight full bleed */}
      <Section>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            함께 루틴 인증을 공유하는
            <br />
            <span className="text-gradient-brand">긍정적 미러링 효과</span>
          </h2>
          <p className="mt-5 text-white/65 max-w-xl mx-auto">
            친구의 한 잔이 나의 한 잔이 됩니다. 작은 인증이 모여 큰 변화를 만들어요.
          </p>
          <div className="mt-12">
            <PhoneFrame src={screen5.url} alt="긍정적 미러링 효과" />
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="px-5 py-20 md:py-28 relative">
        <div className="mx-auto max-w-3xl relative rounded-3xl overflow-hidden p-10 md:p-16 text-center border border-[#763FFF]/30"
             style={{ background: "linear-gradient(135deg, rgba(118,63,255,0.25), rgba(118,63,255,0.05))" }}>
          <div className="absolute inset-0 -z-10 bg-brand-gradient opacity-20 blur-3xl" aria-hidden />
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            오늘의 작은 인증이,
            <br />
            <span className="text-gradient-brand">내일의 큰 섬이 됩니다</span>
          </h2>
          <p className="mt-5 text-white/70">지금 다운로드하고 첫 별을 획득하세요.</p>
          <div className="mt-8 flex justify-center">
            <a href="https://app.routineisland.com/download" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-brand-gradient font-semibold glow-purple hover:scale-[1.02] transition">
              <Download className="w-5 h-5" /> 앱 다운로드
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 px-5 py-12 bg-[#0e0e1c]">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center md:justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-brand-gradient grid place-items-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold">루틴아일랜드</span>
          </div>
          <nav className="flex items-center gap-5 text-sm text-white/60">
            <a href="#" className="hover:text-white transition">About</a>
            <a href="#" className="hover:text-white transition">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition">이용약관</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/routine_island/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"
               className="w-9 h-9 grid place-items-center rounded-full bg-white/5 border border-white/10 hover:bg-[#763FFF] hover:border-[#763FFF] transition">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-6xl mt-8 text-center text-xs text-white/40">
          © 2026 Routine Island. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
