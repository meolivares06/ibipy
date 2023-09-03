import {Directive, EventEmitter, HostListener, Output} from '@angular/core';


@Directive({
  selector: '[dropFiles]'
})
export class DropFilesDirective {

  @Output() pastedFiles: EventEmitter<File[]> = new EventEmitter<File[]>();

  @HostListener('drop', ['$event']) dropFiles(event: DragEvent): void {
    event.preventDefault();
    const {dataTransfer} = event;
    const {files} = dataTransfer as DataTransfer;
    if (files.length) {
      const list: File[] = [];
      Array.from(files).forEach(f => {
        if (/^image\//.test(f.type)) {
          list.push(f);
        } else if (/^text\//.test(f.type)) {
          list.push(f);
        } else if ('application/pdf' === f.type) {
          list.push(f);
        } else if ('application/vnd.openxmlformats-officedocument.wordprocessingml.document' === f.type) {
          list.push(f);
        }
      });
      this.pastedFiles.emit(list);
    }
  }

  @HostListener('dragover', ['$event']) dragoverFiles(event: DragEvent): void {
    event.preventDefault();
    const {dataTransfer} = event;
    let {dropEffect} = dataTransfer as DataTransfer;
    dropEffect = 'move';
  }

}
