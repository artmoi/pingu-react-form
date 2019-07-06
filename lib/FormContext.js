"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var _a = react_1.default.createContext(null), Provider = _a.Provider, Consumer = _a.Consumer;
exports.FormProvider = Provider;
exports.FormConsumer = Consumer;
function withForm(FormComponent) {
    return function (props) { return react_1.default.createElement(exports.FormConsumer, null, function (context) {
        var combinedProps = __assign({}, context, props);
        return react_1.default.createElement(FormComponent, __assign({}, combinedProps));
    }); };
}
exports.withForm = withForm;
//# sourceMappingURL=FormContext.js.map