import {Component} from '@angular/core';
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {LeftMenuService} from "../../services/left-menu.service";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-top-toolbar',
  standalone: true,
  imports: [
    MatToolbar, MatToolbarRow, MatIconButton, MatIcon, MatTooltip
  ],
  templateUrl: './top-toolbar.component.html',
  styleUrl: './top-toolbar.component.scss'
})
export class TopToolbarComponent {
  constructor(public leftMenuService: LeftMenuService) { }
}
