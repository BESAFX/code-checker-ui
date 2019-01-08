import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ApiService} from "../../../_services/api.service";
import {Project} from "../../../_model/project";

@Component({
  selector: 'app-create-update-project',
  templateUrl: './create-update-project.component.html',
  styleUrls: ['./create-update-project.component.scss']
})
export class CreateUpdateProjectComponent implements OnInit {

  @Input() name;

  form: any = {};
  private project: Project;


  constructor(public activeModal: NgbActiveModal, private api: ApiService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.project = new Project();
    this.project.name = this.form.projName;
    this.project.projKey = this.form.projKey;
    this.project.path = this.form.path;
    this.project.username = this.form.userName;
    this.project.password = this.form.password;
    this.api.createProject(this.project).subscribe(
      data => {
        console.info(data);
      },
      error => {
        console.info(error);
      });
  }

}
