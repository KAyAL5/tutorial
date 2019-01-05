//module constant {
    export enum envEnum {
        develop = 1,
        uat,
        production
    }

    export type environment = {
        flag: envEnum
    }

    export type UserType = "Admin" | "Teacher" | "Student" | "Internal" | "External";
//}