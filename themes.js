/**
 * Pluggable theme definitions.
 * Each theme has a light and dark mode.
 * Add new themes here — they automatically appear in the UI dropdown.
 */
window.THEMES = [
  {
    id: 'default',
    name: 'Default',
    light: {
      '--bg': '#FDFCF8',
      '--bg-alt': '#F5F5F0',
      '--card-bg': '#FFFFFF',
      '--text': '#1C1917',
      '--text-muted': '#78716C',
      '--accent': '#4F46E5',
      '--accent-hover': '#4338CA',
      '--border': '#E7E5E4',
      '--shadow-sm': '0 1px 2px rgba(0, 0, 0, 0.04)',
      '--shadow-md': '0 4px 12px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.04)',
      '--shadow-lg': '0 8px 24px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.04)'
    },
    dark: {
      '--bg': '#0C0A09',
      '--bg-alt': '#292524',
      '--card-bg': '#1C1917',
      '--text': '#FAFAF9',
      '--text-muted': '#A8A29E',
      '--accent': '#818CF8',
      '--accent-hover': '#A5B4FC',
      '--border': '#292524',
      '--shadow-sm': '0 1px 2px rgba(0, 0, 0, 0.3)',
      '--shadow-md': '0 4px 12px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.3)',
      '--shadow-lg': '0 8px 24px rgba(0, 0, 0, 0.5), 0 2px 6px rgba(0, 0, 0, 0.4)'
    }
  },
  {
    id: 'ocean',
    name: 'Ocean',
    light: {
      '--bg': '#F0F9FF',
      '--bg-alt': '#E0F2FE',
      '--card-bg': '#FFFFFF',
      '--text': '#0C1929',
      '--text-muted': '#64748B',
      '--accent': '#0284C7',
      '--accent-hover': '#0369A1',
      '--border': '#BAE6FD',
      '--shadow-sm': '0 1px 2px rgba(2, 132, 199, 0.08)',
      '--shadow-md': '0 4px 12px rgba(2, 132, 199, 0.10), 0 1px 3px rgba(2, 132, 199, 0.08)',
      '--shadow-lg': '0 8px 24px rgba(2, 132, 199, 0.12), 0 2px 6px rgba(2, 132, 199, 0.10)'
    },
    dark: {
      '--bg': '#0B1120',
      '--bg-alt': '#1E293B',
      '--card-bg': '#151F32',
      '--text': '#F1F5F9',
      '--text-muted': '#94A3B8',
      '--accent': '#38BDF8',
      '--accent-hover': '#7DD3FC',
      '--border': '#1E293B',
      '--shadow-sm': '0 1px 2px rgba(0, 0, 0, 0.4)',
      '--shadow-md': '0 4px 12px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.4)',
      '--shadow-lg': '0 8px 24px rgba(0, 0, 0, 0.6), 0 2px 6px rgba(0, 0, 0, 0.5)'
    }
  },
  {
    id: 'claude',
    name: 'Claude',
    light: {
      '--bg': '#faf9f5',
      '--bg-alt': '#ede9de',
      '--card-bg': '#f5f4ef',
      '--text': '#3d3929',
      '--text-muted': '#6e6d68',
      '--accent': '#c96442',
      '--accent-hover': '#b05730',
      '--border': '#dad9d4',
      '--shadow-sm': '0 1px 2px rgba(61, 57, 41, 0.04)',
      '--shadow-md': '0 4px 12px rgba(61, 57, 41, 0.05), 0 1px 3px rgba(61, 57, 41, 0.04)',
      '--shadow-lg': '0 8px 24px rgba(61, 57, 41, 0.06), 0 2px 6px rgba(61, 57, 41, 0.04)'
    },
    dark: {
      '--bg': '#262624',
      '--bg-alt': '#1b1b19',
      '--card-bg': '#2c2c2b',
      '--text': '#f1f1ef',
      '--text-muted': '#b7b5a9',
      '--accent': '#d97757',
      '--accent-hover': '#e08b6f',
      '--border': '#3e3e38',
      '--shadow-sm': '0 1px 2px rgba(0, 0, 0, 0.3)',
      '--shadow-md': '0 4px 12px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.3)',
      '--shadow-lg': '0 8px 24px rgba(0, 0, 0, 0.5), 0 2px 6px rgba(0, 0, 0, 0.4)'
    }
  }
];
