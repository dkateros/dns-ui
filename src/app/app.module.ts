import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule } from "@clr/angular";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DnsrecordsComponent } from './dnsrecords/dnsrecords.component';
import { DnsRecordService } from './dnsrecord.service';
import { DnsrecordDetailComponent } from './dnsrecord-detail/dnsrecord-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    DnsrecordsComponent,
    DnsrecordDetailComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DnsRecordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
