import { Component } from '@angular/core';
import { Apartment } from '../core/models/Apartment.model';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrl: './apartments.component.scss'
})
export class ApartmentsComponent {
  apartments: Apartment[] = [
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

}
