(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_components_home_sectionfour_index_js"],{

/***/ "./src/components/home/sectionfour/SectionFourElements.js":
/*!****************************************************************!*\
  !*** ./src/components/home/sectionfour/SectionFourElements.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionFourContainer": () => (/* binding */ SectionFourContainer),
/* harmony export */   "SectionFourCarouselContainer": () => (/* binding */ SectionFourCarouselContainer),
/* harmony export */   "StyledCarousel": () => (/* binding */ StyledCarousel),
/* harmony export */   "SectionFourCarouselItem": () => (/* binding */ SectionFourCarouselItem),
/* harmony export */   "SectionFourCarouselImg": () => (/* binding */ SectionFourCarouselImg)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-elastic-carousel */ "./node_modules/react-elastic-carousel/dist/index.es.js");


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }


var SectionFourContainer = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e1shqoft4",
  label: "SectionFourContainer"
})( false ? 0 : {
  name: "d86m24",
  styles: "padding-top:43px;padding-bottom:43px;width:100%;height:auto;display:flex;flex-direction:column;align-items:center",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWR5XFxSZWFjdEpTXFxTYXNhbmEgRGlnaXRhbFxcbGFuZGluZy1wYWdlXFxzcmNcXGNvbXBvbmVudHNcXGhvbWVcXHNlY3Rpb25mb3VyXFxTZWN0aW9uRm91ckVsZW1lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUc4QyIsImZpbGUiOiJEOlxcUmVkeVxcUmVhY3RKU1xcU2FzYW5hIERpZ2l0YWxcXGxhbmRpbmctcGFnZVxcc3JjXFxjb21wb25lbnRzXFxob21lXFxzZWN0aW9uZm91clxcU2VjdGlvbkZvdXJFbGVtZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LWVsYXN0aWMtY2Fyb3VzZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uRm91ckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZy10b3A6IDQzcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDQzcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uRm91ckNhcm91c2VsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA3MHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZENhcm91c2VsID0gc3R5bGVkKENhcm91c2VsKWBcclxuICBoZWlnaHQ6IDEwMCU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvbkZvdXJDYXJvdXNlbEl0ZW0gPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHdpZHRoOiAxNjZweDtcclxuICBoZWlnaHQ6IDE3NXB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDE4MGRlZyxcclxuICAgICNmYmZhZmMgMCUsXHJcbiAgICByZ2JhKDI1MSwgMjUwLCAyNTIsIDAuNCkgMTAwJVxyXG4gICk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uRm91ckNhcm91c2VsSW1nID0gc3R5bGVkLmltZ2BcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbmA7XHJcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var SectionFourCarouselContainer = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e1shqoft3",
  label: "SectionFourCarouselContainer"
})( false ? 0 : {
  name: "1l137m1",
  styles: "width:100%;margin-top:14px;padding-left:70px;padding-right:70px",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWR5XFxSZWFjdEpTXFxTYXNhbmEgRGlnaXRhbFxcbGFuZGluZy1wYWdlXFxzcmNcXGNvbXBvbmVudHNcXGhvbWVcXHNlY3Rpb25mb3VyXFxTZWN0aW9uRm91ckVsZW1lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNzRCIsImZpbGUiOiJEOlxcUmVkeVxcUmVhY3RKU1xcU2FzYW5hIERpZ2l0YWxcXGxhbmRpbmctcGFnZVxcc3JjXFxjb21wb25lbnRzXFxob21lXFxzZWN0aW9uZm91clxcU2VjdGlvbkZvdXJFbGVtZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LWVsYXN0aWMtY2Fyb3VzZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uRm91ckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZy10b3A6IDQzcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDQzcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uRm91ckNhcm91c2VsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA3MHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZENhcm91c2VsID0gc3R5bGVkKENhcm91c2VsKWBcclxuICBoZWlnaHQ6IDEwMCU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvbkZvdXJDYXJvdXNlbEl0ZW0gPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHdpZHRoOiAxNjZweDtcclxuICBoZWlnaHQ6IDE3NXB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDE4MGRlZyxcclxuICAgICNmYmZhZmMgMCUsXHJcbiAgICByZ2JhKDI1MSwgMjUwLCAyNTIsIDAuNCkgMTAwJVxyXG4gICk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uRm91ckNhcm91c2VsSW1nID0gc3R5bGVkLmltZ2BcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbmA7XHJcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var StyledCarousel = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1__["default"],  false ? 0 : {
  target: "e1shqoft2",
  label: "StyledCarousel"
})( false ? 0 : {
  name: "13udsys",
  styles: "height:100%",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWR5XFxSZWFjdEpTXFxTYXNhbmEgRGlnaXRhbFxcbGFuZGluZy1wYWdlXFxzcmNcXGNvbXBvbmVudHNcXGhvbWVcXHNlY3Rpb25mb3VyXFxTZWN0aW9uRm91ckVsZW1lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCOEMiLCJmaWxlIjoiRDpcXFJlZHlcXFJlYWN0SlNcXFNhc2FuYSBEaWdpdGFsXFxsYW5kaW5nLXBhZ2VcXHNyY1xcY29tcG9uZW50c1xcaG9tZVxcc2VjdGlvbmZvdXJcXFNlY3Rpb25Gb3VyRWxlbWVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1lbGFzdGljLWNhcm91c2VsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvbkZvdXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmctdG9wOiA0M3B4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0M3B4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvbkZvdXJDYXJvdXNlbENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMTRweDtcclxuICBwYWRkaW5nLWxlZnQ6IDcwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogNzBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRDYXJvdXNlbCA9IHN0eWxlZChDYXJvdXNlbClgXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlY3Rpb25Gb3VyQ2Fyb3VzZWxJdGVtID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogc3RhdGljO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICB3aWR0aDogMTY2cHg7XHJcbiAgaGVpZ2h0OiAxNzVweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAxODBkZWcsXHJcbiAgICAjZmJmYWZjIDAlLFxyXG4gICAgcmdiYSgyNTEsIDI1MCwgMjUyLCAwLjQpIDEwMCVcclxuICApO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvbkZvdXJDYXJvdXNlbEltZyA9IHN0eWxlZC5pbWdgXHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG5gO1xyXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var SectionFourCarouselItem = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e1shqoft1",
  label: "SectionFourCarouselItem"
})( false ? 0 : {
  name: "owszuw",
  styles: "position:static;margin:10px;width:166px;height:175px;background:linear-gradient(\n    180deg,\n    #fbfafc 0%,\n    rgba(251, 250, 252, 0.4) 100%\n  );box-shadow:0px 0px 5px rgba(0, 0, 0, 0.5);border-radius:10px;display:flex;justify-content:center",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWR5XFxSZWFjdEpTXFxTYXNhbmEgRGlnaXRhbFxcbGFuZGluZy1wYWdlXFxzcmNcXGNvbXBvbmVudHNcXGhvbWVcXHNlY3Rpb25mb3VyXFxTZWN0aW9uRm91ckVsZW1lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCaUQiLCJmaWxlIjoiRDpcXFJlZHlcXFJlYWN0SlNcXFNhc2FuYSBEaWdpdGFsXFxsYW5kaW5nLXBhZ2VcXHNyY1xcY29tcG9uZW50c1xcaG9tZVxcc2VjdGlvbmZvdXJcXFNlY3Rpb25Gb3VyRWxlbWVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1lbGFzdGljLWNhcm91c2VsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvbkZvdXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmctdG9wOiA0M3B4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0M3B4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvbkZvdXJDYXJvdXNlbENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMTRweDtcclxuICBwYWRkaW5nLWxlZnQ6IDcwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogNzBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRDYXJvdXNlbCA9IHN0eWxlZChDYXJvdXNlbClgXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlY3Rpb25Gb3VyQ2Fyb3VzZWxJdGVtID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogc3RhdGljO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICB3aWR0aDogMTY2cHg7XHJcbiAgaGVpZ2h0OiAxNzVweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAxODBkZWcsXHJcbiAgICAjZmJmYWZjIDAlLFxyXG4gICAgcmdiYSgyNTEsIDI1MCwgMjUyLCAwLjQpIDEwMCVcclxuICApO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvbkZvdXJDYXJvdXNlbEltZyA9IHN0eWxlZC5pbWdgXHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG5gO1xyXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var SectionFourCarouselImg = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("img",  false ? 0 : {
  target: "e1shqoft0",
  label: "SectionFourCarouselImg"
})( false ? 0 : {
  name: "ldqkli",
  styles: "margin:auto;display:block",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWR5XFxSZWFjdEpTXFxTYXNhbmEgRGlnaXRhbFxcbGFuZGluZy1wYWdlXFxzcmNcXGNvbXBvbmVudHNcXGhvbWVcXHNlY3Rpb25mb3VyXFxTZWN0aW9uRm91ckVsZW1lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDZ0QiLCJmaWxlIjoiRDpcXFJlZHlcXFJlYWN0SlNcXFNhc2FuYSBEaWdpdGFsXFxsYW5kaW5nLXBhZ2VcXHNyY1xcY29tcG9uZW50c1xcaG9tZVxcc2VjdGlvbmZvdXJcXFNlY3Rpb25Gb3VyRWxlbWVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1lbGFzdGljLWNhcm91c2VsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvbkZvdXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmctdG9wOiA0M3B4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0M3B4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvbkZvdXJDYXJvdXNlbENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMTRweDtcclxuICBwYWRkaW5nLWxlZnQ6IDcwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogNzBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRDYXJvdXNlbCA9IHN0eWxlZChDYXJvdXNlbClgXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlY3Rpb25Gb3VyQ2Fyb3VzZWxJdGVtID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogc3RhdGljO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICB3aWR0aDogMTY2cHg7XHJcbiAgaGVpZ2h0OiAxNzVweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAxODBkZWcsXHJcbiAgICAjZmJmYWZjIDAlLFxyXG4gICAgcmdiYSgyNTEsIDI1MCwgMjUyLCAwLjQpIDEwMCVcclxuICApO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvbkZvdXJDYXJvdXNlbEltZyA9IHN0eWxlZC5pbWdgXHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG5gO1xyXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

/***/ }),

/***/ "./src/components/home/sectionfour/index.js":
/*!**************************************************!*\
  !*** ./src/components/home/sectionfour/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles */ "./src/components/styles.js");
/* harmony import */ var _SectionFourElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SectionFourElements */ "./src/components/home/sectionfour/SectionFourElements.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/components/home/sectionfour/styles.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function importAll(r) {
  var images = {};
  r.keys().forEach(function (item, index) {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

var images = importAll(__webpack_require__("./src/assets/images/logo/client sync \\.(png|jpe?g|svg)$"));

var SectionFour = /*#__PURE__*/function (_Component) {
  _inherits(SectionFour, _Component);

  var _super = _createSuper(SectionFour);

  function SectionFour() {
    var _this;

    _classCallCheck(this, SectionFour);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      items: [{
        id: 1,
        name: "kementerian-keluatan-dan-perikanan-indonesia.png",
        alt: "logo kementerian keluatan dan perikanan indonesia",
        height: 114,
        width: 110
      }, {
        id: 2,
        name: "pegadaian.png",
        alt: "logo pegadaian",
        height: 76,
        width: 130
      }, {
        id: 3,
        name: "adetex.png",
        alt: "logo adetex",
        height: 55,
        width: 136
      }, {
        id: 4,
        name: "murata.png",
        alt: "logo murata",
        height: 46,
        width: 134
      }, {
        id: 5,
        name: "kmc.png",
        alt: "logo kmc",
        height: 86,
        width: 129
      }, {
        id: 6,
        name: "marwah.png",
        alt: "logo marwah",
        height: 150,
        width: 150
      }, {
        id: 7,
        name: "kementerian-keluatan-dan-perikanan-indonesia.png",
        alt: "logo kementerian keluatan dan perikanan indonesia",
        height: 114,
        width: 110
      }, {
        id: 8,
        name: "pegadaian.png",
        alt: "logo pegadaian",
        height: 76,
        width: 130
      }]
    });

    return _this;
  }

  _createClass(SectionFour, [{
    key: "render",
    value: function render() {
      var items = this.state.items;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_SectionFourElements__WEBPACK_IMPORTED_MODULE_2__.SectionFourContainer, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_1__.Title, {
          children: "Klien Hebat Sasana Digital"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_1__.StyledText, {
          children: "Klien Nasional hingga Internasional telah mempercayakan kami"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_1__.StyledText, {
          children: "sebagai partner yang tepat dalam bertransformasi."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SectionFourElements__WEBPACK_IMPORTED_MODULE_2__.SectionFourCarouselContainer, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SectionFourElements__WEBPACK_IMPORTED_MODULE_2__.StyledCarousel, {
            itemsToShow: 6,
            children: items.map(function (item) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SectionFourElements__WEBPACK_IMPORTED_MODULE_2__.SectionFourCarouselItem, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SectionFourElements__WEBPACK_IMPORTED_MODULE_2__.SectionFourCarouselImg, {
                  src: images[item.name]["default"],
                  alt: item.alt,
                  height: item.height,
                  width: item.width
                }, item.id)
              });
            })
          })
        })]
      });
    }
  }]);

  return SectionFour;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionFour);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/home/sectionfour/styles.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/home/sectionfour/styles.css ***!
  \************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* purgecss start ignore */\n\nbutton.rec-dot {\n  /* background-color: rgb(235, 16, 16); */\n  box-shadow: none;\n  width: 50px;\n  height: 8px;\n  border: 1px solid #f46f4f;\n  box-sizing: border-box;\n  border-radius: 28px;\n}\n\nbutton.rec-dot:hover,\r\nbutton.rec-dot:active,\r\nbutton.rec-dot:focus {\n  box-shadow: none;\n  background-color: none;\n  transform: scale(1.1);\n}\n\nbutton.rec-dot_active {\n  background-color: var(--clr-primary);\n}\n\nbutton.rec-arrow {\n  color: var(--clr-primary);\n  background: transparent;\n  /* border: 3px solid #1d3463; */\n  box-shadow: 0 0 5px 0px var(--clr-secondary);\n  border-radius: 10px;\n}\n\nbutton.rec-arrow:hover:enabled,\r\nbutton.rec-arrow:hover:disabled,\r\nbutton.rec-arrow:focus:enabled,\r\nbutton.rec-arrow:focus:disabled {\n  background-color: var(--clr-primary);\n  color: #fff;\n}\n\nbutton.rec-arrow-left {\n  margin-right: 10px;\n}\n\nbutton.rec-arrow-right {\n  margin-left: 10px;\n}\n\n/* purgecss end ignore */\r\n", "",{"version":3,"sources":["<no source>","webpack://./src/components/home/sectionfour/styles.css"],"names":[],"mappings":"AAAA,2BAAA;;ACAA;EACE,wCAAwC;EACxC,gBAAgB;EAChB,WAAW;EACX,WAAW;EACX,yBAAyB;EACzB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;;;EAGE,gBAAgB;EAChB,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;EACvB,+BAA+B;EAC/B,4CAA4C;EAC5C,mBAAmB;AACrB;;AAEA;;;;EAIE,oCAAoC;EACpC,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AD5CA,yBAAA","sourcesContent":[null,"button.rec-dot {\r\n  /* background-color: rgb(235, 16, 16); */\r\n  box-shadow: none;\r\n  width: 50px;\r\n  height: 8px;\r\n  border: 1px solid #f46f4f;\r\n  box-sizing: border-box;\r\n  border-radius: 28px;\r\n}\r\n\r\nbutton.rec-dot:hover,\r\nbutton.rec-dot:active,\r\nbutton.rec-dot:focus {\r\n  box-shadow: none;\r\n  background-color: none;\r\n  transform: scale(1.1);\r\n}\r\n\r\nbutton.rec-dot_active {\r\n  background-color: var(--clr-primary);\r\n}\r\n\r\nbutton.rec-arrow {\r\n  color: var(--clr-primary);\r\n  background: transparent;\r\n  /* border: 3px solid #1d3463; */\r\n  box-shadow: 0 0 5px 0px var(--clr-secondary);\r\n  border-radius: 10px;\r\n}\r\n\r\nbutton.rec-arrow:hover:enabled,\r\nbutton.rec-arrow:hover:disabled,\r\nbutton.rec-arrow:focus:enabled,\r\nbutton.rec-arrow:focus:disabled {\r\n  background-color: var(--clr-primary);\r\n  color: #fff;\r\n}\r\n\r\nbutton.rec-arrow-left {\r\n  margin-right: 10px;\r\n}\r\n\r\nbutton.rec-arrow-right {\r\n  margin-left: 10px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/assets/images/logo/client/adetex.png":
/*!**************************************************!*\
  !*** ./src/assets/images/logo/client/adetex.png ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "fa12de5f5f4d644ec6d1615317ae0121.png");

/***/ }),

/***/ "./src/assets/images/logo/client/kementerian-keluatan-dan-perikanan-indonesia.png":
/*!****************************************************************************************!*\
  !*** ./src/assets/images/logo/client/kementerian-keluatan-dan-perikanan-indonesia.png ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "9eeb2050cb00a43e14595a5975f5a527.png");

/***/ }),

/***/ "./src/assets/images/logo/client/kmc.png":
/*!***********************************************!*\
  !*** ./src/assets/images/logo/client/kmc.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "e6aff379254adabb3b33126e7e6c9024.png");

/***/ }),

/***/ "./src/assets/images/logo/client/marwah.png":
/*!**************************************************!*\
  !*** ./src/assets/images/logo/client/marwah.png ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "10a4b5486a7756a1c74b4c8ab9b3eac8.png");

/***/ }),

/***/ "./src/assets/images/logo/client/murata.png":
/*!**************************************************!*\
  !*** ./src/assets/images/logo/client/murata.png ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "e6c15ae3d1a6e3c1ca047bf4b47342c9.png");

/***/ }),

/***/ "./src/assets/images/logo/client/pegadaian.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/logo/client/pegadaian.png ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "aaef55cfe7fd57c3435668f114d58ed0.png");

/***/ }),

/***/ "./src/components/home/sectionfour/styles.css":
/*!****************************************************!*\
  !*** ./src/components/home/sectionfour/styles.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/home/sectionfour/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/images/logo/client sync \\.(png|jpe?g|svg)$":
/*!*****************************************************************************!*\
  !*** ./src/assets/images/logo/client/ sync nonrecursive \.(png|jpe?g|svg)$ ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./adetex.png": "./src/assets/images/logo/client/adetex.png",
	"./kementerian-keluatan-dan-perikanan-indonesia.png": "./src/assets/images/logo/client/kementerian-keluatan-dan-perikanan-indonesia.png",
	"./kmc.png": "./src/assets/images/logo/client/kmc.png",
	"./marwah.png": "./src/assets/images/logo/client/marwah.png",
	"./murata.png": "./src/assets/images/logo/client/murata.png",
	"./pegadaian.png": "./src/assets/images/logo/client/pegadaian.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images/logo/client sync \\.(png|jpe?g|svg)$";

/***/ })

}]);
//# sourceMappingURL=src_components_home_sectionfour_index_js.js.map