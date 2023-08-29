import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserinfoStateService } from 'src/app/shared/services/userinfo-state.service';
import { agentMenuList } from 'src/app/shared/utils/statick-data';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss'],
})
export class AgentComponent implements OnInit {
  menuList: any;
  constructor(
    private NormalAuth: AuthService,
    private UserinfoStateService: UserinfoStateService
  ) {

  }
  ngOnInit() {
    this.menuList = agentMenuList;
    let id = this.NormalAuth.authInfo().id;
    if (id) {
      this.UserinfoStateService.getProfileInfo(id, 'agent');
    }
  }


}
