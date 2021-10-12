let game_started = false
basic.forever(function on_forever() {
    
    game_started = false
    basic.pause(randint(1000, 5000))
    game_started = true
    basic.showIcon(IconNames.Angry)
    while (game_started) {
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showString("A")
            game_started = false
        } else if (input.pinIsPressed(TouchPin.P2)) {
            basic.showString("B")
            game_started = false
        }
        
    }
    basic.pause(3000)
    basic.clearScreen()
})
