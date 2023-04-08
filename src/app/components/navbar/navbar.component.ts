import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild('menuSection') menuSectionRef: ElementRef;
  @ViewChild('menuToggle') menuToggleRef: ElementRef;

  show: boolean = true;
  constructor() {
    this.menuToggleRef = new ElementRef(null)
    this.menuSectionRef = new ElementRef(null);
  }

  ngAfterViewInit() {

    const menuSection = this.menuSectionRef.nativeElement as HTMLElement;
    const menuToggle = this.menuToggleRef.nativeElement as HTMLElement;

    menuToggle.addEventListener("click", () => {
      menuSection.style.overflow = this.show ? "hidden" : "visible";
      menuSection.classList.toggle("on", this.show);
      this.show = !this.show;
    });
  }
}
