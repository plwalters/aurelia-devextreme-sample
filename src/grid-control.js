import $ from 'jquery';
import * as DevExtreme from 'Devexpress/bower-devextreme-web';
import {bindable} from 'aurelia-framework';

export class GridControl {
  @bindable items;
  @bindable columns;
  control;
  attached() {
    $(this.control).dxDataGrid({
      dataSource: this.items,
      columns: this.columns
    });
  }
}
