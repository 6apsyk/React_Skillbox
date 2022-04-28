//1
type TypeFunc = (a: string, b: string) => string

const cancat: TypeFunc = (q, w) => q+' '+w

//2
const MyHometask: IHometask = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

interface IWithData {
    howIDoIt: string,
    simeArray: Array<number | string>
}
interface IHometask {
    howIDoIt : string,
    simeArray: Array<number | string>, 
    withData: Array<IWithData>
}

//3
interface MyArray<T> {
    [N: number]: T;
    reduce<U>( fn :(accumulator: U, value: T) => U, initialState?: U) : U;
}

const myArr : MyArray<number> = [1,2,3]

myArr.reduce<number>((accumulator, value) => accumulator + value)

//4
interface IHomeTask {
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}
const homeTask: MyPartial<IHomeTask> = {
    externalData: {
        value: 'win',
    }
}
type MyPartial<T> = {
    [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}