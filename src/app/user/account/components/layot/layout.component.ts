import { Component } from "@angular/core";

@Component({
  selector: 'layout-component',
  templateUrl: './layout.component.html',
  styleUrls: ['./styles/layout.style.scss']
})

export class LayoutComponent {
  currentComponent!: string;

}
