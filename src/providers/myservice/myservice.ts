import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MyserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyserviceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MyserviceProvider Provider');
  }

  myApi(){
    return this.http.get('https://ghibliapi.herokuapp.com/films');
  }

  getArticles() {
    return this.http.get('http://127.0.0.1:3000/api/v1/detalles');
  }
  // this.HttpHeaders().set("Auto", "this is my information");
}
