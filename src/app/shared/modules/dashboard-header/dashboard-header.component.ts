
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent {

  isAuthLogin!: boolean;
  constructor(private NormalAuth: AuthService, 
    ) {}
  ngOnInit(): void {
    let id = this.NormalAuth.authInfo().id
    if (id) {
      this.isAuthLogin = true
    }else{
      this.isAuthLogin = false
    }
  
  }
  signOut(): void {
    // this.NormalAuth.signOut();
    this.NormalAuth.signOut()
  }

  // headerElement: any;
  // ngAfterViewInit() {
  //   this.headerElement = this.el.nativeElement.querySelector('.header');

  //   // Attach a scroll event listener to the window
  //   window.addEventListener('scroll', this.onScroll.bind(this));
  // }
  // onScroll(event: Event) {

  //   // Define a threshold where the header becomes sticky
  //   const threshold = 100; // Adjust this value as needed

  //   // Get the scroll position
  //   const scrollPosition = window.scrollY || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop) || 0;

    
  //   if (scrollPosition >= threshold) {
  //     this.renderer.addClass(this.headerElement, 'sticky-header');
  //   } else {
  //     this.renderer.removeClass(this.headerElement, 'sticky-header');
  //   }
  // }
}
