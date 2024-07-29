'use client'
import { useHeroProvider } from "@/context/hero-provider"
import BanSelectCard from "./banSelectCard"
import ButtonArea from "./buttonArea"

const BanList = () => {
    const { hero, player, player2, reset, undo } = useHeroProvider()
    // untuk bagian sekarang sedang ban bagian mana dengan memanfaatkan index pada player ban
    const statusBan = (player, turn) => {
        if (player.ban[turn] == null) return true
        return false
    }

    if (hero.length == 0) return (<div></div>)

    return (
        <section className="flex w-full justify-between items-center">
            <div className="flex gap-1">
                {/* memanggil card battle niatnya ingin dibuat dinamis agar ban picknya beragam */}
                <BanSelectCard pickBan={player.ban[0]} status={statusBan(player, 0)} order={1} />
                <BanSelectCard pickBan={player.ban[1]} status={statusBan(player, 1)} order={3} />
            </div>
            <ButtonArea />
            <div className="flex gap-1">
                <BanSelectCard pickBan={player2.ban[1]} status={statusBan(player2, 1)} order={4} />
                <BanSelectCard pickBan={player2.ban[0]} status={statusBan(player2, 0)} order={2} />
            </div>
        </section>
    )
}
export default BanList