import '../sass/style.scss';

import makeMap from './modules/map';

import { $, $$ } from './modules/bling';
import autocomplete from './modules/autocomplete';
import typeAhead from './modules/typeAhead';

// because of modules/bling $ can be used in the place of document.querySelector because that method was made in that module and then we imported it onto this page
autocomplete($('#address'), $('#lat'), $('#lng'));

typeAhead($('.search'));

makeMap($('#map'));
