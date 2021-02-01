import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
// import { TablePage } from '../table-page';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpClient: HttpClient) {
  }
  private static DEFAULT_PATH = '/rest/';

  private jsonHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});

  /**
   * Вызов веб-сервиса
   * @param methodName - имя метода
   * @param params - параметры
   */
  // tslint:disable-next-line:typedef
  public doCall(methodName: string, params: any) {
    const url = RestService.DEFAULT_PATH + methodName;
    console.log('calling ' + methodName + ' with params: ', params);
    const options = {
      headers: this.jsonHeaders,
      body: params,
      withCredentials: true
    };
    return this.httpClient.request('POST', url, options)
      .pipe(map((response) => {
        return this.mapResponse(methodName, response);
      }));
  }

  public doGet(methodName: string): Observable<any>{
    const url = RestService.DEFAULT_PATH + methodName;
    console.log('calling ' + methodName);
    const options = {
      headers: this.jsonHeaders,
      withCredentials: true
    };
    return this.httpClient.request('GET', url, options)
      .pipe(map((response) => {
        return this.mapResponse(methodName, response);
      }));
  }
/*
  public doGetAnimals(page: number, itemsPerPage: number, methodName: string):Observable<TablePage>  {
    const url = RestService.DEFAULT_PATH + methodName;
    console.log('calling ' + methodName);
    const options = {
      headers: this.jsonHeaders,
      withCredentials: true
    };
    var animals = this.httpClient.request('GET', url, options)
      .pipe(map((response) => {
        return this.mapResponse(methodName, response);
      }));
    return this.doGetPagetems(animals, page, itemsPerPage);
  }

  public doGetPagetems(animals: Observable<Array<any>>,page: number, itemsPerPage: number):Observable<TablePage>  {
    return animals.pipe(
      map(u => {
          var startIndex = itemsPerPage * (page -1);
          return new TablePage(u.length, u.slice(startIndex, startIndex + itemsPerPage));
        }
      ));

  }
*/
  /**
   * Мапинг результата вызова
   */
  private mapResponse(methodName, response): any {
    console.log(methodName + ' call result: ', response);
    return response;
  }

}
