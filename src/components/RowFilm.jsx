import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Movie from './Movie';

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
      <h2 className='text-white font-semibold p-4 md:text-3xl'>{title}</h2>
      <div className='relative flex items-center'>
        <div id={'slider'} className='overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RowFilm;
