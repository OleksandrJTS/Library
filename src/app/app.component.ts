import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";
import {LeftMenuComponent} from "./components/left-menu/left-menu.component";
import {LeftMenuService} from "./services/left-menu.service";
import {NgClass} from "@angular/common";
import {TopBarComponent} from "./components/top-bar/top-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatDrawerContainer, MatDrawer, MatDrawerContent, LeftMenuComponent, NgClass, TopBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // title = 'library';

  constructor(public leftMenuService: LeftMenuService) { }
}
