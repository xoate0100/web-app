import { TestBed } from '@angular/core/testing';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { IconsModule } from './icons.module';

describe('IconsModule', () => {
  it('should register icons used across the application', () => {
    TestBed.configureTestingModule({
      imports: [IconsModule],
    });
    const library = TestBed.inject(FaIconLibrary);
    expect(library.getIconDefinition('fas', 'user')?.iconName).toBe('user');
    expect(library.getIconDefinition('fas', 'lock')?.iconName).toBe('lock');
  });
});
