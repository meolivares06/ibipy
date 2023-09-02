import {inject, Injectable} from '@angular/core';
import {addDoc, collection, collectionData, Firestore} from '@angular/fire/firestore';
import {DocumentReference} from '@firebase/firestore';
import {catchError, map, Observable, of} from 'rxjs';

export interface CultoInformation {
  title: string;
  description: string;
  versicle: string;
  author: string;
  created: string;
}
@Injectable({
  providedIn: 'root'
})
export class MessageHttpService {
  firestore: Firestore = inject(Firestore);
  private basePath = '/convite_culto_text';


  constructor() {
    console.log('message http service')
  }

  add(information: CultoInformation): Promise<DocumentReference<any>> {
    const ref = collection(this.firestore, this.basePath);
    return addDoc(ref, information);
  }

  loadAll(): Observable<CultoInformation[]> {
    const ref = collection(this.firestore, this.basePath);
    return collectionData(ref).pipe(
      map(document => {
        return document as CultoInformation[];
      }),
      catchError(() => of([]))
    );
  }
}
