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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 2638);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 1351);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register.page.html */ 4176);
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ 4169);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 6518);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 6710);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);









let RegisterPage = class RegisterPage {
    constructor(authService, fb, store, loadingController, router) {
        this.authService = authService;
        this.fb = fb;
        this.store = store;
        this.loadingController = loadingController;
        this.router = router;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$')]));
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
        this.confirmedPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
        this.userRegistrationRequest = {};
        this.registerForm = this.fb.group({
            email: this.email,
            username: this.username,
            password: this.password,
            confirmedPassword: this.confirmedPassword
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        this.userRegistrationRequest = {
            username: this.getUsername(),
            email: this.getEmail(),
            password: this.getPassword()
        };
        this.authService.register(this.userRegistrationRequest).subscribe((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // check if the new username comes in the response. This means that the register process was successful
            yield this.presentLoading();
            if (response && response.username) {
                yield this.router.navigate(['/home']);
                yield this.loadingController.dismiss();
            }
        }));
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
            });
            yield loading.present();
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
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterPage);



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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".error-label {\n  font-size: 12px;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0FBQ0YiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLWxhYmVsIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Versus App</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" size-md=\"8\" offset-md=\"2\" size-lg=\"6\" offset-lg=\"3\" size-xl=\"4\"\r\n             offset-xl=\"4\">\r\n      <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title class=\"ion-text-center\">{{'crear cuenta' | titlecase}}</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-item class=\"ion-padding-top\">\r\n              <ion-label position=\"stacked\">Email</ion-label>\r\n              <ion-input formControlName=\"email\" type=\"email\" placeholder=\"Email\" name=\"email\"></ion-input>\r\n            </ion-item>\r\n            <ion-item class=\"ion-padding-top\">\r\n              <ion-label position=\"stacked\">Nombre de usuario</ion-label>\r\n              <ion-input formControlName=\"username\" type=\"text\"\r\n                 placeholder=\"Nombre de usuario\" name=\"username\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <ion-item class=\"ion-padding-top\">\r\n              <ion-label position=\"stacked\">Contraseña</ion-label>\r\n              <ion-input formControlName=\"password\" type=\"password\" placeholder=\"Contraseña\" name=\"password\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <ion-item class=\"ion-padding-top\">\r\n              <ion-label position=\"stacked\">Repetir Contraseña</ion-label>\r\n              <ion-input formControlName=\"confirmedPassword\" type=\"password\" placeholder=\"Repetir Contraseña\"\r\n                         name=\"confirmedPassword\"\r\n                         (keyup)=\"validatePassword()\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <ion-label class=\"error-label\" position=\"stacked\"\r\n               *ngIf=\"confirmedPassword.errors?.invalid\">Las contraseñas deben coincidir\r\n            </ion-label>\r\n            <ion-button [disabled]=\"!this.registerForm.valid\" class=\"ion-margin-top\"\r\n               expand=\"block\" type=\"submit\">Crear cuenta\r\n            </ion-button>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </form>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_register_register_module_ts.js.map