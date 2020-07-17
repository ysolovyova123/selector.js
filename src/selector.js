// YOUR CODE HERE
class $ {
    constructor (selector) {
              if (selector[0] === ('.')) {
                this.elements = [...document.getElementsByClassName(selector.slice(1))];
              } else if (selector.startsWith('#')) {
                this.elements = [document.getElementById(selector.slice(1))]; // not a ... because you only get one element back
              } else {
                this.elements = [...document.getElementsByTagName(selector)];
              }
            }

    hide() {
        for (let i=0; i<this.elements.length; i++) {
            let currElem = this.elements[i];
            currElem.style.display = 'none'
        }
        //this.elements.forEach(elem => elem.style.display = 'none')
        //return this;
    }

    show() {
        this.elements.forEach(elem => elem.style.display = "inherit")
        return this;
    }

    addClassName(className) {
        this.elements.forEach(elem => elem.classList.add(className))
    }

    removeClassName(className) {
        this.elements.forEach(elem => elem.classList.remove(className))
    }

    text(textToAdd) {
        this.elements.forEach(elem => elem.innerText = textToAdd)
    }

    addChild(newDOM) {
        this.elements.forEach(elem => elem.appendChild(document.createElement(newDOM)))
    }
}

// class $ {
//     constructor (selector) {
//       if (selector.startsWith('.')) {
//         this.elements = Array.from(document.getElementsByClassName(selector.slice(1)));
//       } else if (selector.startsWith('#')) {
//         this.elements = [document.getElementById(selector.slice(1))];
//       } else {
//         this.elements = Array.from(document.getElementsByTagName(selector));
//       }
//     }
//     hide () {
//       this.elements.forEach(element => {
//         element.style.display = 'none';
//       });
//       return this;
//     }
//     show () {
//       this.elements.forEach(element => {
//         element.style.display = 'inherit';
//       });
//       return this;
//     }
//     addClassName (classToAdd) {
//       this.elements.forEach(element => {
//         element.classList.add(classToAdd);
//       });
//       return this;
//     }
//     removeClassName (classToRemove) {
//       this.elements.forEach(element => {
//         element.classList.remove(classToRemove);
//       });
//       return this;
//     }
//     text (newText) {
//       this.elements.forEach(element => {
//         element.innerText = newText;
//       });
//       return this;
//     }
//     addChild (elementType) {
//       this.elements.forEach(element => {
//         const childToAdd = document.createElement(elementType);
//         element.appendChild(childToAdd);
//       });
//       return this;
//     }
//   }