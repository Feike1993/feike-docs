import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';

import {
  applyBrandTheme,
  BRAND_THEME_STORAGE_KEY,
  BRAND_THEMES,
  DEFAULT_BRAND_THEME,
  getBrandTheme,
  isBrandThemeId,
} from '@site/src/theme/brandThemes';

import styles from './styles.module.css';

type BrandThemeContextValue = {
  brandTheme: string;
  setBrandTheme: (id: string) => void;
};

const BrandThemeContext = createContext<BrandThemeContextValue | null>(null);

function PaletteIcon(): ReactNode {
  return (
    <svg className={styles.icon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M10 2.25a7.75 7.75 0 1 0 0 15.5h1.05a1.7 1.7 0 0 0 1.2-2.9l-.35-.35a1.7 1.7 0 0 1 1.2-2.9h1.1A3.55 3.55 0 0 0 17.75 8 7.75 7.75 0 0 0 10 2.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="6.4" cy="8" r="1" fill="currentColor" />
      <circle cx="9" cy="5.5" r="1" fill="currentColor" />
      <circle cx="12.5" cy="6" r="1" fill="currentColor" />
    </svg>
  );
}

export function BrandThemeProvider({children}: {children: ReactNode}): ReactNode {
  const [brandTheme, setBrandThemeState] = useState(DEFAULT_BRAND_THEME);

  useEffect(() => {
    const current = document.documentElement.dataset.brandTheme;
    if (isBrandThemeId(current)) {
      setBrandThemeState(current);
      return;
    }
    applyBrandTheme(DEFAULT_BRAND_THEME);
  }, []);

  const setBrandTheme = useCallback((id: string) => {
    const next = isBrandThemeId(id) ? id : DEFAULT_BRAND_THEME;
    applyBrandTheme(next);
    setBrandThemeState(next);
    try {
      window.localStorage.setItem(BRAND_THEME_STORAGE_KEY, next);
    } catch {
      // Ignore storage failures (private mode, etc.)
    }
  }, []);

  const value = useMemo(
    () => ({brandTheme, setBrandTheme}),
    [brandTheme, setBrandTheme],
  );

  return (
    <BrandThemeContext.Provider value={value}>{children}</BrandThemeContext.Provider>
  );
}

export function useBrandTheme(): BrandThemeContextValue {
  const ctx = useContext(BrandThemeContext);
  if (!ctx) {
    throw new Error('useBrandTheme must be used within BrandThemeProvider');
  }
  return ctx;
}

export default function BrandThemeSwitcher(): ReactNode {
  const {brandTheme, setBrandTheme} = useBrandTheme();
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const active = getBrandTheme(brandTheme);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && detailsRef.current?.open) {
        detailsRef.current.open = false;
        detailsRef.current.querySelector('summary')?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (
        detailsRef.current?.open &&
        event.target instanceof Node &&
        !detailsRef.current.contains(event.target)
      ) {
        detailsRef.current.open = false;
      }
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('pointerdown', onPointerDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('pointerdown', onPointerDown);
    };
  }, []);

  return (
    <details ref={detailsRef} className={styles.switcher}>
      <summary
        className={styles.summary}
        aria-label={`当前主题：${active.label}`}
        title="切换配色主题">
        <PaletteIcon />
      </summary>
      <div className={styles.menu} role="group" aria-label="配色主题">
        {BRAND_THEMES.map((theme) => {
          const selected = theme.id === brandTheme;
          return (
            <button
              key={theme.id}
              type="button"
              className={`${styles.option}${selected ? ` ${styles.optionActive}` : ''}`}
              aria-pressed={selected}
              onClick={() => {
                setBrandTheme(theme.id);
                if (detailsRef.current) {
                  detailsRef.current.open = false;
                }
              }}>
              <span className={styles.swatches} aria-hidden="true">
                <span style={{background: theme.swatchPrimary}} />
                <span style={{background: theme.swatchAccent}} />
              </span>
              <span>{theme.label}</span>
              <span className={styles.check}>{selected ? '✓' : ''}</span>
            </button>
          );
        })}
      </div>
    </details>
  );
}
