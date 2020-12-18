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
exports.OrderDto = void 0;
const User_dto_1 = require("../../users/dto/User.dto");
const coffee_sort_entity_1 = require("../../coffee-sorts/coffee-sort.entity");
const status_entity_1 = require("../../statuses/status.entity");
const class_validator_1 = require("class-validator");
class OrderDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], OrderDto.prototype, "orderId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", User_dto_1.UserDto)
], OrderDto.prototype, "user", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", coffee_sort_entity_1.CoffeeSort)
], OrderDto.prototype, "sort", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], OrderDto.prototype, "amount", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", status_entity_1.Status)
], OrderDto.prototype, "status", void 0);
exports.OrderDto = OrderDto;
//# sourceMappingURL=Order.dto.js.map