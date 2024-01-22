import { stack } from 'src/models/teams.model';
export declare class CreateTeamDto {
    name: string;
    role: string;
    imgUrl: string;
    upwork: string;
    linkedin: string;
    contra: string;
    about: string;
    stacks: stack[];
    status: string;
}
