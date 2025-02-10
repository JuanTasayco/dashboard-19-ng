import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar-mobile',
  imports: [],
  templateUrl: './sidebar-mobile.component.html',
  styleUrl: './sidebar-mobile.component.scss'
})
export class SidebarMobileComponent implements AfterViewInit, OnInit {
  @ViewChild("sidebarComponent") sidebarComponent !: ElementRef;
  @ViewChild("buttonActionSidebar") buttonActionSidebar !: ElementRef;
  previousWidth?: number;
  backdropElement?: any;
  ngAfterViewInit(): void {
    this.backdropElement = document.querySelector('.offcanvas-backdrop');
  }

  ngOnInit(): void {

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const screenWidth = event.target.innerWidth;
    const backdrop = document.querySelector('.offcanvas-backdrop');

    if (!this.previousWidth) {
      this.previousWidth = screenWidth;
    } else {
      if (screenWidth <= 767 && this.previousWidth > 767) {
        if (!backdrop) {
          this.buttonActionSidebar.nativeElement.click();
          this.renderer.removeClass(this.sidebarComponent.nativeElement, "show");
        }
        this.buttonActionSidebar.nativeElement.click();
      }

      if (screenWidth > 767 && this.previousWidth <= 767) {

        this.renderer.addClass(this.sidebarComponent.nativeElement, "show");
        if (backdrop) {
          this.renderer.removeChild(backdrop.parentNode, backdrop);
        }
      }

      this.previousWidth = screenWidth;
    }


  }

  constructor(private renderer: Renderer2) { }

}
