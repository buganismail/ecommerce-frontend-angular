export interface CommentInterface {
    id: string;
    body: string;
    username: string;
    parentId: string| null;
    createdAt: string;
}