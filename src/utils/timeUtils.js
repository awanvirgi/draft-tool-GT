export const zeroTimer = (hero, player, player2, handleDraft) => { //saat timer 0 maka akan mengambil akan random
    let random;
    let allPickBan = [...player.pick, ...player.ban, ...player2.pick, ...player2.ban]
    do {
        random = ~~(Math.random() * hero.length)
    } while (allPickBan.includes(random))
    if (timer == 0) {
        handleDraft(random)
    }
}