import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-user-view',
  template: `
    <p>
      user-view Works!
    </p>
  `,
  styles: []
})
export class UserViewComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.parent.params.subscribe( parametro => {
      console.log(parametro);
    });
  }

}
