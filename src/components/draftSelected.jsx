'use client'
import { useHeroProvider } from "@/context/hero-provider";
import DraftSelectCard from "./draftSelectCard";
import ArenaMapCard from "./arenaMapCard";
const DraftSelected = () => {
    const { hero, player, player2, arena } = useHeroProvider()
    const team1 = [1, 4, 5]
    const team2 = [2, 3, 6]

    // buat ngasih tau card mana yang yang sedang pick
    const statusPick = (turn, player) => {
        if (player.pick[turn] == null) return true
        return false
    }

    if (!hero && !arena) return (<div>... Loading</div>)
    return (
        <section className="flex justify-between mb-8 grow">
            <div className="flex gap-4">
                {
                    team1.map((item, index) => <DraftSelectCard key={index} status={statusPick(index, player)} pick={player.pick[index]} player1={true} order={item} />)
                }
            </div>
            <ArenaMapCard />
            <div className="flex gap-4 flex-row-reverse">
                {
                    team2.map((item, index) => <DraftSelectCard key={index} status={statusPick(index, player2)} pick={player2.pick[index]} player1={false} order={item} />)
                }
            </div>
        </section>
    )
}
export default DraftSelected