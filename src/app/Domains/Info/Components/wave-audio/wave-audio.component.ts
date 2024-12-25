import { Component, ElementRef, Input, ViewChild, signal } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css'
})
export class WaveAudioComponent {
  @Input({required: true}) audioURL?: string;
  @ViewChild('Wave') container!: ElementRef;
  private WS?: WaveSurfer;
  IsPlaying = signal(false);

  ngAfterViewInit(){
    this.WS = WaveSurfer.create({
      url: this.audioURL,
      container: this.container.nativeElement
    });
    this.WS.on('play', ()=> this.IsPlaying.set(true));
    this.WS.on('pause', ()=> this.IsPlaying.set(false));
  }

  PlayPause(){
    this.WS?.playPause();
  }
}
