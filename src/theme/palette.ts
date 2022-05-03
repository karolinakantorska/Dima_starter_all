import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

function createGradient(color1: string, color2: string) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

interface GradientsPaletteOptions {
  primary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
}

interface ChartPaletteOptions {
  violet: string[];
  blue: string[];
  green: string[];
  yellow: string[];
  red: string[];
}

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    neutral: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
  interface Palette {
    gradients: GradientsPaletteOptions;
    chart: ChartPaletteOptions;
  }
  interface PaletteOptions {
    gradients: GradientsPaletteOptions;
    chart: ChartPaletteOptions;
  }
}

declare module '@mui/material' {
  interface Color {
    0: string;
    500_8: string;
    500_12: string;
    500_16: string;
    500_24: string;
    500_32: string;
    500_48: string;
    500_56: string;
    500_80: string;
  }
}

// SETUP COLORS
const PRIMARY = {
  lighter: '#f6cebc',
  light: '#eb9166',
  main: 'rgb(232, 123, 69)',// #e87b45
  dark: '#e56825',
  darker: '#bf551b',
};
const SECONDARY = {
  lighter: '#b5e3f7',
  light: '#5ebfec',
  main: '#2d84c1',
  dark: '#2973ad',
  darker: '#1c548c',
};
const INFO = {
  lighter: '#b5e3f7',
  light: '#5ebfec',
  main: '#2d84c1',
  dark: '#2973ad',
  darker: '#1c548c',
};
const SUCCESS = {
  lighter: '#e4f7c0',
  light: '#bfed6a',
  main: '#9cd102',
  dark: '#81a300',
  darker: '#6d7c00',
};
const WARNING = {
  lighter: '#f8f5c5',
  light: '#efe77c',
  main: '#e8cd45',
  dark: '#e1a034',
  darker: '#da7b25',
};
const ERROR = {
  lighter: '#f9bfcd',
  light: '#f1708e',
  main: '#e84560',
  dark: '#c13a59',
  darker: '#872d4d',
};

const GREY = {
  0: '#fffaf2',
  100: '#fdf5ed',
  200: '#f8f0e8',
  300: '#eee5dd',
  400: '#cbc3bb',
  500: '#ada59d',// shadows from this color
  600: '#837b74',
  700: 'rgb(110, 103, 96)',// dima
  800: '#4e4841',
  900: '#2c2620',
  500_8: alpha('#ada59d', 0.08),
  500_12: alpha('#ada59d', 0.12),
  500_16: alpha('#ada59d', 0.16),
  500_24: alpha('#ada59d', 0.24),
  500_32: alpha('#ada59d', 0.32),
  500_48: alpha('#ada59d', 0.48),
  500_56: alpha('#ada59d', 0.56),
  500_80: alpha('#ada59d', 0.8),
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const CHART_COLORS = {
  violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
  blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
  green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
  yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
  red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4'],
};

const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY, contrastText: '#fff' },
  secondary: { ...SECONDARY, contrastText: '#fff' },
  info: { ...INFO, contrastText: '#fff' },
  success: { ...SUCCESS, contrastText: GREY[800] },
  warning: { ...WARNING, contrastText: GREY[800] },
  error: { ...ERROR, contrastText: '#fff' },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  action: {
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette = {
  light: {
    ...COMMON,
    mode: 'light', 
      
    background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
    action: { active: GREY[600], ...COMMON.action },
  },
  dark: {
    ...COMMON, 
    mode: 'dark',
    text: { primary: '#fff', secondary: GREY[500], disabled: GREY[600] },
    background: { paper: GREY[800], default: GREY[900], neutral: GREY[500_16] },
    action: { active: GREY[500], ...COMMON.action },
    dima:PRIMARY.main 
  },
} as const;

export default palette;
