import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
const routes = [
    { path: "", component: HomeComponent}
];
export const AppRouting = RouterModule.forRoot(routes);