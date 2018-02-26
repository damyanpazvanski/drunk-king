"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_1 = require("./data");
var RuleService = /** @class */ (function () {
    function RuleService() {
        this.rules = {};
        this.rules = data_1.default.rules;
    }
    RuleService.prototype.getRule = function (id) {
        return this.rules[id];
    };
    RuleService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], RuleService);
    return RuleService;
}());
exports.RuleService = RuleService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicnVsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLCtCQUEyQjtBQUczQjtJQUdJO1FBRlEsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUdmLElBQUksQ0FBQyxLQUFLLEdBQUcsY0FBSyxDQUFDLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsNkJBQU8sR0FBUCxVQUFRLEVBQUU7UUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBVFEsV0FBVztRQUR2QixpQkFBVSxFQUFFOztPQUNBLFdBQVcsQ0FVdkI7SUFBRCxrQkFBQztDQUFBLEFBVkQsSUFVQztBQVZZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHJ1bGVzIGZyb20gJy4vZGF0YSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSdWxlU2VydmljZSB7XG4gICAgcHJpdmF0ZSBydWxlcyA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucnVsZXMgPSBydWxlcy5ydWxlcztcbiAgICB9XG5cbiAgICBnZXRSdWxlKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJ1bGVzW2lkXTtcbiAgICB9XG59XG4iXX0=