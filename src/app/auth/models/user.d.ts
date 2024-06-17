export interface IUser {
    id: UUID;
    name: string;
    email: Email;
    password: string;
}
type UUID = `${string}-${string}-${string}-${string}`;
type Email = `${string}@${string}.${string}`;