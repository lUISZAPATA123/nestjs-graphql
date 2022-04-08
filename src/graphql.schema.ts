
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreatUserInput {
    id: string;
    displayName: string;
    email: string;
    password: string;
}

export class User {
    id: string;
    displayName: string;
    email: string;
    password: string;
}

export abstract class IQuery {
    abstract users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
}

export abstract class IMutation {
    abstract registerUser(createUserInput: CreatUserInput): User | Promise<User>;
}

type Nullable<T> = T | null;
