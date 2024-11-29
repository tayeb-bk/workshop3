import { Component } from '@angular/core';
import { Residence } from '../core/models/Residence.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-residences',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './residences.component.html',
  styleUrl: './residences.component.scss'
})
export class ResidencesComponent {

  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/DALL·E 2024-11-19 00.44.08 - An elegant and modern residential building named 'El Fel', featuring sleek architecture with large windows, a contemporary facade, and well-designed l.webp", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/DALL·E 2024-11-19 00.44.14 - A beautiful and spacious residential building named 'El Yasmin', featuring modern design with elegant architectural details, large glass windows, and .webp", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/DALL·E 2024-11-19 00.44.17 - A sophisticated and elegant residential building named 'El Arij', with a modern architectural style, featuring clean lines, large windows, and a minim.webp", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/Reg4.jfif", status: "En Construction" }
  ];
  searchAddress: string = '';



  showLocation(residence: any): void {
    if (residence.address === 'Inconnu') {
      alert('L adresse de cette résidence est inconnue.');
    } else {
      alert('L adresse de la résidence est : ' + residence.address);
    }
  }
  residencesLike: Residence[]=[];

  likeRes(res: Residence) {
    if(!this.residencesLike.includes(res)){
      this.residencesLike.push(res);
      alert(this.residencesLike.map(res => res.name));
    }

  }

  filteredResidences(): any[] {

    return this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(this.searchAddress.toLowerCase())
  );
}
constructor(private router: Router , private activaterRouter: ActivatedRoute) {}

navigateToDetails(id: number): void {
  this.router.navigate(['/detailsResidance', id]);
}


}

