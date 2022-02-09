interface People {
  data: {
    id: number;
    name: string;
    years: number;
    img: string;
  }[];
}

export const List = (props: People) => {
  return (
    <>
      {props.data.map((person) => (
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
    </>
  );
};
