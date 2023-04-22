import { Component } from '@angular/core';

@Component({
  selector: 'app-practicle',
  templateUrl: './practicle.component.html',
  styleUrls: ['./practicle.component.css']
})
export class PracticleComponent {
  activeSession :boolean = true;
  hasBalance : boolean = true;
}
