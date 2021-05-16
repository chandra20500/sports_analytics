import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-drill-data',
  templateUrl: 'add-drill-data.component.html',
  styleUrls: ['./add-drill-data.component.scss'],
})
export class AddDrillDataComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AddDrillDataComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}
  players = ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'];
  drills = ['Trial 1', 'Trial 2', 'Trial 3', 'Trial 4'];

  currentInd = 0;
  maxInd = 0;

  ngOnInit(): void {
    this.maxInd = Math.ceil(this.players.length / 4) - 1;
  }

  submit() {
    this.dialogRef.close(true);
  }

  close() {
    this.dialogRef.close();
  }

  prevClick() {
    this.currentInd = this.currentInd - 1;
  }

  nextClick() {
    this.currentInd = this.currentInd + 1;
  }
}
