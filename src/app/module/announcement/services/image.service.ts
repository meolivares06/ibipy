import {inject, Injectable} from '@angular/core';
import {
  getDownloadURL,
  listAll,
  ref,
  Storage,
  uploadBytes,
  uploadBytesResumable,
  deleteObject
} from '@angular/fire/storage';
import {UploadResult} from '@firebase/storage';
import {ListResult} from '@angular/fire/compat/storage/interfaces';

@Injectable({
  providedIn: 'platform'
})
export class ImageService {
  private storage: Storage = inject(Storage);
  private basePath = '/convite_culto';

  constructor() {
    console.log('image service')
  }

  async uploadImage(file: any): Promise<UploadResult> {
    await this.cleanup();
    const storageRef = ref(this.storage, `${this.basePath}/${file.name}`);
    return uploadBytes(storageRef, file);
  }

  async getImages(): Promise<string> {
    const imagesRef = ref(this.storage, 'convite_culto');
    const response = await listAll(imagesRef);

    return getDownloadURL(response.items[0]);
  }

  async cleanup() {
    const imagesRef = ref(this.storage, 'convite_culto');
    const response = await listAll(imagesRef);
    const deleting = await deleteObject(response.items[0]);
    console.log(deleting);
  }

}
