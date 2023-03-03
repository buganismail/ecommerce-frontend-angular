import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommentInterface} from "../../../model/comment.interface";
import {ActiveCommentTypeEnum} from "../../../model/activeCommentType.enum";
import {ActiveCommentInterface} from "../../../model/activeComment.interface";

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
    @Input() currentUserId!: string;
    @Input() replies!: CommentInterface[];
    @Input() activeComment!: ActiveCommentInterface | null;
    @Input() comment!: CommentInterface;
    @Input() parentId: string | null = null;

    @Output() setActiveComment = new EventEmitter<ActiveCommentInterface | null>();
    @Output() addComment = new EventEmitter<{ text: string, parentId: string | null; }>();
    @Output() updateComment = new EventEmitter<{ text: string, commentId: string; }>();
    @Output() deleteComment = new EventEmitter<string>();

    canReply: boolean = false;
    canEdit: boolean = false;
    canDelete: boolean = false;
    activeCommentType = ActiveCommentTypeEnum;
    replyId: string | null = null;

    ngOnInit(): void {
        const fiveMinutes = 300000;
        const timePassed = new Date().getMilliseconds() - new Date(this.comment.createdAt).getMilliseconds() > fiveMinutes;
        this.canReply = Boolean(this.currentUserId);
        this.canEdit = this.currentUserId === this.comment.userId && !timePassed;
        this.canDelete = this.currentUserId === this.comment.userId && !timePassed && this.replies.length === 0;
        this.replyId = this.parentId ? this.parentId : this.comment.id;
    }

    isReplying(): boolean {
        if (!this.activeComment) {
            return false;
        }
        return (
            this.activeComment.id === this.comment.id &&
            this.activeComment.type === this.activeCommentType.replying
        );
    }

    isEditing(): boolean {
        if (!this.activeComment) {
            return false;
        }
        return (
            this.activeComment.id === this.comment.id &&
            this.activeComment.type === this.activeCommentType.editing
        );
    }
}
