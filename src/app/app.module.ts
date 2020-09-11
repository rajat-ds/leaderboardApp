import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { AddleaderComponent } from './addleader/addleader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormControl ,ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,
    AddleaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormControl,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AddleaderComponent]
})
export class AppModule { }
