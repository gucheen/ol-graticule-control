var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Control from 'ol/control/Control';
var GraticuleControl = /** @class */ (function (_super) {
    __extends(GraticuleControl, _super);
    function GraticuleControl(opts) {
        var _this = _super.call(this, {}) || this;
        var button = document.createElement('button');
        button.className = 'ol-graticule-control-button';
        // tslint:disable-next-line
        button.innerHTML = opts.icon || '<svg class="ol-grid-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="14" height="14"><defs/><path d="M277.333 1024c-11.797 0-21.333-9.557-21.333-21.333V21.333C256 9.557 265.536 0 277.333 0s21.334 9.557 21.334 21.333v981.334c0 11.776-9.536 21.333-21.334 21.333zM512 1024c-11.797 0-21.333-9.557-21.333-21.333V21.333C490.667 9.557 500.203 0 512 0s21.333 9.557 21.333 21.333v981.334c0 11.776-9.536 21.333-21.333 21.333zM746.667 1024c-11.798 0-21.334-9.557-21.334-21.333V21.333C725.333 9.557 734.87 0 746.667 0S768 9.557 768 21.333v981.334c0 11.776-9.536 21.333-21.333 21.333z"/><path d="M1002.667 298.667H21.333C9.536 298.667 0 289.109 0 277.333S9.536 256 21.333 256h981.334c11.797 0 21.333 9.557 21.333 21.333s-9.536 21.334-21.333 21.334zM1002.667 533.333H21.333C9.536 533.333 0 523.776 0 512s9.536-21.333 21.333-21.333h981.334c11.797 0 21.333 9.557 21.333 21.333s-9.536 21.333-21.333 21.333zM1002.667 768H21.333C9.536 768 0 758.443 0 746.667s9.536-21.334 21.333-21.334h981.334c11.797 0 21.333 9.558 21.333 21.334S1014.464 768 1002.667 768z"/></svg>';
        var element = document.createElement('div');
        element.className = 'ol-unselectable ol-control ol-graticule-control ol-graticule-control-active';
        element.appendChild(button);
        _this.element = element;
        _this.graticule = opts.graticule;
        _this.button = button;
        _this.button.addEventListener('click', function () {
            _this.handleToggleGraticule();
        }, false);
        return _this;
    }
    GraticuleControl.prototype.handleToggleGraticule = function () {
        var _this = this;
        if (this.graticule.getMap()) {
            this.graticule.setMap(null);
        }
        else {
            this.graticule.setMap(this.getMap());
        }
        // fix a style rendering bug under Chrome 78
        this.button.blur();
        requestAnimationFrame(function () {
            _this.element.classList.toggle('ol-graticule-control-active');
        });
    };
    return GraticuleControl;
}(Control));
export { GraticuleControl };
