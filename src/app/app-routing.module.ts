import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { IntroductionComponent } from './routes/introduction/introduction.component';
import { SplashComponent } from './routes/splash/splash.component';

const routes: Routes = [
  { path: '', component: SplashComponent },
  { path: 'intro', component: IntroductionComponent },
  { path: 'chat', component: ChatWindowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
