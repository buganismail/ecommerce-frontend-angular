import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {CommentInterface} from "../model/comment.interface";

@Injectable()
export class CommentsService {

    constructor(private httpClient: HttpClient) {
    }

    getComments(): Observable<CommentInterface[]> {
        return this.httpClient.get<CommentInterface[]>(
            'http://localhost:3000/comments');
    }
}