player.onChat("com2", function () {
    mobs.spawn(SHEEP, player.position())
    player.execute(
    "/execute num2 ~ ~ ~ tell @s super"
    )
    player.say(":)")
})
