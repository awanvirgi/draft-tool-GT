export const handleDraftLogic = (value,{ban,setBan,player,setPlayer,player2,setPlayer2,count,setCount,maxBan}) => {
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

//buat mundur 1 langkah pada draft pick
export const undoDraft = ({ count, setCount, ban, setBan, player, player2 }) => {
    if (count != 1) {
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


}
//mengulang semuanya
export const resetDraft = ({ setPlayer, setPlayer2, setCount, setBan }) => {
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