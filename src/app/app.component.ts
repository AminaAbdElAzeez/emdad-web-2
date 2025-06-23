import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { SmartComponent } from './components/smart/smart.component';
import { VideoComponent } from './components/video/video.component';
import { PartnerComponent } from './components/partner/partner.component';
import { OpportunitiesComponent } from './components/opportunities/opportunities.component';
import { ProductsComponent } from './components/products/products.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { PlansComponent } from './components/plans/plans.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { ApplicationComponent } from './components/application/application.component';
import { TouchComponent } from './components/touch/touch.component';
import { FooterComponent } from './components/footer/footer.component';
import { EcosystemComponent } from './components/ecosystem/ecosystem.component';
import { SolutionComponent } from './components/solution/solution.component';
import { FunnelComponent } from './components/funnel/funnel.component';
import { SupportComponent } from './components/support/support.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponent,
    SmartComponent,
    VideoComponent,
    PartnerComponent,
    OpportunitiesComponent,
    ProductsComponent,
    GetStartedComponent,
    PlansComponent,
    QuestionsComponent,
    ApplicationComponent,
    TouchComponent,
    FooterComponent,
    EcosystemComponent,
    SolutionComponent,
    FunnelComponent,
    SupportComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'emdad-web';
}
