'use client'
import { useHeroProvider } from "@/context/hero-provider"
import { useEffect, useState, useRef } from "react"

const ButtonArea = () => {
    const { hero, reset, undo, count } = useHeroProvider()
    const [timer, setTimer] = useState(20)
    const intervalRef = useRef(null)

    //ini untuk itung mundur
    useEffect(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
        }
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer <= 0) {
                    clearInterval(intervalRef.current)
                    return 0
                }
                return prevTimer - 1
            })
        }, 1000)

        return () => clearInterval(intervalRef.current)
    }, [timer]) /

        //jika count berubah maka timer ke reset
        useEffect(() => {
            setTimer(20)
        }, [count])
    const lastSecond = () => {
        if (count > 7 && timer <= 5 && timer > 0) return "animate-ping text-red-500"
    }
    if (hero.length == 0) return (<div></div>)

    return (
        <div className="flex gap-2 items-end">
            {/* tombol untuk reset dan undo */}
            <button onClick={() => reset()} className="p-4 text-sm h-min bg-black text-white rounded-md">Reset</button>
            <div className="py-4 px-10 bg-white rounded-md h-min text-xl font-bold">
                <div className={lastSecond()}>
                    {count < 7?timer:"End"}
                </div>
            </div>
            <button onClick={() => undo()} className="p-4 text-sm h-min bg-black text-white rounded-md">Undo</button>
        </div>
    )
}
export default ButtonArea
