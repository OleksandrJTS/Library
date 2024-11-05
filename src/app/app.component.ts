import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";
import {LeftMenuComponent} from "./components/left-menu/left-menu.component";
import {LeftMenuService} from "./services/left-menu.service";
import {MatToolbar} from "@angular/material/toolbar";
import {TopToolbarComponent} from "./components/top-toolbar/top-toolbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatDrawerContainer, MatDrawer, MatDrawerContent, LeftMenuComponent, TopToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'library';

  constructor(public leftMenuService: LeftMenuService) { }
}
