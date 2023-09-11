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
  selected$ = signal<CultoInformation | undefined>(undefined);

  loading$ = signal<boolean>(false);
  constructor() {}

  add(information: CultoInformation): Promise<void> {
    this.loading$.set(true);
    return this.devocionalHttpService.add(information)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err))
      .finally(() => this.loading$.set(false));
  }

  select(item: CultoInformation | undefined) {
    this.selected$.set(item);
  }

  delete(item: CultoInformation): Promise<void> {
    this.loading$.set(true);
    return this.devocionalHttpService.delete(item)      .then((result) => {
      console.log(result);
    })
      .catch((err) => console.log(err))
      .finally(() => this.loading$.set(false));
  }

  async update(data: CultoInformation): Promise<void> {
    this.loading$.set(true);
    return this.devocionalHttpService.update(data)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err))
      .finally(() => this.loading$.set(false));
  }
}
