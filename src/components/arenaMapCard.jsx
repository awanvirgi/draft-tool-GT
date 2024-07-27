`use client`
import { useHeroProvider } from "@/context/hero-provider";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from "@fortawesome/free-solid-svg-icons";

const ArenaMapCard = () => {
    const { arena } = useHeroProvider()
    const [arenaMap, setArenaMap] = useState()
    const [arenaName, setArenaName] = useState()
    const [nameScore1, setNameScore1] = useState({
        name: "Player",
        score: 0
    })
    const [nameScore2, setNameScore2] = useState({
        name: "Player",
        score: 0
    })

    useEffect(() => {
        shuffleArena()
    }, [arena])

    // untuk mengambil nilai peta acak yang sudah tersimpan pada context arena
    const shuffleArena = () => {
        let random = ~~(Math.random() * arena.length)
        let data = arena.filter((item) => item.id === random) // mengambil id object yang sama dengan hasil random
        setArenaMap(data[0]?.imageMap)
        setArenaName(data[0]?.name)
    }
    if (!arena && !arenaMap) return (<div>... Loading</div>)
    return (
        <div className="h-full w-max grow mx-6 flex flex-col ">
            <div className="bg-red-400 h-44 relative">
                <div onClick={() => shuffleArena()} className="h-full w-full absolute bg-black opacity-0 hover:opacity-55 z-10 text-white flex justify-center items-center text-xl cursor-pointer">
                    <FontAwesomeIcon icon={faRefresh} size="3x" />
                </div>
                {
                    !arenaMap ? <div className="h-full w-full flex justify-center items-center">Loading...</div> : (<Image src={arenaMap} width={400} height={400} alt={arenaName} className="w-full h-full object-cover" />)
                }
            </div>
            <div className="text-xl bg-white font-semibold text-center p-2">{arenaName ? arenaName : "Loading"}</div>
            {/* bagian untuk nama pemain harusnya dipisah cmn saya malas */}
            <div className="flex font-bold text-2xl grow py-2 flex-col justify-between relative">
                <div className="absolute text-white top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 flex justify-center">
                    <input type="number" name="score" onChange={(target) => setNameScore1({
                        name: nameScore1.name,
                        score: target.currentTarget.value
                    })} value={nameScore1.score} className="bg-transparent w-10 p-0 m-0 text-blue-700 outline-none" />
                    :
                    <input type="number" name="score" onChange={(target) => setNameScore2({
                        name: nameScore2.name,
                        score: target.currentTarget.value
                    })} value={nameScore2.score} className="bg-transparent text-end w-14 p-0 m-0 text-red-700 outline-none" />
                </div>
                <div className="flex justify-between">
                    <input type="text" name="name1" onChange={(target) => setNameScore1({
                        name: target.currentTarget.value,
                        score: nameScore1.score
                    })
                    } value={nameScore1.name} className="h-min grow self-start bg-transparent text-blue-700 outline-none" />

                </div>
                <div className="flex justify-between">
                    <input type="text" name="name2" onChange={(target) => setNameScore2({
                        name: target.currentTarget.value,
                        score: nameScore2.score
                    })
                    } value={nameScore2.name} className="h-min grow self-end text-end bg-transparent text-red-700 outline-none" />

                </div>
            </div>
        </div>
    )
}
export default ArenaMapCard