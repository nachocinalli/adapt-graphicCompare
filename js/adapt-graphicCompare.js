import components from 'core/js/components';
import GraphicCompareView from './GraphicCompareView';
import GraphicCompareModel from './GraphicCompareModel';

export default components.register('graphicCompare', {
  model: GraphicCompareModel,
  view: GraphicCompareView
});
