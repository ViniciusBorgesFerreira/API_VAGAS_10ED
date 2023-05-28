import { Profile } from "../../../../shared/domain/enums";

export interface LoginDto{
    email: string;
    password: string;
}

export interface LoginDetailDTO {
    id: string;
    name: string;
    email: string;
    profile: Profile;
    token: string;
}