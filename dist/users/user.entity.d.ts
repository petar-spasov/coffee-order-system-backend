export declare class User {
    id: number;
    name: string;
    lastName: string;
    email: string;
    password: string;
    hashPassword(): Promise<void>;
}
