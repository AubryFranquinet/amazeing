const LEVEL_1 = [
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", ".", "*"],
    ["*", "S", ".", ".", ".", ".", ".", "*", "*", ".", "*", ".", "T"],
    ["*", "*", "*", "*", "*", ".", ".", ".", ".", ".", "*", ".", "*"],
    ["*", "*", "*", "*", "*", ".", "*", "*", "*", ".", "*", ".", "*"],
    ["*", "*", "*", "*", "*", ".", "*", "*", "*", "*", "*", ".", "*"],
    ["*", "*", "*", "*", "*", ".", "*", "*", "*", "*", "*", ".", "*"],
    ["*", "*", "*", "*", "*", ".", ".", ".", ".", ".", ".", ".", "*"],
    ["*", "*", "*", "*", "*", ".", "*", "*", "*", "*", "*", "*", "*"],
    ["*", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*", "*", "*"],
    ["*", ".", "*", "*", "*", "*", "*", "*", ".", ".", ".", "*", "*"],
    ["*", ".", ".", ".", ".", "*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]
]

const LEVEL_2 = [
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", ".", ".", "S", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", ".", "*"],
    ["*", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*"],
    ["*", ".", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "T"],
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]
]

const LEVEL_3 = [
    ["*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "S", "*", "*", "*"],
    ["*", "*", "*", "*", ".", "*", "*", "*"],
    ["*", "*", "*", "*", ".", "*", "*", "*"],
    ["*", "*", "*", "*", ".", "*", "*", "*"],
    ["*", ".", ".", ".", ".", ".", ".", "*"],
    ["*", ".", "*", "*", "*", "*", ".", "*"],
    ["*", ".", ".", "*", "*", "*", ".", "*"],
    ["*", ".", ".", "*", "*", "*", ".", "*"],
    ["*", "*", ".", "*", "*", "*", "*", "*"],
    ["*", "T", ".", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*"]
]

let Maindiv = document.createElement('div')
Maindiv.setAttribute('class', 'parent')
let main = document.querySelector('main')
main.appendChild(Maindiv)


let positionX = 0
let positionY = 0

let i = positionX
let j = positionY


for (const row of LEVEL_1) {
    let rowElement = document.createElement('div')
    rowElement.setAttribute('class', 'row')
    Maindiv.appendChild(rowElement)
    i++
    for (const elem of row) {
        if (elem == '*') {
            let wall = document.createElement('div')
            wall.setAttribute('class', 'wall')
            rowElement.appendChild(wall)
        }
        else if (elem == '.') {
            let path = document.createElement('div')
            path.setAttribute('class', 'path')
            rowElement.appendChild(path)
        }
        else if (elem == 'S') {
            let start = document.createElement('div')
            start.setAttribute('class', 'start')
            rowElement.appendChild(start)
        }
        else if (elem == 'S') {
            let start = document.createElement('div')
            start.setAttribute('class', 'start')
            rowElement.appendChild(start)
        }
        else if (elem == 'T') {
            let treasure = document.createElement('div')
            treasure.setAttribute('class', 'treasure')
            rowElement.appendChild(treasure)
        }
        j++
    }
}

console.log(i + ' ' + j)

// Add event listener on keypress
document.addEventListener("keydown", function (e) {

    //Move right
    if (e.code == 'ArrowRight') {


        positionX++
        console.log(positionX,positionY)



    }
    if (e.code == 'ArrowLeft') {

        positionX--
        console.log(positionX, positionY)
    }
    if (e.code == 'ArrowUp') {

        positionY--
        console.log(positionX, positionY)
    }
    if (e.code == 'ArrowDown') {

        positionY++
        console.log(positionX, positionY)
    }


});



