"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rol = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("./User");
var Rol = exports.Rol = /** @class */ (function () {
    function Rol() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Rol.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Rol.prototype, "rol", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: true }),
        __metadata("design:type", Boolean)
    ], Rol.prototype, "isActive", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return User_1.User; }, function (user) { return user.id; }),
        __metadata("design:type", Array)
    ], Rol.prototype, "users", void 0);
    Rol = __decorate([
        (0, typeorm_1.Entity)()
    ], Rol);
    return Rol;
}());
//# sourceMappingURL=Rol.js.map