import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandsComponent } from './components/commands/commands.component';
import { HomeComponent } from './components/home/home.component';
import { DonateComponent } from './components/donate/donate.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { MerchComponent } from './components/merch/merch.component';
import { OthersComponent } from './components/others/others.component';
import { SocialsComponent } from './components/socials/socials.component';
import { StreamComponent } from './components/stream/stream.component';
import { VodsComponent } from './components/vods/vods.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { RouletteComponent } from './components/roulette/roulette.component';
import { RouletteResultsComponent } from './components/roulette-results/roulette-results.component';
import { RecordsComponent } from './components/records/records.component';
import { TriviaComponent } from './components/trivia/trivia.component';
import { LandingComponent } from './components/landing/landing.component';
import { CoinsComponent } from './components/coins/coins.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'commands', component: CommandsComponent },
  { path: 'stream', component: StreamComponent },
  { path: 'vods', component: VodsComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'merch', component: MerchComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'socials', component: SocialsComponent },
  { path: 'recommended', component: OthersComponent },
  { path: 'widgets', component: WidgetsComponent },
  { path: 'widgets/roulette', component: RouletteComponent },
  { path: 'roulette', component: RouletteResultsComponent },
  { path: 'records', component: RecordsComponent },
  { path: 'trivia', component: TriviaComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'coins', component: CoinsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  CommandsComponent,
  HomeComponent,
  DonateComponent,
  LeaderboardComponent,
  MerchComponent,
  OthersComponent,
  SocialsComponent,
  StreamComponent,
  VodsComponent,
  RouletteResultsComponent,
  RecordsComponent,
  TriviaComponent,
  LandingComponent,
  CoinsComponent
];
