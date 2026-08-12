export type BrandTheme = {
  id: string;
  label: string;
  /** Left swatch color in the picker (visual) */
  swatchPrimary: string;
  /** Right swatch color in the picker (visual) */
  swatchAccent: string;
};

/** Brand color themes inspired by Apache Doris theme switcher. */
export const BRAND_THEMES: BrandTheme[] = [
  {
    id: 'feike',
    label: '飞客青',
    swatchPrimary: '#11a679',
    swatchAccent: '#ffd23f',
  },
  {
    id: 'golden',
    label: '鎏金紫',
    swatchPrimary: '#7b2cbf',
    swatchAccent: '#f9d308',
  },
  {
    id: 'cyan',
    label: '钢青',
    swatchPrimary: '#2c2c34',
    swatchAccent: '#00d4ff',
  },
  {
    id: 'lava',
    label: '熔岩黑',
    swatchPrimary: '#121212',
    swatchAccent: '#ff4500',
  },
  {
    id: 'victory',
    label: '胜利蓝',
    swatchPrimary: '#0066ff',
    swatchAccent: '#ffd300',
  },
  {
    id: 'lilac',
    label: '丁香雾',
    swatchPrimary: '#b19cd9',
    swatchAccent: '#d3d3d3',
  },
  {
    id: 'obsidian',
    label: '曜石金',
    swatchPrimary: '#000000',
    swatchAccent: '#ffd700',
  },
  {
    id: 'sky',
    label: '天际雾',
    swatchPrimary: '#89c2ff',
    swatchAccent: '#e6f7ff',
  },
];

export const DEFAULT_BRAND_THEME = 'feike';
export const BRAND_THEME_STORAGE_KEY = 'feike-brand-theme';

export function isBrandThemeId(id: string | null | undefined): id is string {
  return !!id && BRAND_THEMES.some((theme) => theme.id === id);
}

export function getBrandTheme(id: string): BrandTheme {
  return BRAND_THEMES.find((theme) => theme.id === id) ?? BRAND_THEMES[0]!;
}

export function applyBrandTheme(id: string): void {
  const themeId = isBrandThemeId(id) ? id : DEFAULT_BRAND_THEME;
  document.documentElement.dataset.brandTheme = themeId;
}
