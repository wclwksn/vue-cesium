(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"+N5b":function(s,t,a){var n,l,e;l=[t],void 0===(e="function"==typeof(n=function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{tilesetUrl:"https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json",material:void 0,editing:!1,polylines:[],options:[]}},methods:{ready:function(s){var t=s.Cesium,a=s.viewer;this.cesiumInstance=s,a.scene.globe.depthTestAgainstTerrain=!0,this.material=new t.PolylineDashMaterialProperty({color:t.Color.CYAN})},toggle:function(s){this.editing=!this.editing;var t=this.polylines;if(this.editing)t.push({positions:[]});else{if(!t.length)return;var a=t[t.length-1];0===a.positions.length&&t.pop()}},clear:function(){this.polylines=[]},LEFT_CLICK:function(s){if(this.editing){var t=this.cesiumInstance,a=t.Cesium,n=t.viewer,l=this.polylines;!l.length&&l.push({positions:[]});var e=n.scene.pickPosition(s.position);a.defined(e)&&l[l.length-1].positions.push(e)}},MOUSE_MOVE:function(s){if(this.editing){var t=this.polylines;if(t.length){var a=t[t.length-1];if(a.positions.length){var n=this.cesiumInstance,l=n.Cesium,e=n.viewer,r=e.scene.pickPosition(s.endPosition);l.defined(r)&&(1===a.positions.length&&a.positions.push(r),this.$set(a.positions,a.positions.length-1,r))}}}},RIGHT_CLICK:function(s){if(this.editing){var t=this.polylines;if(t.length){var a=this.cesiumInstance.viewer,n=a.scene.pickPosition(s.position);if(Cesium.defined(n)){var l=t[t.length-1];l.positions.pop(),l.positions.push(n),t.length&&t.push({positions:[]})}}}},readyPromise:function(s){this.cesiumInstance.viewer.zoomTo(s)}}},s.exports=t.default})?n.apply(t,l):n)||(s.exports=e)},"7Fxo":function(s,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return l});var n=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("绘制")]),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("绘制实体线")]),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("cesium-viewer",{on:{ready:s.ready,LEFT_CLICK:s.LEFT_CLICK,MOUSE_MOVE:s.MOUSE_MOVE,RIGHT_CLICK:s.RIGHT_CLICK}},[a("cesium-3dtileset",{ref:"tileset",attrs:{url:s.tilesetUrl},on:{readyPromise:s.readyPromise}}),s._v(" "),s._l(s.polylines,function(t,n){return a("entity",{key:n,attrs:{polyline:t.polyline},on:{"update:polyline":function(a){s.$set(t,"polyline",a)}}},[a("polyline-graphics",{ref:"line"+n,refInFor:!0,attrs:{positions:t.positions,material:s.material,width:5}})],1)})],2),s._v(" "),a("div",{staticClass:"demo-tool"},[a("md-button",{staticClass:"md-raised md-accent",on:{click:s.toggle}},[s._v(s._s(s.editing?"停止绘制":"开始绘制"))]),s._v(" "),a("md-button",{staticClass:"md-raised md-accent",on:{click:s.clear}},[s._v("清除")])],1)],1)]],2),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(0)],1)},l=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@LEFT_CLICK")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"LEFT_CLICK"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@MOUSE_MOVE")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"MOUSE_MOVE"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@RIGHT_CLICK")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"RIGHT_CLICK"')]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-3dtileset")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"tileset"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":url")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"tilesetUrl"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@readyPromise")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"readyPromise"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-3dtileset")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"index"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"(polyline, index) of polylines"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":polyline.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"polyline.polyline"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("polyline-graphics")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":ref")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"'line'+index\"")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":positions")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"polyline.positions"')]),s._v("  "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"material"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":width")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"5"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("polyline-graphics")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"demo-tool"')]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"md-raised md-accent"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"toggle"')]),s._v(">")]),s._v("{{ editing ? '停止绘制' : '开始绘制' }}"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"md-raised md-accent"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"clear"')]),s._v(">")]),s._v("清除"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("tilesetUrl")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("material")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("undefined")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("editing")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("polylines")]),s._v(": [],\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": []\n      }\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready (cesiumInstance) {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {Cesium, viewer} = cesiumInstance\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance = cesiumInstance\n        viewer.scene.globe.depthTestAgainstTerrain = "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.PolylineDashMaterialProperty({\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": Cesium.Color.CYAN\n        })\n      },\n      toggle (name) {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".editing = !"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".editing\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { polylines } = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v("\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" ("),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".editing){\n          polylines.push({"),a("span",{attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": []})\n        } "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (!polylines.length) {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v("\n          }\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" polyline = polylines[polylines.length - "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("]\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (polyline.positions.length === "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(") {\n            polylines.pop()\n          }\n        }\n      },\n      clear () {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".polylines = []\n      },\n      LEFT_CLICK (movement) {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (!"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".editing) {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v("\n        }\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {Cesium, viewer} = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { polylines } = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v("\n        !polylines.length && polylines.push({"),a("span",{attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": []})\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" cartesian = viewer.scene.pickPosition(movement.position)\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (!Cesium.defined(cartesian)) {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v("\n        }\n        polylines[polylines.length - "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("].positions.push(cartesian)\n      },\n      MOUSE_MOVE (movement) {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (!"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".editing) {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v("\n        }\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { polylines } = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v("\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (!polylines.length) {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v("\n        }\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" polyline = polylines[polylines.length - "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("]\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (!polyline.positions.length) {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v("\n        }\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {Cesium, viewer} = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" cartesian = viewer.scene.pickPosition(movement.endPosition)\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (!Cesium.defined(cartesian)) {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v("\n        }\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (polyline.positions.length === "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(") {\n          polyline.positions.push(cartesian)\n        }\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$set(polyline.positions, polyline.positions.length - "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", cartesian)\n      },\n      RIGHT_CLICK (movement) {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (!"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".editing) {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v("\n        }\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { polylines } = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v("\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v("(!polylines.length) {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v("\n        }\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {viewer} = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" cartesian = viewer.scene.pickPosition(movement.position)\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (!Cesium.defined(cartesian)) {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v("\n        }\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" polyline = polylines[polylines.length - "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("]\n        polyline.positions.pop()\n        polyline.positions.push(cartesian)\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (polylines.length) {\n          polylines.push({"),a("span",{attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": []})\n        }\n      },\n      readyPromise (tileset) {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance.viewer.zoomTo(tileset)\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])}]},kZ8g:function(s,t,a){"use strict";a.r(t);var n=a("+N5b"),l=a.n(n);for(var e in n)"default"!==e&&function(s){a.d(t,s,function(){return n[s]})}(e);var r=a("7Fxo"),i=a("JFUb"),v=Object(i.a)(l.a,r.a,r.b,!1,null,null,null);t.default=v.exports},lOFu:function(s,t,a){s.exports=a("kZ8g")}}]);