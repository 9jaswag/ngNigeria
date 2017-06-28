import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from "./members/members.component";
const routes = [
    { path: "", component: HomeComponent},
    { path: "members", component: MembersComponent}
];
export const AppRouting = RouterModule.forRoot(routes);