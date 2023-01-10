import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';

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
      PlanGrade: 'ghhgg',
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
      PlanGrade: 'hhhh',
      RhRoute: '',
      PlanWidth: 454,
      PlanThick: 783,
      Planneddate: '1/5/2022',
      HeatNo: null,
      HeatStatus: 'dispatch',
    },
    {
      Select: '',
      ScdID: 78888,
      ScdiDLineNo: 1,
      PlanGrade: 'oiijmn',
      RhRoute: '',
      PlanWidth: 454,
      PlanThick: 783,
      Planneddate: '1/5/2022',
      HeatNo: null,
      HeatStatus: 'dispatch',
    },
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
    'RhRoute',
    'PlanWidth',
    'PlanThick',
    'Planneddate',
    'HeatNo',
    'HeatStatus',
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

  nameFilter = new FormControl('');
  idFilter = new FormControl('');
  colourFilter = new FormControl('');
  petFilter = new FormControl('');
  dataSource = new MatTableDataSource();
  filterValues = {
    ScdID: '',
    ScdiDLineNo: '',
    PlanGrade: '',
    PlanWidth: '',
    PlanThick: '',
    HeatStatus: '',
  };

  //dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);

  constructor() {
    this.dataSource.data = this.ELEMENT_DATA;
    this.dataSource.filterPredicate = this.createFilter();
  }
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  // ELEMENT_DATA: PeriodicElement[] | undefined;
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.nameFilter.valueChanges.subscribe((name) => {
      this.filterValues.ScdID = name;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.idFilter.valueChanges.subscribe((id) => {
      this.filterValues.ScdiDLineNo = id;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.colourFilter.valueChanges.subscribe((colour) => {
      this.filterValues.PlanGrade = colour;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.petFilter.valueChanges.subscribe((pet) => {
      this.filterValues.PlanWidth = pet;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource);
  }
  filterRow(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
  }
  createFilter(): (data: any, filter: string) => boolean {
    let filterFunction = function (data: any, filter: any): boolean {
      console.log('oooo', data);

      let searchTerms = JSON.parse(filter);
      console.log('searchTerms', searchTerms);
      return (
        data.ScdID.toString().toLowerCase().indexOf(searchTerms.ScdID) !== -1 &&
        data.ScdiDLineNo.toString()
          .toLowerCase()
          .indexOf(searchTerms.ScdiDLineNo) !== -1 &&
        data.PlanGrade.toLowerCase().indexOf(searchTerms.PlanGrade) !== -1 &&
        data.PlanWidth.toString()
          .toLowerCase()
          .indexOf(searchTerms.PlanWidth) !== -1
      );
    };
    return filterFunction;
  }
}
