import { watch as Ee, ref as u, provide as G, inject as j, onUnmounted as pe, h as U, onBeforeUnmount as R, defineComponent as h, onMounted as S, markRaw as _, nextTick as f, render as mt, reactive as bt, computed as oe } from "vue";
const ue = (e, o) => {
  for (const t of Object.keys(o))
    e.on(t, o[t]);
}, ye = (e) => {
  for (const o of Object.keys(e)) {
    const t = e[o];
    t && k(t.cancel) && t.cancel();
  }
}, We = (e) => !e || typeof e.charAt != "function" ? e : e.charAt(0).toUpperCase() + e.slice(1), k = (e) => typeof e == "function", O = (e, o, t) => {
  for (const n in t) {
    const r = "set" + We(n);
    e[r] ? Ee(
      () => t[n],
      (s, l) => {
        e[r](s, l);
      }
    ) : o[r] && Ee(
      () => t[n],
      (s) => {
        o[r](s);
      }
    );
  }
}, g = (e, o, t = {}) => {
  const n = Object.assign({}, t);
  for (const r in e) {
    const s = o[r], l = e[r];
    s && (s && s.custom === !0 || l !== void 0 && (n[r] = l));
  }
  return n;
}, T = (e) => {
  const o = {}, t = {};
  for (const n in e)
    if (n.startsWith("on") && !n.startsWith("onUpdate") && n !== "onReady") {
      const r = n.slice(2).toLocaleLowerCase();
      o[r] = e[n];
    } else
      t[n] = e[n];
  return { listeners: o, attrs: t };
}, Je = async (e) => {
  const o = await Promise.all([
    import("leaflet/dist/images/marker-icon-2x.png"),
    import("leaflet/dist/images/marker-icon.png"),
    import("leaflet/dist/images/marker-shadow.png")
  ]);
  delete e.Default.prototype._getIconUrl, e.Default.mergeOptions({
    iconRetinaUrl: o[0].default,
    iconUrl: o[1].default,
    shadowUrl: o[2].default
  });
}, Y = (e) => {
  const o = u(
    (...n) => console.warn(`Method ${e} has been invoked without being replaced`)
  ), t = (...n) => o.value(...n);
  return t.wrapped = o, G(e, t), t;
}, V = (e, o) => e.wrapped.value = o, v = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || globalThis, m = (e) => {
  const o = j(e);
  if (o === void 0)
    throw new Error(
      `Attempt to inject ${e.description} before it was provided.`
    );
  return o;
}, Kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WINDOW_OR_GLOBAL: v,
  assertInject: m,
  bindEventHandlers: ue,
  cancelDebounces: ye,
  capitalizeFirstLetter: We,
  isFunction: k,
  propsBinder: O,
  propsToLeafletOptions: g,
  provideLeafletWrapper: Y,
  remapEvents: T,
  resetWebpackIcon: Je,
  updateLeafletWrapper: V
}, Symbol.toStringTag, { value: "Module" })), L = Symbol(
  "useGlobalLeaflet"
), M = Symbol("addLayer"), ee = Symbol("removeLayer"), E = Symbol(
  "registerControl"
), me = Symbol(
  "registerLayerControl"
), be = Symbol(
  "canSetParentHtml"
), ve = Symbol("setParentHtml"), ge = Symbol("setIcon"), fe = Symbol("bindPopup"), Oe = Symbol("bindTooltip"), Le = Symbol("unbindPopup"), je = Symbol("unbindTooltip"), Qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AddLayerInjection: M,
  BindPopupInjection: fe,
  BindTooltipInjection: Oe,
  CanSetParentHtmlInjection: be,
  RegisterControlInjection: E,
  RegisterLayerControlInjection: me,
  RemoveLayerInjection: ee,
  SetIconInjection: ge,
  SetParentHtmlInjection: ve,
  UnbindPopupInjection: Le,
  UnbindTooltipInjection: je,
  UseGlobalLeafletInjection: L
}, Symbol.toStringTag, { value: "Module" })), H = {
  options: {
    type: Object,
    default: () => ({}),
    custom: !0
  }
}, W = (e) => ({ options: e.options, methods: {} }), vt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  componentProps: H,
  setupComponent: W
}, Symbol.toStringTag, { value: "Module" })), q = Object.assign(
  {},
  H,
  {
    pane: {
      type: String
    },
    attribution: {
      type: String
    },
    name: {
      type: String,
      custom: !0
    },
    layerType: {
      type: String,
      custom: !0
    },
    visible: {
      type: Boolean,
      custom: !0,
      default: !0
    }
  }
), J = (e, o, t) => {
  const n = m(M), r = m(ee), { options: s, methods: l } = W(e), a = g(
    e,
    q,
    s
  ), i = () => n({ leafletObject: o.value }), c = () => r({ leafletObject: o.value }), d = Object.assign(
    {},
    l,
    {
      setAttribution(y) {
        c(), o.value.options.attribution = y, e.visible && i();
      },
      setName() {
        c(), e.visible && i();
      },
      setLayerType() {
        c(), e.visible && i();
      },
      setVisible(y) {
        o.value && (y ? i() : c());
      },
      bindPopup(y) {
        if (!o.value || !k(o.value.bindPopup)) {
          console.warn(
            "Attempt to bind popup before bindPopup method available on layer."
          );
          return;
        }
        o.value.bindPopup(y);
      },
      bindTooltip(y) {
        if (!o.value || !k(o.value.bindTooltip)) {
          console.warn(
            "Attempt to bind tooltip before bindTooltip method available on layer."
          );
          return;
        }
        o.value.bindTooltip(y);
      },
      unbindTooltip() {
        o.value && (k(o.value.closeTooltip) && o.value.closeTooltip(), k(o.value.unbindTooltip) && o.value.unbindTooltip());
      },
      unbindPopup() {
        o.value && (k(o.value.closePopup) && o.value.closePopup(), k(o.value.unbindPopup) && o.value.unbindPopup());
      },
      updateVisibleProp(y) {
        t.emit("update:visible", y);
      }
    }
  );
  return G(fe, d.bindPopup), G(Oe, d.bindTooltip), G(Le, d.unbindPopup), G(je, d.unbindTooltip), pe(() => {
    d.unbindPopup(), d.unbindTooltip(), c();
  }), { options: a, methods: d };
}, A = (e, o) => {
  if (e && o.default)
    return U("div", { style: { display: "none" } }, o.default());
}, gt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  layerProps: q,
  render: A,
  setupLayer: J
}, Symbol.toStringTag, { value: "Module" })), he = Object.assign({}, q, {
  interactive: {
    type: Boolean,
    default: void 0
  },
  bubblingMouseEvents: {
    type: Boolean,
    default: void 0
  }
}), Ke = (e, o, t) => {
  const { options: n, methods: r } = J(
    e,
    o,
    t
  );
  return { options: g(
    e,
    he,
    n
  ), methods: r };
}, ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  interactiveLayerProps: he,
  setupInteractiveLayer: Ke
}, Symbol.toStringTag, { value: "Module" })), ne = Object.assign(
  {},
  he,
  {
    stroke: {
      type: Boolean,
      default: void 0
    },
    color: {
      type: String
    },
    weight: {
      type: Number
    },
    opacity: {
      type: Number
    },
    lineCap: {
      type: String
    },
    lineJoin: {
      type: String
    },
    dashArray: {
      type: String
    },
    dashOffset: {
      type: String
    },
    fill: {
      type: Boolean,
      default: void 0
    },
    fillColor: {
      type: String
    },
    fillOpacity: {
      type: Number
    },
    fillRule: {
      type: String
    },
    className: {
      type: String
    }
  }
), Se = (e, o, t) => {
  const { options: n, methods: r } = Ke(e, o, t), s = g(
    e,
    ne,
    n
  ), l = m(ee), a = Object.assign(
    {},
    r,
    {
      setStroke(i) {
        o.value.setStyle({ stroke: i });
      },
      setColor(i) {
        o.value.setStyle({ color: i });
      },
      setWeight(i) {
        o.value.setStyle({ weight: i });
      },
      setOpacity(i) {
        o.value.setStyle({ opacity: i });
      },
      setLineCap(i) {
        o.value.setStyle({ lineCap: i });
      },
      setLineJoin(i) {
        o.value.setStyle({ lineJoin: i });
      },
      setDashArray(i) {
        o.value.setStyle({ dashArray: i });
      },
      setDashOffset(i) {
        o.value.setStyle({ dashOffset: i });
      },
      setFill(i) {
        o.value.setStyle({ fill: i });
      },
      setFillColor(i) {
        o.value.setStyle({ fillColor: i });
      },
      setFillOpacity(i) {
        o.value.setStyle({ fillOpacity: i });
      },
      setFillRule(i) {
        o.value.setStyle({ fillRule: i });
      },
      setClassName(i) {
        o.value.setStyle({ className: i });
      }
    }
  );
  return R(() => {
    l({ leafletObject: o.value });
  }), { options: s, methods: a };
}, Ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pathProps: ne,
  setupPath: Se
}, Symbol.toStringTag, { value: "Module" })), se = Object.assign({}, ne, {
  /**
   * Radius of the marker in pixels.
   */
  radius: {
    type: Number
  },
  latLng: {
    type: [Object, Array],
    required: !0,
    custom: !0
  }
}), _e = (e, o, t) => {
  const { options: n, methods: r } = Se(
    e,
    o,
    t
  ), s = g(
    e,
    se,
    n
  ), l = Object.assign({}, r, {
    setRadius(a) {
      o.value.setRadius(a);
    },
    setLatLng(a) {
      o.value.setLatLng(a);
    }
  });
  return { options: s, methods: l };
}, Lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  circleMarkerProps: se,
  setupCircleMarker: _e
}, Symbol.toStringTag, { value: "Module" })), Pe = Object.assign({}, se, {
  /**
   * Radius of the circle in meters.
   */
  radius: {
    type: Number
  }
}), Qe = (e, o, t) => {
  const { options: n, methods: r } = _e(e, o, t), s = g(
    e,
    Pe,
    n
  ), l = Object.assign({}, r);
  return { options: s, methods: l };
}, jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  circleProps: Pe,
  setupCircle: Qe
}, Symbol.toStringTag, { value: "Module" })), Xt = h({
  name: "LCircle",
  props: Pe,
  setup(e, o) {
    const t = u(), n = u(!1), r = j(L), s = m(M), { options: l, methods: a } = Qe(e, t, o);
    return S(async () => {
      const { circle: i } = r ? v.L : await import("leaflet/dist/leaflet-src.esm");
      if (!e.latLng)
        return console.error("LCircle: latLng prop is required");
      t.value = _(i(e.latLng, l));
      const { listeners: c } = T(o.attrs);
      t.value.on(c), O(a, t.value, e), s(
        Object.assign({ leafletObject: t.value }, e, a)
      ), n.value = !0, f(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return A(this.ready, this.$slots);
  }
}), Yt = h({
  name: "LCircleMarker",
  props: se,
  setup(e, o) {
    const t = u(), n = u(!1), r = j(L), s = m(M), { options: l, methods: a } = _e(
      e,
      t,
      o
    );
    return S(async () => {
      const { circleMarker: i } = r ? v.L : await import("leaflet/dist/leaflet-src.esm");
      if (!e.latLng)
        return console.error("LCircleMarker: latLng prop is required");
      t.value = _(
        i(e.latLng, l)
      );
      const { listeners: c } = T(o.attrs);
      t.value.on(c), O(a, t.value, e), s(
        Object.assign({}, e, a, {
          leafletObject: t.value
        })
      ), n.value = !0, f(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return A(this.ready, this.$slots);
  }
}), D = Object.assign(
  {},
  H,
  {
    position: {
      type: String
    }
  }
), K = (e, o) => {
  const { options: t, methods: n } = W(e), r = g(
    e,
    D,
    t
  ), s = Object.assign(
    {},
    n,
    {
      setPosition(l) {
        o.value && o.value.setPosition(l);
      }
    }
  );
  return pe(() => {
    o.value && o.value.remove();
  }), { options: r, methods: s };
}, Xe = (e) => e.default ? U("div", { ref: "root" }, e.default()) : null, ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  controlProps: D,
  renderLControl: Xe,
  setupControl: K
}, Symbol.toStringTag, { value: "Module" })), Vt = h({
  name: "LControl",
  props: Object.assign(
    {
      disableClickPropagation: {
        type: Boolean,
        custom: !0,
        default: !0
      },
      disableScrollPropagation: {
        type: Boolean,
        custom: !0,
        default: !1
      },
      controlProps: D
    }
  ),
  setup(e, o) {
    const t = u(), n = u(), r = j(L), s = m(E), { options: l, methods: a } = K(e, t);
    return S(async () => {
      const { Control: i, DomEvent: c } = r ? v.L : await import("leaflet/dist/leaflet-src.esm"), d = i.extend({
        onAdd() {
          return n.value;
        }
      });
      t.value = _(new d(l)), O(a, t.value, e), s({ leafletObject: t.value }), e.disableClickPropagation && n.value && c.disableClickPropagation(n.value), e.disableScrollPropagation && n.value && c.disableScrollPropagation(n.value), f(() => o.emit("ready", t.value));
    }), { root: n, leafletObject: t };
  },
  render() {
    return Xe(this.$slots);
  }
}), Ce = Object.assign(
  {},
  D,
  {
    prefix: {
      type: String
    }
  }
), Ye = (e, o) => {
  const { options: t, methods: n } = K(
    e,
    o
  ), r = g(
    e,
    Ce,
    t
  ), s = Object.assign(
    {},
    n,
    {
      setPrefix(l) {
        o.value.setPrefix(l);
      }
    }
  );
  return { options: r, methods: s };
}, St = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  controlAttributionProps: Ce,
  setupControlAttribution: Ye
}, Symbol.toStringTag, { value: "Module" })), xt = h({
  name: "LControlAttribution",
  props: Ce,
  setup(e, o) {
    const t = u(), n = j(L), r = m(E), { options: s, methods: l } = Ye(e, t);
    return S(async () => {
      const { control: a } = n ? v.L : await import("leaflet/dist/leaflet-src.esm");
      t.value = _(
        a.attribution(s)
      ), O(l, t.value, e), r({ leafletObject: t.value }), f(() => o.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
}), Te = Object.assign(
  {},
  D,
  {
    collapsed: {
      type: Boolean,
      default: void 0
    },
    autoZIndex: {
      type: Boolean,
      default: void 0
    },
    hideSingleBase: {
      type: Boolean,
      default: void 0
    },
    sortLayers: {
      type: Boolean,
      default: void 0
    },
    sortFunction: {
      type: Function
    }
  }
), Ve = (e, o) => {
  const { options: t } = K(e, o);
  return { options: g(
    e,
    Te,
    t
  ), methods: {
    addLayer(s) {
      s.layerType === "base" ? o.value.addBaseLayer(s.leafletObject, s.name) : s.layerType === "overlay" && o.value.addOverlay(s.leafletObject, s.name);
    },
    removeLayer(s) {
      o.value.removeLayer(s.leafletObject);
    }
  } };
}, _t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  controlLayersProps: Te,
  setupControlLayers: Ve
}, Symbol.toStringTag, { value: "Module" })), Rt = h({
  name: "LControlLayers",
  props: Te,
  setup(e, o) {
    const t = u(), n = j(L), r = m(me), { options: s, methods: l } = Ve(e, t);
    return S(async () => {
      const { control: a } = n ? v.L : await import("leaflet/dist/leaflet-src.esm");
      t.value = _(
        a.layers(void 0, void 0, s)
      ), O(l, t.value, e), r(
        Object.assign({}, e, l, { leafletObject: t.value })
      ), f(() => o.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
}), Me = Object.assign(
  {},
  D,
  {
    maxWidth: {
      type: Number
    },
    metric: {
      type: Boolean,
      default: void 0
    },
    imperial: {
      type: Boolean,
      default: void 0
    },
    updateWhenIdle: {
      type: Boolean,
      default: void 0
    }
  }
), xe = (e, o) => {
  const { options: t, methods: n } = K(
    e,
    o
  );
  return { options: g(
    e,
    Me,
    t
  ), methods: n };
}, Pt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  controlScaleProps: Me,
  setupControlScale: xe
}, Symbol.toStringTag, { value: "Module" })), eo = h({
  name: "LControlScale",
  props: Me,
  setup(e, o) {
    const t = u(), n = j(L), r = m(E), { options: s, methods: l } = xe(e, t);
    return S(async () => {
      const { control: a } = n ? v.L : await import("leaflet/dist/leaflet-src.esm");
      t.value = _(a.scale(s)), O(l, t.value, e), r({ leafletObject: t.value }), f(() => o.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
}), Be = Object.assign(
  {},
  D,
  {
    zoomInText: {
      type: String
    },
    zoomInTitle: {
      type: String
    },
    zoomOutText: {
      type: String
    },
    zoomOutTitle: {
      type: String
    }
  }
), Re = (e, o) => {
  const { options: t, methods: n } = K(
    e,
    o
  );
  return { options: g(
    e,
    Be,
    t
  ), methods: n };
}, Ct = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  controlZoomProps: Be,
  setupControlZoom: Re
}, Symbol.toStringTag, { value: "Module" })), to = h({
  name: "LControlZoom",
  props: Be,
  setup(e, o) {
    const t = u(), n = j(L), r = m(E), { options: s, methods: l } = Re(e, t);
    return S(async () => {
      const { control: a } = n ? v.L : await import("leaflet/dist/leaflet-src.esm");
      t.value = _(a.zoom(s)), O(l, t.value, e), r({ leafletObject: t.value }), f(() => o.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
}), te = Object.assign({}, q), re = (e, o, t) => {
  const { options: n, methods: r } = J(
    e,
    o,
    t
  ), s = g(
    e,
    te,
    n
  ), l = Object.assign(
    {},
    r,
    {
      addLayer(a) {
        o.value.addLayer(a.leafletObject);
      },
      removeLayer(a) {
        o.value.removeLayer(a.leafletObject);
      }
    }
  );
  return G(M, l.addLayer), G(ee, l.removeLayer), { options: s, methods: l };
}, Tt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  layerGroupProps: te,
  setupLayerGroup: re
}, Symbol.toStringTag, { value: "Module" })), we = Object.assign(
  {},
  te
), et = (e, o, t) => {
  const { options: n, methods: r } = re(
    e,
    o,
    t
  ), s = g(
    e,
    we,
    n
  ), l = Object.assign({}, r);
  return { options: s, methods: l };
}, Mt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  featureGroupProps: we,
  setupFeatureGroup: et
}, Symbol.toStringTag, { value: "Module" })), oo = h({
  props: we,
  setup(e, o) {
    const t = u(), n = u(!1), r = j(L), s = m(M), { methods: l, options: a } = et(
      e,
      t,
      o
    );
    return S(async () => {
      const { featureGroup: i } = r ? v.L : await import("leaflet/dist/leaflet-src.esm");
      t.value = _(
        i(void 0, a)
      );
      const { listeners: c } = T(o.attrs);
      t.value.on(c), O(l, t.value, e), s(
        Object.assign({}, e, l, { leafletObject: t.value })
      ), n.value = !0, f(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return A(this.ready, this.$slots);
  }
}), Ie = Object.assign(
  {},
  te,
  {
    geojson: {
      type: [Object, Array],
      custom: !0
    },
    optionsStyle: {
      type: Function,
      custom: !0
    }
  }
), tt = (e, o, t) => {
  const { options: n, methods: r } = re(
    e,
    o,
    t
  ), s = g(
    e,
    Ie,
    n
  );
  Object.prototype.hasOwnProperty.call(e, "optionsStyle") && (s.style = e.optionsStyle);
  const l = Object.assign(
    {},
    r,
    {
      setGeojson(a) {
        o.value.clearLayers(), o.value.addData(a);
      },
      setOptionsStyle(a) {
        o.value.setStyle(a);
      },
      getGeoJSONData() {
        return o.value.toGeoJSON();
      },
      getBounds() {
        return o.value.getBounds();
      }
    }
  );
  return { options: s, methods: l };
}, Bt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  geoJSONProps: Ie,
  setupGeoJSON: tt
}, Symbol.toStringTag, { value: "Module" })), no = h({
  props: Ie,
  setup(e, o) {
    const t = u(), n = u(!1), r = j(L), s = m(M), { methods: l, options: a } = tt(e, t, o);
    return S(async () => {
      const { geoJSON: i } = r ? v.L : await import("leaflet/dist/leaflet-src.esm");
      t.value = _(i(e.geojson, a));
      const { listeners: c } = T(o.attrs);
      t.value.on(c), O(l, t.value, e), s(
        Object.assign({}, e, l, { leafletObject: t.value })
      ), n.value = !0, f(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return A(this.ready, this.$slots);
  }
}), ae = Object.assign(
  {},
  q,
  {
    opacity: {
      type: Number
    },
    zIndex: {
      type: Number
    },
    tileSize: {
      type: [Number, Array, Object]
    },
    noWrap: {
      type: Boolean,
      default: void 0
    },
    minZoom: {
      type: Number
    },
    maxZoom: {
      type: Number
    },
    className: {
      type: String
    }
  }
), Ge = (e, o, t) => {
  const { options: n, methods: r } = J(
    e,
    o,
    t
  ), s = g(
    e,
    ae,
    n
  ), l = Object.assign(
    {},
    r,
    {
      setTileComponent() {
        var a;
        (a = o.value) == null || a.redraw();
      }
    }
  );
  return pe(() => {
    o.value.off();
  }), { options: s, methods: l };
}, ot = (e, o, t, n) => e.extend({
  initialize(r) {
    this.tileComponents = {}, this.on("tileunload", this._unloadTile), t.setOptions(this, r);
  },
  createTile(r) {
    const s = this._tileCoordsToKey(r);
    this.tileComponents[s] = o.create("div");
    const l = U({ setup: n, props: ["coords"] }, { coords: r });
    return mt(l, this.tileComponents[s]), this.tileComponents[s];
  },
  _unloadTile(r) {
    const s = this._tileCoordsToKey(r.coords);
    this.tileComponents[s] && (this.tileComponents[s].innerHTML = "", this.tileComponents[s] = void 0);
  }
}), wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CreateVueGridLayer: ot,
  gridLayerProps: ae,
  setupGridLayer: Ge
}, Symbol.toStringTag, { value: "Module" })), so = h({
  props: Object.assign({}, ae, {
    childRender: {
      type: Function,
      required: !0
    }
  }),
  setup(e, o) {
    const t = u(), n = u(null), r = u(!1), s = j(L), l = m(M), { options: a, methods: i } = Ge(e, t, o);
    return S(async () => {
      const { GridLayer: c, DomUtil: d, Util: y } = s ? v.L : await import("leaflet/dist/leaflet-src.esm");
      if (!e.childRender)
        return console.error("LGridLayer: childRender prop is required");
      const w = ot(
        c,
        d,
        y,
        e.childRender
      );
      t.value = _(new w(a));
      const { listeners: b } = T(o.attrs);
      t.value.on(b), O(i, t.value, e), l(
        Object.assign({}, e, i, {
          leafletObject: t.value
        })
      ), r.value = !0, f(() => o.emit("ready", t.value));
    }), { root: n, ready: r, leafletObject: t };
  },
  render() {
    return this.ready ? U("div", { style: { display: "none" }, ref: "root" }) : null;
  }
}), de = {
  iconUrl: {
    type: String
  },
  iconRetinaUrl: {
    type: String
  },
  iconSize: {
    type: [Object, Array]
  },
  iconAnchor: {
    type: [Object, Array]
  },
  popupAnchor: {
    type: [Object, Array]
  },
  tooltipAnchor: {
    type: [Object, Array]
  },
  shadowUrl: {
    type: String
  },
  shadowRetinaUrl: {
    type: String
  },
  shadowSize: {
    type: [Object, Array]
  },
  shadowAnchor: {
    type: [Object, Array]
  },
  bgPos: {
    type: [Object, Array]
  },
  className: {
    type: String
  }
}, It = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  iconProps: de
}, Symbol.toStringTag, { value: "Module" })), ro = h({
  name: "LIcon",
  props: { ...de, ...H },
  setup(e, o) {
    const t = u(), n = j(L), r = m(be), s = m(ve), l = m(ge);
    let a, i, c, d, y;
    const w = (N, P, B) => {
      const I = N && N.innerHTML;
      if (!P) {
        B && y && r() && s(I);
        return;
      }
      const { listeners: Z } = T(o.attrs);
      y && i(y, Z);
      const { options: ce } = W(e), $ = g(
        e,
        de,
        ce
      );
      I && ($.html = I), y = $.html ? c($) : d($), a(y, Z), l(y);
    }, b = () => {
      f(() => w(t.value, !0, !1));
    }, z = () => {
      f(() => w(t.value, !1, !0));
    }, F = {
      setIconUrl: b,
      setIconRetinaUrl: b,
      setIconSize: b,
      setIconAnchor: b,
      setPopupAnchor: b,
      setTooltipAnchor: b,
      setShadowUrl: b,
      setShadowRetinaUrl: b,
      setShadowAnchor: b,
      setBgPos: b,
      setClassName: b,
      setHtml: b
    };
    return S(async () => {
      const {
        DomEvent: N,
        divIcon: P,
        icon: B
      } = n ? v.L : await import("leaflet/dist/leaflet-src.esm");
      a = N.on, i = N.off, c = P, d = B, O(F, {}, e), new MutationObserver(z).observe(t.value, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      }), b();
    }), { root: t };
  },
  render() {
    const e = this.$slots.default ? this.$slots.default() : void 0;
    return U("div", { ref: "root" }, e);
  }
}), Ae = Object.assign(
  {},
  q,
  {
    opacity: {
      type: Number
    },
    alt: {
      type: String
    },
    interactive: {
      type: Boolean,
      default: void 0
    },
    crossOrigin: {
      type: Boolean,
      default: void 0
    },
    errorOverlayUrl: {
      type: String
    },
    zIndex: {
      type: Number
    },
    className: {
      type: String
    },
    url: {
      type: String,
      required: !0,
      custom: !0
    },
    bounds: {
      type: [Array, Object],
      required: !0,
      custom: !0
    }
  }
), nt = (e, o, t) => {
  const { options: n, methods: r } = J(
    e,
    o,
    t
  ), s = g(
    e,
    Ae,
    n
  ), l = Object.assign(
    {},
    r,
    {
      setOpacity(a) {
        return o.value.setOpacity(a);
      },
      setUrl(a) {
        return o.value.setUrl(a);
      },
      setBounds(a) {
        return o.value.setBounds(a);
      },
      getBounds() {
        return o.value.getBounds();
      },
      getElement() {
        return o.value.getElement();
      },
      bringToFront() {
        return o.value.bringToFront();
      },
      bringToBack() {
        return o.value.bringToBack();
      },
      setZIndex(a) {
        return o.value.setZIndex(a);
      }
    }
  );
  return { options: s, methods: l };
}, Gt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  imageOverlayProps: Ae,
  setupImageOverlay: nt
}, Symbol.toStringTag, { value: "Module" })), ao = h({
  name: "LImageOverlay",
  props: Ae,
  setup(e, o) {
    const t = u(), n = u(!1), r = j(L), s = m(M), { options: l, methods: a } = nt(
      e,
      t,
      o
    );
    return S(async () => {
      const { imageOverlay: i } = r ? v.L : await import("leaflet/dist/leaflet-src.esm");
      if (!e.url)
        return console.error("LImageOverlay: url prop is required");
      if (!e.bounds)
        return console.error("LImageOverlay: bounds prop is required");
      t.value = _(
        i(e.url, e.bounds, l)
      );
      const { listeners: c } = T(o.attrs);
      t.value.on(c), O(a, t.value, e), s(
        Object.assign({}, e, a, {
          leafletObject: t.value
        })
      ), n.value = !0, f(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return A(this.ready, this.$slots);
  }
}), lo = h({
  props: te,
  setup(e, o) {
    const t = u(), n = u(!1), r = j(L), s = m(M), { methods: l } = re(e, t, o);
    return S(async () => {
      const { layerGroup: a } = r ? v.L : await import("leaflet/dist/leaflet-src.esm");
      t.value = _(
        a(void 0, e.options)
      );
      const { listeners: i } = T(o.attrs);
      t.value.on(i), O(l, t.value, e), s(
        Object.assign({}, e, l, { leafletObject: t.value })
      ), n.value = !0, f(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return A(this.ready, this.$slots);
  }
});
function st(e, o, t) {
  var n, r, s;
  o === void 0 && (o = 50), t === void 0 && (t = {});
  var l = (n = t.isImmediate) != null && n, a = (r = t.callback) != null && r, i = t.maxWait, c = Date.now(), d = [];
  function y() {
    if (i !== void 0) {
      var b = Date.now() - c;
      if (b + o >= i)
        return i - b;
    }
    return o;
  }
  var w = function() {
    var b = [].slice.call(arguments), z = this;
    return new Promise(function(F, N) {
      var P = l && s === void 0;
      if (s !== void 0 && clearTimeout(s), s = setTimeout(function() {
        if (s = void 0, c = Date.now(), !l) {
          var I = e.apply(z, b);
          a && a(I), d.forEach(function(Z) {
            return (0, Z.resolve)(I);
          }), d = [];
        }
      }, y()), P) {
        var B = e.apply(z, b);
        return a && a(B), F(B);
      }
      d.push({ resolve: F, reject: N });
    });
  };
  return w.cancel = function(b) {
    s !== void 0 && clearTimeout(s), d.forEach(function(z) {
      return (0, z.reject)(b);
    }), d = [];
  }, w;
}
const He = Object.assign(
  {},
  H,
  {
    /**
     * The center of the map, supports .sync modifier
     */
    center: {
      type: [Object, Array]
    },
    /**
     * The bounds of the map, supports .sync modifier
     */
    bounds: {
      type: [Array, Object]
    },
    /**
     * The max bounds of the map
     */
    maxBounds: {
      type: [Array, Object]
    },
    /**
     * The zoom of the map, supports .sync modifier
     */
    zoom: {
      type: Number
    },
    /**
     * The minZoom of the map
     */
    minZoom: {
      type: Number
    },
    /**
     * The maxZoom of the map
     */
    maxZoom: {
      type: Number
    },
    /**
     * The paddingBottomRight of the map
     */
    paddingBottomRight: {
      type: [Object, Array]
    },
    /**
     * The paddingTopLeft of the map
     */
    paddingTopLeft: {
      type: Object
    },
    /**
     * The padding of the map
     */
    padding: {
      type: Object
    },
    /**
     * The worldCopyJump option for the map
     */
    worldCopyJump: {
      type: Boolean,
      default: void 0
    },
    /**
     * The CRS to use for the map. Can be an object that defines a coordinate reference
     * system for projecting geographical points into screen coordinates and back
     * (see https://leafletjs.com/reference-1.7.1.html#crs-l-crs-base), or a string
     * name identifying one of Leaflet's defined CRSs, such as "EPSG4326".
     */
    crs: {
      type: [String, Object]
    },
    maxBoundsViscosity: {
      type: Number
    },
    inertia: {
      type: Boolean,
      default: void 0
    },
    inertiaDeceleration: {
      type: Number
    },
    inertiaMaxSpeed: {
      type: Number
    },
    easeLinearity: {
      type: Number
    },
    zoomAnimation: {
      type: Boolean,
      default: void 0
    },
    zoomAnimationThreshold: {
      type: Number
    },
    fadeAnimation: {
      type: Boolean,
      default: void 0
    },
    markerZoomAnimation: {
      type: Boolean,
      default: void 0
    },
    noBlockingAnimations: {
      type: Boolean,
      default: void 0
    },
    useGlobalLeaflet: {
      type: Boolean,
      default: !0,
      custom: !0
    }
  }
), io = h({
  inheritAttrs: !1,
  emits: ["ready", "update:zoom", "update:center", "update:bounds"],
  props: He,
  setup(e, o) {
    const t = u(), n = bt({
      ready: !1,
      layersToAdd: [],
      layersInControl: []
    }), { options: r } = W(e), s = g(
      e,
      He,
      r
    ), { listeners: l, attrs: a } = T(o.attrs), i = Y(M), c = Y(ee), d = Y(E), y = Y(
      me
    );
    G(L, e.useGlobalLeaflet);
    const w = oe(() => {
      const P = {};
      return e.noBlockingAnimations && (P.animate = !1), P;
    }), b = oe(() => {
      const P = w.value;
      return e.padding && (P.padding = e.padding), e.paddingTopLeft && (P.paddingTopLeft = e.paddingTopLeft), e.paddingBottomRight && (P.paddingBottomRight = e.paddingBottomRight), P;
    }), z = {
      moveend: st((P) => {
        n.leafletRef && (o.emit("update:zoom", n.leafletRef.getZoom()), o.emit("update:center", n.leafletRef.getCenter()), o.emit("update:bounds", n.leafletRef.getBounds()));
      }),
      overlayadd(P) {
        const B = n.layersInControl.find((I) => I.name === P.name);
        B && B.updateVisibleProp(!0);
      },
      overlayremove(P) {
        const B = n.layersInControl.find((I) => I.name === P.name);
        B && B.updateVisibleProp(!1);
      }
    };
    S(async () => {
      e.useGlobalLeaflet && (v.L = v.L || await import("leaflet"));
      const { map: P, CRS: B, Icon: I, latLngBounds: Z, latLng: ce, stamp: $ } = e.useGlobalLeaflet ? v.L : await import("leaflet/dist/leaflet-src.esm");
      try {
        s.beforeMapMount && await s.beforeMapMount();
      } catch (p) {
        console.error(
          `The following error occurred running the provided beforeMapMount hook ${p.message}`
        );
      }
      await Je(I);
      const yt = typeof s.crs == "string" ? B[s.crs] : s.crs;
      s.crs = yt || B.EPSG3857;
      const Q = {
        addLayer(p) {
          p.layerType !== void 0 && (n.layerControl === void 0 ? n.layersToAdd.push(p) : n.layersInControl.find(
            (X) => $(X.leafletObject) === $(p.leafletObject)
          ) || (n.layerControl.addLayer(p), n.layersInControl.push(p))), p.visible !== !1 && n.leafletRef.addLayer(p.leafletObject);
        },
        removeLayer(p) {
          p.layerType !== void 0 && (n.layerControl === void 0 ? n.layersToAdd = n.layersToAdd.filter(
            (C) => C.name !== p.name
          ) : (n.layerControl.removeLayer(p.leafletObject), n.layersInControl = n.layersInControl.filter(
            (C) => $(C.leafletObject) !== $(p.leafletObject)
          ))), n.leafletRef.removeLayer(p.leafletObject);
        },
        registerLayerControl(p) {
          n.layerControl = p, n.layersToAdd.forEach((C) => {
            n.layerControl.addLayer(C);
          }), n.layersToAdd = [], d(p);
        },
        registerControl(p) {
          n.leafletRef.addControl(p.leafletObject);
        },
        setZoom(p) {
          const C = n.leafletRef.getZoom();
          p !== C && n.leafletRef.setZoom(p, w.value);
        },
        setCrs(p) {
          const C = n.leafletRef.getBounds();
          n.leafletRef.options.crs = p, n.leafletRef.fitBounds(C, {
            animate: !1,
            padding: [0, 0]
          });
        },
        fitBounds(p) {
          n.leafletRef.fitBounds(p, b.value);
        },
        setBounds(p) {
          if (!p)
            return;
          const C = Z(p);
          if (!C.isValid())
            return;
          !(n.lastSetBounds || n.leafletRef.getBounds()).equals(C, 0) && (n.lastSetBounds = C, n.leafletRef.fitBounds(C));
        },
        setCenter(p) {
          if (p == null)
            return;
          const C = ce(p), X = n.lastSetCenter || n.leafletRef.getCenter();
          (X.lat !== C.lat || X.lng !== C.lng) && (n.lastSetCenter = C, n.leafletRef.panTo(C, w.value));
        }
      };
      V(i, Q.addLayer), V(c, Q.removeLayer), V(d, Q.registerControl), V(y, Q.registerLayerControl), n.leafletRef = _(P(t.value, s)), O(Q, n.leafletRef, e), ue(n.leafletRef, z), ue(n.leafletRef, l), n.ready = !0, f(() => o.emit("ready", n.leafletRef));
    }), R(() => {
      ye(z), n.leafletRef && (n.leafletRef.off(), n.leafletRef.remove());
    });
    const F = oe(() => n.leafletRef), N = oe(() => n.ready);
    return { root: t, ready: N, leafletObject: F, attrs: a };
  },
  render({ attrs: e }) {
    return e.style || (e.style = {}), e.style.width || (e.style.width = "100%"), e.style.height || (e.style.height = "100%"), U(
      "div",
      Object.assign(
        {},
        e,
        { ref: "root" }
      ),
      this.ready && this.$slots.default ? this.$slots.default() : {}
    );
  }
}), At = ["Symbol(Comment)", "Symbol(Text)"], zt = ["LTooltip", "LPopup"], ze = Object.assign(
  {},
  q,
  {
    draggable: {
      type: Boolean,
      default: void 0
    },
    icon: {
      type: [Object]
    },
    zIndexOffset: {
      type: Number
    },
    latLng: {
      type: [Object, Array],
      custom: !0,
      required: !0
    }
  }
), rt = (e, o, t) => {
  const { options: n, methods: r } = J(
    e,
    o,
    t
  ), s = g(
    e,
    ze,
    n
  ), l = Object.assign(
    {},
    r,
    {
      setDraggable(a) {
        o.value.dragging && (a ? o.value.dragging.enable() : o.value.dragging.disable());
      },
      latLngSync(a) {
        t.emit("update:latLng", a.latlng), t.emit("update:lat-lng", a.latlng);
      },
      setLatLng(a) {
        if (a != null && o.value) {
          const i = o.value.getLatLng();
          (!i || !i.equals(a)) && o.value.setLatLng(a);
        }
      }
    }
  );
  return { options: s, methods: l };
}, at = (e, o) => {
  const t = o.slots.default && o.slots.default();
  return t && t.length && t.some(Nt);
};
function Nt(e) {
  return !(At.includes(e.type.toString()) || zt.includes(e.type.name));
}
const $t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  markerProps: ze,
  setupMarker: rt,
  shouldBlankIcon: at
}, Symbol.toStringTag, { value: "Module" })), co = h({
  name: "LMarker",
  props: ze,
  setup(e, o) {
    const t = u(), n = u(!1), r = j(L), s = m(M);
    G(
      be,
      () => {
        var c;
        return !!((c = t.value) != null && c.getElement());
      }
    ), G(ve, (c) => {
      var y, w;
      const d = k((y = t.value) == null ? void 0 : y.getElement) && ((w = t.value) == null ? void 0 : w.getElement());
      d && (d.innerHTML = c);
    }), G(
      ge,
      (c) => {
        var d;
        return ((d = t.value) == null ? void 0 : d.setIcon) && t.value.setIcon(c);
      }
    );
    const { options: l, methods: a } = rt(e, t, o), i = {
      moveHandler: st(a.latLngSync)
    };
    return S(async () => {
      const { marker: c, divIcon: d } = r ? v.L : await import("leaflet/dist/leaflet-src.esm");
      if (at(l, o) && (l.icon = d({ className: "" })), !e.latLng)
        return console.error("LMarker: latLng prop is required");
      t.value = _(c(e.latLng, l));
      const { listeners: y } = T(o.attrs);
      t.value.on(y), t.value.on("move", i.moveHandler), O(a, t.value, e), s(
        Object.assign({}, e, a, {
          leafletObject: t.value
        })
      ), n.value = !0, f(() => o.emit("ready", t.value));
    }), R(() => ye(i)), { ready: n, leafletObject: t };
  },
  render() {
    return A(this.ready, this.$slots);
  }
}), le = Object.assign(
  {},
  ne,
  {
    smoothFactor: {
      type: Number
    },
    noClip: {
      type: Boolean,
      default: void 0
    },
    latLngs: {
      type: Array,
      required: !0,
      custom: !0
    }
  }
), Ne = (e, o, t) => {
  const { options: n, methods: r } = Se(
    e,
    o,
    t
  ), s = g(
    e,
    le,
    n
  ), l = Object.assign(
    {},
    r,
    {
      setSmoothFactor(a) {
        o.value.setStyle({ smoothFactor: a });
      },
      setNoClip(a) {
        o.value.setStyle({ noClip: a });
      },
      addLatLng(a) {
        o.value.addLatLng(a);
      }
    }
  );
  return { options: s, methods: l };
}, kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  polylineProps: le,
  setupPolyline: Ne
}, Symbol.toStringTag, { value: "Module" })), x = Object.assign({}, le), $e = (e, o, t) => {
  const { options: n, methods: r } = Ne(
    e,
    o,
    t
  ), s = g(
    e,
    x,
    n
  ), l = Object.assign(
    {},
    r,
    {
      toGeoJSON(a) {
        return o.value.toGeoJSON(a);
      }
    }
  );
  return { options: s, methods: l };
}, Ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  polygonProps: x,
  setupPolygon: $e
}, Symbol.toStringTag, { value: "Module" })), uo = h({
  name: "LPolygon",
  props: x,
  setup(e, o) {
    const t = u(), n = u(!1), r = j(L), s = m(M), { options: l, methods: a } = $e(e, t, o);
    return S(async () => {
      const { polygon: i } = r ? v.L : await import("leaflet/dist/leaflet-src.esm");
      if (!e.latLngs)
        return console.error("LPolygon: latLngs prop is required");
      t.value = _(i(e.latLngs, l));
      const { listeners: c } = T(o.attrs);
      t.value.on(c), O(a, t.value, e), s(
        Object.assign({}, e, a, {
          leafletObject: t.value
        })
      ), n.value = !0, f(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return A(this.ready, this.$slots);
  }
}), po = h({
  name: "LPolyline",
  props: le,
  setup(e, o) {
    const t = u(), n = u(!1), r = j(L), s = m(M), { options: l, methods: a } = Ne(e, t, o);
    return S(async () => {
      const { polyline: i } = r ? v.L : await import("leaflet/dist/leaflet-src.esm");
      if (!e.latLngs)
        return console.error("LPolyline: latLngs prop is required");
      t.value = _(
        i(e.latLngs, l)
      );
      const { listeners: c } = T(o.attrs);
      t.value.on(c), O(a, t.value, e), s(
        Object.assign({}, e, a, {
          leafletObject: t.value
        })
      ), n.value = !0, f(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return A(this.ready, this.$slots);
  }
}), ke = Object.assign({}, H, {
  content: {
    type: String,
    default: null
  }
}), Ue = (e, o) => {
  const { options: t, methods: n } = W(e), r = Object.assign(
    {},
    n,
    {
      setContent(s) {
        o.value && s !== null && s !== void 0 && o.value.setContent(s);
      }
    }
  );
  return { options: t, methods: r };
}, qe = (e) => e.default ? U("div", { ref: "root" }, e.default()) : null, qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  popperProps: ke,
  render: qe,
  setupPopper: Ue
}, Symbol.toStringTag, { value: "Module" })), lt = Object.assign({}, ke, {
  latLng: {
    type: [Object, Array],
    default: () => []
  }
}), it = (e, o) => {
  const { options: t, methods: n } = Ue(e, o);
  return { options: t, methods: n };
}, Dt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  popupProps: lt,
  setupPopup: it
}, Symbol.toStringTag, { value: "Module" })), yo = h({
  name: "LPopup",
  props: lt,
  setup(e, o) {
    const t = u(), n = u(null), r = j(L), s = m(fe), l = m(Le), { options: a, methods: i } = it(e, t);
    return S(async () => {
      const { popup: c } = r ? v.L : await import("leaflet/dist/leaflet-src.esm");
      t.value = _(c(a)), e.latLng !== void 0 && t.value.setLatLng(e.latLng), O(i, t.value, e);
      const { listeners: d } = T(o.attrs);
      t.value.on(d), t.value.setContent(e.content || n.value || ""), s(t.value), f(() => o.emit("ready", t.value));
    }), R(() => {
      l();
    }), { root: n, leafletObject: t };
  },
  render() {
    return qe(this.$slots);
  }
}), De = Object.assign({}, x, {
  latLngs: Object.assign({}, x.latLngs, { required: !1 }),
  bounds: {
    type: Object,
    custom: !0
  }
}), ct = (e, o, t) => {
  const { options: n, methods: r } = $e(
    e,
    o,
    t
  ), s = g(
    e,
    De,
    n
  ), l = Object.assign(
    {},
    r,
    {
      setBounds(a) {
        o.value.setBounds(a);
      },
      setLatLngs(a) {
        o.value.setBounds(a);
      }
    }
  );
  return { options: s, methods: l };
}, Ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  rectangleProps: De,
  setupRectangle: ct
}, Symbol.toStringTag, { value: "Module" })), mo = h({
  name: "LRectangle",
  props: De,
  setup(e, o) {
    const t = u(), n = u(!1), r = j(L), s = m(M), { options: l, methods: a } = ct(e, t, o);
    return S(async () => {
      const { rectangle: i, latLngBounds: c } = r ? v.L : await import("leaflet/dist/leaflet-src.esm"), d = e.bounds ? c(e.bounds) : c(e.latLngs || []);
      t.value = _(i(d, l));
      const { listeners: y } = T(o.attrs);
      t.value.on(y), O(a, t.value, e), s(
        Object.assign({}, e, a, { leafletObject: t.value })
      ), n.value = !0, f(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return A(this.ready, this.$slots);
  }
}), ie = Object.assign(
  {},
  ae,
  {
    tms: {
      type: Boolean,
      default: void 0
    },
    subdomains: {
      type: [String, Array],
      validator: (e) => typeof e == "string" ? !0 : Array.isArray(e) ? e.every((o) => typeof o == "string") : !1
    },
    detectRetina: {
      type: Boolean,
      default: void 0
    },
    url: {
      type: String,
      required: !0,
      custom: !0
    }
  }
), Fe = (e, o, t) => {
  const { options: n, methods: r } = Ge(e, o, t), s = g(
    e,
    ie,
    n
  ), l = Object.assign({}, r);
  return { options: s, methods: l };
}, Zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  setupTileLayer: Fe,
  tileLayerProps: ie
}, Symbol.toStringTag, { value: "Module" })), bo = h({
  props: ie,
  setup(e, o) {
    const t = u(), n = j(L), r = m(M), { options: s, methods: l } = Fe(e, t, o);
    return S(async () => {
      const { tileLayer: a } = n ? v.L : await import("leaflet/dist/leaflet-src.esm");
      if (!e.url)
        return console.error("LTileLayer: url prop is required");
      t.value = _(a(e.url, s));
      const { listeners: i } = T(o.attrs);
      t.value.on(i), O(l, t.value, e), r({
        ...e,
        ...l,
        leafletObject: t.value
      }), f(() => o.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
}), ut = Object.assign({}, ke), dt = (e, o) => {
  const { options: t, methods: n } = Ue(e, o), r = m(je);
  return R(() => {
    r();
  }), { options: t, methods: n };
}, Et = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  setupTooltip: dt,
  tooltipProps: ut
}, Symbol.toStringTag, { value: "Module" })), vo = h({
  name: "LTooltip",
  props: ut,
  setup(e, o) {
    const t = u(), n = u(null), r = j(L), s = m(Oe), { options: l, methods: a } = dt(e, t);
    return S(async () => {
      const { tooltip: i } = r ? v.L : await import("leaflet/dist/leaflet-src.esm");
      t.value = _(i(l)), O(a, t.value, e);
      const { listeners: c } = T(o.attrs);
      t.value.on(c), t.value.setContent(e.content || n.value || ""), s(t.value), f(() => o.emit("ready", t.value));
    }), { root: n, leafletObject: t };
  },
  render() {
    return qe(this.$slots);
  }
}), Ze = Object.assign(
  {},
  ie,
  {
    layers: {
      type: String,
      required: !0
    },
    styles: {
      type: String
    },
    format: {
      type: String
    },
    transparent: {
      type: Boolean,
      default: void 0
    },
    version: {
      type: String
    },
    crs: {
      type: Object
    },
    uppercase: {
      type: Boolean,
      default: void 0
    }
  }
), pt = (e, o, t) => {
  const { options: n, methods: r } = Fe(e, o, t);
  return { options: g(
    e,
    Ze,
    n
  ), methods: Object.assign({}, r) };
}, Ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  setupWMSTileLayer: pt,
  wmsTileLayerProps: Ze
}, Symbol.toStringTag, { value: "Module" })), go = h({
  props: Ze,
  setup(e, o) {
    const t = u(), n = j(L), r = m(M), { options: s, methods: l } = pt(
      e,
      t,
      o
    );
    return S(async () => {
      const { tileLayer: a } = n ? v.L : await import("leaflet/dist/leaflet-src.esm");
      if (!e.url)
        throw new Error("url is required");
      t.value = _(
        a.wms(e.url, s)
      );
      const { listeners: i } = T(o.attrs);
      t.value.on(i), O(l, t.value, e), r(
        Object.assign({}, e, l, {
          leafletObject: t.value
        })
      ), f(() => o.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
}), fo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Circle: jt,
  CircleMarker: Lt,
  Component: vt,
  Control: ht,
  ControlAttribution: St,
  ControlLayers: _t,
  ControlScale: Pt,
  ControlZoom: Ct,
  FeatureGroup: Mt,
  GeoJSON: Bt,
  GridLayer: wt,
  Icon: It,
  ImageOverlay: Gt,
  InteractiveLayer: ft,
  Layer: gt,
  LayerGroup: Tt,
  Marker: $t,
  Path: Ot,
  Polygon: Ut,
  Polyline: kt,
  Popper: qt,
  Popup: Dt,
  Rectangle: Ft,
  TileLayer: Zt,
  Tooltip: Et,
  WmsTileLayer: Ht
}, Symbol.toStringTag, { value: "Module" }));
export {
  fo as Functions,
  Qt as InjectionKeys,
  Xt as LCircle,
  Yt as LCircleMarker,
  Vt as LControl,
  xt as LControlAttribution,
  Rt as LControlLayers,
  eo as LControlScale,
  to as LControlZoom,
  oo as LFeatureGroup,
  no as LGeoJson,
  so as LGridLayer,
  ro as LIcon,
  ao as LImageOverlay,
  lo as LLayerGroup,
  io as LMap,
  co as LMarker,
  uo as LPolygon,
  po as LPolyline,
  yo as LPopup,
  mo as LRectangle,
  bo as LTileLayer,
  vo as LTooltip,
  go as LWmsTileLayer,
  Kt as Utilities
};
