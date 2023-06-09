import { useContext, useEffect } from 'react';
import { VideoDataContext } from '../store/Store';
const PaginationDisplay = ({ val = 0 }) => {
  const { pageIncrement, pageDecrement, page, setPage } =
    useContext(VideoDataContext);
  useEffect(() => {
    setPage(val);
  }, []);
  return (
    <div className="text-white w-[90vw] text-3xl font-semibold text-center pb-5 mx-auto ">
      <button onClick={pageDecrement}>{page > 0 && <span>prev -</span>}</button>

      <span className=" text-black rounded-full px-3 py-2 mx-2 bg-slate-200">
        {page}
      </span>

      <button onClick={pageIncrement}>
        {page < 9 && <span> - next</span>}
      </button>
    </div>
  );
};

export default PaginationDisplay;
