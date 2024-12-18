import { FC, useState } from 'react';
import theLogos from '/ef logos.png';
import { Button } from '@/components/ui/button';
import bgAtas from '../public/unsplash-image.jpg';
import logoW from '../public/logowhite.png';

import bgifc from '@/assets/bg-test-1.png';
import dos from '@/assets/bg-text-2.png';
import { SendHorizonal } from 'lucide-react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<App />}
        />
      </Routes>
    </BrowserRouter>
  );
};

function App() {
  const [opened, setOpened] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialName = queryParams.get('name') || '';

  return (
    <>
      {!opened ? (
        <Cover
          onclick={() => setOpened(true)}
          name={initialName}
        />
      ) : (
        <>
          <div
            className="bg-cover w-full h-screen flex items-center justify-center bg-fixed relative transition-opacity duration-1000 opacity-0 animate-fadeIn"
            style={{ backgroundImage: `url(${bgAtas})` }}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative invitation-container bg-[#ffffff] text-[#1A1C20] bg-opacity-95 rounded-lg shadow-lg max-w-xl w-full p-2 overflow-y-auto max-h-[100vh] snap-y snap-mandatory ">
              {/* SECTION WELLCOME*/}

              <section
                className={`snap-start min-h-screen flex flex-col justify-center items-center w-full  border bg-cover bg-bottom bg-no-repeat bg-[]`}
                style={{ backgroundImage: `url(${bgifc})` }}
              >
                <div className="flex flex-col items-center justify-center">
                  <p className="text-lg font-inter font-bold">THE WEDDING OF</p>
                  <p className="font-bold font-gwendolyn text-7xl">Ema & Fasya</p>
                  <p className="text-lg font-inter">11.01.2025</p>

                  <img
                    src={theLogos}
                    alt=""
                    className="w-20 mt-28"
                  />
                </div>
              </section>

              {/* SECTION AYAT */}

              <section
                style={{ backgroundImage: `url(${dos})` }}
                className="snap-start min-h-screen flex flex-col justify-evenly items-center gap-3"
              >
                <h2 className="text-md font-inter text-center">
                  Dari Anas bin Malik radhiyallahu 'anhu, ia berkata bahwa Rasulullah shallallahu
                  'alaihi wa sallam bersabda,
                </h2>
                <p className="text-4xl font-noto text-center leading-loose">
                  إِذَا تَزَوَّجَ الْعَبْدُ فَقَدْ كَمُلَ نِصْفَ الدِّينِ ، فَلْيَتَّقِ اللَّهَ فِي
                  النِّصْفِ الْبَاقِي
                </p>
                <p className="text-md text-center">
                  "Jika seseorang menikah, maka ia telah menyempurnakan separuh agamanya. Karenanya,
                  bertakwalah pada Allah pada separuh yang lainnya." (HR. Al Baihaqi dalam Syu'ab
                  Al-Iman. Dishahihkan oleh Syaikh Al Albani dalam As Silsilah Ash Shahihah no. 625)
                </p>
              </section>
              {/* SECTION MEMPELAI */}

              <section className="snap-start min-h-screen flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold mb-4">Mempelai</h2>
                <div></div>
                <p className="text-md mb-4">Please let us know if you can attend.</p>
              </section>
              {/* SECTION ACARA*/}

              <section className="snap-start min-h-screen flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold mb-4">Resepsi Pernikahan</h2>
                <p className="text-md mb-4">Please let us know if you can attend.</p>
                <button className="bg-primary text-white rounded px-4 py-2">RSVP Now</button>
              </section>

              {/* SECTION RSVP*/}

              <section className="snap-start min-h-screen flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold mb-4">RSVP</h2>
                <p className="text-md mb-4">Please let us know if you can attend.</p>
                <button className="bg-primary text-white rounded px-4 py-2">RSVP Now</button>
              </section>
              {/* SECTION TERIMAKASIH */}

              <section className="snap-start min-h-screen flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold mb-4">RSVP</h2>
                <p className="text-md mb-4">Please let us know if you can attend.</p>
                <button className="bg-primary text-white rounded px-4 py-2">RSVP Now</button>
              </section>
            </div>
          </div>
        </>
      )}
    </>
  );
}

interface PropsCover {
  onclick: () => void;
  name: string;
}

const Cover: FC<PropsCover> = ({ onclick, name }) => {
  return (
    <>
      <div
        className="bg-cover w-full h-screen flex items-center justify-center bg-fixed relative"
        style={{ backgroundImage: `url(${bgAtas})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative  text-[#F4F4F4] rounded-lg max-w-xl w-full p-8 overflow-y-auto max-h-[100vh] ">
          <section className=" flex flex-col justify-between items-center w-full gap-6">
            <img
              src={logoW}
              className="w-20 h-20 "
            />
            <p className="text-xl font-poppins font-medium">WEDDING INVITATION</p>
            <p className=" font-bold font-gwendolyn text-6xl md:text-8xl">Ema & Fasya</p>
            {/* <div className=" bg-[#F4F4F4] w-1 h-32"></div> */}
            <div className="flex flex-col gap-3 items-center justify-center w-80 bg-black/5 rounded-lg p-3 mt-10 border border-[#F4F4F4]/50">
              <p className="text-md font-poppins font-medium">Kepada Yth.</p>
              <p className="text-xl font-poppins font-medium">{name || 'Tamu'}</p>
            </div>
            <Button
              variant="outline"
              onClick={onclick}
              className="bg-inherit mt-5"
            >
              <SendHorizonal className="mr-2 h-4 w-4" />
              Buka Undangan
            </Button>
          </section>
        </div>
      </div>
    </>
  );
};

export default Router;
