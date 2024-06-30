import { cn } from '@/utils/cn';
import { generateRandomNumber } from '@/utils/generateRandomNumber';
import { isMobile } from '@/utils/isMobile';
import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import { showTextStore } from '../../store/store';

const randomColor = [
  'shadow-[inset_0_0_20px_20px_rgba(190,242,100,1),0_0_13px_13px_rgba(190,242,100,0.4)]',
  'shadow-[inset_0_0_20px_20px_rgba(249,168,212,1),0_0_13px_13px_rgba(249,168,212,0.4)]',
  'shadow-[inset_0_0_20px_20px_rgba(125,211,252,1),0_0_13px_13px_rgba(125,211,252,0.4)]',
  'shadow-[inset_0_0_20px_20px_rgba(216,180,254,1),0_0_13px_13px_rgba(216,180,254,0.4)]',
].map(color => `${color} bg-white`);

const KeyPad = ({
  url,
  name,
  color,
  keyCode,
}: {
  url: string;
  name: string;
  color: 'W' | 'B';
  keyCode: string;
}) => {
  const { showPitch, showKeyboard } = showTextStore(state => state);

  const [play, { stop, sound }] = useSound(url, {
    interrupt: false,
    soundEnabled: true,
  });

  const [clicked, setClicked] = useState(false);
  const [activeColor, setActiveColor] = useState('');

  useEffect(() => {
    setActiveColor(randomColor[generateRandomNumber(0, 3)]);
  }, [clicked]);

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', keyUpHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
      document.removeEventListener('keyup', keyUpHandler);
    };
  }, [sound]);

  const keyDownHandler = (e: KeyboardEvent) => {
    if (e.key === keyCode || e.key.toLowerCase() === keyCode) {
      padOn();
    }
  };

  const keyUpHandler = (e: KeyboardEvent) => {
    if (e.key === keyCode || e.key.toLowerCase() === keyCode) {
      padOff();
    }
  };

  const padOn = () => {
    setClicked(true);

    stop();
    play();
  };

  const padOff = () => {
    setClicked(false);
  };

  return (
    <div
      onMouseDown={padOn}
      onMouseUp={padOff}
      onMouseLeave={padOff}
      onTouchStart={e => {
        padOn();
      }}
      onTouchEnd={e => {
        e.preventDefault();
        padOff();
      }}
      className={cn(
        `relative flex aspect-square w-full cursor-pointer items-center justify-center rounded-md transition-colors duration-75`,
        {
          [`${activeColor} text-black`]: clicked,
          'shadow-[inset_0_0px_8px_8px_rgba(0,0,0,0.3)]': !clicked,
          'bg-zinc-600 text-white': !clicked && color === 'B',
          'bg-zinc-200 text-black': !clicked && color === 'W',
        },
      )}
    >
      {showPitch && (
        <span
          className={cn(`text-sm transition-all duration-75 sm:text-lg`, {
            'opacity-0': clicked,
            'opacity-100': !clicked,
          })}
        >
          {name}
        </span>
      )}
      {!isMobile() && showKeyboard && (
        <span
          className={cn(
            `absolute bottom-[3%] right-[10%] text-[10px] font-semibold sm:text-base`,
            {
              'opacity-0': clicked,
              'opacity-100': !clicked,
            },
          )}
        >
          『{keyCode}』
        </span>
      )}
    </div>
  );
};

export default KeyPad;
