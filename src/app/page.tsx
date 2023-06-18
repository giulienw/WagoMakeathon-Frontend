import axios from 'axios'
import Link from 'next/link'
import config from "../../config";

export default async function Home() {
  let plants = await LoadPlants();
  console.log(plants)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='grid grid-cols-4 gap-2 grid-flow-col place-content-center justify-items-center content-center'>
     {plants.map(plant => (
        <div key={plant}>
          <Link className='p-6 pt-12 pb-12 rounded bg-green' href={`/plant/${plant}`}>{plant}</Link>
        </div>
     ))}
     </div>
    </main>
  )
}

async function LoadPlants():Promise<any[]> {
  return (await axios.post(`http://${config.ServerAddress}:3000/getPlants`)).data;
}