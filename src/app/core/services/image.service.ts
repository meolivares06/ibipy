import {inject, Injectable, signal} from '@angular/core';
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
  providedIn: 'root'
})
export class ImageService {
  private storage: Storage = inject(Storage);
  private basePath = '/convite_culto';

  imageUrl = signal<string>('');
  loading = signal<boolean>(false);

  constructor() {
    console.log('image service')
  }

  async uploadImage(file: any): Promise<UploadResult> {
    this.loading.set(true);

    await this._cleanup();
    const storageRef = ref(this.storage, `${this.basePath}/${file.name}`);
    const response = await uploadBytes(storageRef, file);
    await this.getImage();

    this.loading.set(false);
    return response;
  }

  async getImage(): Promise<string> {
    this.loading.set(true);

    const imagesRef = ref(this.storage, 'convite_culto');
    const response = await listAll(imagesRef);

    const url = await getDownloadURL(response.items[0]);
    this.imageUrl.set(url);

    this.loading.set(false);
    return url;
  }

  private async _cleanup() {
    const imagesRef = ref(this.storage, 'convite_culto');
    const response = await listAll(imagesRef);
    const deleting = await deleteObject(response.items[0]);
    console.log('deleting', deleting);
    return deleting;
  }

}
