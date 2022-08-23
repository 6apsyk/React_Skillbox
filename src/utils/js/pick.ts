//забирает из объекта свойство
export function pick<K extends string>(key: K){
    return <O extends Record<K, any>>(obj: O) => obj[key]
}