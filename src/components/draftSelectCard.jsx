import { useHeroProvider } from "@/context/hero-provider"
import { faL } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import { useState } from "react"

const DraftSelectCard = ({ status, player1, pick, order }) => {
    const { hero, ban, count } = useHeroProvider()
    const [isLoading, setIsLoading] = useState(true)
    //buat ngasih animasi kalau card saat ini sedang berada dipick
    const turnPick = (turn) => {
        if (!ban && count === turn) return "animate-pulse border-4"

    }
    return (
        <div className={`${player1 ? "lg:skew-y-12 bg-blue-800 " : "lg:-skew-y-12 bg-red-800 "} ${turnPick(order)} h-full lg:w-36 w-16 transform relative overflow-hidden`}>
            {
                status ?
                    <div className="flex w-full h-full justify-center items-center text-lg text-white">{order}</div>
                    : hero.map((item) => {
                        if (item.id === pick)
                            return (
                                <Image title={item.name} alt={item.name} key={item.id} src={item.imagesprites} height={400} width={400} className={`lg:${player1 ? "-skew-y-12" : "skew-y-12"} h-full object-cover scale-110 w-auto z-10`} />
                            )
                    })
            }
        </div>
    )
}

export default DraftSelectCard