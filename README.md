# ol-graticule-control

![https://www.npmjs.com/package/ol-graticule-control](https://badgen.net/npm/v/ol-graticule-control)

The missing Graticule control of OpenLayers 5.

To show/hide Graticule.

DEMO: [https://stackblitz.com/edit/js-8ddtop](https://stackblitz.com/edit/js-8ddtop)

## Usage
```
npm i ol-graticule-control
```

```js
import OLMap from 'ol/Map';
import Graticule from 'ol/Graticule';
import { GraticuleControl } from 'ol-graticule-control';

const map = new OLMap();
const graticule = new Graticule({map});
map.addControl(new GraticuleControl({
  graticule,
}));
```

## LICENSE

MIT License

Copyright (c) 2019 Cheng Gu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
