input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    alphabetKey = alphabetKey - 1
    if (alphabetKey < 0) {
        alphabetKey = alphabet.length - 1
    }
    basic.showString("" + (alphabet[alphabetKey]))
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    funkText = "" + funkText + alphabet[alphabetKey]
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    alphabetKey = alphabetKey + 1
    if (alphabet.length <= alphabetKey) {
        alphabetKey = 0
    }
    basic.showString("" + (alphabet[alphabetKey]))
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    basic.showString(funkText)
    basic.showString("" + (alphabet[alphabetKey]))
})
input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
    radio.sendString(funkText)
    alphabetKey = 0
    basic.showString("" + (alphabet[alphabetKey]))
    funkText = ""
})
let funkText = ""
let alphabetKey = 0
let alphabet: string[] = []
radio.setGroup(1)
alphabet = [
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z",
" "
]
basic.showString("" + (alphabet[alphabetKey]))
