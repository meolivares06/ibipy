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
      if(this.devocionalService.selected$()) {
        this.devocionalService.update({...data, id: this.devocionalService.selected$()?.id})
          .then(() => {
            console.log('actualizado correctamente');
          })
          .catch(err => {
            console.log(err);
          });
      }else {
        this.devocionalService.add(data).then(() => {
          console.log('actualizado correctamente');
        })
          .catch(err => {
            console.log(err);
          });
      }
    } catch (err) {
      console.log(err);
    }
  }

  edit(item: CultoInformation) {
    this.devocionalService.select(item);
    this.formText.patchValue(item);
  }

  delete(item: CultoInformation) {
    this.devocionalService.select(item);
    this.devocionalService.delete(item)
      .then(() => {
        this.devocionalService.select(undefined);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
