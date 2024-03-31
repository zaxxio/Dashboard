import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatLabel} from "@angular/material/form-field";


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  status: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, status: "COMPLETE", symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, status: "COMPLETE", symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, status: "COMPLETE", symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, status: "COMPLETE", symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, status: "COMPLETE", symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, status: "COMPLETE", symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, status: "COMPLETE", symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, status: "COMPLETE", symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, status: "COMPLETE", symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, status: "COMPLETE", symbol: 'Ne'},
];

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrl: './submission.component.css'
})
export class SubmissionComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'status', 'symbol', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null; // Assuming you might have a sort as well

  ngOnInit() {
    // It's generally empty or used for other initializations not related to @ViewChild
  }


  applyFilter(filterValue: any) {
    this.dataSource.filter = (<HTMLInputElement>filterValue.target).value.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort; // This line assumes you're using sorting
  }
}
