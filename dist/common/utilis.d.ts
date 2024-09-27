export declare function generateHash(password: string): string;
export declare function validateHash(password: string | undefined, hash: string | undefined | null): Promise<boolean>;
