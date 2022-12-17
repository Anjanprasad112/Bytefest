import React from 'react';
import heroVid from '../assets/video.mp4';

const Hero = () => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className='w-full h-[90vh] top-[80px]'>
      <video
        className='object-cover h-full w-full absolute -z-10'
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
        <h1>BYTE FEST 2.0</h1>
        <p className='text-xl py-4'>
          THINK. CODE. LEARN.
        </p>
        <div>
          <button className='m-2 ' onClick={() => openInNewTab('https://forms.gle/unow5HxUortBNQPBA')}>Register Now</button>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Hero;
