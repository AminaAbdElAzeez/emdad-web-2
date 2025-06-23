import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [NzCollapseModule, NzIconModule, CommonModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class QuestionsComponent {
  panels = [
    {
      active: false,
      name: 'What is Emdad?',
      content:
        'Emdad is a smart data analytics platform built for B2B and B2G. It helps companies make confident, data-driven decisions using real-time, consent-based insights into financial health, payment behavior, and risk.',
      disabled: false,
    },
    {
      active: false,
      name: 'What kind of data does Emdad provide?',
      content:
        'Emdad provides financial ratios, payment behavior data, risk indicators, and side-by-side comparisons between companies.',
      disabled: false,
    },
    {
      active: false,
      name: 'How can contractors, traders, or manufacturers benefit?',
      content:
        'They can analyze their own financial health, understand how clients view them, improve credit approvals, and benchmark performance to stay competitive.',
      disabled: false,
    },
    {
      active: false,
      name: 'Is the data on Emdad secure?',
      content:
        'Yes. All data is encrypted, access is permission-based, and everything is built with strict compliance and privacy standards.',
      disabled: false,
    },
    {
      active: false,
      name: 'Is Emdad a SaaS platform?',
      content:
        'Yes. Emdad is a subscription-based cloud platform, available in multiple tiers for SMEs, enterprise, and government clients.',
      disabled: false,
    },
    {
      active: false,
      name: 'How do I sign up?',
      content:
        'You can request a demo or register online using the Commercial Registration CEO/General Manager details.',
      disabled: false,
    },
    {
      active: false,
      name: 'Is Emdad powered by AI?',
      content:
        "Yes. Our AI engine helps you ask context-based questions and find answers quickly. Whether you're a developer, contractor, or supplier, Emdad guides you to make better decisions.",
      disabled: false,
    },
    {
      active: false,
      name: 'Can Emdad help me win more projects?',
      content:
        'Yes. By sharing your verified financial health through Emdad, you can boost client confidence and increase your chances of winning contracts.',
      disabled: false,
    },
  ];

  trackPanel(index: number): number {
    return index;
  }

  togglePanel(index: number, isActive: boolean): void {
    this.panels[index].active = isActive;
  }
}
