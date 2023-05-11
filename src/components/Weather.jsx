export function Weather({ data }) {
   console.log('data:', data.name);
   return (
      <div className="m-auto flex w-full items-center justify-between rounded-md bg-black/40 p-3">
         <h1>{data.name}</h1>
      </div>
   );
}
