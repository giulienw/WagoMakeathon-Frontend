import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import config from "../../../config";

export default function Page() {
    return (
    <main>
         <div className="w-6 h-6 pt-10 pl-10 pb-10"><Link href={`http://${config.ServerAddress}:8080/`}><FontAwesomeIcon icon={faArrowLeft} className="w-6 h-6"/></Link></div>
        <div className="flex grid grid-cols-1 gap-1 grid-flow-rows justify-items-center content-center">
            <img className="object-center object-fill" src="http://192.168.201.116:8000/stream.mjpg" />
        </div>
    </main>)
}