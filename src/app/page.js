'use client';

import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';
import Image from 'next/image';
import { Weather, Spinner } from '@/components';

export default function Home() {
   const [city, setCity] = useState('');
   const [weather, setWeather] = useState({});
   const [loading, setLoading] = useState(false);

   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&lang=es`;

   const fetchWeather = (e) => {
      e.preventDefault();
      setLoading(true);

      axios.get(url).then((response) => {
         setWeather(response.data);
      });

      setCity('');
      setLoading(false);
   };

   return (
      <div className="relative h-screen">
         <div className="absolute inset-0">
            {/* <Image
               src="https://images.unsplash.com/photo-1493243350443-9e3048ce7288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1640&q=80"
               alt="Nubes"
               fill
            /> */}

            <Image src="/assets/valley.png" alt="Fondo prado_árbol" fill style={{ objectFit: 'cover' }} />
         </div>

         <div className="flex h-screen flex-col">
            {/* Búsqueda */}
            <div className="relative z-10 m-auto flex max-w-[700px] pt-8">
               <form
                  onSubmit={fetchWeather}
                  className="m-auto flex w-full items-center justify-between rounded-md bg-black/40 p-3"
               >
                  <input
                     type="text"
                     placeholder="Buscar ciudad"
                     className="h-8 w-full rounded-md border-none bg-transparent pl-3 text-2xl text-gray-200 placeholder:text-gray-200 focus:outline-none"
                     onChange={(e) => setCity(e.target.value)}
                  />
                  <button onClick={fetchWeather}>
                     <BsSearch color="#E5E7EB" size={25} />
                  </button>
               </form>
            </div>

            {/* Dashboard */}
            {loading ? (
               <Spinner />
            ) : (
               <div className="relative z-10 m-auto mt-[75px] flex h-[90vh] w-full max-w-[400px] flex-col justify-between">
                  {weather?.main && <Weather data={weather} />}
               </div>
            )}
         </div>
      </div>
   );
}
