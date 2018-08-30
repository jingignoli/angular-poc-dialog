import { Injectable, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { Subject } from 'rxjs';
import { ComponentType } from '@angular/cdk/overlay/index';

@Injectable({
  providedIn: 'root'
})
export class DialogService implements OnDestroy {
  private dialogRef: MatDialogRef<any>;
  private ngUnsubscribe = new Subject<void>();

  constructor(private dialogMaterial: MatDialog) {

  }

  /**
   * @param {ComponentType<T>} component
   * @param {MatDialogConfig<D>} config
   * @returns {MatDialogRef<T>}
   */
  open<T, D>(component: ComponentType<T>, config: MatDialogConfig<D> = {}): MatDialogRef<T> {
    if (this.dialogRef) {
      throw new Error('You must first close the already opened dialog if you want to open a new one!');
    }

    this.dialogRef = this.dialogMaterial.open(component, config);
    this.dialogRef.afterClosed().subscribe(() => delete this.dialogRef);

    return this.dialogRef;
  }

  /**
   * @returns {MatDialogRef<any>}
   */
  getDialogRef() {
    return this.dialogRef;
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
