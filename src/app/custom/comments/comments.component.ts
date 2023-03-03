import {Component, Input, OnInit} from '@angular/core';
import {CommentsService} from "../service/comments.service";
import {CommentInterface} from "../model/comment.interface";
import {ActiveCommentInterface} from "../model/activeComment.interface";

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
    @Input() currentUserId!: string;

    comments: CommentInterface[] = [];
    activeComment: ActiveCommentInterface | null = null;

    constructor(private commentsService: CommentsService) {
    }

    ngOnInit() {
        this.commentsService.getComments().subscribe((comments) => {
            this.comments = comments;
        })
    }

    addComment({text, parentId}: { text: string, parentId: null | string }): void {
        console.log('addComment', text, parentId);
        this.commentsService.createComment(text, parentId).subscribe(createdComment => {
            this.comments = [...this.comments, createdComment];
            this.activeComment = null;
        })
    }

    deleteComment(commentId: string): void {
        this.commentsService.deleteComment(commentId).subscribe(() => {
            this.comments = this.comments.filter(
                (comment) => comment.id !== commentId
            );
        });
    }

    getReplies(commentId: string): CommentInterface[] {
        return this.comments
            .filter((comment) => comment.parentId === commentId)
            .sort(
                (a, b) =>
                    new Date(a.createdAt).getMilliseconds() -
                    new Date(b.createdAt).getMilliseconds()
            );
    }

    setActiveComment(activeComment: ActiveCommentInterface | null) {
        this.activeComment = activeComment;

    }

    updateComment({text, commentId}: { text: string; commentId: string }) {
        this.commentsService.updateComment(commentId, text).subscribe((updatedComment) => {
            this.comments = this.comments.map((comment) => {
                if (comment.id === commentId) {
                    return updatedComment;
                }
                return comment;
            });
            this.activeComment = null;
        })
    }
}
