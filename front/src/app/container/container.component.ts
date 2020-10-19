import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Coordinate } from '../services/interfaces';
declare let h337: any;

const MOUSE_CIRCLE_RADIUS = 25;
const MOUSE_CIRCLE_TRANSL_RADIUS = 10;
const HEATMAP_HEIGHT = 400;
const HEATMAP_WIDTH = 1000;

@Component({
  selector: 'app-container',
  template: `
   <nb-layout windowMode>
      <nb-layout-header fixed>
        <app-header></app-header>
      </nb-layout-header>
      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
      <nb-menu tag="menu" [items]="menu" style="margin-left: -18px;"></nb-menu>
      </nb-sidebar>
      <nb-layout-column id="heatmapContainer" #heatmapContainer>
      <!-- <div > -->
      <router-outlet></router-outlet>
      <!-- </div> -->
      <!-- <nb-icon icon="eye" pack="fa" class="iconEye" (click)="viewHeatMap()"></nb-icon> -->
      </nb-layout-column>
      <nb-layout-footer fixed>
        <app-footer></app-footer>
      </nb-layout-footer>
    </nb-layout>
    `,
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, AfterViewInit {
  @ViewChild('heatmapContainer', { static: false, read: ElementRef }) heatmapContainer: ElementRef;
  gradientCfg = { // heatmap gradient color range
    0.15: '#6ad180', // green
    0.25: '#7cd573',
    0.35: '#90d865',
    0.45: '#a4da57',
    0.55: '#badc48',
    0.65: '#c9cf35',
    0.75: '#d6c226',
    0.80: '#e2b41c',
    0.85: '#e2961d',
    0.90: '#dd7826',
    0.95: '#d25c30',
    1.0: '#c24039' // highest red
  };
  heatmap: any = null;
  coordinates: Array<Coordinate> = [];
  selectedCoordinates: Array<Coordinate> = [];
  container: HTMLElement;

  showHeatMap = false;
  positionContainer: any;
  // heatmapContainer: HTMLElement;
  // tooltip: HTMLElement;
  // isMouseInsideHeatmap = false;
  // mouseCircle: HTMLElement;
  // xMinCoord: number;
  // yMinCoord: number;
  // xMaxCoord: number;
  // yMaxCoord: number;


  menu: any = [];
  ngOnInit() {

    // document.addEventListener('wheel', (e) => {

    // console.log(e, 'scrollll');
    // });

    this.menu = [
      {
        title: 'Home',
        link: '/container/main',
        icon: 'calendar-outline'
      },
      {
        title: 'Puntos',
        link: '/container/puntos',
        icon: 'calendar-outline'
      }
    ];
  }

  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.heatMap();
    // }, 2000);

  }

  mouseCircleClick(evt: any): void {
    console.log(evt);
    const top = document.querySelector('.scrollable-container').scrollTop;

    this.coordinates.push({
      // x: evt.layerX,
      // y: evt.layerY,
      x: evt.x - this.positionContainer.x,
      y: (evt.y - this.positionContainer.y) + top,
      value: 1,
      percentageX: ((evt.x - this.positionContainer.x) / this.positionContainer.width) + 0.02,
    });
    console.log(evt.x - this.positionContainer.x, ((evt.x - this.positionContainer.x) / this.positionContainer.width));
    this.heatmap.setData({ max: 10, data: this.coordinates });
    // this.heatmap.addData({
    //   x: evt.layerX,
    //   y: evt.layerY,
    //   value: 1
    // });

  }

  heatMap() {
    this.container = this.heatmapContainer.nativeElement as HTMLElement;
    this.positionContainer = this.container.getBoundingClientRect();
    const heatmapConfig = {
      container: this.container,
      opacity: .8,
      radius: 10,
      visible: true,
      gradient: this.gradientCfg,
      backgroundColor: 'inherit'
    };
    this.heatmap = h337.create(heatmapConfig);
    console.log(this.positionContainer);

    setTimeout(() => {
      const temp = this.container.querySelector('.heatmap-canvas');
      temp.setAttribute('style', 'display: none; top: 0; position: absolute; left:0; background-color: inherit');
    }, 2000);


    // create instance
    // var heatmapInstance = h337.create({
    //   container: document.querySelector('#heatmapContainer'),
    //   radius: 90
    // });
    // document.querySelector('.validateClick').onclick = (ev) => {
    //   heatmapInstance.addData({
    //     x: ev.layerX,
    //     y: ev.layerY,
    //     value: 1
    //   });
    // };
    // document.querySelector('.scrollable-container').scroll = (ev) => {
    // console.log(ev, 'scrollll');
    // };


  }

  viewHeatMap() {
    const temp = this.container.querySelector('.heatmap-canvas');
    if (this.showHeatMap) {
      this.showHeatMap = false;
      temp.setAttribute('style', 'display: none; top: 0; position: absolute; left:0; background-color: inherit');
    } else {
      this.showHeatMap = true;
      temp.setAttribute('style', 'display: unset; top: 0; position: absolute; left:0; background-color: inherit');
    }
    // this.heatmap.setData({ max: 10, data: this.coordinates });


    // // if (this.render) {
    // const temp = this.container.querySelector('.heatmap-canvas');
    // //   if (this.showHeatMap) {
    // //     temp.setAttribute('style', 'display: none');
    // //     this.showHeatMap = false;
    // //   } else {
    // temp.setAttribute('style', 'display: unset; top: 0; position: absolute; left:0; background-color: inherit');
    // setTimeout(() => {
    //   this.heatmap.setData({ max: 10, data: this.coordinates });
    // }, 1000);

    // this.showHeatMap = true;
    // //   }

    // // } else {
    // //   this.heatMap();
    // //   this.render = true;
    // // }


  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.positionContainer = this.container.getBoundingClientRect();
    this.viewHeatMap();

    // console.log(this.positionContainer, 'aquí');
    setTimeout(() => {
      this.coordinates.forEach(cor => {
        cor.x = this.positionContainer.width * cor.percentageX;
      });
      this.heatmap.setData({ max: 10, data: this.coordinates });
      this.viewHeatMap();
    }, 2000);
  }
}

