'use client'
import { useHeroProvider } from "@/context/hero-provider";
import DraftSelectCard from "./draftSelectCard";
import ArenaMapCard from "./arenaMapCard";
import Loading from "@/app/loading";
const DraftSelected = () => {
    const { hero, player, player2, arena } = useHeroProvider()
    const team1 = [1, 4, 5]
    const team2 = [2, 3, 6]

    // buat ngasih tau card mana yang yang sedang pick
    const statusPick = (turn, player) => {
        if (player.pick[turn] == null) return true
        return false
    }

    if (hero.length == 0) return (<div><Loading /></div>)
    return (
        <section className="flex lg:flex-row flex-col justify-between h-32 lg:mb-8 mb-4 flex-grow">
            <div className="flex lg:gap-4 gap-1 lg:h-full h-2/5">
                {
                    team1.map((item, index) => <DraftSelectCard key={index} status={statusPick(index, player)} pick={player.pick[index]} player1={true} order={item} />)
                }
            </div>
            <ArenaMapCard />
            <div className="flex lg:gap-4 gap-1 lg:h-full flex-row-reverse h-2/5">
                {
                    team2.map((item, index) => <DraftSelectCard key={index} status={statusPick(index, player2)} pick={player2.pick[index]} player1={false} order={item} />)
                }
            </div>
        </section>
    )
}
export default DraftSelected