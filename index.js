// Darkroom Amber — warm near-black theme with an amber safelight accent.
export function activate(api) {
  api.registerTheme({
    id: "theme-darkroom-amber.theme",
    name: "Darkroom Amber",
    colorScheme: "dark",
    vars: {
      "--color-surface-0": "#0c0907",
      "--color-surface-1": "#14100c",
      "--color-surface-2": "#1c1712",
      "--color-surface-3": "#261f18",
      "--color-surface-4": "#322a20",
      "--color-border": "#3d3326",
      "--color-border-subtle": "#241d15",
      "--color-text-primary": "#e8ddcf",
      "--color-text-secondary": "#97876f",
      "--color-text-muted": "#5e5443",
      "--color-accent": "#e0883a",
      "--color-accent-hover": "#f0a055",
      "--color-slider-fill": "#6b5b42",
    },
  });
}
