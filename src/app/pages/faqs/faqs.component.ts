import { Component } from '@angular/core';
import { AskComponent } from '../../components/ask/ask.component';
import { QuestionsComponent } from '../../components/questions/questions.component';
import { PartnerComponent } from '../../components/partner/partner.component';
import { ApplicationComponent } from '../../components/application/application.component';
import { TouchComponent } from '../../components/touch/touch.component';
import { CollaborationComponent } from '../../components/collaboration/collaboration.component';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [
    AskComponent,
    QuestionsComponent,
    ApplicationComponent,
    TouchComponent,
    CollaborationComponent,
  ],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss',
})
export class FaqsComponent {}
