import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { SettingsComponent } from './settings/settings.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HeaderComponent, FooterComponent, SettingsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
