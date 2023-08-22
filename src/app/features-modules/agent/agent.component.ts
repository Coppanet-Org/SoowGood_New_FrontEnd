import { Component } from '@angular/core';
import { agentMenuList } from 'src/app/shared/utils/statick-data';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss'],
})
export class AgentComponent {
  menuList: any;
  constructor() {
    this.menuList = agentMenuList;
  }
}
