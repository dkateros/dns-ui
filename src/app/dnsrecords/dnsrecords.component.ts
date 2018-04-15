import { Component, OnInit } from '@angular/core';

import { DnsRecord } from '../dnsrecord';
import { DnsRecordService } from '../dnsrecord.service';
import { DnsrecordDetailComponent } from '../dnsrecord-detail/dnsrecord-detail.component';

@Component({
  selector: 'app-dnsrecords',
  templateUrl: './dnsrecords.component.html',
  styleUrls: ['./dnsrecords.component.css']
})
export class DnsrecordsComponent implements OnInit {

  dnsRecords: DnsRecord[];

  selected: DnsRecord;

  constructor(private dnsRecordService: DnsRecordService) { }

  ngOnInit() {
    this.getRecords();
  }

  getRecords() : void {
    this.dnsRecordService.getRecords().subscribe(dnsRecords => this.dnsRecords = dnsRecords);
  }

  onCreate() : void {
    this.selected = new DnsRecord();
  }

  onEdit(dnsRecord: DnsRecord) : void {
    this.selected = dnsRecord;
  }

  onDelete(id: number) : void {
    this.dnsRecordService.delete(id).subscribe();
    this.dnsRecords = this.dnsRecords.filter(dnsRecord => dnsRecord.id !== id);
  }

}
