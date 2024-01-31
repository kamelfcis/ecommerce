import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  @Input() data: any[] = [];
  @Input() labelll!: string;

  @Output() selectedValue = new EventEmitter();

  SelectionChange(event: any) {

    this.selectedValue.emit(event);
  }
}
