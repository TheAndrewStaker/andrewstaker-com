import type { ReactNode } from "react";

type Props = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
};

export default function AppWindow({ title, subtitle, children }: Props) {
  return (
    <div className="app-window">
      {title ? (
        <div className="app-window__titlebar flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="inline-block h-3 w-3 bg-[color:var(--app-titlebar-text)]" />
            <p className="text-lg tracking-wide">
              {title}
              {subtitle ? (
                <span className="opacity-70"> — {subtitle}</span>
              ) : null}
            </p>
          </div>

          <div className="flex gap-2">
            <span className="inline-block h-3 w-3 border border-[color:var(--app-titlebar-text)]" />
            <span className="inline-block h-3 w-3 border border-[color:var(--app-titlebar-text)]" />
            <span className="inline-block h-3 w-3 border border-[color:var(--app-titlebar-text)]" />
          </div>
        </div>
      ) : null}

      <div className="app-window__content">{children}</div>

      <div className="app-window__statusbar flex flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs">
        <span>STATUS: ONLINE</span>
        <span>LAST UPDATED: {new Date().toLocaleDateString()}</span>
      </div>
    </div>
  );
}
