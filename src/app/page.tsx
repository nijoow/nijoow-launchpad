'use client';

import { drumSounds, pianoSounds } from '@/constant/sound';
import useMounted from '@/hooks/useMounted';
import { showTextStore } from '@/store/store';
import { cn } from '@/utils/cn';
import { isMobile } from '@/utils/isMobile';
import { useEffect, useState } from 'react';
import KeyPad from './_components/KeyPad';

export default function Home() {
  const mounted = useMounted();
  const [pad, setPad] = useState('Piano');
  const [animation, setAnimation] = useState(false);
  const { showPitch, showKeyboard, toggleShowPitch, toggleShowKeyboard } =
    showTextStore(state => state);

  useEffect(() => {
    setTimeout(() => {
      setAnimation(false);
    }, 200);
  }, [pad]);

  return (
    <main className="relative mx-auto flex h-full w-full max-w-5xl flex-col items-center rounded-xl bg-zinc-800 p-3 shadow-xl sm:p-8">
      <div className="flex w-full justify-between gap-2 p-4 text-zinc-300">
        <div className="flex flex-col items-end gap-2 text-zinc-300">
          <div
            className={cn(`cursor-pointer p-1 hover:text-white`, {
              'text-white': pad === 'Piano',
              'text-zinc-300': pad !== 'Piano',
            })}
            onClick={() => {
              if (pad !== 'Piano') {
                setAnimation(true);
                setTimeout(() => {
                  setPad('Piano');
                }, 100);
              }
            }}
          >
            Piano
          </div>
          <div
            className={cn(`cursor-pointer p-1 hover:text-white`, {
              'text-white': pad === 'Drum',
              'text-zinc-300': pad !== 'Drum',
            })}
            onClick={() => {
              if (pad !== 'Drum') {
                setAnimation(true);
                setTimeout(() => {
                  setPad('Drum');
                }, 100);
              }
            }}
          >
            Drum
          </div>
        </div>
        <div className="flex flex-col items-end gap-2 text-zinc-300">
          <button className="p-1" onClick={toggleShowPitch}>
            {showPitch ? 'PITCH TEXT OFF' : 'PITCH TEXT ON'}
          </button>
          {mounted && !isMobile() && (
            <button className="p-1" onClick={toggleShowKeyboard}>
              {showKeyboard ? 'KEYBOARD TEXT OFF' : 'KEYBOARD TEXT ON'}
            </button>
          )}
        </div>
      </div>

      <div
        className={cn(
          `my-auto grid w-full max-w-2xl flex-none grid-cols-12 gap-2 transition-all sm:gap-4`,
          {
            'scale-50 opacity-0': animation,
            'scale-100 opacity-100': !animation,
            'grid-cols-12': pad === 'Piano',
            'grid-cols-6': pad === 'Drum',
          },
        )}
      >
        {pad === 'Piano' &&
          pianoSounds.map(item => (
            <div className="col-span-2" key={item.keyCode}>
              <KeyPad
                url={item.url}
                name={item.name}
                color={item.color}
                keyCode={item.keyCode}
              />
            </div>
          ))}{' '}
        {pad === 'Drum' &&
          drumSounds.map(item => (
            <div className="col-span-2" key={item.keyCode}>
              <KeyPad
                url={item.url}
                name={item.name}
                color={item.color}
                keyCode={item.keyCode}
              />
            </div>
          ))}
      </div>
    </main>
  );
}
