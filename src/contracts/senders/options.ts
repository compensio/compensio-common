export enum RestMethod {
    GET,
    POST,
    PUT,
    DELETE
}

export interface IRestOptions {
    url: string;
    headers: {[id: string]: string};
    method: RestMethod;
}