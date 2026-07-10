/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

/** Custom Services */
import { SettingsService } from 'app/settings/settings.service';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { MatOption } from '@angular/material/autocomplete';

/**
 * Server Selector Component
 */
@Component({
    selector: 'mifosx-server-selector',
    templateUrl: './server-selector.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./server-selector.component.scss'],
    imports: [MatFormField, MatLabel, MatSelect, ReactiveFormsModule, NgFor, MatOption]
})
export class ServerSelectorComponent implements OnInit {

  /** Server Settings. */
  servers: string[];

  /** Server Setting */
  serverSelector =  new FormControl('');

  /**
   * @param {SettingsService} settingsService Settings Service
   */
  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.servers = this.settingsService.servers;
    this.serverSelector.patchValue(this.settingsService.server);
    this.buildDependencies();
  }

  /**
   * Subscribe to value changes.
   */
  buildDependencies() {
    this.serverSelector.valueChanges.subscribe((url: string | null) => {
      if (url) {
        this.settingsService.setServer(url);
        window.location.reload(); // refreshes the environment.ts.
      }
    });
  }

}
