'use client';

import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function Home() {
   const [city, setCity] = useState('');
   const [weather, setWeather] = useState({});
   const [loading, setLoading] = useState(false);

   const url = `https://api.openweathermap.org/data/2.5/weather?q=barcelona&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

   const fetchWeather = (e) => {
      e.preventDefault();
      setLoading(true);

      axios.get(url).then((response) => {
         console.log('data', response.data);
         setWeather(response.data);
      });

      setCity('');
      setLoading(false);
   };

   return (
      <div className="relative h-screen ">
         <div className="absolute inset-0">
            <Image
               src="https://images.unsplash.com/photo-1493243350443-9e3048ce7288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1640&q=80"
               alt="Nubes"
               fill
            />
         </div>
         <div className="relative z-10 flex h-full flex-col items-center justify-center bg-black/30">
            <h1 className="text-2xl font-bold text-gray-200">Background Image</h1>
         </div>
      </div>
   );
}
