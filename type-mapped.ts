interface User {
    name: string;
    age: number;
}

type PartialUser = {
    [Key in keyof User]?: User[Key];
}

const partialUser: PartialUser = {}; // Ok
partialUser.name = "John"; // Ok
partialUser.age = 30; // Ok