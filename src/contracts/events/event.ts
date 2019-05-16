import { IssueAction } from "./issue";
import { PullRequestAction } from "./pullRequest";

export enum EventType {
    ISSUE = "issue",
    PULL_REQUEST = "pull_request"
}

export interface IEvent {
    eventType: EventType;
    eventAction: IssueAction|PullRequestAction;
    payload: any;
}