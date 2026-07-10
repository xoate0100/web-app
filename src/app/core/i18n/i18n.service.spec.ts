import { TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';

import { extract, I18nService } from './i18n.service';

const defaultLanguage = 'en-US';
const supportedLanguages = ['en-US', 'fr-FR'];
const languageStorageKey = 'mifosXLanguage';

describe('I18nService', () => {
  let i18nService: I18nService;

  beforeEach(() => {
    localStorage.removeItem(languageStorageKey);
    TestBed.configureTestingModule({
      providers: [
        provideTranslateService({
          fallbackLang: defaultLanguage,
          lang: defaultLanguage,
        }),
        I18nService,
      ],
    });
    i18nService = TestBed.inject(I18nService);
  });

  afterEach(() => {
    localStorage.removeItem(languageStorageKey);
  });

  it('extract should return the input string unchanged', () => {
    expect(extract('Login')).toBe('Login');
  });

  it('should initialize with the default language', () => {
    i18nService.init(defaultLanguage, supportedLanguages);
    expect(i18nService.language).toBe(defaultLanguage);
  });

  it('should restore language from local storage', () => {
    localStorage.setItem(languageStorageKey, 'fr-FR');
    i18nService.init(defaultLanguage, supportedLanguages);
    expect(i18nService.language).toBe('fr-FR');
  });

  it('should switch to a supported language', () => {
    i18nService.init(defaultLanguage, supportedLanguages);
    i18nService.language = 'fr-FR';
    expect(i18nService.language).toBe('fr-FR');
    expect(localStorage.getItem(languageStorageKey)).toBe('fr-FR');
  });

  it('should fall back to default for unsupported languages', () => {
    i18nService.init(defaultLanguage, supportedLanguages);
    i18nService.language = 'de-DE';
    expect(i18nService.language).toBe(defaultLanguage);
  });
});
