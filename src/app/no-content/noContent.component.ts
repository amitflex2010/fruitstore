import {
    Component
  } from '@angular/core';
  
  @Component({
    selector: 'no-content',
    template: `
    <div style="display: flex">
    <div style="height: 65vh;width: 98%;display: flex;align-items: center;justify-content: center;">
      <mat-progress-spinner [diameter]="80" [mode]="'indeterminate'" [value]="50" style="width: 70px; height: 70px;"></mat-progress-spinner>
    </div>
  </div>
    `
  })
  export class NoContentComponent {}
  