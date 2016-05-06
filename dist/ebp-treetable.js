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

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _layouts, _core) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    var _layouts2 = _interopRequireDefault(_layouts);

	    var _core2 = _interopRequireDefault(_core);

	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }

	    /**
	     * Created by yao on 15/12/4.
	     */


	    var ebpTreeTable = angular.module('ebp.treetable', ['ngResource', _layouts2.default.name, _core2.default.name]);

	    exports.default = ebpTreeTable;
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

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(7), __webpack_require__(8), __webpack_require__(9), __webpack_require__(10), __webpack_require__(11), __webpack_require__(12)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config, _treeTable, _column, _cell, _node, _header) {
	          'use strict';

	          Object.defineProperty(exports, "__esModule", {
	                    value: true
	          });

	          var config = _interopRequireWildcard(_config);

	          var _treeTable2 = _interopRequireDefault(_treeTable);

	          var _column2 = _interopRequireDefault(_column);

	          var _cell2 = _interopRequireDefault(_cell);

	          var _node2 = _interopRequireDefault(_node);

	          var _header2 = _interopRequireDefault(_header);

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
	           * Created by yaoshining on 16/3/1.
	           */


	          var coreModule = angular.module('ebp.treeTable.core', []);
	          coreModule.constant('defaultSettings', config.treeTableSettings).directive(config.directiveNames.ebpTreeTableCol, _column2.default).directive(config.directiveNames.ebpTreeTableCell, _cell2.default).directive(config.directiveNames.ebpTreeTableNode, _node2.default).directive(config.directiveNames.ebpTreeTableHeader, _header2.default).directive(config.directiveNames.ebpTreeTable, _treeTable2.default);
	          exports.default = coreModule;
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
	     * Created by yao on 15/12/9.
	     */
	    var directiveNames = exports.directiveNames = {
	        ebpTreeTable: 'ebpTreetable',
	        ebpTreeTableCol: 'ebpTreetableCol',
	        ebpTreeTableNode: 'ebpTreetableNode',
	        ebpTreeTableCell: 'ebpTreetableCell',
	        ebpTreeTableHeader: 'columnheader'
	    };

	    var treeTableSettings = exports.treeTableSettings = {
	        expandAll: false,
	        colDefs: [],
	        events: {
	            edit: angular.noop,
	            remove: angular.noop,
	            add: angular.noop
	        },
	        dataSource: {
	            read: null
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    function _toConsumableArray(arr) {
	        if (Array.isArray(arr)) {
	            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	                arr2[i] = arr[i];
	            }

	            return arr2;
	        } else {
	            return Array.from(arr);
	        }
	    }

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    function initScroller(contentWrapper, headerWrapper) {
	        contentWrapper.on('scroll', function () {
	            var scrollLeft = contentWrapper.prop('scrollLeft');
	            headerWrapper.css({
	                transform: 'translate(' + -scrollLeft + 'px, 0)'
	            });
	        });
	    }

	    function TreeTableDirectiveFactory($templateRequest, $compile) {
	        'ngInject';

	        function compileFunc() {
	            var tplLoader = $templateRequest('src/treeTable/templates/treeTable.tpl.html');
	            return {
	                post: function post(scope, elem, attrs, treeTable) {
	                    elem.addClass('ebp-tt-container');
	                    tplLoader.then(function (tpl) {
	                        elem.append($compile(tpl)(scope));
	                        var tableWidth = elem.find('table').width();
	                        var containerWidth = elem.width();
	                        var contentWrapper = $('.ebp-tt-content-wrapper');
	                        var headerWrapper = $('.ebp-tt-header-wrapper');
	                        if (tableWidth <= containerWidth) {
	                            elem.find('table').width('100%');
	                        }
	                        initScroller(contentWrapper, headerWrapper);
	                        treeTable.render();
	                    });
	                }
	            };
	        }

	        var directive = {
	            restrict: 'AE',
	            compile: compileFunc,
	            scope: true,
	            controller: TreeTableController,
	            controllerAs: '$ebpTreeTable'
	        };

	        return directive;
	    }

	    function initSettings(settings) {
	        this.settings = {
	            expandAll: settings.expandAll
	        };
	        this.colDefs = _.sortBy(settings.colDefs || [], function (col) {
	            return col.index;
	        });
	        this.events = settings.events;
	    }

	    function initDataSource($resource, settings) {
	        'ngInject';

	        var dataSource = settings.dataSource;
	        if (dataSource.read) {
	            this.$readRepo = $resource(dataSource.read.url, dataSource.read.params);
	        }
	    }

	    function initTreeTable($element, $compile, $scope, $timeout) {
	        'ngInject';

	        var wrapper = $element.find('.ebp-tt-content-wrapper');
	        var tbody = wrapper.find('tbody');

	        tbody.append(nodesGenerator(this.data, $scope, $compile, 1, {
	            expand: this.settings.expandAll
	        }));

	        this.hideIndexCol = function () {
	            $element.find('.ebp-tt-index-cell,.ebp-tt-index-col').hide();
	        };

	        this.resizeCol = function (index, width) {
	            var cells = $element.find('table col:nth-child(' + index + ')');
	            cells.width(width);
	        };

	        var bubble = $('<div>').addClass('ebp-tt-bubble').appendTo($element);

	        $element.on({
	            mouseover: function mouseover(event) {
	                var target = event.target,
	                    title = target.title || $(target).data('title'),
	                    pos = $(target).position(),
	                    width = $(target).width(),
	                    height = $(target).height();
	                if (title) {
	                    (function () {
	                        if (target.title) {
	                            $(target).removeAttr('title').data('title', title);
	                        }
	                        bubble.removeClass('upward').css({
	                            top: pos.top + height + 15,
	                            left: pos.left + width / 2 + 5
	                        }).text(title);
	                        if ($element.height() - (pos.top + bubble.height() + height) < 10) {
	                            bubble.css({
	                                top: pos.top - height - 15
	                            }).addClass('upward');
	                        }
	                        var timer = $timeout(function () {
	                            bubble.fadeIn();
	                        }, 1500);
	                        $(target).one('mouseout', function () {
	                            $timeout.cancel(timer);
	                            bubble.stop().hide();
	                        });
	                    })();
	                }
	            }
	        });
	    }

	    function nodesGenerator(data, $scope, $compile, level, datum) {
	        var compiled = _.template('<tr ebp-treetable-node></tr>');
	        var elems = $();
	        angular.forEach(data, function (e) {
	            var el = $(compiled()).data(datum || {});
	            var scope = $scope.$new();
	            scope.node = e;
	            scope.level = level;
	            elems = elems.add($compile(el)(scope));
	        });
	        return elems;
	    }

	    var TreeTableController = function TreeTableController($scope, $attrs, defaultSettings, $element, $injector, $compile, $parse, $q) {
	        'ngInject';

	        var _this = this;

	        _classCallCheck(this, TreeTableController);

	        var settingsModel = $parse($attrs[_config.directiveNames.ebpTreeTable]),
	            settings = settingsModel.apply(null, [$scope]);
	        settings = _.merge({}, defaultSettings, settings);
	        initSettings.apply(this, [settings]);
	        $injector.invoke(initDataSource, this, {
	            settings: settings
	        });
	        settingsModel.assign($scope.$parent, $injector.instantiate(TreeTableAdapter, { treeTable: this }));
	        var _checkedNodes = [];
	        this.$children = [];
	        this.remove = function (node) {
	            _.remove(_this.data, function (item) {
	                return item.id === node.id;
	            });
	        };

	        this.checkAll = function (state) {
	            $scope.$broadcast('ebp-tt-node-check', state);
	        };

	        this.render = function () {
	            _this.retrieve().then(function (data) {
	                _this.data = data;
	                $injector.invoke(initTreeTable, _this, {
	                    $element: $element,
	                    $scope: $scope
	                });
	            });
	        };

	        this.reIndex = function () {
	            var elems = $element.find('[ebp-treetable-node]');
	            elems.each(function (i, e) {
	                $(e).find('.ebp-tt-index-cell').text(i + 1);
	            });
	        };

	        this.refreshLevelNum = function () {
	            $scope.$broadcast('ebp.tt.refreshLevelNum');
	        };

	        this.resizeMark = {
	            left: 0,
	            display: 'none'
	        };

	        Object.defineProperties(this, {
	            $el: {
	                get: function get() {
	                    return $element;
	                }
	            },
	            checkedNodes: {
	                get: function get() {
	                    return _checkedNodes;
	                }
	            },
	            $first: {
	                get: function get() {
	                    return _this.$children[0];
	                }
	            },
	            $last: {
	                get: function get() {
	                    return _this.$children[_this.$children.length - 1];
	                }
	            }
	        });

	        this.get = function (i) {
	            return _this.$children[i];
	        };

	        this.retrieve = function (node, recursive) {
	            var parentId = node ? node.data.id : 0;
	            var deferred = $q.defer();
	            if (!_this.$readRepo) {
	                deferred.reject();
	            } else {
	                _this.$readRepo.query({
	                    id: parentId
	                }, function (data) {
	                    if (node) {
	                        var _data;

	                        (_data = _this.data).push.apply(_data, _toConsumableArray(data));
	                        var elems = nodesGenerator(data, node.$el.scope(), $compile, node.$level + 1, {
	                            expand: recursive
	                        });
	                        elems.insertAfter(node.$el);
	                        _this.reIndex();
	                    }
	                    deferred.resolve(data);
	                });
	            }
	            return deferred.promise;
	        };

	        this.add = function (position, node) {
	            for (var _len = arguments.length, childData = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	                childData[_key - 2] = arguments[_key];
	            }

	            var _data2;

	            (_data2 = _this.data).push.apply(_data2, childData);
	            var index = position || 0,
	                scope = $scope,
	                level = 1;
	            if (node) {
	                index = position + node.$el.index();
	                scope = node.$el.scope();
	                level = node.$level + 1;
	                node.isParent = true;
	            }
	            var elems = nodesGenerator(childData, scope, $compile, level, {
	                index: position
	            });
	            var prevElem = $element.find('[ebp-treetable-node]:eq(' + index + ')');
	            if (node) {
	                elems.insertAfter(prevElem);
	            } else {
	                if (prevElem.length > 0) {
	                    elems.insertBefore(prevElem);
	                } else {
	                    elems.appendTo($element.find('.ebp-tt-content-wrapper tbody'));
	                }
	            }
	            _this.reIndex();
	        };

	        this.expandAll = function () {
	            angular.forEach(_this.$children, function (node) {
	                if (node.isParent) {
	                    node.expand(true);
	                }
	            });
	        };

	        this.collapseAll = function () {
	            angular.forEach(_this.$children, function (node) {
	                if (node.isParent) {
	                    node.collapse();
	                }
	            });
	        };
	    };

	    var TreeTableAdapter = function TreeTableAdapter(treeTable) {
	        'ngInject';

	        _classCallCheck(this, TreeTableAdapter);

	        Object.defineProperties(this, {
	            checkedNodes: {
	                get: function get() {
	                    return treeTable.checkedNodes.map(function (node) {
	                        return node.adapter;
	                    });
	                }
	            },
	            children: {
	                get: function get() {
	                    return treeTable.$children.map(function (node) {
	                        return node.adapter;
	                    });
	                }
	            }
	        });

	        this.insert = function (index, newNode) {
	            if (!newNode || treeTable.$children && index > treeTable.$children.length) {
	                return;
	            }
	            treeTable.add(index, null, newNode);
	        };

	        this.expandAll = function () {
	            return treeTable.expandAll();
	        };

	        this.collapseAll = function () {
	            return treeTable.collapseAll();
	        };
	    };

	    exports.default = TreeTableDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });


	    function ColumnDirectiveFactory() {

	        function linkFunc(scope, elem, attrs, treeTable) {
	            var tpl = elem.html().trim();
	            var colDef = {
	                title: attrs.title,
	                index: attrs.index,
	                width: attrs.width,
	                tpl: tpl
	            };
	            var sortedIndex = _.sortedIndex(_.map(treeTable.colDefs, function (col) {
	                return col.index;
	            }), colDef.index);
	            treeTable.colDefs.splice(sortedIndex, 0, colDef);
	            elem.remove();
	        }

	        var directive = {
	            restrict: 'AE',
	            link: linkFunc,
	            require: '^' + _config.directiveNames.ebpTreeTable
	        };

	        return directive;
	    } /**
	       * Created by yaoshining on 16/3/11.
	       */


	    exports.default = ColumnDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    function CellDirectiveFactory($compile) {
	        'ngInject';

	        function linkFunc(scope, elem) {
	            elem.addClass('ebp-tt-cell');
	            var col = scope.col;
	            if (col.tpl) {
	                var contentEl = angular.element('<div>').html(col.tpl);
	                elem.html(contentEl);
	                elem.addClass('ebp-tt-func-cell');
	                $compile(contentEl)(scope);
	            }
	        }

	        var directive = {
	            restrict: 'AE',
	            link: linkFunc,
	            scope: false,
	            require: '^' + _config.directiveNames.ebpTreeTableNode,
	            controller: EbpTreeTableCellController,
	            controllerAs: '$cell'
	        };

	        return directive;
	    }

	    var EbpTreeTableCellController = function EbpTreeTableCellController() {
	        _classCallCheck(this, EbpTreeTableCellController);
	    };

	    exports.default = CellDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    function _toConsumableArray(arr) {
	        if (Array.isArray(arr)) {
	            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	                arr2[i] = arr[i];
	            }

	            return arr2;
	        } else {
	            return Array.from(arr);
	        }
	    }

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
	     * Created by yaoshining on 16/3/14.
	     */
	    function linkFunc(scope, elem) {}

	    function NodeDirectiveFactory() {
	        var directive = {
	            restrict: 'AE',
	            scope: false,
	            link: linkFunc,
	            controller: EbpTreeTableNodeController,
	            controllerAs: '$node'
	        };

	        return directive;
	    }

	    function initNode($scope, $element, $compile, $timeout, $q) {
	        'ngInject';

	        var _this = this;

	        var node = $scope.node;
	        var treeTable = $scope.$ebpTreeTable;
	        var events = treeTable.events;
	        this.render = function () {
	            var tpl = '<td class="ebp-tt-index-cell"><%- index+1%></td>\n                   <td class="ebp-tt-level-cell"><%- levelNum%></td>';
	            var levelNum = _this.levelNum;
	            var compiled = _.template(tpl);
	            var el = $(compiled({
	                index: $element.index(),
	                node: node,
	                levelNum: levelNum
	            }));
	            $element.html(el);
	            renderCell.apply(_this, [$element, treeTable, node, $compile, $scope, $q]);
	        };
	        $timeout(this.render, 0);
	        this.edit = function () {
	            events.edit(_this.adapter);
	        };
	        this.remove = function () {
	            events.remove(_this.adapter);
	        };

	        this.add = function () {
	            if (node.isParent) {
	                if (_this.loaded) {
	                    (function () {
	                        var children = [];
	                        angular.forEach(_this.$children, function (child) {
	                            children.push(child.data);
	                        });
	                        events.add(_this.adapter, children);
	                    })();
	                } else {
	                    treeTable.retrieve(_this).$promise.then(function (data) {
	                        events.add(_this.adapter, data);
	                    });
	                }
	            } else {
	                events.add(_this.adapter, null);
	            }
	            _this.$el.addClass('open');
	        };

	        $element.on({
	            click: function click() {
	                var checkeState = !_this.checked;
	                treeTable.checkAll(false);
	                _this.checked = checkeState;
	            }
	        });
	    }

	    function renderCell(el, treeTable, node, $compile, $scope, $q) {
	        var _this2 = this;

	        var colDefs = treeTable.colDefs;
	        angular.forEach(colDefs, function (col) {
	            var compiled = _.template('<td><%- node[col.name]%></td>');
	            var elem = $(compiled({
	                node: node,
	                col: col
	            }));
	            var value = node[col.name];
	            if (col.tpl) {
	                var contentEl = angular.element('<div>').html(col.tpl);
	                elem.html(contentEl);
	                var scope = $scope.$new();
	                scope.$node = _this2.adapter;
	                $compile(contentEl)(scope);
	                $('.fa, .ebp-tt-btn', contentEl).click(function (event) {
	                    return event.stopPropagation();
	                });
	                elem.addClass('ebp-tt-func-cell');
	            } else {
	                if (col.type === 'progressBar') {
	                    initProgressBar(elem, {
	                        value: value
	                    });
	                    elem.addClass('ebp-tt-comp-cell');
	                }
	                if (col.type === 'crud') {
	                    var addBtn = $('<a>').addClass('ebp-tt-btn ebp-tt-btn-add').attr('title', '插入节点');
	                    var delBtn = $('<a>').addClass('ebp-tt-btn ebp-tt-btn-delete').attr('title', '删除节点');
	                    addBtn.click(function (event) {
	                        event.preventDefault();
	                        event.stopPropagation();
	                        _this2.add();
	                    });
	                    delBtn.click(function (event) {
	                        event.preventDefault();
	                        event.stopPropagation();
	                        _this2.remove();
	                    });
	                    elem.append(addBtn).append(delBtn);
	                }
	            }
	            if (col.checkable) {
	                (function () {
	                    var checkHandler = $('<label>').addClass('ebp-tt-checkbox');
	                    var checkbox = $('<input />', {
	                        type: 'checkbox'
	                    });
	                    checkHandler.append(checkbox);
	                    checkHandler.append('<span>');
	                    elem.prepend(checkHandler);
	                    checkbox.on({
	                        change: function change() {
	                            _this2.checked = checkbox.is(':checked');
	                        }
	                    });
	                    checkHandler.click(function (event) {
	                        return event.stopPropagation();
	                    });
	                })();
	            }
	            if (col.expandable) {
	                var indent = 20 * ($scope.level - 1);
	                elem.css({
	                    'text-indent': indent + 'px'
	                });
	                var handler = $('<i>').addClass('ebp-tt-expand-handler');
	                elem.prepend(handler);
	                if (_this2.expandHandlers instanceof $) {
	                    _this2.expandHandlers.add(handler);
	                } else {
	                    _this2.expandHandlers = $(handler);
	                }
	                handler.on('click', function (event) {
	                    event.stopPropagation();
	                    if (el.is('.open')) {
	                        _this2.collapse();
	                    } else {
	                        _this2.expand();
	                    }
	                });
	                if (!node.isParent) {
	                    handler.addClass('trans');
	                }
	                _this2.expand = expandNodes;
	                _this2.collapse = collapseNodes;
	                if (_this2.expandableCells instanceof $) {
	                    _this2.expandableCells.add(elem);
	                } else {
	                    _this2.expandableCells = elem;
	                }
	                if (el.data('expand')) {
	                    _this2.expand(true);
	                }
	            }
	            el.append(elem);
	        });

	        function expandNodes(recursive) {
	            var deferred = $q.defer();
	            if (this.isParent && !this.loaded) {
	                treeTable.retrieve(this, recursive).then(function () {
	                    deferred.resolve();
	                });
	                this.loaded = true;
	            } else {
	                var nodes = recursive ? this.descendants : this.$children;
	                angular.forEach(nodes, function (node) {
	                    node.$el.removeClass('hidden').addClass(recursive ? 'open' : '');
	                });
	                this.loaded = true;
	                deferred.resolve();
	            }
	            el.addClass('open');
	            return deferred.promise;
	        }

	        function collapseNodes() {
	            angular.forEach(this.$children, function (node) {
	                node.$el.addClass('hidden');
	                if (node.$children) {
	                    node.collapse();
	                }
	            });
	            el.removeClass('open');
	        }
	    }

	    function initProgressBar(cell, settings) {
	        var progressbar = new EbpTreeTableProgressbar(settings);
	        cell.html(progressbar.el);
	    }

	    var EbpTreeTableProgressbar = function () {
	        function EbpTreeTableProgressbar(settings) {
	            _classCallCheck(this, EbpTreeTableProgressbar);

	            this.el = $('<div class="ebp-tt-progressbar">\n                    </div>');
	            this.bar = $('<div class="ebp-tt-progressbar-inner">\n                        </div>');
	            this.el.append(this.bar);
	            this.value = settings.value;
	            this.render();
	        }

	        _createClass(EbpTreeTableProgressbar, [{
	            key: 'render',
	            value: function render() {
	                var _this3 = this;

	                if (this.value > 0) {
	                    this.bar.show();
	                } else {
	                    this.bar.hide();
	                }
	                setTimeout(function () {
	                    _this3.bar.width(_this3.value + '%');
	                }, 0);
	            }
	        }]);

	        return EbpTreeTableProgressbar;
	    }();

	    var EbpTreeTableNodeController = function EbpTreeTableNodeController($injector, $scope, $element, $timeout) {
	        'ngInject';

	        var _this4 = this;

	        _classCallCheck(this, EbpTreeTableNodeController);

	        var treeTable = $scope.$ebpTreeTable;
	        var checked = false;
	        $injector.invoke(initNode, this, {
	            $scope: $scope,
	            $element: $element
	        });
	        this.$el = $element;
	        var adapter = $injector.instantiate(TreeTableNodeAdapter, { $node: this, $scope: $scope });
	        var level = $scope.level;
	        var parent = $scope.$parent.$node;
	        var loaded = false;
	        Object.defineProperties(this, {
	            data: {
	                get: function get() {
	                    return $scope.node;
	                }
	            },
	            $level: {
	                get: function get() {
	                    return level;
	                },
	                set: function set(newLevel) {
	                    return level = newLevel;
	                }
	            },
	            loaded: {
	                get: function get() {
	                    return loaded;
	                },
	                set: function set(state) {
	                    return loaded = !!state;
	                }
	            },
	            $parent: {
	                get: function get() {
	                    return parent;
	                },
	                set: function set(p) {
	                    return parent = p;
	                }
	            },
	            levelIndex: {
	                get: function get() {
	                    var index = 0;
	                    if (!_this4.$parent) {
	                        index = _.indexOf(treeTable.$children, _this4);
	                    } else {
	                        index = _.indexOf(_this4.$parent.$children, _this4);
	                    }
	                    return index;
	                }
	            },
	            levelNum: {
	                get: function get() {
	                    var levelNum = '';
	                    var parent = _this4;
	                    while (parent) {
	                        levelNum = parent.levelIndex + 1 + '.' + levelNum;
	                        parent = parent.$parent;
	                    }
	                    return levelNum.substring(0, levelNum.length - 1);
	                }
	            },
	            isParent: {
	                get: function get() {
	                    return _this4.data.isParent;
	                },
	                set: function set(state) {
	                    if (state) {
	                        _this4.expandHandlers.removeClass('trans');
	                    } else {
	                        _this4.expandHandlers.addClass('trans');
	                    }
	                    _this4.data.isParent = state;
	                }
	            },
	            checked: {
	                get: function get() {
	                    return checked;
	                },
	                set: function set(state) {
	                    checked = state;
	                    var checkboxes = $('.ebp-tt-checkbox > input', $element);
	                    if (checked) {
	                        treeTable.checkedNodes.push(_this4);
	                        $element.addClass('checked');
	                        checkboxes.prop('checked', true);
	                    } else {
	                        _.remove(treeTable.checkedNodes, function (node) {
	                            return node === _this4;
	                        });
	                        $element.removeClass('checked');
	                        checkboxes.prop('checked', false);
	                    }
	                }
	            },
	            adapter: {
	                get: function get() {
	                    return adapter;
	                }
	            },
	            descendants: {
	                get: function get() {
	                    var children = [].concat(_this4.$children || []);
	                    angular.forEach(children, function (node) {
	                        children.push.apply(children, _toConsumableArray(node.descendants));
	                    });
	                    return children;
	                }
	            }
	        });
	        {
	            (function () {
	                var parent = _this4.$parent;
	                if (parent) {
	                    _this4.$parent.$children = _this4.$parent.$children || [];
	                    parent.isParent = true;
	                } else {
	                    parent = treeTable;
	                }
	                var children = parent.$children || [];
	                var index = $element.data('index');
	                if (angular.isUndefined(index)) {
	                    index = children.length;
	                } else {
	                    setTimeout(function () {
	                        parent.refreshLevelNum();
	                    }, 0);
	                }
	                children.splice(index, 0, _this4);
	            })();
	        }

	        $scope.$on('ebp.tt.refreshLevelNum', function () {
	            _this4.$el.find('.ebp-tt-level-cell').text(_this4.levelNum);
	        });

	        this.refreshLevelNum = function () {
	            angular.forEach([].concat(_this4.descendants, [_this4]), function (node) {
	                node.$el.find('.ebp-tt-level-cell').text(node.levelNum);
	            });
	        };

	        this.$destroy = function () {
	            $element.remove();
	            $scope.$destroy();
	        };

	        this.get = function (i) {
	            return _this4.$children[i];
	        };

	        this.exchange = function (target) {
	            if (!target || angular.equals(_this4, target)) {
	                return;
	            }
	            if (_this4.$level === target.$level) {
	                var index = _this4.levelIndex;
	                if (index < 0) {
	                    return;
	                }

	                var from = _this4.levelIndex,
	                    to = target.levelIndex,
	                    n = _this4.$el.next(),
	                    p = target.$el.prev();
	                if (from > to) {
	                    target.$el.insertBefore(n);
	                    _this4.$el.insertAfter(p);
	                } else {
	                    target.$el.insertBefore(_this4.$el);
	                    _this4.$el.insertAfter(p);
	                }
	                angular.forEach(_this4.descendants, function (node) {
	                    return node.updatePosition();
	                });
	                angular.forEach(target.descendants, function (node) {
	                    return node.updatePosition();
	                });
	                if (_this4.$parent) {
	                    _this4.$parent.$children.splice(from, 1);
	                    _this4.$parent.$children.splice(to, 0, _this4);
	                    _this4.$parent.refreshLevelNum();
	                } else {
	                    treeTable.$children.splice(from, 1);
	                    treeTable.$children.splice(to, 0, _this4);
	                    treeTable.refreshLevelNum();
	                }
	                treeTable.reIndex();
	            }
	        };

	        $scope.$on('ebp-tt-node-check', function (event, state) {
	            _this4.checked = state;
	        });

	        this.updatePosition = function () {
	            var index = _this4.$parent.$el.index() + _this4.levelIndex;
	            if (_this4.$el.index() < index) {
	                index--;
	            }
	            var n = _this4.$el.siblings().eq(index);
	            _this4.$el.insertAfter(n);
	        };

	        this.removeChildren = function () {
	            var children = _this4.$children;
	            var subChildren = getSubChildren(children);
	            angular.forEach(subChildren, function (node) {
	                _.remove(treeTable.data, function (item) {
	                    return item.id === node.data.id;
	                });
	                node.$destroy();
	            });
	            function getSubChildren(children) {
	                var nodes = children;
	                angular.forEach(children, function (item) {
	                    if (item.$children) {
	                        nodes.push.apply(nodes, _toConsumableArray(getSubChildren(item.$children)));
	                    }
	                });
	                return nodes;
	            }
	        };

	        this.reIndent = function () {
	            angular.forEach([].concat(_this4.descendants, [_this4]), function (node) {
	                var indent = 20 * (node.$level - 1);
	                $timeout(function () {
	                    node.expandableCells.css({
	                        'text-indent': indent + 'px'
	                    });
	                }, 0);
	            });
	        };

	        this.shiftUp = function () {
	            if (_this4.levelIndex < 1) {
	                return;
	            }
	            var target = null;
	            if (_this4.$parent) {
	                target = _this4.$parent.get(_this4.levelIndex - 1);
	            } else {
	                target = treeTable.get(_this4.levelIndex - 1);
	            }
	            _this4.exchange(target);
	        };

	        this.shiftDown = function () {
	            var target = null;
	            if (_this4.$parent) {
	                target = _this4.$parent.get(_this4.levelIndex + 1);
	            } else {
	                target = treeTable.get(_this4.levelIndex + 1);
	            }
	            _this4.exchange(target);
	        };

	        this.upgrade = function () {
	            var target = _this4.$parent,
	                parent = _this4.$parent,
	                grandpa = treeTable;
	            if (!parent) {
	                return;
	            }
	            if (degrade.apply(undefined, [parent, _this4.levelIndex].concat(_toConsumableArray(_.filter(parent.$children, function (node) {
	                return node.levelIndex > _this4.levelIndex;
	            }))))) {
	                var index = target.levelIndex + 1;
	                if (parent.$parent) {
	                    grandpa = parent.$parent;
	                }
	                _this4.$level--;
	                _.remove(parent.$children, function (node) {
	                    return node === _this4;
	                });
	                grandpa.$children.splice(index, 0, _this4);
	                _this4.$parent = parent.$parent || undefined;
	                angular.forEach(_this4.descendants, function (node) {
	                    node.updatePosition();
	                    node.$level--;
	                });
	                _this4.reIndent();
	                grandpa.refreshLevelNum();
	                treeTable.reIndex();
	                if (angular.isArray(_this4.$children) && _this4.$children.length > 0) {
	                    _this4.isParent = true;
	                    _this4.$el.addClass('open');
	                }
	                if (parent.$children.length < 1) {
	                    parent.isParent = false;
	                }
	            }
	        };

	        this.degrade = function () {
	            var parent = _this4.$parent || treeTable,
	                prev = parent.get(_this4.levelIndex - 1);
	            if (prev) {
	                prev.expand().then(function () {
	                    if (degrade(parent, _this4.levelIndex - 1, _this4)) {
	                        _this4.reIndent();
	                        parent.refreshLevelNum();
	                        treeTable.reIndex();
	                        prev.$el.addClass('open');
	                    }
	                });
	            }
	        };

	        function degrade(parent, index) {
	            if (index < 0) {
	                return false;
	            }
	            var prev = parent.get(index);

	            for (var _len = arguments.length, nodes = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	                nodes[_key - 2] = arguments[_key];
	            }

	            angular.forEach(nodes, function (node) {
	                node.$level++;
	                _.remove(parent.$children, function (n) {
	                    return n === node;
	                });
	                prev.$children = prev.$children || [];
	                prev.$children.push(node);
	                node.$parent = prev;
	                angular.forEach(node.descendants, function (node) {
	                    node.updatePosition();
	                    node.$level++;
	                });
	            });
	            prev.isParent = !!nodes.length;
	            return true;
	        }
	    };

	    var TreeTableNodeAdapter = function TreeTableNodeAdapter($node, $scope) {
	        'ngInject';

	        var _this5 = this;

	        _classCallCheck(this, TreeTableNodeAdapter);

	        var treeTable = $scope.$ebpTreeTable;
	        Object.defineProperties(this, {
	            model: {
	                get: function get() {
	                    return $node.data;
	                }
	            },
	            levelNum: {
	                get: function get() {
	                    return $node.levelNum;
	                }
	            },
	            parent: {
	                get: function get() {
	                    if ($node.$parent) {
	                        return $node.$parent.adapter;
	                    } else {
	                        return null;
	                    }
	                }
	            },
	            children: {
	                get: function get() {
	                    return _.map($node.$children, function (node) {
	                        return node.adapter;
	                    });
	                }
	            }
	        });

	        this.update = function (data) {
	            _.merge(_this5.model, data);
	            $node.render();
	            $scope.$apply();
	        };

	        this.insert = function (index, newNode) {
	            if (!newNode || $node.$children && index > $node.$children.length) {
	                return;
	            }
	            treeTable.add(index, $node, newNode);
	            _this5.checked = false;
	        };

	        this.remove = function () {
	            var result = _.remove(treeTable.data, function (item) {
	                return item.id === _this5.model.id;
	            });
	            if (result.length > 0) {
	                $node.removeChildren();
	                var parent = $node.$parent;
	                if (parent) {
	                    _.remove(parent.$children, function (item) {
	                        return item === $node;
	                    });
	                    parent.refreshLevelNum();
	                    if (parent.$children.length < 1) {
	                        parent.isParent = false;
	                    }
	                } else {
	                    _.remove(treeTable.$children, function (item) {
	                        return item === $node;
	                    });
	                    treeTable.refreshLevelNum();
	                }
	                $node.$destroy();
	                treeTable.reIndex();
	            }
	        };

	        this.shiftUp = function () {
	            return $node.shiftUp();
	        };

	        this.shiftDown = function () {
	            return $node.shiftDown();
	        };

	        this.upgrade = function () {
	            return $node.upgrade();
	        };

	        this.degrade = function () {
	            return $node.degrade();
	        };
	    };

	    exports.default = NodeDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    /**
	     * Created by yaoshining on 16/3/23.
	     */
	    function linkFunc(scope, elem) {
	        var width = elem.width();
	        var treeTable = scope.$ebpTreeTable;
	        var events = treeTable.events;
	        var resizeMark = treeTable.resizeMark;
	        var col = scope.col;
	        if (typeof interact === 'undefined') {
	            if (angular.isFunction(requirejs)) {
	                window.interact = requirejs('interact');
	            }
	        }
	        interact(elem[0]).resizable({
	            preserveAspectRatio: true,
	            edges: {
	                left: false,
	                right: true,
	                bottom: false,
	                top: false
	            }
	        }).on({
	            'resizestart': function resizestart() {
	                scope.$apply(function () {
	                    resizeMark.display = 'block';
	                });
	            },
	            'resizemove': function resizemove(event) {
	                scope.$apply(function () {
	                    var relativeX = event.pageX - treeTable.$el.offset().left;
	                    resizeMark.left = relativeX + 'px';

	                    width = event.rect.width;
	                });
	            },
	            'resizeend': function resizeend() {
	                scope.$apply(function () {
	                    if (scope.col) {
	                        scope.col.width = width;
	                    } else {
	                        treeTable.resizeCol(elem.index() + 1, width);
	                    }
	                    resizeMark.display = 'none';
	                });
	            }
	        });
	        if (col) {
	            if (col.type === 'crud') {
	                var addBtn = $('<a>').addClass('ebp-tt-btn ebp-tt-btn-insert-row').attr('title', '操作列');
	                addBtn.on('click', function (event) {
	                    event.preventDefault();
	                    events.add(null, treeTable.$children);
	                });
	                elem.addClass('ebp-tt-crud-col');
	                elem.html(addBtn);
	            }
	            if (col.checkable) {
	                (function () {
	                    var checkHandler = $('<label>').addClass('ebp-tt-checkbox');
	                    var checkbox = $('<input />', {
	                        type: 'checkbox'
	                    });
	                    checkHandler.append(checkbox);
	                    checkHandler.append('<span>');
	                    elem.children('div').prepend(checkHandler);
	                    checkbox.on({
	                        change: function change() {
	                            var state = checkbox.is(':checked');
	                            treeTable.checkAll(state);
	                        }
	                    });
	                })();
	            }
	        }
	    }

	    function HeaderDirectiveFactory() {
	        var directive = {
	            restrict: 'C',
	            scope: false,
	            link: linkFunc
	        };

	        return directive;
	    }

	    exports.default = HeaderDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
/******/ ]);
angular.module("ebp.treetable").run(["$templateCache", function($templateCache) {$templateCache.put("src/treeTable/templates/treeTable.tpl.html","<div class=\"ebp-tt-header\"><div class=\"ebp-tt-header-wrapper\"><table><colgroup><col class=\"ebp-tt-index-col\"><col class=\"ebp-tt-level-col\"><col ng-repeat=\"col in $ebpTreeTable.colDefs\" ng-style=\"{width: col.width+\'px\'}\"></colgroup><thead><tr><th class=\"columnheader ebp-tt-index-cell\"></th><th class=\"columnheader ebp-tt-level-cell\"><div>编号</div></th><th class=\"columnheader\" ng-repeat=\"col in $ebpTreeTable.colDefs\"><div>{{col.title}}</div></th></tr></thead></table></div></div><div class=\"ebp-tt-content-wrapper\"><table><colgroup><col class=\"ebp-tt-index-col\"><col class=\"ebp-tt-level-col\"><col ng-repeat=\"col in $ebpTreeTable.colDefs\" ng-style=\"{width: col.width+\'px\'}\"></colgroup><tbody></tbody></table></div><div class=\"ebp-tt-resize-mark\" ng-style=\"$ebpTreeTable.resizeMark\"></div>");}]);