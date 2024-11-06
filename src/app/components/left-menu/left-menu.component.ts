import {Component} from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatTooltip} from "@angular/material/tooltip";
import {LeftMenuService} from "../../services/left-menu.service";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-left-menu',
  standalone: true,
  imports: [
    MatButton, MatIcon, MatNavList, MatListItem, MatIconButton, MatTooltip, NgIf, NgClass
  ],
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.scss'
})

export class LeftMenuComponent {
  constructor(public leftMenuService: LeftMenuService) { }
}
