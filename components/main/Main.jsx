'use client';
import { useContext, useEffect, useState } from 'react';
import VideoHolder from '../videoHolder/VideoHolder';
import PaginationDisplay from '../paginationDisplay/PaginationDisplay';
import { VideoDataContext } from '../store/Store';
const Main = () => {
  const { data, page } = useContext(VideoDataContext);
  const [loading, setLoading] = useState(true);
  const videoData = data?.data?.posts;
  const fixedPage = data?.data?.page;
  const loadingFalse = () => {
    setLoading(false);
  };

  return (
    <div className="h-[100%] min-h-[100vh] w-[100vw] bg-[#50C878]">
      <div className="px-[1em] py-[1em]">
        {videoData?.map((i) => (
          <VideoHolder
            key={i['postId']}
            page={fixedPage}
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

      <PaginationDisplay val={fixedPage} />
    </div>
  );
};

export default Main;
