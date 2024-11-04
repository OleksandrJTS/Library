import { Component } from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatListItem, MatNavList} from "@angular/material/list";

@Component({
  selector: 'app-left-menu',
  standalone: true,
  imports: [
    MatButton, MatIcon, MatNavList, MatListItem, MatIconButton
  ],
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.scss'
})
export class LeftMenuComponent {

}
