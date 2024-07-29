import { useState } from "react"

const NameScoreCard = () => {
    // untuk menyimpan nama dan score
    const [nameScore1, setNameScore1] = useState({
        name: "Player",
        score: 0
    })
    const [nameScore2, setNameScore2] = useState({
        name: "Player",
        score: 0
    })
    return (
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
    )
}
export default NameScoreCard