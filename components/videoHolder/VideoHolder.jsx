import React from 'react';
import Link from 'next/link';

const fallback_desc =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet enim nec libero faucibus imperdiet. Nam auctor...';
const fallbackImg =
  'data:image/png;base64,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';
const fallbackCreatorImg =
  'https://cdn.gro.care/fd3657a21d21_1683505781883.webp';
const VideoHolder = ({
  id = 1,
  page = 0,
  poster = fallbackImg,
  title = 'Video title unavailable',
  reactionCount = 0,
  creatorName = 'Creator Name',
  creatorHandle = 'creatorHandle',
  creatorPic = fallbackCreatorImg,
  description = fallback_desc,
}) => {
  return (
    <Link href={`/${id}+${page}`}>
      <div className=" carousel flex  content-between items-center mx-auto my-[1em]  w-[90vw] rounded-2xl h-[26em] text-black font-[calibri]  bg-white ">
        <div className=" vid-image px-[1em]">
          <img
            src={poster}
            alt="Video Thumbnail"
            style={{ height: '24em', width: '21em', objectFit: 'contain' }}
            className="vid-image rounded-2xl "
          />
        </div>
        <div className="flex flex-col justify-evenly  space-y-3  details w-[70%] mx-[1em] h-full p-[1em]">
          <div>
            <h2 className="title text-3xl font-bold text-[#50C878] ">
              {title}
            </h2>
            <p className="views">
              <span className="font-semibold text-xl">
                {reactionCount} views
              </span>
            </p>
          </div>
          <div className=" creator-details flex items-center">
            <span>
              <img
                className=" creator-img rounded-full inline"
                alt="Creator Display Picture"
                style={{ height: '4em', width: '4em' }}
                src={creatorPic}
              />
            </span>
            <div className=" creator-info flex flex-col px-2 ">
              <span className="text-2xl font-semibold">{creatorName} </span>
              <span className="text-[#50C878] text-2xl"> @{creatorHandle}</span>
            </div>
          </div>
          <p className="vid-description font-medium text-2xl pt-2">
            {description.slice(0, 200)}...
          </p>
        </div>
      </div>
    </Link>
  );
};

export default VideoHolder;
