import { AnimacionesService } from './service/animaciones.service';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { EmprendimientosComponent } from './emprendimientos/emprendimientos.component';
import {RouterModule, Routes} from '@angular/router';
import { AnimacionesComponent } from './animaciones/animaciones.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ProgramacionComponent } from './programacion/programacion.component';
import { TwitchComponent } from './twitch/twitch.component';
import { ReproductorTwitchComponent } from './reproductor-twitch/reproductor-twitch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormacionYProyectosComponent } from './formacion-yproyectos/formacion-yproyectos.component';
import { InformacionPersonalComponent } from './informacion-personal/informacion-personal.component';

const routes : Routes = [
  {path:'', redirectTo:'/inicio', pathMatch:'full'},
  {path:'inicio', component: InicioComponent},
  {path:'emprendimientos', component: EmprendimientosComponent},
  {path:'programacion', component: ProgramacionComponent},
  {path:'twitch', component: TwitchComponent},
  {path:'formacion', component: FormacionYProyectosComponent},
  {path: 'informacion-personal', component: InformacionPersonalComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    EmprendimientosComponent,
    AnimacionesComponent,
    FooterComponent,
    ProgramacionComponent,
    TwitchComponent,
    ReproductorTwitchComponent,
    FormacionYProyectosComponent,
    InformacionPersonalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [AnimacionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
