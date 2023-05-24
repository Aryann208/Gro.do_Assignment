import Image from 'next/image';
import { useContext } from 'react';
import { VideoDataProvider } from '@/components/store/Store';

import Api from '../public/Api';
import Navigation from '@/components/navigation/Navigation';
import Main from '@/components/main/Main';

export default function Home() {
  return (
    <VideoDataProvider>
      <Navigation />
      <Main />
      <Api></Api>
    </VideoDataProvider>
  );
}
