import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-user-edit',
  template: `
    <p>
      user-edit Works!
    </p>
  `,
  styles: []
})
export class UserEditComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.parent.params.subscribe( parametro => {
      console.log(parametro);
    });
  }

}
