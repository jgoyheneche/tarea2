import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../servicios/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  constructor(private ps:PersonajesService) { }

  personajes:any;

  ngOnInit(): void {
    this.getPersonajes();
  }

  getPersonajes(){
     this.ps.getPersonajes().subscribe(result =>{      
      this.personajes = result;
      console.log(this.personajes);       
     })
  };

}
