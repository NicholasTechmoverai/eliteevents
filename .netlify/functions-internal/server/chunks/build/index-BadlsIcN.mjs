import { _ as _sfc_main$1 } from './PageSection-CfYSZhbt.mjs';
import { _ as _export_sfc, e as _sfc_main$v } from './server.mjs';
import { defineComponent, ref, withCtx, createVNode, unref, createBlock, openBlock, Fragment, renderList, toDisplayString, createCommentVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import 'reka-ui';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const teamMembers = ref([
      {
        name: "Steven Muiruri",
        position: "Chief Executive Officer",
        tel: "0768216484",
        description: "With over 15 years of experience in event management, Steven leads our team with vision and passion. His expertise in corporate events has transformed countless organizations' celebrations.",
        image: "https://images.unsplash.com/photo-1672685667592-0392f458f46f"
      },
      {
        name: "Anna Wambui",
        position: "Creative Director",
        tel: "",
        description: "Anna brings artistic flair to every event she touches. Specializing in wedding design and traditional ceremonies, she ensures every detail reflects the client's unique story.",
        image: "https://images.unsplash.com/photo-1623594675959-02360202d4d6"
      },
      {
        name: "Eddie Ngigi",
        position: "Operations Manager",
        tel: "",
        description: "Eddie's meticulous attention to logistics ensures flawless event execution. His background in hospitality management makes him the backbone of our operational excellence.",
        image: "https://images.unsplash.com/photo-1543132220-7bc04a0e790a"
      },
      {
        name: "Timmothy Kirimi",
        position: "Client Relations Director",
        tel: "",
        description: "Timmothy's warm personality and exceptional communication skills make every client feel valued. He ensures that your vision is understood and beautifully brought to life.",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
      }
    ]);
    const stats = ref([
      { value: "500+", label: "Events Planned" },
      { value: "10", label: "Years Experience" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "50+", label: "Team Members" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageSection = _sfc_main$1;
      const _component_UIcon = _sfc_main$v;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UPageSection, {
        id: "about-us",
        title: "About Elite Events",
        description: "We are a premier event planning company based in Kenya, dedicated to transforming your special moments into unforgettable experiences. With a passion for perfection and an eye for detail, we bring dreams to life."
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col md:flex-row gap-12 lg:gap-16 items-center justify-between md:items-start mt-16 text-gray-600 dark:text-gray-300" data-v-a3c89285${_scopeId}><div data-aos="fade-right" class="flex flex-col gap-6 max-w-xl" data-v-a3c89285${_scopeId}><h4 data-aos="fade-right" data-aos-delay="100" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight" data-v-a3c89285${_scopeId}> Our Story </h4><div class="space-y-6" data-v-a3c89285${_scopeId}><p data-aos="fade-up" data-aos-delay="200" class="text-base sm:text-md leading-relaxed" data-v-a3c89285${_scopeId}> Founded in 2015, Elite Events began with a simple vision: to create extraordinary celebrations that leave lasting impressions. What started as a small team of passionate event enthusiasts has grown into one of Kenya&#39;s most trusted event planning companies. </p><p data-aos="fade-up" data-aos-delay="400" class="text-base sm:text-md leading-relaxed" data-v-a3c89285${_scopeId}> Over the years, we&#39;ve had the privilege of planning hundreds of events, from intimate family gatherings to grand corporate galas. Each event has taught us something new, and we&#39;ve continuously refined our approach to deliver excellence. </p><p data-aos="fade-up" data-aos-delay="600" class="text-base sm:text-md leading-relaxed" data-v-a3c89285${_scopeId}> Today, we&#39;re proud to serve clients across Kenya and East Africa, bringing together the perfect blend of creativity, professionalism, and cultural sensitivity to every celebration we touch. </p></div></div><div data-aos="fade-left" data-aos-delay="300" class="w-full m-auto max-w-lg" data-v-a3c89285${_scopeId}><div class="relative overflow-hidden rounded-2xl shadow-lg group" data-v-a3c89285${_scopeId}><div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" data-v-a3c89285${_scopeId}></div><img src="https://images.unsplash.com/photo-1759532338598-679140538775" alt="Elite Events celebration" class="w-full transform transition-all duration-1000 scale-105 group-hover:scale-110 group-hover:rotate-1" data-v-a3c89285${_scopeId}><div class="absolute inset-0 border-2 border-transparent group-hover:border-white/30 transition-all duration-500 rounded-2xl" data-v-a3c89285${_scopeId}></div></div></div></div><div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-600 dark:text-gray-300" data-v-a3c89285${_scopeId}><div data-aos="fade-up" data-aos-delay="500" data-v-a3c89285${_scopeId}><p class="text-base sm:text-md leading-relaxed p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:border-primary/20" data-v-a3c89285${_scopeId}> To deliver exceptional event planning services that exceed expectations, creating memorable experiences that celebrate life&#39;s most important moments with elegance, creativity, and professionalism. </p></div><div data-aos="fade-up" data-aos-delay="700" data-v-a3c89285${_scopeId}><p class="text-base sm:text-md leading-relaxed p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:border-primary/20" data-v-a3c89285${_scopeId}> To be East Africa&#39;s most sought-after event planning company, recognized for our innovative approach, cultural sensitivity, and unwavering commitment to turning dreams into reality. </p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col md:flex-row gap-12 lg:gap-16 items-center justify-between md:items-start mt-16 text-gray-600 dark:text-gray-300" }, [
                createVNode("div", {
                  "data-aos": "fade-right",
                  class: "flex flex-col gap-6 max-w-xl"
                }, [
                  createVNode("h4", {
                    "data-aos": "fade-right",
                    "data-aos-delay": "100",
                    class: "text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight"
                  }, " Our Story "),
                  createVNode("div", { class: "space-y-6" }, [
                    createVNode("p", {
                      "data-aos": "fade-up",
                      "data-aos-delay": "200",
                      class: "text-base sm:text-md leading-relaxed"
                    }, " Founded in 2015, Elite Events began with a simple vision: to create extraordinary celebrations that leave lasting impressions. What started as a small team of passionate event enthusiasts has grown into one of Kenya's most trusted event planning companies. "),
                    createVNode("p", {
                      "data-aos": "fade-up",
                      "data-aos-delay": "400",
                      class: "text-base sm:text-md leading-relaxed"
                    }, " Over the years, we've had the privilege of planning hundreds of events, from intimate family gatherings to grand corporate galas. Each event has taught us something new, and we've continuously refined our approach to deliver excellence. "),
                    createVNode("p", {
                      "data-aos": "fade-up",
                      "data-aos-delay": "600",
                      class: "text-base sm:text-md leading-relaxed"
                    }, " Today, we're proud to serve clients across Kenya and East Africa, bringing together the perfect blend of creativity, professionalism, and cultural sensitivity to every celebration we touch. ")
                  ])
                ]),
                createVNode("div", {
                  "data-aos": "fade-left",
                  "data-aos-delay": "300",
                  class: "w-full m-auto max-w-lg"
                }, [
                  createVNode("div", { class: "relative overflow-hidden rounded-2xl shadow-lg group" }, [
                    createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" }),
                    createVNode("img", {
                      src: "https://images.unsplash.com/photo-1759532338598-679140538775",
                      alt: "Elite Events celebration",
                      class: "w-full transform transition-all duration-1000 scale-105 group-hover:scale-110 group-hover:rotate-1"
                    }),
                    createVNode("div", { class: "absolute inset-0 border-2 border-transparent group-hover:border-white/30 transition-all duration-500 rounded-2xl" })
                  ])
                ])
              ]),
              createVNode("div", { class: "mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-600 dark:text-gray-300" }, [
                createVNode("div", {
                  "data-aos": "fade-up",
                  "data-aos-delay": "500"
                }, [
                  createVNode("p", { class: "text-base sm:text-md leading-relaxed p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:border-primary/20" }, " To deliver exceptional event planning services that exceed expectations, creating memorable experiences that celebrate life's most important moments with elegance, creativity, and professionalism. ")
                ]),
                createVNode("div", {
                  "data-aos": "fade-up",
                  "data-aos-delay": "700"
                }, [
                  createVNode("p", { class: "text-base sm:text-md leading-relaxed p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:border-primary/20" }, " To be East Africa's most sought-after event planning company, recognized for our innovative approach, cultural sensitivity, and unwavering commitment to turning dreams into reality. ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UPageSection, {
        id: "meet-our-team",
        title: "Meet Our Team",
        description: "The passionate professionals behind every exceptional event."
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10" data-v-a3c89285${_scopeId}><!--[-->`);
            ssrRenderList(unref(teamMembers), (member, index2) => {
              _push2(`<div data-aos="fade-up"${ssrRenderAttr("data-aos-delay", index2 * 150 + 300)} class="group rounded-2xl overflow-hidden border border-gray-300/50 bg-white dark:bg-gray-900 transition-all duration-700" data-v-a3c89285${_scopeId}><div class="relative overflow-hidden" data-v-a3c89285${_scopeId}><div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" data-v-a3c89285${_scopeId}></div><img${ssrRenderAttr("src", member.image)}${ssrRenderAttr("alt", member.name)} class="w-full h-60 object-cover transform transition-all duration-1000 group-hover:scale-110" data-v-a3c89285${_scopeId}><div class="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 z-20" data-v-a3c89285${_scopeId}><div class="bg-black/70 backdrop-blur-sm rounded-lg p-3" data-v-a3c89285${_scopeId}><h3 class="text-white font-semibold text-sm" data-v-a3c89285${_scopeId}>${ssrInterpolate(member.name)}</h3><h6 class="text-gray-300 text-xs" data-v-a3c89285${_scopeId}>${ssrInterpolate(member.position)}</h6></div></div></div><div class="p-5 flex flex-col space-y-3 transform transition-all duration-500 group-hover:translate-y-[-4px]" data-v-a3c89285${_scopeId}><h3 class="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-primary" data-v-a3c89285${_scopeId}>${ssrInterpolate(member.name)}</h3><h6 class="text-sm font-medium text-gray-500 transform transition-all duration-500 group-hover:translate-x-2" data-v-a3c89285${_scopeId}>${ssrInterpolate(member.position)}</h6><p class="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-500 group-hover:text-gray-700 dark:group-hover:text-gray-200" data-v-a3c89285${_scopeId}>${ssrInterpolate(member.description)}</p>`);
              if (member.tel) {
                _push2(`<a${ssrRenderAttr("href", `tel:${member.tel}`)} class="inline-flex items-center gap-2 text-sm font-medium text-primary transform transition-all duration-500 hover:translate-x-2 hover:text-primary/80" data-v-a3c89285${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "i-lucide-phone",
                  class: "transition-transform duration-300 group-hover:scale-125"
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(member.tel)}</a>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div><div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center" data-v-a3c89285${_scopeId}><!--[-->`);
            ssrRenderList(unref(stats), (stat, index2) => {
              _push2(`<div data-aos="fade-up"${ssrRenderAttr("data-aos-delay", index2 * 100 + 900)} class="transform transition-all duration-700 hover:scale-105 hover:-translate-y-2" data-v-a3c89285${_scopeId}><p class="text-3xl font-bold text-gray-900 dark:text-white transform transition-all duration-500 hover:scale-110" data-v-a3c89285${_scopeId}>${ssrInterpolate(stat.value)}</p><p class="text-sm text-gray-500 mt-2 transform transition-all duration-500 hover:translate-y-1" data-v-a3c89285${_scopeId}>${ssrInterpolate(stat.label)}</p></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(teamMembers), (member, index2) => {
                  return openBlock(), createBlock("div", {
                    key: member.name,
                    "data-aos": "fade-up",
                    "data-aos-delay": index2 * 150 + 300,
                    class: "group rounded-2xl overflow-hidden border border-gray-300/50 bg-white dark:bg-gray-900 transition-all duration-700"
                  }, [
                    createVNode("div", { class: "relative overflow-hidden" }, [
                      createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" }),
                      createVNode("img", {
                        src: member.image,
                        alt: member.name,
                        class: "w-full h-60 object-cover transform transition-all duration-1000 group-hover:scale-110"
                      }, null, 8, ["src", "alt"]),
                      createVNode("div", { class: "absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 z-20" }, [
                        createVNode("div", { class: "bg-black/70 backdrop-blur-sm rounded-lg p-3" }, [
                          createVNode("h3", { class: "text-white font-semibold text-sm" }, toDisplayString(member.name), 1),
                          createVNode("h6", { class: "text-gray-300 text-xs" }, toDisplayString(member.position), 1)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "p-5 flex flex-col space-y-3 transform transition-all duration-500 group-hover:translate-y-[-4px]" }, [
                      createVNode("h3", { class: "text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-primary" }, toDisplayString(member.name), 1),
                      createVNode("h6", { class: "text-sm font-medium text-gray-500 transform transition-all duration-500 group-hover:translate-x-2" }, toDisplayString(member.position), 1),
                      createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-300 transition-colors duration-500 group-hover:text-gray-700 dark:group-hover:text-gray-200" }, toDisplayString(member.description), 1),
                      member.tel ? (openBlock(), createBlock("a", {
                        key: 0,
                        href: `tel:${member.tel}`,
                        class: "inline-flex items-center gap-2 text-sm font-medium text-primary transform transition-all duration-500 hover:translate-x-2 hover:text-primary/80"
                      }, [
                        createVNode(_component_UIcon, {
                          name: "i-lucide-phone",
                          class: "transition-transform duration-300 group-hover:scale-125"
                        }),
                        createTextVNode(" " + toDisplayString(member.tel), 1)
                      ], 8, ["href"])) : createCommentVNode("", true)
                    ])
                  ], 8, ["data-aos-delay"]);
                }), 128))
              ]),
              createVNode("div", { class: "mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(stats), (stat, index2) => {
                  return openBlock(), createBlock("div", {
                    key: stat.label,
                    "data-aos": "fade-up",
                    "data-aos-delay": index2 * 100 + 900,
                    class: "transform transition-all duration-700 hover:scale-105 hover:-translate-y-2"
                  }, [
                    createVNode("p", { class: "text-3xl font-bold text-gray-900 dark:text-white transform transition-all duration-500 hover:scale-110" }, toDisplayString(stat.value), 1),
                    createVNode("p", { class: "text-sm text-gray-500 mt-2 transform transition-all duration-500 hover:translate-y-1" }, toDisplayString(stat.label), 1)
                  ], 8, ["data-aos-delay"]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a3c89285"]]);

export { index as default };
//# sourceMappingURL=index-BadlsIcN.mjs.map
