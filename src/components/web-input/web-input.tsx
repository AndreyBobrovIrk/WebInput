import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'web-input',
  styleUrl: 'web-input.css',
  shadow: true
})
export class WebInput {
  @Prop() tag: string;

  render() {
    return <div>
      <div><label>IP-адрес</label></div>
      <div class="div-input">
        <input type="text"/>
        <div>&#9660;</div>
      </div>
    </div>;
  }
}
