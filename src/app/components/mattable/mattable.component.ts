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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
