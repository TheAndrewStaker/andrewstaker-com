import RetroWindow from "@/components/AppWindow";
import AppButton from "@/components/AppButton";
// TODO make more components
export default function Home() {
  return (
    <main className="min-h-screen retro-bg bg-[#f4f1e8] text-[#111]">
      <div className="mx-auto max-w-4xl px-6 pt-4 pb-12">
        <RetroWindow title="ANDREWSTAKER.COM" subtitle="HOME">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h1 className="text-5xl leading-none tracking-tight">
                <span>Stephen &#34;Andrew&#34; Staker</span>
                <span
                  className="crt-cursor ml-2 inline-block align-baseline"
                  style={{ color: "rgba(17,17,17,0.6)" }}
                  aria-hidden="true"
                >
                  █
                </span>
              </h1>
              <p className="mt-4 max-w-2xl text-xl text-[#222]">
                Engineering leader building reliable backend and platform
                systems.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "12+ years enterprise SaaS",
              "Led 30 devs + 16 QA",
              "APIs • integrations • reliability",
              "Delivery at scale",
            ].map((t) => (
              <span
                key={t}
                className="retro-border retro-shadow-sm bg-white px-3 py-1 text-sm"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <AppButton
              href="/stephen-andrew-staker-resume.pdf"
              variant="primary"
            >
              Download Resume
            </AppButton>
            <AppButton
              href="mailto:stephenstaker@gmail.com"
              variant="secondary"
            >
              Contact Me
            </AppButton>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="retro-border retro-shadow-sm bg-white p-5">
              <h2 className="text-lg font-semibold">Who I Am</h2>
              <ul className="mt-3 list-disc pl-5 text-sm text-[#222]">
                <li>Dad</li>
                <li>Software Leader</li>
                <li>Music Maker</li>
                <li>Movie Collector</li>
                <li>Retro Hardware Enthusiast</li>
              </ul>
            </div>
            <div className="retro-border retro-shadow-sm bg-white p-5">
              <h2 className="text-lg font-semibold">Links</h2>
              <div id="links" className="mt-3 text-sm text-[#222]">
                <a
                  className="underline"
                  href="https://www.linkedin.com/in/stephen-andrew-staker-4a602783"
                >
                  LinkedIn
                </a>{" "}
                •{" "}
                <a
                  className="underline"
                  href="https://github.com/TheAndrewStaker"
                >
                  GitHub
                </a>{" "}
                •{" "}
                <a
                  className="underline"
                  href="https://soundcloud.com/andrewstaker"
                >
                  SoundCloud
                </a>
              </div>
            </div>
          </div>
        </RetroWindow>
        <p className="mt-6 text-center text-xs text-[#333]">
          Built with Next.js + Tailwind. Retro aesthetic; modern code.
        </p>
      </div>
    </main>
  );
}
