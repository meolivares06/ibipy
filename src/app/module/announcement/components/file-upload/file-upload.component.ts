import {Component, inject, Input, OnInit} from '@angular/core';
import {ImageService} from 'src/app/core/services/image.service';


@Component({
  selector: 'app-file-upload',
  styleUrls: ['./file-upload.component.scss'],
  templateUrl: './file-upload.component.html',
  standalone: false,
})
export class AppFileUploadComponent implements OnInit {
  fileName = '';

  private imagesService = inject(ImageService);

  @Input() label = '';

  ngOnInit(): void {}

  async onFileSelected(fileUpload: any) {
    const file: File = fileUpload.target.files[0];
    if (!file) return

    try {
      const response = await this.imagesService.uploadImage(file);
      console.log(1, response);
    } catch (err) {
      console.log(2, err);
    }
  }
}
