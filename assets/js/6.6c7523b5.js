(window.webpackJsonp=window.webpackJsonp||[]).push([[6,7],{324:function(o,e,t){"use strict";t.r(e);var n={name:"blog-item",props:["blog"],beforeCreate:function(){console.log("child before create")},created:function(){console.log("".concat(this.blog.content," created"))},beforeMount:function(){console.log("".concat(this.blog.content," before mount"))},mounted:function(){console.log("".concat(this.blog.content," mounted"))},beforeUpdate:function(){console.log("".concat(this.blog.content," before update"))},updated:function(){console.log("".concat(this.blog.content," updated"))},beforeDestroy:function(){console.log("".concat(this.blog.content," before destroy"))},destroyed:function(){console.log("".concat(this.blog.content," destroyed"))}},c=t(39),l=Object(c.a)(n,(function(){var o=this.$createElement;return(this._self._c||o)("div",{staticClass:"blog-item"},[this._v(this._s(this.blog.content))])}),[],!1,null,null,null);e.default=l.exports},353:function(o,e,t){"use strict";t.r(e);var n={beforeCreate:function(){console.log("parent before create")},created:function(){console.log("parent created")},beforeMount:function(){console.log("parent before mount")},mounted:function(){console.log("parent mounted")},beforeUpdate:function(){console.log("parent before update")},updated:function(){console.log("parent updated")},beforeDestroy:function(){console.log("parent before destroy")},destroyed:function(){console.log("parent destroyed")},data:function(){return{blogs:[{id:1,content:"blog-item1"},{id:2,content:"blog-item2"}]}},components:{"blog-item":t(324).default}},c=t(39),l=Object(c.a)(n,(function(){var o=this.$createElement,e=this._self._c||o;return e("div",{staticClass:"blog-list"},this._l(this.blogs,(function(o){return e("blog-item",{key:o.id,attrs:{blog:o}})})),1)}),[],!1,null,null,null);e.default=l.exports}}]);