"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_components_home_sectionone_index_js"],{

/***/ "./src/components/home/sectionone/SectionOneComponents.js":
/*!****************************************************************!*\
  !*** ./src/components/home/sectionone/SectionOneComponents.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionOneComponents": () => (/* binding */ SectionOneComponents)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _SectionOneElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionOneElements */ "./src/components/home/sectionone/SectionOneElements.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/components/styles.js");
/* harmony import */ var _assets_images_img_section_one_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/images/img/section-one.png */ "./src/assets/images/img/section-one.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var useViewport = function useViewport() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(window.innerWidth),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      width = _React$useState2[0],
      setWidth = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    var handleWindowResize = function handleWindowResize() {
      return setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);
    return function () {
      return window.removeEventListener("resize", handleWindowResize);
    };
  }, []); // Return the width so we can use it in our components

  return {
    width: width
  };
};

var SectionOneComponents = function SectionOneComponents() {
  var _useViewport = useViewport(),
      width = _useViewport.width;

  var breakpoint = 1279;
  return width < breakpoint ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SectionOneElements__WEBPACK_IMPORTED_MODULE_1__.SectionOneContainer, {
    className: "flex",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_SectionOneElements__WEBPACK_IMPORTED_MODULE_1__.SectionOneLeft, {
      className: "content-left flex-1 ",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_2__.Title, {
        children: "Akselerasikan Bisnis Anda Melalui Pemanfaatan Teknologi Digital"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_2__.StyledText, {
        children: "Berangkat dari berbagai permasalahan digital yang sering kali dihadapi suatu bisnis, "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_2__.StyledText, {
        children: "Sasana Digital berkomitmen menghadirkan sebuah solusi efektif melalui Transformasi Digital."
      })]
    })
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_SectionOneElements__WEBPACK_IMPORTED_MODULE_1__.SectionOneContainer, {
    className: "flex",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_SectionOneElements__WEBPACK_IMPORTED_MODULE_1__.SectionOneLeft, {
      className: "content-left flex-1 ",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_2__.Title, {
        children: "Akselerasikan Bisnis Anda Melalui Pemanfaatan Teknologi Digital"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_2__.StyledText, {
        children: "Berangkat dari berbagai permasalahan digital yang sering kali dihadapi suatu bisnis, "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_2__.StyledText, {
        children: "Sasana Digital berkomitmen menghadirkan sebuah solusi efektif melalui Transformasi Digital."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SectionOneElements__WEBPACK_IMPORTED_MODULE_1__.SectionOneRight, {
      className: "content-right flex-1",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SectionOneElements__WEBPACK_IMPORTED_MODULE_1__.SectionOneImg, {
        src: _assets_images_img_section_one_png__WEBPACK_IMPORTED_MODULE_3__["default"],
        alt: "Segera mulai perjalanan bisnis anda"
      })
    })]
  });
};

/***/ }),

/***/ "./src/components/home/sectionone/SectionOneElements.js":
/*!**************************************************************!*\
  !*** ./src/components/home/sectionone/SectionOneElements.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionOneContainer": () => (/* binding */ SectionOneContainer),
/* harmony export */   "SectionOneLeft": () => (/* binding */ SectionOneLeft),
/* harmony export */   "SectionOneRight": () => (/* binding */ SectionOneRight),
/* harmony export */   "SectionOneImg": () => (/* binding */ SectionOneImg)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var SectionOneContainer = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e1i79zo73",
  label: "SectionOneContainer"
})( false ? 0 : {
  name: "s5xdrg",
  styles: "display:flex;align-items:center",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWR5XFxSZWFjdEpTXFxTYXNhbmEgRGlnaXRhbFxcbGFuZGluZy1wYWdlXFxzcmNcXGNvbXBvbmVudHNcXGhvbWVcXHNlY3Rpb25vbmVcXFNlY3Rpb25PbmVFbGVtZW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFNkMiLCJmaWxlIjoiRDpcXFJlZHlcXFJlYWN0SlNcXFNhc2FuYSBEaWdpdGFsXFxsYW5kaW5nLXBhZ2VcXHNyY1xcY29tcG9uZW50c1xcaG9tZVxcc2VjdGlvbm9uZVxcU2VjdGlvbk9uZUVsZW1lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlY3Rpb25PbmVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uT25lTGVmdCA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTUlO1xyXG4gICAgei1pbmRleDogODtcclxuXHJcbiAgICBjb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBcclxuICAgIC8qIGJhY2tncm91bmQ6IGdyZWVuOyAqL1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6IGNhbGMoMTEwdmggLSAzMjVweCk7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvbk9uZVJpZ2h0ID0gc3R5bGVkLmRpdmBcclxuXHJcbiAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDcxMXB4O1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMTB2aCAtIDEwMHB4KTtcclxuICAgICAgICB6LWluZGV4OiA1O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNjIuNDElLCAjRkZGRkZGIDEwMCUpLCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNGRkZGRkYgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNTAlKTtcclxuICAgIH1cclxuYDtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvbk9uZUltZyA9IHN0eWxlZC5pbWdgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXgtd2lkdGg6IDcxMXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgaGVpZ2h0OiBjYWxjKDExMHZoIC0gMTAwcHgpO1xyXG4gICAgLyogaGVpZ2h0OiAxMTB2aDsgKi9cclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG5cclxuICAgIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNjIuNDElLCAjRkZGRkZGIDEwMCUpLCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNGRkZGRkYgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNTAlKSwgdXJsKC5qcGcpOyAqL1xyXG5cclxuICAgIFxyXG5gO1xyXG5cclxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var SectionOneLeft = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e1i79zo72",
  label: "SectionOneLeft"
})( false ? 0 : {
  name: "kqk9ei",
  styles: "display:flex;flex-direction:column;justify-content:flex-start;margin-top:10%;margin-right:15%;z-index:8;color:var(--clr-secondary);font-family:Arial;font-style:normal;height:calc(110vh - 325px)",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWR5XFxSZWFjdEpTXFxTYXNhbmEgRGlnaXRhbFxcbGFuZGluZy1wYWdlXFxzcmNcXGNvbXBvbmVudHNcXGhvbWVcXHNlY3Rpb25vbmVcXFNlY3Rpb25PbmVFbGVtZW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRd0MiLCJmaWxlIjoiRDpcXFJlZHlcXFJlYWN0SlNcXFNhc2FuYSBEaWdpdGFsXFxsYW5kaW5nLXBhZ2VcXHNyY1xcY29tcG9uZW50c1xcaG9tZVxcc2VjdGlvbm9uZVxcU2VjdGlvbk9uZUVsZW1lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlY3Rpb25PbmVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uT25lTGVmdCA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTUlO1xyXG4gICAgei1pbmRleDogODtcclxuXHJcbiAgICBjb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBcclxuICAgIC8qIGJhY2tncm91bmQ6IGdyZWVuOyAqL1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6IGNhbGMoMTEwdmggLSAzMjVweCk7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvbk9uZVJpZ2h0ID0gc3R5bGVkLmRpdmBcclxuXHJcbiAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDcxMXB4O1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMTB2aCAtIDEwMHB4KTtcclxuICAgICAgICB6LWluZGV4OiA1O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNjIuNDElLCAjRkZGRkZGIDEwMCUpLCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNGRkZGRkYgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNTAlKTtcclxuICAgIH1cclxuYDtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvbk9uZUltZyA9IHN0eWxlZC5pbWdgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXgtd2lkdGg6IDcxMXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgaGVpZ2h0OiBjYWxjKDExMHZoIC0gMTAwcHgpO1xyXG4gICAgLyogaGVpZ2h0OiAxMTB2aDsgKi9cclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG5cclxuICAgIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNjIuNDElLCAjRkZGRkZGIDEwMCUpLCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNGRkZGRkYgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNTAlKSwgdXJsKC5qcGcpOyAqL1xyXG5cclxuICAgIFxyXG5gO1xyXG5cclxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var SectionOneRight = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e1i79zo71",
  label: "SectionOneRight"
})( false ? 0 : {
  name: "1ilus1c",
  styles: "&::before{z-index:2;content:\"\";position:absolute;top:0;right:0;width:711px;height:calc(110vh - 100px);z-index:5;background:linear-gradient(180deg, rgba(255, 255, 255, 0) 62.41%, #FFFFFF 100%),linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 50%);}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWR5XFxSZWFjdEpTXFxTYXNhbmEgRGlnaXRhbFxcbGFuZGluZy1wYWdlXFxzcmNcXGNvbXBvbmVudHNcXGhvbWVcXHNlY3Rpb25vbmVcXFNlY3Rpb25PbmVFbGVtZW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QnlDIiwiZmlsZSI6IkQ6XFxSZWR5XFxSZWFjdEpTXFxTYXNhbmEgRGlnaXRhbFxcbGFuZGluZy1wYWdlXFxzcmNcXGNvbXBvbmVudHNcXGhvbWVcXHNlY3Rpb25vbmVcXFNlY3Rpb25PbmVFbGVtZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uT25lQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvbk9uZUxlZnQgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcclxuICAgIHotaW5kZXg6IDg7XHJcblxyXG4gICAgY29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnkpO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgXHJcbiAgICAvKiBiYWNrZ3JvdW5kOiBncmVlbjsgKi9cclxuICAgIFxyXG4gICAgaGVpZ2h0OiBjYWxjKDExMHZoIC0gMzI1cHgpO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlY3Rpb25PbmVSaWdodCA9IHN0eWxlZC5kaXZgXHJcblxyXG4gICAmOjpiZWZvcmUge1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHdpZHRoOiA3MTFweDtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTEwdmggLSAxMDBweCk7XHJcbiAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDYyLjQxJSwgI0ZGRkZGRiAxMDAlKSwgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjRkZGRkZGIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDUwJSk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFNlY3Rpb25PbmVJbWcgPSBzdHlsZWQuaW1nYFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWF4LXdpZHRoOiA3MTFweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGhlaWdodDogY2FsYygxMTB2aCAtIDEwMHB4KTtcclxuICAgIC8qIGhlaWdodDogMTEwdmg7ICovXHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuXHJcbiAgICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDYyLjQxJSwgI0ZGRkZGRiAxMDAlKSwgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjRkZGRkZGIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDUwJSksIHVybCguanBnKTsgKi9cclxuXHJcbiAgICBcclxuYDtcclxuXHJcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var SectionOneImg = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("img",  false ? 0 : {
  target: "e1i79zo70",
  label: "SectionOneImg"
})( false ? 0 : {
  name: "1tvab03",
  styles: "position:absolute;max-width:711px;width:100%;height:calc(110vh - 100px);right:0;top:0",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWR5XFxSZWFjdEpTXFxTYXNhbmEgRGlnaXRhbFxcbGFuZGluZy1wYWdlXFxzcmNcXGNvbXBvbmVudHNcXGhvbWVcXHNlY3Rpb25vbmVcXFNlY3Rpb25PbmVFbGVtZW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q3VDIiwiZmlsZSI6IkQ6XFxSZWR5XFxSZWFjdEpTXFxTYXNhbmEgRGlnaXRhbFxcbGFuZGluZy1wYWdlXFxzcmNcXGNvbXBvbmVudHNcXGhvbWVcXHNlY3Rpb25vbmVcXFNlY3Rpb25PbmVFbGVtZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uT25lQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvbk9uZUxlZnQgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcclxuICAgIHotaW5kZXg6IDg7XHJcblxyXG4gICAgY29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnkpO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgXHJcbiAgICAvKiBiYWNrZ3JvdW5kOiBncmVlbjsgKi9cclxuICAgIFxyXG4gICAgaGVpZ2h0OiBjYWxjKDExMHZoIC0gMzI1cHgpO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlY3Rpb25PbmVSaWdodCA9IHN0eWxlZC5kaXZgXHJcblxyXG4gICAmOjpiZWZvcmUge1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHdpZHRoOiA3MTFweDtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTEwdmggLSAxMDBweCk7XHJcbiAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDYyLjQxJSwgI0ZGRkZGRiAxMDAlKSwgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjRkZGRkZGIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDUwJSk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFNlY3Rpb25PbmVJbWcgPSBzdHlsZWQuaW1nYFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWF4LXdpZHRoOiA3MTFweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGhlaWdodDogY2FsYygxMTB2aCAtIDEwMHB4KTtcclxuICAgIC8qIGhlaWdodDogMTEwdmg7ICovXHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuXHJcbiAgICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDYyLjQxJSwgI0ZGRkZGRiAxMDAlKSwgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjRkZGRkZGIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDUwJSksIHVybCguanBnKTsgKi9cclxuXHJcbiAgICBcclxuYDtcclxuXHJcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

/***/ }),

/***/ "./src/components/home/sectionone/index.js":
/*!*************************************************!*\
  !*** ./src/components/home/sectionone/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _SectionOneComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionOneComponents */ "./src/components/home/sectionone/SectionOneComponents.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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





var SectionOne = /*#__PURE__*/function (_Component) {
  _inherits(SectionOne, _Component);

  var _super = _createSuper(SectionOne);

  function SectionOne() {
    _classCallCheck(this, SectionOne);

    return _super.apply(this, arguments);
  }

  _createClass(SectionOne, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_SectionOneComponents__WEBPACK_IMPORTED_MODULE_1__.SectionOneComponents, {});
    }
  }]);

  return SectionOne;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionOne);

/***/ }),

/***/ "./src/assets/images/img/section-one.png":
/*!***********************************************!*\
  !*** ./src/assets/images/img/section-one.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "6827402d342048dcb3d023460604fba4.png");

/***/ })

}]);
//# sourceMappingURL=src_components_home_sectionone_index_js.js.map