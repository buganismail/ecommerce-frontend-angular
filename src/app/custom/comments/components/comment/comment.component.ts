import {Component, Input, OnInit} from '@angular/core';
import {CommentInterface} from "../../../model/comment.interface";

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
})
export class CommentComponent implements OnInit{
    @Input() comment!: CommentInterface;

    ngOnInit() {
    }
}
