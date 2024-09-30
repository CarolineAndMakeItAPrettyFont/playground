controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    current = oldest + old
    game.splash(current)
    oldest = old
    old = current
})
let current = 0
let oldest = 0
let old = 0
game.splash("Press A on the gamepad (Z on the keyboard) to see the next number of the Fibonacci sequence.")
old = 1
oldest = 1
