import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Auth Routing</h1>
  <p> by {{name}}</p>
  <p>version: {{versionId}}</p>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string = 'kousi';
  @Input('version') versionId: string;
}
