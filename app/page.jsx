import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover & Share
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'>AI-Powered Prompts</span>
      </h1>
      <p className='desc text-center'>
        Full-stack app practice, random text Him boisterous invitation dispatched had connection inhabiting projection. 
        By mutual an mr danger garret edward an. Diverted as strictly exertion addition no disposal by stanhill. 
        This call wife do so sigh no gate felt. You and abode spite order get. 
        Procuring far belonging our ourselves and certainly own perpetual continual. 
        It elsewhere of sometimes or my certainty. Lain no as five or at high. Everything travelling set how law literature.
      </p>

      <Feed />
    </section>
  )
}

export default Home