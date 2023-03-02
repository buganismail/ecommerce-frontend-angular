import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {CommentInterface} from "../model/comment.interface";
import {Product} from "../../demo/api/product";
import {environment} from "../../../environments/environment";
import {Comment} from "../../demo/api/comment";
import {Basket} from "../../demo/api/basket";

@Injectable({
    providedIn: 'root'
})
export class CommentsService {
    // private apiServerUrl = environment.apiBaseUrl;
    //
    // constructor(private httpClient: HttpClient) {
    // }
    //
    // public getComments(): Observable<Comment[]> {
    //     return this.httpClient.get<Comment[]>(`${this.apiServerUrl}/comment/all`);
    // }
    //
    // public addComment(comment: Product) {
    //     this.httpClient.post<Comment>(`${this.apiServerUrl}/comment/add`, comment).subscribe((data) => {
    //         console.log("comments.service.ts / addComments / Data", data);
    //     })
    // }
    //
    // public updateComment(comment: Comment): Observable<Comment> {
    //     return this.httpClient.put<Comment>(`${this.apiServerUrl}/comment/update`, comment);
    // }
    //
    // public deleteComment(commentId: number): Observable<Comment> {
    //     return this.httpClient.delete<Comment>(`${this.apiServerUrl}/comment/delete/${commentId}`);
    // }
    //
    // // getComments(): Observable<CommentInterface[]> {
    // //     return this.httpClient.get<CommentInterface[]>(
    // //         'http://localhost:3000/comments');
    // // }
    //
    // getProductComments(): Observable<Product[]> {
    //     return this.httpClient.get<Product[]>(
    //         'http://localhost:8080/product/all');
    // }

    constructor(private httpClient: HttpClient) {
    }

    getComments(): Observable<CommentInterface[]> {
        return this.httpClient.get<CommentInterface[]>('http://localhost:3000/comments');
    }


}