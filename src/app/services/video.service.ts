import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Video } from '../models/video';
import { global } from "./global";



@Injectable({
  providedIn: 'root'
})
export class VideoService {
public url:string;
public identity:any;
public token;

  constructor(
    public _http:HttpClient
  ) {
    this.url= global.url;
   }

prueba(){
  return "hola mundo desde un servicio de angular"
}

create(token, video):any{
  
  let json= JSON.stringify(video);
  let params= 'json='+json;
  
  
  let headers= new HttpHeaders().set('Conten-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

  return this._http.post(this.url+'video/new', params, {headers:headers})
}



getVideos(token, page):any{
    
  if(!page || page==null || page==false){
    page=1
  }
  
  let headers= new HttpHeaders().set('Conten-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

  return this._http.get(this.url+'video/list?page='+page,  {headers:headers})
}

getVideo(token, id):any{    
  
  
  let headers= new HttpHeaders().set('Conten-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

  return this._http.get(this.url+'video/detail/'+id,  {headers:headers})
}




update(token, video,id):any{
  
  let json= JSON.stringify(video);
  let params= 'json='+json;
  
  
  let headers= new HttpHeaders().set('Conten-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

  return this._http.put(this.url+'video/edit/'+id, params, {headers:headers})
}

delete(token, id):any{    
  
  
  let headers= new HttpHeaders().set('Conten-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

  return this._http.delete(this.url+'video/remove/'+id,  {headers:headers})
}

}
