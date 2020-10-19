import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }


  get() {
    const path = environment.apiUrl + '/api/sqlget';
    return this.http.post(path, {});
  }

  update(data, request) {
    const path = environment.apiUrl + '/api/sql' + request;
    return this.http.post(path, data);
  }

  refreshSession(refreshToken) {
    const path = environment.apiUrl + '/api/refreshToken';
    return this.http.post(path, { refreshToken });
  }

  requestGeneralTpPoints(body, type) {
    const path = environment.apiUrl + '/api/' + environment.routes[type];
    return this.http.post(path, body);

  }

  getInfoLob(IdccmsAgente) {
    const path = environment.apiUrl + '/api/sqlFillLob'; /*Ruta del SP*/
    return this.http.post(path, { Idccms: IdccmsAgente });
  }

  getInfoSubLob(idLob) {
    const path = environment.apiUrl + '/api/sqlFillSubLob'; /*Ruta del SP*/
    return this.http.post(path, { IdLob: idLob });
  }

  getInfoRol(idLob, idSublob) {
    const path = environment.apiUrl + '/api/sqlFillRol'; /*Ruta del SP*/
    return this.http.post(path, { IdLob: idLob, IdSubLob: idSublob });
  }

  getInfoPeriod(idLob, idSubLob, idRole) {
    const path = environment.apiUrl + '/api/sqlFillPeriod'; /*Ruta del SP*/
    return this.http.post(path, { IdLob: idLob, IdSubLob: idSubLob, IdRol: idRole });
  }

  getInfoTenure(idLob, idSubLob, idRole, idPeriod) {
    const path = environment.apiUrl + '/api/sqlFillTenure'; /*Ruta del SP*/
    return this.http.post(path, { IdLob: idLob, IdSubLob: idSubLob, IdRol: idRole, IdPeriod: idPeriod });
  }

  getInfoBonoMax(idLob, idSubLob, idRole, idPeriod,idTenure) {
    const path = environment.apiUrl + '/api/sqlFillBonoMax'; /*Ruta del SP*/
    return this.http.post(path, { IdLob: idLob, IdSubLob: idSubLob, IdRol: idRole, IdPeriod: idPeriod, IdTenure:idTenure });
  }

  getInfoGateWays(idLob, idSubLob, idRole, idPeriod, idTenure) {
    const path = environment.apiUrl + '/api/sqlFillGateways'; /*Ruta del SP*/
    return this.http.post(path, { IdLob: idLob, IdSubLob: idSubLob, IdRol: idRole, IdPeriod: idPeriod, IdTenure:idTenure });
  }

  getInfoThreshold(idLob, idSubLob, idRole, idPeriod, idTenure) {
    const path = environment.apiUrl + '/api/sqlFillThresholds'; /*Ruta del SP*/
    return this.http.post(path, { IdLob: idLob, IdSubLob: idSubLob, IdRol: idRole, IdPeriod: idPeriod, IdTenure:idTenure });
  }

  getInfoModifiers(idLob, idSubLob, idRole, idPeriod, idTenure) {
    const path = environment.apiUrl + '/api/sqlFillModifiers'; /*Ruta del SP*/
    return this.http.post(path, { IdLob: idLob, IdSubLob: idSubLob, IdRol: idRole, IdPeriod: idPeriod, IdTenure:idTenure });
  }

  getInfoGlobalModifiers(idLob, idSubLob, idRole, idPeriod, idTenure) {
    const path = environment.apiUrl + '/api/sqlFillGlobalModifiers'; /*Ruta del SP*/
    return this.http.post(path, { IdLob: idLob, IdSubLob: idSubLob, IdRol: idRole, IdPeriod: idPeriod, IdTenure:idTenure });
  }

  getInfoUnitPayment(idLob, idSubLob, idRole, idPeriod, idTenure) {
    const path = environment.apiUrl + '/api/sqlFillUnitPayment'; /*Ruta del SP*/
    return this.http.post(path, { IdLob: idLob, IdSubLob: idSubLob, IdRol: idRole, IdPeriod: idPeriod, IdTenure:idTenure });
  }

  getInfoKpiName(IdLocation) {
    const path = environment.apiUrl + '/api/sqlFillKpiName'; /*Ruta del SP*/
    return this.http.post(path, {idLocation:IdLocation});
  }

  saveGateWay(IdLocation,IdRole,IdPeriod,IdTenure) {
    const path = environment.apiUrl + '/api/sqlSaveKpi'; /*Ruta del SP*/
    return this.http.post(path, {idLocation:IdLocation, idRole:IdRole, idPeriod:IdPeriod, idTenure: IdTenure});
  }

  // [Str].[Sp_Gateways_Import_data] @ID_Location INT, @ID_ROLE INT, @ID_Period INT, @ID_Tenure INT, @id_KPI INT, @TargetKPI FLOAT, @Share FLOAT

}
