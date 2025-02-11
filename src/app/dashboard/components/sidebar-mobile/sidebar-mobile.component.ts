import { AfterViewInit, Component, ElementRef, HostListener, inject, OnInit, Renderer2, signal, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar-mobile',
  imports: [RouterModule],
  templateUrl: './sidebar-mobile.component.html',
  styleUrl: './sidebar-mobile.component.scss'
})
export class SidebarMobileComponent implements AfterViewInit, OnInit {
  sidebarService = inject(SidebarService);
  @ViewChild("sidebarComponent") sidebarComponent !: ElementRef;
  @ViewChild("buttonActionSidebar") buttonActionSidebar !: ElementRef;
  @ViewChild("buttonToogleSidebar") buttonToogleSidebar !: ElementRef;
  previousWidth = signal(0);
  backdropElement?: any;

  ngAfterViewInit(): void {
    this.backdropElement = document.querySelector('.offcanvas-backdrop');
    const screenWidth = window.innerWidth;
    this.previousWidth.set(screenWidth);
    if (screenWidth > 767) {
      this.renderer.addClass(this.sidebarComponent.nativeElement, "show");
    } else {
      this.renderer.removeClass(this.sidebarComponent.nativeElement, "show");
    }
  }

  ngOnInit(): void {
    this.sidebarService.getSharingObservable.subscribe({
      next: () => {
        this.buttonToogleSidebar.nativeElement.click();
      }
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const screenWidth = event.target.innerWidth;
    const backdrop = document.querySelector('.offcanvas-backdrop');

    if (!this.previousWidth()) {
      this.previousWidth.set(screenWidth);
    } else {
      if (screenWidth <= 767 && this.previousWidth() > 767) {
        if (!backdrop) {
          this.buttonActionSidebar.nativeElement.click();
          this.renderer.removeClass(this.sidebarComponent.nativeElement, "show");
        }
        this.buttonActionSidebar.nativeElement.click();
      }

      if (screenWidth > 767 && this.previousWidth() <= 767) {

        this.renderer.addClass(this.sidebarComponent.nativeElement, "show");
        if (backdrop) {
          this.renderer.removeChild(backdrop.parentNode, backdrop);
        }
      }

      this.previousWidth.set(screenWidth);
    }


  }

  constructor(private renderer: Renderer2) { }

}
