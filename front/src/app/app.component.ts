import { Component, AfterViewInit } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';
import { Coordinate } from './services/interfaces';
// declare let h337: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'skeleton';


  // gradientCfg = { // heatmap gradient color range
  //   0.15: '#6ad180', // green
  //   0.25: '#7cd573',
  //   0.35: '#90d865',
  //   0.45: '#a4da57',
  //   0.55: '#badc48',
  //   0.65: '#c9cf35',
  //   0.75: '#d6c226',
  //   0.80: '#e2b41c',
  //   0.85: '#e2961d',
  //   0.90: '#dd7826',
  //   0.95: '#d25c30',
  //   1.0: '#c24039' // highest red
  // };
  // heatmap: any = null;
  // coordinates: Array<Coordinate> = [];
  // selectedCoordinates: Array<Coordinate> = [];
  // heatmapContainer: HTMLElement;
  // tooltip: HTMLElement;
  // isMouseInsideHeatmap = false;
  // mouseCircle: HTMLElement;
  // xMinCoord: number;
  // yMinCoord: number;
  // xMaxCoord: number;
  // yMaxCoord: number;

  constructor(private iconLibraries: NbIconLibraries,
  ) {
    this.iconLibraries.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
  }

  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     this.heatMap();
  //   }, 2000);

  // }

  // mouseCircleClick(evt: any): void {
  //   console.log(evt);
  //   // this.heatmap.addData({
  //   //   x: evt.layerX,
  //   //   y: evt.layerY,
  //   //   value: 1
  //   // });
  //   this.coordinates.push({
  //     x: evt.layerX,
  //     y: evt.layerY,
  //     value: 1
  //   });
  //   this.heatmap.setData({ max: 10, data: this.coordinates });
  // }

  // heatMap() {
  //   const heatmapConfig = {
  //     container: document.querySelector('#heatmapContainer'),
  //     opacity: .8,
  //     radius: 10,
  //     visible: true,
  //     gradient: this.gradientCfg,
  //     backgroundColor: 'inherit'
  //   };
  //   this.heatmap = h337.create(heatmapConfig);
  // }
}
