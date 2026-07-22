import { AnimacionesService } from './service/animaciones.service';
import { NgModule } from '@angular/core';
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
import { CuevaComponent } from './cueva/cueva.component';
import { CharacterComponent } from './character/character.component';
import { PragmifyComponent } from './pragmify/pragmify.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { PragmifyAccessGuard } from './guard/pragmify-access.guard';

const routes : Routes = [
  {path:'', redirectTo:'/inicio', pathMatch:'full'},
  {path:'inicio', component: InicioComponent, canActivate: [PragmifyAccessGuard]},
  {path:'pragmify', component: PragmifyComponent, canActivate: [PragmifyAccessGuard]},
  {path:'privacy', component: PrivacyComponent, canActivate: [PragmifyAccessGuard]},
  {path:'terms', component: TermsComponent, canActivate: [PragmifyAccessGuard]},
  {path:'emprendimientos', component: EmprendimientosComponent, canActivate: [PragmifyAccessGuard]},
  {path:'programacion', component: ProgramacionComponent, canActivate: [PragmifyAccessGuard]},
  {path:'twitch', component: TwitchComponent, canActivate: [PragmifyAccessGuard]},
  {path:'formacion', component: FormacionYProyectosComponent, canActivate: [PragmifyAccessGuard]}
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
    CuevaComponent,
    CharacterComponent,
    PragmifyComponent,
    PrivacyComponent,
    TermsComponent
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
