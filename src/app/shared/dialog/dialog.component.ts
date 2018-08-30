import { Component, Inject, Input, TemplateRef } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  @Input() actionsTemplate: TemplateRef<any>;
  @Input() contentTemplate: TemplateRef<any>;
  @Input() headerTemplate: TemplateRef<any>;
  @Input() content: string;
  @Input() resetButtonTitle = 'No';
  @Input() submitButtonTitle = 'Yes';
  @Input() dialogTitle = 'Confirmation';
  @Input() admin = false;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any) {
    if (this.data) {
      this.content = this.data.content || this.content;
      this.dialogTitle = this.data.dialogTitle || this.dialogTitle;
    }
  }
}
