import { Component, OnInit ,Input, Output,EventEmitter } from '@angular/core';
import { CasasService } from '../servicios/casas.service';

@Component({
  selector: 'app-casas',
  templateUrl: './casas.component.html',
  styleUrls: ['./casas.component.css']
})
export class CasasComponent implements OnInit {
  
  casa:any;
  nombre = '';


  constructor(private cs:CasasService) {     
  }

  ngOnInit(): void {       
  }  

  getCasa(nombre:string){
    // console.log(nombre);
     this.cs.getCasa(nombre).subscribe(result =>{       
      this.casa = result;
      // console.log(this.casa);
    })
 };

}
