$(document).ready((function(){"use strict";var t=$(".header");function e(){$(window).scrollTop()>91?t.addClass("scrolled"):t.removeClass("scrolled")}!function(){if($(".menu").length){var t=$(".hamburger"),e=$(".header"),i=$(".super_container_inner"),n=$(".super_overlay"),o=$(".header_overlay"),r=$(".menu"),a=!1;t.on("click",(function(){i.toggleClass("active"),r.toggleClass("active"),e.toggleClass("active"),a=!0})),n.on("click",(function(){a&&(i.toggleClass("active"),r.toggleClass("active"),e.toggleClass("active"),a=!1)})),o.on("click",(function(){a&&(i.toggleClass("active"),r.toggleClass("active"),e.toggleClass("active"),a=!1)}))}}(),$("img.svg").length&&jQuery("img.svg").each((function(){var t=jQuery(this),e=t.attr("id"),i=t.attr("class"),n=t.attr("src");jQuery.get(n,(function(n){var o=jQuery(n).find("svg");void 0!==e&&(o=o.attr("id",e)),void 0!==i&&(o=o.attr("class",i+" replaced-svg")),o=o.removeAttr("xmlns:a"),t.replaceWith(o)}),"xml")})),function(){var t=$(".item_sorting_btn");if($(".grid").length){var e=$(".grid").isotope({itemSelector:".grid-item",percentPosition:!0,masonry:{horizontalOrder:!0},getSortData:{price:function(t){var e=$(t).find(".product_price").text().replace("$","");return parseFloat(e)},name:".product_name"}});t.each((function(){$(this).on("click",(function(){$(this).parent().parent().find(".isotope_sorting_text span").text($(this).text());var t=$(this).attr("data-isotope-option");t=JSON.parse(t),e.isotope(t)}))})),$(".item_filter_btn").on("click",(function(){$(this).parent().parent().find(".isotope_filter_text span").text($(this).text());var t=$(this).attr("data-filter");e.isotope({filter:t})}))}}(),e(),$(window).on("resize",(function(){e()})),$(document).on("scroll",(function(){e()}))}));