player.onChat("com2", function () {
    mobs.spawn(SHEEP, player.position())
    player.execute(
    "/tell num2 super"
    )
    player.say(":)")
})
