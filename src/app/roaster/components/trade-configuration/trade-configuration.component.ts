import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-trade-configuration',
  templateUrl: 'trade-configuration.component.html',
  styleUrls: ['./trade-configuration.component.scss'],
})
export class TradeConfigurationComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<TradeConfigurationComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {}

  submit() {
    this.dialogRef.close(true);
  }

  close() {
    this.dialogRef.close();
  }
}
