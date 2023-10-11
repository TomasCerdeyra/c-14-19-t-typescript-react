export interface UserRegisterTypes {
    name: string;
    lastname: string;
    email: string;
    birthday: string;
    dni: string
    cellphone: string;
};

export interface ValidationErrors {
    name?: string;
    lastname?: string;
    email?: string;
    birthday?: string;
    dni?: string
    cellphone?: string;
}