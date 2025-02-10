'use client'
import { useHeroProvider } from "@/context/hero-provider"
import { useEffect, useState, useRef } from "react"

const ButtonArea = () => {
    const { hero, reset, undo, count, timer, setTimer } = useHeroProvider()
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

    if (hero.length == 0) return (<div></div>)

    return (
        <div className="flex lg:gap-2 lg:flex-grow-0 flex-grow items-end justify-center relative">
            {/* tombol untuk reset dan undo */}
            <button onClick={() => reset()} className="lg:p-4  text-sm lg:h-min py-2 flex-grow bg-black text-white rounded-md">Reset</button>
            <div className="lg:py-4 lg:px-10 py-2 px-4 relative bg-white rounded-md h-min lg:text-xl font-bold">
                <div className={`${count < 7 && timer <= 1/4*20 && timer > 0 ? "animate-ping duration-[1s] text-red-500" : ""}`}>
                    {count < 7 ? timer : "End"}
                </div>
            </div>
            <button onClick={() => undo()} className="lg:p-4  text-sm lg:h-min py-2 flex-grow bg-black text-white rounded-md">Undo</button>
        </div>
    )
}
export default ButtonArea
