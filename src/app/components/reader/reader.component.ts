import { Component } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-reader',
  standalone: true,
  imports: [ZXingScannerModule],
  templateUrl: './reader.component.html',
  styleUrl: './reader.component.scss'
})
export class ReaderComponent {
  public qrResultString!: string;

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
  }
}
