import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[pasteFiles]'
})
export class PasteFilesDirective {

  @Output() pastedFiles: EventEmitter<File[]> = new EventEmitter<File[]>();

  @HostListener('window:paste', ['$event']) windowPaste(event: ClipboardEvent): void {
    const {clipboardData} = event;
    const {files} = clipboardData as DataTransfer;
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
      event.preventDefault();
    }
  }
}
