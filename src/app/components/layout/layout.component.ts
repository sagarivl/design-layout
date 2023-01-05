import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  inputArray = [
    'Aim Grade',
    'Sequence',
    ' Dummy',
    'Aim Grade',
    'Sequence',
    ' Dummy',
    'Aim Grade',
    'Sequence',
    ' Dummy',
  ];
  arrayChecks = ['Tube Change', 'Buffle'];
}
