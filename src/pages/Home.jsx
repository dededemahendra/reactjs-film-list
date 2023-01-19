import RowFilm from '../components/RowFilm';
import DisplayFilm from '../components/displayFilm';
import request from '../api/request';

const Home = () => {
  return (
    <main className='bg-black'>
      <DisplayFilm />
      <div className='mt-36 md:mt-10'>
        {/* <RowFilm title={'Latest'} fetchURL={request.requestLatest} /> */}
        <RowFilm title={'Recomendation'} fetchURL={request.requestRecomendations} />
        <RowFilm title={'Up Coming'} fetchURL={request.requestUpcoming} />
        <RowFilm title={'Popular'} fetchURL={request.requestPopular} />
        <RowFilm title={'Trending'} fetchURL={request.requestTrending} />
        <RowFilm title={'Comedy'} fetchURL={request.requestComedy} />
        <RowFilm title={'Series'} fetchURL={request.requestTvTrending} />
      </div>
    </main>
  );
};

export default Home;
