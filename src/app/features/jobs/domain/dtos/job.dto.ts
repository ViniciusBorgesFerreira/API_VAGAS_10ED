

export interface CreateJobDTO {
    description: string;
    limitDate: Date;
    maxCandidates?: number;
}

export interface CreateFullJobDTO extends CreateJobDTO {
    idRecruiter: string;
    open: boolean;
    companyName: string;
}