"use strict";
var router_1 = require('@angular/router');
var pag1_component_1 = require('./pag1/pag1.component');
var cadastro_component_1 = require('./cadastro/cadastro.component');
var appRoutes = [
    { path: '', component: pag1_component_1.Pag1Component },
    { path: 'cadastro', component: cadastro_component_1.CadastroComponent },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map