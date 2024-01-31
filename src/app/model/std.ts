export interface Istd {
    fname: string;
    lname: string;
    email: string;
    contact: number;
}

export type  Icard ="product" | "Catlog"
 
export interface IproCat{
    pName : string,
    pDescription: string,
    pCatg : Icard
}