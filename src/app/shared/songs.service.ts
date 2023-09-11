import { Injectable } from '@angular/core';
import {collection, Firestore, addDoc, collectionData, doc, deleteDoc} from '@angular/fire/firestore';
import {Song} from './data';
import {Observable} from 'rxjs';
import {DocumentReference} from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(private firestore: Firestore) { }

  add(song: Song): Promise<DocumentReference<any>> {
    const songRef = collection(this.firestore, 'songs');
    return addDoc(songRef, song);
  }

  loadAll(): Observable<Song[]> {
    const songRef = collection(this.firestore, 'songs');
    return collectionData(songRef, {idField: 'id'}) as Observable<Song[]>;
  }

  delete(song: Song) {
    const songRef = doc(this.firestore, `songs/${song.id}`);
    return deleteDoc(songRef)
  }
}
