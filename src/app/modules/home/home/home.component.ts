import { Component, OnInit } from '@angular/core';
//importar el router
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  aguaDulce(){
    this.router.navigateByUrl('destinos/aguadulce');
  }

  aguaSalada(){
    this.router.navigateByUrl('destinos/aguasalada');
  }


}
