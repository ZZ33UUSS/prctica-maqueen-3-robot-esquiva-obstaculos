let Distancia = 0
let Velocidad = 255
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Velocidad)
    basic.showArrow(ArrowNames.North)
    Distancia = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (Distancia < 10) {
        basic.showIcon(IconNames.Chessboard)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Velocidad)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, Velocidad)
        basic.pause(500)
    }
})
