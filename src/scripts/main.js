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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var baseUrl = 'https://fedt.unruffledneumann.xyz/api/v1';
var myHeaders = new Headers();
myHeaders.append('x-api-key', 'rLn*xzeZ%U+(PRuK%:v@C(a3j=<.[TWX(F^,EDrv');
function getCountries() {
    return __awaiter(this, void 0, void 0, function () {
        var res, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetch("".concat(baseUrl, "/countries"), {
                            method: 'GET',
                            headers: myHeaders,
                            redirect: 'follow',
                        })
                            .then(function (response) { return response.text(); })
                            .then(function (result) { return result; })
                            .catch(function (error) { return error.response; })];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, JSON.parse(res)];
                case 2:
                    error_1 = _a.sent();
                    console.log('Unexpected error:', error_1);
                    return [2 /*return*/, 'An unexpected error occurred'];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getStatesByCountryId(countryId) {
    return __awaiter(this, void 0, void 0, function () {
        var res, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetch("".concat(baseUrl, "/countries/").concat(countryId, "/states"), {
                            method: 'GET',
                            headers: myHeaders,
                            redirect: 'follow',
                        })
                            .then(function (response) { return response.text(); })
                            .then(function (result) { return result; })
                            .catch(function (error) { return error.response; })];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, JSON.parse(res)];
                case 2:
                    error_2 = _a.sent();
                    console.log('Unexpected error:', error_2);
                    return [2 /*return*/, 'An unexpected error occurred'];
                case 3: return [2 /*return*/];
            }
        });
    });
}
var countrySelect = document.getElementById('countryDropdown');
var stateSelect = document.getElementById('stateDropdown');
// Initialization of countries & state data container.
var countryOptions = [];
var stateOptions = [];
/**
 * To clear states options upon trigger and set values to null
 * @param el type HTMLSelectElement
 */
var onResetStateOptions = function (el) {
    el.selectedIndex = null;
    var i, L = el.options.length - 1;
    for (i = L; i >= 0; i--) {
        el.remove(i);
    }
};
/**
 * To Generate a hidden option / placeholder as default hidden values.
 * @param el type HTMLSelectElement
 */
var hiddenOption = function (el) {
    var option = document.createElement('option');
    option.textContent = "Select an option...";
    option.selected = true;
    option.disabled = true;
    el.appendChild(option);
};
/**
 * To create and populate options supplied to the stateOptions.
 * @param el type HTMLSelectElement
 */
var onCreateStateOptions = function (el) {
    onResetStateOptions(el);
    hiddenOption(el);
    stateOptions.forEach(function (optionData) {
        var option = document.createElement('option');
        option.value = optionData.id.toString();
        option.textContent = optionData.value;
        el.appendChild(option);
    });
};
// To set a placeholder disabled option on country/state select input as default upon page load.
hiddenOption(stateSelect);
hiddenOption(countrySelect);
// EVENT LISTENERS
countrySelect.addEventListener('change', function (event) {
    var selectedValue = event.target.value;
    console.log("Selected value: ".concat(selectedValue));
    //Call api to load state of specified country id.
    onLoadCountryStates(parseInt(selectedValue));
});
stateSelect.addEventListener('change', function (event) {
    var selectedValue = event.target.value;
    console.log("Selected value: ".concat(selectedValue));
});
// API Request Load countries initially
export function onLoad() {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Initialized Fetching Countries.');
                    return [4 /*yield*/, getCountries()];
                case 1:
                    res = _a.sent();
                    countryOptions = (Array.isArray(res) && res) || [];
                    // Populate country select el with options loaded from api.
                    countryOptions.forEach(function (optionData) {
                        var option = document.createElement('option');
                        option.value = optionData.id.toString();
                        option.textContent = optionData.value;
                        countrySelect.appendChild(option);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
// On load selected country states via countryId
export function onLoadCountryStates(countryId) {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Initialized Fetching Country States.');
                    return [4 /*yield*/, getStatesByCountryId(countryId)];
                case 1:
                    res = _a.sent();
                    stateOptions = (Array.isArray(res) && res) || [];
                    // Load on create options for the states.
                    onCreateStateOptions(stateSelect);
                    return [2 /*return*/];
            }
        });
    });
}
onLoad();
