import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { ColyseusService } from './services/colyseus/colyseus.service';
import { SplashComponent } from './routes/splash/splash.component';
import { IntroductionComponent } from './routes/introduction/introduction.component';
import { EnterNameComponent } from './routes/enter-name/enter-name.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { ChatComponent } from './routes/chat/chat.component';
import { SearchingComponent } from './components/searching/searching.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ChatWindowComponent,
    ChatBoxComponent,
    SplashComponent,
    IntroductionComponent,
    EnterNameComponent,
    SearchingComponent,
    TopNavComponent,
    ChatComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
