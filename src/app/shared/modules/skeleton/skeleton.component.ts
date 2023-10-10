import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements OnInit {
@Input() data:any
skeletonArray: any[] = [];

  constructor() { }

  ngOnInit() {
    this.skeletonArray = new Array(this.data);

    console.log(this.skeletonArray)
    
  }

}
