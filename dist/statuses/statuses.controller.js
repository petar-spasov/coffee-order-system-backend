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
exports.StatusesController = void 0;
const common_1 = require("@nestjs/common");
const statuses_service_1 = require("./statuses.service");
const JwtAuth_guard_1 = require("../auth/JwtAuth.guard");
let StatusesController = class StatusesController {
    constructor(statusesService) {
        this.statusesService = statusesService;
    }
    getAll() {
        return this.statusesService.getStatuses();
    }
};
__decorate([
    common_1.Get(),
    common_1.UseGuards(JwtAuth_guard_1.default),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StatusesController.prototype, "getAll", null);
StatusesController = __decorate([
    common_1.Controller('statuses'),
    __metadata("design:paramtypes", [statuses_service_1.StatusesService])
], StatusesController);
exports.StatusesController = StatusesController;
//# sourceMappingURL=statuses.controller.js.map