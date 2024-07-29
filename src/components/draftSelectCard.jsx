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
        <div className={`${player1 ? "bg-blue-800 skew-y-12" : "bg-red-800 -skew-y-12"} ${turnPick(order)} h-full w-36 transform relative overflow-hidden`}>
            {
                status ?
                    <div className="flex w-full h-full justify-center items-center text-lg text-white">{order}</div>
                    : hero.map((item) => {
                        if (item.id === pick)
                            return (
                                <Image title={item.name} alt={item.name} key={item.id} src={item.imageSprites} height={400} width={400} className={`${player1 ? " -skew-y-12" : " skew-y-12"} h-full object-cover scale-110 w-auto -skew-y-12 z-10`} />
                            )
                    })
            }
        </div>
    )
}

export default DraftSelectCard