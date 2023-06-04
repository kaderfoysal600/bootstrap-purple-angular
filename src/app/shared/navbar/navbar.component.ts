import { Component, OnInit } from "@angular/core";
// import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  // providers: [NgbDropdownConfig]
})
export class NavbarComponent implements OnInit {
  public iconOnlyToggled = false;
  public sidebarToggled = false;
  public isDropdownOpen = false;
  public isDropdownOpen2 = false;
  public isDropdownOpen3 = false;
  constructor() {
    // config: NgbDropdownConfig
    // config.placement = 'bottom-right';
  }

  ngOnInit() {}

  // toggle sidebar in small devices
  toggleOffcanvas() {
    document.querySelector(".sidebar-offcanvas").classList.toggle("active");
  }

  // toggle sidebar
  toggleSidebar() {
    let body = document.querySelector("body");
    if (
      !body.classList.contains("sidebar-toggle-display") &&
      !body.classList.contains("sidebar-absolute")
    ) {
      this.iconOnlyToggled = !this.iconOnlyToggled;
      if (this.iconOnlyToggled) {
        body.classList.add("sidebar-icon-only");
      } else {
        body.classList.remove("sidebar-icon-only");
      }
    } else {
      this.sidebarToggled = !this.sidebarToggled;
      if (this.sidebarToggled) {
        body.classList.add("sidebar-hidden");
      } else {
        body.classList.remove("sidebar-hidden");
      }
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.isDropdownOpen2 = false;
    this.isDropdownOpen3 = false;
    console.log("drop1 clicked");
  }
  toggleDropdown2() {
    this.isDropdownOpen2 = !this.isDropdownOpen2;
    this.isDropdownOpen = false;
    this.isDropdownOpen3 = false;
    console.log("drop2 clicked");
  }
  toggleDropdown3() {
    this.isDropdownOpen3 = !this.isDropdownOpen3;
    this.isDropdownOpen = false;
    this.isDropdownOpen2 = false;
    console.log("drop3 clicked");
  }

  // toggle right sidebar
  // toggleRightSidebar() {
  //   document.querySelector('#right-sidebar').classList.toggle('open');
  // }
}
