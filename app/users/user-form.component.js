System.register(['angular2/core', 'angular2/common', '../shared/basic-validators', 'angular2/router', './user.service', './user'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, basic_validators_1, router_1, user_service_1, router_2, user_1;
    var UserFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (basic_validators_1_1) {
                basic_validators_1 = basic_validators_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            UserFormComponent = (function () {
                function UserFormComponent(fb, _userService, _router, _routeParams) {
                    this._userService = _userService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.user = new user_1.User();
                    this.userForm = fb.group({
                        name: ['', common_1.Validators.required],
                        email: ['', basic_validators_1.BasicValidators.invalidEmail],
                        phone: [],
                        address: fb.group({
                            street: [],
                            suite: [],
                            city: [],
                            zipcode: []
                        })
                    });
                }
                UserFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get('id');
                    this.title = (id) ? 'Edit user' : 'New user';
                    if (!id) {
                        return;
                    }
                    this._userService
                        .getUser(id)
                        .subscribe(function (user) { _this.user = user; }, function (response) {
                        if (response.status === '404') {
                            _this._router.navigate(['NotFound']);
                        }
                    });
                };
                UserFormComponent.prototype.routerCanDeactivate = function () {
                    if (this.userForm.dirty) {
                        return window.confirm('Are you sure to want to stop editing this form ?');
                    }
                };
                UserFormComponent.prototype.saveUser = function () {
                    var _this = this;
                    var result;
                    if (this.user.id) {
                        result = this._userService.updateUser(this.user);
                    }
                    else {
                        result = this._userService.addUser(this.user);
                    }
                    result.subscribe(function () { return _this._router.navigate(['Users']); });
                };
                UserFormComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/users/user-form.template.html',
                        providers: [user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, user_service_1.UserService, router_2.Router, router_1.RouteParams])
                ], UserFormComponent);
                return UserFormComponent;
            }());
            exports_1("UserFormComponent", UserFormComponent);
        }
    }
});
//# sourceMappingURL=user-form.component.js.map