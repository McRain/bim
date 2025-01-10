"use strict";
(self["webpackChunkbimview_pack"] = self["webpackChunkbimview_pack"] || []).push([[518],{

/***/ 518:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reneos_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(695);

const App = _reneos_app__WEBPACK_IMPORTED_MODULE_0__["default"] || _reneos_app__WEBPACK_IMPORTED_MODULE_0__
//import { computed } from "vue"


App.menu.main.push({
  id: "pack",
  label: "Pack",
  type: "group",
  icon: "view-tile",
  /*hidden: computed(() => {
    return !App.instances.instances.length
  }),*/
  ext: [
    {
      component: "SimpleButton",
      props: {
        tooltip: "Break model",
        icon: {
          value: "view-tile",
          size: "50%"
        },
        handlers: {
          click: () => {
            App.engine.post({
              type: "packer", method: "Breaks"
            })
          }
        }
      }
    }
  ],
  handlers: {
    "enable": (m) => {
      App.engine.post({
        type: "packer", method: "Activate"
      })
    },
    "disable": () => {
      App.engine.post({
        type: "packer", method: "Deactivate"
      })
    }
  }
})

if (false) {}
else {
  App.engine.post({
    type: "imports",
    scripts: [`${window.location.href}packer/main.js`]
  })
}

/***/ })

}]);