import { Component, OnInit } from '@angular/core';
import { CRMAppService } from '../services/crmapp.service';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-ig-view',
  templateUrl: './ig-view.component.html',
  styleUrls: ['./ig-view.component.scss']
})
export class IgViewComponent implements OnInit {
  public northwindCustomers: any = null;
  public cRMAppMeetingsTasks: any = null;

  constructor(
    private northwindService: NorthwindService,
    private cRMAppService: CRMAppService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('Customers').subscribe(data => this.northwindCustomers = data);
    this.cRMAppService.getMeetingsTasks().subscribe(data => this.cRMAppMeetingsTasks = data);
  }
}
