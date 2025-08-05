// types/express/index.d.ts

declare namespace Express {
    export interface Request {
        user?: {
            id: number;
            username: string;
            email: string;
        };
    }
}
