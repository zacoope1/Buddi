export type Theme = {
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
  negative: {
    readonly color: string;
    readonly background: string;
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
    backgroundColor: '#1b1b1d',
    trim: '#fce205',
    button: { color: '#fffffa', backgroundColor: '#ff7518' },
  },
  secondary: {
    color: '#334756',
    backgroundColor: '#343334',
    trim: '#8E05C2',
    button: { color: '#FF4C29', backgroundColor: '#700B97' },
  },
  negative: {
    color: '#B20000',
    background: '#590000',
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
  negative: {
    color: '',
    background: '',
  },
  mono: {
    black: '#111111',
    white: '#fffffa',
  },
  transparent: '#00000000',
};
