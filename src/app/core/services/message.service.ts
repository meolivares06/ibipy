import {inject, Injectable, signal} from '@angular/core';
import {CultoInformation, MessageHttpService} from './message-http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messageHttpService = inject(MessageHttpService);
  message$: Observable<CultoInformation[]> = this.messageHttpService.loadAll();

  loading$ = signal<boolean>(false);
  constructor() {}

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
