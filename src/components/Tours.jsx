import Card from '../collection/Card';

function Tours() {
  return (
    <div className='flex flex-col items-center gap-6 my-10'>
      <h1 className='font-bold text-4xl'>Our Tours</h1>
      <div className='flex xsm:flex-col gap-10 md:flex-row md:gap-3 lg:gap-10 xl:gap-20 justify-center items-center'>
        <Card
          title='Herat'
          image='./imgs/herat.jpg'
          content='Kabul is the capital of Afghanistan. Kabul is one of the beautiful cities in the world.'
        />
        <Card
          title='Bamyan'
          image='./imgs/bamayan.jpg'
          content='Kabul is the largest city in Afghanistan, rich in history and culture.'
        />
        <Card
          title='Mazar-i-Sharif'
          image='./imgs/mazar-1.jpg'
          content='Mazar-i-Sharif is known for its stunning Blue Mosque and vibrant culture.'
        />
      </div>
    </div>
  );
}

export default Tours;
