
export interface LinkProps {
    title: string,
   
    link:string,

}

export interface LinkFooterProps {
    title: string,
    text?: string,
    textColor?: string,
    backGroudColor?: string,
    links:LinkProps[],

}
