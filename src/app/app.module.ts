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

@NgModule({
  declarations: [
    AppComponent,
    ChatWindowComponent,
    ChatBoxComponent,
    SplashComponent,
    IntroductionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
