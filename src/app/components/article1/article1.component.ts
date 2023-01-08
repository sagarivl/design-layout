import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article1',
  templateUrl: './article1.component.html',
  styleUrls: ['./article1.component.css'],
})
export class Article1Component implements OnInit {
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
