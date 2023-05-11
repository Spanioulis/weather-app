import { CircleLoader } from 'react-spinners';

export function Spinner() {
   return (
      <div className="flex justify-center">
         <CircleLoader color="#E5E7EB" size={75} />;
      </div>
   );
}
