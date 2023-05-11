'use client';

import { useState } from 'react';
import axios from 'axios';

export default function Home() {
   const [city, setCity] = useState('');
   const [weather, setWeather] = useState({});
   const [loading, setLoading] = useState(false);

   const url = `https://api.openweathermap.org/data/2.5/weather?q=barcelona&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

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
      <main>
         <div>
            <h1 className="text-2xl font-semibold">App Weather</h1>
         </div>
      </main>
   );
}
