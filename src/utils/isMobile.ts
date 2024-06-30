export const isMobile = () => {
  if (typeof window === 'undefined') return false;

  return /iPhone|iPad|iPod|Android/i.test(window?.navigator.userAgent);
};
