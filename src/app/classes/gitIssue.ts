export class GitIssue {
    number: number;
    state: string;
    title: string;
    comments: number;

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}

