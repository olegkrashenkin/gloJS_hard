'use strict'

const body = document.body

const colorsFirst = {
    first: 'red', second: 'blue', third: 'green'
}

const colorsSecond = {
    first: 'orange', second: 'yellow', third: 'violet'
}

const files = [{
    id: 0, items: [{
        text: 'Lorem ipsum', element: 'p'
    }, {
        text: 'Lorem ipsum', element: 'span'
    }, {
        text: 'Lorem ipsum', element: 'div'
    }, {
        text: 'Lorem ipsum', element: 'strong'
    }, {
        text: 'Lorem ipsum', element: 'p'
    }, {
        text: 'Lorem ipsum', element: 'b'
    }, {
        text: 'Lorem ipsum', element: 'div'
    }, {
        text: 'Lorem ipsum', element: 'strong'
    }]
}, {
    id: 1, items: [{
        text: 'Lorem ipsum', element: 'span'
    }, {
        text: 'Lorem ipsum', element: 'b'
    }, {
        text: 'Lorem ipsum', element: 'div'
    }, {
        text: 'Lorem ipsum', element: 'strong'
    }, {
        text: 'Lorem ipsum', element: 'span'
    }, {
        text: 'Lorem ipsum', element: 'b'
    }, {
        text: 'Lorem ipsum', element: 'span'
    }, {
        text: 'Lorem ipsum', element: 'strong'
    }]
}]


const colorJoy = (el) => {
    switch (true) {
        case el === 'p' || el === 'div' :
            return 'second'
        case el === 'span' :
            return 'first'
        case el === 'strong' || el === 'b' :
            return 'third'
    }
}

const makeTag = (item, flag = true) => {
    let newEl = document.createElement(item.element)
    newEl.textContent = item.text
    flag
        ? newEl.style.color = colorsFirst[colorJoy(item.element)]
        : newEl.style.color = colorsSecond[colorJoy(item.element)]
    body.appendChild(newEl)
}


files.forEach((item, index) => {
    (index + 2) % 2 === 0
        ? files[index].items.forEach((item) => makeTag(item))
        : files[index].items.forEach((item) => makeTag(item, false))
})





