import { Component } from '@angular/core';
import { effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './features/sidenav/sidenav.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent } from './features/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { LanguageChangeService } from './shared/services/language-change.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SidenavComponent,
    TranslateModule,
    MatSidenavModule,
    MatButtonModule,
    NavbarComponent,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  showMenu = false;

  constructor(
    private translate: TranslateService,
    private _languageChangeService: LanguageChangeService,
  ) {
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('en');

    effect(() => {
      const selectedLanguage = this._languageChangeService.selectedLanguage();
      this.translate.use(selectedLanguage);
    });
  }
}
