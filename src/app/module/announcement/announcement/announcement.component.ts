import {Component, inject, OnInit} from '@angular/core';
import {ImageService} from 'src/app/core/services/image.service';
import {FormControl, FormGroup, NonNullableFormBuilder, Validators} from '@angular/forms';
import {MessageService} from '../../../core/services/message.service';
import {map, tap} from 'rxjs';
import {CultoInformation} from '../../../core/services/message-http.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {
  service = inject(ImageService);
  messageService = inject(MessageService);

  private readonly _formBuilder = inject(NonNullableFormBuilder);
  formText!: FormGroup;

  constructor() {
    this.formText = this._formBuilder.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      versicle: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
    });

    this.messageService.message$.pipe(
      map((lastInformation) => {
        if(lastInformation.length > 0) {
          return lastInformation.reverse();
        }else return lastInformation;
      }),
      tap(lastInformation => {
        this.formText.patchValue({
          title: lastInformation[0].title,
          description: lastInformation[0].description,
          versicle: lastInformation[0].versicle,
          author: lastInformation[0].author,
        })
      })
    )
      .subscribe()
  }

  ngOnInit() {
    this.service.getImage().then();


  }

  async onSubmit() {
    const payLoad = JSON.stringify(this.formText.getRawValue());
    const data: CultoInformation = {
      ...this.formText.value,
      created: new Date()
    }
    try {
      this.messageService.add(data)
    } catch (err) {
      console.log(err);
    }
  }
}
