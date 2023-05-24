'use client';
import { VideoDataContext } from '@/components/store/Store';
import { VideoDataProvider } from '@/components/store/Store';
import React, { useEffect, useContext } from 'react';
import VideoMain from '@/components/videoMain/VideoMain';

const page = () => {
  return (
    <VideoDataProvider>
      <div className="w-[100vw] h-[100vh] bg-[#50C878]">
        <VideoMain />
      </div>
    </VideoDataProvider>
  );
};

export default page;
