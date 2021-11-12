import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map , tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'frontend';
  info!:pics[];
  baseURL:string = "http://localhost:8000/api/crudimg";
  getpics=this._hc.get(this.baseURL).pipe(
    map<any,pics[]>(resp => {
      resp.forEach((x:any) => { x.id = x._id ; delete x._id ; delete x.__v ; x.funa = false ;});
      return resp;
    }),
    tap(console.log)
  )

  constructor( private _hc:HttpClient ){
    this.getpics.subscribe(resp => this.info = resp);
  }

  funarse(foto:pics){
    if(foto.funa){
      this._hc.delete(`${this.baseURL}/${foto.id}`).subscribe(() => {},() => {}, () => {
        this.getpics.subscribe(resp => this.info = resp);
      });return;
    }else{
      this.info.forEach(x => {x.funa = false});
      foto.funa = true;
    }
  }

}

interface pics {id:string,ruta:string,funa:boolean}
