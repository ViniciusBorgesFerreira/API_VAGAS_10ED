import { Profile } from "../../../../shared/domain/enums";

export interface CreateUserDTO {
    name: string;
    email: string;
    profile: Profile;
    password: string;
    company?: string;  
    
}

