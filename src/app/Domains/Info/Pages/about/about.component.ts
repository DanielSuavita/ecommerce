import { Component, signal } from '@angular/core';
import { CounterComponent } from '@Shared/Components/counter/counter.component';
import { WaveAudioComponent } from '@Info/Components/wave-audio/wave-audio.component';
import { HighlightDirective } from '@Shared/directives/highlight.directive';
import { HeaderComponent } from '@Shared/Components/header/header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent, WaveAudioComponent, HighlightDirective, HeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export default class AboutComponent {
  duration = signal(1000);
  message = signal('Hola');

  changeDuration(event: Event){
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber);
  }

  changeMessage(event: Event){
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }

}
