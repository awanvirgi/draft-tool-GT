'use client'
import Image from "next/image"
import { useHeroProvider } from "@/context/hero-provider";

const DraftHeroList = () => {
    const { hero, handleDraft, alreadyPick, count } = useHeroProvider()
    // buat ngasih warna bg sesuai elemen charachternya
    const getClassName = (element, lock) => {
        if (lock) {
            return "pointer-events-none bg-slate-500 grayscale brightness-50"
        }
        switch (element) {
            case "Dark":
                return "bg-purple-800";
            case "Light":
                return "bg-yellow-300";
            case "Basic":
                return "bg-slate-400";
            case "Earth":
                return "bg-amber-600";
            case "Water":
                return "bg-blue-400";
            case "Fire":
                return "bg-red-400";
            default:
                return "";
        }
    };
    if (hero.length == 0) return (<div>
    </div>)
    return (
        <section className="w-full lg:h-[280px] flex-grow lg:flex-grow-0 h-full overflow-auto border-2 border-solid bg-black bg-opacity-30 border-slate-700 px-2 py-4 lg:p-4 ">
            {/* ini buat filter hero biar mudah dicari tapi nanti malas ah
            <div className="pr-2 flex flex-col justify-between border-r-2">
                <div className="bg-red-500 h-8 w-8 mb-2"></div>
                <div className="bg-red-500 h-8 w-8 mb-2"></div>
                <div className="bg-red-500 h-8 w-8 mb-2"></div>
                <div className="bg-red-500 h-8 w-8 mb-2"></div>
                <div className="bg-red-500 h-8 w-8 mb-2"></div>
                <div className="bg-red-500 h-8 w-8 mb-2"></div>
            </div> */}
            <div className="flex justify-center gap-2 flex-wrap">
                {hero.map((item) =>
                    <div key={item.id} className={`${getClassName(item.element, alreadyPick(item.id))} ${count == 7 ? "pointer-events-none" : ""} lg:h-20 lg:w-20 h-14 w-14 xs:w-20 xs:h-20 rounded-md hover:scale-110 transition relative overflow-hidden text-white text-start`}>
                        <Image key={item.id} onClick={() => handleDraft(item.id)} src={item.imageportrait} alt={item.name} title={item.name} fill priority quality={70} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={`object-cover `} />
                    </div>)}
            </div>
        </section>
    )
}
export default DraftHeroList