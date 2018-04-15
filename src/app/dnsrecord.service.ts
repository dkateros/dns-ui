import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { DnsRecord } from './dnsrecord';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap, catchError } from 'rxjs/operators';

const getAllUrl: string = "http://localhost:8080/bt/rs/dnsrecord";
const saveUrl: string = "http://localhost:8080/bt/rs/dnsrecord/";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DnsRecordService {

  constructor(private http: HttpClient) { }

  getRecords() : Observable<DnsRecord[]> {
    return this.http.get<DnsRecord[]>(getAllUrl, httpOptions).pipe(
      tap(dnsRecords => console.log("got records")),
      catchError(this.handleError('getRecords', []))
    );
  }

  save(dnsRecord: DnsRecord) : Observable<any> {
    if(dnsRecord.id == null) {
      console.log("saving new");
      return this.http.post<DnsRecord>(saveUrl, dnsRecord, httpOptions).pipe(
        tap(dnsRecord => console.log(`created record with id ${dnsRecord.id}`)),
        catchError(this.handleError('create', [dnsRecord]))
      );
    } else {
      console.log("updating existing");
      return this.http.post<DnsRecord>(saveUrl + dnsRecord.id, dnsRecord, httpOptions).pipe(
        tap(dnsRecord => console.log("updated record")),
        catchError(this.handleError('update', [dnsRecord]))
      );
    }
  }

  delete(id: number) : Observable<any> {
    return this.http.delete<DnsRecord>(saveUrl + id, httpOptions).pipe(
      tap(dnsRecord => console.log(`deleted record with with id ${id}`)),
      catchError(this.handleError('delete', [id]))
    );
  }

  private handleError<T>( operation ='operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error, `Operation: ${operation}`)
      return of(result as T);
    }
  }

}
