import Control from 'ol/control/Control';
import Graticule from 'ol/Graticule';
interface GraticuleControlParams {
    graticule: Graticule;
    icon?: string;
}
export declare class GraticuleControl extends Control {
    graticule: Graticule;
    button: HTMLButtonElement;
    constructor(opts: GraticuleControlParams);
    handleToggleGraticule(): void;
}
export {};
