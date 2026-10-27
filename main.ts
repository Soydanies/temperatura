serial.redirectToUSB()
basic.forever(function () {
    serial.writeValue("Temperatura= ", input.temperature())
    basic.pause(500)
})
