player.onChat("com2", function () {
    mobs.spawn(SHEEP, player.position())
    player.tell(mobs.target(ALL_PLAYERS), "[name=num2] super")
    player.say(":)")
})
