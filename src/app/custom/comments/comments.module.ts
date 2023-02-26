import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentsComponent} from "./comments.component";
import {CommentsRoutingModule} from "./comments-routing.module";
import {RouterLink} from "@angular/router";
import {CommentsService} from "../service/comments.service";
import { CommentComponent } from './components/comment/comment.component';
import { CommentFormComponent } from './components/commentForm/comment-form.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [CommentsComponent, CommentComponent, CommentFormComponent],
    imports: [
        CommonModule,
        CommentsRoutingModule,
        RouterLink,
        ReactiveFormsModule
    ],
    exports:[CommentsComponent],
    providers: [CommentsService]
})
export class CommentsModule {
}
