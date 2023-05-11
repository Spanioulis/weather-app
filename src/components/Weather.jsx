import Image from 'next/image';

export function Weather({ data }) {
   console.log('data:', data);
   return (
      <div className="m-auto flex w-full items-center justify-between rounded-md bg-black/40 p-3">
         <h1>{data.name}</h1>
         <Image
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width="100px"
            height="100px"
         />
      </div>
   );
}
