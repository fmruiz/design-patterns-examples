/*
 * Strategy example with typescript
 */
interface Strategy {
    login(user: string, password: string): boolean;
}

class LoginContext {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    login(user: string, password: string): boolean {
        return this.strategy.login(user, password);
    }
}

class LoginDBStrategy implements Strategy {
    login(user: string, password: string): boolean {
        if (user === 'user' && password === '123') {
            return true;
        }
        return false;
    }
}

const auth = new LoginContext(new LoginDBStrategy());
const resAuth = auth.login('user', '123');
/*
 * We can use this pattern to scale functionalities
 */
