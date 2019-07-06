export declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export declare function createDeferred<ReturnType = any>(): {
    promise: Promise<ReturnType>;
    resolve: (data?: ReturnType) => void;
    reject: (error: any) => void;
};
