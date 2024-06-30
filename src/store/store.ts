import create from 'zustand';

interface ShowTextState {
  showPitch: boolean;
  toggleShowPitch: () => void;
  showKeyboard: boolean;
  toggleShowKeyboard: () => void;
}
export const showTextStore = create<ShowTextState>(set => ({
  showPitch: true,
  toggleShowPitch: () => set(state => ({ showPitch: !state.showPitch })),
  showKeyboard: true,
  toggleShowKeyboard: () =>
    set(state => ({ showKeyboard: !state.showKeyboard })),
}));
