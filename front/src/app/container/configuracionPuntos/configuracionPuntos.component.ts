import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { DialogData, GateWaysTotal, KpiName, KpiName2 } from 'src/app/services/interfaces';
import { RequestsService } from 'src/app/services/requests.service';
import { validationDecimal } from 'src/app/validations/validations-puntos.directive';
// import { PuntosService } from '../services/puntos.service';


@Component({
  selector: 'app-configuracionPuntos',
  templateUrl: './configuracionPuntos.component.html',
  styleUrls: ['./configuracionPuntos.component.scss']
})
export class ConfiguracionPuntosComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog, private requests: RequestsService, @Inject(MAT_DIALOG_DATA) public data: DialogData, private toastr: NbToastrService) { }


  bonosForm = this.formBuilder.group({
    bonoMax: ['', { validators: [Validators.pattern('[0-9]+'), Validators.max(1000000), Validators.min(250000)] }],
  });

  get bonoMax() {
    return this.bonosForm.get('bonoMax');
  }

  gateWaysForm = this.formBuilder.group({
    kpiSeleccionado: [''],
    metaKpi: ['', { validators: [Validators.pattern(/^[.\d]+$/)] }],
    desempeno: ['', { validators: [Validators.pattern(/^[.\d]+$/)] }],
  });


  get kpiSeleccionado() {
    return this.gateWaysForm.get('kpiSeleccionado');
  }

  get metaKpi() {
    return this.gateWaysForm.get('metaKpi');
  }

  get desempeno() {
    return this.gateWaysForm.get('desempeno');
  }

  umbralesForm = this.formBuilder.group({
    kpiSeleccionadoHolds1: [''],
    kpiSeleccionadoHolds2: [''],
    participationHolds1: ['', { validators: [Validators.pattern(/^[.\d]+$/)] }],
    participationHolds2: ['', { validators: [Validators.pattern(/^[.\d]+$/)] }],
    inicioHold: ['', { validators: [Validators.pattern(/^[.\d]+$/)] }],
    finHold: ['', { validators: [Validators.pattern(/^[.\d]+$/)] }],
  });

  get kpiSeleccionadoHolds1() {
    return this.umbralesForm.get('kpiSeleccionadoHolds1');
  }

  get participationHolds1() {
    return this.umbralesForm.get('participationHolds1');
  }

  get kpiSeleccionadoHolds2() {
    return this.umbralesForm.get('kpiSeleccionadoHolds2');
  }

  get participationHolds2() {
    return this.umbralesForm.get('participationHolds2');
  }

  get inicioHold() {
    return this.umbralesForm.get('inicioHold');
  }

  get finHold() {
    return this.umbralesForm.get('finHold');
  }


  modifiersForm = this.formBuilder.group({
    kpiSeleccionadoMod: [''],
    inicioMod: ['', { validators: [Validators.pattern(/^[.\d]+$/)] }],
    finMod: ['', { validators: [Validators.pattern(/^[.\d]+$/)] }],
    porcIncrementoMod: ['', { validators: [Validators.pattern(/^[.\d]+$/)] }],
    valIncrementoMod: ['', { validators: [Validators.pattern(/^[.\d]+$/)] }],
  });

  get kpiSeleccionadoMod() {
    return this.modifiersForm.get('kpiSeleccionadoMod');
  }

  get inicioMod() {
    return this.modifiersForm.get('inicioMod');
  }

  get finMod() {
    return this.modifiersForm.get('finMod');
  }

  get porcIncrementoMod() {
    return this.modifiersForm.get('porcIncrementoMod');
  }

  get valIncrementoMod() {
    return this.modifiersForm.get('valIncrementoMod');
  }


  globalModifiersForm = this.formBuilder.group({
    kpiSeleccionadoGlob: [''],
    inicioGlob: ['', { validators: [Validators.pattern(/^[.\d]+$/)] }],
    finGlob: ['', { validators: [Validators.pattern(/^[.\d]+$/)] }],
    porcIncrementoGlob: ['', { validators: [Validators.pattern(/^[.\d]+$/)] }],
    valIncrementoGlob: ['', { validators: [Validators.pattern(/^[.\d]+$/)] }],
    origenMetricaGlob: ['', { validators: [Validators.pattern(/^[.\d]+$/)] }],
  });

  get kpiSeleccionadoGlob() {
    return this.globalModifiersForm.get('kpiSeleccionadoGlob');
  }

  get inicioGlob() {
    return this.globalModifiersForm.get('inicioGlob');
  }

  get finGlob() {
    return this.globalModifiersForm.get('finGlob');
  }

  get porcIncrementoGlob() {
    return this.globalModifiersForm.get('porcIncrementoGlob');
  }

  get valIncrementoGlob() {
    return this.globalModifiersForm.get('valIncrementoGlob');
  }

  get origenMetricaGlob() {
    return this.globalModifiersForm.get('origenMetricaGlob');
  }


  unitPaymentForm = this.formBuilder.group({
    kpiSeleccionadoUnit: [''],
    UnidadesUnit: ['', { validators: [Validators.pattern(/^[.\d]+$/)] }],
    valorTotalUnit: ['', { validators: [Validators.pattern(/^[.\d]+$/)] }],
  });


  get kpiSeleccionadoUnit() {
    return this.unitPaymentForm.get('kpiSeleccionadoUnit');
  }

  get UnidadesUnit() {
    return this.unitPaymentForm.get('UnidadesUnit');
  }

  get valorTotalUnit() {
    return this.unitPaymentForm.get('valorTotalUnit');
  }




  public listKpiName: KpiName[] = [];
  public listKpiName2: KpiName2[] = [];



  public idLocation = 23;
  public IdBonoMax: number = 0;
  public IdGateWay: number = 0;
  public IdThresHold1: number = 0;
  public IdThresHold2: number = 0;
  public IdModifiers: number = 0;
  public IdGlobalModifiers: number = 0;
  public IdUnitPayment: number = 0;


  public BonoMax: number;
  public KpiSeleccionado: number;
  public KpiSeleccionado2: number;
  public MetaKPI: number;
  public Desempeno: number;
  public Participation1: number;
  public Participation2: number;
  public Start: number;
  public End: number;
  public porcentajeIncremento: number;
  public valorIncremento: number;
  public origenMetrica: number;
  public unidad: number;
  public valorTotal: number;

  public Titulo: string;
  public load = false;
  public bandera = false;
  public bandera2 = false;
  public bandera3 = false;

  public listBonoMax: any[] = [];
  public listGateWays: any[] = [];
  public totalListGateWays: GateWaysTotal[] = [];
  public listThresHold1: any[] = [];
  public listThresHold2: any[] = [];
  public listModifiers: any[] = [];
  public listGlobalModifiers: any[] = [];
  public listUnitPayment: any[] = [];

  public dValorIncremento: boolean = false;

  public sumDecimal: number = 0;
  public sumPorcDecimal: number = 0;


  ngOnInit(): void {
    this.Titulo = this.data.NameLob + ' ' + '->' + ' ' + this.data.NameSubLob + ' ' + '->' + ' ' + this.data.NameRol + ' ' + '->' + ' ' + this.data.NamePeriod + ' ' + '->' + ' ' + this.data.NameTenure;
    console.log(this.Titulo);
    this.loadKpiName();
  }


  loadKpiName() {
    this.requests.getInfoKpiName(this.idLocation).subscribe((getKpiName: KpiName[]) => {
      this.listKpiName = getKpiName;
    });
  }

  //Permite agregar elementos a la tabla con el valor de Base Bono
  addBonoMax() {
    this.bandera3 = true;
    this.IdBonoMax = this.IdBonoMax + 1;
    var object = {
      IdBonoMax: this.IdBonoMax,
      BonoMax: this.bonosForm.value.bonoMax
    }
    this.listBonoMax.push(object);
    this.BonoMax = undefined;

    this.bonosForm.patchValue({
      bonoMax: ''
    });
  }

  // Elimina elementos de la tabla de Base Bono
  deleteBonoMax(item) {
    let pos = this.listBonoMax.findIndex(element => element.IdBonoMax == item.IdBonoMax);
    if (pos != -1) {
      this.listBonoMax.splice(pos, 1);
    }
  }

  // Guarda elementos en la base de datos y muestra la info en las tablas correspondientes(el código actual es un ejemplo para comprobar que funciona el botón)
  saveTotalBonos() {
    this.load = true;
    if (this.listBonoMax != null) {
      this.load = false;
      this.close();
      this.toastr.success('Datos registrados correctamente', 'Success');
    } else {
      this.load = false;
      this.toastr.danger('Datos no registrados', 'Error');
    }
  }

  //Permite agregar elementos a la tabla de GateWays con el valor de KPI, MetaKpi, Desempeño
  addGateWays() {
    let nameKpi;
    let pos = this.listKpiName.findIndex(element => element.IdKpi == this.gateWaysForm.value.kpiSeleccionado);
    if (pos != -1) {
      nameKpi = this.listKpiName[pos].KPI_Name;
    }
    this.IdGateWay = this.IdGateWay + 1;
    var object = {
      IdGateWay: this.IdGateWay,
      nameKpi: nameKpi,
      KpiSeleccionado: this.gateWaysForm.value.kpiSeleccionado,
      TargetKPI: this.gateWaysForm.value.metaKpi,
      Share: this.gateWaysForm.value.desempeno
    }
    this.listGateWays.push(object);
    this.KpiSeleccionado = undefined;
    this.MetaKPI = undefined;
    this.Desempeno = undefined;

    this.sumDecimals(this.gateWaysForm.value.desempeno, this.listGateWays);

    this.gateWaysForm.patchValue({
      kpiSeleccionado: '',
      metaKpi: '',
      desempeno: ''
    });

  }


  // Elimina elementos de la tabla de GateWays
  deleteGateWay(item) {
    let pos = this.listGateWays.findIndex(element => element.IdGateWay == item.IdGateWay);
    if (pos != -1) {
      this.listGateWays.splice(pos, 1);
    }
  }

  // Guarda elementos en la base de datos ejecutando el sp correspondiente y muestra la info en las tablas correspondientes
  saveTotalGateWays() {
    this.load = true;
    this.requests.saveGateWay(this.idLocation, this.data.Rol, this.data.Period, this.data.Tenure).subscribe((saveGateWay: GateWaysTotal[]) => {
      console.log(saveGateWay, 'Respuesta de sp Prueba');
      //this.totalListGateWays = saveGateWay;
      this.toastr.success('Datos registrados correctamente', 'Success')
      this.load = false;
      this.close();
    }, err => {
      this.load = false;
      this.toastr.warning('Datos no registrados', 'Error')
    });
  }

  //Permite agregar elementos a la tabla de Umbrales con el valor de KPI, Participación
  addThresHold1() {
    let nameKpi;
    let pos = this.listKpiName.findIndex(element => element.IdKpi == this.umbralesForm.value.kpiSeleccionadoHolds1);
    if (pos != -1) {
      nameKpi = this.listKpiName[pos].KPI_Name;
    }
    this.IdThresHold1 = this.IdThresHold1 + 1;
    var object = {
      IdThresHold1: this.IdThresHold1,
      nameKpi: nameKpi,
      KpiSeleccionado: this.umbralesForm.value.kpiSeleccionadoHolds1,
      Participation1: this.umbralesForm.value.participationHolds1,
    }
    this.listThresHold1.push(object);
    this.KpiSeleccionado = undefined;
    this.Participation1 = undefined;

    this.sumDecimals(this.umbralesForm.value.participationHolds1, this.listThresHold1);

    this.umbralesForm.patchValue({
      kpiSeleccionadoHolds1: '',
      participationHolds1: '',
    });
  }

  deleteThresHold1(item) {
    let pos = this.listThresHold1.findIndex(element => element.IdThresHold1 == item.IdThresHold1);
    if (pos != -1) {
      this.listThresHold1.splice(pos, 1);
    }
  }

  // Elimina elementos de la tabla de Umbrales
  addThresHold2() {
    let nameKpi;
    let pos = this.listKpiName.findIndex(element => element.IdKpi == this.umbralesForm.value.kpiSeleccionadoHolds2);
    if (pos != -1) {
      nameKpi = this.listKpiName[pos].KPI_Name;
    }
    this.IdThresHold2 = this.IdThresHold2 + 1;
    var object = {
      IdThresHold2: this.IdThresHold2,
      nameKpi: nameKpi,
      KpiSeleccionado2: this.umbralesForm.value.kpiSeleccionadoHolds2,
      Start: this.umbralesForm.value.inicioHold,
      End: this.umbralesForm.value.finHold,
      Participation2: this.umbralesForm.value.participationHolds2

    }
    //console.log(object);
    this.listThresHold2.push(object);
    this.KpiSeleccionado2 = undefined;
    this.Start = undefined;
    this.End = undefined;
    this.Participation2 = undefined;

    this.umbralesForm.patchValue({
      kpiSeleccionadoHolds2: '',
      participationHolds2: '',
      inicioHold: '',
      finHold: ''
    });
  }

  deleteThresHold2(item) {
    let pos = this.listThresHold2.findIndex(element => element.IdThresHold2 == item.IdThresHold2);
    if (pos != -1) {
      this.listThresHold2.splice(pos, 1);
    }
  }


  saveTotalThresHolds() {
    this.load = true;
    if (this.listThresHold2 != null) {
      this.load = false;
      this.close();
      this.toastr.success('Datos registrados correctamente', 'Success');
    } else {
      this.load = false;
      this.toastr.danger('Datos no registrados', 'Error');
    }
  }

  addModifiers() {
    let nameKpi;
    let pos = this.listKpiName.findIndex(element => element.IdKpi == this.modifiersForm.value.kpiSeleccionadoMod);
    if (pos != -1) {
      nameKpi = this.listKpiName[pos].KPI_Name;
    }
    this.IdModifiers = this.IdModifiers + 1;
    var object = {
      IdModifiers: this.IdModifiers,
      nameKpi: nameKpi,
      KpiSeleccionado: this.modifiersForm.value.kpiSeleccionadoMod,
      Start: this.modifiersForm.value.inicioMod,
      End: this.modifiersForm.value.finMod,
      porcentajeIncremento: this.modifiersForm.value.porcIncrementoMod,
      valorIncremento: this.modifiersForm.value.valIncrementoMod
    }
    //console.log(object);
    this.listModifiers.push(object);
    this.KpiSeleccionado = undefined;
    this.Start = undefined;
    this.End = undefined;
    this.porcentajeIncremento = undefined;
    this.valorIncremento = undefined;

    this.modifiersForm.patchValue({
      kpiSeleccionadoMod: '',
      inicio: '',
      fin: '',
      porcIncremento: '',
      valIncremento: ''
    });

  }

  deleteModifiers(item) {
    let pos = this.listModifiers.findIndex(element => element.IdModifiers == item.IdModifiers);
    if (pos != -1) {
      this.listModifiers.splice(pos, 1);
    }
  }


  saveTotalModifiers() {
    this.load = true;
    if (this.listModifiers != null) {
      this.load = false;
      this.close();
      this.toastr.success('Datos registrados correctamente', 'Success');
    } else {
      this.load = false;
      this.toastr.danger('Datos no registrados', 'Error');
    }
  }

  addGlobalModifiers() {
    let nameKpi;
    let pos = this.listKpiName.findIndex(element => element.IdKpi == this.globalModifiersForm.value.kpiSeleccionadoGlob);
    if (pos != -1) {
      nameKpi = this.listKpiName[pos].KPI_Name;
    }

    this.IdGlobalModifiers = this.IdGlobalModifiers + 1;
    var object = {
      IdUnitPayment: this.IdUnitPayment,
      nameKpi: nameKpi,
      kpiSeleccionado: this.globalModifiersForm.value.kpiSeleccionadoGlob,
      Start: this.globalModifiersForm.value.inicioGlob,
      End: this.globalModifiersForm.value.finGlob,
      porcentajeIncremento: this.globalModifiersForm.value.porcIncrementoGlob,
      valorIncremento: this.globalModifiersForm.value.valIncrementoGlob,
      origenMetrica: this.globalModifiersForm.value.origenMetricaGlob
    }
    //console.log(object);
    this.listGlobalModifiers.push(object);
    this.KpiSeleccionado = undefined;
    this.Start = undefined;
    this.End = undefined;
    this.porcentajeIncremento = undefined;
    this.valorIncremento = undefined;
    this.origenMetrica = undefined;

    this.globalModifiersForm.patchValue({
      kpiSeleccionadoGlob: '',
      inicioGlob: '',
      finGlob: '',
      porcIncrementoGlob: '',
      valIncrementoGlob: '',
      origenMetricaGlob: ''
    })

  }

  deleteGlobalModifiers(item) {
    let pos = this.listGlobalModifiers.findIndex(element => element.IdGlobalModifiers == item.IdGlobalModifiers);
    if (pos != -1) {
      this.listGlobalModifiers.splice(pos, 1);
    }
  }


  saveTotalGlobalModifiers() {
    this.load = true;
    if (this.listGlobalModifiers != null) {
      this.load = false;
      this.close();
      this.toastr.success('Datos registrados correctamente', 'Success');
    } else {
      this.load = false;
      this.toastr.danger('Datos no registrados', 'Error');
    }
  }

  addUnitPayment() {
    let nameKpi;
    let pos = this.listKpiName.findIndex(element => element.IdKpi == this.unitPaymentForm.value.kpiSeleccionadoUnit);
    if (pos != -1) {
      nameKpi = this.listKpiName[pos].KPI_Name;
    }
    this.IdUnitPayment = this.IdUnitPayment + 1;
    var object = {
      IdUnitPayment: this.IdUnitPayment,
      nameKpi: nameKpi,
      KpiSeleccionado: this.unitPaymentForm.value.kpiSeleccionadoUnit,
      unidad: this.unitPaymentForm.value.UnidadesUnit,
      valorTotal: this.unitPaymentForm.value.valorTotalUnit,
    }
    //console.log(object);
    this.listUnitPayment.push(object);
    this.KpiSeleccionado = undefined;
    this.unidad = undefined;
    this.valorTotal = undefined;
  }

  deleteUnitPayment(item) {
    let pos = this.listUnitPayment.findIndex(element => element.IdUnitPayment == item.IdUnitPayment);
    if (pos != -1) {
      this.listUnitPayment.splice(pos, 1);
    }
  }


  saveTotalUnitPayment() {
    this.load = true;
    if (this.listUnitPayment != null) {
      this.load = false;
      this.close();
      this.toastr.success('Datos registrados correctamente', 'Success');
    } else {
      this.load = false;
      this.toastr.danger('Datos no registrados', 'Error');
    }
  }


  validateValor() {
    console.log("Ejecución", this.modifiersForm.value.porcIncremento);
    if (this.modifiersForm.value.porcIncremento) {
      this.dValorIncremento = true;
    } else {
      this.dValorIncremento = false;
    }
  }


  sumDecimals(valor, lista) {
    this.bandera = true;
    let valorTotal = 0;
    let valorDecimal = 0;
    valorDecimal = (valor / 100);
    valorTotal = valorTotal + valorDecimal;
    this.sumDecimal += valorTotal;
    this.sumPorcDecimal = this.sumDecimal * 100;
    console.log(this.sumPorcDecimal, 'suma');
    if (this.sumPorcDecimal > 100) {
      this.bandera = false;
      this.toastr.warning('La suma no puede ser mayor a 100%', 'Advertencia');
      lista.length = 0;
      this.sumDecimal = 0;
    }

    console.log(this.listGateWays, 'resultado');

  }

  validateValuesHolds() {
    this.bandera2 = true;
    if (this.umbralesForm.value.finHold < this.umbralesForm.value.inicioHold) {
      this.bandera2 = false;
      this.toastr.warning('El valor de Fin no puede ser menor que Inicio', 'Advertencia');

      this.umbralesForm.patchValue({
        inicioHold: '',
        FinHold: '',
      });
    }
  }


  validateValuesMod() {
    this.bandera2 = true;
    if (this.umbralesForm.value.finHold < this.umbralesForm.value.inicioHold) {
      this.bandera2 = false;
      this.toastr.warning('El valor de Fin no puede ser menor que Inicio', 'Advertencia');

      this.umbralesForm.patchValue({
        inicioHold: '',
        FinHold: '',
      });
    }
  }


  submit() {
    console.log(this.bonosForm.value, 'Prueba');
  }


  close() {
    this.dialog.closeAll();
  }







}
