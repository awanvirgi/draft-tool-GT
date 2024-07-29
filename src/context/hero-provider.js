'use client'
import { createContext, useContext, useEffect, useState } from "react";

const HeroContext = createContext(undefined);

const HeroProvider = ({ children }) => {
    const [hero, setHero] = useState([]);
    const [arena,setArena] = useState([])
    const [count, setCount] = useState(1);
    const [ban, setBan] = useState(true);
    const [maxBan, setMaxBan] = useState(2) // ini buat masa depan nanti jika bisa diatur jumlah ban nya
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
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_HERO_BASE_URL}/characterData`);
            const data = await response.json();
            setHero(data);
        } catch (error) {
            console.error("Error Fetching Data", error);
        }
    };
    
    const fetchDataArena = async () =>{
        try{
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_HERO_BASE_URL}/arena_map`)
            const data = await response.json();
            setArena(data)
        }catch{
            console.error("Error Fetching Data")
        }
    }
    useEffect(() => {
        fetchDataHero();
        fetchDataArena();
    }, []);

    //buat atur alurnya draft dan data ban & pick nya
    const handleDraft = (value) => {
        if (ban) {
            if (count % 2 == 1) {
                setPlayer({
                    ban: [...player.ban, value],
                    pick: [...player.pick]
                })
            } else
                setPlayer2({
                    ban: [...player2.ban, value],
                    pick: [...player2.pick]
                })
                // ini buat cek buat masttin kalau sudah sselesai ban nya maka lanjut ke section pick
            setCount(prevCount => {
                const newCount = prevCount + 1;
                if (newCount > maxBan * 2) {
                    setBan(false);
                    return 1;
                }
                return newCount;
            });
        } else {
            if ([1, 4, 5].includes(count)) {
                setPlayer({
                    ban: [...player.ban],
                    pick: [...player.pick, value]
                })
            } else {
                setPlayer2({
                    ban: [...player2.ban],
                    pick: [...player2.pick, value]
                })
            }

            setCount(prevCount => {
                if (prevCount < 7) {
                    return prevCount + 1;
                }
                return prevCount;
            });
        }
    };
    //ini buat ngeck pada masing2 card buat ngasih tau kalau card itu udah ada gambar yang dipick & ban atau blom
    const alreadyPick = (value) => {
        if (player.ban.includes(value) || player.pick.includes(value) || player2.ban.includes(value) || player2.pick.includes(value)) {
            return true
        }
        return false
    }
    //buat mundur 1 langkah pada draft pick
    const undo = () => {
        if (ban) {
            if (count % 2 == 0) {
                player.ban.pop()
            } else {
                player2.ban.pop()
            }
            setCount(prevCount => {
                if (prevCount > 0) {
                    return prevCount - 1
                }
            })
        } else {
            if (count > 1) {
                setCount(prevCount => {
                    if (prevCount > 0 && !ban) {
                        return prevCount - 1
                    }
                })
                if ([2, 5, 6].includes(count)) {
                    player.pick.pop()
                }
                else if ([3, 4, 7].includes(count)) {
                    player2.pick.pop()
                }
            }
            else {
                setBan(true)
                setCount(4)
                player2.ban.pop()
            }
        }

    }
    //mengulang semuanya
    const reset = () => {
        setPlayer({
            ban: [],
            pick: []
        })
        setPlayer2({
            ban: [],
            pick: []
        })
        setCount(1)
        setBan(true)
    }
    return (
        <HeroContext.Provider value={{ hero, setHero, handleDraft, alreadyPick, player, player2, ban, count, maxBan, reset, undo ,arena}}>
            {children}
        </HeroContext.Provider>
    );
};

export default HeroProvider;
export function useHeroProvider() {
    return useContext(HeroContext)
}


