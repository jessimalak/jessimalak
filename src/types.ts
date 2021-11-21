export interface project{
    name: string;
        type: string;
        logo: string;
        platforms: string[];
        id:string
}
export interface projects{
    [type: string]: project[];
}