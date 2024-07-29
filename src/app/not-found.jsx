import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";

const Page = () => {
    return (
        <div className=" text-center text-white">
            <div className="flex flex-col items-center lg:p-0 p-4 py-20 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
                <FontAwesomeIcon className=" h-28 w-28" size={"1x"} icon={faMagnifyingGlass} />
                <h2 className=" py-6 font-bold text-xl">Not found</h2>
                <div className="bg-black p-4 hover:scale-105 text-lg lg:text-white rounded-lg font-semibold hover:underline">
                    <Link href={"/"}>Kembali</Link>
                </div>
            </div>
        </div>
    )
}
export default Page