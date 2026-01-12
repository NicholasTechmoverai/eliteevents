import { _ as _sfc_main$2 } from './PageSection-CfYSZhbt.mjs';
import { _ as _export_sfc, e as _sfc_main$v, b as useAppConfig, t as tv, c as _sfc_main$k, d as _sfc_main$q } from './server.mjs';
import { defineComponent, ref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, useSlots, computed, unref, mergeProps, createCommentVNode, renderSlot, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot, ssrRenderClass } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@iconify/utils';
import 'consola';
import 'pinia';
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'aos';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'vaul-vue';
import 'reka-ui/namespaced';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const theme = {
  "slots": {
    "root": "relative isolate rounded-xl overflow-hidden",
    "container": "flex flex-col lg:grid px-6 py-12 sm:px-12 sm:py-24 lg:px-16 lg:py-24 gap-8 sm:gap-16",
    "wrapper": "",
    "header": "",
    "title": "text-3xl sm:text-4xl text-pretty tracking-tight font-bold text-highlighted",
    "description": "text-base sm:text-lg text-muted",
    "body": "mt-8",
    "footer": "mt-8",
    "links": "flex flex-wrap gap-x-6 gap-y-3"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "container": "lg:grid-cols-2 lg:items-center",
        "description": "text-pretty"
      },
      "vertical": {
        "container": "",
        "title": "text-center",
        "description": "text-center text-balance",
        "links": "justify-center"
      }
    },
    "reverse": {
      "true": {
        "wrapper": "order-last"
      }
    },
    "variant": {
      "solid": {
        "root": "bg-inverted text-inverted",
        "title": "text-inverted",
        "description": "text-dimmed"
      },
      "outline": {
        "root": "bg-default ring ring-default",
        "description": "text-muted"
      },
      "soft": {
        "root": "bg-elevated/50",
        "description": "text-toned"
      },
      "subtle": {
        "root": "bg-elevated/50 ring ring-default",
        "description": "text-toned"
      },
      "naked": {
        "description": "text-muted"
      }
    },
    "title": {
      "true": {
        "description": "mt-6"
      }
    }
  },
  "defaultVariants": {
    "variant": "outline"
  }
};
const _sfc_main$1 = {
  __name: "UPageCTA",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    class: { type: null, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    orientation: { type: null, required: false, default: "vertical" },
    reverse: { type: Boolean, required: false, default: false },
    variant: { type: null, required: false },
    links: { type: Array, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.pageCTA || {} })({
      variant: props.variant,
      orientation: props.orientation,
      reverse: props.reverse,
      title: !!props.title || !!slots.title
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-orientation": __props.orientation,
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "top", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(_sfc_main$k, {
              "data-slot": "container",
              class: ui.value.container({ class: props.ui?.container })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (!!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || !!slots.body || !!slots.footer || (__props.links?.length || !!slots.links)) {
                    _push3(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: props.ui?.wrapper }))}"${_scopeId2}>`);
                    if (!!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description)) {
                      _push3(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: props.ui?.header }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                        if (__props.title || !!slots.title) {
                          _push3(`<h2 data-slot="title" class="${ssrRenderClass(ui.value.title({ class: props.ui?.title }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                            _push3(`${ssrInterpolate(__props.title)}`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</h2>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        if (__props.description || !!slots.description) {
                          _push3(`<div data-slot="description" class="${ssrRenderClass(ui.value.description({ class: props.ui?.description }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                            _push3(`${ssrInterpolate(__props.description)}`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (!!slots.body) {
                      _push3(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: props.ui?.body }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "body", {}, null, _push3, _parent3, _scopeId2);
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (!!slots.footer || (__props.links?.length || !!slots.links)) {
                      _push3(`<div data-slot="footer" class="${ssrRenderClass(ui.value.footer({ class: props.ui?.footer }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "footer", {}, () => {
                        if (__props.links?.length || !!slots.links) {
                          _push3(`<div data-slot="links" class="${ssrRenderClass(ui.value.links({ class: props.ui?.links }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "links", {}, () => {
                            _push3(`<!--[-->`);
                            ssrRenderList(__props.links, (link, index2) => {
                              _push3(ssrRenderComponent(_sfc_main$q, mergeProps({
                                key: index2,
                                size: "lg"
                              }, { ref_for: true }, link), null, _parent3, _scopeId2));
                            });
                            _push3(`<!--]-->`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (!!slots.default) {
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  } else if (__props.orientation === "horizontal") {
                    _push3(`<div class="hidden lg:block"${_scopeId2}></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || !!slots.body || !!slots.footer || (__props.links?.length || !!slots.links) ? (openBlock(), createBlock("div", {
                      key: 0,
                      "data-slot": "wrapper",
                      class: ui.value.wrapper({ class: props.ui?.wrapper })
                    }, [
                      !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                        key: 0,
                        "data-slot": "header",
                        class: ui.value.header({ class: props.ui?.header })
                      }, [
                        renderSlot(_ctx.$slots, "header", {}, () => [
                          __props.title || !!slots.title ? (openBlock(), createBlock("h2", {
                            key: 0,
                            "data-slot": "title",
                            class: ui.value.title({ class: props.ui?.title })
                          }, [
                            renderSlot(_ctx.$slots, "title", {}, () => [
                              createTextVNode(toDisplayString(__props.title), 1)
                            ])
                          ], 2)) : createCommentVNode("", true),
                          __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                            key: 1,
                            "data-slot": "description",
                            class: ui.value.description({ class: props.ui?.description })
                          }, [
                            renderSlot(_ctx.$slots, "description", {}, () => [
                              createTextVNode(toDisplayString(__props.description), 1)
                            ])
                          ], 2)) : createCommentVNode("", true)
                        ])
                      ], 2)) : createCommentVNode("", true),
                      !!slots.body ? (openBlock(), createBlock("div", {
                        key: 1,
                        "data-slot": "body",
                        class: ui.value.body({ class: props.ui?.body })
                      }, [
                        renderSlot(_ctx.$slots, "body")
                      ], 2)) : createCommentVNode("", true),
                      !!slots.footer || (__props.links?.length || !!slots.links) ? (openBlock(), createBlock("div", {
                        key: 2,
                        "data-slot": "footer",
                        class: ui.value.footer({ class: props.ui?.footer })
                      }, [
                        renderSlot(_ctx.$slots, "footer", {}, () => [
                          __props.links?.length || !!slots.links ? (openBlock(), createBlock("div", {
                            key: 0,
                            "data-slot": "links",
                            class: ui.value.links({ class: props.ui?.links })
                          }, [
                            renderSlot(_ctx.$slots, "links", {}, () => [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link, index2) => {
                                return openBlock(), createBlock(_sfc_main$q, mergeProps({
                                  key: index2,
                                  size: "lg"
                                }, { ref_for: true }, link), null, 16);
                              }), 128))
                            ])
                          ], 2)) : createCommentVNode("", true)
                        ])
                      ], 2)) : createCommentVNode("", true)
                    ], 2)) : createCommentVNode("", true),
                    !!slots.default ? renderSlot(_ctx.$slots, "default", { key: 1 }) : __props.orientation === "horizontal" ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "hidden lg:block"
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "top"),
              createVNode(_sfc_main$k, {
                "data-slot": "container",
                class: ui.value.container({ class: props.ui?.container })
              }, {
                default: withCtx(() => [
                  !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || !!slots.body || !!slots.footer || (__props.links?.length || !!slots.links) ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-slot": "wrapper",
                    class: ui.value.wrapper({ class: props.ui?.wrapper })
                  }, [
                    !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                      key: 0,
                      "data-slot": "header",
                      class: ui.value.header({ class: props.ui?.header })
                    }, [
                      renderSlot(_ctx.$slots, "header", {}, () => [
                        __props.title || !!slots.title ? (openBlock(), createBlock("h2", {
                          key: 0,
                          "data-slot": "title",
                          class: ui.value.title({ class: props.ui?.title })
                        }, [
                          renderSlot(_ctx.$slots, "title", {}, () => [
                            createTextVNode(toDisplayString(__props.title), 1)
                          ])
                        ], 2)) : createCommentVNode("", true),
                        __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                          key: 1,
                          "data-slot": "description",
                          class: ui.value.description({ class: props.ui?.description })
                        }, [
                          renderSlot(_ctx.$slots, "description", {}, () => [
                            createTextVNode(toDisplayString(__props.description), 1)
                          ])
                        ], 2)) : createCommentVNode("", true)
                      ])
                    ], 2)) : createCommentVNode("", true),
                    !!slots.body ? (openBlock(), createBlock("div", {
                      key: 1,
                      "data-slot": "body",
                      class: ui.value.body({ class: props.ui?.body })
                    }, [
                      renderSlot(_ctx.$slots, "body")
                    ], 2)) : createCommentVNode("", true),
                    !!slots.footer || (__props.links?.length || !!slots.links) ? (openBlock(), createBlock("div", {
                      key: 2,
                      "data-slot": "footer",
                      class: ui.value.footer({ class: props.ui?.footer })
                    }, [
                      renderSlot(_ctx.$slots, "footer", {}, () => [
                        __props.links?.length || !!slots.links ? (openBlock(), createBlock("div", {
                          key: 0,
                          "data-slot": "links",
                          class: ui.value.links({ class: props.ui?.links })
                        }, [
                          renderSlot(_ctx.$slots, "links", {}, () => [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link, index2) => {
                              return openBlock(), createBlock(_sfc_main$q, mergeProps({
                                key: index2,
                                size: "lg"
                              }, { ref_for: true }, link), null, 16);
                            }), 128))
                          ])
                        ], 2)) : createCommentVNode("", true)
                      ])
                    ], 2)) : createCommentVNode("", true)
                  ], 2)) : createCommentVNode("", true),
                  !!slots.default ? renderSlot(_ctx.$slots, "default", { key: 1 }) : __props.orientation === "horizontal" ? (openBlock(), createBlock("div", {
                    key: 2,
                    class: "hidden lg:block"
                  })) : createCommentVNode("", true)
                ]),
                _: 3
              }, 8, ["class"]),
              renderSlot(_ctx.$slots, "bottom")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/PageCTA.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = "" + __buildAssetsURL("photo-1674970538959-e7475d8d376f.Q9JvQUEU.jpeg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const expertise = ref([
      {
        image: _imports_0,
        icon: "i-ph-calendar-check",
        title: "Event Production",
        description: "From concept to execution, we handle every detail to make your event unforgettable."
      },
      {
        image: "https://images.unsplash.com/photo-1759906760182-8cd4a4fdcc66",
        icon: "i-ph-palette",
        title: "Design & Decor",
        description: "Crafting visually stunning experiences tailored to your style and theme."
      },
      {
        image: "https://images.unsplash.com/photo-1696238173596-554e92268051?w=800&auto=format&fit=crop",
        icon: "i-ph-gear",
        title: "Logistics & Coordination",
        description: "Seamless planning and management to ensure everything runs smoothly."
      },
      {
        image: "https://images.unsplash.com/photo-1766393195987-912865cbb81b?w=800&auto=format&fit=crop",
        icon: "i-ph-video-camera",
        title: "Event Streaming",
        description: "Professional live streaming and recording for hybrid and virtual events."
      },
      {
        image: "https://images.unsplash.com/photo-1709731191876-899e32264420?w=800&auto=format&fit=crop",
        icon: "i-ph-megaphone",
        title: "Entertainment",
        description: "Curating exceptional entertainment that elevates your event experience."
      },
      {
        image: "https://images.unsplash.com/photo-1712971404080-87271ce2e473?w=800&auto=format&fit=crop",
        icon: "i-ph-users",
        title: "Guest Management",
        description: "Comprehensive RSVP tracking, seating arrangements, and guest services."
      }
    ]);
    const featured_events = ref([
      {
        image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
        title: "Wedding Celebration",
        category: "Wedding",
        date: "2024"
      },
      {
        image: "https://plus.unsplash.com/premium_photo-1683121104182-9024ce96baad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Corporate Gala",
        category: "Corporate",
        date: "2024"
      },
      {
        image: "https://media.istockphoto.com/id/2245612798/photo/bright-red-hearts-crowd-around-a-colorful-super-sale-sign-on-a-textured-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=N5MJzj4TeHg6ZpgKYV44rulIAfQE91ugupS4zso3X1w=",
        title: "Product Launch",
        category: "Corporate",
        date: "2023"
      },
      {
        image: "https://images.unsplash.com/photo-1672744230736-777fc61e2062?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGJpcnRoZGF5JTIwY2VsZWJyYXRpb258ZW58MHx8MHx8fDA%3D",
        title: "Birthday Extravaganza",
        category: "Private",
        date: "2023"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageSection = _sfc_main$2;
      const _component_UIcon = _sfc_main$v;
      const _component_UPageCTA = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-ae13be22><section class="relative min-h-screen flex items-center justify-center overflow-hidden" data-v-ae13be22><div class="absolute inset-0 z-0" data-v-ae13be22><img${ssrRenderAttr("src", _imports_0)} alt="Event planning hero" class="w-full h-full object-cover scale-105" data-v-ae13be22><div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" data-v-ae13be22></div></div><div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-v-ae13be22><h1 data-aos="fade-up" data-aos-delay="300" class="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6" data-v-ae13be22> We Plan Moments That Matter </h1><p data-aos="fade-up" data-aos-delay="600" class="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" data-v-ae13be22> From intimate gatherings to grand celebrations, we create unforgettable experiences for every occasion. </p><div data-aos="fade-up" data-aos-delay="900" class="flex flex-col sm:flex-row items-center justify-center gap-4" data-v-ae13be22><a href="/book-event" class="inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-semibold rounded-xl bg-white text-gray-900 hover:bg-gray-100 hover:shadow-xl transition-all duration-500 ease-out active:scale-[0.98] transform hover:-translate-y-1" data-v-ae13be22> Plan Your Event <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-ae13be22><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" data-v-ae13be22></path></svg></a><a href="/portfolio" class="inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-semibold rounded-xl border border-white text-white hover:bg-white/10 hover:shadow-lg transition-all duration-500 ease-out active:scale-[0.98] transform hover:-translate-y-1" data-v-ae13be22> View Our Work <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-ae13be22><rect x="3" y="3" width="18" height="18" rx="2" ry="2" data-v-ae13be22></rect><circle cx="8.5" cy="8.5" r="1.5" data-v-ae13be22></circle><path d="M21 15l-5-5L5 21" data-v-ae13be22></path></svg></a></div></div></section>`);
      _push(ssrRenderComponent(_component_UPageSection, {
        id: "expertise",
        title: "Our Expertise",
        description: "Specialized event planning services tailored to your unique needs."
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-v-ae13be22${_scopeId}><!--[-->`);
            ssrRenderList(expertise.value, (exp, index2) => {
              _push2(`<div data-aos="zoom-in"${ssrRenderAttr("data-aos-delay", index2 * 100)} class="group rounded-2xl border border-gray-400/30 overflow-hidden transform transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl" data-v-ae13be22${_scopeId}><div class="relative overflow-hidden" data-v-ae13be22${_scopeId}><div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" data-v-ae13be22${_scopeId}></div><img${ssrRenderAttr("src", exp.image)}${ssrRenderAttr("alt", exp.title)} class="w-full h-48 object-cover transform transition-all duration-1000 group-hover:scale-110" data-v-ae13be22${_scopeId}></div><div class="p-6 space-y-4" data-v-ae13be22${_scopeId}><div class="flex items-center gap-3 transform transition-all duration-500 group-hover:translate-x-2" data-v-ae13be22${_scopeId}><div class="p-2 rounded-lg bg-primary-50 dark:bg-primary-900/30 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" data-v-ae13be22${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: exp.icon,
                class: "w-6 h-6 text-primary-600 dark:text-primary-400 transition-all duration-300 group-hover:scale-125"
              }, null, _parent2, _scopeId));
              _push2(`</div><h4 class="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-primary" data-v-ae13be22${_scopeId}>${ssrInterpolate(exp.title)}</h4></div><p class="text-gray-600 dark:text-gray-300 transition-colors duration-500 group-hover:text-gray-700 dark:group-hover:text-gray-200" data-v-ae13be22${_scopeId}>${ssrInterpolate(exp.description)}</p></div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(expertise.value, (exp, index2) => {
                  return openBlock(), createBlock("div", {
                    key: index2,
                    "data-aos": "zoom-in",
                    "data-aos-delay": index2 * 100,
                    class: "group rounded-2xl border border-gray-400/30 overflow-hidden transform transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl"
                  }, [
                    createVNode("div", { class: "relative overflow-hidden" }, [
                      createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" }),
                      createVNode("img", {
                        src: exp.image,
                        alt: exp.title,
                        class: "w-full h-48 object-cover transform transition-all duration-1000 group-hover:scale-110"
                      }, null, 8, ["src", "alt"])
                    ]),
                    createVNode("div", { class: "p-6 space-y-4" }, [
                      createVNode("div", { class: "flex items-center gap-3 transform transition-all duration-500 group-hover:translate-x-2" }, [
                        createVNode("div", { class: "p-2 rounded-lg bg-primary-50 dark:bg-primary-900/30 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" }, [
                          createVNode(_component_UIcon, {
                            name: exp.icon,
                            class: "w-6 h-6 text-primary-600 dark:text-primary-400 transition-all duration-300 group-hover:scale-125"
                          }, null, 8, ["name"])
                        ]),
                        createVNode("h4", { class: "text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-primary" }, toDisplayString(exp.title), 1)
                      ]),
                      createVNode("p", { class: "text-gray-600 dark:text-gray-300 transition-colors duration-500 group-hover:text-gray-700 dark:group-hover:text-gray-200" }, toDisplayString(exp.description), 1)
                    ])
                  ], 8, ["data-aos-delay"]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UPageSection, {
        id: "featured-events",
        title: "Featured Events",
        description: "A glimpse into the exceptional events we've brought to life",
        class: "bg-gray-50 dark:bg-gray-900/50"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" data-v-ae13be22${_scopeId}><!--[-->`);
            ssrRenderList(featured_events.value, (event, index2) => {
              _push2(`<div data-aos="fade-up"${ssrRenderAttr("data-aos-delay", index2 * 100 + 300)} class="group relative overflow-hidden cursor-pointer transform transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl" data-v-ae13be22${_scopeId}><div class="relative aspect-[4/5] overflow-hidden" data-v-ae13be22${_scopeId}><div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" data-v-ae13be22${_scopeId}></div><img${ssrRenderAttr("src", event.image)}${ssrRenderAttr("alt", event.title)} class="w-full h-full object-cover rounded-lg transform transition-all duration-1000 group-hover:scale-110" data-v-ae13be22${_scopeId}><div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6" data-v-ae13be22${_scopeId}><div class="transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500" data-v-ae13be22${_scopeId}><span class="inline-block px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full text-white mb-2 transform transition-all duration-300 delay-100 group-hover:translate-y-0" data-v-ae13be22${_scopeId}>${ssrInterpolate(event.category)}</span><h4 class="text-xl font-bold text-white mb-1 transform transition-all duration-300 delay-150 group-hover:translate-y-0" data-v-ae13be22${_scopeId}>${ssrInterpolate(event.title)}</h4><p class="text-sm text-white/80 transform transition-all duration-300 delay-200 group-hover:translate-y-0" data-v-ae13be22${_scopeId}>${ssrInterpolate(event.date)}</p></div></div><div class="absolute top-4 left-4 transform transition-all duration-500 group-hover:translate-y-[-10px] group-hover:opacity-0" data-v-ae13be22${_scopeId}><span class="px-3 py-1 text-xs font-medium bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-gray-900 dark:text-white transition-all duration-300" data-v-ae13be22${_scopeId}>${ssrInterpolate(event.category)}</span></div></div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(featured_events.value, (event, index2) => {
                  return openBlock(), createBlock("div", {
                    key: index2,
                    "data-aos": "fade-up",
                    "data-aos-delay": index2 * 100 + 300,
                    class: "group relative overflow-hidden cursor-pointer transform transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl"
                  }, [
                    createVNode("div", { class: "relative aspect-[4/5] overflow-hidden" }, [
                      createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" }),
                      createVNode("img", {
                        src: event.image,
                        alt: event.title,
                        class: "w-full h-full object-cover rounded-lg transform transition-all duration-1000 group-hover:scale-110"
                      }, null, 8, ["src", "alt"]),
                      createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6" }, [
                        createVNode("div", { class: "transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500" }, [
                          createVNode("span", { class: "inline-block px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full text-white mb-2 transform transition-all duration-300 delay-100 group-hover:translate-y-0" }, toDisplayString(event.category), 1),
                          createVNode("h4", { class: "text-xl font-bold text-white mb-1 transform transition-all duration-300 delay-150 group-hover:translate-y-0" }, toDisplayString(event.title), 1),
                          createVNode("p", { class: "text-sm text-white/80 transform transition-all duration-300 delay-200 group-hover:translate-y-0" }, toDisplayString(event.date), 1)
                        ])
                      ]),
                      createVNode("div", { class: "absolute top-4 left-4 transform transition-all duration-500 group-hover:translate-y-[-10px] group-hover:opacity-0" }, [
                        createVNode("span", { class: "px-3 py-1 text-xs font-medium bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-gray-900 dark:text-white transition-all duration-300" }, toDisplayString(event.category), 1)
                      ])
                    ])
                  ], 8, ["data-aos-delay"]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UPageCTA, {
        title: "Ready to Create Unforgettable Memories?",
        description: "Let's bring your vision to life with our expert event planning services",
        variant: "subtle",
        links: [
          {
            label: "Start Planning Now",
            to: "/book-event",
            trailingIcon: "i-ph-calendar-plus",
            size: "xl",
            class: "dark:bg-white dark:text-gray-900 transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
          },
          {
            label: "Browse Portfolio",
            to: "/portfolio",
            icon: "i-ph-images",
            size: "xl",
            color: "neutral",
            variant: "outline",
            class: "dark:border-gray-700 dark:text-white transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
          }
        ],
        "title-class": "dark:text-white",
        "description-class": "dark:text-gray-300",
        style: { animationDelay: "200ms" }
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ae13be22"]]);

export { index as default };
//# sourceMappingURL=index-Bibx6FwC.mjs.map
