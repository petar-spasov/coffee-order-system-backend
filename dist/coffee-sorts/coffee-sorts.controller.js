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
exports.CoffeeSortsController = void 0;
const common_1 = require("@nestjs/common");
const coffee_sorts_service_1 = require("./coffee-sorts.service");
const JwtAuth_guard_1 = require("../auth/JwtAuth.guard");
let CoffeeSortsController = class CoffeeSortsController {
    constructor(coffeeSortsService) {
        this.coffeeSortsService = coffeeSortsService;
    }
    getAll() {
        return this.coffeeSortsService.getCoffeeSorts();
    }
};
__decorate([
    common_1.Get(),
    common_1.UseGuards(JwtAuth_guard_1.default),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CoffeeSortsController.prototype, "getAll", null);
CoffeeSortsController = __decorate([
    common_1.Controller('coffee-sorts'),
    __metadata("design:paramtypes", [coffee_sorts_service_1.CoffeeSortsService])
], CoffeeSortsController);
exports.CoffeeSortsController = CoffeeSortsController;
//# sourceMappingURL=coffee-sorts.controller.js.map