import { useState } from 'react';

const peoples: { id: number; name: string; years: number; img: string }[] = [
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
  const [people, setPeople] = useState(peoples);

  const clearAllHandler = () => {
    setPeople([]);
  };

  return (
    <main className='h-screen bg-[#f28ab2] flex justify-center items-center'>
      <section className='w-[90vw] max-w-[450px] bg-white shadow-2xl rounded px-8 py-6'>
        <h1 className='mb-8 text-3xl'>{people.length} birthdays today</h1>

        {people.map((person) => (
          <article key={person.id} className='flex mb-6'>
            <img
              className='rounded-full h-20 w-20 object-cover'
              src={person.img}
              alt={person.name}
            />
            <div className='flex flex-col justify-center ml-4 w-full'>
              <h4 className='font-bold tracking-wider'>{person.name}</h4>
              <p className='font-thin'>{person.years} years</p>
            </div>
          </article>
        ))}
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
