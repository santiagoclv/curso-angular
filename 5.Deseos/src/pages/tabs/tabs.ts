import { Component } from '@angular/core';

import { PendientsPage } from "../pendients/pendients";
import { FinishedPage } from "../finished/finished";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendientsPage;
  tab2Root = FinishedPage;

  constructor() {

  }
}
