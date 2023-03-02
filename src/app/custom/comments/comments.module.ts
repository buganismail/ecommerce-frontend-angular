import {Input, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentsComponent} from "./comments.component";
import {CommentsService} from "../service/comments.service";
import { CommentComponent } from './components/comment/comment.component';


@NgModule({
    declarations: [CommentsComponent, CommentComponent],
imports:[CommonModule],
    exports: [CommentsComponent],
    providers:[CommentsService]
})
export class CommentsModule {
}
