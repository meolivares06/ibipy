import {inject, Injectable} from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  Firestore, setDoc,
  updateDoc
} from '@angular/fire/firestore';
import {DocumentReference} from '@firebase/firestore';
import {catchError, map, Observable, of} from 'rxjs';
import {Song} from '../../shared/data';
import {CultoInformation} from '../model';


@Injectable({
  providedIn: 'root'
})
export class DevocionalHttpService {
  firestore: Firestore = inject(Firestore);
  private basePath = '/devocional';


  constructor() {
    console.log('Devocional http service')
  }

  add(information: CultoInformation): Promise<DocumentReference<any>> {
    const ref = collection(this.firestore, this.basePath);
    return addDoc(ref, information);
  }

  loadAll(): Observable<CultoInformation[]> {
    const ref = collection(this.firestore, this.basePath);
    return collectionData(ref, {idField: 'id'}).pipe(
      map(document => {
        return document as CultoInformation[];
      }),
      catchError(() => of([]))
    );
  }

  delete(item: CultoInformation) {
    const ref = doc(this.firestore, `${this.basePath}/${item.id}`);
    return deleteDoc(ref)
  }

  update(item: CultoInformation): Promise<void> {
    const ref = doc(this.firestore, `${this.basePath}/${item.id}`);
    return setDoc(ref, item);
  }

  getByID(id: string) {
    const ref = doc(this.firestore, `${this.basePath}/${id}`);
    return docData(ref, { idField: 'id' }) as Observable<CultoInformation>;
  }

  // modifyBookPrice(book: IBook, amount: number) {
  //   const bookDocRef = doc(this.firestore, `books/${book.id}`);
  //   return updateDoc(bookDocRef, { price: amount });
  // }
}
