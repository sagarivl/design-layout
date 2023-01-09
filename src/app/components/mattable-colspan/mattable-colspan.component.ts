import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  aim: string;

  min: number;
  max: string;
  d: string;
  last: string;
  lm: string;
  a: string;
  b: string;
  c: string;
  aa: string;
  bb: string;
  cc: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    aim: 'JSW123',
    min: 1.0079,
    max: 'H',
    d: 'abc',
    last: 'uh',
    lm: 'ui',
    a: 'uio',
    b: 'ooo',
    c: 'pp',
    aa: 'uio',
    bb: 'ooo',
    cc: 'pp',
  },
  {
    aim: 'JSW123',
    min: 1.0079,
    max: 'H',
    d: 'abc',
    last: 'uh',
    lm: 'ui',
    a: 'uio',
    b: 'ooo',
    c: 'pp',
    aa: 'uio',
    bb: 'ooo',
    cc: 'pp',
  },
];

@Component({
  selector: 'app-mattable-colspan',
  templateUrl: './mattable-colspan.component.html',
  styleUrls: ['./mattable-colspan.component.css'],
})
export class MattableColspanComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  displayedColumns: string[] = [
    'aim',
    'min',
    'max',
    'd',
    'last',
    'lm',
    'a',
    'b',
    'c',
    'aa',
    'bb',
    'cc',
  ];
  dataSource = ELEMENT_DATA;
}
