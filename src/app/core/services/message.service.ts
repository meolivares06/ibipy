import {inject, Injectable, signal} from '@angular/core';
import {MessageHttpService} from './message-http.service';
import {Observable, of} from 'rxjs';
import {CultoInformation} from '../model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messageHttpService = inject(MessageHttpService);
  list$: Observable<CultoInformation[]> = of([]);

  loading$ = signal<boolean>(false);
  constructor() {
    this.list$ = this.messageHttpService.loadAll();
  }

  add(information: CultoInformation): void {
    this.loading$.set(true);
    this.messageHttpService.add(information)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err))
      .finally(() => this.loading$.set(false));
  }
}
