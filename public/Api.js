'use client';
import { useEffect, useState } from 'react';
const page = 0;
const url = `https://internship-service.onrender.com/videos?page=${page}`;
export const fetchVideoPagination = async (page) => {
  try {
    const response = await fetch(
      `https://internship-service.onrender.com/videos?page=${page}`
    )
      .then((response) => response.json())
      .then((response) => response.data);

    return response;
  } catch (error) {
    console.log(error);
  }
};
const Api = () => {
  // const [data, setData] = useState(null);

  return <div></div>;
};

export default Api;
