// app/style-tile/page.tsx
import * as React from "react";

function Box({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className="rounded-2xl border p-6"
      style={{ borderColor: "var(--border-subtle)", background: "white" }}
    >
      <div className="text-sm mb-3" style={{ color: "var(--fg-muted)" }}>
        {title}
      </div>
      {children}
    </div>
  );
}

function Swatch({ name, hex }: { name: string; hex: string }) {
  return (
    <div
      className="rounded-xl overflow-hidden border"
      style={{ borderColor: "var(--border-subtle)" }}
    >
      <div className="h-14" style={{ background: hex }} />
      <div className="px-3 py-2 text-[12px] flex items-center justify-between">
        <span style={{ color: "var(--fg-muted)" }}>{name}</span>
        <span style={{ color: "var(--fg-muted)" }}>{hex}</span>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div
      className="min-h-screen w-full p-8 lg:p-10"
      style={{ background: "var(--bg-default)", color: "var(--fg-default)" }}
    >
      <div className="max-w-[1200px] mx-auto space-y-8">
        <header>
          <h1 className="text-2xl">StyleTile – v1（イメージ）</h1>
          <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
            静かなトーン / 角丸 / 薄い影 / 余白 16・24・40・80
          </p>
        </header>

        {/* Row 1: Typography（全幅・1カラム） */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-12">
            <Box title="タイポグラフィ（実寸サンプル）">
              <div className="space-y-6">
                {/* Headline */}
                <section>
                  <div
                    className="text-[12px] mb-1"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    見出し / Headline
                  </div>
                  <h1 className="text-[56px] leading-[1.3] tracking-[0.0025em]">
                    人の無意識をくすぐる“なんかいい”をデザインする。
                  </h1>
                  <h2
                    className="mt-2 text-[28px] lg:text-[32px] leading-[1.4] tracking-[0.003em]"
                    style={{ color: "#555" }}
                  >
                    Designing subtle “feels right” experiences.
                  </h2>
                </section>

                {/* Body JP & EN */}
                <section className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div
                      className="text-[12px] mb-1"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      Body JP 18 / 145% / +0.30%
                    </div>
                    <p
                      className="text-[18px] leading-[1.45] tracking-[0.003em]"
                      style={{ color: "#444" }}
                    >
                      使うたび理由は言えないけれど“なんかいい”。余白とリズム、言葉とふるまいで、
                      無意識に働きかけるUI/UXを設計します。静かで、迷わず、心地よい体験を。
                    </p>
                  </div>

                  <div>
                    <div
                      className="text-[12px] mb-1"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      Body EN 16 / 150% / 0%
                    </div>
                    <p
                      className="text-[16px] leading-[1.5] tracking-[0em]"
                      style={{ color: "#555" }}
                    >
                      I design for the quiet “feels right.” Through spacing,
                      rhythm, language, and consistent behavior, interfaces
                      become calm, effortless, and gently memorable.
                    </p>
                  </div>
                </section>

                {/* Microcopy */}
                <section>
                  <div
                    className="text-[12px] mb-2"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    Microcopy（JP / EN）
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "事例を見る",
                      "しくみを見る",
                      "制作の裏側",
                      "お問い合わせ",
                      "View case study",
                      "See the system",
                      "Behind the design",
                      "Get in touch",
                    ].map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 rounded-[8px] text-[12px]"
                        style={{ background: "var(--bg-surface)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </section>
              </div>
            </Box>
          </div>
        </div>

        {/* Row 2: Colors（左） + Work Card（右） */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <Box title="セマンティックカラー">
              <div className="grid grid-cols-2 gap-3">
                <Swatch name="bg/default" hex="#FAFAF8" />
                <Swatch name="bg/surface" hex="#F4F3EF" />
                <Swatch name="fg/default" hex="#2F2F2F" />
                <Swatch name="fg/muted" hex="#666666" />
                <Swatch name="accent/primary" hex="#8E9C70" />
                <Swatch name="accent/secondary" hex="#E6C875" />
                <Swatch name="border/subtle" hex="#E7E3DB" />
                <Swatch name="state/hover" hex="#BAC7A6" />
                <Swatch name="state/active" hex="#6E9E6A" />
              </div>
            </Box>
          </div>

          <div className="lg:col-span-5">
            <Box title="Work Card（デフォルト＆ホバー）">
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="rounded-2xl border overflow-hidden bg-white shadow-[0_1px_2px_rgba(0,0,0,.04)]"
                  style={{ borderColor: "var(--border-subtle)" }}
                >
                  <div className="aspect-[16/9] bg-[#EFEFEF]" />
                  <div className="p-4">
                    <div className="text-[18px]">Project Title</div>
                    <div
                      className="text-[14px]"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      サマリー文が2行で入る想定。
                    </div>
                  </div>
                </div>

                <div
                  className="rounded-2xl border overflow-hidden bg-white shadow-[0_2px_6px_rgba(0,0,0,.06)]"
                  style={{ borderColor: "var(--border-subtle)" }}
                >
                  <div className="aspect-[16/9] bg-[#EFEFEF]" />
                  <div className="p-4">
                    <div className="text-[18px]">Project Title</div>
                    <div
                      className="text-[14px]"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      ホバー時の影（Elevation/2）。
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </div>
        </div>

        {/* Row 3: Buttons & Input（全幅） */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-12">
            <Box title="ボタン＆入力">
              <div className="flex flex-wrap gap-3">
                <button
                  className="px-5 py-2.5 rounded-[10px] text-white text-[16px]"
                  style={{ background: "var(--accent-primary)" }}
                >
                  Primary
                </button>
                <button
                  className="px-5 py-2.5 rounded-[10px] text-[16px] border"
                  style={{
                    color: "var(--accent-primary)",
                    borderColor: "var(--border-subtle)",
                  }}
                >
                  Ghost
                </button>
                <button
                  className="px-5 py-2.5 rounded-[10px] text-white text-[16px]"
                  style={{ background: "var(--state-hover)" }}
                >
                  Hover
                </button>
                <button
                  className="px-5 py-2.5 rounded-[10px] text-white text-[16px]"
                  style={{ background: "var(--state-active)" }}
                >
                  Active
                </button>
                <button
                  className="px-5 py-2.5 rounded-[10px] text-[16px]"
                  style={{
                    background: "var(--state-disabled)",
                    color: "var(--fg-muted)",
                  }}
                >
                  Disabled
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
                <div
                  className="rounded-[10px] border px-3 py-2"
                  style={{
                    borderColor: "var(--border-subtle)",
                    background: "var(--bg-surface)",
                  }}
                >
                  <div
                    className="text-[12px] mb-1"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    Input – default
                  </div>
                  <div className="text-[16px]" style={{ color: "#999" }}>
                    placeholder
                  </div>
                </div>
                <div
                  className="rounded-[10px] border px-3 py-2"
                  style={{
                    borderColor: "var(--accent-primary)",
                    background: "var(--bg-surface)",
                  }}
                >
                  <div
                    className="text-[12px] mb-1"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    Input – focus
                  </div>
                  <div className="text-[16px]" style={{ color: "#999" }}>
                    placeholder
                  </div>
                </div>
              </div>
            </Box>
          </div>
        </div>

        {/* Row 4: Spacing Scale */}
        <Box title="Spacing Scale（目安）">
          <div className="flex items-end gap-3">
            {[4, 8, 12, 16, 24, 32, 40, 48, 64].map((s) => (
              <div key={s} className="flex flex-col items-center">
                <div
                  className="w-12"
                  style={{ height: s, background: "#CBD5E1" }}
                />
                <div
                  className="text-[12px] mt-1"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {s}px
                </div>
              </div>
            ))}
          </div>
        </Box>
      </div>
    </div>
  );
}
