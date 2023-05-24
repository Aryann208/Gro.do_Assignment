'use client';
'use client';
import { VideoDataContext } from '@/components/store/Store';
import React, { useContext, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
import { usePathname } from 'next/navigation';
import Navigation from '../navigation/Navigation';

const VideoMain = () => {
  const [url, setUrl] = useState(null);
  const { data, page, setPage } = useContext(VideoDataContext);
  const pageNum = data?.data?.page;
  const pathname = usePathname();
  const fixedPage = pathname.slice(-1);
  useEffect(() => {
    setPage(fixedPage);
  });
  const videoData = data?.data?.posts;

  const id = pathname.slice(1, -2);
  const keyMatching = (id) => {
    const filtered = [];
    videoData?.map((d) => {
      console.log(d);
      if (d?.postId == id) {
        filtered.push(d);
      }
    });

    return filtered;
  };

  const i = keyMatching(id);
  console.log(i);
  console.log('mesg' + pageNum);
  const mediaUrl = i[0]?.submission?.mediaUrl;

  const creatorName = i[0]?.creator?.name;
  const creatorHandle = i[0]?.creator?.handle;
  const creatorPic = i[0]?.creator?.pic;
  const reactionCount = i[0]?.reaction?.count;
  const description = i[0]?.submission?.description;
  const title = i[0]?.submission?.title;
  const detail = [
    'Title',
    'Creator Name',
    'Creator Handle',
    'Reactions',
    'Video Title',
    'Video Description',
  ];

  return (
    <>
      <Navigation />
      <div className="flex flex-col sm-w-[100vw] sm-h-[80vh] md-w-[100vw] md-h-[80vh]  lg-w-[100vw] lg-h-[80vh]  items-center  bg-green-400 ">
        <div className=" mx-auto flex justify-between items-center rounded-xl sm-w-[100vw] sm-h-[100vh] md-w-[100vw] md-h-[90vh] lg-w-[30vw] lg-h-[100vh]">
          <ReactPlayer
            url={mediaUrl}
            width="90vw"
            controls={true}
            className=" opacity-[1]  "
          />
        </div>
        <div className="video-detail sm-w-[80vw] sm-h-[80vh] md-w-[80vw] md-h-[80vh]  lg-w-[50vw] lg-h-[80vh]  p-10 mx-10 my-10 rounded-3xl bg-slate-200 text-3xl text-gray-600">
          <p className="py-5">
            <span className="font-bold text-green-500 font-[arial]">
              Title:
            </span>
            {title}
          </p>
          <p className="py-5">
            <span className="font-bold text-green-500 font-[arial]">
              Reactions:
            </span>
            {reactionCount}
          </p>
          <p className="py-5">
            <span className="font-bold text-green-500 font-[arial]">
              Creator Name:
            </span>{' '}
            {creatorName}
          </p>
          <p className="py-5">
            <span className="font-bold text-green-500 font-[arial]">
              Creator Handle:
            </span>{' '}
            {creatorHandle}
          </p>
          <div className="py-5">
            <p className="font-bold text-green-500 font-[arial]">
              Video Description:
            </p>
            {description}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoMain;
