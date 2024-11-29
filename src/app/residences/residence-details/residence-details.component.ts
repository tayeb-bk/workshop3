import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from '../../core/models/Residence.model';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrl: './residence-details.component.scss'
})
export class ResidenceDetailsComponent {

  residence?: Residence ;

  constructor(private activatedRoute: ActivatedRoute) {}
  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/DALL·E 2024-11-19 00.44.08 - An elegant and modern residential building named 'El Fel', featuring sleek architecture with large windows, a contemporary facade, and well-designed l.webp", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/DALL·E 2024-11-19 00.44.14 - A beautiful and spacious residential building named 'El Yasmin', featuring modern design with elegant architectural details, large glass windows, and .webp", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/DALL·E 2024-11-19 00.44.17 - A sophisticated and elegant residential building named 'El Arij', with a modern architectural style, featuring clean lines, large windows, and a minim.webp", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/Reg4.jfif", status: "En Construction" }
  ];

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.residence = this.listResidences.find(res => res.id.toString() === id );
  }
  afficherNext(){
    const index = this.listResidences.findIndex(res => res.id === this.residence?.id);
    if(index < this.listResidences.length - 1){
      this.residence = this.listResidences[index + 1];
    }else{
      this.residence = this.listResidences[0];
    }
  }

}
