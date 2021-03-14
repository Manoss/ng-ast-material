import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { EvenementsTableDataSource, EvenementsTableItem } from './evenements-table-datasource';

import { EvenementDataService } from '../service/evenement-data.service';

@Component({
  selector: 'app-evenements-table',
  templateUrl: './evenements-table.component.html',
  styleUrls: ['./evenements-table.component.css']
})
export class EvenementsTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<EvenementsTableItem>;
  dataSource: EvenementsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(private evenementDataService: EvenementDataService) {
    this.dataSource = new EvenementsTableDataSource()
  }
/*
  ngOnInit(): void {
    //this.getEquipments();
    this.evenementDataService.getEvenements().subscribe(
      data => {
        this.dataSource.data = data
      }
    )
  }
*/
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
/*
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
*/
}
