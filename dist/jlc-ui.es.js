import './style.css';
import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, createCommentVNode, renderSlot } from "vue";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = {
  key: 0,
  class: "jlc-loading"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    type: {
      type: String,
      default: "default"
    },
    plain: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "normal"
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const { type, plain, size, round, disabled, circle } = props;
    const classes = computed(() => {
      return {
        [`jlc-button--${type}`]: type,
        [`jlc-button--plain`]: plain,
        [`jlc-button--${size}`]: size,
        [`jlc-button--round`]: round,
        [`is-circle`]: circle,
        [`jlc-button--disabled`]: disabled
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["jlc-button", unref(classes)])
      }, [
        __props.loading ? (openBlock(), createElementBlock("span", _hoisted_1)) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2);
    };
  }
});
var JlcButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-04afd405"]]);
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
