import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from "./members/members.component";
import { NotfoundComponent } from "./notfound/notfound.component";
const routes = [
    { path: "", component: HomeComponent },
    { path: "members", component: MembersComponent },
    { path: "**", component: NotfoundComponent }
];
export const AppRouting = RouterModule.forRoot(routes);