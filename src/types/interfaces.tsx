export interface iButton {
    buttonTitle: string;
    bg: string;
    c: string;
    onClick: ()=> void

}

export interface iCard {
    title: string;
    ButtonTitle: string;
    onClick: ()=> void
    sign: boolean;
    request: boolean

    text: string;
    route: string;
}   
    


export interface iInput {
    inputTitle: string;
    inputTitle1: string;
    inputTitle2: string;
    request: boolean;
    sign: boolean;

    
}