import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { StreamComponent } from './components/stream/stream.component';
import { VodsComponent } from './components/vods/vods.component';
import { CommandsComponent } from './components/commands/commands.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { MerchComponent } from './components/merch/merch.component';
import { DonateComponent } from './components/donate/donate.component';
import { SocialsComponent } from './components/socials/socials.component';
import { OthersComponent } from './components/others/others.component';
import { FooterComponent } from './components/footer/footer.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { RouletteComponent } from './components/roulette/roulette.component';
import { RouletteResultsComponent } from './components/roulette-results/roulette-results.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StreamComponent,
    VodsComponent,
    CommandsComponent,
    LeaderboardComponent,
    MerchComponent,
    DonateComponent,
    SocialsComponent,
    OthersComponent,
    FooterComponent,
    WidgetsComponent,
    RouletteComponent,
    RouletteResultsComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
