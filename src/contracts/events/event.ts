export enum EventType {
    ISSUE = "issue",
    PULL_REQUEST = "pull_request"
}

export interface IEvent {
    id: string;
}