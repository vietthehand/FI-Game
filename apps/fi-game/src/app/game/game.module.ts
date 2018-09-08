import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { ChartsModule } from 'ng2-charts';

import { CharacterComponent } from './characters/character/character.component';
import { CharactersComponent } from './characters/characters.component';
import { EventDialogComponent } from './event-dialog/event-dialog.component';
import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { InvestmentComponent } from './investments/investment/investment.component';
import { InvestmentsComponent } from './investments/investments.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MatComponentsModule } from './mat-components/mat-components.module';
import { PlayersComponent } from './players/players.component';

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule,
    LayoutModule,
    MatComponentsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormlyModule.forChild(),
    ChartsModule
  ],
  declarations: [
    GameComponent,
    InvestmentsComponent,
    MainNavComponent,
    PlayersComponent,
    CharactersComponent,
    CharacterComponent,
    InvestmentComponent,
    EventDialogComponent
  ],
  entryComponents: [EventDialogComponent]
})
export class GameModule {}
