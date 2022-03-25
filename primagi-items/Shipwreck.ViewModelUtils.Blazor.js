/*!
 * Shipwreck.ViewModelUtils.Blazor
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
var Shipwreck;
(function (Shipwreck) {
    var ViewModelUtils;
    (function (ViewModelUtils) {
        function setIndeterminate(id, value) {
            var e = document.getElementById(id);
            if (e) {
                e.indeterminate = value;
                return;
            }
            $(id).prop('indeterminate', value);
        }
        ViewModelUtils.setIndeterminate = setIndeterminate;
    })(ViewModelUtils = Shipwreck.ViewModelUtils || (Shipwreck.ViewModelUtils = {}));
})(Shipwreck || (Shipwreck = {}));
var Shipwreck;
(function (Shipwreck) {
    var ViewModelUtils;
    (function (ViewModelUtils) {
        function initDateTimePicker(element, obj, value, format, useCurrent) {
            var jq = $(element);
            jq.val(value);
            if (jq.data('datetimepicker')) {
                jq.datetimepicker('format', format);
                jq.datetimepicker('useCurrent', useCurrent);
            }
            else {
                jq.on('change.datetimepicker', function (e) {
                    obj.invokeMethodAsync('SetValueFromJS', e.currentTarget.value);
                }).datetimepicker({
                    format: format,
                    locale: 'ja',
                    useCurrent: useCurrent,
                    extraFormats: [
                        "YYYY-MM-DD HH:mm:ss",
                        "YYYY-MM-DD HH:mm",
                        "YYYY-MM-DD HH",
                        "YYYY-MM-DD",
                        "YYYY-MM",
                        "YYYY",
                    ].map(function (e) { return [e, e.replace('-', '/')]; })
                        .reduce(function (a, b) { return a.concat(b); })
                        .map(function (e) { return [e, e.replace(' HH', 'THH')]; })
                        .reduce(function (a, b) { return a.concat(b); })
                        .sort(function (a, b) { return (b.length - a.length) || a.localeCompare(b); })
                        .filter(function (e, i, a) { return e !== a[i - 1]; })
                });
            }
            jq.val(value);
        }
        ViewModelUtils.initDateTimePicker = initDateTimePicker;
    })(ViewModelUtils = Shipwreck.ViewModelUtils || (Shipwreck.ViewModelUtils = {}));
})(Shipwreck || (Shipwreck = {}));
(function () {
    var locale = (navigator.userLanguage
        || navigator.browserLanguage
        || navigator.language
        || 'en').substr(0, 2);
    window.moment.locale(locale);
    var _$ = $;
    _$.fn.datetimepicker.Constructor.Default = _$.extend({}, _$.fn.datetimepicker.Constructor.Default, {
        icons: {
            time: 'far fa-clock',
            date: 'far fa-calendar',
            up: 'fas fa-arrow-up',
            down: 'fas fa-arrow-down',
            previous: 'fas fa-chevron-left',
            next: 'fas fa-chevron-right',
            today: 'far fa-calendar-check',
            clear: 'fas fa-trash',
            close: 'fas fa-times'
        },
        dayViewHeaderFormat: /^ja$/i.test(locale) ? 'YYYY年 MMM' : 'MMMM YYYY'
    });
}());
// @ts-ignore
var Shipwreck;
(function (Shipwreck) {
    var ViewModelUtils;
    (function (ViewModelUtils) {
        function downloadFile(obj, method, url, headersJson, content, contentType, openFile) {
            return __awaiter(this, void 0, void 0, function () {
                var reqHeaders, res, resHeaders_1, b, fr_1, fn, ou, a;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            reqHeaders = JSON.parse(headersJson || '{}');
                            if (contentType && content) {
                                reqHeaders['Content-Type'] = content;
                            }
                            return [4 /*yield*/, fetch(url, {
                                    method: method,
                                    headers: reqHeaders,
                                    body: content
                                })];
                        case 1:
                            res = _a.sent();
                            if (!res.ok) return [3 /*break*/, 6];
                            resHeaders_1 = {};
                            res.headers.forEach(function (v, k) { return resHeaders_1[k] = v; });
                            return [4 /*yield*/, res.blob()];
                        case 2:
                            b = _a.sent();
                            if (!(openFile && b.size < (1 << 24))) return [3 /*break*/, 3];
                            fr_1 = new FileReader();
                            fr_1.onload = function () {
                                window.open(fr_1.result);
                            };
                            fr_1.readAsDataURL(b);
                            return [3 /*break*/, 5];
                        case 3: return [4 /*yield*/, obj.invokeMethodAsync('GetDownloadingFileName', url, res.url, JSON.stringify(resHeaders_1))];
                        case 4:
                            fn = (_a.sent()) || 'download';
                            ou = URL.createObjectURL(b);
                            a = document.createElement('a');
                            a.style.display = 'none';
                            a.href = ou;
                            a.download = fn;
                            document.body.appendChild(a);
                            a.click();
                            document.body.removeChild(a);
                            URL.revokeObjectURL(ou);
                            _a.label = 5;
                        case 5: return [3 /*break*/, 7];
                        case 6: throw "\u30D5\u30A1\u30A4\u30EB\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002" + res.status + " " + res.statusText;
                        case 7: return [2 /*return*/];
                    }
                });
            });
        }
        ViewModelUtils.downloadFile = downloadFile;
    })(ViewModelUtils = Shipwreck.ViewModelUtils || (Shipwreck.ViewModelUtils = {}));
})(Shipwreck || (Shipwreck = {}));
// @ts-ignore
var Shipwreck;
(function (Shipwreck) {
    var ViewModelUtils;
    (function (ViewModelUtils) {
        function toggleModal(element, isOpen, obj) {
            $(element).one('hidden.bs.modal', function () {
                obj.invokeMethodAsync('OnClosed');
            }).one('click', function (e) {
                if (e.target === e.currentTarget) {
                    $(e.currentTarget).modal('hide');
                }
            }).modal({
                show: !!isOpen,
                backdrop: false
            }).modal(isOpen ? 'show' : 'hide');
        }
        ViewModelUtils.toggleModal = toggleModal;
    })(ViewModelUtils = Shipwreck.ViewModelUtils || (Shipwreck.ViewModelUtils = {}));
})(Shipwreck || (Shipwreck = {}));
/// <reference path="../node_modules/popper.js/index.d.ts" />
var Popper;
var Shipwreck;
(function (Shipwreck) {
    var ViewModelUtils;
    (function (ViewModelUtils) {
        function initializePopper(obj, reference, popper, boundaries, arrow) {
            var placement;
            var handleData = function (data, isCreation) {
                if (data.placement !== placement) {
                    placement = data.placement;
                    obj.invokeMethodAsync('OnPlacementChanged', placement);
                }
            };
            var p = new Popper(reference, popper, {
                placement: 'right-start',
                modifiers: {
                    preventOverflow: {
                        boundariesElement: boundaries
                    },
                    flip: {
                        behavior: 'flip',
                        boundariesElement: boundaries
                    }, arrow: {
                        element: arrow
                    }
                },
                onCreate: function (data) {
                    handleData(data, true);
                },
                onUpdate: function (data) {
                    handleData(data, false);
                }
            });
            var h = function (ev) {
                for (var p_1 = ev.relatedTarget; p_1; p_1 = p_1.parentElement) {
                    if (p_1 === reference || p_1 === popper) {
                        return;
                    }
                }
                p.destroy();
                obj.invokeMethodAsync('OnDestroy');
                $([reference, popper]).off('focusout', h);
            };
            $([reference, popper]).focusout(h);
        }
        ViewModelUtils.initializePopper = initializePopper;
    })(ViewModelUtils = Shipwreck.ViewModelUtils || (Shipwreck.ViewModelUtils = {}));
})(Shipwreck || (Shipwreck = {}));
