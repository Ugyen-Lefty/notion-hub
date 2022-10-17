import { ApiService } from './../../api.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatChip } from '@angular/material/chips';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})

export class AskQuestionComponent implements OnInit {

  questionForm!: FormGroup;
  categories_list = ["Education", "Information Technology", "Economics", "Health", "Rural", "Public Sector", "Others"];
  categories: string[] = [];
  selectedImage: any;
  preview: any;
  attachmentId: any;
  currentUser: any;

  constructor(private fb: FormBuilder, private api: ApiService, public dialogRef: MatDialogRef<AskQuestionComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.api.getCurrentUser().subscribe(res =>{
      this.currentUser = res;
    });
    this.questionForm = this.fb.group({
      title: [this.data],
      description: [],
      content_type: ['forum'],
      attachment_ids: [[]]
    });
    this.attachmentId = [];
  }

  toggleSelection(chip: MatChip, value: string) {
    chip.toggleSelected();
    this.categories.push(value);
  }

  askQuestion() {
    this.api.askQuestion({ ...this.questionForm.value, categories: this.categories, attachment_ids: this.attachmentId }).subscribe(() => {
      Swal.fire({
        title: 'Question posted Successfully!',
        timer: 1500,
        toast: true,
        showConfirmButton: false,
        icon: "success",
        position: 'top-end',
      }).then(() => {
        this.dialogRef.close();
      });
    }, () => {
      Swal.fire({
        title: 'Failed',
        timer: 1500,
        toast: true,
        showConfirmButton: false,
        icon: "error",
        position: 'top-end',
      })
      this.dialogRef.close();
    });

  }

  cancel() {
    this.dialogRef.close();
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.onload = (event: any) => {
      this.preview = event.target.result;
      this.selectedImage = new ImageSnippet(event.target.result, file);
      this.api.uploadImage(this.selectedImage.file).subscribe((res: any) => {
        this.attachmentId.push(res['id']);
      });
    };

    reader.readAsDataURL(file);
  }

}
