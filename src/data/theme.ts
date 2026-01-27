// Ayu Mirage (Dark Theme)
export const DARK_THEME = {
    bg: '#1f2430',
    panel: '#232a36',
    border: '#2b3240',
    text: '#cbccc6',
    subtext: '#828997',
    mouseGlow: 'rgba(89,194,255,0.15)', // Blue glow for dark mode
    // Individual accent colors for easy reference
    blue: '#59c2ff',
    green: '#bae67e', 
    yellow: '#ffcc66',
    red: '#f28779',
    purple: '#d4bfff',
    cyan: '#95E6CB',
    // Accents array derived from individual colors
    get accents() { return [this.blue, this.green, this.yellow, this.red, this.purple]; },
}

// Botanical (Light Theme)
export const LIGHT_THEME = {
    bg: '#f1f1f1',
    panel: '#fafbfc',
    border: '#9e9fa0',
    text: '#454545',
    subtext: '#5a5a5a',
    mouseGlow: 'rgba(255, 255, 255, 1)', // White glow for light mode
    // Single accent color scheme
    blue: '#556B2F',
    green: '#556B2F',
    yellow: '#556B2F',
    red: '#556B2F',
    purple: '#556B2F',
    cyan: '#556B2F',
    // Status indicator colors (brighter version)
    statusGreen: '#B5D482',
    // Accents array derived from individual colors
    get accents() { return [this.blue, this.green, this.yellow, this.red, this.purple]; },
}

export const THEME = DARK_THEME; // Default export for compatibility

// Utility function to get status indicator colors
export const getStatusColors = (theme: 'dark' | 'light') => {
  if (theme === 'dark') {
    return {
      color: DARK_THEME.green,
      shadowRgba: '16,185,129', // emerald-400 equivalent
      backgroundHex: DARK_THEME.green,
    };
  } else {
    return {
      color: LIGHT_THEME.statusGreen,
      shadowRgba: '181,212,130', // #B5D482 as RGB
      backgroundHex: LIGHT_THEME.statusGreen,
    };
  }
};

// Helper shades for inline styles
export const styles = {
    panel: { backgroundColor: THEME.panel, border: `1px solid ${THEME.border}` },
    link: { color: THEME.accents[0] },
    sub: { color: THEME.subtext },
}