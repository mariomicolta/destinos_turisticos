import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aguadulce',
  templateUrl: './aguadulce.component.html',
  styleUrls: ['./aguadulce.component.css']
})
export class AguadulceComponent implements OnInit {

  
  DESTINOS = [
    { id: 1, nombre: 'San cipriano', foto: 'assets/img/rio.jpg', descripcion : 'Aguas cristalinas...', favorito: true},
    { id: 1, nombre: 'Los tubos', foto: 'assets/img/rio.jpg', descripcion : 'Alguna descrpción', favorito: false},
    { id: 1, nombre: 'La víbora', foto: 'assets/img/rio.jpg', descripcion : 'A...', favorito: false},
    { id: 1, nombre: 'Córdoba', foto: 'assets/img/rio.jpg', descripcion : '...', favorito: true},
    { id: 1, nombre: 'La delfina', foto: 'assets/img/rio.jpg', descripcion : '...', favorito: false}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  anadirFavorito(destino: any){
    //console.log(destino)
    this.DESTINOS.map(item => {
      if(item == destino){
        item.favorito = !item.favorito
      }
    })
  }
}
