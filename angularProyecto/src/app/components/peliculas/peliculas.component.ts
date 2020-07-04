import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.services';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})


export class PeliculasComponent implements OnInit {
public peliculas: Pelicula[];
public favorita: Pelicula;

  constructor(
    private _peliculaService: PeliculaService
  ) { 
    this.peliculas = this._peliculaService.getPeliculas();
  }

  ngOnInit() {

  }

  mostrarFavorita(event){
    this.favorita = event.pelicula;
  }
}
