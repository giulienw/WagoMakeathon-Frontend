import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import axios from "axios";

export default async function Page({ params }: { params: { id: string } }) {
    let data = await GetPlantData(params.id);

    return (
        <main>
            <div><FontAwesomeIcon icon={solid("arrow-left")} /></div>
            <div className="flex grid grid-cols-2 gap-1 grid-flow-rows justify-items-center content-center">
                <span className="font-bold">Bodenfeuchtigkeit: </span> <span id="moisture">{data.moisture}</span>
                <span className="font-bold">Helligkeit: </span> <span id="brightness">{data.brightness}</span>
                <span className="font-bold">Luftdruck: </span> <span id="airPressure">{data.airPressure}</span>
                <span className="font-bold">Luftfeuchtigkeit: </span> <span id="humidity">{data.humidity}</span>
                <span className="font-bold">Lufttemperatur: </span> <span id="airTemperature">{data.airTemperature}</span>
            </div>
        </main>
    );
}

async function GetPlantData(id:string) {
    return (await axios.post(`http://localhost:3000/getData?id=${id}`)).data;
}