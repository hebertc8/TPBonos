import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThemeModule } from './nebular/@theme/theme.module';
import { NebularModule } from './nebular/nebular.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientXsrfModule } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import { MainComponent } from './container/main/main.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './container/footer/footer.component';
import { HeaderComponent } from './container/header/header.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DialogUpdateComponent } from './container/main/dialogs/dialog-update/dialog-update.component';
import { ErrorInterceptor } from './services/error-interceptor';
import { NbSidebarService, NbMenuService, NbDialogModule, NbIconModule } from '@nebular/theme';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MomentPipe } from './services/pipes/moment.pipe';
import { PuntosComponent } from './container/puntos/puntos.component';
import { ConfiguracionPuntosComponent } from './container/configuracionPuntos/configuracionPuntos.component';

// Calendar
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Angular material
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ValidationsPuntosDirective } from './validations/validations-puntos.directive';


@NgModule({
  exports: [
    MatDialogModule,
    MatIconModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    ContainerComponent,
    FooterComponent,
    HeaderComponent,
    DialogUpdateComponent,
    MomentPipe,
    PuntosComponent,
    ConfiguracionPuntosComponent,
    ValidationsPuntosDirective,
  ],
  entryComponents: [
    //...
    ConfiguracionPuntosComponent,
    //...
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbEvaIconsModule,
    NbIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'CSRF-Token',
    }),
    Ng2SmartTableModule,
    NebularModule,
    ThemeModule.forRoot(),
    CarouselModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    NgbModule,
    DragDropModule,
    MatBottomSheetModule,
    NbDialogModule.forRoot(),
    MatIconModule, //Icon

  ],
  providers: [
    NbSidebarService, NbMenuService, MomentPipe,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
