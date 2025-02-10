import { useHeroProvider } from "@/context/hero-provider"
import Image from "next/image"

const BanSelectCard = ({ order, status, pickBan }) => {
    const { hero, ban, count } = useHeroProvider()
    //untuk memberikan animasi pada card saat memilih ban pada bagian card itu
    const turnBan = (turn) => {
        if (ban && count == turn) return "animate-pulse border-2 border-white box-border"
    }
    return (
        <div className={`lg:h-16 lg:w-24 w-14 flex-1 h-12 bg-gray-500 overflow-hidden flex justify-center  ${turnBan(order)}`}>
            {/* disini dia ngecek apakah sudah berada pada status sudah terpilih dan masih dalam tahap ban atau kagak */}
            {status && ban ?   
                <div className="text-lg text-center flex items-center justify-center text-white">
                    {order}
                </div>
                : hero.map((item) => {
                    if (item.id === pickBan)
                        return (
                            <div key={item.id} className="w-full h-full">
                                <Image alt="item.name" src={item.imageportrait} height={400} width={400} className="grayscale object-cover w-full h-full" />
                            </div>
                        )
                })}
        </div>
    )
}
export default BanSelectCard