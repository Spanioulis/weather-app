import Image from 'next/image';

export function Weather({ data }) {
   console.log('data:', data);
   return (
      <div className="relative flex flex-col justify-between pt-12 text-gray-200">
         {/* Dashboard (superior) */}
         <div className="flex flex-row justify-between">
            <div className="flex flex-col items-center">
               <Image
                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt="/"
                  width="100"
                  height="100"
               />
               <p className="text-2xl">{data.weather[0].main}</p>
            </div>
            <div>
               <p className="text-9xl">
                  {data.main.temp.toFixed(0)}
                  {'\u00b0'}
               </p>
            </div>
         </div>

         {/* Dashboard (inferior) */}
         <div className="mt-24 flex flex-col items-center gap-4 rounded-md bg-black/50 p-4">
            {/* Lugar información */}
            <p className="text-2xl text-gray-400">Clima en {data.name}</p>
            {/* Temperatura mínima & máxima */}
            <div className="flex flex-row gap-8">
               <div>
                  <p>
                     Mín:{' '}
                     <span className="text-xl font-semibold">
                        {data.main.temp_min.toFixed(0)}
                        {'\u00b0'}
                     </span>
                  </p>
               </div>
               <div>
                  <p>
                     Max:{' '}
                     <span className="text-xl font-semibold">
                        {data.main.temp_max.toFixed(0)}
                        {'\u00b0'}
                     </span>
                  </p>
               </div>
            </div>
            {/* Humedad & viento */}
            <div className="flex flex-row gap-4">
               <div>
                  <p>
                     Humedad: <span className="text-xl font-semibold">{data.main.humidity}%</span>
                  </p>
               </div>
               <div>
                  <p>
                     Viento: <span className="text-xl font-semibold">{data.wind.speed.toFixed(0)}m/s</span>
                  </p>
               </div>
            </div>
            {/* Amanecer & atardecer */}
            <div className="flex flex-row gap-4">
               <div>
                  <p>
                     Amanecer: <span className="text-xl font-semibold">{data.sys.sunrise}%</span>
                  </p>
               </div>
               <div>
                  <p>
                     Atarceder: <span className="text-xl font-semibold">{data.sys.sunset}</span>
                  </p>
               </div>
            </div>
            {/* Metros sobre nivel del mar */}
            <div className="flex flex-row gap-4">
               <div>{data.main.sea_level && <p>Nivel del mar: {data.main.sea_level}m</p>}</div>
            </div>
         </div>
      </div>
   );
}
