import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ViewProductItem {
  name: string;
  quantity: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ViewProductItem[] = [
  {quantity: 10, name: 'Hydrogen'},
  {quantity: 21, name: 'Helium'},
  {quantity: 35, name: 'Lithium'},
  {quantity: 14, name: 'Beryllium'},
  {quantity: 55, name: 'Boron'},
  {quantity: 63, name: 'Carbon'},
  {quantity: 778, name: 'Nitrogen'},
  {quantity: 82, name: 'Oxygen'},
  {quantity: 90, name: 'Fluorine'},
  {quantity: 12050, name: 'Neon'},
  {quantity: 161, name: 'Sodium'},
  {quantity: 1202, name: 'Magnesium'},
  {quantity: 2513, name: 'Aluminum'},
  {quantity: 314, name: 'Silicon'},
  {quantity: 815, name: 'Phosphorus'},
  {quantity: 1326, name: 'Sulfur'},
  {quantity: 127, name: 'Chlorine'},
  {quantity: 218, name: 'Argon'},
  {quantity: 319, name: 'Potassium'},
  {quantity: 20, name: 'Calcium'},
];

/**
 * Data source for the ViewProduct view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ViewProductDataSource extends DataSource<ViewProductItem> {
  data: ViewProductItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ViewProductItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: ViewProductItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ViewProductItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'quantity': return compare(+a.quantity, +b.quantity, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
