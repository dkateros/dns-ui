import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DnsrecordDetailComponent } from './dnsrecord-detail.component';

describe('DnsrecordDetailComponent', () => {
  let component: DnsrecordDetailComponent;
  let fixture: ComponentFixture<DnsrecordDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DnsrecordDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DnsrecordDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
