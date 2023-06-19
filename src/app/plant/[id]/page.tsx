import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { useEffect, useState } from "react";
import { PlantData } from "../../../../interfaces/PlantData";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {

    let data = (await axios.post(`http://192.168.201.116:3000/getData?id=${params.id}`)).data;

    return (
        <main>
            <div className="w-6 h-6 pt-10 pl-10 pb-10"><Link href={`http://192.168.201.116:8080/`}><FontAwesomeIcon icon={faArrowLeft} className="w-6 h-6"/></Link></div>
            <div className="flex grid grid-cols-1 gap-1 grid-flow-rows justify-items-center content-center">
                <span className="font-bold">Bodenfeuchtigkeit: {data.moisture}%</span>
                <span className="font-bold">Helligkeit: {data.brightness}</span>
                <span className="font-bold">Luftdruck: {data.airPressure/100}Hpa</span>
                <span className="font-bold">Luftfeuchtigkeit: {data.humidity}%</span>
                <span className="font-bold">Lufttemperatur: {data.airTemperature/100}°C</span>
                <span className="font-bold">Bodentemperatur: {data.soilTemperature}°C</span>
                <img className="object-center object-fill" src={data.stream} />
            </div>
        </main>
    );
}