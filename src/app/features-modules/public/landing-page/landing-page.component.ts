import { Component, OnInit  } from '@angular/core';
import 'intersection-observer';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit{
  private observer: IntersectionObserver | undefined;
  section1: boolean= false;
  section2: boolean= false;
  section3: boolean= false;
  model:any
  ngOnInit() {
    this.model =  {
      firstname: {
        type: "text",
        value: "",
        label: "FirstName",
        rules: {
          required: true,
        }
      },
      lastname: {
        type: "text",
        value: "",
        label: "LastName",
        rules: {
          required: true,
        }
      },
      address: {
        type: "text",
        value: "",
        label: "Address",
        rules: {
          required: true,
        }
      },
      age: {
        type: "number",
        value: "",
        label: "age",
        rules: {
          required: true,
        }
      },
      birthDay: {
        type: "date",
        value: "",
        label: "Birthday",
        rules: {
          required: true,
        }
      },


      
    
  }
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          switch (sectionId) {
            case 'section1':
              this.renderSection1();
              break;
            case 'section2':
              this.renderSection2() 
              break;
            case 'section3':
              this.renderSection3() 
              break;
            // Add more cases for additional sections
          }
        }
      });
    });

    // Start observing each section placeholder
    const section1Placeholder = document.getElementById('section1');
    if (section1Placeholder) {
      this.observer.observe(section1Placeholder);
    }
    const section2Placeholder = document.getElementById('section2');
    if (section2Placeholder) {
      this.observer.observe(section2Placeholder);
    }
    const section3Placeholder = document.getElementById('section3');
    if (section3Placeholder) {
      this.observer.observe(section3Placeholder);
    }
    // Add more observers for additional sections
  }

  renderSection1() {
    if (this.section1) {
      return
    }else{
      this.section1 = true
      console.log("show one");
      // Code for rendering and functionality of section 1
    }
  }
  renderSection2() {
    if (this.section2) {
      return
    }else{
      this.section2 = true
      console.log("show 2");
      // Code for rendering and functionality of section 2
    }
  }
  renderSection3() {
    if (this.section3) {
      return
    }else{
      this.section3 = true
      console.log("show 3");
      // Code for rendering and functionality of section 3
    }
  
  }
}
