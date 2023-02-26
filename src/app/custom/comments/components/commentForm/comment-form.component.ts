import {Component, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-comment-form',
    templateUrl: './comment-form.component.html',
    styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
    @Input() submitLabel!: string;
    @Input() hasCancelButton: boolean = false;
    @Input() initialText: string = '';


    form!: FormGroup;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.form = this.fb.group({
            title: [this.initialText, Validators.required],
        });
    }

    onSubmit(): void {
        console.log('onSubmit', this.form.value);
    }
}
