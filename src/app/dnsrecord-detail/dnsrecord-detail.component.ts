import { Component, OnInit, Input } from '@angular/core';

import { DnsRecord } from '../dnsrecord';
import { DnsRecordService } from '../dnsrecord.service';

@Component({
  selector: 'app-dnsrecord-detail',
  templateUrl: './dnsrecord-detail.component.html',
  styleUrls: ['./dnsrecord-detail.component.css']
})
export class DnsrecordDetailComponent implements OnInit {

  @Input() dnsRecord: DnsRecord;

  constructor(private dnsRecordService: DnsRecordService) { }

  ngOnInit() {
  }

  onSave() : void {
    this.dnsRecordService.save(this.dnsRecord).subscribe();
    this.dnsRecord = null;
  }

  onCancel() : void {
    this.dnsRecord = null;
  }

}
