import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SectionComponent } from './components/section/section.component';
import { SkillsComponent } from './components/skills/skills.component';
import { RepoCardComponent } from './components/repo-card/repo-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SectionComponent,
    SkillsComponent,
    RepoCardComponent,
    FooterComponent,



  ],
  imports: [
    BrowserModule, BrowserAnimationsModule
  ], exports: [

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
