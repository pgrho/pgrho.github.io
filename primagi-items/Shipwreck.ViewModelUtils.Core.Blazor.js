/*!
 * Shipwreck.ViewModelUtils.Core.Blazor
 */
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
// @ts-ignore
var Shipwreck;
(function (Shipwreck) {
    var ViewModelUtils;
    (function (ViewModelUtils) {
        function focus(element, selectAll) {
            if (element) {
                element.focus();
                if (selectAll) {
                    element.select();
                }
            }
        }
        ViewModelUtils.focus = focus;
    })(ViewModelUtils = Shipwreck.ViewModelUtils || (Shipwreck.ViewModelUtils = {}));
})(Shipwreck || (Shipwreck = {}));
// @ts-ignore
var Shipwreck;
(function (Shipwreck) {
    var ViewModelUtils;
    (function (ViewModelUtils) {
        var WR = '__ItemsControl__onResize';
        var ES = '__ItemsControl__onScroll';
        function scrollTo(element, left, top, smooth) {
            if (element) {
                element.scrollTo({
                    left: left,
                    top: top,
                    behavior: smooth ? 'smooth' : 'auto'
                });
            }
        }
        ViewModelUtils.scrollTo = scrollTo;
        function attachWindowResize(obj, element) {
            var _this = this;
            if (obj && !element[WR]) {
                var h = function () { return __awaiter(_this, void 0, void 0, function () {
                    var ex_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, obj.invokeMethodAsync('OnWindowResized')];
                            case 1:
                                _a.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                ex_1 = _a.sent();
                                console.log(ex_1);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); };
                element[WR] = h;
                window.addEventListener('resize', h, { passive: true });
            }
        }
        ViewModelUtils.attachWindowResize = attachWindowResize;
        function detachWindowResize(obj, element) {
            var h;
            if (obj && (h = element[WR])) {
                window.removeEventListener('resize', h);
                delete element[WR];
            }
        }
        ViewModelUtils.detachWindowResize = detachWindowResize;
        function attachElementScroll(element, obj, itemSelector) {
            var _this = this;
            if (obj) {
                var h = element[ES];
                if (h) {
                    element.removeEventListener('scroll', h);
                }
                h = function () { return __awaiter(_this, void 0, void 0, function () {
                    var ex_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, obj.invokeMethodAsync('OnElementScroll', JSON.stringify(__itemsControlInfo(element, itemSelector)))];
                            case 1:
                                _a.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                ex_2 = _a.sent();
                                console.log(ex_2);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); };
                element[ES] = h;
                element.addEventListener('scroll', h, { passive: true });
            }
        }
        ViewModelUtils.attachElementScroll = attachElementScroll;
        function detachElementScroll(element) {
            if (element) {
                var h = element[ES];
                if (h) {
                    element.removeEventListener('scroll', h);
                    delete element[ES];
                }
            }
        }
        ViewModelUtils.detachElementScroll = detachElementScroll;
        function getScrollInfo(element) {
            return JSON.stringify(__scrollInfo(element));
        }
        ViewModelUtils.getScrollInfo = getScrollInfo;
        function getItemsControlScrollInfo(element, itemSelector) {
            return JSON.stringify(__itemsControlInfo(element, itemSelector));
        }
        ViewModelUtils.getItemsControlScrollInfo = getItemsControlScrollInfo;
        function scrollToItem(element, itemSelector, index, localY, column, smooth) {
            if (element) {
                var items = element.querySelectorAll(itemSelector);
                for (var i = 0; i < items.length; i++) {
                    var e = items[i];
                    var sf = parseInt(e.getAttribute('data-itemindex'), 10);
                    if (sf <= index) {
                        var la = e.getAttribute('data-itemlastindex');
                        if (la) {
                            var sl = parseInt(la, 10);
                            if (index <= sl) {
                                var b = __offsetInfo(e);
                                var nst = b.Top + Math.floor((index - sf) / column) * b.Height + localY;
                                if (Math.abs(nst - element.scrollTop) > 16) {
                                    element.scrollTo({
                                        left: 0,
                                        top: nst,
                                        behavior: smooth ? 'smooth' : 'auto'
                                    });
                                }
                                return;
                            }
                        }
                        else if (sf === index) {
                            var b = __offsetInfo(e);
                            var nst = b.Top + localY;
                            if (Math.abs(nst - element.scrollTop) * 2 > b.Height) {
                                element.scrollTo({
                                    left: 0,
                                    top: nst,
                                    behavior: smooth ? 'smooth' : 'auto'
                                });
                            }
                            return;
                        }
                    }
                }
            }
        }
        ViewModelUtils.scrollToItem = scrollToItem;
        function __itemsControlInfo(element, itemSelector) {
            var si = __scrollInfo(element);
            var items = element.querySelectorAll(itemSelector);
            var vt = si.ScrollTop;
            var vb = vt + si.ClientHeight;
            var minWidth = Number.MAX_SAFE_INTEGER;
            var minHeight = Number.MAX_SAFE_INTEGER;
            var min;
            var max;
            var elements = [];
            for (var i = 0; i < items.length; i++) {
                var e = items[i];
                var b = __offsetInfo(e);
                var bottom = b.Top + b.Height;
                if (vt <= bottom
                    && e.offsetTop <= vb) {
                    var sf = parseInt(e.getAttribute('data-itemindex'), 10);
                    if (sf >= 0) {
                        var la = e.getAttribute('data-itemlastindex');
                        var sl = la ? parseInt(la, 10) : sf;
                        b.FirstIndex = sf;
                        b.LastIndex = sl;
                        if (!min || min.FirstIndex > sf) {
                            min = b;
                        }
                        if (!max || max.LastIndex < sl) {
                            max = b;
                        }
                        if (!la) {
                            minWidth = Math.min(minWidth, b.Width);
                            minHeight = Math.min(minHeight, b.Height);
                        }
                        if (elements.length) {
                            var prev = elements[elements.length - 1];
                            if (prev.Top >= b.Top) {
                                prev.LastIndex = b.LastIndex;
                                prev.Height = Math.max(prev.Height, b.Top + b.Height - prev.Top);
                                continue;
                            }
                        }
                        elements.push({
                            FirstIndex: b.FirstIndex,
                            LastIndex: b.LastIndex,
                            Top: b.Top,
                            Height: b.Height
                        });
                    }
                }
            }
            return {
                Viewport: si,
                First: min,
                Last: max,
                MinWidth: minWidth !== Number.MAX_SAFE_INTEGER ? minWidth : 0,
                MinHeight: minHeight !== Number.MAX_SAFE_INTEGER ? minHeight : 0,
                Lines: elements
            };
        }
        function __scrollInfo(element) {
            return ({
                ClientLeft: element.clientLeft,
                ClientTop: element.clientTop,
                ClientWidth: element.clientWidth,
                ClientHeight: element.clientHeight,
                ScrollLeft: element.scrollLeft,
                ScrollTop: element.scrollTop,
                ScrollWidth: element.scrollWidth,
                ScrollHeight: element.scrollHeight
            });
        }
        function __parsePx(s) {
            return s !== null && s !== undefined && /^([\-+]?\d+(?:\.\d+)?)px$/.test(s) ? parseFloat(RegExp.$1) : 0;
        }
        function __offsetInfo(element) {
            var s = window.getComputedStyle(element);
            var ml = __parsePx(s.marginLeft);
            var mt = __parsePx(s.marginTop);
            //const mr = __parsePx(s.marginRight);
            //const mb = __parsePx(s.marginBottom);
            return ({
                Left: element.offsetLeft - ml,
                Top: element.offsetTop - mt,
                Width: element.offsetWidth + ml,
                Height: element.offsetHeight + mt
            });
        }
    })(ViewModelUtils = Shipwreck.ViewModelUtils || (Shipwreck.ViewModelUtils = {}));
})(Shipwreck || (Shipwreck = {}));
// @ts-ignore
var Shipwreck;
(function (Shipwreck) {
    var ViewModelUtils;
    (function (ViewModelUtils) {
        function readLocalStorage(name) {
            return localStorage[name];
        }
        ViewModelUtils.readLocalStorage = readLocalStorage;
        function writeLocalStorage(name, value) {
            localStorage[name] = value;
        }
        ViewModelUtils.writeLocalStorage = writeLocalStorage;
        function readSessionStorage(name) {
            return sessionStorage[name];
        }
        ViewModelUtils.readSessionStorage = readSessionStorage;
        function writeSessionStorage(name, value) {
            sessionStorage[name] = value;
        }
        ViewModelUtils.writeSessionStorage = writeSessionStorage;
        function userAgent() {
            return navigator.userAgent;
        }
        ViewModelUtils.userAgent = userAgent;
    })(ViewModelUtils = Shipwreck.ViewModelUtils || (Shipwreck.ViewModelUtils = {}));
})(Shipwreck || (Shipwreck = {}));
// @ts-ignore
var Shipwreck;
(function (Shipwreck) {
    var ViewModelUtils;
    (function (ViewModelUtils) {
        function sendFiles(method, url, headersJson, files) {
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    switch (xhr.readyState) {
                        case XMLHttpRequest.DONE:
                            xhr.onreadystatechange = null;
                            try {
                                resolve(JSON.stringify({
                                    Status: xhr.status,
                                    StatusText: xhr.statusText,
                                    ResponseText: xhr.responseText
                                }));
                            }
                            catch (ex) {
                                reject(ex);
                            }
                            break;
                    }
                };
                xhr.open(method, url);
                xhr.setRequestHeader("Accept", "application/json, text/javascript, */*; q = 0.01");
                var reqHeaders = JSON.parse(headersJson || '{}');
                for (var _i = 0, _a = Object.getOwnPropertyNames(reqHeaders); _i < _a.length; _i++) {
                    var k = _a[_i];
                    xhr.setRequestHeader(k, reqHeaders[k]);
                }
                var fd = new FormData();
                if (Array.isArray(files)) {
                    for (var _b = 0, _c = files; _b < _c.length; _b++) {
                        var f = _c[_b];
                        if (f instanceof File) {
                            fd.append("file", f);
                        }
                        else if (f instanceof HTMLInputElement) {
                            for (var i = 0; i < f.files.length; i++) {
                                fd.append("file", f.files[i]);
                            }
                        }
                    }
                }
                else if (files instanceof File) {
                    fd.append("file", files);
                }
                else if (files instanceof HTMLInputElement) {
                    for (var i = 0; i < files.files.length; i++) {
                        fd.append("file", files.files[i]);
                    }
                }
                xhr.send(fd);
            });
        }
        ViewModelUtils.sendFiles = sendFiles;
    })(ViewModelUtils = Shipwreck.ViewModelUtils || (Shipwreck.ViewModelUtils = {}));
})(Shipwreck || (Shipwreck = {}));
// @ts-ignore
var Shipwreck;
(function (Shipwreck) {
    var ViewModelUtils;
    (function (ViewModelUtils) {
        function openWindow(url, name, features) {
            var w = window.open(url, name, features);
            if (w) {
                w.focus();
                return true;
            }
            else {
                return false;
            }
        }
        ViewModelUtils.openWindow = openWindow;
    })(ViewModelUtils = Shipwreck.ViewModelUtils || (Shipwreck.ViewModelUtils = {}));
})(Shipwreck || (Shipwreck = {}));
