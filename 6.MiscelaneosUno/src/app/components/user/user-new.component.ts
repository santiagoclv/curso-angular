import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-user-new',
  template: `
    <p>
      user-new Works!
    </p>
  `,
  styles: []
})
export class UserNewComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.parent.params.subscribe( parametro => {
      console.log(parametro);
    });
  }

}
