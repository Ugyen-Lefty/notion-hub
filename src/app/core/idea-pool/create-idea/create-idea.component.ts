import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatChip } from '@angular/material/chips';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-create-idea',
  templateUrl: './create-idea.component.html',
  styleUrls: ['./create-idea.component.scss']
})
export class CreateIdeaComponent implements OnInit {


  categories_list = ["Education", "Information Technology", "Economics", "Health", "Rural", "Public Sector", "Others"];
  categories: string[] = [];
  postIdea!: FormGroup;
  isPulled = false;
  currentUser: any;

  constructor(private fb: FormBuilder, private api: ApiService, public dialogRef: MatDialogRef<CreateIdeaComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.setForm();
    this.isPulled = !!this.data;
    this.api.getCurrentUser().subscribe(res => {
      this.currentUser = res;
    });
  }

  toggleSelection(chip: MatChip, value: string) {
    chip.toggleSelected();
    this.categories.push(value);
  }

  setForm(){
    this.postIdea = this.fb.group({
      title: [''],
      description: [],
      content_type: ['feed'],
      attachment_ids: [[]],
      visibility: ['']
    });
  }

  addPost(){
    this.api.askQuestion({...this.postIdea.value, categories: this.categories}).subscribe(() => {
      Swal.fire({
        title: 'Posted Successfully!',
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

  pullIdea(){
    this.api.askQuestion({...this.postIdea.value, categories: this.categories, parent_id: +this.data}).subscribe(() => {
      Swal.fire({
        title: 'Idea Pulled Successfully!',
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
}
