export interface JobDetailDTO{
    id:string;
    description:string;
    limitDate: Date;
    maxCandidates?: number;
    open: boolean;
    companyName: string;
}