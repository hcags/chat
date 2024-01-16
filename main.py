def on_button_a():
    global alphabetKey
    alphabetKey = alphabetKey - 1
    if alphabetKey < 0:
        alphabetKey = len(alphabet) - 1
    basic.show_string("" + (alphabet[alphabetKey]))
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_ab():
    global funkText
    funkText = "" + funkText + alphabet[alphabetKey]
input.on_button_event(Button.AB, input.button_event_click(), on_button_ab)

def on_button_b():
    global alphabetKey
    alphabetKey = alphabetKey + 1
    if len(alphabet) <= alphabetKey:
        alphabetKey = 0
    basic.show_string("" + (alphabet[alphabetKey]))
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

def on_received_string(receivedString):
    basic.show_string(receivedString)
radio.on_received_string(on_received_string)

def on_pin_touch_p0():
    basic.show_string(funkText)
    basic.show_string("" + (alphabet[alphabetKey]))
input.on_pin_touch_event(TouchPin.P0, input.button_event_down(), on_pin_touch_p0)

def on_pin_touch_p3():
    global alphabetKey, funkText
    radio.send_string(funkText)
    alphabetKey = 0
    basic.show_string("" + (alphabet[alphabetKey]))
    funkText = ""
input.on_pin_touch_event(TouchPin.P3, input.button_event_down(), on_pin_touch_p3)

funkText = ""
alphabetKey = 0
alphabet: List[str] = []
radio.set_group(1)
alphabet = ["A",
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
    " "]
basic.show_string("" + (alphabet[alphabetKey]))