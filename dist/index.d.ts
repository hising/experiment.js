export declare const defaultBucketPersistance: number;
export declare const random: () => number;
export declare const cookieGet: (name: string) => void;
export declare const cookieSet: (name: string, value: any, seconds?: number) => void;
export declare const localStorageGet: (name: string) => void;
export declare const localStorageSet: (name: string, value: any, seconds?: number) => void;
export declare const getBucket: (name: string) => void;
export declare const setBucket: (name: string, value: any, seconds?: number) => void;
export declare const chooseVariation: (randomFunc?: CallableFunction) => void;
export interface Experiment {
    name: string;
    variations: Variation[];
}
export interface Variation {
    name: string;
}
