import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import request from '../api/request';
import { BsFillPlayFill, BsPlusLg } from 'react-icons/bs';

const DisplayFilm = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(request.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  return (
    <div className='w-full h-full z-0 m-0  text-white bg-black relative'>
      <div className='w-full h-full'>
        <img className='w-full h-96 md:h-screen md:object-cover md:object-center' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
      </div>
      <div className='absolute w-full top-[20%] p-4 md:top-[25%] md:p-10'>
        <h1 className='text-2xl font-semibold mb-5 md:w-7/12 md:text-6xl'>{movie?.title}</h1>
        <div className='w-full flex'>
          <button className='border flex items-center gap-1 bg-transparent text-sm py-2 px-5'>
            <BsFillPlayFill size={20} /> Play
          </button>
          <button className='border flex items-center gap-1 text-sm ml-4 py-2 px-5 '>
            <BsPlusLg size={15} /> Watch Later
          </button>
        </div>
        <p className='text-sm text-gray-300 mt-2'>Relased: {movie?.release_date}</p>
        <p className='text-sm mt-2 md:w-6/12 md:text-lg'>{movie?.overview}</p>
      </div>
    </div>
  );
};

export default DisplayFilm;
