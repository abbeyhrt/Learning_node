import '../sass/style.scss';

import { $, $$ } from './modules/bling';
import autocomplete from './modules/autocomplete';

// because of modules/bling $ can be used in the place of document.querySelector because that method was made in that module and then we imported it onto this page
autocomplete($('#address'), $('#lat'), $('#lng'));
