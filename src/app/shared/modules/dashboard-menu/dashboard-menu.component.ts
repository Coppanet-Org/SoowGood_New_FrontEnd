import { MenuService } from './../../services/menu.service';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.scss'],
})
export class DashboardMenuComponent implements OnInit {
  @Input() menuList: any = [];
  visiblemenu!: boolean;

  constructor(
    private elementRef: ElementRef,
    private menuService: MenuService,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.menuService.menuVisibility$.subscribe(
      (res) => (this.visiblemenu = res)
    );
    // this.MenuService.setMenuElementRef(this.elementRef);
  }
  // @HostListener('document:click', ['$event', '$event.target'])
  // public onClick(event: MouseEvent, targetElement: HTMLElement): void {
  //   if (!targetElement) {
  //     return;
  //   }

  //   const clickedInside = this.elementRef.nativeElement.contains(targetElement);
  //   const isMenuComponent = targetElement.classList[0] == 'card-body';
  //   const isMenuBar = targetElement.classList[0] == 'menubar';

  //   if (!isMenuComponent && isMenuBar) {
  //     this.menuService.visible(false);
  //     console.log('outside');
  //   } else {
  //     console.log('side');
  //   }
  // }
}
