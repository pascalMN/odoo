import {ChangeDetectorRef, Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() name: string;

  clicks: number = 0;

  constructor(private cd: ChangeDetectorRef) { }

  onClick() {
    this.clicks = this.clicks + 1;
    this.cd.detectChanges();
  }
}
