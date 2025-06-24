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
  panelGroups = [
    {
      title: 'About Emdad',
      panels: [
        {
          active: false,
          name: 'What is Emdad?',
          content:
            'Emdad is a smart data analytics platform built for B2B and B2G. It helps companies make confident, data-driven decisions using real-time, consent-based insights into financial health, payment behavior, and risk.',
          disabled: false,
        },
        {
          active: false,
          name: 'Who is Emdad for?',
          content:
            'Emdad is designed for developers, main contractors, subcontractors, traders, factories, government entities, banks, and insurance companies involved in project evaluation, procurement, and risk management.',
          disabled: false,
        },
      ],
    },
    {
      title: 'Platform Capabilities',
      panels: [
        {
          active: false,
          name: 'What kind of data does Emdad provide?',
          content:
            'Emdad provides financial ratios, payment behavior data, risk indicators, and side-by-side comparisons between companies.',
          disabled: false,
        },
        {
          active: false,
          name: 'Where does Emdad get its data from?',
          content:
            'We collect data from public records, regulatory filings, integrated government platforms, and securely shared financial data with user consent.',
          disabled: false,
        },
        {
          active: false,
          name: 'Does Emdad offer credit scoring?',
          content:
            'Yes. Emdad generates a proprietary financial health and credit risk score to support vendor approvals, credit limits, and prequalification.',
          disabled: false,
        },
      ],
    },
    {
      title: 'Use Cases',
      panels: [
        {
          active: false,
          name: 'How can contractors, traders, or manufacturers benefit?',
          content:
            'They can analyze their own financial health, understand how clients view them, improve credit approvals, and benchmark performance to stay competitive.',
          disabled: false,
        },
        {
          active: false,
          name: 'How can developers or government agencies benefit?',
          content:
            'They can screen vendors, reduce risk of project delays, optimize payment terms, and spot early warning signs of financial issues.',
          disabled: false,
        },
        {
          active: false,
          name: 'Can Emdad replace traditional due diligence?',
          content:
            'It enhances it. Emdad speeds up and strengthens due diligence by automating risk checks and replacing outdated, manual methods.',
          disabled: false,
        },
      ],
    },
    {
      title: 'Data Security & Access',
      panels: [
        {
          active: false,
          name: 'Is the data on Emdad secure?',
          content:
            'Yes. All data is encrypted, access is permission-based, and everything is built with strict compliance and privacy standards.',
          disabled: false,
        },
        {
          active: false,
          name: 'Can Emdad access my data without permission?',
          content:
            'No. We only access data you choose to share, and only for the purpose of delivering insights securely.',
          disabled: false,
        },
        {
          active: false,
          name: 'Do I need to share my financials to use Emdad?',
          content:
            'You can use Emdad without sharing sensitive data, but sharing financials unlocks the full power of analytics and benchmarking.',
          disabled: false,
        },
      ],
    },
    {
      title: 'Subscription & Pricing',
      panels: [
        {
          active: false,
          name: 'Is Emdad a SaaS platform?',
          content:
            'Yes. Emdad is a subscription-based cloud platform, available in multiple tiers for SMEs, enterprise, and government clients.',
          disabled: false,
        },
        {
          active: false,
          name: 'How much does Emdad cost?',
          content:
            'Pricing depends on your company size, number of users, and features needed. Please contact us or see our pricing page for details.',
          disabled: false,
        },
      ],
    },
    {
      title: 'Getting Started',
      panels: [
        {
          active: false,
          name: 'How do I sign up?',
          content:
            'You can request a demo or register online using the Commercial Registration CEO/General Manager details.',
          disabled: false,
        },
        {
          active: false,
          name: 'Do you offer onboarding support?',
          content:
            'Yes. We provide training and onboarding assistance to help your team get started smoothly.',
          disabled: false,
        },
      ],
    },
    {
      title: 'AI-Powered Assistance',
      panels: [
        {
          active: false,
          name: 'Is Emdad powered by AI?',
          content:
            "Yes. Our AI engine helps you ask context-based questions and find answers quickly. Whether you're a developer, contractor, or supplier, Emdad guides you to make better decisions.",
          disabled: false,
        },
        {
          active: false,
          name: 'How easy is it to use the AI?',
          content:
            'Very easy. Our platform includes ready-to-use prompts tailored to your needs. Just ask, and Emdad shows what matters most.',
          disabled: false,
        },
      ],
    },
    {
      title: 'About Emdad',
      panels: [
        {
          active: false,
          name: 'Can Emdad help me win more projects?',
          content:
            'Yes. By sharing your verified financial health through Emdad, you can boost client confidence and increase your chances of winning contracts.',
          disabled: false,
        },
        {
          active: false,
          name: 'How often is the data updated?',
          content:
            'Emdad connects to live integrations. Any change in shared financials or government records is reflected in real-time or within 24 hours.',
          disabled: false,
        },
        {
          active: false,
          name: 'Can I use Emdad without any technical knowledge?',
          content:
            'Absolutely. Emdad is built for decision-makers, not just data analysts. Everything is simplified and visual.',
          disabled: false,
        },
        {
          active: false,
          name: 'What if I don’t want others to see my data?',
          content:
            'You control what’s shared. Only companies you give consent to will see your data.',
          disabled: false,
        },
        {
          active: false,
          name: 'How is Emdad different from my ERP or accounting system?',
          content:
            'Your ERP stores your data. Emdad turns it into decisions, insights, and actionable comparisons across the entire ecosystem.',
          disabled: false,
        },
      ],
    },
  ];

  trackPanel(index: number): number {
    return index;
  }

  togglePanel(groupIndex: number, panelIndex: number, isActive: boolean): void {
    this.panelGroups[groupIndex].panels[panelIndex].active = isActive;
  }
}
