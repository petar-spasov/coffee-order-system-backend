"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeSortsModule = void 0;
const common_1 = require("@nestjs/common");
const coffee_sorts_controller_1 = require("./coffee-sorts.controller");
const coffee_sorts_service_1 = require("./coffee-sorts.service");
const typeorm_1 = require("@nestjs/typeorm");
const coffee_sort_entity_1 = require("./coffee-sort.entity");
let CoffeeSortsModule = class CoffeeSortsModule {
};
CoffeeSortsModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([coffee_sort_entity_1.CoffeeSort]),
        ],
        controllers: [coffee_sorts_controller_1.CoffeeSortsController],
        providers: [coffee_sorts_service_1.CoffeeSortsService]
    })
], CoffeeSortsModule);
exports.CoffeeSortsModule = CoffeeSortsModule;
//# sourceMappingURL=coffee-sorts.module.js.map