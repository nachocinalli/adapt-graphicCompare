import ComponentView from 'core/js/views/componentView';

class GraphicCompareView extends ComponentView {
  preRender() {
    this.onChange = this.onChange.bind(this);

  }

  postRender() {
    this.$('.graphiccompare__widget').imageready(() => {
      this.setReadyStatus();
      this.setupInviewCompletion('.graphiccompare__widget');
    });
  }

  onChange(event) {
    const value = event.target.value;
    this.model.set('_value', value);
  }
}

GraphicCompareView.template = 'graphicCompare.jsx';

export default GraphicCompareView;
