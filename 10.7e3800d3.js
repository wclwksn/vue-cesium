(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Dk3z:function(s,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r});var n=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("BoxGraphics")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("Examples")]),s._v(" "),a("h3",[s._v("add a BoxGraphics to viewer with entity")]),s._v(" "),a("h4",[s._v("Preview")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("cesium-viewer",{on:{ready:s.ready}},[a("entity",{attrs:{position:s.position1,description:s.description,box:s.box1},on:{"update:box":function(t){s.box1=t}}},[a("box-graphics",{attrs:{dimensions:s.dimensions1,material:s.material1}})],1),s._v(" "),a("entity",{attrs:{position:s.position2,description:s.description,box:s.box2},on:{"update:box":function(t){s.box2=t}}},[a("box-graphics",{attrs:{dimensions:s.dimensions2,material:s.material2,outlineColor:s.outlineColor2,outline:!0}})],1),s._v(" "),a("entity",{attrs:{position:s.position3,description:s.description,box:s.box3},on:{"update:box":function(t){s.box3=t}}},[a("box-graphics",{attrs:{dimensions:s.dimensions3,material:s.material3,outlineColor:s.outlineColor3,fill:!1,outline:!0}})],1)],1)],1)]],2),s._v(" "),a("h4",[s._v("Code")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("Instance Properties")]),s._v(" "),s._m(2),s._v(" "),a("h2",[s._v("Events")]),s._v(" "),s._m(3)],1)},r=[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",{pre:!0},[this._v("box-graphics")]),this._v(" Add an entity containing a box object to the viewer as a subcomponent of "),t("code",{pre:!0},[this._v("entity")]),this._v(". Describes a box. The center position and orientation are determined by the containing Entity. As shown in the example below.")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"position1"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":box.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"box1"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("box-graphics")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":dimensions")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"dimensions1"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"material1"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("box-graphics")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"position2"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":box.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"box2"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("box-graphics")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":dimensions")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"dimensions2"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"material2"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":outlineColor")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"outlineColor2"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":outline")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("box-graphics")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"position3"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":box.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"box3"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("box-graphics")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":dimensions")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"dimensions3"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"material3"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":outlineColor")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"outlineColor3"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":fill")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"false"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":outline")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("box-graphics")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("description")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Hello Vue Cesium'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("box1")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("position1")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("dimensions1")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("material1")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("box2")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("position2")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("dimensions2")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("material2")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("outlineColor2")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("box3")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("position3")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("dimensions3")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("material3")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("outlineColor3")]),s._v(": {}\n      }\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready (cesiumInstance) {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {Cesium, viewer} = cesiumInstance\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".position1 = Cesium.Cartesian3.fromDegrees("),a("span",{attrs:{class:"hljs-number"}},[s._v("105.0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(")\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".dimensions1 = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian3("),a("span",{attrs:{class:"hljs-number"}},[s._v("400000.0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("500000.0")]),s._v(")\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material1 = Cesium.Color.BLUE\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".position2 = Cesium.Cartesian3.fromDegrees("),a("span",{attrs:{class:"hljs-number"}},[s._v("110.0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(")\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".dimensions2 = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian3("),a("span",{attrs:{class:"hljs-number"}},[s._v("400000.0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("500000.0")]),s._v(")\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material2 = Cesium.Color.RED.withAlpha("),a("span",{attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".outlineColor2 = Cesium.Color.BLACK\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".position3 = Cesium.Cartesian3.fromDegrees("),a("span",{attrs:{class:"hljs-number"}},[s._v("100.0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(")\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".dimensions3 = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian3("),a("span",{attrs:{class:"hljs-number"}},[s._v("400000.0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("500000.0")]),s._v(")\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".outlineColor3 = Cesium.Color.YELLOW\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("Reference official document "),t("a",{attrs:{href:"https://cesiumjs.org/Cesium/Build/Documentation/BoxGraphics.html"}},[this._v("BoxGraphics")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("parameter")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer}")]),s._v(" "),a("td",[s._v("Triggers when PolylineGraphics is ready. It returns a core class of Cesium, a viewer instance.")])])])])}]},FY1G:function(s,t,a){var n,r,l;r=[t],void 0===(l="function"==typeof(n=function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{description:"Hello Vue Cesium",box1:{},position1:{},dimensions1:{},material1:{},box2:{},position2:{},dimensions2:{},material2:{},outlineColor2:{},box3:{},position3:{},dimensions3:{},material3:{},outlineColor3:{}}},methods:{ready:function(s){var t=s.Cesium;s.viewer,this.position1=t.Cartesian3.fromDegrees(105,40,3e5),this.dimensions1=new t.Cartesian3(4e5,3e5,5e5),this.material1=t.Color.BLUE,this.position2=t.Cartesian3.fromDegrees(110,40,3e5),this.dimensions2=new t.Cartesian3(4e5,3e5,5e5),this.material2=t.Color.RED.withAlpha(.5),this.outlineColor2=t.Color.BLACK,this.position3=t.Cartesian3.fromDegrees(100,40,3e5),this.dimensions3=new t.Cartesian3(4e5,3e5,5e5),this.outlineColor3=t.Color.YELLOW}}},s.exports=t.default})?n.apply(t,r):n)||(s.exports=l)},dVOx:function(s,t,a){s.exports=a("lmm/")},"lmm/":function(s,t,a){"use strict";a.r(t);var n=a("FY1G"),r=a.n(n);for(var l in n)"default"!==l&&function(s){a.d(t,s,function(){return n[s]})}(l);var e=a("Dk3z"),i=a("JFUb"),v=Object(i.a)(r.a,e.a,e.b,!1,null,null,null);t.default=v.exports}}]);