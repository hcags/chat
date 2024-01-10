input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
	
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
	
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
	
})
radio.onReceivedString(function (receivedString) {
	
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
	
})
input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
	
})
let alphabetKey = 0
radio.setGroup(1)
let alphabet = [
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
