import {inject, Injectable, signal} from '@angular/core';
import {Observable} from 'rxjs';
import {DevocionalHttpService} from '../../../core/services/devocional-http.service';
import {CultoInformation} from '../../../core/model';

@Injectable({
  providedIn: 'root'
})
export class DevocionalService {
  devocionalHttpService = inject(DevocionalHttpService);
  list$: Observable<CultoInformation[]> = this.devocionalHttpService.loadAll();

  loading$ = signal<boolean>(false);
  constructor() {}

  add(information: CultoInformation): void {
    this.loading$.set(true);
    this.devocionalHttpService.add(information)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err))
      .finally(() => this.loading$.set(false));
  }
}
