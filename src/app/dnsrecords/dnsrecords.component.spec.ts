import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DnsrecordsComponent } from './dnsrecords.component';

describe('DnsrecordsComponent', () => {
  let component: DnsrecordsComponent;
  let fixture: ComponentFixture<DnsrecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DnsrecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DnsrecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
