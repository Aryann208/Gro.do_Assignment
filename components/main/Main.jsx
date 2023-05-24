'use client';
import { useContext, useEffect } from 'react';
import VideoHolder from '../videoHolder/VideoHolder';
import PaginationDisplay from '../paginationDisplay/PaginationDisplay';
import { VideoDataContext } from '../store/Store';
const Main = () => {
  const { data } = useContext(VideoDataContext);

  const videoData = data.posts;

  return (
    <div className="h-[100%] w-[100vw] bg-[#50C878]">
      <div className="px-[1em] py-[1em]">
        {videoData?.map((i) => (
          <VideoHolder
            key={i['postId']}
            id={i['postId']}
            creatorName={i['creator']?.name}
            creatorHandle={i['creator']?.handle}
            creatorPic={i['creator']?.pic}
            reactionCount={i['reaction']?.count}
            description={i['submission']?.description}
            title={i['submission']?.title}
            poster={i['submission']?.thumbnail}
          />
        ))}
      </div>

      <PaginationDisplay />
    </div>
  );
};

export default Main;
