import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-application',
  standalone: true,
  imports: [FormsModule, NzSelectModule],
  templateUrl: './application.component.html',
  styleUrl: './application.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ApplicationComponent {
  selectedType: string | null = null;

  partnershipTypes = [
    { label: 'Supplier', value: 'supplier' },
    { label: 'Reseller', value: 'reseller' },
    { label: 'Technology Partner', value: 'tech' },
    { label: 'Consultant', value: 'consultant' },
    { label: 'Other', value: 'other' },
  ];
}
