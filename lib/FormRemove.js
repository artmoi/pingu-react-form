"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var FormRemove = (function (_super) {
    __extends(FormRemove, _super);
    function FormRemove() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormRemove.prototype.render = function () {
        return this.props.children;
    };
    return FormRemove;
}(react_1.default.Component));
exports.FormRemove = FormRemove;
//# sourceMappingURL=FormRemove.js.map