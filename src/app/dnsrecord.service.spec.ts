import { TestBed, inject } from '@angular/core/testing';

import { DnsRecordService } from './dnsrecord.service';

describe('DnsRecordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DnsRecordService]
    });
  });

  it('should be created', inject([DnsRecordService], (service: DnsRecordService) => {
    expect(service).toBeTruthy();
  }));
});
