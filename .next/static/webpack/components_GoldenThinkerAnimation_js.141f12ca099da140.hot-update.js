"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_GoldenThinkerAnimation_js",{

/***/ "./components/Scene.js":
/*!*****************************!*\
  !*** ./components/Scene.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls.js */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/OBJLoader.js */ \"./node_modules/three/examples/jsm/loaders/OBJLoader.js\");\n\n\n\nclass Scene {\n    init() {\n        this.renderer.setSize(window.innerWidth, window.innerHeight);\n        this.renderer.domElement.style.display = \"block\";\n        this.renderer.domElement.style.margin = \"0\";\n        const canvas = renderer.domElement;\n        canvas.style.position = \"absolute\"; // Example to make it absolute positioned\n        canvas.style.left = \"0\";\n        canvas.style.top = \"0\";\n        this.renderer.gammaOutput = false;\n        document.body.appendChild(this.renderer.domElement);\n        this.camera.position.z = 5;\n        this.controls.target.set(0, 0, 0);\n        this.addLights();\n        this.addBackgroundSphere(this.image360Path); // Use the provided 360 image path\n        // Load the .obj file\n        this.loadObjModel(this.objPath);\n        this.controls.addEventListener(\"change\", ()=>{\n            this.updateObjectInfoArray();\n            this.printSceneState();\n        });\n        document.addEventListener(\"keydown\", (event)=>{\n            if (event.key === \"S\") {\n                this.updateObjectInfoArray();\n                this.printSceneState();\n            } else if (event.key === \"R\") {\n                const snapshotJSON = prompt(\"Enter the snapshot JSON:\");\n                if (snapshotJSON) {\n                    this.restoreSceneState(snapshotJSON);\n                }\n            }\n        });\n        this.animate();\n    }\n    animate() {\n        requestAnimationFrame(()=>this.animate());\n        // Add any animations or updates here\n        this.renderer.render(this.scene, this.camera);\n    }\n    addLights() {\n        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff, 0.2);\n        this.scene.add(ambientLight);\n        const pointLight1 = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0xffffff, 1);\n        pointLight1.position.set(10, 10, 10);\n        this.scene.add(pointLight1);\n        const pointLight2 = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0xffffff, 1);\n        pointLight2.position.set(-10, -10, -10);\n        this.scene.add(pointLight2);\n    }\n    addBackgroundSphere(texturePath) {\n        const sphereGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.SphereGeometry(10, 32, 32);\n        sphereGeometry.scale(-1, 1, 1);\n        const textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();\n        const sphereTexture = textureLoader.load(texturePath);\n        const sphereMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\n            map: sphereTexture\n        });\n        const sphereMesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(sphereGeometry, sphereMaterial);\n        this.scene.add(sphereMesh);\n    }\n    updateObjectInfoArray() {\n        this.objectInfoArray.length = 0;\n        this.scene.children.forEach((object)=>{\n            if (object instanceof three__WEBPACK_IMPORTED_MODULE_0__.Mesh) {\n            // Collect object information and add to this.objectInfoArray\n            // Similar to what you did in your previous code\n            }\n        });\n    }\n    printSceneState() {\n    // Create a snapshot of the scene's state and print it\n    // Similar to what you did in your previous code\n    }\n    restoreSceneState(sceneStateJSON) {\n    // Restore the scene's state from a JSON string\n    // Similar to what you did in your previous code\n    }\n    // Add methods to add custom elements, manage events, etc.\n    addElement(elementPath) {\n        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};\n        const { texturePath = null, material = null, position = {\n            x: 0,\n            y: 0,\n            z: 0\n        }, rotation = {\n            x: 0,\n            y: 0,\n            z: 0\n        } } = options;\n        const loader = new three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__.OBJLoader();\n        loader.load(elementPath, (obj)=>{\n            obj.traverse((child)=>{\n                if (child instanceof three__WEBPACK_IMPORTED_MODULE_0__.Mesh) {\n                    if (material) {\n                        // Apply the custom material if provided\n                        child.material = material;\n                    }\n                    if (texturePath) {\n                        const textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();\n                        const customTexture = textureLoader.load(texturePath);\n                        // Apply the custom texture to the mesh\n                        child.material.map = customTexture;\n                    }\n                }\n            });\n            obj.position.set(position.x, position.y, position.z);\n            obj.rotation.set(rotation.x, rotation.y, rotation.z);\n            this.scene.add(obj);\n        });\n    }\n    // Method to take a snapshot of the current scene state and return it as JSON\n    takeSnapshot() {\n        const snapshot = {};\n        // Iterate over all properties of the Scene object\n        for(const prop in this){\n            if (this.hasOwnProperty(prop)) {\n                // Check if the property is not a function\n                if (typeof this[prop] !== \"function\") {\n                    // Save the property value to the snapshot\n                    snapshot[prop] = this[prop];\n                }\n            }\n        }\n        // Convert the snapshot object to JSON\n        return JSON.stringify(snapshot, null, 2);\n    }\n    loadObjModel(objPath) {\n        const loader = new three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__.OBJLoader();\n        loader.load(objPath, (obj)=>{\n            // Process the loaded .obj file\n            // For example, setting position, scale, etc.\n            this.scene.add(obj);\n        });\n    }\n    constructor(image360Path, objPath){\n        this.image360Path = image360Path;\n        this.objPath = objPath;\n        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n        if (true) {\n            this.camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n            this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer();\n            this.controls = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(this.camera, this.renderer.domElement);\n        }\n        this.objectInfoArray = [];\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scene);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0YsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNFLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNZLEtBQUssR0FBRyxJQUFJM0Msd0NBQVc7UUFDNUIsSUFBSSxJQUFrQixFQUFhO1lBQ2pDLElBQUksQ0FBQ3NCLE1BQU0sR0FBRyxJQUFJdEIsb0RBQXVCLENBQUMsSUFBSU8sT0FBT0MsVUFBVSxHQUFHRCxPQUFPRSxXQUFXLEVBQUUsS0FBSztZQUMzRixJQUFJLENBQUNKLFFBQVEsR0FBRyxJQUFJTCxnREFBbUI7WUFDdkMsSUFBSSxDQUFDd0IsUUFBUSxHQUFHLElBQUl2Qix1RkFBYUEsQ0FBQyxJQUFJLENBQUNxQixNQUFNLEVBQUUsSUFBSSxDQUFDakIsUUFBUSxDQUFDSyxVQUFVO1FBQ3pFO1FBQ0EsSUFBSSxDQUFDcUQsZUFBZSxHQUFHLEVBQUU7SUFDM0I7QUErSkY7QUFFQSwrREFBZTVELEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TY2VuZS5qcz8xZDYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scy5qcyc7XG5pbXBvcnQgeyBPQkpMb2FkZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9PQkpMb2FkZXIuanMnO1xuXG5jbGFzcyBTY2VuZSB7XG4gIGNvbnN0cnVjdG9yKGltYWdlMzYwUGF0aCwgb2JqUGF0aCkge1xuICAgIHRoaXMuaW1hZ2UzNjBQYXRoID0gaW1hZ2UzNjBQYXRoO1xuICAgIHRoaXMub2JqUGF0aCA9IG9ialBhdGg7XG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMDApO1xuICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7XG4gICAgICB0aGlzLmNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHModGhpcy5jYW1lcmEsIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XG4gICAgfVxuICAgIHRoaXMub2JqZWN0SW5mb0FycmF5ID0gW107XG4gIH1cbiAgXG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgdGhpcy5yZW5kZXJlci5kb21FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC5zdHlsZS5tYXJnaW4gPSAnMCc7XG4gICAgY29uc3QgY2FudmFzID0gcmVuZGVyZXIuZG9tRWxlbWVudDtcbmNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7IC8vIEV4YW1wbGUgdG8gbWFrZSBpdCBhYnNvbHV0ZSBwb3NpdGlvbmVkXG5jYW52YXMuc3R5bGUubGVmdCA9ICcwJztcbmNhbnZhcy5zdHlsZS50b3AgPSAnMCc7XG5cbiAgICB0aGlzLnJlbmRlcmVyLmdhbW1hT3V0cHV0ID0gZmFsc2U7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDU7XG4gICAgdGhpcy5jb250cm9scy50YXJnZXQuc2V0KDAsIDAsIDApO1xuXG4gICAgdGhpcy5hZGRMaWdodHMoKTtcbiAgICB0aGlzLmFkZEJhY2tncm91bmRTcGhlcmUodGhpcy5pbWFnZTM2MFBhdGgpOyAvLyBVc2UgdGhlIHByb3ZpZGVkIDM2MCBpbWFnZSBwYXRoXG5cbiAgICAvLyBMb2FkIHRoZSAub2JqIGZpbGVcbiAgICB0aGlzLmxvYWRPYmpNb2RlbCh0aGlzLm9ialBhdGgpO1xuXG4gICAgdGhpcy5jb250cm9scy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZU9iamVjdEluZm9BcnJheSgpO1xuICAgICAgdGhpcy5wcmludFNjZW5lU3RhdGUoKTtcbiAgICB9KTtcblxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ1MnKSB7XG4gICAgICAgIHRoaXMudXBkYXRlT2JqZWN0SW5mb0FycmF5KCk7XG4gICAgICAgIHRoaXMucHJpbnRTY2VuZVN0YXRlKCk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ1InKSB7XG4gICAgICAgIGNvbnN0IHNuYXBzaG90SlNPTiA9IHByb21wdCgnRW50ZXIgdGhlIHNuYXBzaG90IEpTT046Jyk7XG4gICAgICAgIGlmIChzbmFwc2hvdEpTT04pIHtcbiAgICAgICAgICB0aGlzLnJlc3RvcmVTY2VuZVN0YXRlKHNuYXBzaG90SlNPTik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuYW5pbWF0ZSgpO1xuICB9XG5cbiAgYW5pbWF0ZSgpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5hbmltYXRlKCkpO1xuICAgIC8vIEFkZCBhbnkgYW5pbWF0aW9ucyBvciB1cGRhdGVzIGhlcmVcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSk7XG4gIH1cblxuICBhZGRMaWdodHMoKSB7XG4gICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGZmZmZmZiwgMC4yKTtcbiAgICB0aGlzLnNjZW5lLmFkZChhbWJpZW50TGlnaHQpO1xuXG4gICAgY29uc3QgcG9pbnRMaWdodDEgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCgweGZmZmZmZiwgMSk7XG4gICAgcG9pbnRMaWdodDEucG9zaXRpb24uc2V0KDEwLCAxMCwgMTApO1xuICAgIHRoaXMuc2NlbmUuYWRkKHBvaW50TGlnaHQxKTtcblxuICAgIGNvbnN0IHBvaW50TGlnaHQyID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoMHhmZmZmZmYsIDEpO1xuICAgIHBvaW50TGlnaHQyLnBvc2l0aW9uLnNldCgtMTAsIC0xMCwgLTEwKTtcbiAgICB0aGlzLnNjZW5lLmFkZChwb2ludExpZ2h0Mik7XG4gIH1cblxuICBhZGRCYWNrZ3JvdW5kU3BoZXJlKHRleHR1cmVQYXRoKSB7XG4gICAgY29uc3Qgc3BoZXJlR2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMTAsIDMyLCAzMik7XG4gICAgc3BoZXJlR2VvbWV0cnkuc2NhbGUoLTEsIDEsIDEpO1xuXG4gICAgY29uc3QgdGV4dHVyZUxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XG4gICAgY29uc3Qgc3BoZXJlVGV4dHVyZSA9IHRleHR1cmVMb2FkZXIubG9hZCh0ZXh0dXJlUGF0aCk7XG5cbiAgICBjb25zdCBzcGhlcmVNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogc3BoZXJlVGV4dHVyZSB9KTtcblxuICAgIGNvbnN0IHNwaGVyZU1lc2ggPSBuZXcgVEhSRUUuTWVzaChzcGhlcmVHZW9tZXRyeSwgc3BoZXJlTWF0ZXJpYWwpO1xuICAgIHRoaXMuc2NlbmUuYWRkKHNwaGVyZU1lc2gpO1xuICB9XG5cbiAgdXBkYXRlT2JqZWN0SW5mb0FycmF5KCkge1xuICAgIHRoaXMub2JqZWN0SW5mb0FycmF5Lmxlbmd0aCA9IDA7XG4gICAgXG4gICAgdGhpcy5zY2VuZS5jaGlsZHJlbi5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5NZXNoKSB7XG4gICAgICAgIC8vIENvbGxlY3Qgb2JqZWN0IGluZm9ybWF0aW9uIGFuZCBhZGQgdG8gdGhpcy5vYmplY3RJbmZvQXJyYXlcbiAgICAgICAgLy8gU2ltaWxhciB0byB3aGF0IHlvdSBkaWQgaW4geW91ciBwcmV2aW91cyBjb2RlXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcmludFNjZW5lU3RhdGUoKSB7XG4gICAgLy8gQ3JlYXRlIGEgc25hcHNob3Qgb2YgdGhlIHNjZW5lJ3Mgc3RhdGUgYW5kIHByaW50IGl0XG4gICAgLy8gU2ltaWxhciB0byB3aGF0IHlvdSBkaWQgaW4geW91ciBwcmV2aW91cyBjb2RlXG4gIH1cblxuICByZXN0b3JlU2NlbmVTdGF0ZShzY2VuZVN0YXRlSlNPTikge1xuICAgIC8vIFJlc3RvcmUgdGhlIHNjZW5lJ3Mgc3RhdGUgZnJvbSBhIEpTT04gc3RyaW5nXG4gICAgLy8gU2ltaWxhciB0byB3aGF0IHlvdSBkaWQgaW4geW91ciBwcmV2aW91cyBjb2RlXG4gIH1cblxuICAvLyBBZGQgbWV0aG9kcyB0byBhZGQgY3VzdG9tIGVsZW1lbnRzLCBtYW5hZ2UgZXZlbnRzLCBldGMuXG4gIGFkZEVsZW1lbnQoZWxlbWVudFBhdGgsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHsgdGV4dHVyZVBhdGggPSBudWxsLCBtYXRlcmlhbCA9IG51bGwsIHBvc2l0aW9uID0geyB4OiAwLCB5OiAwLCB6OiAwIH0sIHJvdGF0aW9uID0geyB4OiAwLCB5OiAwLCB6OiAwIH0gfSA9IG9wdGlvbnM7XG5cbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgT0JKTG9hZGVyKCk7XG4gICAgbG9hZGVyLmxvYWQoZWxlbWVudFBhdGgsIChvYmopID0+IHtcbiAgICAgIG9iai50cmF2ZXJzZSgoY2hpbGQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgVEhSRUUuTWVzaCkge1xuICAgICAgICAgIGlmIChtYXRlcmlhbCkge1xuICAgICAgICAgICAgLy8gQXBwbHkgdGhlIGN1c3RvbSBtYXRlcmlhbCBpZiBwcm92aWRlZFxuICAgICAgICAgICAgY2hpbGQubWF0ZXJpYWwgPSBtYXRlcmlhbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGV4dHVyZVBhdGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmVMb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpO1xuICAgICAgICAgICAgY29uc3QgY3VzdG9tVGV4dHVyZSA9IHRleHR1cmVMb2FkZXIubG9hZCh0ZXh0dXJlUGF0aCk7XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IHRoZSBjdXN0b20gdGV4dHVyZSB0byB0aGUgbWVzaFxuICAgICAgICAgICAgY2hpbGQubWF0ZXJpYWwubWFwID0gY3VzdG9tVGV4dHVyZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBvYmoucG9zaXRpb24uc2V0KHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHBvc2l0aW9uLnopO1xuICAgICAgb2JqLnJvdGF0aW9uLnNldChyb3RhdGlvbi54LCByb3RhdGlvbi55LCByb3RhdGlvbi56KTtcblxuICAgICAgdGhpcy5zY2VuZS5hZGQob2JqKTtcbiAgICB9KTtcbiAgfVxuICBcbiAgXG4gLy8gTWV0aG9kIHRvIHRha2UgYSBzbmFwc2hvdCBvZiB0aGUgY3VycmVudCBzY2VuZSBzdGF0ZSBhbmQgcmV0dXJuIGl0IGFzIEpTT05cbiAgdGFrZVNuYXBzaG90KCkge1xuICAgIGNvbnN0IHNuYXBzaG90ID0ge307XG5cbiAgICAvLyBJdGVyYXRlIG92ZXIgYWxsIHByb3BlcnRpZXMgb2YgdGhlIFNjZW5lIG9iamVjdFxuICAgIGZvciAoY29uc3QgcHJvcCBpbiB0aGlzKSB7XG4gICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgcHJvcGVydHkgaXMgbm90IGEgZnVuY3Rpb25cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzW3Byb3BdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgLy8gU2F2ZSB0aGUgcHJvcGVydHkgdmFsdWUgdG8gdGhlIHNuYXBzaG90XG4gICAgICAgICAgc25hcHNob3RbcHJvcF0gPSB0aGlzW3Byb3BdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ29udmVydCB0aGUgc25hcHNob3Qgb2JqZWN0IHRvIEpTT05cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoc25hcHNob3QsIG51bGwsIDIpO1xuICB9XG5cblxuICBsb2FkT2JqTW9kZWwob2JqUGF0aCkge1xuICAgIGNvbnN0IGxvYWRlciA9IG5ldyBPQkpMb2FkZXIoKTtcbiAgICBsb2FkZXIubG9hZChvYmpQYXRoLCAob2JqKSA9PiB7XG4gICAgICAvLyBQcm9jZXNzIHRoZSBsb2FkZWQgLm9iaiBmaWxlXG4gICAgICAvLyBGb3IgZXhhbXBsZSwgc2V0dGluZyBwb3NpdGlvbiwgc2NhbGUsIGV0Yy5cbiAgICAgIHRoaXMuc2NlbmUuYWRkKG9iaik7XG4gICAgfSk7XG4gIH1cbiAgXG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2VuZTtcblxuIl0sIm5hbWVzIjpbIlRIUkVFIiwiT3JiaXRDb250cm9scyIsIk9CSkxvYWRlciIsIlNjZW5lIiwiaW5pdCIsInJlbmRlcmVyIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImRvbUVsZW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJtYXJnaW4iLCJjYW52YXMiLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJnYW1tYU91dHB1dCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FtZXJhIiwieiIsImNvbnRyb2xzIiwidGFyZ2V0Iiwic2V0IiwiYWRkTGlnaHRzIiwiYWRkQmFja2dyb3VuZFNwaGVyZSIsImltYWdlMzYwUGF0aCIsImxvYWRPYmpNb2RlbCIsIm9ialBhdGgiLCJhZGRFdmVudExpc3RlbmVyIiwidXBkYXRlT2JqZWN0SW5mb0FycmF5IiwicHJpbnRTY2VuZVN0YXRlIiwiZXZlbnQiLCJrZXkiLCJzbmFwc2hvdEpTT04iLCJwcm9tcHQiLCJyZXN0b3JlU2NlbmVTdGF0ZSIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW5kZXIiLCJzY2VuZSIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImFkZCIsInBvaW50TGlnaHQxIiwiUG9pbnRMaWdodCIsInBvaW50TGlnaHQyIiwidGV4dHVyZVBhdGgiLCJzcGhlcmVHZW9tZXRyeSIsIlNwaGVyZUdlb21ldHJ5Iiwic2NhbGUiLCJ0ZXh0dXJlTG9hZGVyIiwiVGV4dHVyZUxvYWRlciIsInNwaGVyZVRleHR1cmUiLCJsb2FkIiwic3BoZXJlTWF0ZXJpYWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsIm1hcCIsInNwaGVyZU1lc2giLCJNZXNoIiwib2JqZWN0SW5mb0FycmF5IiwibGVuZ3RoIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwib2JqZWN0Iiwic2NlbmVTdGF0ZUpTT04iLCJhZGRFbGVtZW50IiwiZWxlbWVudFBhdGgiLCJvcHRpb25zIiwibWF0ZXJpYWwiLCJ4IiwieSIsInJvdGF0aW9uIiwibG9hZGVyIiwib2JqIiwidHJhdmVyc2UiLCJjaGlsZCIsImN1c3RvbVRleHR1cmUiLCJ0YWtlU25hcHNob3QiLCJzbmFwc2hvdCIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25zdHJ1Y3RvciIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwiV2ViR0xSZW5kZXJlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Scene.js\n"));

/***/ })

});