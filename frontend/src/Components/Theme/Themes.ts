type Theme = {
  primary: {
    readonly color: string;
    readonly backgroundColor: string;
    readonly button: { readonly color: string; readonly backgroundColor: string };
  };
  secondary: {
    readonly color: string;
    readonly backgroundColor: string;
    readonly button: { readonly color: string; readonly backgroundColor: string };
  };
};

export const DarkTheme: Theme = {
  primary: { color: '#fffffa', backgroundColor: '#001011', button: { color: '#ffffff', backgroundColor: '#8B008B' } },
  secondary: { color: '#9932CC', backgroundColor: '#282828', button: { color: '#8B008B', backgroundColor: '#ffffff' } },
};
export const LightTheme: Theme = {
  primary: { color: '#181818', backgroundColor: '#add8e6', button: { color: '#181818', backgroundColor: '' } },
  secondary: { color: '#181818', backgroundColor: '#add8e6', button: { color: '#181818', backgroundColor: '' } },
};
