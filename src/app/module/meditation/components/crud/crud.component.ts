import {Component, inject} from '@angular/core';
import {DevocionalService} from '../../services/devocional.service';
import {FormControl, FormGroup, NonNullableFormBuilder, Validators} from '@angular/forms';
import {CultoInformation} from '../../../../core/model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent {
  public devocionalService = inject(DevocionalService);

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

  async onSubmit() {
    const payLoad = JSON.stringify(this.formText.getRawValue());
    const data: CultoInformation = {
      ...this.formText.value,
      created: new Date()
    }
    try {
      this.devocionalService.add(data)
    } catch (err) {
      console.log(err);
    }
  }
}
