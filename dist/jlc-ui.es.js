import './style.css';
import { defineComponent, openBlock, createElementBlock, renderSlot } from "vue";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  emits: ["click"],
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: "jlc-button",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]);
    };
  }
});
var JlcButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b31672aa"]]);
const JlcButtonPlugin = {
  install(app) {
    app.component("jlc-button", JlcButton);
  }
};
const JLCUIPlugin = {
  install(app) {
    var _a;
    (_a = JlcButtonPlugin.install) == null ? void 0 : _a.call(JlcButtonPlugin, app);
  }
};
export { JlcButton, JlcButtonPlugin, JLCUIPlugin as default };
