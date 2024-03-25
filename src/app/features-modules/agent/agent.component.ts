import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MenuService } from 'src/app/shared/services/menu.service';
import { UserinfoStateService } from 'src/app/shared/services/states/userinfo-state.service';
import { agentMenuList } from 'src/app/shared/utils/statick-data';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss'],
})
export class AgentComponent implements OnInit {
  menuList: any;
  visiblemenu!: boolean;
  constructor(
    private NormalAuth: AuthService,
    private UserinfoStateService: UserinfoStateService,
    private menuService: MenuService
  ) {}
  ngOnInit() {
    this.menuList = agentMenuList;
    let id = this.NormalAuth.authInfo().id;
    if (id) {
      this.UserinfoStateService.getProfileInfo(id, 'agent');
    }
    this.menuService.menuVisibility$.subscribe(
      (res) => (this.visiblemenu = res)
    );
  }
}
