import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../core/dialog.service';
import { CustomDialComponent } from '../custom-dial/custom-dial.component';
import { DefaultDialComponent } from '../default-dial/default-dial.component';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  ngOnInit() {

  }

  open() {
    this.dialogService.open(CustomDialComponent);
  }

  openDefault() {
    this.dialogService.open(DefaultDialComponent);
  }

}
