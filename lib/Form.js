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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __importDefault(require("lodash"));
var react_1 = __importDefault(require("react"));
var Yup = __importStar(require("yup"));
var Util_1 = require("./Util");
var FormContext_1 = require("./FormContext");
var Form = (function (_super) {
    __extends(Form, _super);
    function Form() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = null;
        return _this;
    }
    Form.getDerivedStateFromProps = function (props, state) {
        if (!state
            || (props.data !== state.sourceData)) {
            return {
                collectionSchema: Form.castSchema(props.schema),
                sourceData: props.data,
                editedData: Form.castData(lodash_1.default.clone(props.data)),
                dataGeneration: {},
                validationErrors: Form.defaultValidationErrors(props.validationErrors),
            };
        }
        return null;
    };
    Form.defaultStructure = function () {
        return [];
    };
    Form.castData = function (value) {
        if (!value) {
            return Form.defaultStructure();
        }
        if (!lodash_1.default.isArray(value)) {
            return [value];
        }
        return value;
    };
    Form.castSchema = function (schema) {
        if (!schema) {
            return Yup.array();
        }
        else if (schema.describe().type == "array") {
            return schema;
        }
        else {
            return new Yup.array().of(schema);
        }
    };
    Form.defaultValidationErrors = function (validationErrors) {
        return validationErrors || {};
    };
    Form.prototype.render = function () {
        return this.props.useFormTag
            ? this.renderWithFormTag()
            : this.renderWithoutFormTag();
    };
    Form.prototype.renderWithFormTag = function () {
        return react_1.default.createElement("form", { name: this.props.name, method: this.props.method, action: this.props.action }, this.renderData());
    };
    Form.prototype.renderWithoutFormTag = function () {
        return this.renderData();
    };
    Form.prototype.renderData = function () {
        var _this = this;
        if (!this.state.editedData) {
            return null;
        }
        return (this.state.editedData).map(function (datum, index) {
            var children = _this.props.children;
            return (react_1.default.createElement(react_1.default.Fragment, { key: _this.calculateIdentity(index) },
                react_1.default.createElement(FormContext_1.FormProvider, { value: {
                        form: _this,
                        immutable: _this.checkImmutable(datum),
                        index: index,
                        data: datum,
                        validationErrors: _this.state.validationErrors,
                    } }, children)));
        });
    };
    Form.prototype.add = function (datum) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2];
            });
        });
    };
    Form.prototype.setFieldValue = function (index, name, value) {
        return __awaiter(this, void 0, void 0, function () {
            var fieldPath, originalData, editedData;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, this.setStateAsync({
                            dataGeneration: __assign({}, this.state.dataGeneration, (_a = {}, _a[index] = (this.state.dataGeneration[index] || 0) + 1, _a)),
                        })];
                    case 1:
                        _b.sent();
                        fieldPath = "[" + index + "]." + name;
                        if (!this.validate(index, name, value)) return [3, 5];
                        originalData = this.state.editedData;
                        editedData = this.state.editedData.slice();
                        if (lodash_1.default.isUndefined(value)) {
                            lodash_1.default.unset(editedData, fieldPath);
                        }
                        else {
                            lodash_1.default.set(editedData, fieldPath, value);
                        }
                        return [4, this.setStateAsync({
                                editedData: editedData,
                            })];
                    case 2:
                        _b.sent();
                        return [4, this.clearValidationError(index, name)];
                    case 3:
                        _b.sent();
                        return [4, this.changed(editedData[index], originalData[index])];
                    case 4:
                        _b.sent();
                        return [3, 5];
                    case 5: return [2];
                }
            });
        });
    };
    Form.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var editedData, validationErrors_1, indexedValidationErrors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4, this.checkForm()];
                    case 1:
                        _a.sent();
                        editedData = lodash_1.default.isArray(this.props.data)
                            ? this.state.editedData
                            : this.state.editedData[0];
                        this.props.onSubmit && this.props.onSubmit(editedData);
                        return [3, 4];
                    case 2:
                        validationErrors_1 = _a.sent();
                        indexedValidationErrors = this.indexErrors(validationErrors_1);
                        return [4, this.setStateAsync({
                                validationErrors: indexedValidationErrors,
                            })];
                    case 3:
                        _a.sent();
                        this.props.onInvalid && this.props.onInvalid(this.state.validationErrors);
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    };
    Form.prototype.validate = function (index, name, value) {
        return __awaiter(this, void 0, void 0, function () {
            var fieldSchema, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.props.schema) {
                            return [2, true];
                        }
                        fieldSchema = Yup.reach(this.props.schema, name);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 5]);
                        return [4, fieldSchema.validate(value)];
                    case 2:
                        _a.sent();
                        return [2, true];
                    case 3:
                        error_1 = _a.sent();
                        return [4, this.setValidationError(index, name, error_1)];
                    case 4:
                        _a.sent();
                        return [3, 5];
                    case 5: return [2, false];
                }
            });
        });
    };
    Form.prototype.setValidationError = function (index, name, error) {
        return __awaiter(this, void 0, void 0, function () {
            var fieldPath, validationErrors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fieldPath = index + "." + name;
                        validationErrors = lodash_1.default.clone(this.state.validationErrors);
                        lodash_1.default.set(validationErrors, fieldPath, error);
                        return [4, this.setStateAsync({ validationErrors: validationErrors })];
                    case 1:
                        _a.sent();
                        this.props.onInvalid && this.props.onInvalid(validationErrors);
                        return [2];
                }
            });
        });
    };
    Form.prototype.clearValidationError = function (index, name) {
        return __awaiter(this, void 0, void 0, function () {
            var fieldPath, validationErrors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fieldPath = index + "." + name;
                        validationErrors = lodash_1.default.clone(this.state.validationErrors);
                        lodash_1.default.unset(validationErrors, fieldPath);
                        return [4, this.setStateAsync({ validationErrors: validationErrors })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Form.prototype.clearValidationErrors = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.setStateAsync({
                            validationErrors: Form.defaultValidationErrors(),
                        })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Form.prototype.changed = function (editedItem, originalItem) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.props.onChange && this.props.onChange(editedItem, originalItem);
                return [2];
            });
        });
    };
    Form.prototype.checkForm = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.props.schema) {
                            return [2];
                        }
                        return [4, this.state.collectionSchema.validate(this.state.editedData, {
                                abortEarly: false,
                            })];
                    case 1:
                        _a.sent();
                        return [4, this.clearValidationErrors()];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Form.prototype.indexErrors = function (e) {
        return lodash_1.default.reduce(e.inner, function (previous, current) {
            var nextSet = lodash_1.default.clone(previous);
            lodash_1.default.set(nextSet, current.path, current);
            return nextSet;
        }, Form.defaultValidationErrors());
    };
    Form.prototype.checkImmutable = function (datum) {
        if (lodash_1.default.isFunction(this.props.immutable)) {
            return this.props.immutable(datum);
        }
        return this.props.immutable && lodash_1.default.chain(datum)
            .pick(this.props.identityProperties)
            .toArray()
            .filter()
            .value()
            .length === this.props.identityProperties.length;
    };
    Form.prototype.calculateIdentity = function (index) {
        return lodash_1.default.chain(this.state.editedData[index])
            .pick(this.props.identityProperties)
            .values()
            .unshift(index)
            .value()
            .join("-");
    };
    Form.prototype.setStateAsync = function (state) {
        return __awaiter(this, void 0, void 0, function () {
            var deferred;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        deferred = Util_1.createDeferred();
                        this.setState(state, function () { return deferred.resolve(); });
                        return [4, deferred.promise];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Form.defaultProps = {
        useFormTag: false,
        immutable: false,
        identityProperties: ["id"],
    };
    return Form;
}(react_1.default.PureComponent));
exports.Form = Form;
//# sourceMappingURL=Form.js.map