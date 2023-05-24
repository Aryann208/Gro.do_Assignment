'use client';
import { createContext, useState, useEffect } from 'react';
import { fetchVideoPagination } from '@/public/Api';
const url = `https://internship-service.onrender.com/videos?page=0`;
// const fetchVideoPagination = async () => {
//   try {
//     const response = await fetch(url)
//       .then((response) => response.json())
//       .then((response) => response.data);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
export const VideoDataContext = createContext({
  data: null,
  setData: () => null,
});

export const PageContext = createContext({
  page: null,
  setPage: () => null,
});

export const VideoDataProvider = ({ children }) => {
  const [data, setData] = useState(0);
  const [page, setPage] = useState(0);
  const pageDecrement = () => {
    setPage(page - 1);
    if (data?.posts?.length == 0) {
      setPage(page + 1);
    }
  };
  const pageIncrement = () => {
    setPage(page + 1);
  };
  const value = { data, setData, page, setPage, pageDecrement, pageIncrement };
  useEffect(() => {
    (async () => {
      const res = await fetchVideoPagination(page);
      setData(res);
    })();
  }, [page]);
  useEffect(() => {
    if (data?.posts?.length === 0) {
      if (page < 0) setPage(0);
      else if (page > 0) {
        setPage(page - 1);
      }
    }
  }, [data]);

  return (
    <VideoDataContext.Provider value={value}>
      {children}
    </VideoDataContext.Provider>
  );
};
