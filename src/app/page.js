'use client';

import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';
import Image from 'next/image';
import Weather from '@/components/Weather';

export default function Home() {
   const [city, setCity] = useState('');
   const [weather, setWeather] = useState({});
   const [loading, setLoading] = useState(false);

   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

   const fetchWeather = (e) => {
      e.preventDefault();
      setLoading(true);

      axios.get(url).then((response) => {
         setWeather(response.data);
      });

      setCity('');
      setLoading(false);
   };

   const handleSearch = (e) => {
      if (e.target.value !== '') {
         return setCity(e.target.value);
      }
   };

   return (
      <div className="relative h-screen">
         <div className="absolute inset-0">
            <Image
               src="https://images.unsplash.com/photo-1493243350443-9e3048ce7288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1640&q=80"
               alt="Nubes"
               fill
            />
         </div>

         {/* Búsqueda */}
         <div className="flex h-screen flex-col justify-between">
            <div className="relative z-10 m-auto flex max-w-[500px]">
               <form
                  onSubmit={fetchWeather}
                  className="m-auto flex w-full items-center justify-between rounded-md bg-black/40 p-3"
               >
                  <input
                     type="text"
                     placeholder="Buscar ciudad"
                     className="h-8 w-full rounded-md border-none bg-transparent pl-3 text-2xl text-gray-200 placeholder:text-gray-200 focus:outline-none"
                     onChange={handleSearch}
                  />
                  <button onClick={fetchWeather}>
                     <BsSearch color="rgb(229 231 235)" size={25} />
                  </button>
               </form>
            </div>

            {/* Clima (dashboard) */}
            <div className="relative z-10 m-auto flex max-w-[800px]">{weather?.main && <Weather data={weather} />}</div>

            {/* Otro */}
         </div>
      </div>
   );
}
