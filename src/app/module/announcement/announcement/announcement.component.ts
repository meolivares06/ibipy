import {Component, inject, OnInit} from '@angular/core';
import {from, tap} from 'rxjs';
import {ImageService} from '../services/image.service';
import {FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {
  service = inject(ImageService);

  private readonly _formBuilder = inject(NonNullableFormBuilder);
  formText!: FormGroup;
  constructor() {
    this.formText = this._formBuilder.group({
        title: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        versicle: new FormControl('', Validators.required),
    });
  }
  ngOnInit() {
    this.service.getImage().then();
  }
}
