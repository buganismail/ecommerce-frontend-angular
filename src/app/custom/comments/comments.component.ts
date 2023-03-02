import {Component, Input, OnInit} from '@angular/core';
import {CommentsService} from "../service/comments.service";
import {CommentInterface} from "../model/comment.interface";

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
})
export class CommentsComponent implements OnInit {
    @Input() currentUserId!: string;

    comments: CommentInterface[] = [];

    constructor(private commentsService: CommentsService) {
    }

    ngOnInit() {
        this.commentsService.getComments().subscribe((comments) => {
            this.comments = comments;
        })
    }

}
