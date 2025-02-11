'use client'
import { fetchCharData } from "@/api/api";
import { handleDraftLogic, resetDraft, undoDraft } from "@/utils/draftLogic";
import { alreadyPickDraft } from "@/utils/draftUtilis";
import { createContext, useContext, useEffect, useState } from "react";

const HeroContext = createContext(undefined);

const HeroProvider = ({ children }) => {
    const [hero, setHero] = useState([]);
    const [arena, setArena] = useState([])
    const [count, setCount] = useState(1);
    const [ban, setBan] = useState(true);
    const [maxBan, setMaxBan] = useState(2) // ini buat masa depan nanti jika bisa diatur jumlah ban nya
    const [timer, setTimer] = useState(20) // ini nanti harusnya bisa diset jumlah waktunya
    const [player, setPlayer] = useState({
        ban: [],
        pick: []
    });
    const [player2, setPlayer2] = useState({
        ban: [],
        pick: []
    });

    //ngefetch data dari mockAPI yang nantinya disimpan dalam state
    const fetchDataHero = async () => {
        try {
            // const response = await fetch(`${process.env.NEXT_PUBLIC_API_HERO_BASE_URL}/characterData`);
            // const data = await response.json();
            // setHero(data);
            const response = await fetchCharData();
            setHero(response);
        } catch (error) {
            console.error("Error Fetching Data", error);
        }
    };

    const fetchDataArena = async () => { // ngambil data arena yang kemungkinan bakal jadiin lokal aj
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_HERO_BASE_URL}/arena_map`)
            const data = await response.json();
            setArena(data)
        } catch {
            console.error("Error Fetching Data")
        }
    }
    useEffect(() => {
        fetchDataHero();
        fetchDataArena();
    }, []);


    const zeroTimer = () => { //saat timer 0 maka akan mengambil akan random
        let random;
        let allPickBan = [...player.pick, ...player.ban, ...player2.pick, ...player2.ban]
        do {
            random = ~~(Math.random() * hero.length)
        } while (allPickBan.includes(random))
        if (timer == 0) {
            handleDraft(random)
        }
    }
    useEffect(() => {
        if (timer == 0) {
            zeroTimer() // saat timer 0 jalankan fungsi
        }
    }, [timer])

    //buat atur alurnya draft dan data ban & pick nya
    const handleDraft = (value) => handleDraftLogic(value,{ban,setBan,player,setPlayer,player2,setPlayer2,count,setCount,maxBan})
    //ini buat ngeck pada masing2 card buat ngasih tau kalau card itu udah ada gambar yang dipick & ban atau blom
    const alreadyPick = (value) => alreadyPickDraft(value,{player,player2})
    //buat mundur 1 langkah pada draft pick
    const undo = () => undoDraft({ count, setCount, ban, setBan, player, player2 })
    //mengulang semuanya
    const reset = () => resetDraft({ setPlayer, setPlayer2, setCount, setBan })

    return (
        <HeroContext.Provider value={{ hero, setHero, handleDraft, alreadyPick, player, player2, ban, count, maxBan, reset, undo, arena, timer, setTimer }}>
            {children}
        </HeroContext.Provider>
    );
};

export default HeroProvider;
export function useHeroProvider() {
    return useContext(HeroContext)
}


