export interface project{
    name: string;
        type: string;
        logo: string;
        platforms: string[];
        id:string
        desc:string,
        other?: {name: string,value:string | string[]}[]
        links?: {name: string, icon:string, url:string}[]
        images?: {label:string, img:string}[]
}
export interface projects{
    [type: string]: project[];
}