import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ForumComponent } from './forum/forum.component';
import { HeaderComponent } from './header/header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AskQuestionComponent } from './forum/ask-question/ask-question.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { FilterWidgetComponent } from './forum/filter-widget/filter-widget.component';
import { DiscussionWidgetComponent } from './forum/discussion-widget/discussion-widget.component';
import { FeedsComponent } from './forum/feeds/feeds.component';
import { MatCardModule } from '@angular/material/card';
import { IdeaPoolComponent } from './idea-pool/idea-pool.component';
import { PoolComponent } from './idea-pool/pool/pool.component';
import { CreateIdeaComponent } from './idea-pool/create-idea/create-idea.component';
import {MatRadioModule} from '@angular/material/radio';
import { ProposalComponent } from './proposal/proposal.component';
import { IdeaFilterComponent } from './proposal/idea-filter/idea-filter.component';
import { ProposalListingComponent } from './proposal/proposal-listing/proposal-listing.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { IdeaDetailComponent } from './idea-pool/idea-detail/idea-detail.component';
import {MatMenuModule} from "@angular/material/menu";
import { IdeaTreeComponent } from './idea-pool/idea-tree/idea-tree.component';
import { ConsentModalComponent } from './idea-pool/consent-modal/consent-modal.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CreateProposalComponent } from './proposal/create-proposal/create-proposal.component';
import { ProposalDetailsComponent } from './proposal/proposal-details/proposal-details.component';
import { AppointmentModalComponent } from './proposal/proposal-details/appointment-modal/appointment-modal.component';
import { ProfileComponent } from './profile/profile.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { AppoinmentModalComponent } from './consultant/appoinment-modal/appoinment-modal.component';


@NgModule({
  declarations: [
    CoreComponent,
    PageNotFoundComponent,
    ForumComponent,
    HeaderComponent,
    AskQuestionComponent,
    FilterWidgetComponent,
    DiscussionWidgetComponent,
    FeedsComponent,
    IdeaPoolComponent,
    PoolComponent,
    CreateIdeaComponent,
    ProposalComponent,
    IdeaFilterComponent,
    ProposalListingComponent,
    IdeaDetailComponent,
    ConsentModalComponent,
    CreateProposalComponent,
    IdeaTreeComponent,
    ProfileComponent,
    ProposalDetailsComponent,
    AppointmentModalComponent,
    ConsultantComponent,
    AppoinmentModalComponent,

  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule,
    MatChipsModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    MatDatepickerModule,
    MatMenuModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  providers: [MatDatepickerModule]
})
export class CoreModule { }
