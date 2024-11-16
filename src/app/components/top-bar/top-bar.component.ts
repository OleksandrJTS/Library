import {Component} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatTooltip} from "@angular/material/tooltip";
import {LeftMenuService} from "../../services/left-menu.service";
import {NgClass} from "@angular/common";
import {MatFormField, MatPrefix, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    MatToolbar, MatIconButton, MatIcon, MatTooltip, NgClass, MatFormField, MatInput, MatSuffix, MatPrefix,
    FormsModule, MatFormFieldModule, MatInputModule
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  constructor(public leftMenuService: LeftMenuService) { }
}
