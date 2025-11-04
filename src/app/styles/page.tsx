"use client";

import { useStyle } from "@/contexts/style-context";
import { STYLE_CONFIGS } from "@/lib/style-config";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default function StylesPage() {
  const { currentStyle, setStyle } = useStyle();

  const styles = [
    {
      id: "minimal" as const,
      ...STYLE_CONFIGS.minimal,
      preview: STYLE_CONFIGS.minimal.colors,
    },
    {
      id: "neumorphism" as const,
      ...STYLE_CONFIGS.neumorphism,
      preview: STYLE_CONFIGS.neumorphism.colors,
    },
    {
      id: "neobrutalism" as const,
      ...STYLE_CONFIGS.neobrutalism,
      preview: STYLE_CONFIGS.neobrutalism.colors,
    },
    {
      id: "glassmorphism" as const,
      ...STYLE_CONFIGS.glassmorphism,
      preview: STYLE_CONFIGS.glassmorphism.colors,
    },
  ];

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-dark dark:text-white">
          Dashboard Styles
        </h1>
        <p className="text-gray-6 dark:text-gray-5">
          Choose a style theme for your dashboard
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {styles.map((style) => (
          <div
            key={style.id}
            className={`relative cursor-pointer rounded-xl border-2 bg-white p-6 transition-all dark:bg-gray-dark ${
              currentStyle === style.id
                ? "border-primary shadow-lg"
                : "border-stroke hover:border-primary/50 dark:border-dark-3"
            }`}
            onClick={() => setStyle(style.id)}
          >
            {currentStyle === style.id && (
              <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                <CheckIcon className="h-5 w-5 text-white" />
              </div>
            )}

            <h3 className="mb-2 text-xl font-bold text-dark dark:text-white">
              {style.name}
            </h3>
            <p className="mb-4 text-sm text-gray-6 dark:text-gray-5">
              {style.description}
            </p>

            <div className="space-y-3">
              <div className="text-sm font-medium text-dark dark:text-white">
                Color Preview
              </div>
              <div className="flex gap-2">
                <div
                  className="h-12 w-12 rounded-lg shadow-sm"
                  style={{ backgroundColor: style.preview.primary }}
                  title="Primary"
                />
                <div
                  className="h-12 w-12 rounded-lg shadow-sm"
                  style={{ backgroundColor: style.preview.secondary }}
                  title="Secondary"
                />
                <div
                  className="h-12 w-12 rounded-lg shadow-sm"
                  style={{ backgroundColor: style.preview.accent }}
                  title="Accent"
                />
                <div
                  className="h-12 w-12 rounded-lg border-2 border-stroke shadow-sm dark:border-dark-3"
                  style={{ backgroundColor: style.preview.background }}
                  title="Background"
                />
              </div>
            </div>

            <button
              className={`mt-6 w-full rounded-lg px-4 py-2.5 font-medium transition-colors ${
                currentStyle === style.id
                  ? "bg-primary text-white"
                  : "bg-gray-2 text-dark hover:bg-gray-3 dark:bg-dark-3 dark:text-white dark:hover:bg-dark-4"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setStyle(style.id);
              }}
            >
              {currentStyle === style.id ? "Current Style" : "Apply Style"}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-stroke bg-white p-6 dark:border-dark-3 dark:bg-gray-dark">
        <h3 className="mb-2 text-lg font-bold text-dark dark:text-white">
          Note
        </h3>
        <p className="text-sm text-gray-6 dark:text-gray-5">
          Changing the style will update the appearance of your entire dashboard.
          The selected style will be saved and applied across all pages.
        </p>
      </div>
    </div>
  );
}
