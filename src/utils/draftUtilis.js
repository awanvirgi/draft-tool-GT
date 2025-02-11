export const alreadyPickDraft = (value, { player, player2 }) => {
    if (player.ban.includes(value) || player.pick.includes(value) || player2.ban.includes(value) || player2.pick.includes(value)) {
        return true
    }
    return false
}