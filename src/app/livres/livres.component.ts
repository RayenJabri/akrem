import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {
  livres: Livre[];
  constructor(private livreService: LivreService,
    public authService: AuthService) {

    this.livres = livreService.listeLivres()

  }

  ngOnInit(): void {
  }
  supprimerLivre(l: Livre) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.livreService.supprimerLivre(l);
  }

}
