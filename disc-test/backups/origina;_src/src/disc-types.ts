export interface Question {
    id: number;
    text: string;
    options: string[];
}

export interface Response {
questionId: number;
option: string;
}

export interface Result {
category: string;
score: number;
description: string;
}