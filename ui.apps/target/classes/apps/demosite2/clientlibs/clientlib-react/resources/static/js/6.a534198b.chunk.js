(this.webpackJsonpdemosite2=this.webpackJsonpdemosite2||[]).push([[6],{591:function(e,t,s){var a=s(96),n=s(97),i=s(124),o=s(161),r=s(162),l=s(123);"undefined"!=typeof self&&self,e.exports=function(e){var t={};function s(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=e,s.c=t,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=18)}({0:function(e,t){e.exports=s(2)},1:function(e,t){e.exports=s(11)},18:function(e,t,s){e.exports=s(9)},2:function(e,t,s){"use strict";s.d(t,"b",(function(){return p})),s.d(t,"a",(function(){return d}));var c=s(0),u=function(){try{return"undefined"!=typeof window}catch(e){return!1}}(),p=function(e,t){return function(s){var a=s.baseCssClass,n=a&&a.trim().length>0?a:t,i=l(l({},s),{},{baseCssClass:n});return c.createElement(e,Object.assign({},i))}},d=function(e){return function(t){o(l,t);var s=r(l);function l(e){var t;return a(this,l),(t=s.call(this,e)).state={},u&&window.Granite&&window.Granite.author&&window.Granite.author.MessageChannel&&(t.messageChannel=new window.Granite.author.MessageChannel("cqauthor",window),t.callback=t.callback.bind(i(t))),t}return n(l,[{key:"callback",value:function(e){if(e.data&&e.data.id===this.props.cqPath&&"navigate"===e.data.operation){var t=e.data.index;this.setState({activeIndexFromAuthorPanel:t})}}},{key:"componentDidMount",value:function(){this.messageChannel&&this.messageChannel.subscribeRequestMessage("cmp.panelcontainer",this.callback)}},{key:"componentWillUnmount",value:function(){this.messageChannel&&this.messageChannel.unsubscribeRequestMessage("cmp.panelcontainer",this.callback)}},{key:"render",value:function(){return c.createElement(e,Object.assign({},this.props,{activeIndexFromAuthorPanel:this.state.activeIndexFromAuthorPanel}))}}]),l}(c.Component)}},5:function(e,t,s){"use strict";function a(e){return null==e.cqItemsOrder||0===e.cqItemsOrder.length}s.d(t,"a",(function(){return a}))},9:function(e,t,s){"use strict";s.r(t);var l=s(0),c=s.n(l),u=s(2),p=s(1),d=s(5),h=function(e,t){for(var s=e,a=0;a<t.length;a++){var n="{"+a+"}";s=s.replace(n,t[a])}return s},b=function(e){o(s,e);var t=r(s);function s(e){var n;return a(this,s),(n=t.call(this,e)).interval=0,n.clearAutoPlay=function(){window.clearInterval(n.interval)},n.state={activeIndex:0,isMouseEntered:!1,autoPlay:n.props.autoplay&&!n.props.isInEditor,componentMapping:n.props.componentMapping||p.ComponentMapping},n.handleIndicatorClick=n.handleIndicatorClick.bind(i(n)),n.handleOnButtonPrev=n.handleOnButtonPrev.bind(i(n)),n.handleOnButtonNext=n.handleOnButtonNext.bind(i(n)),n.handleOnMouseEnter=n.handleOnMouseEnter.bind(i(n)),n.handleOnMouseLeave=n.handleOnMouseLeave.bind(i(n)),n}return n(s,[{key:"componentDidUpdate",value:function(e,t,s){void 0!==this.props.activeIndexFromAuthorPanel&&e.activeIndexFromAuthorPanel!=this.props.activeIndexFromAuthorPanel&&(this.setState({activeIndex:this.props.activeIndexFromAuthorPanel}),this.toggleAutoPlay(!1))}},{key:"componentDidMount",value:function(){this.autoPlay()}},{key:"componentWillUnmount",value:function(){this.interval&&this.clearAutoPlay()}},{key:"handleOnMouseEnter",value:function(){!this.props.autopauseDisabled&&this.props.autoplay&&this.clearAutoPlay()}},{key:"handleOnMouseLeave",value:function(){!this.props.autopauseDisabled&&this.props.autoplay&&this.autoPlay()}},{key:"handleOnButtonPrev",value:function(){this.prevSlide()}},{key:"handleOnButtonNext",value:function(){this.nextSlide()}},{key:"handleIndicatorClick",value:function(e){this.state.activeIndex!==e&&this.setState({activeIndex:e})}},{key:"autoPlay",value:function(){var e=this;this.interval=window.setInterval((function(){e.autoPlayTick()}),this.props.delay)}},{key:"autoPlayTick",value:function(){!this.state.autoPlay||this.props.cqItemsOrder.length<=1||this.nextSlide()}},{key:"toggleAutoPlay",value:function(e){this.setState({autoPlay:e})}},{key:"nextSlide",value:function(){var e=this.__getActiveIndex();e===this.props.cqItemsOrder.length-1?this.__setSlide(0):this.__setSlide(e+1)}},{key:"prevSlide",value:function(){var e=this.__getActiveIndex();0===e?this.__setSlide(this.props.cqItemsOrder.length-1):this.__setSlide(e-1)}},{key:"__getActiveIndex",value:function(){return this.state.activeIndex}},{key:"__setSlide",value:function(e){this.setState({activeIndex:e})}},{key:"render",value:function(){var e=Object(d.a)(this.props);return c.a.createElement("div",{className:this.props.baseCssClass,role:"group","data-panelcontainer":"carousel","aria-label":this.props.accessibilityLabel,"aria-roledescription":"carousel"},!e&&this.renderCarousel(),this.placeholderComponent)}},{key:"displayItem",value:function(e,t){var s=t===this.state.activeIndex,a=!(!s&&!this.props.isInEditor),n=s?"".concat(this.props.baseCssClass,"__item ").concat(this.props.baseCssClass,"__item--active"):this.props.baseCssClass+"__item",i=h(this.props.accessibility.slide,[(t+1).toString(),this.props.cqItemsOrder.length.toString()]);return c.a.createElement("div",{key:"item-"+t,className:n,role:"tabpanel","aria-label":i,"data-cmp-hook-carousel":"item"},a&&e)}},{key:"renderCarousel",value:function(){var e=this;return c.a.createElement("div",{className:this.props.baseCssClass+"__content",onMouseEnter:function(){return e.handleOnMouseEnter()},onMouseLeave:function(){return e.handleOnMouseLeave()}},this.childComponents.map((function(t,s){return e.displayItem(t,s)})),this.renderCarouselActions(),this.renderCarouselIndicators())}},{key:"renderCarouselIndicators",value:function(){var e=this;return c.a.createElement("ol",{className:this.props.baseCssClass+"__indicators",role:"tablist","aria-label":this.props.accessibility.indicators},this.props.cqItemsOrder.map((function(t,s){var a=e.props.cqItems[t],n=s===e.state.activeIndex?"".concat(e.props.baseCssClass,"__indicator ").concat(e.props.baseCssClass,"__indicator--active"):e.props.baseCssClass+"__indicator",i=h(e.props.accessibility.indicator,[(s+1).toString()]);return c.a.createElement("li",{key:"item-"+s,onClick:function(){return e.handleIndicatorClick(s)},className:n,role:"tab","aria-label":i},a["cq:panelTitle"])})))}},{key:"renderCarouselActions",value:function(){var e=this;return c.a.createElement("div",{className:this.props.baseCssClass+"__actions"},c.a.createElement("button",{onClick:function(){return e.handleOnButtonPrev()},className:"".concat(this.props.baseCssClass,"__action ").concat(this.props.baseCssClass,"__action--previous"),type:"button","aria-label":this.props.accessibility.previous},c.a.createElement("span",{className:this.props.baseCssClass+"__action-icon"}),c.a.createElement("span",{className:this.props.baseCssClass+"__action-text"},this.props.accessibility.previous)),c.a.createElement("button",{onClick:function(){return e.handleOnButtonNext()},className:"".concat(this.props.baseCssClass,"__action ").concat(this.props.baseCssClass,"__action--next"),type:"button","aria-label":this.props.accessibility.next},c.a.createElement("span",{className:this.props.baseCssClass+"__action-icon"}),c.a.createElement("span",{className:this.props.baseCssClass+"__action-text"},this.props.accessibility.next)),this.props.autoplay&&c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"".concat(this.props.baseCssClass,"__action ").concat(this.props.baseCssClass,"__action--pause ")+(this.state.autoPlay?"":this.props.baseCssClass+"__action--disabled"),type:"button","aria-label":this.props.accessibility.pause,onClick:function(){return e.toggleAutoPlay(!1)}},c.a.createElement("span",{className:this.props.baseCssClass+"__action-icon"}),c.a.createElement("span",{className:this.props.baseCssClass+"__action-text"},this.props.accessibility.pause)),c.a.createElement("button",{className:"".concat(this.props.baseCssClass,"__action ").concat(this.props.baseCssClass,"__action--play ")+(this.state.autoPlay?this.props.baseCssClass+"__action--disabled":""),type:"button","aria-label":this.props.accessibility.play,onClick:function(){return e.toggleAutoPlay(!0)}},c.a.createElement("span",{className:this.props.baseCssClass+"__action-icon"}),c.a.createElement("span",{className:this.props.baseCssClass+"__action-text"},this.props.accessibility.play))))}}]),s}(p.Container);b.defaultProps={_allowedComponentPlaceholderListEmptyLabel:"CarouselV1",isInEditor:!1,autoplay:!1,cqPath:"",cqItems:{},cqItemsOrder:[],accessibilityLabel:"Carousel",accessibility:{play:"Play",pause:"Pause",next:"Next",previous:"Previous",slide:"Slide {0} of {1}",indicator:"Slide %{0}",indicators:"Choose a slide to display"}},t.default=Object(u.b)(Object(u.a)(b),"cmp-carousel")}})}}]);
//# sourceMappingURL=6.a534198b.chunk.js.map