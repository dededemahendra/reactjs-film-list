const Movie = ({ item }) => {
  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[300px]  inline-block cursor-pointer relative p-2'>
      <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item.title} />
    </div>
  );
};

export default Movie;
