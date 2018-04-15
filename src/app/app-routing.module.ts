import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DnsrecordsComponent } from './dnsrecords/dnsrecords.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dnsrecords',
    pathMatch: 'full'
  },
  {
      path: 'dnsrecords',
      component: DnsrecordsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
