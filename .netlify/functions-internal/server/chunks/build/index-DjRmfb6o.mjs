import { _ as _sfc_main$2 } from './PageSection-CfYSZhbt.mjs';
import { d as _sfc_main$q, e as _sfc_main$v, _ as _export_sfc } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, unref, createTextVNode, createVNode, createBlock, openBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MasonryGallery",
  __ssrInlineRender: true,
  props: {
    images: {},
    title: {},
    subtitle: {},
    columns: { default: 3 },
    columnGap: { default: 16 },
    rowGap: { default: 16 },
    minImageHeight: { default: 200 },
    maxImageHeight: { default: 500 },
    categories: { default: () => [
      { label: "Weddings", value: "wedding" },
      { label: "Corporate", value: "corporate" },
      { label: "Traditional", value: "traditional" },
      { label: "Private", value: "private" },
      { label: "Music", value: "music" },
      { label: "Church", value: "church" }
    ] }
  },
  setup(__props) {
    const props = __props;
    const selectedImage = ref(null);
    const currentImageIndex = ref(0);
    const windowWidth = ref(1024);
    const titleStyle = {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    };
    const numberOfColumns = computed(() => {
      if (windowWidth.value < 768) return 2;
      if (windowWidth.value < 1024) return 3;
      return props.columns;
    });
    const columns = computed(() => {
      const cols = Array.from({ length: numberOfColumns.value }, () => []);
      props.images.forEach((image, index) => {
        const colIndex = index % numberOfColumns.value;
        const height = image.height || `${Math.floor(Math.random() * (props.maxImageHeight - props.minImageHeight + 1)) + props.minImageHeight}px`;
        cols[colIndex].push({ ...image, height });
      });
      return cols;
    });
    const columnStyle = (column) => ({
      width: `calc(${100 / numberOfColumns.value}% - ${props.columnGap}px)`,
      gap: `${props.rowGap}px`
    });
    const imageStyle = (image) => ({
      height: image.height,
      minHeight: `${props.minImageHeight}px`
    });
    const getCategoryLabel = (value) => {
      const category = props.categories.find((cat) => cat.value === value);
      return category ? category.label : value;
    };
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "masonry-gallery w-full max-w-7xl mx-auto p-4 md:p-6" }, _attrs))} data-v-80b3f4f4>`);
      if (__props.title) {
        _push(`<div class="text-3xl md:text-4xl font-bold text-center mb-4" style="${ssrRenderStyle(titleStyle)}" data-aos="fade-up" data-v-80b3f4f4>${ssrInterpolate(__props.title)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.subtitle) {
        _push(`<p class="text-lg text-gray-600 dark:text-gray-300 text-center mb-8 md:mb-12" data-aos="fade-up" data-aos-delay="100" data-v-80b3f4f4>${ssrInterpolate(__props.subtitle)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="masonry-grid flex justify-center" style="${ssrRenderStyle({ gap: `${__props.columnGap}px` })}" data-v-80b3f4f4><!--[-->`);
      ssrRenderList(columns.value, (column, colIndex) => {
        _push(`<div class="masonry-column flex flex-col" style="${ssrRenderStyle(columnStyle())}" data-v-80b3f4f4><!--[-->`);
        ssrRenderList(column, (image, index) => {
          _push(`<div class="masonry-item group relative overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1" data-aos="zoom-in"${ssrRenderAttr("data-aos-delay", index * 80)} data-v-80b3f4f4><div class="relative w-full overflow-hidden rounded-xl" data-v-80b3f4f4><img${ssrRenderAttr("src", image.src)}${ssrRenderAttr("alt", image.alt)} style="${ssrRenderStyle(imageStyle(image))}" class="w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" data-v-80b3f4f4><div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" data-v-80b3f4f4><div class="absolute bottom-0 left-0 right-0 p-4 md:p-6 space-y-2" data-v-80b3f4f4>`);
          if (image.title) {
            _push(`<h4 class="text-white text-lg md:text-xl font-semibold" data-v-80b3f4f4>${ssrInterpolate(image.title)}</h4>`);
          } else {
            _push(`<!---->`);
          }
          if (image.category) {
            _push(`<div class="flex flex-wrap gap-1" data-v-80b3f4f4><span class="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-primary-600 text-white" data-v-80b3f4f4>${ssrInterpolate(getCategoryLabel(image.category))}</span></div>`);
          } else {
            _push(`<!---->`);
          }
          if (image.venue) {
            _push(`<div class="flex items-center text-gray-100 text-sm" data-v-80b3f4f4><svg class="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-80b3f4f4><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-v-80b3f4f4></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-v-80b3f4f4></path></svg><span class="truncate" data-v-80b3f4f4>${ssrInterpolate(image.venue)}</span></div>`);
          } else {
            _push(`<!---->`);
          }
          if (image.date) {
            _push(`<div class="flex items-center text-gray-100 text-sm" data-v-80b3f4f4><svg class="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-80b3f4f4><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-v-80b3f4f4></path></svg><span data-v-80b3f4f4>${ssrInterpolate(formatDate(image.date))}</span></div>`);
          } else {
            _push(`<!---->`);
          }
          if (image.description) {
            _push(`<p class="text-gray-200 text-sm line-clamp-2 pt-2" data-v-80b3f4f4>${ssrInterpolate(image.description)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div>`);
      if (selectedImage.value) {
        _push(`<div class="lightbox-modal fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" data-v-80b3f4f4><div class="lightbox-content relative max-w-6xl max-h-[90vh] w-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden" data-v-80b3f4f4><button class="close-btn absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors duration-200 backdrop-blur-sm" aria-label="Close lightbox" data-v-80b3f4f4><svg class="close-icon w-6 h-6" viewBox="0 0 24 24" data-v-80b3f4f4><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-80b3f4f4></path></svg></button><div class="lightbox-image-container relative w-full h-[60vh] md:h-[70vh]" data-v-80b3f4f4><img${ssrRenderAttr("src", selectedImage.value.src)}${ssrRenderAttr("alt", selectedImage.value.alt)} class="lightbox-image w-full h-full object-contain" data-v-80b3f4f4></div><div class="lightbox-info p-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700" data-v-80b3f4f4><div class="flex items-center gap-2 mb-3" data-v-80b3f4f4>`);
        if (selectedImage.value.category) {
          _push(`<span class="lightbox-category inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-primary-600 text-white" data-v-80b3f4f4>${ssrInterpolate(getCategoryLabel(selectedImage.value.category))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><h3 class="lightbox-title text-2xl font-bold text-gray-800 dark:text-white mb-2" data-v-80b3f4f4>${ssrInterpolate(selectedImage.value.title)}</h3><div class="lightbox-meta space-y-2 mb-4" data-v-80b3f4f4>`);
        if (selectedImage.value.venue) {
          _push(`<div class="flex items-center text-gray-600 dark:text-gray-300" data-v-80b3f4f4><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-80b3f4f4><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-v-80b3f4f4></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-v-80b3f4f4></path></svg> ${ssrInterpolate(selectedImage.value.venue)}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (selectedImage.value.date) {
          _push(`<div class="flex items-center text-gray-600 dark:text-gray-300" data-v-80b3f4f4><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-80b3f4f4><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-v-80b3f4f4></path></svg> ${ssrInterpolate(formatDate(selectedImage.value.date))}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><p class="lightbox-description text-gray-600 dark:text-gray-300" data-v-80b3f4f4>${ssrInterpolate(selectedImage.value.description)}</p></div>`);
        if (__props.images.length > 1) {
          _push(`<div class="lightbox-navigation absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-6 bg-black/50 backdrop-blur-sm rounded-full px-6 py-3" data-v-80b3f4f4><button class="nav-btn p-2 text-white hover:text-gray-300 transition-colors duration-200" aria-label="Previous image" data-v-80b3f4f4><svg class="nav-icon w-6 h-6" viewBox="0 0 24 24" data-v-80b3f4f4><path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-80b3f4f4></path></svg></button><div class="image-counter text-white font-medium" data-v-80b3f4f4>${ssrInterpolate(currentImageIndex.value + 1)} / ${ssrInterpolate(__props.images.length)}</div><button class="nav-btn p-2 text-white hover:text-gray-300 transition-colors duration-200" aria-label="Next image" data-v-80b3f4f4><svg class="nav-icon w-6 h-6" viewBox="0 0 24 24" data-v-80b3f4f4><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-80b3f4f4></path></svg></button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MasonryGallery.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-80b3f4f4"]]), { __name: "MasonryGallery" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const categories = [
      { label: "All Events", value: "all" },
      { label: "Weddings", value: "wedding" },
      { label: "Corporate", value: "corporate" },
      { label: "Traditional", value: "traditional" },
      { label: "Private", value: "private" },
      { label: "Music", value: "music" },
      { label: "Church", value: "church" }
    ];
    const categoryOptions = categories.filter((cat) => cat.value !== "all");
    const activeCategory = ref("all");
    const portfolioData = ref([
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1674970538959-e7475d8d376f?w=800&auto=format&fit=crop",
        title: "Elegant Garden Wedding",
        category: "wedding",
        alt: "Wedding celebration",
        description: "A beautiful outdoor wedding ceremony with floral arrangements",
        venue: "Grand Paradise Resort",
        date: "2024-06-15",
        height: "550px"
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1566735355837-2269c24e644e?w=800&auto=format&fit=crop",
        title: "Annual Tech Conference",
        category: "corporate",
        alt: "Corporate event",
        description: "Annual corporate celebration event with keynote speakers",
        venue: "Convention Center",
        date: "2024-03-22",
        height: "280px"
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1696238173596-554e92268051?w=800&auto=format&fit=crop",
        title: "Church Anniversary",
        category: "church",
        alt: "Church event",
        description: "Beautiful anniversary celebration service",
        venue: "Nairobi Chapel",
        date: "2024-02-10",
        height: "520px"
      },
      {
        id: 4,
        src: "https://images.unsplash.com/photo-1662261896058-af7f8cab43eb?w=800&auto=format&fit=crop",
        title: "Business Conference",
        category: "corporate",
        alt: "Conference setup",
        description: "Professional conference organization for industry leaders",
        venue: "Innovation Hub",
        date: "2024-08-18",
        height: "300px"
      },
      {
        id: 5,
        src: "https://images.unsplash.com/photo-1712971404080-87271ce2e473?w=800&auto=format&fit=crop",
        title: "Product Launch",
        category: "corporate",
        alt: "Product launch",
        description: "Exciting new product reveal with live demonstrations",
        venue: "Tech Center",
        date: "2024-04-15",
        height: "380px"
      },
      {
        id: 6,
        src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&auto=format&fit=crop",
        title: "Summer Music Festival",
        category: "music",
        alt: "Music festival",
        description: "Large scale music festival with multiple stages",
        venue: "Central Park",
        date: "2024-07-12",
        height: "320px"
      },
      {
        id: 7,
        src: "https://images.unsplash.com/photo-1485872299829-c673f5194813?w=800&auto=format&fit=crop",
        title: "Team Building",
        category: "corporate",
        alt: "Team building",
        description: "Corporate team building activities and workshops",
        venue: "Retreat Center",
        date: "2024-05-05",
        height: "260px"
      },
      {
        id: 8,
        src: "https://plus.unsplash.com/premium_photo-1665949502498-b5250d637851?w=800&auto=format&fit=crop",
        title: "Anniversary Party",
        category: "private",
        alt: "Anniversary celebration",
        description: "Golden anniversary celebration with family and friends",
        venue: "Oceanview Cliffs",
        date: "2024-05-20",
        height: "400px"
      },
      {
        id: 9,
        src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format&fit=crop",
        title: "Graduation Ceremony",
        category: "private",
        alt: "Graduation party",
        description: "Academic achievement celebration and award ceremony",
        venue: "University Hall",
        date: "2024-06-30",
        height: "340px"
      },
      {
        id: 10,
        src: "https://images.unsplash.com/photo-1678997638676-ed99f2e040a0?w=800&auto=format&fit=crop",
        title: "Cultural Celebration",
        category: "traditional",
        alt: "Traditional event",
        description: "Vibrant cultural celebration with traditional performances",
        venue: "Community Hall",
        date: "2024-02-10",
        height: "420px"
      },
      {
        id: 11,
        src: "https://images.unsplash.com/photo-1709731191876-899e32264420?w=800&auto=format&fit=crop",
        title: "Music Festival Stage",
        category: "music",
        alt: "Music festival stage",
        description: "Dynamic stage setup for live concert performance",
        venue: "Carnivore Grounds",
        date: "2024-08-15",
        height: "420px"
      },
      {
        id: 12,
        src: "https://images.unsplash.com/photo-1763231575952-98244918f99b?w=800&auto=format&fit=crop",
        title: "Corporate Gala Dinner",
        category: "corporate",
        alt: "Gala dinner event",
        description: "Formal corporate gala dinner with entertainment",
        venue: "Grand Ballroom",
        date: "2024-09-20",
        height: "360px"
      },
      {
        id: 13,
        src: "https://images.unsplash.com/photo-1766393195987-912865cbb81b?w=800&auto=format&fit=crop",
        title: "50th Birthday Celebration",
        category: "private",
        alt: "Birthday party",
        description: "Milestone birthday celebration with special guests",
        venue: "Private Estate",
        date: "2024-04-25",
        height: "480px"
      }
    ]);
    const filteredPortfolio = computed(() => {
      return activeCategory.value === "all" ? portfolioData.value : portfolioData.value.filter((event) => event.category === activeCategory.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageSection = _sfc_main$2;
      const _component_UButton = _sfc_main$q;
      const _component_MasonryGallery = __nuxt_component_2;
      const _component_UIcon = _sfc_main$v;
      _push(ssrRenderComponent(_component_UPageSection, mergeProps({
        id: "featured-events",
        title: "Featured Events",
        description: "A glimpse into the exceptional events we've brought to life",
        class: "bg-gray-50 dark:bg-gray-900/50"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 sm:mb-10" data-aos="fade-up" data-aos-delay="100"${_scopeId}><div class="flex flex-wrap gap-2 sm:gap-3 justify-center"${_scopeId}><!--[-->`);
            ssrRenderList(categories, (category, index) => {
              _push2(ssrRenderComponent(_component_UButton, {
                key: category.value,
                label: category.label,
                color: activeCategory.value === category.value ? "primary" : "neutral",
                variant: activeCategory.value === category.value ? "solid" : "outline",
                size: "md",
                class: "min-w-[100px] transition-all duration-300 hover:scale-105",
                "data-aos": "fade-up",
                "data-aos-delay": 100 + index * 100,
                onClick: ($event) => activeCategory.value = category.value
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div><div class="transition-all duration-500" data-aos="fade-up" data-aos-delay="500"${_scopeId}>`);
            if (filteredPortfolio.value.length > 0) {
              _push2(ssrRenderComponent(_component_MasonryGallery, {
                images: filteredPortfolio.value,
                columns: 3,
                "column-gap": 20,
                "row-gap": 20,
                categories: unref(categoryOptions)
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mt-8 sm:mt-12 text-center" data-aos="fade-up" data-aos-delay="700"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              to: "/portfolio/#",
              size: "lg",
              color: "neutral",
              variant: "outline",
              "trailing-icon": "i-ph-arrow-right",
              class: "group hover:scale-105 transition-all duration-300"
            }, {
              trailing: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-ph-arrow-right",
                    class: "w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UIcon, {
                      name: "i-ph-arrow-right",
                      class: "w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` View All Events `);
                } else {
                  return [
                    createTextVNode(" View All Events ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: "mb-8 sm:mb-10",
                "data-aos": "fade-up",
                "data-aos-delay": "100"
              }, [
                createVNode("div", { class: "flex flex-wrap gap-2 sm:gap-3 justify-center" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(categories, (category, index) => {
                    return createVNode(_component_UButton, {
                      key: category.value,
                      label: category.label,
                      color: activeCategory.value === category.value ? "primary" : "neutral",
                      variant: activeCategory.value === category.value ? "solid" : "outline",
                      size: "md",
                      class: "min-w-[100px] transition-all duration-300 hover:scale-105",
                      "data-aos": "fade-up",
                      "data-aos-delay": 100 + index * 100,
                      onClick: ($event) => activeCategory.value = category.value
                    }, null, 8, ["label", "color", "variant", "data-aos-delay", "onClick"]);
                  }), 64))
                ])
              ]),
              createVNode("div", {
                class: "transition-all duration-500",
                "data-aos": "fade-up",
                "data-aos-delay": "500"
              }, [
                filteredPortfolio.value.length > 0 ? (openBlock(), createBlock(_component_MasonryGallery, {
                  key: 0,
                  images: filteredPortfolio.value,
                  columns: 3,
                  "column-gap": 20,
                  "row-gap": 20,
                  categories: unref(categoryOptions)
                }, null, 8, ["images", "categories"])) : createCommentVNode("", true)
              ]),
              createVNode("div", {
                class: "mt-8 sm:mt-12 text-center",
                "data-aos": "fade-up",
                "data-aos-delay": "700"
              }, [
                createVNode(_component_UButton, {
                  to: "/portfolio/#",
                  size: "lg",
                  color: "neutral",
                  variant: "outline",
                  "trailing-icon": "i-ph-arrow-right",
                  class: "group hover:scale-105 transition-all duration-300"
                }, {
                  trailing: withCtx(() => [
                    createVNode(_component_UIcon, {
                      name: "i-ph-arrow-right",
                      class: "w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    })
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" View All Events ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DjRmfb6o.mjs.map
