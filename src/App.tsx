import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Button } from '@/components/ui/button';
import bgAtas from '../public/unsplash-image.jpg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="bg-cover w-full h-screen flex items-center justify-center bg-fixed relative"
      style={{ backgroundImage: `url(${bgAtas})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative invitation-container bg-[#ffffff] text-[#1A1C20] bg-opacity-95 rounded-lg shadow-lg max-w-xl w-full p-8 overflow-y-auto max-h-[100vh] snap-y snap-mandatory">
        <section className="snap-start min-h-[90vh] flex flex-col justify-center items-center w-full">
          <p className="text-lg font-inter font-bold">THE WEDDING OF</p>
          <p className=" font-bold font-qwitcher text-7xl">Ema n Fasya</p>
          <p className="text-lg font-inter">11.01.2025</p>
        </section>
        <section className="snap-start min-h-[90vh] flex flex-col justify-evenly items-center gap-3">
          <h2 className="text-md font-inter text-center">
            Dari Anas bin Malik radhiyallahu 'anhu, ia berkata bahwa Rasulullah
            shallallahu 'alaihi wa sallam bersabda,
          </h2>
          <p className="text-4xl font-noto text-center leading-loose">
            إِذَا تَزَوَّجَ الْعَبْدُ فَقَدْ كَمُلَ نِصْفَ الدِّينِ ، فَلْيَتَّقِ اللَّهَ
            فِي النِّصْفِ الْبَاقِي
          </p>
          <p className="text-md text-center">
            "Jika seseorang menikah, maka ia telah menyempurnakan separuh agamanya.
            Karenanya, bertakwalah pada Allah pada separuh yang lainnya." (HR. Al Baihaqi
            dalam Syu'ab Al-Iman. Dishahihkan oleh Syaikh Al Albani dalam As Silsilah Ash
            Shahihah no. 625)
          </p>
        </section>
        <section className="snap-start min-h-[90vh] flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-4">RSVP</h2>
          <p className="text-md mb-4">Please let us know if you can attend.</p>
          <button className="bg-primary text-white rounded px-4 py-2">RSVP Now</button>
        </section>
        <section className="snap-start min-h-[90vh] flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-4">RSVP</h2>
          <p className="text-md mb-4">Please let us know if you can attend.</p>
          <button className="bg-primary text-white rounded px-4 py-2">RSVP Now</button>
        </section>
        <section className="snap-start min-h-[90vh] flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-4">RSVP</h2>
          <p className="text-md mb-4">Please let us know if you can attend.</p>
          <button className="bg-primary text-white rounded px-4 py-2">RSVP Now</button>
        </section>
        <section className="snap-start min-h-[90vh] flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-4">RSVP</h2>
          <p className="text-md mb-4">Please let us know if you can attend.</p>
          <button className="bg-primary text-white rounded px-4 py-2">RSVP Now</button>
        </section>
      </div>
    </div>
  );
}

export default App;
