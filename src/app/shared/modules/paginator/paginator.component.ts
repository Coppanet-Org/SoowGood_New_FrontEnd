import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  pageSizeValues = [10, 25, 50, 75, 100];

  @Input() public collectionSize:any;
  @Input() public pageSize:any = this.pageSizeValues[1];
  @Input() public page = 1;

  @Output() public pageChange = new EventEmitter();
  @Output() public pageSizeChange = new EventEmitter();

  totalPageCount = 1;

  constructor() { }

  ngOnInit() {
    this.totalPageCount = Math.ceil(this.collectionSize / this.pageSize);
  }

  pageChanged($event:any) {
    this.pageChange.emit($event);
  }

  pageSizeChanged($event:any) {
    this.pageSizeChange.emit($event);
    this.totalPageCount = Math.ceil(this.collectionSize / this.pageSize);
  }
}
