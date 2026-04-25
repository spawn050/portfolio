/**
 * Pluggable theme definitions.
 * Add new themes here — they automatically appear in the UI dropdown.
 */
window.THEMES = [
  {
    id: 'light',
    name: 'Light',
    variables: {
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
    }
  },
  {
    id: 'dark',
    name: 'Dark',
    variables: {
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
    variables: {
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
  }
];
