export const defaultBucketPersistance = 365 * 24 * 60 * 60;
export const random = () => {
    // From - https://github.com/olahol/react-ab/blob/master/react-ab.js
    try {
        const arr = new Uint16Array(1);
        window.crypto.getRandomValues(arr);
        return arr[0] / 65536;
    } catch(e) {
        return Math.random();
    }
};
export const cookieGet = (name: string) => {};
export const cookieSet = (name: string, value: any, seconds: number = defaultBucketPersistance) => {};
export const localStorageGet = (name: string) => {};
export const localStorageSet = (name: string, value: any, seconds: number = defaultBucketPersistance) => {};

export const getBucket = (name: string) => {};
export const setBucket = (name: string, value: any, seconds: number = defaultBucketPersistance) => {};
export const chooseVariation = (randomFunc: CallableFunction = random) => {
    let rnd = randomFunc();
};

export interface Experiment {
    name: string;
    variations: Variation[];
}
export interface Variation {
    name: string;
}
