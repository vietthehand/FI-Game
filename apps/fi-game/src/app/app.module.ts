import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { GameModule } from './game/game.module';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: '', component: GameComponent }], {
      initialNavigation: 'enabled'
    }),
    GameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
