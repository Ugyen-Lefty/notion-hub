import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from './../../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateIdeaComponent } from '../create-idea/create-idea.component';
import { MatChip } from '@angular/material/chips';
import Swal from 'sweetalert2';

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}
@Component({
  selector: 'app-idea-detail',
  templateUrl: './idea-detail.component.html',
  styleUrls: ['./idea-detail.component.scss']
})
export class IdeaDetailComponent implements OnInit {

  id: any;
  forum: any;
  isConvert = false;
  proposalForm!: FormGroup;
  categories_list = ["Education", "Information Technology", "Economics", "Health", "Rural", "Public Sector", "Others"];
  categories: any;
  users: any;
  teamMembers: any;
  selectedImage: any;
  preview: any;
  attachmentId: any;
  @ViewChild('name1') name1!: ElementRef;
  @ViewChild('phone1') phone1!: ElementRef;
  @ViewChild('name2') name2!: ElementRef;
  @ViewChild('phone2') phone2!: ElementRef;

  constructor(private route: ActivatedRoute, private api: ApiService, private dialog: MatDialog, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.attachmentId = [];
    this.teamMembers = [];
    this.categories = [];
    this.id = this.route.snapshot.params['id'];
    this.initializer();
  }

  initializer() {
    this.route.params.subscribe((res: any) => {
      this.api.getContentById(res?.id).subscribe(res => {
        this.forum = res;
      });
    });
    this.api.getAllUsers().subscribe(res => this.users = res);
    this.proposalForm = this.fb.group({
      title: [''],
      summary: [''],
      expected_fund: [''],
      team_name: [''],
      attachment_ids: [''],
      categories: ['']
      // categories: [''],
    });
  }

  pullIdea(): void {
    this.dialog.open(CreateIdeaComponent, {
      width: '800px',
      autoFocus: false,
      data: this.id
    }).afterClosed().subscribe(() => {
      this.initializer();
      this.router.navigateByUrl('app/idea-pool');
    });
  }

  toggleConvert(isConvert: any) {
    this.isConvert = isConvert;
  }

  toggleSelection(chip: MatChip, value: string) {
    chip.toggleSelected();
    this.categories.push(value);
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

  createProposal() {
    this.teamMembers.push({name: this.name1?.nativeElement?.value, phone: this.phone1?.nativeElement?.value}, { name: this.name2?.nativeElement?.value, phone: this.phone2?.nativeElement?.value});
    this.api.createProposal({ ...this.proposalForm.value, categories: this.categories, proposal_team_members_attributes: {details: this.teamMembers}, attachment_ids: this.attachmentId }).subscribe(() => {
      Swal.fire({
        title: 'Success!',
        timer: 1500,
        toast: true,
        showConfirmButton: false,
        icon: "success",
        position: 'top-end',
      }).then(() => {
        this.router.navigateByUrl('app/proposal');
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
    });
  }

}
