import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { InvestmentsComponent } from './investments/investments.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatComponentsModule } from './mat-components/mat-components.module';
import { PlayersComponent } from './players/players.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './characters/character/character.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule,
    LayoutModule,
    MatComponentsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormlyModule.forChild()
  ],
  declarations: [
    GameComponent,
    InvestmentsComponent,
    MainNavComponent,
    PlayersComponent,
    CharactersComponent,
    CharacterComponent
  ]
})
export class GameModule {}
