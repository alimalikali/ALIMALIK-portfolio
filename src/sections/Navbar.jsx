"use client"
import { useEffect, useRef, useState } from "react";
import { navLinks } from '../constants/index.js';
import { clsx } from "clsx";

// eslint-disable-next-line react/prop-types
const NavItems = ({ onClick = () => { } }) => {

  return (

    <ul className="nav-ul">
      {navLinks.map((item) => (
        <li key={item.id} className="nav-li">
          <a href={item.href} className="nav-li_a" onClick={onClick}>
            {item.name}
          </a>
        </li>
      ))}

    </ul>
  )
}








const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  // Refs for audio and navigation container
  const audioElementRef = useRef(null);


  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);



  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black sm:px-0 mx-2 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto">
          <div className="flex items-center justify-center">
            <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
              Ali

            </a>
            <button onClick={toggleAudioIndicator} className="ml-4 flex items-center space-x-0.5">
              <audio ref={audioElementRef} className="hidden" src="/audio/Hanedan.mp3" loop />
              {isAudioPlaying ? (
                <>
                  {[1, 2, 3, 4].map((bar) => (
                    <div
                      key={bar}
                      className={clsx("indicator-line ", {
                        active: isIndicatorActive,
                      })}
                      style={{
                        animationDelay: `${bar * 0.1}s`,
                      }}
                    />
                  ))}
                </>
              ) : (
                <>
                <img src="/icons/music.svg" alt="music" className="w-6 h-6 animate-bounce" />
                </>
              )}
            </button>
          </div>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            <img src={isOpen ? '/icons/close.svg' : '/icons/menu.svg'} alt="toggle" className="w-6 h-6" />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />

          </nav>

        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
