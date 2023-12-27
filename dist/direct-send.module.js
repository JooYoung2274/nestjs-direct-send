"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DirectSendModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectSendModule = void 0;
const common_1 = require("@nestjs/common");
const direct_send_service_1 = require("./direct-send.service");
let DirectSendModule = DirectSendModule_1 = class DirectSendModule {
    static register(options) {
        return {
            module: DirectSendModule_1,
            providers: [
                {
                    provide: direct_send_service_1.DirectSendService,
                    useValue: new direct_send_service_1.DirectSendService(options),
                },
            ],
            exports: [direct_send_service_1.DirectSendService],
        };
    }
};
DirectSendModule = DirectSendModule_1 = __decorate([
    (0, common_1.Module)({})
], DirectSendModule);
exports.DirectSendModule = DirectSendModule;
//# sourceMappingURL=direct-send.module.js.map