/*
* Description: Base clase for CRUD operations with Firebase
* */
import {Observable} from 'rxjs';

export abstract class CrudFirebaseService<T> {
  /**
   * @param collectionPath The collection path in Firebase
   */
  constructor(private collectionPath: string) {}

  abstract create(params: any): void
  abstract retrieve(params: any): Observable<T>
  abstract update(params: any): Observable<T>
  abstract delete(params: any): Observable<T>
}
