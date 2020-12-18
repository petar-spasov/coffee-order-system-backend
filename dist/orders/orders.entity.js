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
exports.Orders = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const coffeeSort_entity_1 = require("../coffeeSorts/coffeeSort.entity");
const status_entity_1 = require("../statuses/status.entity");
let Orders = class Orders {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Orders.prototype, "orderId", void 0);
__decorate([
    typeorm_1.OneToOne(type => user_entity_1.User),
    typeorm_1.JoinColumn(),
    __metadata("design:type", user_entity_1.User)
], Orders.prototype, "user", void 0);
__decorate([
    typeorm_1.OneToOne(type => coffeeSort_entity_1.CoffeeSort),
    typeorm_1.JoinColumn(),
    __metadata("design:type", coffeeSort_entity_1.CoffeeSort)
], Orders.prototype, "sort", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Orders.prototype, "amount", void 0);
__decorate([
    typeorm_1.OneToOne(type => status_entity_1.Status),
    typeorm_1.JoinColumn(),
    __metadata("design:type", status_entity_1.Status)
], Orders.prototype, "status", void 0);
Orders = __decorate([
    typeorm_1.Entity()
], Orders);
exports.Orders = Orders;
//# sourceMappingURL=orders.entity.js.map