type Theme = {
  primary: {
    readonly color: string;
    readonly backgroundColor: string;
    readonly trim: string;
    readonly button: { readonly color: string; readonly backgroundColor: string };
  };
  secondary: {
    readonly color: string;
    readonly backgroundColor: string;
    readonly trim: string;
    readonly button: { readonly color: string; readonly backgroundColor: string };
  };
  mono: {
    readonly black: string;
    readonly white: string;
  };
  readonly transparent: string;
};

export const DarkTheme: Theme = {
  primary: {
    color: '#fffffa',
    backgroundColor: '#082032',
    trim: '#FF4C29',
    button: { color: '#fffffa', backgroundColor: '#87CEFF' },
  },
  secondary: {
    color: '#334756',
    backgroundColor: '#2C394B',
    trim: '#8E05C2',
    button: { color: '#FF4C29', backgroundColor: '#700B97' },
  },
  mono: {
    black: '#111111',
    white: '#fffffa',
  },
  transparent: '#00000000',
};
export const LightTheme: Theme = {
  primary: {
    color: '#181818',
    backgroundColor: '#add8e6',
    trim: '',
    button: { color: '#181818', backgroundColor: '' },
  },
  secondary: {
    color: '#181818',
    backgroundColor: '#add8e6',
    trim: '',
    button: { color: '#181818', backgroundColor: '' },
  },
  mono: {
    black: '#111111',
    white: '#fffffa',
  },
  transparent: '#00000000',
};
