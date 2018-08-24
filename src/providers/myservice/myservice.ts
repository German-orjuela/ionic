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
  // this.HttpHeaders().set("Auto", "this is my information");//
  addArticles(article:any){
    return this.http.post('http://172.30.6.200:3000/api/v1/detalles', article)
  }
  deleteArticles(id:any){
    return this.http.delete('http://172.30.6.200:3000/api/v1/detalles/'+id)
  }
}
