import { AfterViewChecked, Component, effect, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Select } from 'primeng/select';
import { LanguageChangeService } from '../../shared/services/language-change.service';

@Component({
  selector: 'blog-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [FormsModule, Select, ReactiveFormsModule, TranslateModule, FormsModule],
})
export class NavbarComponent implements OnInit, AfterViewChecked {
  languages: { language: string; key: string }[] = [];

  formGroup: FormGroup = new FormGroup({});

  language = 'languages.select';

  constructor(
    private _translateService: TranslateService,
    private _languageChangeService: LanguageChangeService,
  ) {
    effect(() => {
      this._languageChangeService.selectedLanguage();
      this._assignLanguages();
    });
  }
  ngAfterViewChecked(): void {
    this._assignLanguages();
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      selectedLanguage: new FormControl<string | null>('en'),
    });

    this.formGroup?.valueChanges.subscribe((value) => {
      this._languageChangeService.selectedLanguage.set(value.selectedLanguage);
    });
  }

  private _assignLanguages(): void {
    this.languages = [
      { language: this._translateService.instant('languages.spanish'), key: 'es' },
      { language: this._translateService.instant('languages.english'), key: 'en' },
    ];
  }
}
