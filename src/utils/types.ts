type Override<T, U> = {
    [P in keyof T]: P extends keyof U ? U[P] : T[P];
};