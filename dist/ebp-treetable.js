/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1), __webpack_require__(6), __webpack_require__(14), __webpack_require__(23), __webpack_require__(32), __webpack_require__(35), __webpack_require__(38)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _layouts, _framework, _listview, _table, _taskboard, _pagination, _utils) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    var _layouts2 = _interopRequireDefault(_layouts);

	    var _framework2 = _interopRequireDefault(_framework);

	    var _listview2 = _interopRequireDefault(_listview);

	    var _table2 = _interopRequireDefault(_table);

	    var _taskboard2 = _interopRequireDefault(_taskboard);

	    var _pagination2 = _interopRequireDefault(_pagination);

	    var _utils2 = _interopRequireDefault(_utils);

	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }

	    var ebpUI = angular.module('ebp-ui', [_layouts2.default.name, _framework2.default.name, _listview2.default.name, _table2.default.name, _taskboard2.default.name, _pagination2.default.name, _utils2.default.name]); /**
	                                                                                                                                                                                                                         * Created by yao on 15/12/4.
	                                                                                                                                                                                                                         */


	    exports.default = ebpUI;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(3), __webpack_require__(4), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config, _layouts, _ebpLayoutDirective, _ebpLayoutContainer) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var config = _interopRequireWildcard(_config);

	  var _layouts2 = _interopRequireDefault(_layouts);

	  var _ebpLayoutDirective2 = _interopRequireDefault(_ebpLayoutDirective);

	  var _ebpLayoutContainer2 = _interopRequireDefault(_ebpLayoutContainer);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	      return obj;
	    } else {
	      var newObj = {};

	      if (obj != null) {
	        for (var key in obj) {
	          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	        }
	      }

	      newObj.default = obj;
	      return newObj;
	    }
	  }

	  /**
	   * Created by yao on 15/12/7.
	   */


	  var layoutsModule = angular.module('ebpUI.layouts', []);
	  layoutsModule.directive(config.directiveNames.ebpLayout, _ebpLayoutDirective2.default).directive(config.directiveNames.ebpLayoutContainer, _ebpLayoutContainer2.default);

	  for (var e in _layouts2.default) {
	    layoutsModule.constant(e, _layouts2.default[e]);
	  }

	  exports.default = layoutsModule;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  /**
	   * Created by yao on 15/12/9.
	   */
	  var directiveNames = exports.directiveNames = {
	    ebpLayout: 'ebpLayout',
	    ebpLayoutContainer: 'ebpLayoutContainer'
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    /**
	     * Created by yao on 15/12/9.
	     */
	    var EbpLayoutType = {
	        row: 'row',
	        column: 'column'
	    };

	    exports.default = {
	        EbpLayoutType: EbpLayoutType
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    function EbpLayoutDirectiveFactory(EbpLayoutType) {
	        'ngInject';

	        function linkFun(scope, elem, attrs, layout) {
	            elem.addClass('ebp-layout');
	            attrs.$observe(_config.directiveNames.ebpLayout, function (type) {
	                var layoutType = type || EbpLayoutType.row;
	                layout.layoutType = layoutType;
	                layout.render();
	            });
	        }
	        var directive = {
	            restrict: 'A',
	            scope: true,
	            link: linkFun,
	            controller: EbpLayoutController,
	            controllerAs: '$ebpLayout'
	        };

	        return directive;
	    }

	    var EbpLayoutController = function () {
	        function EbpLayoutController(EbpLayoutType) {
	            'ngInject';

	            _classCallCheck(this, EbpLayoutController);

	            this.layoutItems = [];
	            this.EbpLayoutType = EbpLayoutType;
	        }

	        _createClass(EbpLayoutController, [{
	            key: 'render',
	            value: function render() {
	                var _this = this;

	                this.calcSize();
	                if (this.layoutType === this.EbpLayoutType.row) {
	                    angular.forEach(this.layoutItems, function (item) {
	                        item.render(_this.layoutType);
	                    });
	                }
	                if (this.layoutType === this.EbpLayoutType.column) {
	                    angular.forEach(this.layoutItems, function (item) {
	                        item.render(_this.layoutType);
	                    });
	                }
	            }
	        }, {
	            key: 'calcSize',
	            value: function calcSize() {
	                var size = 0,
	                    assignedItems = [],
	                    autoItems = [],
	                    allPercent = true;
	                angular.forEach(this.layoutItems, function (item) {
	                    if (!item.size) {
	                        autoItems.push(item);
	                    } else {
	                        allPercent = allPercent && angular.isNumber(item.size);
	                        assignedItems.push(item);
	                    }
	                });
	                if (assignedItems.length < 1) {
	                    size = 100 / this.layoutItems.length;
	                } else {
	                    if (allPercent) {
	                        var totalAssignedPercent = 0;
	                        angular.forEach(assignedItems, function (item) {
	                            totalAssignedPercent += item.size;
	                        });
	                        size = (100 - totalAssignedPercent) / autoItems.length;
	                    } else {
	                        (function () {
	                            size = '';
	                            var totalAssignedPercent = 0;
	                            var offsets = [];
	                            angular.forEach(assignedItems, function (item) {
	                                if (angular.isNumber(item.size)) {
	                                    totalAssignedPercent += item.size;
	                                }
	                                if (angular.isString(item.size)) {
	                                    offsets.push(item);
	                                }
	                            });
	                            if (offsets.length > 0) {
	                                size = '(100%';
	                                angular.forEach(offsets, function (item) {
	                                    size += ' - ' + item.size;
	                                });
	                                if (totalAssignedPercent > 0) {
	                                    size += ' - ' + totalAssignedPercent + '%';
	                                }
	                                size += ')';
	                                if (autoItems.length > 0) {
	                                    size += ' / ' + autoItems.length;
	                                }
	                            }
	                        })();
	                    }
	                }
	                angular.forEach(autoItems, function (item) {
	                    item.size = size;
	                });
	            }
	        }]);

	        return EbpLayoutController;
	    }();

	    exports.default = EbpLayoutDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    function EbpLayoutContainerDirectiveFactory() {
	        function linkFunc(scope, elem, attrs, layout) {
	            elem.addClass('ng-hide').addClass('ebp-layout-container');
	            var size = attrs[_config.directiveNames.ebpLayoutContainer];
	            if (size) {
	                var regx = /^[0-9]+.?[0-9]*$/;
	                if (regx.test(size)) {
	                    scope.$ebpLayoutContainer.size = Number(size);
	                } else {
	                    scope.$ebpLayoutContainer.size = size;
	                }
	            }
	            layout.layoutItems.push(scope.$ebpLayoutContainer);
	        }
	        var directive = {
	            restrict: 'A',
	            require: '^' + _config.directiveNames.ebpLayout,
	            scope: true,
	            link: linkFunc,
	            controller: EbpLayoutContainerController,
	            controllerAs: '$ebpLayoutContainer'
	        };

	        return directive;
	    }

	    var EbpLayoutContainerController = function () {
	        function EbpLayoutContainerController($scope, EbpLayoutType, $element) {
	            'ngInject';

	            _classCallCheck(this, EbpLayoutContainerController);

	            this.EbpLayoutType = EbpLayoutType;
	            this.$ebpLayout = $scope.$ebpLayout;
	            this.$el = $element;
	        }

	        _createClass(EbpLayoutContainerController, [{
	            key: 'render',
	            value: function render(type) {
	                if (type === this.EbpLayoutType.row) {
	                    if (angular.isNumber(this.size)) {
	                        this.$el.height(this.size + '%');
	                    } else {
	                        this.$el.height('calc(' + this.size + ')');
	                    }
	                }
	                if (type === this.EbpLayoutType.column) {
	                    if (angular.isNumber(this.size)) {
	                        this.$el.width(this.size + '%');
	                    } else {
	                        this.$el.width('calc(' + this.size + ')');
	                    }
	                }
	                this.$el.removeClass('ng-hide');
	            }
	        }]);

	        return EbpLayoutContainerController;
	    }();

	    exports.default = EbpLayoutContainerDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(7), __webpack_require__(8), __webpack_require__(9), __webpack_require__(10), __webpack_require__(11), __webpack_require__(12), __webpack_require__(13)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config, _ebpFramework, _ebpNavbar, _ebpSidebar, _ebpFrameworkContainer, _ebpSidenav, _ebpUiContent) {
	               'use strict';

	               Object.defineProperty(exports, "__esModule", {
	                              value: true
	               });

	               var config = _interopRequireWildcard(_config);

	               var _ebpFramework2 = _interopRequireDefault(_ebpFramework);

	               var _ebpNavbar2 = _interopRequireDefault(_ebpNavbar);

	               var _ebpSidebar2 = _interopRequireDefault(_ebpSidebar);

	               var _ebpFrameworkContainer2 = _interopRequireDefault(_ebpFrameworkContainer);

	               var _ebpSidenav2 = _interopRequireDefault(_ebpSidenav);

	               var _ebpUiContent2 = _interopRequireDefault(_ebpUiContent);

	               function _interopRequireDefault(obj) {
	                              return obj && obj.__esModule ? obj : {
	                                             default: obj
	                              };
	               }

	               function _interopRequireWildcard(obj) {
	                              if (obj && obj.__esModule) {
	                                             return obj;
	                              } else {
	                                             var newObj = {};

	                                             if (obj != null) {
	                                                            for (var key in obj) {
	                                                                           if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	                                                            }
	                                             }

	                                             newObj.default = obj;
	                                             return newObj;
	                              }
	               }

	               var frameworkModule = angular.module('ebpUI.framework', []); /**
	                                                                             * Created by yao on 15/12/11.
	                                                                             */

	               frameworkModule.directive(config.directiveNames.ebpFramework, _ebpFramework2.default).directive(config.directiveNames.ebpNavbar, _ebpNavbar2.default).directive(config.directiveNames.ebpSidebar, _ebpSidebar2.default).directive(config.directiveNames.ebpFrameworkContainer, _ebpFrameworkContainer2.default).directive(config.directiveNames.ebpSidenav, _ebpSidenav2.default).directive(config.directiveNames.ebpUiContent, _ebpUiContent2.default).run();

	               exports.default = frameworkModule;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    /**
	     * Created by yao on 15/12/11.
	     */
	    var directiveNames = exports.directiveNames = {
	        ebpFramework: 'ebpFramework',
	        ebpNavbar: 'ebpNavbar',
	        ebpSidebar: 'ebpSidebar',
	        ebpSidenav: 'ebpSidenav',
	        ebpFrameworkContainer: 'ebpFrameworkContainer',
	        ebpUiContent: 'ebpUiContent'
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    /**
	     * Created by yao on 15/12/11.
	     */
	    function EbpFrameworkDirectiveFactory() {
	        'ngInject';

	        function linkFunc(scope, elem, attrs) {
	            var themeName = '';
	            attrs.$observe('theme', function (theme) {
	                elem.removeClass(themeName);
	                if (theme) {
	                    elem.addClass(themeName = 'ebp-framework-' + theme);
	                }
	            });
	            elem.addClass('ebp-framework');
	        }
	        var directive = {
	            restrict: 'AE',
	            scope: true,
	            link: linkFunc
	        };

	        return directive;
	    }

	    exports.default = EbpFrameworkDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    /**
	     * Created by yao on 15/12/11.
	     */
	    function EbpNavbarDirectiveFactory() {
	        function linkFunc(scope, elem) {
	            elem.addClass('ebp-navbar');
	        }
	        var directive = {
	            restrict: 'AE',
	            link: linkFunc
	        };
	        return directive;
	    }

	    exports.default = EbpNavbarDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    /**
	     * Created by yao on 15/12/13.
	     */
	    function EbpSidebarDirectiveFactory() {
	        function linkFunc(scope, elem, attrs) {
	            attrs.$observe('layout', function (layout) {
	                if (layout) {
	                    elem.addClass('ebp-sidebar-' + layout);
	                }
	            });
	            elem.addClass('ebp-sidebar');
	        }
	        var directive = {
	            restrict: 'AE',
	            link: linkFunc
	        };

	        return directive;
	    }

	    exports.default = EbpSidebarDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    /**
	     * Created by yao on 15/12/13.
	     */
	    function EbpFrameworkContainerDirectiveFactory() {
	        function linkFunc(scope, elem) {
	            elem.addClass('ebp-framework-container');
	        }
	        var directive = {
	            restrict: 'AE',
	            link: linkFunc
	        };

	        return directive;
	    }

	    exports.default = EbpFrameworkContainerDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    /**
	     * Created by yao on 15/12/13.
	     */
	    function bindData(scope, sideNav, ngModel) {
	        if (!ngModel) {
	            return;
	        }
	        scope.$watch(function () {
	            return ngModel.$modelValue;
	        }, function (modelValue) {
	            sideNav.navs = modelValue || [];
	        });
	    }

	    function linkFunc(scope, elem, attrs, vm) {
	        var sideNav = scope.$ebpSideNav;
	        var themeName = '';
	        var ngModel = vm[0];
	        attrs.$observe('theme', function (theme) {
	            elem.removeClass(themeName);
	            if (theme) {
	                themeName = 'ebp-sidenav-' + theme;
	                elem.addClass(themeName);
	            }
	        });
	        bindData(scope, sideNav, ngModel);
	        elem.addClass('ebp-sidenav-a');
	    }

	    function EbpSidenavDirectiveFactory() {
	        var directive = {
	            restrict: 'A',
	            link: linkFunc,
	            require: ['?ngModel'],
	            replace: true,
	            transclude: true,
	            controller: SideNavController,
	            controllerAs: '$ebpSideNav',
	            templateUrl: 'src/framework/templates/ebp_sidenav.tpl.html'
	        };
	        return directive;
	    }

	    var SideNavController = function SideNavController() {
	        _classCallCheck(this, SideNavController);

	        this.navs = [];
	    };

	    exports.default = EbpSidenavDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  /**
	   * Created by yao on 15/12/14.
	   */
	  function EbpUIContentDirectiveFactory($timeout) {
	    'ngInject';

	    function linkFunc(scope, elem) {
	      elem.addClass('ebp-ui-content');
	    }
	    var directive = {
	      restrict: 'AE',
	      link: linkFunc
	    };

	    return directive;
	  }

	  exports.default = EbpUIContentDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(15), __webpack_require__(16), __webpack_require__(17), __webpack_require__(18), __webpack_require__(19), __webpack_require__(20), __webpack_require__(21), __webpack_require__(22)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config, _ebpListview, _toolbar, _settings, _gridview, _customeview, _item, _overlay) {
	              'use strict';

	              Object.defineProperty(exports, "__esModule", {
	                            value: true
	              });

	              var config = _interopRequireWildcard(_config);

	              var _ebpListview2 = _interopRequireDefault(_ebpListview);

	              var _toolbar2 = _interopRequireDefault(_toolbar);

	              var _settings2 = _interopRequireDefault(_settings);

	              var _gridview2 = _interopRequireDefault(_gridview);

	              var _customeview2 = _interopRequireDefault(_customeview);

	              var _item2 = _interopRequireDefault(_item);

	              var _overlay2 = _interopRequireDefault(_overlay);

	              function _interopRequireDefault(obj) {
	                            return obj && obj.__esModule ? obj : {
	                                          default: obj
	                            };
	              }

	              function _interopRequireWildcard(obj) {
	                            if (obj && obj.__esModule) {
	                                          return obj;
	                            } else {
	                                          var newObj = {};

	                                          if (obj != null) {
	                                                        for (var key in obj) {
	                                                                      if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	                                                        }
	                                          }

	                                          newObj.default = obj;
	                                          return newObj;
	                            }
	              }

	              /**
	               * Created by yao on 15/12/16.
	               */


	              var listViewModule = angular.module('ebpUI.listview', ['ngResource']);

	              listViewModule.directive(config.directiveNames.ebpListviewToolbar, _toolbar2.default).directive(config.directiveNames.ebpListview, _ebpListview2.default).directive(config.directiveNames.ebpListviewSettings, _settings2.default).directive(config.directiveNames.ebpListviewGrid, _gridview2.default).directive(config.directiveNames.ebpListviewItem, _item2.default).directive(config.directiveNames.ebpListviewOverlay, _overlay2.default).directive(config.directiveNames.ebpListviewCustom, _customeview2.default);

	              exports.default = listViewModule;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    /**
	     * Created by yao on 15/12/16.
	     */
	    var directiveNames = exports.directiveNames = {
	        ebpListview: 'ebpListview',
	        ebpListviewToolbar: 'ebpListviewToolbar',
	        ebpListviewSettings: 'ebpListviewSettings',
	        ebpListviewGrid: 'ebpListviewGrid',
	        ebpListviewCustom: 'ebpListviewCustom',
	        ebpListviewItem: 'ebpListviewItem',
	        ebpListviewOverlay: 'ebpListviewOverlay'
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    /**
	     * Created by yao on 15/12/16.
	     */
	    function bindData(scope, ebpList, ngModel) {
	        if (!ngModel) {
	            return;
	        }
	        scope.$watch(function () {
	            return ngModel.$modelValue;
	        }, function (modelValue) {
	            ebpList.data = modelValue;
	        });
	    }

	    function EbpListViewDirectiveFactory() {
	        'ngInject';

	        function compileFunc(tElem) {
	            tElem.append(angular.element('<div>').attr({
	                'ng-include': '$ebpList.viewTpl'
	            }).addClass('ebp-listview-container'));
	            return {
	                post: function post(scope, elem, attrs, vm) {
	                    elem.addClass('ebp-listview');
	                    var ngModel = vm[0];
	                    var $ebpList = scope.$ebpList;
	                    bindData(scope, $ebpList, ngModel);
	                }
	            };
	        }

	        var directive = {
	            restrict: 'AE',
	            compile: compileFunc,
	            scope: true,
	            require: ['?ngModel'],
	            controller: ListViewController,
	            controllerAs: '$ebpList'
	        };

	        return directive;
	    }

	    function transformRequest(data, headers) {
	        var fd = new FormData();
	        angular.forEach(data, function (value, key) {
	            if (value instanceof FileList) {
	                if (value.length == 1) {
	                    fd.append(key, value[0]);
	                } else {
	                    angular.forEach(value, function (file, index) {
	                        fd.append(key + '_' + index, file);
	                    });
	                }
	            } else {
	                fd.append(key, value);
	            }
	        });
	        headers()['Content-Type'] = undefined;
	        return fd;
	    }

	    var ListViewController = function () {
	        function ListViewController($scope, $element, $attrs, $window, $resource) {
	            'ngInject';

	            var _this = this;

	            _classCallCheck(this, ListViewController);

	            var datasource = $scope.$eval($attrs.datasource);
	            this.datasource = datasource;
	            this.$el = $element;
	            this.view = $attrs.view || 'table';
	            this.data = [];
	            this.items = [];
	            this.settings = {
	                customViews: [],
	                table: {}
	            };
	            this.$tableView = {};
	            if (angular.isObject(datasource)) {
	                var url = datasource.url;
	                var params = datasource.params;

	                this.Resource = $resource(url, params, {
	                    query: {
	                        cache: true,
	                        method: 'GET',
	                        isArray: true
	                    },
	                    save: {
	                        method: 'POST',
	                        transformRequest: transformRequest
	                    },
	                    update: {
	                        method: 'POST',
	                        transformRequest: transformRequest
	                    }
	                });
	            }
	            this.refresh = function () {
	                var pager = $scope.$ebpPager;
	                if (pager) {
	                    pager.refresh();
	                }
	            };
	            this.remove = function () {
	                for (var _len = arguments.length, items = Array(_len), _key = 0; _key < _len; _key++) {
	                    items[_key] = arguments[_key];
	                }

	                if (!$window.confirm('确定删除吗?')) {
	                    return;
	                }
	                angular.forEach(items, function (item) {
	                    if (angular.isFunction(item.$remove)) {
	                        item.$remove(function () {}, function () {
	                            //only for test, should remove this line in the future.
	                            var index = _this.data.indexOf(item);
	                            _this.data.splice(index, 1);
	                        });
	                    } else {
	                        var index = _this.data.indexOf(item);
	                        _this.data.splice(index, 1);
	                    }
	                });
	            };

	            this.sync = function () {
	                if (_this.view === 'table') {
	                    _this.$tableView.sync();
	                }
	                angular.forEach(_this.items, function (item) {
	                    if (item.isDirty) {
	                        var data = angular.extend({}, item.$model);
	                        //data.imageData = item.uploader.imageData;
	                        if (item.uploader.imageFile) {
	                            data.imageData = item.uploader.imageFile.file;
	                        }
	                        if (item.isNew) {
	                            (function () {
	                                var newModel = new _this.Resource(data);
	                                newModel.$save(function () {
	                                    if (item.uploader.imageFile) {
	                                        newModel.img = item.uploader.imageFile.url; //change URL to uploaded URL
	                                    }
	                                    item.synchronized();
	                                    var i = _.findIndex(_this.data, function (e) {
	                                        return e === item.$model;
	                                    });
	                                    _this.data.splice(i, 1, newModel);
	                                }, function () {
	                                    if (item.uploader.imageFile) {
	                                        newModel.img = item.uploader.imageFile.url; //change URL to uploaded URL
	                                    }
	                                    item.synchronized();
	                                    var i = _.findIndex(_this.data, function (e) {
	                                        return e === item.$model;
	                                    });
	                                    _this.data.splice(i, 1, newModel);
	                                });
	                            })();
	                        } else {
	                            _this.Resource.update(data, function () {
	                                if (item.uploader.imageFile) {
	                                    item.$model.img = item.uploader.imageFile.url; //change URL to uploaded URL
	                                }
	                                item.synchronized();
	                            }, function () {
	                                if (item.uploader.imageFile) {
	                                    item.$model.img = item.uploader.imageFile.url; //change URL to uploaded URL
	                                }
	                                item.synchronized();
	                            });
	                        }
	                    }
	                });
	            };
	        }

	        _createClass(ListViewController, [{
	            key: 'changeView',
	            value: function changeView(view) {
	                this.view = view;
	            }
	        }, {
	            key: 'add',
	            value: function add() {
	                if (this.view === 'table') {
	                    this.$tableView.add();
	                } else {
	                    this.data.unshift({});
	                }
	            }
	        }, {
	            key: 'viewTpl',
	            get: function get() {
	                var tpl = 'src/listview/templates/' + this.view + '.tpl.html';
	                var customViews = this.settings.customViews;
	                if (customViews[this.view]) {
	                    tpl = customViews[this.view].templateUrl;
	                }
	                return tpl;
	            }
	        }]);

	        return ListViewController;
	    }();

	    exports.default = EbpListViewDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(15)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });


	    function linkFunc(scope, elem) {
	        elem.addClass('ebp-listview-toolbar');
	    } /**
	       * Created by yao on 15/12/16.
	       */


	    function EbpListViewToolbarDirectiveFactory() {
	        var directive = {
	            restrict: 'AE',
	            require: '^' + _config.directiveNames.ebpListview,
	            scope: false,
	            link: linkFunc
	        };

	        return directive;
	    }

	    exports.default = EbpListViewToolbarDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(15)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    function linkFunc(scope, elem, attrs, listView) {
	        var settingName = attrs[_config.directiveNames.ebpListviewSettings];
	        listView.settings = listView.settings || {};
	        listView.settings[settingName] = scope.settings;
	        var attrSettings = angular.extend({}, attrs);
	        delete attrSettings.$$element;
	        delete attrSettings.$attr;
	        delete attrSettings[_config.directiveNames.ebpListviewSettings];
	        angular.forEach(attrSettings, function (v, k) {
	            scope.settings[k] = scope.$eval(v);
	        });
	        elem.remove();
	        scope.$destroy();
	    }

	    function EbpListViewSettingsDirectiveFactory() {
	        var directive = {
	            restrict: 'AE',
	            link: linkFunc,
	            scope: true,
	            require: '^' + _config.directiveNames.ebpListview,
	            controller: EbpListViewSettingsController,
	            controllerAs: '$ebpListSettings'
	        };

	        return directive;
	    }

	    var EbpListViewSettingsController = function EbpListViewSettingsController($scope) {
	        'ngInject';

	        _classCallCheck(this, EbpListViewSettingsController);

	        $scope.settings = this;
	    };

	    exports.default = EbpListViewSettingsDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(15)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		var _createClass = function () {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					if ("value" in descriptor) descriptor.writable = true;
					Object.defineProperty(target, descriptor.key, descriptor);
				}
			}

			return function (Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);
				if (staticProps) defineProperties(Constructor, staticProps);
				return Constructor;
			};
		}();

		var listViewGridClassName = 'ebp-listview-grid';
		var listViewItemClassName = '.ebp-listview-item';

		function linkFunc(scope, elem) {
			elem.addClass(listViewGridClassName);
		}

		function EbpGridViewDirectiveFactory() {
			var directive = {
				restrict: 'AE',
				link: linkFunc,
				require: '^' + _config.directiveNames.ebpListview,
				controller: EbpGridViewController,
				controllerAs: '$grid'
			};

			return directive;
		}

		var EbpGridViewController = function () {
			function EbpGridViewController($element, $scope, $window, $attrs) {
				'ngInject';

				_classCallCheck(this, EbpGridViewController);

				var settings = $scope.$eval($attrs.settings);
				angular.extend(this, settings);
				this.$el = $element;
				angular.element($window).on('resize', function () {
					$scope.$digest();
				});
			}

			_createClass(EbpGridViewController, [{
				key: 'itemHeight',
				get: function get() {
					return this.$el.find(listViewItemClassName).width();
				}
			}]);

			return EbpGridViewController;
		}();

		exports.default = EbpGridViewDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(15)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});


		function EbpListViewCustom($templateCache) {
			'ngInject';

			function linkFunc(scope, elem, attrs, listView) {
				listView.settings = listView.settings || {};
				var customViews = listView.settings.customViews = listView.settings.customViews || [];
				var name = attrs[_config.directiveNames.ebpListviewCustom];
				var template = elem.html().trim();
				var templateUrl = scope.$eval(attrs.templateUrl);
				if (name) {
					if (template) {
						templateUrl = 'ebp.listView.' + name + '.tpl.html';
						$templateCache.put(templateUrl, template);
					}

					customViews[name] = { templateUrl: templateUrl };
				}
				elem.remove();
			}

			var directive = {
				restrict: 'AE',
				require: '^' + _config.directiveNames.ebpListview,
				link: linkFunc
			};

			return directive;
		} /**
	    * Created by yao on 15/12/31.
	    */


		exports.default = EbpListViewCustom;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    /**
	     * Created by yao on 16/1/19.
	     */
	    function ListViewItemDirectiveFactory($compile) {
	        'ngInject';

	        function linkFunc(scope, elem) {
	            var $item = scope.$ebpListItem;
	            var $list = scope.$ebpList;
	            var $grid = scope.$grid;
	            var titleElem = elem.find('.ebp-title');
	            var overlayElem = elem.find('.ebp-overlay');
	            elem.addClass('ebp-listview-item');
	            $list.items.push($item);
	            if ($item.isNew) {
	                $list.editing = true;
	                titleElem[0].contentEditable = true;
	                titleElem.focus();
	            }
	            elem.on('click', function () {
	                if ($list.editing) {
	                    return;
	                }
	                scope.$apply(function () {
	                    scope.$grid.events.click();
	                });
	            });
	            elem.mousedown(function () {
	                clearTimeout(this.downTimer);
	                this.downTimer = setTimeout(function () {
	                    scope.$apply(function () {
	                        $list.editing = true;
	                    });
	                }, 1000);
	            }).mouseup(function () {
	                clearTimeout(this.downTimer);
	                if (!$list.editing) {
	                    return;
	                }
	                $(document).on('click', function editComplete(event) {
	                    if (!$(event.target).parents().addBack().is('.ebp-listview-item')) {
	                        scope.$apply(function () {
	                            $list.editing = false;
	                            titleElem[0].contentEditable = false;
	                            $(document).off('click', editComplete);
	                        });
	                    }
	                });
	            }).mouseout(function () {
	                clearTimeout(this.downTimer);
	            });
	            titleElem.on('click', function () {
	                if (!$list.editing) {
	                    return;
	                }
	                this.contentEditable = true;
	                titleElem.focus();
	            });
	            if ($grid.overlayTpl) {
	                $compile(overlayElem.append($grid.overlayTpl))(scope);
	            } else {
	                overlayElem.remove();
	            }
	        }

	        var directive = {
	            restrict: 'AE',
	            link: linkFunc,
	            controller: ListViewItemController,
	            controllerAs: '$ebpListItem'
	        };

	        return directive;
	    }

	    var ListViewItemController = function () {
	        function ListViewItemController($scope) {
	            'ngInject';

	            _classCallCheck(this, ListViewItemController);

	            this.$ebpList = $scope.$ebpList;
	            this.editing = false;
	            this.uploader = {};
	            Object.defineProperties(this, {
	                $model: {
	                    get: function get() {
	                        return $scope.item;
	                    }
	                }
	            });
	            this.$grid = $scope.$grid;
	        }

	        _createClass(ListViewItemController, [{
	            key: 'remove',
	            value: function remove($event) {
	                $event.stopPropagation();
	                this.$ebpList.remove(this.$model);
	            }
	        }, {
	            key: '_onTitleFocus',
	            value: function _onTitleFocus($event) {
	                if (this.isDirty) {
	                    return;
	                }
	                this.originTitle = $event.target.innerText;
	            }
	        }, {
	            key: '_onTitleBlur',
	            value: function _onTitleBlur($event) {
	                var newVal = $event.target.innerText;
	                this.$model[this.$grid.title] = newVal;
	                this.isTitleDirty = this.originTitle !== this.$model[this.$grid.title];
	            }
	        }, {
	            key: 'synchronized',
	            value: function synchronized() {
	                this.isTitleDirty = false;
	                this.uploader = {};
	            }
	        }, {
	            key: 'isNew',
	            get: function get() {
	                return !(Object.getPrototypeOf(this.$model) instanceof Object);
	            }
	        }, {
	            key: 'isDirty',
	            get: function get() {
	                return this.uploader.imageFile || this.isTitleDirty;
	            }
	        }]);

	        return ListViewItemController;
	    }();

	    exports.default = ListViewItemDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(15)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });


	    function EbpListViewOverlayDirectiveFactory() {

	        function linkFunc(scope, elem, attrs, settings) {
	            settings.overlayTpl = elem.html();
	        }

	        var directive = {
	            restrict: 'AE',
	            require: '^' + _config.directiveNames.ebpListviewSettings,
	            link: linkFunc
	        };

	        return directive;
	    } /**
	       * Created by yao on 16/1/26.
	       */


	    exports.default = EbpListViewOverlayDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(24), __webpack_require__(25), __webpack_require__(26), __webpack_require__(27), __webpack_require__(28), __webpack_require__(29), __webpack_require__(30), __webpack_require__(31)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config, _ebpTable, _colDefs, _column, _checkColumn, _cell, _entry, _columnheader) {
	           'use strict';

	           Object.defineProperty(exports, "__esModule", {
	                      value: true
	           });

	           var config = _interopRequireWildcard(_config);

	           var _ebpTable2 = _interopRequireDefault(_ebpTable);

	           var _colDefs2 = _interopRequireDefault(_colDefs);

	           var _column2 = _interopRequireDefault(_column);

	           var _checkColumn2 = _interopRequireDefault(_checkColumn);

	           var _cell2 = _interopRequireDefault(_cell);

	           var _entry2 = _interopRequireDefault(_entry);

	           var _columnheader2 = _interopRequireDefault(_columnheader);

	           function _interopRequireDefault(obj) {
	                      return obj && obj.__esModule ? obj : {
	                                 default: obj
	                      };
	           }

	           function _interopRequireWildcard(obj) {
	                      if (obj && obj.__esModule) {
	                                 return obj;
	                      } else {
	                                 var newObj = {};

	                                 if (obj != null) {
	                                            for (var key in obj) {
	                                                       if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	                                            }
	                                 }

	                                 newObj.default = obj;
	                                 return newObj;
	                      }
	           }

	           /**
	            * Created by yao on 15/12/17.
	            */


	           var tableModule = angular.module('ebpUI.table', ['ngSanitize', 'ngResource']);
	           tableModule.directive(config.directiveNames.ebpTable, _ebpTable2.default).directive(config.directiveNames.ebpTableColDefs, _colDefs2.default).directive(config.directiveNames.ebpTableCol, _column2.default).directive(config.directiveNames.ebpTableCheckCol, _checkColumn2.default).directive(config.directiveNames.ebpTableEntry, _entry2.default).directive(config.directiveNames.ebpTableColumnheader, _columnheader2.default).directive('tablecell', _cell2.default);

	           exports.default = tableModule;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    /**
	     * Created by yao on 15/12/16.
	     */
	    var directiveNames = exports.directiveNames = {
	        ebpTable: 'ebpTable',
	        ebpTableColDefs: 'ebpTableColdefs',
	        ebpTableCol: 'ebpTableCol',
	        ebpTableCheckCol: 'ebpTableCheckCol',
	        ebpTableEntry: 'ebpTableEntry',
	        ebpTableColumnheader: 'ebpTableColumnheader'
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(24)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    function bindData(scope, ebpTable, ngModel) {
	        if (!ngModel) {
	            return;
	        }
	        scope.$watch(function () {
	            return ngModel.$modelValue;
	        }, function (modelValue) {
	            if (angular.isArray(modelValue)) {
	                ebpTable.data = modelValue;
	            }
	        });
	    }

	    function linkFunc(scope, elem, attrs, vm, trans) {
	        elem.addClass('ebp-table');
	        var ngModel = vm[0];
	        var $ebpTable = scope.$ebpTable;
	        bindData(scope, $ebpTable, ngModel);
	        trans(scope, function () {});
	        scope.$eval(attrs[_config.directiveNames.ebpTable] + '=$ebpTable');
	    }

	    function EbpTableDirectiveFactory() {
	        var directive = {
	            restrict: 'AE',
	            templateUrl: 'src/table/templates/ebpTable.tpl.html',
	            scope: true,
	            require: ['?ngModel'],
	            transclude: true,
	            link: linkFunc,
	            controller: EbpTableController,
	            controllerAs: '$ebpTable'
	        };

	        return directive;
	    }

	    var EbpTableController = function () {
	        function EbpTableController($scope, $attrs, $resource, $injector, $window) {
	            'ngInject';

	            var _this = this;

	            _classCallCheck(this, EbpTableController);

	            var settings = $scope.$eval($attrs.settings);
	            var datasource = $scope.$eval($attrs.datasource);
	            var pager = $scope.$eval($attrs.pager);
	            angular.extend(this, settings);
	            this.data = [];
	            this.$entries = [];
	            this.addHelpers = [];
	            if (angular.isObject(datasource)) {
	                var url = datasource.url;
	                var params = datasource.params;

	                this.Resource = $resource(url, params, {
	                    query: {
	                        cache: true,
	                        method: 'GET',
	                        isArray: true
	                    },
	                    update: {
	                        method: 'PUT'
	                    }
	                });
	            }
	            if (pager) {
	                $scope.$ebpPager = pager;
	            }
	            this.sortBy = function (col) {
	                if ($scope.$ebpPager) {
	                    $scope.$ebpPager.sort(col.name, col.sorting);
	                }
	            };

	            this.sync = function () {
	                angular.forEach(_this.$entries, function (entry) {
	                    if (entry.isDirty) {
	                        if (entry.isNew) {
	                            (function () {
	                                var newModel = new _this.Resource(entry.$model);
	                                newModel.$save(function () {
	                                    entry.synchronized();
	                                    var i = _.findIndex(_this.data, function (e) {
	                                        return e === entry.$model;
	                                    });
	                                    _this.data.splice(i, 1, newModel);
	                                }, function () {
	                                    //only for test, should remove this line in the future.
	                                    entry.synchronized();
	                                    var i = _.findIndex(_this.data, function (e) {
	                                        return e === entry.$model;
	                                    });
	                                    _this.data.splice(i, 1, newModel);
	                                });
	                            })();
	                        } else {
	                            entry.$model.$update(function () {
	                                entry.synchronized();
	                            }, function () {
	                                //only for test, should remove this line in the future.
	                                entry.synchronized();
	                            });
	                        }
	                    }
	                });
	            };

	            this.remove = function () {
	                for (var _len = arguments.length, items = Array(_len), _key = 0; _key < _len; _key++) {
	                    items[_key] = arguments[_key];
	                }

	                if (items.length === 0) {
	                    items = _this.checkedItems;
	                }
	                if (!$window.confirm('确定删除吗?')) {
	                    return;
	                }
	                angular.forEach(items, function (item) {
	                    if (angular.isFunction(item.$remove)) {
	                        item.$remove(function () {}, function () {
	                            //only for test, should remove this line in the future.
	                            var index = _this.data.indexOf(item);
	                            _this.$entries.splice(index, 1);
	                            _this.data.splice(index, 1);
	                        });
	                    } else {
	                        var index = _this.data.indexOf(item);
	                        _this.$entries.splice(index, 1);
	                        _this.data.splice(index, 1);
	                    }
	                });
	            };
	        }

	        _createClass(EbpTableController, [{
	            key: 'add',
	            value: function add() {
	                this.data.unshift({});
	            }
	        }, {
	            key: 'checkAll',
	            get: function get() {
	                var checkAll = !!this.$entries.length;
	                angular.forEach(this.$entries, function (e) {
	                    if (!e.$checked) {
	                        checkAll = false;
	                    }
	                });
	                angular.forEach(this.addHelpers, function (e) {
	                    if (!e.$checked) {
	                        checkAll = false;
	                    }
	                });
	                return checkAll;
	            },
	            set: function set(state) {
	                angular.forEach(this.$entries, function (e) {
	                    e.$checked = state;
	                });
	                angular.forEach(this.addHelpers, function (e) {
	                    e.$checked = state;
	                });
	            }
	        }, {
	            key: 'checkedItems',
	            get: function get() {
	                var checkedItems = [];
	                angular.forEach(this.$entries, function (e) {
	                    if (e.$checked) {
	                        checkedItems.push(e.$model);
	                    }
	                });
	                return checkedItems;
	            }
	        }]);

	        return EbpTableController;
	    }();

	    exports.default = EbpTableDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		var _createClass = function () {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					if ("value" in descriptor) descriptor.writable = true;
					Object.defineProperty(target, descriptor.key, descriptor);
				}
			}

			return function (Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);
				if (staticProps) defineProperties(Constructor, staticProps);
				return Constructor;
			};
		}();

		/**
	  * Created by yao on 15/12/21.
	  */
		function linkFunc(scope) {
			scope.settings = scope.settings || {};
			var ebpTable = scope.$ebpTable || scope.settings;
			ebpTable.colDefs = scope.$colDefs;
		}

		function EbpTableColDefsDirectiveFactory() {
			var directive = {
				restrict: 'AE',
				scope: false,
				link: linkFunc,
				controller: EbpTableColDefsController,
				controllerAs: '$colDefs'
			};

			return directive;
		}

		var EbpTableColDefsController = function () {
			function EbpTableColDefsController() {
				_classCallCheck(this, EbpTableColDefsController);

				this.cols = [];
			}

			_createClass(EbpTableColDefsController, [{
				key: 'fieldCols',
				get: function get() {
					return this.cols.filter(function (col) {
						return col.type === 'field';
					});
				}
			}]);

			return EbpTableColDefsController;
		}();

		exports.default = EbpTableColDefsDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(24)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		var _createClass = function () {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					if ("value" in descriptor) descriptor.writable = true;
					Object.defineProperty(target, descriptor.key, descriptor);
				}
			}

			return function (Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);
				if (staticProps) defineProperties(Constructor, staticProps);
				return Constructor;
			};
		}();

		function linkFunc(scope, elem, attrs, colDefs) {
			var column = scope.$col;
			var fieldName = attrs[_config.directiveNames.ebpTableCol];
			var sortable = attrs.sortable === '' ? true : attrs.sortable;
			var title = attrs.title || '';
			column.name = fieldName;
			column.title = title;
			column.type = fieldName ? 'field' : 'custom';
			column.dataType = attrs.type || 'string';
			column.sortable = sortable;
			if (column.type === 'custom') {
				column.tpl = elem.html();
			}
			colDefs.cols.push(column);
		}

		function EbpTableColDirectiveFactory() {
			var directive = {
				restrict: 'AE',
				scope: true,
				require: '^' + _config.directiveNames.ebpTableColDefs,
				link: linkFunc,
				controller: EbpTableColumnController,
				controllerAs: '$col'
			};

			return directive;
		}

		var EbpTableColumnController = function () {
			function EbpTableColumnController() {
				_classCallCheck(this, EbpTableColumnController);
			}

			_createClass(EbpTableColumnController, [{
				key: 'toJSON',
				value: function toJSON() {
					var jsonObj = angular.copy(this);
					delete jsonObj.tpl;
					return jsonObj;
				}
			}]);

			return EbpTableColumnController;
		}();

		exports.default = EbpTableColDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(24)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		function linkFunc(scope, elem, attrs, colDefs) {
			var checkCol = scope.$checkCol;
			colDefs.cols.push(checkCol);
			checkCol.type = 'checkbox';
		}

		function EbpTableCheckColDirectiveFactory() {
			var directive = {
				restrict: 'AE',
				scope: true,
				require: '^' + _config.directiveNames.ebpTableColDefs,
				link: linkFunc,
				controller: EbpTableCheckColController,
				controllerAs: '$checkCol'
			};

			return directive;
		}

		var EbpTableCheckColController = function EbpTableCheckColController() {
			_classCallCheck(this, EbpTableCheckColController);
		};

		exports.default = EbpTableCheckColDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(24)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		function EbpTableCellDirectiveFactory($compile, $interpolate) {
			'ngInject';

			function linkFunc(scope, elem, attrs, entry) {
				var col = scope.col;
				var cell = scope.$ebpTableCell;
				var table = scope.$ebpTable;
				entry.cells.push(cell);
				if (col.type === 'custom') {
					var customElem = angular.element('<div>').html(col.tpl);
					elem.html(customElem);
					$compile(customElem)(scope);
				}
				if (entry.isNew) {
					var firstFieldName = table.colDefs.fieldCols[0].name;
					if (col.name === firstFieldName) {
						cell.editing = true;
					}
				}
			}

			var directive = {
				restrict: 'C',
				link: linkFunc,
				require: '^' + _config.directiveNames.ebpTableEntry,
				controller: TableCellController,
				controllerAs: '$ebpTableCell'
			};

			return directive;
		}

		var TableCellController = function TableCellController($scope) {
			'ngInject';

			var _this = this;

			_classCallCheck(this, TableCellController);

			var cellModel = $scope.item;
			var col = $scope.col;
			var oldVal = undefined;
			this.editing = false;

			this.edit = function () {
				_this.editing = true;
			};

			this._onFocus = function () {
				if (_this.isDirty) {
					return;
				}
				oldVal = cellModel[col.name];
			};

			this._onBlur = function () {
				_this.isDirty = oldVal !== cellModel[col.name];
			};
		};

		exports.default = EbpTableCellDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(24)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    function EbpTableEntryDirectiveFactory() {

	        function linkFunc(scope, elem, attrs, table) {
	            var entry = scope.$ebpEntry;
	            table.$entries.push(entry);
	        }

	        var directive = {
	            restrict: 'AE',
	            require: '^' + _config.directiveNames.ebpTable,
	            link: linkFunc,
	            controller: EbpTableEntryController,
	            controllerAs: '$ebpEntry'
	        };

	        return directive;
	    }

	    var EbpTableEntryController = function () {
	        function EbpTableEntryController($scope, $controller, $resource) {
	            'ngInject';

	            var _this = this;

	            _classCallCheck(this, EbpTableEntryController);

	            var $table = $scope.$ebpTable;
	            this.$model = $scope.item;
	            this.$checked = false;
	            this.cells = [];
	            this.remove = function () {
	                $table.remove(_this.$model);
	            };

	            Object.defineProperties(this, {
	                isNew: {
	                    get: function get() {
	                        return !(Object.getPrototypeOf(_this.$model) instanceof Object);
	                    }
	                }
	            });
	        }

	        _createClass(EbpTableEntryController, [{
	            key: 'edit',
	            value: function edit() {
	                angular.forEach(this.cells, function (cell) {
	                    cell.editing = true;
	                });
	            }
	        }, {
	            key: 'synchronized',
	            value: function synchronized() {
	                angular.forEach(this.cells, function (cell) {
	                    delete cell.isDirty;
	                });
	            }
	        }, {
	            key: 'isDirty',
	            get: function get() {
	                return _.findIndex(this.cells, function (cell) {
	                    return cell.isDirty;
	                }) > -1;
	            }
	        }]);

	        return EbpTableEntryController;
	    }();

	    exports.default = EbpTableEntryDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		/**
	  * Created by yao on 16/1/12.
	  */
		function linkFunc(scope, elem) {
			var $col = scope.col;
			var $ebpTable = scope.$ebpTable;
			elem.on('click', function () {
				if ($col.sortable) {
					var sortingOrder = ['asc', 'desc'];
					$col.sorting = sortingOrder[sortingOrder.indexOf($col.sorting) + 1];
					$ebpTable.sortBy($col);
				}
				scope.$apply();
			});
		}

		function ColumnHeaderDirectiveFactory() {

			var directive = {
				restrict: 'AE',
				link: linkFunc
			};

			return directive;
		}

		exports.default = ColumnHeaderDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(33), __webpack_require__(34)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config, _taskboard) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var config = _interopRequireWildcard(_config);

	  var _taskboard2 = _interopRequireDefault(_taskboard);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	      return obj;
	    } else {
	      var newObj = {};

	      if (obj != null) {
	        for (var key in obj) {
	          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	        }
	      }

	      newObj.default = obj;
	      return newObj;
	    }
	  }

	  /**
	   * Created by yao on 16/1/2.
	   */


	  var taskBoardModule = angular.module('ebpUI.taskboard', ['ui.sortable']);
	  taskBoardModule.directive(config.directiveNames.ebpTaskboard, _taskboard2.default);
	  exports.default = taskBoardModule;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  /**
	   * Created by yao on 16/1/2.
	   */
	  var directiveNames = exports.directiveNames = {
	    ebpTaskboard: 'ebpTaskboard'
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		var _createClass = function () {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					if ("value" in descriptor) descriptor.writable = true;
					Object.defineProperty(target, descriptor.key, descriptor);
				}
			}

			return function (Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);
				if (staticProps) defineProperties(Constructor, staticProps);
				return Constructor;
			};
		}();

		/**
	  * Created by yao on 16/1/2.
	  */

		function linkFunc(scope, elem) {
			elem.addClass('ebp-taskboard-container');
		}

		function EbpTaskBoardDirectiveFactory() {
			var directive = {
				restrict: 'AE',
				link: linkFunc,
				templateUrl: 'src/taskboard/templates/taskboard.tpl.html',
				controller: EbpTaskBoardController,
				controllerAs: '$taskBoard'
			};

			return directive;
		}

		var EbpTaskBoardController = function () {
			function EbpTaskBoardController() {
				_classCallCheck(this, EbpTaskBoardController);
			}

			_createClass(EbpTaskBoardController, [{
				key: 'entrySortableOptions',
				get: function get() {
					return {
						cursor: 'move',
						handle: '.ebp-taskgroup-header',
						placeholder: 'ebp-taskgroup-placeholder',
						helper: 'clone',
						forcePlaceholderSize: true,
						opacity: 0.8,
						delay: 75,
						distance: 4,
						tolerance: 'pointer'
					};
				}
			}, {
				key: 'taskSortableOptions',
				get: function get() {
					return {
						connectWith: '.ebp-task-list',
						cursor: 'move',
						placeholder: 'ebp-task-placeholder',
						forcePlaceholderSize: true
					};
				}
			}]);

			return EbpTaskBoardController;
		}();

		exports.default = EbpTaskBoardDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(36), __webpack_require__(37)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config, _setting) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var config = _interopRequireWildcard(_config);

	  var _setting2 = _interopRequireDefault(_setting);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	      return obj;
	    } else {
	      var newObj = {};

	      if (obj != null) {
	        for (var key in obj) {
	          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	        }
	      }

	      newObj.default = obj;
	      return newObj;
	    }
	  }

	  /**
	   * Created by yao on 16/1/8.
	   */


	  var paginationModule = angular.module('ebpUI.pagination', []);

	  paginationModule.directive(config.directiveNames.ebpPaginationSetting, _setting2.default);

	  exports.default = paginationModule;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  /**
	   * Created by yao on 16/1/8.
	   */
	  var directiveNames = exports.directiveNames = {
	    ebpPaginationSetting: 'ebpPaginationSetting'
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    function _toConsumableArray(arr) {
	        if (Array.isArray(arr)) {
	            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

	            return arr2;
	        } else {
	            return Array.from(arr);
	        }
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    /**
	     * Created by yao on 16/1/8.
	     */
	    function linkFunc(scope, elem) {
	        scope.$destroy();
	        elem.remove();
	    }

	    function EbpPaginationSettingDirectiveFactory() {
	        var directive = {
	            restrict: 'AE',
	            link: linkFunc,
	            scope: {
	                model: '=ngModel',
	                datasource: '='
	            },
	            controller: EbpPaginationController,
	            controllerAs: '$ebpPagination',
	            bindToController: true
	        };

	        return directive;
	    }

	    var EbpPaginationController = function EbpPaginationController($scope, $attrs, $injector, $resource) {
	        'ngInject';

	        _classCallCheck(this, EbpPaginationController);

	        var datasource = $scope.$parent.$eval($attrs.datasource);
	        var count = $scope.$parent.$eval($attrs.count);
	        if (angular.isObject(datasource)) {
	            var url = datasource.url;
	            var params = datasource.params;

	            this.Resource = $resource(url, params, {
	                query: {
	                    cache: true,
	                    method: 'GET',
	                    isArray: true
	                },
	                update: {
	                    method: 'PUT'
	                }
	            });
	        }
	        if (angular.isString(count)) {
	            this.CountResource = $resource(count);
	        }
	        $scope.$parent.$ebpPager = $injector.instantiate(EbpPager, this);
	    };

	    var EbpPager = function () {
	        function EbpPager(Resource, model, CountResource, $filter) {
	            'ngInject';

	            var _this = this;

	            _classCallCheck(this, EbpPager);

	            this.pageNo = 1;
	            this.maxSize = 10;
	            this.quantity = 0;
	            this.model = model;
	            this.from = 0;
	            this.to = 0;
	            this.sorting = {
	                orderBy: undefined,
	                order: undefined
	            };
	            this.sort = function (by, order) {
	                _this.sorting.orderBy = by;
	                _this.sorting.order = order;
	                _this.fetch();
	            };
	            Object.defineProperties(this, {
	                CountResource: {
	                    get: function get() {
	                        return CountResource;
	                    }
	                },
	                Resource: {
	                    get: function get() {
	                        return Resource;
	                    }
	                }
	            });
	            this.fetch = function () {
	                return _this.Resource.query({
	                    pageNo: _this.pageNo,
	                    maxSize: _this.maxSize,
	                    orderBy: _this.sorting.orderBy,
	                    order: _this.sorting.order
	                }, function (items) {
	                    var _model;

	                    _this.from = (_this.pageNo - 1) * _this.maxSize + 1;
	                    _this.to = _this.pageNo === _this.total ? _this.quantity : _this.pageNo * _this.maxSize;
	                    var ordered = items;
	                    if (_this.sorting.order) {
	                        ordered = $filter('orderBy')(items, _this.sorting.orderBy, _this.sorting.order === 'desc');
	                    }
	                    _this.model.length = 0;
	                    (_model = _this.model).push.apply(_model, _toConsumableArray(ordered));
	                });
	            };
	            this.refresh();
	        }

	        _createClass(EbpPager, [{
	            key: 'refresh',
	            value: function refresh() {
	                var _this2 = this;

	                this.fetch();
	                if (angular.isFunction(this.CountResource)) {
	                    this.CountResource.get(function (count) {
	                        _this2.quantity = count.total;
	                        _this2.total = Math.ceil(_this2.quantity / _this2.maxSize);
	                    });
	                }
	            }
	        }, {
	            key: 'next',
	            value: function next() {
	                if (this.pageNo === this.total) {
	                    return;
	                }
	                this.pageNo += 1;
	                this.fetch();
	            }
	        }, {
	            key: 'prev',
	            value: function prev() {
	                if (this.pageNo === 1) {
	                    return;
	                }
	                this.pageNo -= 1;
	                this.fetch();
	            }
	        }, {
	            key: 'first',
	            value: function first() {
	                this.pageNo = 1;
	                this.fetch();
	            }
	        }, {
	            key: 'last',
	            value: function last() {
	                this.pageNo = this.total;
	                this.fetch();
	            }
	        }]);

	        return EbpPager;
	    }();

	    exports.default = EbpPaginationSettingDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(39), __webpack_require__(40)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _focusMe, _fileModel) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var _focusMe2 = _interopRequireDefault(_focusMe);

	  var _fileModel2 = _interopRequireDefault(_fileModel);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  /**
	   * Created by yao on 16/1/15.
	   */


	  var utilsModel = angular.module('ebpUI.utils', []);
	  utilsModel.directive('focusMe', _focusMe2.default).directive('fileModel', _fileModel2.default);
	  exports.default = utilsModel;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		/**
	  * Created by yao on 16/1/15.
	  */
		function FocusMeDirectiveFactory($parse, $timeout) {
			'ngInject';

			function linkFunc(scope, elem, attrs) {
				var model = $parse(attrs.focusMe);
				scope.$watch(model, function (value) {
					if (value === true) {
						$timeout(function () {
							return elem.focus();
						});
					}
				});

				elem.on('blur', function () {
					scope.$apply(function () {
						model.assign(scope, false);
					});
				});
			}

			var directive = {
				priority: 5,
				restrict: 'A',
				link: linkFunc
			};

			return directive;
		}

		exports.default = FocusMeDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    /**
	     * Created by yao on 16/1/21.
	     */
	    function FileModelDirectiveFactory($parse) {
	        'ngInject';

	        function linkFunc(scope, elem, attrs) {
	            var model = $parse(attrs.fileModel);
	            elem.on('change', function () {
	                var file = this.files[0];
	                var fr = new FileReader();
	                fr.readAsDataURL(file);
	                fr.onload = function () {
	                    var result = {};
	                    Object.defineProperties(result, {
	                        file: {
	                            get: function get() {
	                                return file;
	                            }
	                        },
	                        url: {
	                            get: function get() {
	                                return fr.result;
	                            }
	                        }
	                    });
	                    scope.$apply(function () {
	                        model.assign(scope, result);
	                    });
	                };
	            });
	        }

	        var directive = {
	            restrict: 'A',
	            link: linkFunc
	        };

	        return directive;
	    }

	    exports.default = FileModelDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
/******/ ]);
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1), __webpack_require__(6), __webpack_require__(14), __webpack_require__(23), __webpack_require__(32), __webpack_require__(35), __webpack_require__(38)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _layouts, _framework, _listview, _table, _taskboard, _pagination, _utils) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    var _layouts2 = _interopRequireDefault(_layouts);

	    var _framework2 = _interopRequireDefault(_framework);

	    var _listview2 = _interopRequireDefault(_listview);

	    var _table2 = _interopRequireDefault(_table);

	    var _taskboard2 = _interopRequireDefault(_taskboard);

	    var _pagination2 = _interopRequireDefault(_pagination);

	    var _utils2 = _interopRequireDefault(_utils);

	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }

	    var ebpUI = angular.module('ebp-ui', [_layouts2.default.name, _framework2.default.name, _listview2.default.name, _table2.default.name, _taskboard2.default.name, _pagination2.default.name, _utils2.default.name]); /**
	                                                                                                                                                                                                                         * Created by yao on 15/12/4.
	                                                                                                                                                                                                                         */


	    exports.default = ebpUI;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(3), __webpack_require__(4), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config, _layouts, _ebpLayoutDirective, _ebpLayoutContainer) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var config = _interopRequireWildcard(_config);

	  var _layouts2 = _interopRequireDefault(_layouts);

	  var _ebpLayoutDirective2 = _interopRequireDefault(_ebpLayoutDirective);

	  var _ebpLayoutContainer2 = _interopRequireDefault(_ebpLayoutContainer);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	      return obj;
	    } else {
	      var newObj = {};

	      if (obj != null) {
	        for (var key in obj) {
	          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	        }
	      }

	      newObj.default = obj;
	      return newObj;
	    }
	  }

	  /**
	   * Created by yao on 15/12/7.
	   */


	  var layoutsModule = angular.module('ebpUI.layouts', []);
	  layoutsModule.directive(config.directiveNames.ebpLayout, _ebpLayoutDirective2.default).directive(config.directiveNames.ebpLayoutContainer, _ebpLayoutContainer2.default);

	  for (var e in _layouts2.default) {
	    layoutsModule.constant(e, _layouts2.default[e]);
	  }

	  exports.default = layoutsModule;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  /**
	   * Created by yao on 15/12/9.
	   */
	  var directiveNames = exports.directiveNames = {
	    ebpLayout: 'ebpLayout',
	    ebpLayoutContainer: 'ebpLayoutContainer'
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    /**
	     * Created by yao on 15/12/9.
	     */
	    var EbpLayoutType = {
	        row: 'row',
	        column: 'column'
	    };

	    exports.default = {
	        EbpLayoutType: EbpLayoutType
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    function EbpLayoutDirectiveFactory(EbpLayoutType) {
	        'ngInject';

	        function linkFun(scope, elem, attrs, layout) {
	            elem.addClass('ebp-layout');
	            attrs.$observe(_config.directiveNames.ebpLayout, function (type) {
	                var layoutType = type || EbpLayoutType.row;
	                layout.layoutType = layoutType;
	                layout.render();
	            });
	        }
	        var directive = {
	            restrict: 'A',
	            scope: true,
	            link: linkFun,
	            controller: EbpLayoutController,
	            controllerAs: '$ebpLayout'
	        };

	        return directive;
	    }

	    var EbpLayoutController = function () {
	        function EbpLayoutController(EbpLayoutType) {
	            'ngInject';

	            _classCallCheck(this, EbpLayoutController);

	            this.layoutItems = [];
	            this.EbpLayoutType = EbpLayoutType;
	        }

	        _createClass(EbpLayoutController, [{
	            key: 'render',
	            value: function render() {
	                var _this = this;

	                this.calcSize();
	                if (this.layoutType === this.EbpLayoutType.row) {
	                    angular.forEach(this.layoutItems, function (item) {
	                        item.render(_this.layoutType);
	                    });
	                }
	                if (this.layoutType === this.EbpLayoutType.column) {
	                    angular.forEach(this.layoutItems, function (item) {
	                        item.render(_this.layoutType);
	                    });
	                }
	            }
	        }, {
	            key: 'calcSize',
	            value: function calcSize() {
	                var size = 0,
	                    assignedItems = [],
	                    autoItems = [],
	                    allPercent = true;
	                angular.forEach(this.layoutItems, function (item) {
	                    if (!item.size) {
	                        autoItems.push(item);
	                    } else {
	                        allPercent = allPercent && angular.isNumber(item.size);
	                        assignedItems.push(item);
	                    }
	                });
	                if (assignedItems.length < 1) {
	                    size = 100 / this.layoutItems.length;
	                } else {
	                    if (allPercent) {
	                        var totalAssignedPercent = 0;
	                        angular.forEach(assignedItems, function (item) {
	                            totalAssignedPercent += item.size;
	                        });
	                        size = (100 - totalAssignedPercent) / autoItems.length;
	                    } else {
	                        (function () {
	                            size = '';
	                            var totalAssignedPercent = 0;
	                            var offsets = [];
	                            angular.forEach(assignedItems, function (item) {
	                                if (angular.isNumber(item.size)) {
	                                    totalAssignedPercent += item.size;
	                                }
	                                if (angular.isString(item.size)) {
	                                    offsets.push(item);
	                                }
	                            });
	                            if (offsets.length > 0) {
	                                size = '(100%';
	                                angular.forEach(offsets, function (item) {
	                                    size += ' - ' + item.size;
	                                });
	                                if (totalAssignedPercent > 0) {
	                                    size += ' - ' + totalAssignedPercent + '%';
	                                }
	                                size += ')';
	                                if (autoItems.length > 0) {
	                                    size += ' / ' + autoItems.length;
	                                }
	                            }
	                        })();
	                    }
	                }
	                angular.forEach(autoItems, function (item) {
	                    item.size = size;
	                });
	            }
	        }]);

	        return EbpLayoutController;
	    }();

	    exports.default = EbpLayoutDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    function EbpLayoutContainerDirectiveFactory() {
	        function linkFunc(scope, elem, attrs, layout) {
	            elem.addClass('ng-hide').addClass('ebp-layout-container');
	            var size = attrs[_config.directiveNames.ebpLayoutContainer];
	            if (size) {
	                var regx = /^[0-9]+.?[0-9]*$/;
	                if (regx.test(size)) {
	                    scope.$ebpLayoutContainer.size = Number(size);
	                } else {
	                    scope.$ebpLayoutContainer.size = size;
	                }
	            }
	            layout.layoutItems.push(scope.$ebpLayoutContainer);
	        }
	        var directive = {
	            restrict: 'A',
	            require: '^' + _config.directiveNames.ebpLayout,
	            scope: true,
	            link: linkFunc,
	            controller: EbpLayoutContainerController,
	            controllerAs: '$ebpLayoutContainer'
	        };

	        return directive;
	    }

	    var EbpLayoutContainerController = function () {
	        function EbpLayoutContainerController($scope, EbpLayoutType, $element) {
	            'ngInject';

	            _classCallCheck(this, EbpLayoutContainerController);

	            this.EbpLayoutType = EbpLayoutType;
	            this.$ebpLayout = $scope.$ebpLayout;
	            this.$el = $element;
	        }

	        _createClass(EbpLayoutContainerController, [{
	            key: 'render',
	            value: function render(type) {
	                if (type === this.EbpLayoutType.row) {
	                    if (angular.isNumber(this.size)) {
	                        this.$el.height(this.size + '%');
	                    } else {
	                        this.$el.height('calc(' + this.size + ')');
	                    }
	                }
	                if (type === this.EbpLayoutType.column) {
	                    if (angular.isNumber(this.size)) {
	                        this.$el.width(this.size + '%');
	                    } else {
	                        this.$el.width('calc(' + this.size + ')');
	                    }
	                }
	                this.$el.removeClass('ng-hide');
	            }
	        }]);

	        return EbpLayoutContainerController;
	    }();

	    exports.default = EbpLayoutContainerDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(7), __webpack_require__(8), __webpack_require__(9), __webpack_require__(10), __webpack_require__(11), __webpack_require__(12), __webpack_require__(13)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config, _ebpFramework, _ebpNavbar, _ebpSidebar, _ebpFrameworkContainer, _ebpSidenav, _ebpUiContent) {
	               'use strict';

	               Object.defineProperty(exports, "__esModule", {
	                              value: true
	               });

	               var config = _interopRequireWildcard(_config);

	               var _ebpFramework2 = _interopRequireDefault(_ebpFramework);

	               var _ebpNavbar2 = _interopRequireDefault(_ebpNavbar);

	               var _ebpSidebar2 = _interopRequireDefault(_ebpSidebar);

	               var _ebpFrameworkContainer2 = _interopRequireDefault(_ebpFrameworkContainer);

	               var _ebpSidenav2 = _interopRequireDefault(_ebpSidenav);

	               var _ebpUiContent2 = _interopRequireDefault(_ebpUiContent);

	               function _interopRequireDefault(obj) {
	                              return obj && obj.__esModule ? obj : {
	                                             default: obj
	                              };
	               }

	               function _interopRequireWildcard(obj) {
	                              if (obj && obj.__esModule) {
	                                             return obj;
	                              } else {
	                                             var newObj = {};

	                                             if (obj != null) {
	                                                            for (var key in obj) {
	                                                                           if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	                                                            }
	                                             }

	                                             newObj.default = obj;
	                                             return newObj;
	                              }
	               }

	               var frameworkModule = angular.module('ebpUI.framework', []); /**
	                                                                             * Created by yao on 15/12/11.
	                                                                             */

	               frameworkModule.directive(config.directiveNames.ebpFramework, _ebpFramework2.default).directive(config.directiveNames.ebpNavbar, _ebpNavbar2.default).directive(config.directiveNames.ebpSidebar, _ebpSidebar2.default).directive(config.directiveNames.ebpFrameworkContainer, _ebpFrameworkContainer2.default).directive(config.directiveNames.ebpSidenav, _ebpSidenav2.default).directive(config.directiveNames.ebpUiContent, _ebpUiContent2.default).run();

	               exports.default = frameworkModule;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    /**
	     * Created by yao on 15/12/11.
	     */
	    var directiveNames = exports.directiveNames = {
	        ebpFramework: 'ebpFramework',
	        ebpNavbar: 'ebpNavbar',
	        ebpSidebar: 'ebpSidebar',
	        ebpSidenav: 'ebpSidenav',
	        ebpFrameworkContainer: 'ebpFrameworkContainer',
	        ebpUiContent: 'ebpUiContent'
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    /**
	     * Created by yao on 15/12/11.
	     */
	    function EbpFrameworkDirectiveFactory() {
	        'ngInject';

	        function linkFunc(scope, elem, attrs) {
	            var themeName = '';
	            attrs.$observe('theme', function (theme) {
	                elem.removeClass(themeName);
	                if (theme) {
	                    elem.addClass(themeName = 'ebp-framework-' + theme);
	                }
	            });
	            elem.addClass('ebp-framework');
	        }
	        var directive = {
	            restrict: 'AE',
	            scope: true,
	            link: linkFunc
	        };

	        return directive;
	    }

	    exports.default = EbpFrameworkDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    /**
	     * Created by yao on 15/12/11.
	     */
	    function EbpNavbarDirectiveFactory() {
	        function linkFunc(scope, elem) {
	            elem.addClass('ebp-navbar');
	        }
	        var directive = {
	            restrict: 'AE',
	            link: linkFunc
	        };
	        return directive;
	    }

	    exports.default = EbpNavbarDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    /**
	     * Created by yao on 15/12/13.
	     */
	    function EbpSidebarDirectiveFactory() {
	        function linkFunc(scope, elem, attrs) {
	            attrs.$observe('layout', function (layout) {
	                if (layout) {
	                    elem.addClass('ebp-sidebar-' + layout);
	                }
	            });
	            elem.addClass('ebp-sidebar');
	        }
	        var directive = {
	            restrict: 'AE',
	            link: linkFunc
	        };

	        return directive;
	    }

	    exports.default = EbpSidebarDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    /**
	     * Created by yao on 15/12/13.
	     */
	    function EbpFrameworkContainerDirectiveFactory() {
	        function linkFunc(scope, elem) {
	            elem.addClass('ebp-framework-container');
	        }
	        var directive = {
	            restrict: 'AE',
	            link: linkFunc
	        };

	        return directive;
	    }

	    exports.default = EbpFrameworkContainerDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    /**
	     * Created by yao on 15/12/13.
	     */
	    function bindData(scope, sideNav, ngModel) {
	        if (!ngModel) {
	            return;
	        }
	        scope.$watch(function () {
	            return ngModel.$modelValue;
	        }, function (modelValue) {
	            sideNav.navs = modelValue || [];
	        });
	    }

	    function linkFunc(scope, elem, attrs, vm) {
	        var sideNav = scope.$ebpSideNav;
	        var themeName = '';
	        var ngModel = vm[0];
	        attrs.$observe('theme', function (theme) {
	            elem.removeClass(themeName);
	            if (theme) {
	                themeName = 'ebp-sidenav-' + theme;
	                elem.addClass(themeName);
	            }
	        });
	        bindData(scope, sideNav, ngModel);
	        elem.addClass('ebp-sidenav-a');
	    }

	    function EbpSidenavDirectiveFactory() {
	        var directive = {
	            restrict: 'A',
	            link: linkFunc,
	            require: ['?ngModel'],
	            replace: true,
	            transclude: true,
	            controller: SideNavController,
	            controllerAs: '$ebpSideNav',
	            templateUrl: 'src/framework/templates/ebp_sidenav.tpl.html'
	        };
	        return directive;
	    }

	    var SideNavController = function SideNavController() {
	        _classCallCheck(this, SideNavController);

	        this.navs = [];
	    };

	    exports.default = EbpSidenavDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  /**
	   * Created by yao on 15/12/14.
	   */
	  function EbpUIContentDirectiveFactory($timeout) {
	    'ngInject';

	    function linkFunc(scope, elem) {
	      elem.addClass('ebp-ui-content');
	    }
	    var directive = {
	      restrict: 'AE',
	      link: linkFunc
	    };

	    return directive;
	  }

	  exports.default = EbpUIContentDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(15), __webpack_require__(16), __webpack_require__(17), __webpack_require__(18), __webpack_require__(19), __webpack_require__(20), __webpack_require__(21), __webpack_require__(22)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config, _ebpListview, _toolbar, _settings, _gridview, _customeview, _item, _overlay) {
	              'use strict';

	              Object.defineProperty(exports, "__esModule", {
	                            value: true
	              });

	              var config = _interopRequireWildcard(_config);

	              var _ebpListview2 = _interopRequireDefault(_ebpListview);

	              var _toolbar2 = _interopRequireDefault(_toolbar);

	              var _settings2 = _interopRequireDefault(_settings);

	              var _gridview2 = _interopRequireDefault(_gridview);

	              var _customeview2 = _interopRequireDefault(_customeview);

	              var _item2 = _interopRequireDefault(_item);

	              var _overlay2 = _interopRequireDefault(_overlay);

	              function _interopRequireDefault(obj) {
	                            return obj && obj.__esModule ? obj : {
	                                          default: obj
	                            };
	              }

	              function _interopRequireWildcard(obj) {
	                            if (obj && obj.__esModule) {
	                                          return obj;
	                            } else {
	                                          var newObj = {};

	                                          if (obj != null) {
	                                                        for (var key in obj) {
	                                                                      if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	                                                        }
	                                          }

	                                          newObj.default = obj;
	                                          return newObj;
	                            }
	              }

	              /**
	               * Created by yao on 15/12/16.
	               */


	              var listViewModule = angular.module('ebpUI.listview', ['ngResource']);

	              listViewModule.directive(config.directiveNames.ebpListviewToolbar, _toolbar2.default).directive(config.directiveNames.ebpListview, _ebpListview2.default).directive(config.directiveNames.ebpListviewSettings, _settings2.default).directive(config.directiveNames.ebpListviewGrid, _gridview2.default).directive(config.directiveNames.ebpListviewItem, _item2.default).directive(config.directiveNames.ebpListviewOverlay, _overlay2.default).directive(config.directiveNames.ebpListviewCustom, _customeview2.default);

	              exports.default = listViewModule;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    /**
	     * Created by yao on 15/12/16.
	     */
	    var directiveNames = exports.directiveNames = {
	        ebpListview: 'ebpListview',
	        ebpListviewToolbar: 'ebpListviewToolbar',
	        ebpListviewSettings: 'ebpListviewSettings',
	        ebpListviewGrid: 'ebpListviewGrid',
	        ebpListviewCustom: 'ebpListviewCustom',
	        ebpListviewItem: 'ebpListviewItem',
	        ebpListviewOverlay: 'ebpListviewOverlay'
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    /**
	     * Created by yao on 15/12/16.
	     */
	    function bindData(scope, ebpList, ngModel) {
	        if (!ngModel) {
	            return;
	        }
	        scope.$watch(function () {
	            return ngModel.$modelValue;
	        }, function (modelValue) {
	            ebpList.data = modelValue;
	        });
	    }

	    function EbpListViewDirectiveFactory() {
	        'ngInject';

	        function compileFunc(tElem) {
	            tElem.append(angular.element('<div>').attr({
	                'ng-include': '$ebpList.viewTpl'
	            }).addClass('ebp-listview-container'));
	            return {
	                post: function post(scope, elem, attrs, vm) {
	                    elem.addClass('ebp-listview');
	                    var ngModel = vm[0];
	                    var $ebpList = scope.$ebpList;
	                    bindData(scope, $ebpList, ngModel);
	                }
	            };
	        }

	        var directive = {
	            restrict: 'AE',
	            compile: compileFunc,
	            scope: true,
	            require: ['?ngModel'],
	            controller: ListViewController,
	            controllerAs: '$ebpList'
	        };

	        return directive;
	    }

	    function transformRequest(data, headers) {
	        var fd = new FormData();
	        angular.forEach(data, function (value, key) {
	            if (value instanceof FileList) {
	                if (value.length == 1) {
	                    fd.append(key, value[0]);
	                } else {
	                    angular.forEach(value, function (file, index) {
	                        fd.append(key + '_' + index, file);
	                    });
	                }
	            } else {
	                fd.append(key, value);
	            }
	        });
	        headers()['Content-Type'] = undefined;
	        return fd;
	    }

	    var ListViewController = function () {
	        function ListViewController($scope, $element, $attrs, $window, $resource) {
	            'ngInject';

	            var _this = this;

	            _classCallCheck(this, ListViewController);

	            var datasource = $scope.$eval($attrs.datasource);
	            this.datasource = datasource;
	            this.$el = $element;
	            this.view = $attrs.view || 'table';
	            this.data = [];
	            this.items = [];
	            this.settings = {
	                customViews: [],
	                table: {}
	            };
	            this.$tableView = {};
	            if (angular.isObject(datasource)) {
	                var url = datasource.url;
	                var params = datasource.params;

	                this.Resource = $resource(url, params, {
	                    query: {
	                        cache: true,
	                        method: 'GET',
	                        isArray: true
	                    },
	                    save: {
	                        method: 'POST',
	                        transformRequest: transformRequest
	                    },
	                    update: {
	                        method: 'POST',
	                        transformRequest: transformRequest
	                    }
	                });
	            }
	            this.refresh = function () {
	                var pager = $scope.$ebpPager;
	                if (pager) {
	                    pager.refresh();
	                }
	            };
	            this.remove = function () {
	                for (var _len = arguments.length, items = Array(_len), _key = 0; _key < _len; _key++) {
	                    items[_key] = arguments[_key];
	                }

	                if (!$window.confirm('确定删除吗?')) {
	                    return;
	                }
	                angular.forEach(items, function (item) {
	                    if (angular.isFunction(item.$remove)) {
	                        item.$remove(function () {}, function () {
	                            //only for test, should remove this line in the future.
	                            var index = _this.data.indexOf(item);
	                            _this.data.splice(index, 1);
	                        });
	                    } else {
	                        var index = _this.data.indexOf(item);
	                        _this.data.splice(index, 1);
	                    }
	                });
	            };

	            this.sync = function () {
	                if (_this.view === 'table') {
	                    _this.$tableView.sync();
	                }
	                angular.forEach(_this.items, function (item) {
	                    if (item.isDirty) {
	                        var data = angular.extend({}, item.$model);
	                        //data.imageData = item.uploader.imageData;
	                        if (item.uploader.imageFile) {
	                            data.imageData = item.uploader.imageFile.file;
	                        }
	                        if (item.isNew) {
	                            (function () {
	                                var newModel = new _this.Resource(data);
	                                newModel.$save(function () {
	                                    if (item.uploader.imageFile) {
	                                        newModel.img = item.uploader.imageFile.url; //change URL to uploaded URL
	                                    }
	                                    item.synchronized();
	                                    var i = _.findIndex(_this.data, function (e) {
	                                        return e === item.$model;
	                                    });
	                                    _this.data.splice(i, 1, newModel);
	                                }, function () {
	                                    if (item.uploader.imageFile) {
	                                        newModel.img = item.uploader.imageFile.url; //change URL to uploaded URL
	                                    }
	                                    item.synchronized();
	                                    var i = _.findIndex(_this.data, function (e) {
	                                        return e === item.$model;
	                                    });
	                                    _this.data.splice(i, 1, newModel);
	                                });
	                            })();
	                        } else {
	                            _this.Resource.update(data, function () {
	                                if (item.uploader.imageFile) {
	                                    item.$model.img = item.uploader.imageFile.url; //change URL to uploaded URL
	                                }
	                                item.synchronized();
	                            }, function () {
	                                if (item.uploader.imageFile) {
	                                    item.$model.img = item.uploader.imageFile.url; //change URL to uploaded URL
	                                }
	                                item.synchronized();
	                            });
	                        }
	                    }
	                });
	            };
	        }

	        _createClass(ListViewController, [{
	            key: 'changeView',
	            value: function changeView(view) {
	                this.view = view;
	            }
	        }, {
	            key: 'add',
	            value: function add() {
	                if (this.view === 'table') {
	                    this.$tableView.add();
	                } else {
	                    this.data.unshift({});
	                }
	            }
	        }, {
	            key: 'viewTpl',
	            get: function get() {
	                var tpl = 'src/listview/templates/' + this.view + '.tpl.html';
	                var customViews = this.settings.customViews;
	                if (customViews[this.view]) {
	                    tpl = customViews[this.view].templateUrl;
	                }
	                return tpl;
	            }
	        }]);

	        return ListViewController;
	    }();

	    exports.default = EbpListViewDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(15)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });


	    function linkFunc(scope, elem) {
	        elem.addClass('ebp-listview-toolbar');
	    } /**
	       * Created by yao on 15/12/16.
	       */


	    function EbpListViewToolbarDirectiveFactory() {
	        var directive = {
	            restrict: 'AE',
	            require: '^' + _config.directiveNames.ebpListview,
	            scope: false,
	            link: linkFunc
	        };

	        return directive;
	    }

	    exports.default = EbpListViewToolbarDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(15)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    function linkFunc(scope, elem, attrs, listView) {
	        var settingName = attrs[_config.directiveNames.ebpListviewSettings];
	        listView.settings = listView.settings || {};
	        listView.settings[settingName] = scope.settings;
	        var attrSettings = angular.extend({}, attrs);
	        delete attrSettings.$$element;
	        delete attrSettings.$attr;
	        delete attrSettings[_config.directiveNames.ebpListviewSettings];
	        angular.forEach(attrSettings, function (v, k) {
	            scope.settings[k] = scope.$eval(v);
	        });
	        elem.remove();
	        scope.$destroy();
	    }

	    function EbpListViewSettingsDirectiveFactory() {
	        var directive = {
	            restrict: 'AE',
	            link: linkFunc,
	            scope: true,
	            require: '^' + _config.directiveNames.ebpListview,
	            controller: EbpListViewSettingsController,
	            controllerAs: '$ebpListSettings'
	        };

	        return directive;
	    }

	    var EbpListViewSettingsController = function EbpListViewSettingsController($scope) {
	        'ngInject';

	        _classCallCheck(this, EbpListViewSettingsController);

	        $scope.settings = this;
	    };

	    exports.default = EbpListViewSettingsDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(15)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		var _createClass = function () {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					if ("value" in descriptor) descriptor.writable = true;
					Object.defineProperty(target, descriptor.key, descriptor);
				}
			}

			return function (Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);
				if (staticProps) defineProperties(Constructor, staticProps);
				return Constructor;
			};
		}();

		var listViewGridClassName = 'ebp-listview-grid';
		var listViewItemClassName = '.ebp-listview-item';

		function linkFunc(scope, elem) {
			elem.addClass(listViewGridClassName);
		}

		function EbpGridViewDirectiveFactory() {
			var directive = {
				restrict: 'AE',
				link: linkFunc,
				require: '^' + _config.directiveNames.ebpListview,
				controller: EbpGridViewController,
				controllerAs: '$grid'
			};

			return directive;
		}

		var EbpGridViewController = function () {
			function EbpGridViewController($element, $scope, $window, $attrs) {
				'ngInject';

				_classCallCheck(this, EbpGridViewController);

				var settings = $scope.$eval($attrs.settings);
				angular.extend(this, settings);
				this.$el = $element;
				angular.element($window).on('resize', function () {
					$scope.$digest();
				});
			}

			_createClass(EbpGridViewController, [{
				key: 'itemHeight',
				get: function get() {
					return this.$el.find(listViewItemClassName).width();
				}
			}]);

			return EbpGridViewController;
		}();

		exports.default = EbpGridViewDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(15)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});


		function EbpListViewCustom($templateCache) {
			'ngInject';

			function linkFunc(scope, elem, attrs, listView) {
				listView.settings = listView.settings || {};
				var customViews = listView.settings.customViews = listView.settings.customViews || [];
				var name = attrs[_config.directiveNames.ebpListviewCustom];
				var template = elem.html().trim();
				var templateUrl = scope.$eval(attrs.templateUrl);
				if (name) {
					if (template) {
						templateUrl = 'ebp.listView.' + name + '.tpl.html';
						$templateCache.put(templateUrl, template);
					}

					customViews[name] = { templateUrl: templateUrl };
				}
				elem.remove();
			}

			var directive = {
				restrict: 'AE',
				require: '^' + _config.directiveNames.ebpListview,
				link: linkFunc
			};

			return directive;
		} /**
	    * Created by yao on 15/12/31.
	    */


		exports.default = EbpListViewCustom;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    /**
	     * Created by yao on 16/1/19.
	     */
	    function ListViewItemDirectiveFactory($compile) {
	        'ngInject';

	        function linkFunc(scope, elem) {
	            var $item = scope.$ebpListItem;
	            var $list = scope.$ebpList;
	            var $grid = scope.$grid;
	            var titleElem = elem.find('.ebp-title');
	            var overlayElem = elem.find('.ebp-overlay');
	            elem.addClass('ebp-listview-item');
	            $list.items.push($item);
	            if ($item.isNew) {
	                $list.editing = true;
	                titleElem[0].contentEditable = true;
	                titleElem.focus();
	            }
	            elem.on('click', function () {
	                if ($list.editing) {
	                    return;
	                }
	                scope.$apply(function () {
	                    scope.$grid.events.click();
	                });
	            });
	            elem.mousedown(function () {
	                clearTimeout(this.downTimer);
	                this.downTimer = setTimeout(function () {
	                    scope.$apply(function () {
	                        $list.editing = true;
	                    });
	                }, 1000);
	            }).mouseup(function () {
	                clearTimeout(this.downTimer);
	                if (!$list.editing) {
	                    return;
	                }
	                $(document).on('click', function editComplete(event) {
	                    if (!$(event.target).parents().addBack().is('.ebp-listview-item')) {
	                        scope.$apply(function () {
	                            $list.editing = false;
	                            titleElem[0].contentEditable = false;
	                            $(document).off('click', editComplete);
	                        });
	                    }
	                });
	            }).mouseout(function () {
	                clearTimeout(this.downTimer);
	            });
	            titleElem.on('click', function () {
	                if (!$list.editing) {
	                    return;
	                }
	                this.contentEditable = true;
	                titleElem.focus();
	            });
	            if ($grid.overlayTpl) {
	                $compile(overlayElem.append($grid.overlayTpl))(scope);
	            } else {
	                overlayElem.remove();
	            }
	        }

	        var directive = {
	            restrict: 'AE',
	            link: linkFunc,
	            controller: ListViewItemController,
	            controllerAs: '$ebpListItem'
	        };

	        return directive;
	    }

	    var ListViewItemController = function () {
	        function ListViewItemController($scope) {
	            'ngInject';

	            _classCallCheck(this, ListViewItemController);

	            this.$ebpList = $scope.$ebpList;
	            this.editing = false;
	            this.uploader = {};
	            Object.defineProperties(this, {
	                $model: {
	                    get: function get() {
	                        return $scope.item;
	                    }
	                }
	            });
	            this.$grid = $scope.$grid;
	        }

	        _createClass(ListViewItemController, [{
	            key: 'remove',
	            value: function remove($event) {
	                $event.stopPropagation();
	                this.$ebpList.remove(this.$model);
	            }
	        }, {
	            key: '_onTitleFocus',
	            value: function _onTitleFocus($event) {
	                if (this.isDirty) {
	                    return;
	                }
	                this.originTitle = $event.target.innerText;
	            }
	        }, {
	            key: '_onTitleBlur',
	            value: function _onTitleBlur($event) {
	                var newVal = $event.target.innerText;
	                this.$model[this.$grid.title] = newVal;
	                this.isTitleDirty = this.originTitle !== this.$model[this.$grid.title];
	            }
	        }, {
	            key: 'synchronized',
	            value: function synchronized() {
	                this.isTitleDirty = false;
	                this.uploader = {};
	            }
	        }, {
	            key: 'isNew',
	            get: function get() {
	                return !(Object.getPrototypeOf(this.$model) instanceof Object);
	            }
	        }, {
	            key: 'isDirty',
	            get: function get() {
	                return this.uploader.imageFile || this.isTitleDirty;
	            }
	        }]);

	        return ListViewItemController;
	    }();

	    exports.default = ListViewItemDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(15)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });


	    function EbpListViewOverlayDirectiveFactory() {

	        function linkFunc(scope, elem, attrs, settings) {
	            settings.overlayTpl = elem.html();
	        }

	        var directive = {
	            restrict: 'AE',
	            require: '^' + _config.directiveNames.ebpListviewSettings,
	            link: linkFunc
	        };

	        return directive;
	    } /**
	       * Created by yao on 16/1/26.
	       */


	    exports.default = EbpListViewOverlayDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(24), __webpack_require__(25), __webpack_require__(26), __webpack_require__(27), __webpack_require__(28), __webpack_require__(29), __webpack_require__(30), __webpack_require__(31)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config, _ebpTable, _colDefs, _column, _checkColumn, _cell, _entry, _columnheader) {
	           'use strict';

	           Object.defineProperty(exports, "__esModule", {
	                      value: true
	           });

	           var config = _interopRequireWildcard(_config);

	           var _ebpTable2 = _interopRequireDefault(_ebpTable);

	           var _colDefs2 = _interopRequireDefault(_colDefs);

	           var _column2 = _interopRequireDefault(_column);

	           var _checkColumn2 = _interopRequireDefault(_checkColumn);

	           var _cell2 = _interopRequireDefault(_cell);

	           var _entry2 = _interopRequireDefault(_entry);

	           var _columnheader2 = _interopRequireDefault(_columnheader);

	           function _interopRequireDefault(obj) {
	                      return obj && obj.__esModule ? obj : {
	                                 default: obj
	                      };
	           }

	           function _interopRequireWildcard(obj) {
	                      if (obj && obj.__esModule) {
	                                 return obj;
	                      } else {
	                                 var newObj = {};

	                                 if (obj != null) {
	                                            for (var key in obj) {
	                                                       if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	                                            }
	                                 }

	                                 newObj.default = obj;
	                                 return newObj;
	                      }
	           }

	           /**
	            * Created by yao on 15/12/17.
	            */


	           var tableModule = angular.module('ebpUI.table', ['ngSanitize', 'ngResource']);
	           tableModule.directive(config.directiveNames.ebpTable, _ebpTable2.default).directive(config.directiveNames.ebpTableColDefs, _colDefs2.default).directive(config.directiveNames.ebpTableCol, _column2.default).directive(config.directiveNames.ebpTableCheckCol, _checkColumn2.default).directive(config.directiveNames.ebpTableEntry, _entry2.default).directive(config.directiveNames.ebpTableColumnheader, _columnheader2.default).directive('tablecell', _cell2.default);

	           exports.default = tableModule;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    /**
	     * Created by yao on 15/12/16.
	     */
	    var directiveNames = exports.directiveNames = {
	        ebpTable: 'ebpTable',
	        ebpTableColDefs: 'ebpTableColdefs',
	        ebpTableCol: 'ebpTableCol',
	        ebpTableCheckCol: 'ebpTableCheckCol',
	        ebpTableEntry: 'ebpTableEntry',
	        ebpTableColumnheader: 'ebpTableColumnheader'
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(24)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    function bindData(scope, ebpTable, ngModel) {
	        if (!ngModel) {
	            return;
	        }
	        scope.$watch(function () {
	            return ngModel.$modelValue;
	        }, function (modelValue) {
	            if (angular.isArray(modelValue)) {
	                ebpTable.data = modelValue;
	            }
	        });
	    }

	    function linkFunc(scope, elem, attrs, vm, trans) {
	        elem.addClass('ebp-table');
	        var ngModel = vm[0];
	        var $ebpTable = scope.$ebpTable;
	        bindData(scope, $ebpTable, ngModel);
	        trans(scope, function () {});
	        scope.$eval(attrs[_config.directiveNames.ebpTable] + '=$ebpTable');
	    }

	    function EbpTableDirectiveFactory() {
	        var directive = {
	            restrict: 'AE',
	            templateUrl: 'src/table/templates/ebpTable.tpl.html',
	            scope: true,
	            require: ['?ngModel'],
	            transclude: true,
	            link: linkFunc,
	            controller: EbpTableController,
	            controllerAs: '$ebpTable'
	        };

	        return directive;
	    }

	    var EbpTableController = function () {
	        function EbpTableController($scope, $attrs, $resource, $injector, $window) {
	            'ngInject';

	            var _this = this;

	            _classCallCheck(this, EbpTableController);

	            var settings = $scope.$eval($attrs.settings);
	            var datasource = $scope.$eval($attrs.datasource);
	            var pager = $scope.$eval($attrs.pager);
	            angular.extend(this, settings);
	            this.data = [];
	            this.$entries = [];
	            this.addHelpers = [];
	            if (angular.isObject(datasource)) {
	                var url = datasource.url;
	                var params = datasource.params;

	                this.Resource = $resource(url, params, {
	                    query: {
	                        cache: true,
	                        method: 'GET',
	                        isArray: true
	                    },
	                    update: {
	                        method: 'PUT'
	                    }
	                });
	            }
	            if (pager) {
	                $scope.$ebpPager = pager;
	            }
	            this.sortBy = function (col) {
	                if ($scope.$ebpPager) {
	                    $scope.$ebpPager.sort(col.name, col.sorting);
	                }
	            };

	            this.sync = function () {
	                angular.forEach(_this.$entries, function (entry) {
	                    if (entry.isDirty) {
	                        if (entry.isNew) {
	                            (function () {
	                                var newModel = new _this.Resource(entry.$model);
	                                newModel.$save(function () {
	                                    entry.synchronized();
	                                    var i = _.findIndex(_this.data, function (e) {
	                                        return e === entry.$model;
	                                    });
	                                    _this.data.splice(i, 1, newModel);
	                                }, function () {
	                                    //only for test, should remove this line in the future.
	                                    entry.synchronized();
	                                    var i = _.findIndex(_this.data, function (e) {
	                                        return e === entry.$model;
	                                    });
	                                    _this.data.splice(i, 1, newModel);
	                                });
	                            })();
	                        } else {
	                            entry.$model.$update(function () {
	                                entry.synchronized();
	                            }, function () {
	                                //only for test, should remove this line in the future.
	                                entry.synchronized();
	                            });
	                        }
	                    }
	                });
	            };

	            this.remove = function () {
	                for (var _len = arguments.length, items = Array(_len), _key = 0; _key < _len; _key++) {
	                    items[_key] = arguments[_key];
	                }

	                if (items.length === 0) {
	                    items = _this.checkedItems;
	                }
	                if (!$window.confirm('确定删除吗?')) {
	                    return;
	                }
	                angular.forEach(items, function (item) {
	                    if (angular.isFunction(item.$remove)) {
	                        item.$remove(function () {}, function () {
	                            //only for test, should remove this line in the future.
	                            var index = _this.data.indexOf(item);
	                            _this.$entries.splice(index, 1);
	                            _this.data.splice(index, 1);
	                        });
	                    } else {
	                        var index = _this.data.indexOf(item);
	                        _this.$entries.splice(index, 1);
	                        _this.data.splice(index, 1);
	                    }
	                });
	            };
	        }

	        _createClass(EbpTableController, [{
	            key: 'add',
	            value: function add() {
	                this.data.unshift({});
	            }
	        }, {
	            key: 'checkAll',
	            get: function get() {
	                var checkAll = !!this.$entries.length;
	                angular.forEach(this.$entries, function (e) {
	                    if (!e.$checked) {
	                        checkAll = false;
	                    }
	                });
	                angular.forEach(this.addHelpers, function (e) {
	                    if (!e.$checked) {
	                        checkAll = false;
	                    }
	                });
	                return checkAll;
	            },
	            set: function set(state) {
	                angular.forEach(this.$entries, function (e) {
	                    e.$checked = state;
	                });
	                angular.forEach(this.addHelpers, function (e) {
	                    e.$checked = state;
	                });
	            }
	        }, {
	            key: 'checkedItems',
	            get: function get() {
	                var checkedItems = [];
	                angular.forEach(this.$entries, function (e) {
	                    if (e.$checked) {
	                        checkedItems.push(e.$model);
	                    }
	                });
	                return checkedItems;
	            }
	        }]);

	        return EbpTableController;
	    }();

	    exports.default = EbpTableDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		var _createClass = function () {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					if ("value" in descriptor) descriptor.writable = true;
					Object.defineProperty(target, descriptor.key, descriptor);
				}
			}

			return function (Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);
				if (staticProps) defineProperties(Constructor, staticProps);
				return Constructor;
			};
		}();

		/**
	  * Created by yao on 15/12/21.
	  */
		function linkFunc(scope) {
			scope.settings = scope.settings || {};
			var ebpTable = scope.$ebpTable || scope.settings;
			ebpTable.colDefs = scope.$colDefs;
		}

		function EbpTableColDefsDirectiveFactory() {
			var directive = {
				restrict: 'AE',
				scope: false,
				link: linkFunc,
				controller: EbpTableColDefsController,
				controllerAs: '$colDefs'
			};

			return directive;
		}

		var EbpTableColDefsController = function () {
			function EbpTableColDefsController() {
				_classCallCheck(this, EbpTableColDefsController);

				this.cols = [];
			}

			_createClass(EbpTableColDefsController, [{
				key: 'fieldCols',
				get: function get() {
					return this.cols.filter(function (col) {
						return col.type === 'field';
					});
				}
			}]);

			return EbpTableColDefsController;
		}();

		exports.default = EbpTableColDefsDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(24)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		var _createClass = function () {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					if ("value" in descriptor) descriptor.writable = true;
					Object.defineProperty(target, descriptor.key, descriptor);
				}
			}

			return function (Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);
				if (staticProps) defineProperties(Constructor, staticProps);
				return Constructor;
			};
		}();

		function linkFunc(scope, elem, attrs, colDefs) {
			var column = scope.$col;
			var fieldName = attrs[_config.directiveNames.ebpTableCol];
			var sortable = attrs.sortable === '' ? true : attrs.sortable;
			var title = attrs.title || '';
			column.name = fieldName;
			column.title = title;
			column.type = fieldName ? 'field' : 'custom';
			column.dataType = attrs.type || 'string';
			column.sortable = sortable;
			if (column.type === 'custom') {
				column.tpl = elem.html();
			}
			colDefs.cols.push(column);
		}

		function EbpTableColDirectiveFactory() {
			var directive = {
				restrict: 'AE',
				scope: true,
				require: '^' + _config.directiveNames.ebpTableColDefs,
				link: linkFunc,
				controller: EbpTableColumnController,
				controllerAs: '$col'
			};

			return directive;
		}

		var EbpTableColumnController = function () {
			function EbpTableColumnController() {
				_classCallCheck(this, EbpTableColumnController);
			}

			_createClass(EbpTableColumnController, [{
				key: 'toJSON',
				value: function toJSON() {
					var jsonObj = angular.copy(this);
					delete jsonObj.tpl;
					return jsonObj;
				}
			}]);

			return EbpTableColumnController;
		}();

		exports.default = EbpTableColDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(24)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		function linkFunc(scope, elem, attrs, colDefs) {
			var checkCol = scope.$checkCol;
			colDefs.cols.push(checkCol);
			checkCol.type = 'checkbox';
		}

		function EbpTableCheckColDirectiveFactory() {
			var directive = {
				restrict: 'AE',
				scope: true,
				require: '^' + _config.directiveNames.ebpTableColDefs,
				link: linkFunc,
				controller: EbpTableCheckColController,
				controllerAs: '$checkCol'
			};

			return directive;
		}

		var EbpTableCheckColController = function EbpTableCheckColController() {
			_classCallCheck(this, EbpTableCheckColController);
		};

		exports.default = EbpTableCheckColDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(24)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		function EbpTableCellDirectiveFactory($compile, $interpolate) {
			'ngInject';

			function linkFunc(scope, elem, attrs, entry) {
				var col = scope.col;
				var cell = scope.$ebpTableCell;
				var table = scope.$ebpTable;
				entry.cells.push(cell);
				if (col.type === 'custom') {
					var customElem = angular.element('<div>').html(col.tpl);
					elem.html(customElem);
					$compile(customElem)(scope);
				}
				if (entry.isNew) {
					var firstFieldName = table.colDefs.fieldCols[0].name;
					if (col.name === firstFieldName) {
						cell.editing = true;
					}
				}
			}

			var directive = {
				restrict: 'C',
				link: linkFunc,
				require: '^' + _config.directiveNames.ebpTableEntry,
				controller: TableCellController,
				controllerAs: '$ebpTableCell'
			};

			return directive;
		}

		var TableCellController = function TableCellController($scope) {
			'ngInject';

			var _this = this;

			_classCallCheck(this, TableCellController);

			var cellModel = $scope.item;
			var col = $scope.col;
			var oldVal = undefined;
			this.editing = false;

			this.edit = function () {
				_this.editing = true;
			};

			this._onFocus = function () {
				if (_this.isDirty) {
					return;
				}
				oldVal = cellModel[col.name];
			};

			this._onBlur = function () {
				_this.isDirty = oldVal !== cellModel[col.name];
			};
		};

		exports.default = EbpTableCellDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(24)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    function EbpTableEntryDirectiveFactory() {

	        function linkFunc(scope, elem, attrs, table) {
	            var entry = scope.$ebpEntry;
	            table.$entries.push(entry);
	        }

	        var directive = {
	            restrict: 'AE',
	            require: '^' + _config.directiveNames.ebpTable,
	            link: linkFunc,
	            controller: EbpTableEntryController,
	            controllerAs: '$ebpEntry'
	        };

	        return directive;
	    }

	    var EbpTableEntryController = function () {
	        function EbpTableEntryController($scope, $controller, $resource) {
	            'ngInject';

	            var _this = this;

	            _classCallCheck(this, EbpTableEntryController);

	            var $table = $scope.$ebpTable;
	            this.$model = $scope.item;
	            this.$checked = false;
	            this.cells = [];
	            this.remove = function () {
	                $table.remove(_this.$model);
	            };

	            Object.defineProperties(this, {
	                isNew: {
	                    get: function get() {
	                        return !(Object.getPrototypeOf(_this.$model) instanceof Object);
	                    }
	                }
	            });
	        }

	        _createClass(EbpTableEntryController, [{
	            key: 'edit',
	            value: function edit() {
	                angular.forEach(this.cells, function (cell) {
	                    cell.editing = true;
	                });
	            }
	        }, {
	            key: 'synchronized',
	            value: function synchronized() {
	                angular.forEach(this.cells, function (cell) {
	                    delete cell.isDirty;
	                });
	            }
	        }, {
	            key: 'isDirty',
	            get: function get() {
	                return _.findIndex(this.cells, function (cell) {
	                    return cell.isDirty;
	                }) > -1;
	            }
	        }]);

	        return EbpTableEntryController;
	    }();

	    exports.default = EbpTableEntryDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		/**
	  * Created by yao on 16/1/12.
	  */
		function linkFunc(scope, elem) {
			var $col = scope.col;
			var $ebpTable = scope.$ebpTable;
			elem.on('click', function () {
				if ($col.sortable) {
					var sortingOrder = ['asc', 'desc'];
					$col.sorting = sortingOrder[sortingOrder.indexOf($col.sorting) + 1];
					$ebpTable.sortBy($col);
				}
				scope.$apply();
			});
		}

		function ColumnHeaderDirectiveFactory() {

			var directive = {
				restrict: 'AE',
				link: linkFunc
			};

			return directive;
		}

		exports.default = ColumnHeaderDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(33), __webpack_require__(34)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config, _taskboard) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var config = _interopRequireWildcard(_config);

	  var _taskboard2 = _interopRequireDefault(_taskboard);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	      return obj;
	    } else {
	      var newObj = {};

	      if (obj != null) {
	        for (var key in obj) {
	          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	        }
	      }

	      newObj.default = obj;
	      return newObj;
	    }
	  }

	  /**
	   * Created by yao on 16/1/2.
	   */


	  var taskBoardModule = angular.module('ebpUI.taskboard', ['ui.sortable']);
	  taskBoardModule.directive(config.directiveNames.ebpTaskboard, _taskboard2.default);
	  exports.default = taskBoardModule;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  /**
	   * Created by yao on 16/1/2.
	   */
	  var directiveNames = exports.directiveNames = {
	    ebpTaskboard: 'ebpTaskboard'
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		var _createClass = function () {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					if ("value" in descriptor) descriptor.writable = true;
					Object.defineProperty(target, descriptor.key, descriptor);
				}
			}

			return function (Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);
				if (staticProps) defineProperties(Constructor, staticProps);
				return Constructor;
			};
		}();

		/**
	  * Created by yao on 16/1/2.
	  */

		function linkFunc(scope, elem) {
			elem.addClass('ebp-taskboard-container');
		}

		function EbpTaskBoardDirectiveFactory() {
			var directive = {
				restrict: 'AE',
				link: linkFunc,
				templateUrl: 'src/taskboard/templates/taskboard.tpl.html',
				controller: EbpTaskBoardController,
				controllerAs: '$taskBoard'
			};

			return directive;
		}

		var EbpTaskBoardController = function () {
			function EbpTaskBoardController() {
				_classCallCheck(this, EbpTaskBoardController);
			}

			_createClass(EbpTaskBoardController, [{
				key: 'entrySortableOptions',
				get: function get() {
					return {
						cursor: 'move',
						handle: '.ebp-taskgroup-header',
						placeholder: 'ebp-taskgroup-placeholder',
						helper: 'clone',
						forcePlaceholderSize: true,
						opacity: 0.8,
						delay: 75,
						distance: 4,
						tolerance: 'pointer'
					};
				}
			}, {
				key: 'taskSortableOptions',
				get: function get() {
					return {
						connectWith: '.ebp-task-list',
						cursor: 'move',
						placeholder: 'ebp-task-placeholder',
						forcePlaceholderSize: true
					};
				}
			}]);

			return EbpTaskBoardController;
		}();

		exports.default = EbpTaskBoardDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(36), __webpack_require__(37)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config, _setting) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var config = _interopRequireWildcard(_config);

	  var _setting2 = _interopRequireDefault(_setting);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	      return obj;
	    } else {
	      var newObj = {};

	      if (obj != null) {
	        for (var key in obj) {
	          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	        }
	      }

	      newObj.default = obj;
	      return newObj;
	    }
	  }

	  /**
	   * Created by yao on 16/1/8.
	   */


	  var paginationModule = angular.module('ebpUI.pagination', []);

	  paginationModule.directive(config.directiveNames.ebpPaginationSetting, _setting2.default);

	  exports.default = paginationModule;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  /**
	   * Created by yao on 16/1/8.
	   */
	  var directiveNames = exports.directiveNames = {
	    ebpPaginationSetting: 'ebpPaginationSetting'
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    function _toConsumableArray(arr) {
	        if (Array.isArray(arr)) {
	            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

	            return arr2;
	        } else {
	            return Array.from(arr);
	        }
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    /**
	     * Created by yao on 16/1/8.
	     */
	    function linkFunc(scope, elem) {
	        scope.$destroy();
	        elem.remove();
	    }

	    function EbpPaginationSettingDirectiveFactory() {
	        var directive = {
	            restrict: 'AE',
	            link: linkFunc,
	            scope: {
	                model: '=ngModel',
	                datasource: '='
	            },
	            controller: EbpPaginationController,
	            controllerAs: '$ebpPagination',
	            bindToController: true
	        };

	        return directive;
	    }

	    var EbpPaginationController = function EbpPaginationController($scope, $attrs, $injector, $resource) {
	        'ngInject';

	        _classCallCheck(this, EbpPaginationController);

	        var datasource = $scope.$parent.$eval($attrs.datasource);
	        var count = $scope.$parent.$eval($attrs.count);
	        if (angular.isObject(datasource)) {
	            var url = datasource.url;
	            var params = datasource.params;

	            this.Resource = $resource(url, params, {
	                query: {
	                    cache: true,
	                    method: 'GET',
	                    isArray: true
	                },
	                update: {
	                    method: 'PUT'
	                }
	            });
	        }
	        if (angular.isString(count)) {
	            this.CountResource = $resource(count);
	        }
	        $scope.$parent.$ebpPager = $injector.instantiate(EbpPager, this);
	    };

	    var EbpPager = function () {
	        function EbpPager(Resource, model, CountResource, $filter) {
	            'ngInject';

	            var _this = this;

	            _classCallCheck(this, EbpPager);

	            this.pageNo = 1;
	            this.maxSize = 10;
	            this.quantity = 0;
	            this.model = model;
	            this.from = 0;
	            this.to = 0;
	            this.sorting = {
	                orderBy: undefined,
	                order: undefined
	            };
	            this.sort = function (by, order) {
	                _this.sorting.orderBy = by;
	                _this.sorting.order = order;
	                _this.fetch();
	            };
	            Object.defineProperties(this, {
	                CountResource: {
	                    get: function get() {
	                        return CountResource;
	                    }
	                },
	                Resource: {
	                    get: function get() {
	                        return Resource;
	                    }
	                }
	            });
	            this.fetch = function () {
	                return _this.Resource.query({
	                    pageNo: _this.pageNo,
	                    maxSize: _this.maxSize,
	                    orderBy: _this.sorting.orderBy,
	                    order: _this.sorting.order
	                }, function (items) {
	                    var _model;

	                    _this.from = (_this.pageNo - 1) * _this.maxSize + 1;
	                    _this.to = _this.pageNo === _this.total ? _this.quantity : _this.pageNo * _this.maxSize;
	                    var ordered = items;
	                    if (_this.sorting.order) {
	                        ordered = $filter('orderBy')(items, _this.sorting.orderBy, _this.sorting.order === 'desc');
	                    }
	                    _this.model.length = 0;
	                    (_model = _this.model).push.apply(_model, _toConsumableArray(ordered));
	                });
	            };
	            this.refresh();
	        }

	        _createClass(EbpPager, [{
	            key: 'refresh',
	            value: function refresh() {
	                var _this2 = this;

	                this.fetch();
	                if (angular.isFunction(this.CountResource)) {
	                    this.CountResource.get(function (count) {
	                        _this2.quantity = count.total;
	                        _this2.total = Math.ceil(_this2.quantity / _this2.maxSize);
	                    });
	                }
	            }
	        }, {
	            key: 'next',
	            value: function next() {
	                if (this.pageNo === this.total) {
	                    return;
	                }
	                this.pageNo += 1;
	                this.fetch();
	            }
	        }, {
	            key: 'prev',
	            value: function prev() {
	                if (this.pageNo === 1) {
	                    return;
	                }
	                this.pageNo -= 1;
	                this.fetch();
	            }
	        }, {
	            key: 'first',
	            value: function first() {
	                this.pageNo = 1;
	                this.fetch();
	            }
	        }, {
	            key: 'last',
	            value: function last() {
	                this.pageNo = this.total;
	                this.fetch();
	            }
	        }]);

	        return EbpPager;
	    }();

	    exports.default = EbpPaginationSettingDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(39), __webpack_require__(40)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _focusMe, _fileModel) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var _focusMe2 = _interopRequireDefault(_focusMe);

	  var _fileModel2 = _interopRequireDefault(_fileModel);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  /**
	   * Created by yao on 16/1/15.
	   */


	  var utilsModel = angular.module('ebpUI.utils', []);
	  utilsModel.directive('focusMe', _focusMe2.default).directive('fileModel', _fileModel2.default);
	  exports.default = utilsModel;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		/**
	  * Created by yao on 16/1/15.
	  */
		function FocusMeDirectiveFactory($parse, $timeout) {
			'ngInject';

			function linkFunc(scope, elem, attrs) {
				var model = $parse(attrs.focusMe);
				scope.$watch(model, function (value) {
					if (value === true) {
						$timeout(function () {
							return elem.focus();
						});
					}
				});

				elem.on('blur', function () {
					scope.$apply(function () {
						model.assign(scope, false);
					});
				});
			}

			var directive = {
				priority: 5,
				restrict: 'A',
				link: linkFunc
			};

			return directive;
		}

		exports.default = FocusMeDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    /**
	     * Created by yao on 16/1/21.
	     */
	    function FileModelDirectiveFactory($parse) {
	        'ngInject';

	        function linkFunc(scope, elem, attrs) {
	            var model = $parse(attrs.fileModel);
	            elem.on('change', function () {
	                var file = this.files[0];
	                var fr = new FileReader();
	                fr.readAsDataURL(file);
	                fr.onload = function () {
	                    var result = {};
	                    Object.defineProperties(result, {
	                        file: {
	                            get: function get() {
	                                return file;
	                            }
	                        },
	                        url: {
	                            get: function get() {
	                                return fr.result;
	                            }
	                        }
	                    });
	                    scope.$apply(function () {
	                        model.assign(scope, result);
	                    });
	                };
	            });
	        }

	        var directive = {
	            restrict: 'A',
	            link: linkFunc
	        };

	        return directive;
	    }

	    exports.default = FileModelDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
/******/ ]);
angular.module("ebp-treetable").run(["$templateCache", function($templateCache) {$templateCache.put("src/framework/templates/ebp_sidenav.tpl.html","<aside ebp-sidebar=\"\" class=\"ebp-sidenav\"><div ng-transclude=\"\"></div><div class=\"ebp-sidenav-inner\"><div class=\"ebp-sidenavs\"><nav class=\"ebp-nav\"><ul><li ui-sref-active=\"active\" ng-repeat=\"nav in $ebpSideNav.navs\"><a ui-sref=\"{{nav.sref}}\" class=\"ebp-nav-link\"><i class=\"ebp-icon\" ng-class=\"nav.iconClass\"></i><div class=\"ebp-nav-title\">{{nav.title}}</div></a></li></ul></nav></div></div></aside>");
$templateCache.put("src/listview/templates/grid.tpl.html","<div ebp-listview-grid=\"\" settings=\"$ebpList.settings.grid\"><ul><li ng-repeat=\"item in $ebpList.data\"><div ebp-listview-item=\"\" class=\"with-title\" ng-class=\"{editing: $ebpList.editing, \'ebp-dirty\': $ebpListItem.isDirty}\"><div class=\"poster-image\" ng-style=\"{height: $grid.itemHeight}\"><img ng-src=\"{{$ebpListItem.uploader.imageFile.url || item.img}}\" ng-if=\"item.img || $ebpListItem.uploader.imageFile\"><div class=\"ebp-overlay\" ng-hide=\"$ebpList.editing\"></div><label class=\"poster-uploader\" ng-if=\"$ebpList.editing\"><div class=\"poster-uploader-inner\"><i class=\"upload-icon fa fa-image\"></i><div>点击更换图片</div><input type=\"file\" file-model=\"$ebpListItem.uploader.imageFile\"></div></label> <span class=\"ebp-listview-item-delete\" ng-if=\"$ebpList.editing\" ng-click=\"$ebpListItem.remove($event)\"></span></div><div class=\"ebp-title\" ng-focus=\"$ebpListItem._onTitleFocus($event)\" ng-blur=\"$ebpListItem._onTitleBlur($event)\">{{item[$grid.title]}}</div></div></li></ul></div>");
$templateCache.put("src/listview/templates/table.tpl.html","<div ebp-table=\"$ebpList.$tableView\" ng-model=\"$ebpList.data\" datasource=\"$ebpList.datasource\" settings=\"$ebpList.settings.table\" pager=\"$ebpPager\"></div>");
$templateCache.put("src/table/templates/ebpTable.tpl.html","<div class=\"ebp-table-header\"><div class=\"ebp-table-header-wrapper\"><table><colgroup><col ng-repeat=\"col in $ebpTable.colDefs.cols\" ng-class=\"{\'check-col\': col.type === \'checkbox\'}\"></colgroup><thead><tr><th ebp-table-columnheader=\"\" class=\"columnheader\" ng-repeat=\"col in $ebpTable.colDefs.cols\" ng-class=\"{\'check-col\': col.type === \'checkbox\', \'sorting\': col.sorting, \'sortable\': col.sortable}\"><span ng-if=\"col.type !== \'checkbox\'\">{{col.title}}</span> <label class=\"ebp-checkbox\" ng-if=\"col.type === \'checkbox\'\"><input type=\"checkbox\" ng-model=\"$ebpTable.checkAll\"> <span class=\"lbl\"></span></label> <span class=\"ebp-table-sort-icons\" ng-if=\"col.sortable\" ng-show=\"col.sorting\"><span class=\"ebp-table-ico-sort sort-asc\" ng-class=\"{\'active\': col.sorting === \'asc\'}\"></span> <span class=\"ebp-table-ico-sort sort-desc\" ng-class=\"{\'active\': col.sorting === \'desc\'}\"></span></span></th></tr></thead></table></div></div><div class=\"ebp-table-content\"><table class=\"table-striped\"><colgroup><col ng-repeat=\"col in $ebpTable.colDefs.cols\" ng-class=\"{\'check-col\': col.type === \'checkbox\'}\"></colgroup><tbody><tr ebp-table-entry=\"\" ng-repeat=\"item in $ebpTable.data\"><td class=\"tablecell\" ng-repeat=\"col in $ebpTable.colDefs.cols\" ng-class=\"{\'check-col\': col.type === \'checkbox\', \'ebp-dirty\': $ebpTableCell.isDirty}\" ng-dblclick=\"$ebpTableCell.edit()\"><span ng-if=\"col.type === \'field\'\">{{item[col.name]}}</span> <label class=\"ebp-checkbox\" ng-if=\"col.type === \'checkbox\'\"><input type=\"checkbox\" ng-model=\"$ebpEntry.$checked\"> <span class=\"lbl\"></span></label><div class=\"ebp-tablecell-input\" ng-switch=\"\" on=\"col.dataType\" ng-if=\"$ebpTableCell.editing\"><input class=\"ebp-tablecell-input-string\" type=\"text\" ng-switch-when=\"string\" ng-model=\"item[col.name]\" focus-me=\"$ebpTableCell.editing\" ng-focus=\"$ebpTableCell._onFocus()\" ng-blur=\"$ebpTableCell._onBlur()\"> <input class=\"ebp-tablecell-input-number\" type=\"number\" ng-switch-when=\"number\" ng-model=\"item[col.name]\" focus-me=\"$ebpTableCell.editing\" ng-focus=\"$ebpTableCell._onFocus()\" ng-blur=\"$ebpTableCell._onBlur()\"> <input class=\"ebp-tablecell-input-datepicker\" type=\"string\" ng-switch-when=\"date\" ng-model=\"item[col.name]\" focus-me=\"$ebpTableCell.editing\" ng-focus=\"$ebpTableCell._onFocus()\" ng-blur=\"$ebpTableCell._onBlur()\"></div></td></tr></tbody></table></div><div class=\"ebp-table-bottom\"><table><tbody><tr><td class=\"ebp-operations\"><i class=\"ebp-icon fa fa-plus-circle\" style=\"color: #A069C3\"></i> <i class=\"ebp-icon fa fa-pencil\" style=\"color: #478FCA\"></i> <i class=\"ebp-icon fa fa-search-plus\" style=\"color: #777\"></i> <i class=\"ebp-icon fa fa-trash-o\" style=\"color: #DD5A43\" ng-click=\"$ebpTable.remove()\"></i> <i>|</i> <i class=\"ebp-icon fa fa-search\" style=\"color: #FF892A\"></i> <i class=\"ebp-icon fa fa-refresh\" style=\"color: #69AA46\"></i></td><td class=\"ebp-table-pagination text-center\"><i class=\"ebp-icon fa fa-fw fa-angle-double-left\" ng-click=\"$ebpPager.first()\" ng-class=\"{\'disabled\': $ebpPager.pageNo === 1}\"></i> <i class=\"ebp-icon fa fa-fw fa-angle-left\" ng-click=\"$ebpPager.prev()\" ng-class=\"{\'disabled\': $ebpPager.pageNo === 1}\"></i> <span>|</span> <span>第<input type=\"text\" class=\"text-center\" size=\"2\" ng-model=\"$ebpPager.pageNo\">/{{$ebpPager.total}}页</span> <span>|</span> <i class=\"ebp-icon fa fa-fw fa-angle-right\" ng-click=\"$ebpPager.next()\" ng-class=\"{\'disabled\': $ebpPager.pageNo === $ebpPager.total}\"></i> <i class=\"ebp-icon fa fa-fw fa-angle-double-right\" ng-click=\"$ebpPager.last()\" ng-class=\"{\'disabled\': $ebpPager.pageNo === $ebpPager.total}\"></i></td><td class=\"text-right\">显示第{{$ebpPager.from}}-{{$ebpPager.to}}条记录, 共{{$ebpPager.quantity}}条记录</td></tr></tbody></table></div>");
$templateCache.put("src/taskboard/templates/taskboard.tpl.html","<div ui-sortable=\"$taskBoard.entrySortableOptions\" class=\"ebp-taskgroup-list\"><div class=\"ebp-taskgroup\"><div class=\"ebp-taskgroup-header\"><h5 class=\"ebp-taskgroup-title\">待审核</h5></div><div class=\"ebp-taskgroup-body\"><div class=\"ebp-task-list\" ui-sortable=\"$taskBoard.taskSortableOptions\"><div class=\"ebp-task\"><div class=\"ebp-task-main\"><label class=\"ebp-checkbox\"><input type=\"checkbox\"> <span class=\"lbl\"></span></label> <a href=\"\" class=\"ebp-task-title\">外包过程评审表审批-李静</a></div><div class=\"ebp-task-badges\"><span class=\"task-badge fa fa-clock-o badge-expire-due\" title=\"任务已过期\">2015-12-09</span> <span class=\"task-badge fa fa-list badge-todo-done\" title=\"检查项： 7/7\">7/7</span> <span class=\"task-badge fa fa-eye\">验收项目文档</span></div></div><div class=\"ebp-task\"><div class=\"ebp-task-main\"><label class=\"ebp-checkbox\"><input type=\"checkbox\"> <span class=\"lbl\"></span></label> <a href=\"\" class=\"ebp-task-title\">项目月报审批流程-部门主管</a></div><div class=\"ebp-task-badges\"><span class=\"task-badge fa fa-eye\">验收项目文档</span> <span class=\"task-badge task-label green-label\" title=\"重要\">重要</span> <span class=\"task-badge task-label orange-label\" title=\"紧急\">紧急</span></div></div><div class=\"ebp-task\"><div class=\"ebp-task-main\"><label class=\"ebp-checkbox\"><input type=\"checkbox\"> <span class=\"lbl\"></span></label> <a href=\"\" class=\"ebp-task-title\">拨款通知单审批-李静</a><div class=\"ebp-task-badges\"><span class=\"task-badge fa fa-list badge-todo-done\">7/7</span> <span class=\"task-badge fa fa-eye\">验收项目文档</span></div></div></div></div><div class=\"add-task-btn\">新建任务</div></div></div><div class=\"ebp-taskgroup\"><div class=\"ebp-taskgroup-header\"><h5 class=\"ebp-taskgroup-title\">正在做</h5></div><div class=\"ebp-taskgroup-body\"><div class=\"ebp-task-list\" ui-sortable=\"$taskBoard.taskSortableOptions\"><div class=\"ebp-task\"><div class=\"ebp-task-main\"><label class=\"ebp-checkbox\"><input type=\"checkbox\"> <span class=\"lbl\"></span></label> <a href=\"\" class=\"ebp-task-title\">装甲研发</a></div><div class=\"ebp-task-badges\"><span class=\"task-badge fa fa-list badge-todo-done\" title=\"检查项： 7/7\">7/7</span> <span class=\"task-badge fa fa-flask\">装甲研发</span> <span class=\"task-badge task-label red-label\" title=\"非常紧急\">非常紧急</span></div></div><div class=\"ebp-task\"><div class=\"ebp-task-main\"><label class=\"ebp-checkbox\"><input type=\"checkbox\"> <span class=\"lbl\"></span></label> <a href=\"\" class=\"ebp-task-title\">项目文档验收</a></div><div class=\"ebp-task-badges\"><span class=\"task-badge fa fa-clock-o badge-expire-due\" title=\"任务已过期\">2015-12-09</span> <span class=\"task-badge fa fa-list badge-todo-done\" title=\"检查项： 7/7\">7/7</span> <span class=\"task-badge fa fa-eye\">验收项目文档</span></div></div><div class=\"ebp-task\"><div class=\"ebp-task-main\"><label class=\"ebp-checkbox\"><input type=\"checkbox\"> <span class=\"lbl\"></span></label> <a href=\"\" class=\"ebp-task-title\">策划方案</a></div><div class=\"ebp-task-badges\"><span class=\"task-badge fa fa-clock-o badge-expire-due\" title=\"任务已过期\">2015-12-09</span> <span class=\"task-badge fa fa-list badge-todo-done\" title=\"检查项： 7/7\">7/7</span> <span class=\"task-badge fa fa-diamond\">策划方案</span> <span class=\"task-badge task-label green-label\" title=\"重要\">重要</span> <span class=\"task-badge task-label orange-label\" title=\"紧急\">紧急</span></div></div></div><div class=\"add-task-btn\">新建任务</div></div></div><div class=\"ebp-taskgroup\"><div class=\"ebp-taskgroup-header\"><h5 class=\"ebp-taskgroup-title\">已完成</h5></div><div class=\"ebp-taskgroup-body\"><div class=\"ebp-task-list\" ui-sortable=\"$taskBoard.taskSortableOptions\"><div class=\"ebp-task\"><div class=\"ebp-task-main\"><label class=\"ebp-checkbox\"><input type=\"checkbox\"> <span class=\"lbl\"></span></label> <a href=\"\" class=\"ebp-task-title\">院月报-部门主管</a></div><div class=\"ebp-task-badges\"><span class=\"task-badge fa fa-clock-o badge-expire-due\" title=\"任务已过期\">2015-12-09</span> <span class=\"task-badge fa fa-list badge-todo-done\" title=\"检查项： 7/7\">7/7</span> <span class=\"task-badge fa fa-diamond\">策划方案</span> <span class=\"task-badge task-label yellow-label\" title=\"一般\">一般</span></div></div><div class=\"ebp-task\"><div class=\"ebp-task-main\"><label class=\"ebp-checkbox\"><input type=\"checkbox\"> <span class=\"lbl\"></span></label> <a href=\"\" class=\"ebp-task-title\">项目月报审批流程-签章</a></div><div class=\"ebp-task-badges\"><span class=\"task-badge fa fa-clock-o badge-expire-due\" title=\"任务已过期\">2015-12-09</span> <span class=\"task-badge fa fa-list badge-todo-done\" title=\"检查项： 7/7\">7/7</span> <span class=\"task-badge fa fa-diamond\">策划方案</span> <span class=\"task-badge task-label green-label\" title=\"重要\">重要</span></div></div></div><div class=\"add-task-btn\">新建任务</div></div></div><div class=\"ebp-taskgroup\"><div class=\"ebp-taskgroup-header\"><h5 class=\"ebp-taskgroup-title\">进一步熟悉</h5></div><div class=\"ebp-taskgroup-body\"></div></div></div>");}]);