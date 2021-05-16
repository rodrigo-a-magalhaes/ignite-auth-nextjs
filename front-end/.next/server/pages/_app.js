(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/contexts/AuthContext.tsx":
/*!**************************************!*\
  !*** ./src/contexts/AuthContext.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "signOut": function() { return /* binding */ signOut; },
/* harmony export */   "AuthContext": function() { return /* binding */ AuthContext; },
/* harmony export */   "AuthProvider": function() { return /* binding */ AuthProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_apiClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/apiClient */ "./src/services/apiClient.ts");

var _jsxFileName = "c:\\www\\_curso\\auth-nextjs-ignite\\front-end\\src\\contexts\\AuthContext.tsx";




let authChannel;
function signOut() {
  (0,nookies__WEBPACK_IMPORTED_MODULE_2__.destroyCookie)(undefined, 'nextauth.token');
  (0,nookies__WEBPACK_IMPORTED_MODULE_2__.destroyCookie)(undefined, 'nextauth.refreshToken');
  authChannel.postMessage('signOut');
  next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/');
}
const AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
function AuthProvider({
  children
}) {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const isAuthenticated = !!user;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    authChannel = new BroadcastChannel('auth');

    authChannel.onmessage = message => {
      switch (message.data) {
        case 'signOut':
          signOut();
          break;

        default:
          break;
      }
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const {
      'nextauth.token': token
    } = (0,nookies__WEBPACK_IMPORTED_MODULE_2__.parseCookies)();

    if (token) {
      _services_apiClient__WEBPACK_IMPORTED_MODULE_4__.api.get('/me').then(response => {
        const {
          email,
          permissions,
          roles
        } = response.data;
        setUser({
          email,
          roles,
          permissions
        });
      }).catch(() => {
        signOut();
      });
    }
  }, []);

  async function signIn({
    email,
    password
  }) {
    try {
      const response = await _services_apiClient__WEBPACK_IMPORTED_MODULE_4__.api.post('sessions', {
        email,
        password
      });
      const {
        token,
        refreshToken,
        permissions,
        roles
      } = response.data;
      (0,nookies__WEBPACK_IMPORTED_MODULE_2__.setCookie)(undefined, 'nextauth.token', token, {
        maxAge: 60 * 60 * 24 * 30,
        // 30 days
        path: '/'
      });
      (0,nookies__WEBPACK_IMPORTED_MODULE_2__.setCookie)(undefined, 'nextauth.refreshToken', refreshToken, {
        maxAge: 60 * 60 * 24 * 30,
        // 30 days
        path: '/'
      });
      setUser({
        email,
        permissions,
        roles
      });
      _services_apiClient__WEBPACK_IMPORTED_MODULE_4__.api.defaults.headers.Authorization = `Bearer ${token}`;
      next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/dashboard');
    } catch (err) {
      console.log(err);
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {
    value: {
      signIn,
      signOut,
      isAuthenticated,
      user
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/AuthContext */ "./src/contexts/AuthContext.tsx");

var _jsxFileName = "c:\\www\\_curso\\auth-nextjs-ignite\\front-end\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setupAPIClient": function() { return /* binding */ setupAPIClient; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/AuthContext */ "./src/contexts/AuthContext.tsx");
/* harmony import */ var _errors_AuthTokenError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errors/AuthTokenError */ "./src/services/errors/AuthTokenError.ts");




let isRefreshing = false;
let failedRequestsQueue = [];
function setupAPIClient(ctx = undefined) {
  let cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)(ctx);
  const api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: 'http://localhost:3333',
    headers: {
      Authorization: `Bearer ${cookies['nextauth.token']}`
    }
  });
  api.interceptors.response.use(response => {
    return response;
  }, error => {
    if (error.response.status === 401) {
      var _error$response$data;

      if (((_error$response$data = error.response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.code) === 'token.expired') {
        cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)(ctx);
        const {
          'nextauth.refreshToken': refreshToken
        } = cookies;
        const originalConfig = error.config;

        if (!isRefreshing) {
          isRefreshing = true;
          api.post('/refresh', {
            refreshToken
          }).then(response => {
            const {
              token
            } = response.data;
            (0,nookies__WEBPACK_IMPORTED_MODULE_1__.setCookie)(ctx, 'nextauth.token', token, {
              maxAge: 60 * 60 * 24 * 30,
              // 30 days
              path: '/'
            });
            (0,nookies__WEBPACK_IMPORTED_MODULE_1__.setCookie)(ctx, 'nextauth.refreshToken', response.data.refreshToken, {
              maxAge: 60 * 60 * 24 * 30,
              // 30 days
              path: '/'
            });
            api.defaults.headers['Authorization'] = `Bearer ${token}`;
            failedRequestsQueue.forEach(request => request.onSuccess(token));
            failedRequestsQueue = [];
          }).catch(err => {
            failedRequestsQueue.forEach(request => request.onFailure(err));
            failedRequestsQueue = [];

            if (false) {}
          }).finally(() => {
            isRefreshing = false;
          });
        }

        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({
            onSuccess: token => {
              originalConfig.headers['Authorization'] = `Bearer ${token}`;
              resolve(api(originalConfig));
            },
            onFailure: err => {
              reject(err);
            }
          });
        });
      } else {
        if (false) {} else {
          return Promise.reject(new _errors_AuthTokenError__WEBPACK_IMPORTED_MODULE_3__.AuthTokenError());
        }
      }
    }

    return Promise.reject(error);
  });
  return api;
}

/***/ }),

/***/ "./src/services/apiClient.ts":
/*!***********************************!*\
  !*** ./src/services/apiClient.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "api": function() { return /* binding */ api; }
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/services/api.ts");

const api = (0,_api__WEBPACK_IMPORTED_MODULE_0__.setupAPIClient)();

/***/ }),

/***/ "./src/services/errors/AuthTokenError.ts":
/*!***********************************************!*\
  !*** ./src/services/errors/AuthTokenError.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthTokenError": function() { return /* binding */ AuthTokenError; }
/* harmony export */ });
class AuthTokenError extends Error {
  constructor() {
    super('Error with authentication token.');
  }

}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("nookies");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoLWZyb250Ly4vc3JjL2NvbnRleHRzL0F1dGhDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly9hdXRoLWZyb250Ly4vc3JjL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL2F1dGgtZnJvbnQvLi9zcmMvc2VydmljZXMvYXBpLnRzIiwid2VicGFjazovL2F1dGgtZnJvbnQvLi9zcmMvc2VydmljZXMvYXBpQ2xpZW50LnRzIiwid2VicGFjazovL2F1dGgtZnJvbnQvLi9zcmMvc2VydmljZXMvZXJyb3JzL0F1dGhUb2tlbkVycm9yLnRzIiwid2VicGFjazovL2F1dGgtZnJvbnQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2F1dGgtZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2F1dGgtZnJvbnQvZXh0ZXJuYWwgXCJub29raWVzXCIiLCJ3ZWJwYWNrOi8vYXV0aC1mcm9udC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vYXV0aC1mcm9udC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImF1dGhDaGFubmVsIiwic2lnbk91dCIsImRlc3Ryb3lDb29raWUiLCJ1bmRlZmluZWQiLCJwb3N0TWVzc2FnZSIsIlJvdXRlciIsIkF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsImlzQXV0aGVudGljYXRlZCIsInVzZUVmZmVjdCIsIkJyb2FkY2FzdENoYW5uZWwiLCJvbm1lc3NhZ2UiLCJtZXNzYWdlIiwiZGF0YSIsInRva2VuIiwicGFyc2VDb29raWVzIiwiYXBpIiwidGhlbiIsInJlc3BvbnNlIiwiZW1haWwiLCJwZXJtaXNzaW9ucyIsInJvbGVzIiwiY2F0Y2giLCJzaWduSW4iLCJwYXNzd29yZCIsInJlZnJlc2hUb2tlbiIsInNldENvb2tpZSIsIm1heEFnZSIsInBhdGgiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJpc1JlZnJlc2hpbmciLCJmYWlsZWRSZXF1ZXN0c1F1ZXVlIiwic2V0dXBBUElDbGllbnQiLCJjdHgiLCJjb29raWVzIiwiYXhpb3MiLCJiYXNlVVJMIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJpbnRlcmNlcHRvcnMiLCJ1c2UiLCJlcnJvciIsInN0YXR1cyIsImNvZGUiLCJvcmlnaW5hbENvbmZpZyIsImNvbmZpZyIsInBvc3QiLCJkZWZhdWx0cyIsImZvckVhY2giLCJyZXF1ZXN0Iiwib25TdWNjZXNzIiwib25GYWlsdXJlIiwiZmluYWxseSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicHVzaCIsIkF1dGhUb2tlbkVycm9yIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUF5QkEsSUFBSUEsV0FBSjtBQUVPLFNBQVNDLE9BQVQsR0FBbUI7QUFDeEJDLHdEQUFhLENBQUNDLFNBQUQsRUFBWSxnQkFBWixDQUFiO0FBQ0FELHdEQUFhLENBQUNDLFNBQUQsRUFBWSx1QkFBWixDQUFiO0FBRUFILGFBQVcsQ0FBQ0ksV0FBWixDQUF3QixTQUF4QjtBQUNBQyx5REFBQSxDQUFZLEdBQVo7QUFDRDtBQUVNLE1BQU1DLFdBQVcsZ0JBQUdDLG9EQUFhLENBQUMsRUFBRCxDQUFqQztBQUNBLFNBQVNDLFlBQVQsQ0FBc0I7QUFBRUM7QUFBRixDQUF0QixFQUF1RDtBQUU1RCxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLEVBQWhDO0FBQ0EsUUFBTUMsZUFBZSxHQUFHLENBQUMsQ0FBQ0gsSUFBMUI7QUFFQUksa0RBQVMsQ0FBQyxNQUFNO0FBQ2RkLGVBQVcsR0FBRyxJQUFJZSxnQkFBSixDQUFxQixNQUFyQixDQUFkOztBQUNB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TztBQUNMLGlCQUFPNkIsT0FBTyxDQUFDRSxNQUFSLENBQWUsSUFBSUUsa0VBQUosRUFBZixDQUFQO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFdBQU9KLE9BQU8sQ0FBQ0UsTUFBUixDQUFlZCxLQUFmLENBQVA7QUFDRCxHQW5FRDtBQXFFQSxTQUFPOUIsR0FBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RkQ7QUFDTyxNQUFNQSxHQUFHLEdBQUdxQixvREFBYyxFQUExQixDOzs7Ozs7Ozs7Ozs7Ozs7QUNEQSxNQUFNeUIsY0FBTixTQUE2QkMsS0FBN0IsQ0FBbUM7QUFDeENDLGFBQVcsR0FBRztBQUNaLFVBQU0sa0NBQU47QUFDRDs7QUFIdUMsQzs7Ozs7Ozs7Ozs7QUNBMUMsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IHNldENvb2tpZSwgcGFyc2VDb29raWVzLCBkZXN0cm95Q29va2llIH0gZnJvbSAnbm9va2llcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpQ2xpZW50XCI7XHJcblxyXG50eXBlIFVzZXIgPSB7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBwZXJtaXNzaW9uczogc3RyaW5nW107XHJcbiAgcm9sZXM6IHN0cmluZ1tdO1xyXG59XHJcblxyXG50eXBlIFNpZ25JbkNyZWRlbnRpYWxzID0ge1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxufVxyXG5cclxudHlwZSBBdXRoQ29udGV4dERhdGEgPSB7XHJcbiAgc2lnbkluOiAoY3JlZGVudGlhbHM6IFNpZ25JbkNyZWRlbnRpYWxzKSA9PiBQcm9taXNlPHZvaWQ+O1xyXG4gIHNpZ25PdXQ6ICgpID0+IHZvaWQ7XHJcbiAgdXNlcjogVXNlcjtcclxuICBpc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbnR5cGUgQXV0aFByb3ZpZGVyUHJvcHMgPSB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxuXHJcbmxldCBhdXRoQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaWduT3V0KCkge1xyXG4gIGRlc3Ryb3lDb29raWUodW5kZWZpbmVkLCAnbmV4dGF1dGgudG9rZW4nKTtcclxuICBkZXN0cm95Q29va2llKHVuZGVmaW5lZCwgJ25leHRhdXRoLnJlZnJlc2hUb2tlbicpO1xyXG5cclxuICBhdXRoQ2hhbm5lbC5wb3N0TWVzc2FnZSgnc2lnbk91dCcpO1xyXG4gIFJvdXRlci5wdXNoKCcvJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQXV0aENvbnRleHREYXRhKTtcclxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH06IEF1dGhQcm92aWRlclByb3BzKSB7XHJcblxyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXI+KCk7XHJcbiAgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gISF1c2VyO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXV0aENoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbCgnYXV0aCcpO1xyXG4gICAgYXV0aENoYW5uZWwub25tZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcclxuICAgICAgc3dpdGNoIChtZXNzYWdlLmRhdGEpIHtcclxuICAgICAgICBjYXNlICdzaWduT3V0JzpcclxuICAgICAgICAgIHNpZ25PdXQoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHsgJ25leHRhdXRoLnRva2VuJzogdG9rZW4gfSA9IHBhcnNlQ29va2llcygpO1xyXG5cclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBhcGkuZ2V0KCcvbWUnKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgIGNvbnN0IHsgZW1haWwsIHBlcm1pc3Npb25zLCByb2xlcyB9ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgIHNldFVzZXIoeyBlbWFpbCwgcm9sZXMsIHBlcm1pc3Npb25zIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgIHNpZ25PdXQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgfSwgW10pO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzaWduSW4oeyBlbWFpbCwgcGFzc3dvcmQgfTogU2lnbkluQ3JlZGVudGlhbHMpIHtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KCdzZXNzaW9ucycsIHtcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBwYXNzd29yZFxyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICAgICBjb25zdCB7IHRva2VuLCByZWZyZXNoVG9rZW4sIHBlcm1pc3Npb25zLCByb2xlcyB9ID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgIHNldENvb2tpZSh1bmRlZmluZWQsICduZXh0YXV0aC50b2tlbicsIHRva2VuLCB7XHJcbiAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCwgLy8gMzAgZGF5c1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXRDb29raWUodW5kZWZpbmVkLCAnbmV4dGF1dGgucmVmcmVzaFRva2VuJywgcmVmcmVzaFRva2VuLCB7XHJcbiAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCwgLy8gMzAgZGF5c1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXRVc2VyKHtcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBwZXJtaXNzaW9ucyxcclxuICAgICAgICByb2xlc1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7dG9rZW59YDtcclxuXHJcbiAgICAgIFJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJyk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcclxuICAgICAgc2lnbkluLFxyXG4gICAgICBzaWduT3V0LFxyXG4gICAgICBpc0F1dGhlbnRpY2F0ZWQsXHJcbiAgICAgIHVzZXJcclxuICAgIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHRzL0F1dGhDb250ZXh0XCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoUHJvdmlkZXI+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuIiwiaW1wb3J0IGF4aW9zLCB7IEF4aW9zRXJyb3IgfSBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHBhcnNlQ29va2llcywgc2V0Q29va2llIH0gZnJvbSAnbm9va2llcyc7XHJcbmltcG9ydCB7IHNpZ25PdXQgfSBmcm9tICcuLi9jb250ZXh0cy9BdXRoQ29udGV4dCc7XHJcbmltcG9ydCB7IEF1dGhUb2tlbkVycm9yIH0gZnJvbSAnLi9lcnJvcnMvQXV0aFRva2VuRXJyb3InO1xyXG5cclxuXHJcbmxldCBpc1JlZnJlc2hpbmcgPSBmYWxzZTtcclxubGV0IGZhaWxlZFJlcXVlc3RzUXVldWUgPSBbXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cEFQSUNsaWVudChjdHggPSB1bmRlZmluZWQpIHtcclxuICBsZXQgY29va2llcyA9IHBhcnNlQ29va2llcyhjdHgpO1xyXG5cclxuICBjb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMzMycsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb29raWVzWyduZXh0YXV0aC50b2tlbiddfWBcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgYXBpLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UocmVzcG9uc2UgPT4ge1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIH0sIChlcnJvcjogQXhpb3NFcnJvcikgPT4ge1xyXG4gICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgIGlmIChlcnJvci5yZXNwb25zZS5kYXRhPy5jb2RlID09PSAndG9rZW4uZXhwaXJlZCcpIHtcclxuXHJcbiAgICAgICAgY29va2llcyA9IHBhcnNlQ29va2llcyhjdHgpO1xyXG4gICAgICAgIGNvbnN0IHsgJ25leHRhdXRoLnJlZnJlc2hUb2tlbic6IHJlZnJlc2hUb2tlbiB9ID0gY29va2llcztcclxuICAgICAgICBjb25zdCBvcmlnaW5hbENvbmZpZyA9IGVycm9yLmNvbmZpZztcclxuXHJcbiAgICAgICAgaWYgKCFpc1JlZnJlc2hpbmcpIHtcclxuICAgICAgICAgIGlzUmVmcmVzaGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgYXBpLnBvc3QoJy9yZWZyZXNoJywge1xyXG4gICAgICAgICAgICByZWZyZXNoVG9rZW4sXHJcbiAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeyB0b2tlbiB9ID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIHNldENvb2tpZShjdHgsICduZXh0YXV0aC50b2tlbicsIHRva2VuLCB7XHJcbiAgICAgICAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCwgLy8gMzAgZGF5c1xyXG4gICAgICAgICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZXRDb29raWUoY3R4LCAnbmV4dGF1dGgucmVmcmVzaFRva2VuJywgcmVzcG9uc2UuZGF0YS5yZWZyZXNoVG9rZW4sIHtcclxuICAgICAgICAgICAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDMwLCAvLyAzMCBkYXlzXHJcbiAgICAgICAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7dG9rZW59YDtcclxuXHJcbiAgICAgICAgICAgIGZhaWxlZFJlcXVlc3RzUXVldWUuZm9yRWFjaChyZXF1ZXN0ID0+IHJlcXVlc3Qub25TdWNjZXNzKHRva2VuKSk7XHJcbiAgICAgICAgICAgIGZhaWxlZFJlcXVlc3RzUXVldWUgPSBbXTtcclxuICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGZhaWxlZFJlcXVlc3RzUXVldWUuZm9yRWFjaChyZXF1ZXN0ID0+IHJlcXVlc3Qub25GYWlsdXJlKGVycikpO1xyXG4gICAgICAgICAgICBmYWlsZWRSZXF1ZXN0c1F1ZXVlID0gW107XHJcblxyXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgICAgICAgICAgc2lnbk91dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgaXNSZWZyZXNoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgZmFpbGVkUmVxdWVzdHNRdWV1ZS5wdXNoKHtcclxuICAgICAgICAgICAgb25TdWNjZXNzOiAodG9rZW46IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgIG9yaWdpbmFsQ29uZmlnLmhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHt0b2tlbn1gO1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoYXBpKG9yaWdpbmFsQ29uZmlnKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uRmFpbHVyZTogKGVycjogQXhpb3NFcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgICAgICBzaWduT3V0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQXV0aFRva2VuRXJyb3IoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGFwaTtcclxufSIsImltcG9ydCB7IHNldHVwQVBJQ2xpZW50IH0gZnJvbSAnLi9hcGknO1xyXG5leHBvcnQgY29uc3QgYXBpID0gc2V0dXBBUElDbGllbnQoKTtcclxuIiwiZXhwb3J0IGNsYXNzIEF1dGhUb2tlbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoJ0Vycm9yIHdpdGggYXV0aGVudGljYXRpb24gdG9rZW4uJylcclxuICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vb2tpZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=