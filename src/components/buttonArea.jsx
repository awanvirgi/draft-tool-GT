'use client'
import { useHeroProvider } from "@/context/hero-provider"
import { useEffect, useState, useRef } from "react"

const ButtonArea = () => {
    const { reset, undo, count } = useHeroProvider()
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

    //jika cpunt berubah maka timer ke reset
    useEffect(() => {
        setTimer(20)
    }, [count]) 

    const lastSecond = ()=>{
        if(timer <= 5 && timer > 0) return "animate-ping text-red-500"
    }

    return (
        <div className="flex gap-2 items-end">
            {/* tombol untuk reset dan undo */}
            <button onClick={() => reset()} className="p-4 text-sm h-min bg-black text-white rounded-md">Reset</button>
            <div className="py-4 px-10 bg-white rounded-md h-min text-xl font-bold">
                <div className={lastSecond()}>
                    {timer}
                </div>
            </div>
            <button onClick={() => undo()} className="p-4 text-sm h-min bg-black text-white rounded-md">Undo</button>
        </div>
    )
}
export default ButtonArea
