(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{JhTB:function(s,a,t){s.exports=t("luwe")},RMdC:function(s,a,t){var n,e,r;e=[a],void 0===(r="function"==typeof(n=function(a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{polylineVolume1:{},positions1:[],shape1:[],material1:void 0,polylineVolume2:{},positions2:[],shape2:[],material2:void 0,cornerType2:0,outlineColor2:{},polylineVolume3:{},shape3:[],positions3:[],material3:void 0,cornerType3:{}}},methods:{ready:function(s){var a=s.Cesium;s.viewer,this.positions1=a.Cartesian3.fromDegreesArray([-85,32,-85,36,-89,36]),this.shape1=this.computeCircle(6e4),this.material1=a.Color.RED,this.positions2=a.Cartesian3.fromDegreesArrayHeights([-90,32,0,-90,36,1e5,-94,36,0]),this.shape2=[new a.Cartesian2(-5e4,-5e4),new a.Cartesian2(5e4,-5e4),new a.Cartesian2(5e4,5e4),new a.Cartesian2(-5e4,5e4)],this.cornerType2=a.CornerType.BEVELED,this.material2=a.Color.GREEN.withAlpha(.5),this.outlineColor2=a.Color.BLACK,this.positions3=a.Cartesian3.fromDegreesArrayHeights([-95,32,0,-95,36,1e5,-99,36,2e5]),this.shape3=this.computeStar(7,7e4,5e4),this.cornerType3=a.CornerType.MITERED,this.material3=a.Color.BLUE},computeCircle:function(s){for(var a=[],t=0;t<360;t++){var n=Cesium.Math.toRadians(t);a.push(new Cesium.Cartesian2(s*Math.cos(n),s*Math.sin(n)))}return a},computeStar:function(s,a,t){for(var n=Math.PI/s,e=2*s,r=new Array(e),l=0;l<e;l++){var v=l%2==0?a:t;r[l]=new Cesium.Cartesian2(Math.cos(l*n)*v,Math.sin(l*n)*v)}return r},subReady:function(s){s.Cesium;var a=s.viewer;a.zoomTo(a.entities)}}},s.exports=a.default})?n.apply(a,e):n)||(s.exports=r)},luwe:function(s,a,t){"use strict";t.r(a);var n=t("RMdC"),e=t.n(n);for(var r in n)"default"!==r&&function(s){t.d(a,s,function(){return n[s]})}(r);var l=t("n83q"),v=t("JFUb"),_=Object(v.a)(e.a,l.a,l.b,!1,null,null,null);a.default=_.exports},n83q:function(s,a,t){"use strict";t.d(a,"a",function(){return n}),t.d(a,"b",function(){return e});var n=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("PolylineVolumeGraphics")]),s._v(" "),s._m(0),s._v(" "),t("h2",[s._v("Examples")]),s._v(" "),t("h3",[s._v("add a PolylineVolumeGraphics to viewer with entity")]),s._v(" "),t("h4",[s._v("Preview")]),s._v(" "),t("doc-preview",[[t("div",{staticClass:"viewer"},[t("cesium-viewer",{on:{ready:s.ready}},[t("entity",{attrs:{polylineVolume:s.polylineVolume1},on:{"update:polylineVolume":function(a){s.polylineVolume1=a}}},[t("polyline-volume-graphics",{attrs:{positions:s.positions1,shape:s.shape1,material:s.material1}})],1),s._v(" "),t("entity",{attrs:{polylineVolume:s.polylineVolume2},on:{"update:polylineVolume":function(a){s.polylineVolume2=a}}},[t("polyline-volume-graphics",{attrs:{positions:s.positions2,shape:s.shape2,material:s.material2,outline:!0,outlineColor:s.outlineColor2,cornerType:s.cornerType2}})],1),s._v(" "),t("entity",{attrs:{polylineVolume:s.polylineVolume3},on:{"update:polylineVolume":function(a){s.polylineVolume3=a}}},[t("polyline-volume-graphics",{attrs:{positions:s.positions3,shape:s.shape3,material:s.material3,cornerType:s.cornerType3},on:{ready:s.subReady}})],1)],1)],1)]],2),s._v(" "),t("h4",[s._v("Code")]),s._v(" "),s._m(1),s._v(" "),t("h2",[s._v("Instance Properties")]),s._v(" "),s._m(2),s._v(" "),t("h2",[s._v("Events")]),s._v(" "),s._m(3)],1)},e=[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("code",{pre:!0},[this._v("polyline-volume-graphics")]),this._v(" Add an entity containing a polylineVolume object to the viewer as a subcomponent of "),a("code",{pre:!0},[this._v("entity")]),this._v(". Describes a polyline volume defined as a line strip and corresponding two dimensional shape which is extruded along it. The resulting volume conforms to the curvature of the globe. As shown in the example below.")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":polylineVolume.sync")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"polylineVolume1"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("polyline-volume-graphics")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":positions")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"positions1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":shape")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"shape1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"material1"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("polyline-volume-graphics")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":polylineVolume.sync")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"polylineVolume2"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("polyline-volume-graphics")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":positions")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"positions2"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":shape")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"shape2"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"material2"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":outline")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":outlineColor")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"outlineColor2"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":cornerType")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"cornerType2"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("polyline-volume-graphics")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":polylineVolume.sync")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"polylineVolume3"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("polyline-volume-graphics")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":positions")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"positions3"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":shape")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"shape3"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"material3"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":cornerType")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"cornerType3"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"subReady"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("polyline-volume-graphics")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("polylineVolume1")]),s._v(": {},\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("positions1")]),s._v(": [],\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("shape1")]),s._v(": [],\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("material1")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("undefined")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("polylineVolume2")]),s._v(": {},\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("positions2")]),s._v(": [],\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("shape2")]),s._v(": [],\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("material2")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("undefined")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("cornerType2")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("outlineColor2")]),s._v(": {},\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("polylineVolume3")]),s._v(": {},\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("shape3")]),s._v(": [],\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("positions3")]),s._v(": [],\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("material3")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("undefined")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("cornerType3")]),s._v(": {}\n      }\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready (cesiumInstance) {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {Cesium, viewer} = cesiumInstance\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".positions1 =  Cesium.Cartesian3.fromDegreesArray(\n          [\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("-85.0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("32.0")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("-85.0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("36.0")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("-89.0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("36.0")]),s._v("\n          ])\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".shape1 = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".computeCircle("),t("span",{attrs:{class:"hljs-number"}},[s._v("60000.0")]),s._v(")\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material1 = Cesium.Color.RED\n\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".positions2 = Cesium.Cartesian3.fromDegreesArrayHeights(\n          [\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("-90.0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("32.0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("-90.0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("36.0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("100000.0")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("-94.0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("36.0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v("\n          ])\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".shape2 =\n          [\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian2("),t("span",{attrs:{class:"hljs-number"}},[s._v("-50000")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("-50000")]),s._v("),\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian2("),t("span",{attrs:{class:"hljs-number"}},[s._v("50000")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("-50000")]),s._v("),\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian2("),t("span",{attrs:{class:"hljs-number"}},[s._v("50000")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("50000")]),s._v("),\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian2("),t("span",{attrs:{class:"hljs-number"}},[s._v("-50000")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("50000")]),s._v("\n          )]\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cornerType2 = Cesium.CornerType.BEVELED\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material2 = Cesium.Color.GREEN.withAlpha("),t("span",{attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".outlineColor2 = Cesium.Color.BLACK\n\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".positions3 = Cesium.Cartesian3.fromDegreesArrayHeights(\n          [\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("-95.0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("32.0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("-95.0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("36.0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("100000.0")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("-99.0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("36.0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("200000.0")]),s._v("\n          ])\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".shape3 = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".computeStar("),t("span",{attrs:{class:"hljs-number"}},[s._v("7")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("70000")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("50000")]),s._v(")\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cornerType3 = Cesium.CornerType.MITERED\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material3 = Cesium.Color.BLUE\n      },\n      computeCircle(radius) {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" positions = []\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" i = "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("; i < "),t("span",{attrs:{class:"hljs-number"}},[s._v("360")]),s._v("; i++) {\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" radians = Cesium.Math.toRadians(i);\n            positions.push("),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian2(radius * "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".cos(radians), radius * "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".sin(radians)))\n        }\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" positions\n      },\n      computeStar(arms, rOuter, rInner) {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" angle = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".PI / arms;\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" length = "),t("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(" * arms;\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" positions = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Array")]),s._v("(length);\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" i = "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("; i < length; i++) {\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" r = (i % "),t("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(") === "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" ? rOuter : rInner;\n            positions[i] = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian2("),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".cos(i * angle) * r, "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".sin(i * angle) * r);\n        }\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" positions\n      },\n      subReady (cesiumInstance) {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {Cesium, viewer} = cesiumInstance\n        viewer.zoomTo(viewer.entities)\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("Reference official document "),a("a",{attrs:{href:"https://cesiumjs.org/Cesium/Build/Documentation/PolylineVolumeGraphics.html"}},[this._v("PolylineVolumeGraphics")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("name")]),s._v(" "),t("th",[s._v("parameter")]),s._v(" "),t("th",[s._v("description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("ready")]),s._v(" "),t("td",[s._v("{Cesium, viewer}")]),s._v(" "),t("td",[s._v("Triggers when PolylineGraphics is ready. It returns a core class of Cesium, a viewer instance.")])]),s._v(" "),t("tr",[t("td",[s._v("definitionChanged")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("Gets the event that is raised whenever a property or sub-property is changed or modified.")])])])])}]}}]);