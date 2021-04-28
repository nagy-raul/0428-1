input.onButtonPressed(Button.A, function () {
    if (fel == true) {
        basic.showArrow(ArrowNames.North)
        fel = false
    } else if (fel == false) {
        basic.showArrow(ArrowNames.South)
        fel = true
    }
})
let fel = false
fel = true
