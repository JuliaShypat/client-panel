import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SettingsService } from '../services/settings.service';


@Injectable()
export class RegisterGuard implements CanActivate {
  constructor(
    private settingService: SettingsService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.settingService.getSettings().allowRegistration) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
