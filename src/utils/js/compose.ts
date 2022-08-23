export function compose<U>(...fns: Function[]){
    return <E,>(initialValue: any): U =>
        fns.reduceRight((prevValue, fn) => fn(prevValue), initialValue)
}
// вызывает снаправо налево