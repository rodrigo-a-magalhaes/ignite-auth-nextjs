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




function signOut() {
  (0,nookies__WEBPACK_IMPORTED_MODULE_2__.destroyCookie)(undefined, 'nextauth.token');
  (0,nookies__WEBPACK_IMPORTED_MODULE_2__.destroyCookie)(undefined, 'nextauth.refreshToken');
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
      isAuthenticated,
      user
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 98,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoLWZyb250Ly4vc3JjL2NvbnRleHRzL0F1dGhDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly9hdXRoLWZyb250Ly4vc3JjL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL2F1dGgtZnJvbnQvLi9zcmMvc2VydmljZXMvYXBpLnRzIiwid2VicGFjazovL2F1dGgtZnJvbnQvLi9zcmMvc2VydmljZXMvYXBpQ2xpZW50LnRzIiwid2VicGFjazovL2F1dGgtZnJvbnQvLi9zcmMvc2VydmljZXMvZXJyb3JzL0F1dGhUb2tlbkVycm9yLnRzIiwid2VicGFjazovL2F1dGgtZnJvbnQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2F1dGgtZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2F1dGgtZnJvbnQvZXh0ZXJuYWwgXCJub29raWVzXCIiLCJ3ZWJwYWNrOi8vYXV0aC1mcm9udC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vYXV0aC1mcm9udC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInNpZ25PdXQiLCJkZXN0cm95Q29va2llIiwidW5kZWZpbmVkIiwiUm91dGVyIiwiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwiaXNBdXRoZW50aWNhdGVkIiwidXNlRWZmZWN0IiwidG9rZW4iLCJwYXJzZUNvb2tpZXMiLCJhcGkiLCJ0aGVuIiwicmVzcG9uc2UiLCJlbWFpbCIsInBlcm1pc3Npb25zIiwicm9sZXMiLCJkYXRhIiwiY2F0Y2giLCJzaWduSW4iLCJwYXNzd29yZCIsInJlZnJlc2hUb2tlbiIsInNldENvb2tpZSIsIm1heEFnZSIsInBhdGgiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJpc1JlZnJlc2hpbmciLCJmYWlsZWRSZXF1ZXN0c1F1ZXVlIiwic2V0dXBBUElDbGllbnQiLCJjdHgiLCJjb29raWVzIiwiYXhpb3MiLCJiYXNlVVJMIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJpbnRlcmNlcHRvcnMiLCJ1c2UiLCJlcnJvciIsInN0YXR1cyIsImNvZGUiLCJvcmlnaW5hbENvbmZpZyIsImNvbmZpZyIsInBvc3QiLCJkZWZhdWx0cyIsImZvckVhY2giLCJyZXF1ZXN0Iiwib25TdWNjZXNzIiwib25GYWlsdXJlIiwiZmluYWxseSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicHVzaCIsIkF1dGhUb2tlbkVycm9yIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUF1Qk8sU0FBU0EsT0FBVCxHQUFtQjtBQUN4QkMsd0RBQWEsQ0FBQ0MsU0FBRCxFQUFZLGdCQUFaLENBQWI7QUFDQUQsd0RBQWEsQ0FBQ0MsU0FBRCxFQUFZLHVCQUFaLENBQWI7QUFDQUMseURBQUEsQ0FBWSxHQUFaO0FBQ0Q7QUFFTSxNQUFNQyxXQUFXLGdCQUFHQyxvREFBYSxDQUFDLEVBQUQsQ0FBakM7QUFDQSxTQUFTQyxZQUFULENBQXNCO0FBQUVDO0FBQUYsQ0FBdEIsRUFBdUQ7QUFFNUQsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQywrQ0FBUSxFQUFoQztBQUNBLFFBQU1DLGVBQWUsR0FBRyxDQUFDLENBQUNILElBQTFCO0FBRUFJLGtEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU07QUFBRSx3QkFBa0JDO0FBQXBCLFFBQThCQyxxREFBWSxFQUFoRDs7QUFFQSxRQUFJRCxLQUFKLEVBQVc7QUFDVEUsOERBQUEsQ0FBUSxLQUFSLEVBQ0dDLElBREgsQ0FDUUMsUUFBUSxJQUFJO0FBQ2hCLGNBQU07QUFBRUMsZUFBRjtBQUFTQyxxQkFBVDtBQUFzQkM7QUFBdEIsWUFB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QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgc2V0Q29va2llLCBwYXJzZUNvb2tpZXMsIGRlc3Ryb3lDb29raWUgfSBmcm9tICdub29raWVzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGFwaSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlDbGllbnRcIjtcclxuXHJcbnR5cGUgVXNlciA9IHtcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIHBlcm1pc3Npb25zOiBzdHJpbmdbXTtcclxuICByb2xlczogc3RyaW5nW107XHJcbn1cclxuXHJcbnR5cGUgU2lnbkluQ3JlZGVudGlhbHMgPSB7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG59XHJcblxyXG50eXBlIEF1dGhDb250ZXh0RGF0YSA9IHtcclxuICBzaWduSW4oY3JlZGVudGlhbHM6IFNpZ25JbkNyZWRlbnRpYWxzKTogUHJvbWlzZTx2b2lkPjtcclxuICB1c2VyOiBVc2VyO1xyXG4gIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbjtcclxufVxyXG5cclxudHlwZSBBdXRoUHJvdmlkZXJQcm9wcyA9IHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2lnbk91dCgpIHtcclxuICBkZXN0cm95Q29va2llKHVuZGVmaW5lZCwgJ25leHRhdXRoLnRva2VuJyk7XHJcbiAgZGVzdHJveUNvb2tpZSh1bmRlZmluZWQsICduZXh0YXV0aC5yZWZyZXNoVG9rZW4nKTtcclxuICBSb3V0ZXIucHVzaCgnLycpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIEF1dGhDb250ZXh0RGF0YSk7XHJcbmV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBBdXRoUHJvdmlkZXJQcm9wcykge1xyXG5cclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyPigpO1xyXG4gIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9ICEhdXNlcjtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHsgJ25leHRhdXRoLnRva2VuJzogdG9rZW4gfSA9IHBhcnNlQ29va2llcygpO1xyXG5cclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBhcGkuZ2V0KCcvbWUnKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgIGNvbnN0IHsgZW1haWwsIHBlcm1pc3Npb25zLCByb2xlcyB9ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgIHNldFVzZXIoeyBlbWFpbCwgcm9sZXMsIHBlcm1pc3Npb25zIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgIHNpZ25PdXQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgfSwgW10pO1xyXG5cclxuXHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHNpZ25Jbih7IGVtYWlsLCBwYXNzd29yZCB9OiBTaWduSW5DcmVkZW50aWFscykge1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoJ3Nlc3Npb25zJywge1xyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkXHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgIGNvbnN0IHsgdG9rZW4sIHJlZnJlc2hUb2tlbiwgcGVybWlzc2lvbnMsIHJvbGVzIH0gPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgc2V0Q29va2llKHVuZGVmaW5lZCwgJ25leHRhdXRoLnRva2VuJywgdG9rZW4sIHtcclxuICAgICAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDMwLCAvLyAzMCBkYXlzXHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNldENvb2tpZSh1bmRlZmluZWQsICduZXh0YXV0aC5yZWZyZXNoVG9rZW4nLCByZWZyZXNoVG9rZW4sIHtcclxuICAgICAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDMwLCAvLyAzMCBkYXlzXHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNldFVzZXIoe1xyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIHBlcm1pc3Npb25zLFxyXG4gICAgICAgIHJvbGVzXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXBpLmRlZmF1bHRzLmhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHt0b2tlbn1gO1xyXG5cclxuICAgICAgUm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XHJcbiAgICAgIHNpZ25JbixcclxuICAgICAgaXNBdXRoZW50aWNhdGVkLFxyXG4gICAgICB1c2VyXHJcbiAgICB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbiIsImltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0cy9BdXRoQ29udGV4dFwiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aFByb3ZpZGVyPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L0F1dGhQcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwXHJcbiIsImltcG9ydCBheGlvcywgeyBBeGlvc0Vycm9yIH0gZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMsIHNldENvb2tpZSB9IGZyb20gJ25vb2tpZXMnO1xyXG5pbXBvcnQgeyBzaWduT3V0IH0gZnJvbSAnLi4vY29udGV4dHMvQXV0aENvbnRleHQnO1xyXG5pbXBvcnQgeyBBdXRoVG9rZW5FcnJvciB9IGZyb20gJy4vZXJyb3JzL0F1dGhUb2tlbkVycm9yJztcclxuXHJcblxyXG5sZXQgaXNSZWZyZXNoaW5nID0gZmFsc2U7XHJcbmxldCBmYWlsZWRSZXF1ZXN0c1F1ZXVlID0gW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBBUElDbGllbnQoY3R4ID0gdW5kZWZpbmVkKSB7XHJcbiAgbGV0IGNvb2tpZXMgPSBwYXJzZUNvb2tpZXMoY3R4KTtcclxuXHJcbiAgY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6ICdodHRwOi8vbG9jYWxob3N0OjMzMzMnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y29va2llc1snbmV4dGF1dGgudG9rZW4nXX1gXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGFwaS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKHJlc3BvbnNlID0+IHtcclxuICAgIHJldHVybiByZXNwb25zZTtcclxuICB9LCAoZXJyb3I6IEF4aW9zRXJyb3IpID0+IHtcclxuICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2UuZGF0YT8uY29kZSA9PT0gJ3Rva2VuLmV4cGlyZWQnKSB7XHJcblxyXG4gICAgICAgIGNvb2tpZXMgPSBwYXJzZUNvb2tpZXMoY3R4KTtcclxuICAgICAgICBjb25zdCB7ICduZXh0YXV0aC5yZWZyZXNoVG9rZW4nOiByZWZyZXNoVG9rZW4gfSA9IGNvb2tpZXM7XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxDb25maWcgPSBlcnJvci5jb25maWc7XHJcblxyXG4gICAgICAgIGlmICghaXNSZWZyZXNoaW5nKSB7XHJcbiAgICAgICAgICBpc1JlZnJlc2hpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICAgIGFwaS5wb3N0KCcvcmVmcmVzaCcsIHtcclxuICAgICAgICAgICAgcmVmcmVzaFRva2VuLFxyXG4gICAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdG9rZW4gfSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICBzZXRDb29raWUoY3R4LCAnbmV4dGF1dGgudG9rZW4nLCB0b2tlbiwge1xyXG4gICAgICAgICAgICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogMzAsIC8vIDMwIGRheXNcclxuICAgICAgICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0Q29va2llKGN0eCwgJ25leHRhdXRoLnJlZnJlc2hUb2tlbicsIHJlc3BvbnNlLmRhdGEucmVmcmVzaFRva2VuLCB7XHJcbiAgICAgICAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCwgLy8gMzAgZGF5c1xyXG4gICAgICAgICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhcGkuZGVmYXVsdHMuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWA7XHJcblxyXG4gICAgICAgICAgICBmYWlsZWRSZXF1ZXN0c1F1ZXVlLmZvckVhY2gocmVxdWVzdCA9PiByZXF1ZXN0Lm9uU3VjY2Vzcyh0b2tlbikpO1xyXG4gICAgICAgICAgICBmYWlsZWRSZXF1ZXN0c1F1ZXVlID0gW107XHJcbiAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBmYWlsZWRSZXF1ZXN0c1F1ZXVlLmZvckVhY2gocmVxdWVzdCA9PiByZXF1ZXN0Lm9uRmFpbHVyZShlcnIpKTtcclxuICAgICAgICAgICAgZmFpbGVkUmVxdWVzdHNRdWV1ZSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgICAgICAgICAgIHNpZ25PdXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlzUmVmcmVzaGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgIGZhaWxlZFJlcXVlc3RzUXVldWUucHVzaCh7XHJcbiAgICAgICAgICAgIG9uU3VjY2VzczogKHRva2VuOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICBvcmlnaW5hbENvbmZpZy5oZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7dG9rZW59YDtcclxuICAgICAgICAgICAgICByZXNvbHZlKGFwaShvcmlnaW5hbENvbmZpZykpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkZhaWx1cmU6IChlcnI6IEF4aW9zRXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgICAgICAgc2lnbk91dCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEF1dGhUb2tlbkVycm9yKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBhcGk7XHJcbn0iLCJpbXBvcnQgeyBzZXR1cEFQSUNsaWVudCB9IGZyb20gJy4vYXBpJztcclxuZXhwb3J0IGNvbnN0IGFwaSA9IHNldHVwQVBJQ2xpZW50KCk7XHJcbiIsImV4cG9ydCBjbGFzcyBBdXRoVG9rZW5FcnJvciBleHRlbmRzIEVycm9yIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCdFcnJvciB3aXRoIGF1dGhlbnRpY2F0aW9uIHRva2VuLicpXHJcbiAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub29raWVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9