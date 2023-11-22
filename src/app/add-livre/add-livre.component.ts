import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre.service';
import { Type } from '../model/Type.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css']
})
export class AddLivreComponent implements OnInit {
  newLivre = new Livre();
  type! : Type[];
  newIdTyp! : number;
  newType! : Type;


  constructor(private livreService: LivreService,
    private router :Router)   {}

  ngOnInit(): void {
    this.type = this.livreService.listeType();

  }
  addLivre() {
    this.newType =
this.livreService.consulterType(this.newIdTyp);
this.newLivre.type = this.newType;

    this.livreService.ajouterLivre(this.newLivre)
    this.router.navigate(['livre']);

  }

}
