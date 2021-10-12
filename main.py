game_started = False

def on_forever():
    global game_started
    game_started = False
    basic.pause(randint(1000, 5000))
    game_started = True
    basic.show_icon(IconNames.ANGRY)
    while game_started:
        if input.pin_is_pressed(TouchPin.P1):
            basic.show_string("A")
            game_started = False
        else:
            if input.pin_is_pressed(TouchPin.P2):
                basic.show_string("B")
                game_started = False
    basic.pause(3000)
    basic.clear_screen()
basic.forever(on_forever)
