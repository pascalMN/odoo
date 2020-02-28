import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
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
