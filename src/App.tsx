import { useState } from 'react';
import { List } from './components/List/List';

const peoples = [
  {
    id: 1,
    name: 'Bertie Yates',
    years: 29,
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
  },
  {
    id: 2,
    name: 'Hester Hogan',
    years: 32,
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
  },
  {
    id: 3,
    name: 'Larry Little',
    years: 36,
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
  },
];

function App() {
  const [data, setData] = useState(peoples);

  const clearAllHandler = () => {
    setData([]);
  };

  return (
    <main className='h-screen bg-[#f28ab2] flex justify-center items-center'>
      <section className='w-[90vw] max-w-[450px] bg-white shadow-2xl rounded px-8 py-6'>
        <h1 className='mb-8 text-3xl'>{data.length} birthdays today</h1>
        <List data={data} />
        <button
          className='bg-[#f28ab2] w-full py-2 rounded text-white font-bold tracking-wider'
          onClick={clearAllHandler}>
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
