import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeLayoutComponent } from './routingPages/home-layout/home-layout.component';
import { ExplorePageComponent } from './routingPages/explore-page/explore-page.component';
import { ShortsLayoutComponent} from './routingPages/shorts-layout/shorts-layout.component';
import {SubscriptionsLayoutComponent} from './routingPages/subscriptions-layout/subscriptions-layout.component';
import {SigninLayoutComponent} from './routingPages/signin-layout/signin-layout.component';
import {MusicComponent} from './routingPages/music/music.component';
import { AddVideoComponent } from './navigation/add-video/add-video.component';
import { AuthComponent } from './auth/auth/auth.component';

const routes: Routes = [ 
{path: '', component: HomeLayoutComponent},
{path: 'home', component: HomeLayoutComponent},
{path: 'explore', component: ExplorePageComponent},
{path: 'shorts', component: ShortsLayoutComponent},
{path: 'subs' , component: SubscriptionsLayoutComponent},
{path: 'signIn', component: SigninLayoutComponent},
{path: 'music', component: MusicComponent},
{path: 'admin', component: AddVideoComponent},
{path: 'auth', component: AuthComponent}

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }