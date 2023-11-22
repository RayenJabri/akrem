import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre.service';
import { Type } from '../model/Type.model';

@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styles: [
  ]
})
export class UpdateLivreComponent implements OnInit {
  currentLivre = new Livre();
  type! : Type[];
updatedTypId! : number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private livreService: LivreService) { }

  ngOnInit() {
    this.type = this.livreService.listeType();

    this.currentLivre = this.livreService.consulterLivre(this.activatedRoute.snapshot.params['id']);
    //console.log(this.currentLivre);
    this.updatedTypId=this.currentLivre.type.idTyp;


  }
  updateLivre() {
    this.currentLivre.type=this.livreService.consulterType(this.updatedTypId);
    this.livreService.updateLivre(this.currentLivre);
    this.router.navigate(['livres']);
  }

}
