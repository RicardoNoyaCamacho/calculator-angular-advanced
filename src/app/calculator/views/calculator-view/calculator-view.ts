import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Calculator } from "@/calculator/components/calculator/calculator";

@Component({
  selector: 'calculator-view',
  imports: [Calculator],
  templateUrl: './calculator-view.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CalculatorView { }
