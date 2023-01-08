import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
export interface PeriodicElement {
  Select: string;
  ScdID: number;
  ScdiDLineNo: number;
  RhRoute: string;
  PlanGrade: string;
  PlanWidth: number;
  PlanThick: number;
  Planneddate: string;
  HeatNo: null;
  HeatStatus: string;
}

@Component({
  selector: 'app-mattable',
  templateUrl: './mattable.component.html',
  styleUrls: ['./mattable.component.css'],
})
export class MattableComponent implements AfterViewInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ELEMENT_DATA: PeriodicElement[] | undefined = [
    {
      Select: '',
      ScdID: 11234,
      ScdiDLineNo: 1,
      PlanGrade: 'JHBGVF',
      RhRoute: '',
      PlanWidth: 989,
      PlanThick: 78,
      Planneddate: '12/2/2022',
      HeatNo: null,
      HeatStatus: 'dispatch',
    },
    {
      Select: '',
      ScdID: 67899,
      ScdiDLineNo: 2,
      PlanGrade: 'JHBGVF',
      RhRoute: '',
      PlanWidth: 56,
      PlanThick: 798,
      Planneddate: '12/9/2023',
      HeatNo: null,
      HeatStatus: 'not dispatch',
    },
    {
      Select: '',
      ScdID: 78888,
      ScdiDLineNo: 1,
      PlanGrade: 'JHBGHU',
      RhRoute: '',
      PlanWidth: 454,
      PlanThick: 783,
      Planneddate: '1/5/2022',
      HeatNo: null,
      HeatStatus: 'dispatch',
    },

    // { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    // { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    // { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    // { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    // { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    // { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    // { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    // { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    // { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    // { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    // { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    // { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    // { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    // { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    // { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    // { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    // { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    // { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
  ];
  displayedColumns: string[] = [
    'Select',
    'ScdID',
    'ScdiDLineNo',
    'PlanGrade',
    'RhRoute',
    'PlanWidth',
    'PlanThick',
    'Planneddate',
    'HeatNo',
    'HeatStatus',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  // ELEMENT_DATA: PeriodicElement[] | undefined;
  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource);
  }
}
