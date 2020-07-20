import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorComponent } from './components/error/error.component';
import { VideoNewComponent } from './components/video-new/video-new.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { IdentityGuard } from './services/identity.guard';
import { VideoEditComponent } from './components/video-edit/video-edit.component';
import { VideoDetailComponent } from './components/video-detail/video-detail.component';


const appRoutes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'inicio/:page', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'editar-favorito/:id', component: VideoEditComponent },
  { path: 'guardar-favorito/', component: VideoNewComponent, canActivate:[IdentityGuard] },
  { path: 'video/:id', component: VideoDetailComponent },
  { path: 'ajustes', component: UserEditComponent, canActivate:[IdentityGuard] },
  { path: 'logout/:sure', component: LoginComponent },
  { path: '**', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRoutingProviders:any[]=[]
export const routing:ModuleWithProviders= RouterModule.forRoot(appRoutes)
