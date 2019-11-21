"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListItems = function (_React$Component) {
    _inherits(ListItems, _React$Component);

    function ListItems() {
        _classCallCheck(this, ListItems);

        var _this = _possibleConstructorReturn(this, (ListItems.__proto__ || Object.getPrototypeOf(ListItems)).call(this));

        _this.onFormSubmit = _this.onFormSubmit.bind(_this);

        _this.state = {
            items: []
        };
        return _this;
    }

    _createClass(ListItems, [{
        key: "onFormSubmit",
        value: function onFormSubmit(e) {

            e.preventDefault();

            var newValue = e.target.elements.newItem.value;

            if (newValue.length > 0) {

                e.target.elements.newItem.value = "";

                this.setState(function (prevState) {
                    return {
                        items: [].concat(_toConsumableArray(prevState.items), [newValue])
                    };
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var items = this.state.items;


            return React.createElement(
                "div",
                null,
                items.length > 0 && React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "h2",
                        null,
                        "Se\xE7enekler"
                    ),
                    items.map(function (item, index) {
                        return React.createElement(
                            "li",
                            { key: index },
                            item
                        );
                    })
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "form",
                        { onSubmit: this.onFormSubmit },
                        React.createElement("input", { type: "text", name: "newItem", placeholder: "Yeni Sat\u0131r Girin" }),
                        React.createElement(
                            "button",
                            null,
                            "Kaydet"
                        )
                    )
                )
            );
        }
    }]);

    return ListItems;
}(React.Component);

var appRoot = document.getElementById('app');
ReactDOM.render(React.createElement(ListItems, null), appRoot);
