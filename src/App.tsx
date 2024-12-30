import { FC, useState } from 'react';
import { Button } from '@/components/ui/button';
import bgAtas from '../public/bg-image.png';
import logoW from '../public/logo-white.png';

import bgifc from '@/assets/bg-test-1.png';
import orUp from '@/assets/orname-1.png';
import orDown from '@/assets/orname-2.png';
import dos from '@/assets/bg-text-2.png';
import empic from '@/assets/fs-2.png';
import faspic from '@/assets/fs-1.png';
import image1 from '@/assets/image-1.png';
import image2 from '@/assets/image-2.png';
import { Map, SendHorizonal } from 'lucide-react';
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
                className={`snap-start min-h-screen flex flex-col justify-between items-center w-full border bg-bottom bg-no-repeat bg-cover`}
                style={{ backgroundImage: `url(${bgifc})` }}
              >
                {' '}
                <div></div>
              </section>

              {/* SECTION AYAT */}

              <section
                style={{ backgroundImage: `url(${dos})` }}
                className="snap-start min-h-screen flex flex-col justify-center items-center gap-3 "
              >
                <div className=" bg-[#EFDA8D] flex flex-col items-center justify-center gap-9 rounded-full m-1 max-w-[450px] h-[800px]  p-5 shadow-2xl hidden!">
                  <img
                    src={orUp}
                    alt=""
                    className="w-2/3"
                  />
                  <p className="text-md font-inter text-center">
                    Dari Anas bin Malik radhiyallahu 'anhu, ia berkata bahwa Rasulullah shallallahu
                    'alaihi wa sallam bersabda,
                  </p>
                  <p className="text-4xl font-noto text-center leading-loose">
                    إِذَا تَزَوَّجَ الْعَبْدُ فَقَدِ اسْتَكْمَلَ نِصْفُ الدِّيْنِ فَلْيَتَّقِ اللهَ
                    فِي النِّصْفِ الْبَاقِي
                  </p>
                  <p className="text-md text-center">
                    "Jika seseorang menikah, maka ia telah menyempurnakan separuh agamanya.
                    Karenanya, bertakwalah pada Allah pada separuh yang lainnya." (HR. Al Baihaqi
                    dalam Syu'ab Al-Iman. Dishahihkan oleh Syaikh Al Albani dalam As Silsilah Ash
                    Shahihah no. 625)
                  </p>
                  <img
                    src={orDown}
                    alt=""
                    className="w-2/3"
                  />
                </div>
              </section>
              {/* SECTION MEMPELAI */}

              <section
                style={{ backgroundImage: `url(${dos})` }}
                className="snap-start min-h-screen flex flex-col justify-center items-center"
              >
                <div className=" bg-[#EFDA8D] flex flex-col items-center justify-center  rounded-full m-1 max-w-[450px] h-[850px]  px-5 shadow-2xl hidden!">
                  <img
                    src={orUp}
                    alt=""
                    className="w-2/5 mb-3"
                  />
                  <p className="text-xs font-bold text-center px-10">
                    Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i,
                    teman sekaligus sahabat, untuk menghadiri acara pernikahan Kami
                  </p>
                  <div className="flex flex-col items-center justify-center font-inter">
                    <img
                      src={empic}
                      alt=""
                      className="w-[90%]"
                    />

                    <p className="text-4xl font-semibold font-gwendolyn">Ema Safitri</p>
                    <p className="text-xs mt-2 font-medium text-center">
                      Putri dari Bapak Ambarwat dan Ibu Samiyem
                    </p>
                  </div>
                  <div className="flex w-full flex-row items-center justify-center gap-2">
                    <hr className="border-[1px] w-1/3 border-amber-950" />
                    <p className="text-4xl font-gwendolyn font-semibold">dengan </p>
                    <hr className="border-[1px] w-1/3 border-amber-950" />
                  </div>
                  <div className="flex flex-col items-center justify-center font-inter">
                    <img
                      src={faspic}
                      alt=""
                      className="w-[90%]"
                    />
                    <p className="text-4xl font-semibold font-gwendolyn">Labaik Fasya Asil Say</p>
                    <p className="text-xs mt-2 font-medium text-center">
                      Putra dari Bapak Mustaqim dan Ibu Siti Rokhimah
                    </p>
                  </div>
                  <img
                    src={orDown}
                    alt=""
                    className="w-2/5 mt-3"
                  />
                </div>{' '}
              </section>
              {/* SECTION ACARA*/}

              <section
                style={{ backgroundImage: `url(${dos})` }}
                className="snap-start min-h-screen flex flex-col justify-center items-center"
              >
                <div className=" bg-[#EFDA8D] w-full flex flex-col items-center justify-center gap-9 rounded-full m-1 max-w-[450px] h-[800px]  p-5 shadow-2xl hidden!">
                  <img
                    src={orUp}
                    alt=""
                    className="w-2/3"
                  />{' '}
                  <div className="flex justiy-center items-center flex-col gap-2">
                    <div className="w-full flex flex-col items-center justify-center gap-3 px-5 mb-5">
                      <h2 className="text-2xl font-bold">AKAD NIKAH</h2>
                      <hr className="border-[1px] w-2/4 border-amber-950" />

                      <p className="text-md ">Sabtu, 11 Januari 2025</p>
                      <p className="text-md ">Khusus Keluarga</p>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-3 px-5 mb-5">
                      <h2 className="text-2xl font-bold ">RESERPSI</h2>
                      <hr className="border-[1px] w-2/4 border-amber-950" />

                      <p className="text-md ">Sabtu, 11 Januari 2025</p>
                      <p className="text-md ">Pukul 10.00 WIB s/d Selesai</p>
                      <p className="text-md text-center">
                        {' '}
                        Pendopo Djowitan, <br />
                        Jl. Patangpuluhan No.20, Wirobrajan, Kota Yogyakarta, Daerah Istimewa
                        Yogyakarta 55252
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/UEKGWtbN9sWrasxb8"
                    target="_blank"
                    className="bg-primary text-white rounded px-4 py-2 flex items-center gap-2"
                  >
                    {' '}
                    <Map />
                    Peta Lokasi
                  </a>
                  <img
                    src={orDown}
                    alt=""
                    className="w-2/3"
                  />
                </div>
              </section>

              {/* SECTION RSVP*/}

              <section
                style={{ backgroundImage: `url(${dos})` }}
                className="snap-start min-h-screen flex flex-col justify-center items-center"
              >
                <h2 className="text-3xl font-bold mb-4">Kehadiran</h2>
                <p className="text-md mb-4">Kirimkan Doa & ucapan kepada kami</p>
                {/* form  */}

                <button className="bg-primary text-white rounded px-4 py-2">RSVP Now</button>
              </section>
              {/* SECTION TERIMAKASIH */}

              <section
                style={{ backgroundImage: `url(${dos})` }}
                className="snap-start min-h-screen flex flex-col justify-center items-center"
              >
                <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                  <div className="w-[90%] h-max flex gap-5 flex-col max-w-[450px] shadow-2xl bg-[#EFDA8D] p-2 rounded-xl">
                    <img
                      src={image1}
                      alt=""
                      className="w-full shadow-xl rounded-xl "
                    />
                  </div>
                  <div className="w-[90%] h-max flex gap-5 flex-col max-w-[450px] shadow-2xl bg-[#EFDA8D] p-2 rounded-xl">
                    <img
                      src={image2}
                      alt=""
                      className="w-full shadow-xl rounded-xl"
                    />
                  </div>
                </div>
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
              className="w-16 h-16 "
            />
            <p className="text-xl font-poppins font-medium -mt-3">WEDDING INVITATION</p>
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
