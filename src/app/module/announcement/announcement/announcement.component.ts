import {Component, inject, OnInit} from '@angular/core';
import {ImageService} from 'src/app/core/services/image.service';
import {FormControl, FormGroup, NonNullableFormBuilder, Validators} from '@angular/forms';

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
      author: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.service.getImage().then();
  }

  onSubmit() {
    const payLoad = JSON.stringify(this.formText.getRawValue());
    console.log(payLoad);
  }
}
