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
import { SearchingComponent } from './routes/searching/searching.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { ChatComponent } from './routes/chat/chat.component';

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
    ChatComponent
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
