import { Component } from '@angular/core';
import { SmartComponent } from '../../components/smart/smart.component';
import { VideoComponent } from '../../components/video/video.component';
import { EcosystemComponent } from '../../components/ecosystem/ecosystem.component';
import { SolutionComponent } from '../../components/solution/solution.component';
import { FunnelComponent } from '../../components/funnel/funnel.component';
import { SupportComponent } from '../../components/support/support.component';
import { PartnerComponent } from '../../components/partner/partner.component';
import { OpportunitiesComponent } from '../../components/opportunities/opportunities.component';
import { ProductsPageComponent } from '../products-page/products-page.component';
import { GetStartedComponent } from '../../components/get-started/get-started.component';
import { PlansComponent } from '../../components/plans/plans.component';
import { QuestionsComponent } from '../../components/questions/questions.component';
import { ApplicationComponent } from '../../components/application/application.component';
import { TouchComponent } from '../../components/touch/touch.component';
import { ProductsComponent } from '../../components/products/products.component';
import { PrivacyComponent } from '../../components/privacy/privacy.component';
import { DecisionComponent } from '../../components/decision/decision.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SmartComponent,
    VideoComponent,
    EcosystemComponent,
    SolutionComponent,
    FunnelComponent,
    SupportComponent,
    PartnerComponent,
    OpportunitiesComponent,
    GetStartedComponent,
    PlansComponent,
    QuestionsComponent,
    ApplicationComponent,
    TouchComponent,
    ProductsComponent,
    PrivacyComponent,
    DecisionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
