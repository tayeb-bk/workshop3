import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Apartment } from '../../core/models/Apartment.model';

@Component({
  selector: 'app-apartments-by-residence',
  templateUrl: './apartments-by-residence.component.html',
  styleUrls: ['./apartments-by-residence.component.scss']
})
export class ApartmentsByResidenceComponent implements OnInit {
  Listapartments: Apartment[] = [
    {
      apartNum: 101,
      floorNum: 1,
      surface: 75,
      terrace: true,
      surfaceterrace: 15,
      category: 'T2',
      ResidenceId: 1
    },
    {
      apartNum: 102,
      floorNum: 1,
      surface: 85,
      terrace: false,
      surfaceterrace: 0,
      category: 'T3',
      ResidenceId: 1
    },
    {
      apartNum: 201,
      floorNum: 2,
      surface: 90,
      terrace: true,
      surfaceterrace: 20,
      category: 'T3',
      ResidenceId: 2
    },
    {
      apartNum: 202,
      floorNum: 2,
      surface: 70,
      terrace: false,
      surfaceterrace: 0,
      category: 'T2',
      ResidenceId: 2
    },
    {
      apartNum: 301,
      floorNum: 3,
      surface: 120,
      terrace: true,
      surfaceterrace: 25,
      category: 'T4',
      ResidenceId: 3
    },
  ];

  apartment: Apartment[] = []; // Initialisation avec un tableau vide

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.apartment = this.Listapartments.filter(res => res.ResidenceId.toString() === id);
    }
  }
}
