// YOUR CODE HERE
class $ {
    constructor (cssStr) {
        let elementArray = [];
    if (cssStr[0]==='.') {
        elementArray = [...document.getElementsByClassName(cssStr)]
    }

    if (cssStr[0]==='#') {
        elementArray = [...document.getElementById(cssStr)]
    }

    else {
        elementArray = [...document.getElementsByTagName(cssStr)]
    }
    return elementArray;
    }
    
}

// document.getElementById()
//document.getElementsByClassName('col-12')
//document.getElementsByTagName('p')