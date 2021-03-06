import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AlertService} from "../../services/alert.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {

  @Input() public delay: number = 5000;
  public text: string;
  public type:string = "success";
  private aSub: Subscription;

  constructor(
    private alertService: AlertService,
  ) { }

  public ngOnInit(): void {
    this.aSub = this.alertService.alert$.subscribe(alert => {
      this.text = alert.text;
      this.type = alert.type;

      const timeout = setTimeout(() => {
        clearTimeout(timeout);
        this.text = "";
      }, this.delay);
    });
  }

  public ngOnDestroy(): void {
    if (this.aSub) this.aSub.unsubscribe();
  }

}
