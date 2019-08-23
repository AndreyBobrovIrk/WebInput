import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'web-input',
  styleUrl: 'web-input.css',
  shadow: true
})
export class WebInput {
	public items : Array<string> = [
	   '172.10.10.10',
	   '172.10.10.11',
	   '172.10.10.12',
	   '256.256.10.10',
	   '256.256.10.11',
	   '256.256.10.12',
	   '122.15.11.10',
	   '122.15.11.11',
	   '122.15.11.12',
	   '88.32.32.10',
	   '88.32.32.11',
	   '88.32.32.12',
	   '177.10.10.11',
	   '177.10.10.12',
	   '177.10.10.13'
	];
  
  @Prop() tag: string;
  @State() isDropDown : boolean = false;

  render() {
    return <div class="div-main" >
      <div><label>IP-адрес</label></div>
      <div class="div-input">
        <input type="text"/>
        <img src="assets/images/arrow.png" onClick={() => this.arrowClick()}/>
      </div>
        {this.isDropDown &&
          <ul class="dropdown-list">
            {this.items.map((item) => (
              <li class="dropdown-item" onClick={() => this.handleClick(item)}>{item}</li>
            ))}
          </ul>
        }
    </div>;
  }
  
  arrowClick() {
    this.isDropDown = !this.isDropDown;
  }
}
