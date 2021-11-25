(self["webpackChunkstats_ionic"] = self["webpackChunkstats_ionic"] || []).push([["src_app_auth_register_register_module_ts"],{

/***/ 2638:
/*!**********************************************************!*\
  !*** ./src/app/auth/register/register-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 1351);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 6108:
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 2638);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 1351);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 6710);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ 7646);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ 5322);











let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__.StoreModule.forFeature('registeredUser', _store__WEBPACK_IMPORTED_MODULE_2__.reducers),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__.EffectsModule.forFeature(_store__WEBPACK_IMPORTED_MODULE_2__.effects),
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 1351:
/*!************************************************!*\
  !*** ./src/app/auth/register/register.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register.page.html */ 4176);
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ 4169);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 6518);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 6710);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _register_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../register/store */ 7646);










let RegisterPage = class RegisterPage {
    constructor(authService, fb, store, loadingController, router) {
        this.authService = authService;
        this.fb = fb;
        this.store = store;
        this.loadingController = loadingController;
        this.router = router;
        this.registerUserPending$ = this.store.select(_register_store__WEBPACK_IMPORTED_MODULE_3__.gerRegisterUserPending);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$')]));
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
        this.confirmedPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
        this.userRegistrationRequest = {};
        this.passwordTypeInput = 'password';
        this.passwordIcon = 'eye-off';
        this.registerForm = this.fb.group({
            email: this.email,
            username: this.username,
            password: this.password,
            confirmedPassword: this.confirmedPassword
        });
    }
    ngOnInit() {
    }
    register() {
        this.userRegistrationRequest = {
            username: this.getUsername(),
            email: this.getEmail(),
            password: this.getPassword()
        };
        this.store.dispatch(new _register_store__WEBPACK_IMPORTED_MODULE_3__.RegisterUser(this.userRegistrationRequest));
        this.presentLoading();
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
            });
            yield loading.present();
            this.listenForRegister();
        });
    }
    listenForRegister() {
        this.registerUserPending$.pipe().subscribe(pending => {
            if (!pending) {
                this.loadingController.dismiss();
                this.router.navigate(['/home']);
            }
        });
    }
    validatePassword() {
        if (this.getConfirmedPassword() !== this.getPassword()) {
            this.registerForm.get('confirmedPassword').setErrors({ invalid: true });
        }
        else {
            this.registerForm.get('confirmedPassword').setErrors(null);
        }
    }
    togglePasswordMode() {
        this.passwordTypeInput = this.passwordTypeInput === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
        this.passwordEye.el.setFocus();
    }
    getEmail() {
        var _a;
        return (_a = this.registerForm.get('email')) === null || _a === void 0 ? void 0 : _a.value;
    }
    getPassword() {
        var _a;
        return (_a = this.registerForm.get('password')) === null || _a === void 0 ? void 0 : _a.value;
    }
    getUsername() {
        var _a;
        return (_a = this.registerForm.get('username')) === null || _a === void 0 ? void 0 : _a.value;
    }
    getConfirmedPassword() {
        var _a;
        return (_a = this.registerForm.get('confirmedPassword')) === null || _a === void 0 ? void 0 : _a.value;
    }
};
RegisterPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
RegisterPage.propDecorators = {
    passwordEye: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['passwordEyeRegister',] }]
};
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterPage);



/***/ }),

/***/ 6822:
/*!******************************************************!*\
  !*** ./src/app/auth/register/store/effects/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "effects": () => (/* binding */ effects)
/* harmony export */ });
/* harmony import */ var _register_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-effects */ 6773);

const effects = [_register_effects__WEBPACK_IMPORTED_MODULE_0__.default];



/***/ }),

/***/ 6773:
/*!*****************************************************************!*\
  !*** ./src/app/auth/register/store/effects/register-effects.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 5322);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/auth.service */ 6518);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9412);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var _register_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../register-actions */ 3239);







let RegisterEffects = class RegisterEffects {
    constructor(actions$, authService) {
        this.actions$ = actions$;
        this.authService = authService;
        this.loginUser$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_register_actions__WEBPACK_IMPORTED_MODULE_1__.REGISTER_USER), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)((data) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(this.authService.register(data.payload)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((response) => {
                return new _register_actions__WEBPACK_IMPORTED_MODULE_1__.RegisterUserSuccess();
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new _register_actions__WEBPACK_IMPORTED_MODULE_1__.RegisterUserFailed(error))));
        })));
    }
};
RegisterEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService }
];
RegisterEffects = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)()
], RegisterEffects);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterEffects);


/***/ }),

/***/ 7646:
/*!**********************************************!*\
  !*** ./src/app/auth/register/store/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gerRegisterUserPending": () => (/* reexport safe */ _reducers__WEBPACK_IMPORTED_MODULE_0__.gerRegisterUserPending),
/* harmony export */   "getRegisteredUserState": () => (/* reexport safe */ _reducers__WEBPACK_IMPORTED_MODULE_0__.getRegisteredUserState),
/* harmony export */   "reducers": () => (/* reexport safe */ _reducers__WEBPACK_IMPORTED_MODULE_0__.reducers),
/* harmony export */   "REGISTER_USER": () => (/* reexport safe */ _register_store_register_actions__WEBPACK_IMPORTED_MODULE_1__.REGISTER_USER),
/* harmony export */   "REGISTER_USER_FAILED": () => (/* reexport safe */ _register_store_register_actions__WEBPACK_IMPORTED_MODULE_1__.REGISTER_USER_FAILED),
/* harmony export */   "REGISTER_USER_SUCCESS": () => (/* reexport safe */ _register_store_register_actions__WEBPACK_IMPORTED_MODULE_1__.REGISTER_USER_SUCCESS),
/* harmony export */   "RegisterUser": () => (/* reexport safe */ _register_store_register_actions__WEBPACK_IMPORTED_MODULE_1__.RegisterUser),
/* harmony export */   "RegisterUserFailed": () => (/* reexport safe */ _register_store_register_actions__WEBPACK_IMPORTED_MODULE_1__.RegisterUserFailed),
/* harmony export */   "RegisterUserSuccess": () => (/* reexport safe */ _register_store_register_actions__WEBPACK_IMPORTED_MODULE_1__.RegisterUserSuccess),
/* harmony export */   "effects": () => (/* reexport safe */ _effects__WEBPACK_IMPORTED_MODULE_2__.effects)
/* harmony export */ });
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ 1706);
/* harmony import */ var _register_store_register_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../register/store/register-actions */ 3239);
/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./effects */ 6822);





/***/ }),

/***/ 1706:
/*!*******************************************************!*\
  !*** ./src/app/auth/register/store/reducers/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducers": () => (/* binding */ reducers),
/* harmony export */   "getRegisteredUserState": () => (/* binding */ getRegisteredUserState),
/* harmony export */   "gerRegisterUserPending": () => (/* binding */ gerRegisterUserPending)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 6710);
/* harmony import */ var _register_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.reducer */ 5371);


const reducers = {
    registeredUser: _register_reducer__WEBPACK_IMPORTED_MODULE_0__.reducer
};
const registerUserState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)('registeredUser');
const getRegisteredUserState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(registerUserState, (state) => state.registeredUser);
const gerRegisterUserPending = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getRegisteredUserState, (state) => state.registerPending);


/***/ }),

/***/ 5371:
/*!******************************************************************!*\
  !*** ./src/app/auth/register/store/reducers/register.reducer.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _register_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../register-actions */ 3239);

const initialState = {
    registerPending: false,
    error: null,
    username: null
};
function reducer(state = initialState, action) {
    switch (action.type) {
        case _register_actions__WEBPACK_IMPORTED_MODULE_0__.REGISTER_USER: {
            return Object.assign(Object.assign({}, state), { registerPending: true });
        }
        case _register_actions__WEBPACK_IMPORTED_MODULE_0__.REGISTER_USER_SUCCESS: {
            return Object.assign(Object.assign({}, state), { registerPending: false, error: null });
        }
        case _register_actions__WEBPACK_IMPORTED_MODULE_0__.REGISTER_USER_FAILED: {
            return Object.assign(Object.assign({}, state), { registerPending: false, error: action.payload });
        }
        default: {
            return Object.assign({}, state);
        }
    }
}


/***/ }),

/***/ 3239:
/*!*********************************************************!*\
  !*** ./src/app/auth/register/store/register-actions.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REGISTER_USER": () => (/* binding */ REGISTER_USER),
/* harmony export */   "REGISTER_USER_SUCCESS": () => (/* binding */ REGISTER_USER_SUCCESS),
/* harmony export */   "REGISTER_USER_FAILED": () => (/* binding */ REGISTER_USER_FAILED),
/* harmony export */   "RegisterUser": () => (/* binding */ RegisterUser),
/* harmony export */   "RegisterUserSuccess": () => (/* binding */ RegisterUserSuccess),
/* harmony export */   "RegisterUserFailed": () => (/* binding */ RegisterUserFailed)
/* harmony export */ });
//Register actions
const REGISTER_USER = '[AUTH] Register user';
const REGISTER_USER_SUCCESS = '[AUTH] Register user success';
const REGISTER_USER_FAILED = '[AUTH] Register user failed';
class RegisterUser {
    constructor(payload) {
        this.payload = payload;
        this.type = REGISTER_USER;
    }
}
class RegisterUserSuccess {
    constructor() {
        this.type = REGISTER_USER_SUCCESS;
    }
}
class RegisterUserFailed {
    constructor(payload) {
        this.payload = payload;
        this.type = REGISTER_USER_FAILED;
    }
}


/***/ }),

/***/ 4169:
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".error-label {\n  font-size: 12px;\n  color: red;\n}\n\nion-icon {\n  color: darkgray;\n  margin: 15px -13px -33px 0;\n  font-size: 27px;\n  padding: 0px 7px 12px 0px;\n}\n\n.icon-text {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgY29sb3I6IGRhcmtncmF5O1xyXG4gIG1hcmdpbjogMTVweCAtMTNweCAtMzNweCAwO1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBwYWRkaW5nOiAwcHggN3B4IDEycHggMHB4O1xyXG59XHJcblxyXG4uaWNvbi10ZXh0IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 4176:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Versus App</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" size-md=\"8\" offset-md=\"2\" size-lg=\"6\" offset-lg=\"3\" size-xl=\"4\"\r\n             offset-xl=\"4\">\r\n      <ion-card [formGroup]=\"registerForm\">\r\n        <ion-card-header>\r\n          <ion-card-title class=\"ion-text-center\">{{'crear cuenta' | titlecase}}</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-item class=\"ion-padding-top\">\r\n            <ion-label position=\"stacked\">Email</ion-label>\r\n            <ion-input formControlName=\"email\" type=\"email\" placeholder=\"Email\" name=\"email\"></ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"ion-padding-top\">\r\n            <ion-label position=\"stacked\">Nombre de usuario</ion-label>\r\n            <ion-input formControlName=\"username\" type=\"text\"\r\n               placeholder=\"Nombre de usuario\" name=\"username\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"ion-padding-top\">\r\n            <ion-label position=\"stacked\">Contraseña</ion-label>\r\n            <ion-input #passwordEyeRegister [type]=\"passwordTypeInput\" formControlName=\"password\"\r\n              placeholder=\"Contraseña\" name=\"password\">\r\n            </ion-input>\r\n            <span slot=\"end\">\r\n            <ion-icon name=\"eye\" [name]=\"passwordIcon\"\r\n              [ngClass]=\"passwordTypeInput === 'text' ? 'icon-text' : 'icon-password'\"\r\n              (click)=\"togglePasswordMode()\">\r\n            </ion-icon>\r\n          </span>\r\n          </ion-item>\r\n          <ion-item class=\"ion-padding-top\">\r\n            <ion-label position=\"stacked\">Repetir Contraseña</ion-label>\r\n            <ion-input [type]=\"passwordTypeInput\" formControlName=\"confirmedPassword\" placeholder=\"Repetir Contraseña\"\r\n              name=\"confirmedPassword\"\r\n              (ionChange)=\"validatePassword()\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-label class=\"error-label\" position=\"stacked\"\r\n             *ngIf=\"confirmedPassword.errors?.invalid\">Las contraseñas deben coincidir\r\n          </ion-label>\r\n          <ion-button [disabled]=\"!this.registerForm.valid\" expand=\"block\" (click)=\"register()\">Crear cuenta\r\n          </ion-button>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_register_register_module_ts.js.map