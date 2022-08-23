export function isEqual<T>(left: T){
    return <K extends T>(right: T) => left === right 
}

