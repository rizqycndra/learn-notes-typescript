type HasString = string;
type HasNumber = number;

type GetType<T> = T extends HasString ? string : T extends HasNumber ? number : boolean;

function getTypeValue<T>(value: T): GetType<T> {
    if (typeof value === "string") {
        return "string" as GetType<T>;
    } else if (typeof value === "number") {
        return 100 as GetType<T>;
    } else {
        return false as GetType<T>;
    }
}

const stringValue: string = getTypeValue("Hello"); // stringValue memiliki tipe string
const numberValue: number = getTypeValue(123); // numberValue memiliki tipe number
const booleanValue: boolean = getTypeValue(true); // booleanValue memiliki tipe boolean