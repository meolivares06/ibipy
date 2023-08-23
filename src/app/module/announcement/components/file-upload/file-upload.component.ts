import {Component, inject, OnInit} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/compat/storage';
import {finalize} from 'rxjs';
import {ref, Storage, uploadBytesResumable} from '@angular/fire/storage';
import * as firebase from 'firebase/compat';


@Component({
  selector: 'app-file-upload',
  styleUrls: ['./file-upload.component.scss'],
  templateUrl: './file-upload.component.html',
  standalone: false,
})
export class AppFileUploadComponent implements OnInit {

  fileName = '';
  private basePath = '/uploads';
  private storage: Storage = inject(Storage);

  ngOnInit(): void {
  }

  async onFileSelected(fileUpload: any) {

    const file: File = fileUpload.target.files[0];

    if (!file) return
    const storageRef = ref(this.storage, file.name);
    const uploadTask = await uploadBytesResumable(storageRef, file);
    uploadTask.task.then((r) => console.log(r));



  }
}
