import ComponentModel from 'core/js/models/componentModel';

export default class GraphicCompareModel extends ComponentModel {
  defaults() {
    return ComponentModel.resultExtend('defaults', { _value: 50 });
  }
}
