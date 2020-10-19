import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
// import { PuntosService } from '../services/puntos.service';
import { NbDialogRef } from '@nebular/theme';
import { Width } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import { Lob, SubLob, Rol, Tenure, Period, GateWays, ThresHold, BonoMax, Modifiers, GlobalModifiers, UnitPayment } from 'src/app/services/interfaces';
import { RequestsService } from 'src/app/services/requests.service';
import { ConfiguracionPuntosComponent } from '../configuracionPuntos/configuracionPuntos.component';
// import { PuntosService } from '../services/puntos.service';


@Component({
  selector: 'app-puntos',
  templateUrl: './puntos.component.html',
  styleUrls: ['./puntos.component.scss']
})
export class PuntosComponent implements OnInit {

  public listLob: Lob[] = [];
  public listSubLob: SubLob[] = [];
  public listRol: Rol[] = [];
  public listPeriod: Period[] = [];
  public listTenure: Tenure[] = [];
  public listBonoMax: BonoMax[] = [];
  public listGateWays: GateWays[] = [];
  public listThresHold: ThresHold[] = [];
  public listModifiers: Modifiers[] = [];
  public listGlobalModifiers: GlobalModifiers[] = [];
  public listUnitPayment: UnitPayment[] = [];
  // public listFechas: any[] = [
  //   {name:'Jan.', valor: '01'},
  //   {name:'Jan.', valor: '01'},
  //   {name:'Jan.', valor: '01'},
  //   {name:'Jan.', valor: '01'},
  //   {name:'Jan.', valor: '01'},
  //   {name:'Jan.', valor: '01'},
  //   {name:'Jan.', valor: '01'},
  //   {name:'Aug.', valor: '07'},
  //   {name:'Sept.', valor: '01'},
  //   {name:'Oct.', valor: '01'},
  //   {name:'Jan.', valor: '01'},
  //   {name:'Jan.', valor: '01'}
  // ];
  public LobSeleccionado: number;
  public SubLobSeleccionado: number;
  public RolSeleccionado: number;
  public PeriodSeleccionado: number;
  public TenureSeleccionado: number;
  public nameLob: string;
  public nameSubLob: string;
  public nameRol: string;
  public namePeriod: string;
  public nameTenure: string;
  public validacionMes: boolean = true;
  public CCMSID = '2959281';

  public height: string;
  public width: string;

  constructor(public dialog: MatDialog, private requests: RequestsService) { }

  openDialog(tipo) {
    if (tipo == 'BonoMax') {
      this.height = '518px';
      this.width = '840px';
    } else if (tipo == 'GateWays') {
      this.height = '500px';
      this.width = '1250px';
    } else if (tipo == 'ThresHold') {
      this.height = '580px';
      this.width = '950px';
    } else if (tipo =='Modifiers') {
      this.height = '600px';
      this.width = '1000x';
    } else if (tipo == 'GlobalModifiers') {
      this.height = '590px';
      this.width = '1100px';
    } else if (tipo == 'UnitPayment') {
      this.height = '550px';
      this.width = '1100px';
    }
    const dialogRef = this.dialog.open(ConfiguracionPuntosComponent, {
      height: this.height,
      width: this.width,
      data: { NameLob: this.nameLob, NameSubLob: this.nameSubLob, NameRol: this.nameRol, NamePeriod: this.namePeriod, NameTenure: this.nameTenure, Rol: this.RolSeleccionado, Period: this.PeriodSeleccionado, Tenure: this.TenureSeleccionado, tipo: tipo }

    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }


  ngOnInit(): void {
    this.loadLob();
  }

  getNameLob() {
    const pos = this.listLob.findIndex(element => element.Lob_Id = this.LobSeleccionado);
    this.nameLob = this.listLob[pos].Lob;
  }

  getNameSubLob() {
    const pos = this.listSubLob.findIndex(element => element.SubLob_Id = this.SubLobSeleccionado);
    this.nameSubLob = this.listSubLob[pos].SubLob;
  }

  getNameRol() {
    const pos = this.listRol.findIndex(element => element.Role_Id = this.RolSeleccionado);
    this.nameRol = this.listRol[pos].Role;
  }


  getNamePeriod() {
    const pos = this.listPeriod.findIndex(element => element.IdPeriod == this.PeriodSeleccionado);
    this.namePeriod = this.listPeriod[pos].Period_Name;
  }

  getNameTenure() {
    const pos = this.listTenure.findIndex(element => element.IdTenure == this.TenureSeleccionado);
    this.nameTenure = this.listTenure[pos].Tenure;
  }

  validatePeriod(){
    //0.Hacer un newDay y sacar el mes numerico
    let fechaHoy = new Date();
    let mesHoy = fechaHoy.getMonth() + 1;
    //1.Hacer findIndex de la lista del select para sacar la descripción
    const pos = this.listPeriod.findIndex(element => element.IdPeriod == this.PeriodSeleccionado);
    if (pos!=-1){
      let periodo = this.listPeriod[pos].Period_Name;
      //3.Hacerle un substring a la descripción para sacar solo el mes(Aug)
      let mesSeleccionado = parseInt(periodo.substring(0,2));
      //4.Comparar el mes Aug de la descripción con la lista de fechas para obtener el valo numerico
      //5.Realiza comparación de los dos valores numéricos
      if(mesHoy == mesSeleccionado){
        this.validacionMes = false;
      }
    }
 
  }



  loadLob() {
    this.requests.getInfoLob(this.CCMSID).subscribe((getLob: Lob[]) => {
      this.listLob = getLob;
    });
  }

  loadSubLob() {
    this.getNameLob();
    this.requests.getInfoSubLob(this.LobSeleccionado).subscribe((getSubLob: SubLob[]) => {
      this.listSubLob = getSubLob;
    });
  }

  loadRol() {
    this.getNameSubLob();
    this.requests.getInfoRol(this.LobSeleccionado, this.SubLobSeleccionado).subscribe((getRol: Rol[]) => {
      this.listRol = getRol;
    });
  }

  loadPeriod() {
    this.getNameRol();
    this.requests.getInfoPeriod(this.LobSeleccionado, this.SubLobSeleccionado, this.RolSeleccionado).subscribe((getPeriod: Period[]) => {
      //console.log(getPeriod, 'Respuesta de sp Prueba');
      this.listPeriod = getPeriod;
    });
  }

  loadTenure() {
    this.validatePeriod();
    this.getNamePeriod();
    this.requests.getInfoTenure(this.LobSeleccionado, this.SubLobSeleccionado, this.RolSeleccionado, this.PeriodSeleccionado).subscribe((getTenure: Tenure[]) => {
      //console.log(getTenure, 'Respuesta de sp Prueba');
      this.listTenure = getTenure;
    });
  }

  loadBonoMax() {
    this.getNameTenure();
    this.requests.getInfoBonoMax(this.LobSeleccionado, this.SubLobSeleccionado, this.RolSeleccionado, this.PeriodSeleccionado, this.TenureSeleccionado).subscribe((getBonoMax: BonoMax[]) => {
      //console.log(getBonoMax, 'Respuesta de sp Prueba');
      this.listBonoMax = getBonoMax;
    });
  }


  loadGateways() {
    this.requests.getInfoGateWays(this.LobSeleccionado, this.SubLobSeleccionado, this.RolSeleccionado, this.PeriodSeleccionado, this.TenureSeleccionado).subscribe((getGateWays: GateWays[]) => {
      //console.log(getGateWays, 'Respuesta de sp Prueba');
      this.listGateWays = getGateWays;
    });
  }

  loadThreshold() {
    this.requests.getInfoThreshold(this.LobSeleccionado, this.SubLobSeleccionado, this.RolSeleccionado, this.PeriodSeleccionado, this.TenureSeleccionado).subscribe((getThresHold: ThresHold[]) => {
      //console.log(getThresHold, 'Respuesta de sp Prueba');
      this.listThresHold = getThresHold;
    });
  }

  loadModifiers() {
    this.requests.getInfoModifiers(this.LobSeleccionado, this.SubLobSeleccionado, this.RolSeleccionado, this.PeriodSeleccionado, this.TenureSeleccionado).subscribe((getModifiers: Modifiers[]) => {
      //console.log(getModifiers, 'Respuesta de sp Prueba');
      this.listModifiers = getModifiers;
    });
  }

  loadGlobalModifiers() {
    this.requests.getInfoGlobalModifiers(this.LobSeleccionado, this.SubLobSeleccionado, this.RolSeleccionado, this.PeriodSeleccionado, this.TenureSeleccionado).subscribe((getGlobalModifiers: GlobalModifiers[]) => {
      //console.log(getGlobalModifiers, 'Respuesta de sp Prueba');
      this.listGlobalModifiers = getGlobalModifiers;
    });
  }

  loadGlobalUnitPayment() {
    this.requests.getInfoUnitPayment(this.LobSeleccionado, this.SubLobSeleccionado, this.RolSeleccionado, this.PeriodSeleccionado, this.TenureSeleccionado).subscribe((getUnitPayment: UnitPayment[]) => {
      //console.log(getUnitPayment, 'Respuesta de sp Prueba');
      this.listUnitPayment = getUnitPayment;
    });
  }

  execAllKPI() {
    this.loadGateways();
    this.loadThreshold();
    this.loadBonoMax();
    this.loadModifiers();
    this.loadGlobalModifiers();
    this.loadGlobalUnitPayment()
  }
}
