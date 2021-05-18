a = ['Every great accomplishment in life is traceable to certain nuggets that make things work. It is the application of these nuggets that determine one’s success in life.',
    "Unrestrained behaviour leads eventually to destruction. People who have no vision also have no goal or purpose-nothing to shoot for. They have no direction and nowhere to go in life and, therefore they go nowhere.",
    'Each one of us creates an atmosphere, a reality around us, but we can only. reproduce on the outside that which is on the inside!',
    ' Successful people know that true education is what you get for yourself and by yourself, it’s not what someone gives or tells you, they know that true success in life does not come by luck, a lucky man is not a successful man, true winners know that they must develop skills and acquire knowledge before becoming truly successful.'
]

let index = Math.floor(Math.random() * a.length)
console.log(a[index])
document.getElementById('textdis').innerHTML = a[index]
let x = 0

function damn() {

    b = document.getElementById('textinput').value
    if (isright(b)) {
        document.getElementById('textinput').style.borderColor = 'red'
    } else {
        document.getElementById('textinput').style.borderColor = 'blue'
    }
    if ((b.length == a[index].length) && (!isright(b))) {
        alert("you win")
        return 0;
    }
    if ((b.length > 0) || (x == 1)) {
        x = 1
        began()
    }
    setTimeout('damn()', 100)

}

function isright(b) {
    c = Array.from(a[index])
    for (let i = 0; i < b.length; i++) {
        if (c[i] != b[i]) {
            console.log(c[i], b[i])
            return true
        }
    }
}

let t_imea = 0

function began() {
    t_imea++
    t_ime = parseInt(t_imea * 10, 10)
    let sec = ''
    let hour = ''
    let min = ''
    t_ime / 3600 < 10 ? hour = '0' : hour = '';
    t_ime / 60 < 10 ? min = '0' : min = '';
    t_ime < 10 ? sec = '0' : sec = '';
    document.getElementById('counter').innerHTML = hour + parseInt(t_ime / 6000, 10) + ' : ' + min + parseInt(t_ime / 100 % 60, 10) + ' : ' + sec + parseInt(t_ime % 100, 10)
}
damn()

function redo() {
    t_imea = 0
    document.getElementById('counter').innerHTML = '00 : 00 : 00'
    index = Math.floor(Math.random() * a.length)
    console.log(a[index])
    document.getElementById('textdis').innerHTML = a[index]
    document.getElementById('textinput').value = null
    x = 0
    damn()
}