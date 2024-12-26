/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/test.ts":
/*!*********************!*\
  !*** ./src/test.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bevy_wasm_backend_out_bevy_wasm_backend_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bevy_wasm_backend/out/bevy_wasm_backend.js */ \"./bevy_wasm_backend/out/bevy_wasm_backend.js\");\n\n(async () => {\n    await (0,_bevy_wasm_backend_out_bevy_wasm_backend_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_bevy_wasm_backend_out_bevy_wasm_backend_js__WEBPACK_IMPORTED_MODULE_0__.start)();\n})();\n\n\n//# sourceURL=webpack://@gaiaengine/2d-bevy-backed/./src/test.ts?");

/***/ }),

/***/ "./bevy_wasm_backend/out/bevy_wasm_backend_bg.wasm":
/*!*********************************************************!*\
  !*** ./bevy_wasm_backend/out/bevy_wasm_backend_bg.wasm ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a688cbf80cd81825baf1.wasm\";\n\n//# sourceURL=webpack://@gaiaengine/2d-bevy-backed/./bevy_wasm_backend/out/bevy_wasm_backend_bg.wasm?");

/***/ }),

/***/ "./bevy_wasm_backend/out/bevy_wasm_backend.js":
/*!****************************************************!*\
  !*** ./bevy_wasm_backend/out/bevy_wasm_backend.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   initSync: () => (/* binding */ initSync),\n/* harmony export */   start: () => (/* binding */ start)\n/* harmony export */ });\nlet wasm;\n\nfunction addToExternrefTable0(obj) {\n    const idx = wasm.__externref_table_alloc();\n    wasm.__wbindgen_export_2.set(idx, obj);\n    return idx;\n}\n\nfunction handleError(f, args) {\n    try {\n        return f.apply(this, args);\n    } catch (e) {\n        const idx = addToExternrefTable0(e);\n        wasm.__wbindgen_exn_store(idx);\n    }\n}\n\nconst cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true }) : { decode: () => { throw Error('TextDecoder not available') } } );\n\nif (typeof TextDecoder !== 'undefined') { cachedTextDecoder.decode(); };\n\nlet cachedUint8ArrayMemory0 = null;\n\nfunction getUint8ArrayMemory0() {\n    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {\n        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8ArrayMemory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    ptr = ptr >>> 0;\n    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nfunction start() {\n    wasm.start();\n}\n\nasync function __wbg_load(module, imports) {\n    if (typeof Response === 'function' && module instanceof Response) {\n        if (typeof WebAssembly.instantiateStreaming === 'function') {\n            try {\n                return await WebAssembly.instantiateStreaming(module, imports);\n\n            } catch (e) {\n                if (module.headers.get('Content-Type') != 'application/wasm') {\n                    console.warn(\"`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\\n\", e);\n\n                } else {\n                    throw e;\n                }\n            }\n        }\n\n        const bytes = await module.arrayBuffer();\n        return await WebAssembly.instantiate(bytes, imports);\n\n    } else {\n        const instance = await WebAssembly.instantiate(module, imports);\n\n        if (instance instanceof WebAssembly.Instance) {\n            return { instance, module };\n\n        } else {\n            return instance;\n        }\n    }\n}\n\nfunction __wbg_get_imports() {\n    const imports = {};\n    imports.wbg = {};\n    imports.wbg.__wbg_buffer_61b7ce01341d7f88 = function(arg0) {\n        const ret = arg0.buffer;\n        return ret;\n    };\n    imports.wbg.__wbg_call_500db948e69c7330 = function() { return handleError(function (arg0, arg1, arg2) {\n        const ret = arg0.call(arg1, arg2);\n        return ret;\n    }, arguments) };\n    imports.wbg.__wbg_call_b0d8e36992d9900d = function() { return handleError(function (arg0, arg1) {\n        const ret = arg0.call(arg1);\n        return ret;\n    }, arguments) };\n    imports.wbg.__wbg_crypto_ed58b8e10a292839 = function(arg0) {\n        const ret = arg0.crypto;\n        return ret;\n    };\n    imports.wbg.__wbg_getRandomValues_bcb4912f16000dc4 = function() { return handleError(function (arg0, arg1) {\n        arg0.getRandomValues(arg1);\n    }, arguments) };\n    imports.wbg.__wbg_log_464d1b2190ca1e04 = function(arg0) {\n        console.log(arg0);\n    };\n    imports.wbg.__wbg_msCrypto_0a36e2ec3a343d26 = function(arg0) {\n        const ret = arg0.msCrypto;\n        return ret;\n    };\n    imports.wbg.__wbg_new_3ff5b33b1ce712df = function(arg0) {\n        const ret = new Uint8Array(arg0);\n        return ret;\n    };\n    imports.wbg.__wbg_newnoargs_fd9e4bf8be2bc16d = function(arg0, arg1) {\n        const ret = new Function(getStringFromWasm0(arg0, arg1));\n        return ret;\n    };\n    imports.wbg.__wbg_newwithbyteoffsetandlength_ba35896968751d91 = function(arg0, arg1, arg2) {\n        const ret = new Uint8Array(arg0, arg1 >>> 0, arg2 >>> 0);\n        return ret;\n    };\n    imports.wbg.__wbg_newwithlength_34ce8f1051e74449 = function(arg0) {\n        const ret = new Uint8Array(arg0 >>> 0);\n        return ret;\n    };\n    imports.wbg.__wbg_node_02999533c4ea02e3 = function(arg0) {\n        const ret = arg0.node;\n        return ret;\n    };\n    imports.wbg.__wbg_process_5c1d670bc53614b8 = function(arg0) {\n        const ret = arg0.process;\n        return ret;\n    };\n    imports.wbg.__wbg_randomFillSync_ab2cfe79ebbf2740 = function() { return handleError(function (arg0, arg1) {\n        arg0.randomFillSync(arg1);\n    }, arguments) };\n    imports.wbg.__wbg_require_79b1e9274cde3c87 = function() { return handleError(function () {\n        const ret = module.require;\n        return ret;\n    }, arguments) };\n    imports.wbg.__wbg_set_23d69db4e5c66a6e = function(arg0, arg1, arg2) {\n        arg0.set(arg1, arg2 >>> 0);\n    };\n    imports.wbg.__wbg_static_accessor_GLOBAL_0be7472e492ad3e3 = function() {\n        const ret = typeof global === 'undefined' ? null : global;\n        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);\n    };\n    imports.wbg.__wbg_static_accessor_GLOBAL_THIS_1a6eb482d12c9bfb = function() {\n        const ret = typeof globalThis === 'undefined' ? null : globalThis;\n        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);\n    };\n    imports.wbg.__wbg_static_accessor_SELF_1dc398a895c82351 = function() {\n        const ret = typeof self === 'undefined' ? null : self;\n        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);\n    };\n    imports.wbg.__wbg_static_accessor_WINDOW_ae1c80c7eea8d64a = function() {\n        const ret = typeof window === 'undefined' ? null : window;\n        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);\n    };\n    imports.wbg.__wbg_subarray_46adeb9b86949d12 = function(arg0, arg1, arg2) {\n        const ret = arg0.subarray(arg1 >>> 0, arg2 >>> 0);\n        return ret;\n    };\n    imports.wbg.__wbg_versions_c71aa1626a93e0a1 = function(arg0) {\n        const ret = arg0.versions;\n        return ret;\n    };\n    imports.wbg.__wbindgen_init_externref_table = function() {\n        const table = wasm.__wbindgen_export_2;\n        const offset = table.grow(4);\n        table.set(0, undefined);\n        table.set(offset + 0, undefined);\n        table.set(offset + 1, null);\n        table.set(offset + 2, true);\n        table.set(offset + 3, false);\n        ;\n    };\n    imports.wbg.__wbindgen_is_function = function(arg0) {\n        const ret = typeof(arg0) === 'function';\n        return ret;\n    };\n    imports.wbg.__wbindgen_is_object = function(arg0) {\n        const val = arg0;\n        const ret = typeof(val) === 'object' && val !== null;\n        return ret;\n    };\n    imports.wbg.__wbindgen_is_string = function(arg0) {\n        const ret = typeof(arg0) === 'string';\n        return ret;\n    };\n    imports.wbg.__wbindgen_is_undefined = function(arg0) {\n        const ret = arg0 === undefined;\n        return ret;\n    };\n    imports.wbg.__wbindgen_memory = function() {\n        const ret = wasm.memory;\n        return ret;\n    };\n    imports.wbg.__wbindgen_string_new = function(arg0, arg1) {\n        const ret = getStringFromWasm0(arg0, arg1);\n        return ret;\n    };\n    imports.wbg.__wbindgen_throw = function(arg0, arg1) {\n        throw new Error(getStringFromWasm0(arg0, arg1));\n    };\n\n    return imports;\n}\n\nfunction __wbg_init_memory(imports, memory) {\n\n}\n\nfunction __wbg_finalize_init(instance, module) {\n    wasm = instance.exports;\n    __wbg_init.__wbindgen_wasm_module = module;\n    cachedUint8ArrayMemory0 = null;\n\n\n    wasm.__wbindgen_start();\n    return wasm;\n}\n\nfunction initSync(module) {\n    if (wasm !== undefined) return wasm;\n\n\n    if (typeof module !== 'undefined') {\n        if (Object.getPrototypeOf(module) === Object.prototype) {\n            ({module} = module)\n        } else {\n            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')\n        }\n    }\n\n    const imports = __wbg_get_imports();\n\n    __wbg_init_memory(imports);\n\n    if (!(module instanceof WebAssembly.Module)) {\n        module = new WebAssembly.Module(module);\n    }\n\n    const instance = new WebAssembly.Instance(module, imports);\n\n    return __wbg_finalize_init(instance, module);\n}\n\nasync function __wbg_init(module_or_path) {\n    if (wasm !== undefined) return wasm;\n\n\n    if (typeof module_or_path !== 'undefined') {\n        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {\n            ({module_or_path} = module_or_path)\n        } else {\n            console.warn('using deprecated parameters for the initialization function; pass a single object instead')\n        }\n    }\n\n    if (typeof module_or_path === 'undefined') {\n        module_or_path = new URL(/* asset import */ __webpack_require__(/*! bevy_wasm_backend_bg.wasm */ \"./bevy_wasm_backend/out/bevy_wasm_backend_bg.wasm\"), __webpack_require__.b);\n    }\n    const imports = __wbg_get_imports();\n\n    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {\n        module_or_path = fetch(module_or_path);\n    }\n\n    __wbg_init_memory(imports);\n\n    const { instance, module } = await __wbg_load(await module_or_path, imports);\n\n    return __wbg_finalize_init(instance, module);\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__wbg_init);\n\n\n//# sourceURL=webpack://@gaiaengine/2d-bevy-backed/./bevy_wasm_backend/out/bevy_wasm_backend.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/test.ts");
/******/ 	
/******/ })()
;