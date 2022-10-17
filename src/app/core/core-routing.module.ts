import { ProposalDetailsComponent } from './proposal/proposal-details/proposal-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CoreComponent } from './core.component';
import { ForumComponent } from './forum/forum.component';
import { IdeaDetailComponent } from './idea-pool/idea-detail/idea-detail.component';
import { IdeaPoolComponent } from './idea-pool/idea-pool.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateProposalComponent } from './proposal/create-proposal/create-proposal.component';
import { ProposalComponent } from './proposal/proposal.component';
import { ConsultantComponent } from './consultant/consultant.component';

const routes: Routes = [
  { path: '',  children: [
      {
        path: '',
        component: CoreComponent,
        children: [
          {
            path: '',
            redirectTo: 'forum'
          },
          {
            path: 'forum',
            component: ForumComponent
          },
          {
            path: 'idea-pool',
            component: IdeaPoolComponent
          },
          {
            path: 'idea-pool/:id',
            component: IdeaDetailComponent
          },
          {
            path: 'proposal',
            component: ProposalComponent
          },
          {
            path: 'proposal/:id',
            component: ProposalDetailsComponent
          },
          {
            path: 'proposal/new',
            component: CreateProposalComponent
          },
          {
            path: 'profile',
            component: ProfileComponent
          },
          {
            path:'consultant',
            component: ConsultantComponent
          },
          {
            path:'notification',
            redirectTo: 'forum'
          },
          {
            path:'message',
            redirectTo: 'forum'
          }
        ]
      },
      {  path: 'auth', loadChildren: () => import('../core/auth/auth.module').then(m => m.AuthModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
