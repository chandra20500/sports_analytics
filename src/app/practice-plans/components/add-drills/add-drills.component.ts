import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-drills',
  templateUrl: 'add-drills.component.html',
  styleUrls: ['./add-drills.component.scss'],
})
export class AddDrillsComponent implements OnInit {
  public files: any[] = [];
  drillTypes = ['A', 'B', 'C', 'D'];
  categoryData = ['A', 'B', 'C', 'D'];
  constructor(
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddDrillsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onFileChange(pFileList: File[]) {
    Object.keys(pFileList).map((element) => {
      this.files.push(pFileList[element]);
    });
    // this._snackBar.open('Successfully upload!', 'Close', {
    //   duration: 2000,
    // });
  }

  deleteFile(f) {
    this.files = this.files.filter((w) => {
      return w.name !== f.name;
    });
    // this._snackBar.open('Successfully delete!', 'Close', {
    //   duration: 2000,
    // });
  }

  submit() {
    this.dialogRef.close(true);
  }

  close() {
    this.dialogRef.close();
  }
}
