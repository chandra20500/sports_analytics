import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PracticePlansService } from '../../services';
@Component({
  selector: 'app-add-drills',
  templateUrl: 'add-drills.component.html',
  styleUrls: ['./add-drills.component.scss'],
})
export class AddDrillsComponent implements OnInit {
  public files: any[] = [];
  drillTypes = ['A', 'B', 'C', 'D'];
  categoryData = ['Warmup', 'Forward', 'Defense', 'Skill', 'General'];

  drillForm = new FormGroup({
    name: new FormControl('', Validators.required),
    drilltype: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    reps: new FormControl('', Validators.required),
    goal: new FormControl('', Validators.required),
    result: new FormControl('', Validators.required),
    drillDataMandate: new FormControl(false, Validators.required),
    mlbId: new FormControl(20, Validators.required),
  });

  constructor(
    private _snackBar: MatSnackBar,
    public apiService: PracticePlansService,
    public dialogRef: MatDialogRef<AddDrillsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onFileChange(pFileList: File[]) {
    Object.keys(pFileList).map((element) => {
      this.files.push(pFileList[element]);
    });
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
    this.apiService.addDrills(this.drillForm.value).subscribe((data: any) => {
      this._snackBar.open('New Drill Added Successfully!', '', {
        duration: 2000,
      });
      this.dialogRef.close(true);
    });
  }

  reset() {
    this.drillForm.reset();
  }

  close() {
    this.dialogRef.close(false);
  }
}
