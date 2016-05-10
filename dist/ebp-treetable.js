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
	            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

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
	            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

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
	                    treeTable.retrieve(_this).then(function (data) {
	                        events.add(_this.adapter, data);
	                        _this.loaded = true;
	                    });
	                }
	            } else {
	                events.add(_this.adapter, null);
	                _this.loaded = true;
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
angular.module("ebp.treetable").run(["$templateCache", function($templateCache) {$templateCache.put("src/treeTable/templates/treeTable.tpl.html","<div class=\"ebp-tt-header\"><div class=\"ebp-tt-header-wrapper\"><table><colgroup><col class=\"ebp-tt-index-col\"><col class=\"ebp-tt-level-col\"><col ng-repeat=\"col in $ebpTreeTable.colDefs\" ng-style=\"{width: col.width+\'px\'}\"></colgroup><thead><tr><th class=\"columnheader ebp-tt-index-cell\"></th><th class=\"columnheader ebp-tt-level-cell\"><div>编号</div></th><th class=\"columnheader\" ng-repeat=\"col in $ebpTreeTable.colDefs\"><div>{{col.title}}</div></th></tr></thead></table></div></div><div class=\"ebp-tt-content-wrapper\"><table><colgroup><col class=\"ebp-tt-index-col\"><col class=\"ebp-tt-level-col\"><col ng-repeat=\"col in $ebpTreeTable.colDefs\" ng-style=\"{width: col.width+\'px\'}\"></colgroup><tbody></tbody></table></div><div class=\"ebp-tt-resize-mark\" ng-style=\"$ebpTreeTable.resizeMark\"></div>");}]);