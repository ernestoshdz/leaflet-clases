import * as layers from './layers.js';

let control_minimap = new L.Control.MiniMap(layers.minimapa,{
    autoToggleDisplay: false,
    position: 'bottomleft',
    zoomLevelFixed: 2,
});

export {
    control_minimap
}