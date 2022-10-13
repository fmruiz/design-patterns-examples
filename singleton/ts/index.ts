/*
 * Singleton example with typescript
 */
class SingletonWithTS {
    private static instance: SingletonWithTS;
    public random: number;

    private constructor() {
        this.random = Math.random();
    }

    public static getInstance(): SingletonWithTS {
        if (!this.instance) {
            this.instance = new SingletonWithTS();
        }

        return this.instance;
    }
}

const singletonWithTS = SingletonWithTS.getInstance();
/*
 * We can use this pattern when the data from object will never change
 */
