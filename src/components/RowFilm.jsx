import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const RowFilm = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);
  console.log(movies);
  return (
    <>
      <h2 className='text-white font-semibold p-4 md:text-xl'>{title}</h2>
      <div className='relative flex items-center'>
        <div id={'slider'} className='overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
          {movies.map((item, id) => (
            <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
              <img src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`} alt={item.title} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RowFilm;
