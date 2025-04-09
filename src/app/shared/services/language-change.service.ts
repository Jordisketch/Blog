import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageChangeService {
  selectedLanguage = signal('en');

  constructor() {}
}
