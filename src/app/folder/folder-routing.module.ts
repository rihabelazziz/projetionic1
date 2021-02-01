import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {
  constructor(public router:Router){}
  onGoToAppareils() {
    return this.router.navigateByUrl('\appareils');
  }
}
