/*
 * Singleton example with javascript
 */
class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }

        Singleton.instance = this;
    }
}

const singleton = new Singleton();
/*
 * We can use this pattern when the data from object will never change
 */

/*
 * Below we can see an example of this design pattern
 */
class GamingComponents {
    componentsEs = ['Teclado', 'Raton', 'Monitor'];

    componentsEn = ['Keyboard', 'Mouse', 'Monitor'];

    constructor(lang) {
        this.lang = lang;
        if (GamingComponents.instance) {
            return GamingComponents.instance;
        }

        GamingComponents.instance = this;
    }

    getComponents() {
        return this.lang === 'en' ? this.componentsEn : this.componentsEs;
    }
}

const gamingComponents = new GamingComponents('en');
const gamingComponentsCopy = new GamingComponents();
console.log(gamingComponents.getComponents());
console.log(gamingComponentsCopy.getComponents());
