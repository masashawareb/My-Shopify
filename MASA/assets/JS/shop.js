$(document).ready(function() {
    $(".slider-range").on("input", function() {
        var divisor = $(this).parents(".faq-block").find(".divisor"),
            handle = $(this).parents(".faq-block").find(".handle"),
            slider = $(this).parents(".faq-block").find(".slider-range");
        handle.css("left", slider.val() + "%"), divisor.css("width", slider.val() + "%")
    });
    var rtlFlag = !!$("body").hasClass("lang-rtl");
    $(".reassurance-list").owlCarousel({
        nav: !1,
        navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
        dots: !0,
        loop: !1,
        margin: 15,
        autoplay: !0,
        rtl: rtlFlag,
        rewind: !0,
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 1
            }
        }
    }), $(window).scroll(function() {
        $(this).scrollTop() > 500 ? $("#slidetop").fadeIn(500) : $("#slidetop").fadeOut(500)
    }), $("#slidetop").click(function(e) {
        e.preventDefault(), $("html, body").animate({
            scrollTop: 0
        }, 800)
    }), $(".product__media-item").click(function() {
        $(this).attr("data-media-type") == "video" ? $(".zoomContainer").hide() : $(".zoomContainer").show()
    }), $(document).on("click", "[data-toggle='collapse']", function() {
        var parent = $(this).data("parent"),
            target = $(this).data("href");
        $(parent).length && $(parent).hasClass("panel-group") && $(parent + " .panel").each(function() {
            var p = $(this).find("[data-toggle='collapse']"),
                t = p.data("href");
            t != target && p.attr("aria-expanded") == "true" && ($(t).slideUp().removeClass("in"), p.addClass("ishi-collapsed").attr("aria-expanded", "false"))
        }), $(this).attr("aria-expanded") == "false" ? ($(target).slideDown().addClass("in"), $(this).removeClass("ishi-collapsed").attr("aria-expanded", "true")) : ($(target).slideUp().removeClass("in"), $(this).addClass("ishi-collapsed").attr("aria-expanded", "false"))
    }), $(document).on("click", "[data-toggle='popover']", function() {
        var target = $(this).data("href");
        $(this).attr("aria-expanded") == "false" ? ($(target).addClass("active"), $(this).attr("aria-expanded", "true")) : ($(target).removeClass("active"), $(this).attr("aria-expanded", "false"))
    }), $(document).on("click", function(event) {
        !$(event.target).closest("#search-container-full").length && !$(event.target).closest('[data-href="#search-container-full"]').length && $('[data-href="#search-container-full"]').attr("aria-expanded") == "true" && ($("#search-container-full").removeClass("active"), $('[data-href="#search-container-full"]').attr("aria-expanded", "false")), !$(event.target).closest("#user-notification").length && !$(event.target).closest('[data-href="#user-notification"]').length && $('[data-href="#user-notification"]').attr("aria-expanded") == "true" && ($("#user-notification").removeClass("active"), $('[data-href="#user-notification"]').attr("aria-expanded", "false"), event.preventDefault()), !$(event.target).closest("#HeaderCountryList").length && !$(event.target).closest('[data-href="#HeaderCountryList"]').length && $('[data-href="#HeaderCountryList"]').attr("aria-expanded") == "true" && ($("#HeaderCountryList").removeClass("active"), $('[data-href="#HeaderCountryList"]').attr("aria-expanded", "false")), !$(event.target).closest("#HeaderLanguageList").length && !$(event.target).closest('[data-href="#HeaderLanguageList"]').length && $('[data-href="#HeaderLanguageList"]').attr("aria-expanded") == "true" && ($("#HeaderLanguageList").removeClass("active"), $('[data-href="#HeaderLanguageList"]').attr("aria-expanded", "false"))
    }), $(document).on("click", ".ishi-nav-link", function() {
        $(this).parents(".ishi-nav-tabs").find(".ishi-tab-item").removeClass("active"), $(this).parents(".ishi-tab-item").addClass("active"), $(this).parents(".ishi-product-tab").find(".ishi-tab-pane").removeClass("active");
        var target = $(this).data("href");
        $(target).addClass("active")
    }), $(document).on("click", '[data-action="ishi-panel"]', function() {
        var target = $(this).attr("aria-controls");
        $(this).parents(".ishi-panel-container").find(".ishi-panel-data").removeClass("active"), $(target).addClass("active")
    }), $(".add-in-wishlist-js").length != 0 && $(document).on("click", ".add-in-wishlist-js", function(event) {
        if ($(this).hasClass("added-wishlist")) return !0;
        event.preventDefault();
        try {
            var id = $(this).data("href");
            if (getTheCookie("wishlist") == null) var str = id;
            else if (getTheCookie("wishlist").indexOf(id) == -1) var str = getTheCookie("wishlist") + "__" + id;
            setTheCookie("wishlist", str, 14), $(".loadding-wishbutton-" + id).show(), $(".default-wishbutton-" + id).remove(), setTimeout(function() {
                $(".loadding-wishbutton-" + id).remove(), $(".added-wishbutton-" + id).show()
            }, 2e3)
        } catch (err) {
            console.log("error reading wishlist cookies!")
        }
    }), setupWishlistButtons(), $(document).on("click", ".js-edit-toggle", function() {
        $(this).parents("tr").toggleClass("cart__update--show"), $(this).toggleClass("cart__edit--active")
    });
    var stock = parseInt($("#variant-stock").html()),
        maxqty = parseInt($(".selected-variant").data("quantity"));
    switch ((stock == "" || stock <= 0) && $(".ishi-progress-content").addClass("hidden"), stock) {
        case 9:
            $("#ishi-progress-bar span").css("width", "65%");
            break;
        case 8:
            $("#ishi-progress-bar span").css("width", "60%");
            break;
        case 7:
            $("#ishi-progress-bar span").css("width", "55%");
            break;
        case 6:
            $("#ishi-progress-bar span").css("width", "50%");
            break;
        case 5:
            $("#ishi-progress-bar span").css("width", "40%");
            break;
        case 4:
            $("#ishi-progress-bar span").css("width", "30%");
            break;
        case 3:
            $("#ishi-progress-bar span").css("width", "20%");
            break;
        case 2:
            $("#ishi-progress-bar span").css("width", "10%");
            break;
        case 1:
            $("#ishi-progress-bar span").css("width", "5%");
            break;
        default:
            $("#ishi-progress-bar span").css("width", "90%")
    }
    $(document).on("click", ".product__media-list .product__media-item", function() {
        $(this).data("media-type") != "model" && $("#main-media-container").html($(this).clone())
    }), $("#main-media-container").length && window.matchMedia("(min-width: 991px)").matches && $("#main-media-container img").elevateZoom({
        zoomType: "inner",
        cursor: "crosshair"
    }), $(document).on("DOMSubtreeModified", "#main-media-container", function() {
        window.matchMedia("(min-width: 991px)").matches && $(this).find(".product__media-item").data("media-type") != "video" && $("#main-media-container img").elevateZoom({
            zoomType: "inner",
            cursor: "crosshair"
        })
    }), $(".product__media-list").owlCarousel({
        nav: !0,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        dots: !1,
        loop: !1,
        margin: 15,
        rtl: rtlFlag,
        rewind: !0,
        responsive: {
            0: {
                items: 3
            },
            544: {
                items: 4
            },
            768: {
                items: 3
            },
            992: {
                items: $("#shopify-section-Ishi_sidebar").length ? 3 : 4
            },
            1200: {
                items: 4
            }
        }
    }), $(document).on("click", ".collectiongrid-layout", function() {
        var id = $(this).data("id");
        setTheCookie("collectiongrid-layout", id, 14), setGridLayout()
    }), setGridLayout(), $(document).on("click", ".add-to-cart-js", function() {
        var variantID = this.getAttribute("data-variantid");
        $(this).addClass("loading"), addToCartJS(1, variantID, this)
    }), $(document).on("click", ".cart-remove-js", function() {
        var variantID = this.getAttribute("data-variantid");
        removeFromCartJS(variantID)
    }), $(document).on("click", ".minicart-quantity__button", function() {
        var variantID = this.getAttribute("data-variantid"),
            quantity = $(this).parents(".quantity").find(".quantity__input").val();
        updateCartItemJS(quantity, variantID)
    }), $(document).on("click", ".quick-view", function() {
        var handle = $(this).data("handle");
        loadQuickView(handle, $(this))
    }), $("#FacetFiltersFormSidebar [type='checkbox']:checked").length && $("#FacetFiltersFormSidebar .clear-all").css("display", "inline-block"), $(".owl-carousel.slider-with-options").each(function(index) {
        $(this).owlCarousel({
            lazyLoad: !0,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            loop: !!$(this).data("loop"),
            rewind: !!$(this).data("rewind"),
            nav: !!$(this).data("nav"),
            rewind: !!$(this).data("rewind"),
            autoplay: !!$(this).data("autoplay"),
            rtl: rtlFlag,
            dots: !!$(this).data("dots"),
            autoplayTimeout: $(this).data("autoplaytimeout") ? $(this).data("autoplaytimeout") : 4e3,
            smartSpeed: $(this).data("smartspeed") ? $(this).data("smartspeed") : 500,
            margin: $(this).data("margin") ? $(this).data("margin") : 0,
            responsive: {
                0: {
                    items: $(this).data("small")
                },
                544: {
                    items: $(this).data("mobile")
                },
                768: {
                    items: $(this).data("tablet")
                },
                992: {
                    items: $(this).data("laptop")
                },
                1200: {
                    items: $(this).data("desktop")
                }
            }
        })
    }), $('[data-deal="1"]').each(function(index) {
        setCountDownTimer($(this).data("counter"), this.querySelector(".countdowncontainer"))
    }), $(".write_comment").click(function(e) {
        $(".ishi-product-tab .ishi-nav-tabs a.review-tab").trigger("click"), $("html, body").animate({
            scrollTop: $(".ishi-product-tab").offset().top - 50
        }, 2e3)
    }), adjustFixedHeader(), $(window).scroll(function() {
        adjustFixedHeader()
    });
    var shopify_responsive_current_width = window.innerWidth,
        shopify_responsive_min_width = 992,
        shopify_responsive_mobile = shopify_responsive_current_width < shopify_responsive_min_width;
    shopify_responsive_mobile && convertToMobile(), $(window).on("resize", function() {
        var _mw = shopify_responsive_min_width,
            _w = window.innerWidth,
            desktopContent = $("*[id^='_desktop_']").first().html().trim().length,
            mobileContent = $("*[id^='_mobile_']").first().html().trim().length;
        _w < _mw && desktopContent && convertToMobile(), _w >= _mw && mobileContent && convertToDesktop()
    }), $("#menu-icon").on("click", function() {
        $("#mobile_top_menu_wrapper").animate({
            width: "toggle"
        }), $(".mobile-menu-overlay").toggleClass("active")
    }), $("#top_menu_closer svg").on("click", function() {
        $("#mobile_top_menu_wrapper").animate({
            width: "toggle"
        }), $(".mobile-menu-overlay").toggleClass("active")
    }), $(".mobile-menu-overlay").on("click", function() {
        $("#mobile_top_menu_wrapper").animate({
            width: "toggle"
        }), $(".mobile-menu-overlay").toggleClass("active")
    }), $(".cart-drawer-toggler").on("click", function() {
        openCartDrawer()
    }), $("#cart-notification-closer svg").on("click", function() {
        closeCartDrawer()
    }), $(".cart-overlay").on("click", function() {
        closeCartDrawer()
    })
});

function convertToMobile() {
    $("*[id^='_desktop_']").each(function(index, element) {
        var target = $("#" + element.id.replace("_desktop_", "_mobile_"));
        swapElements($(this), target)
    }), $(window).scroll(function() {
        $(this).scrollTop() > 1e3 ? $(".sticky-cartbtn").fadeIn(500) : $(".sticky-cartbtn").fadeOut(500)
    }), $(".stickyaddtocart").show()
}

function convertToDesktop() {
    $("*[id^='_mobile_']").each(function(index, element) {
        var target = $("#" + element.id.replace("_mobile_", "_desktop_"));
        swapElements($(this), target)
    }), $("#main-media-container").length && $("#main-media-container img").elevateZoom({
        zoomType: "inner",
        cursor: "crosshair"
    }), $(".stickyaddtocart").hide()
}

function swapElements(source, destination) {
    var temp = destination.children().detach();
    destination.empty().append(source.children().detach()), source.append(temp)
}

function adjustFixedHeader() {
    var headerHeight = $("#header").height(),
        navmenuHeightDesktop = $(".nav-height .navfullwidth").height(),
        navfullwidthHeightDesktop = headerHeight + navmenuHeightDesktop,
        navHeightDesktop = headerHeight,
        navHeightMobile = $("#header").height();
    $("#header-layout1").length && (window.matchMedia("(min-width: 992px)").matches && ($(".mobile-width").removeClass("fixed-header"), $(window).scrollTop() > navHeightDesktop ? $(".header-top").addClass("fixed-header") : $(".header-top").removeClass("fixed-header")), window.matchMedia("(max-width: 991px)").matches && ($(".header-top").removeClass("fixed-header"), $(window).scrollTop() > navHeightMobile ? $(".mobile-width").addClass("fixed-header") : $(".mobile-width").removeClass("fixed-header"))), $("#header-layout2").length && (window.matchMedia("(min-width: 992px)").matches && ($(".mobile-width").removeClass("fixed-header"), $(window).scrollTop() > navfullwidthHeightDesktop ? $(".navfullwidth").addClass("fixed-header") : $(".navfullwidth").removeClass("fixed-header")), window.matchMedia("(max-width: 991px)").matches && ($(".navfullwidth").removeClass("fixed-header"), $(window).scrollTop() > navHeightMobile ? $(".mobile-width").addClass("fixed-header") : $(".mobile-width").removeClass("fixed-header")))
}
$(function() {
    var currentAjaxRequest = null,
        searchForms = $('form[action="/search"]').css("position", "relative").each(function() {
            var input = $(this).find('input[name="q"]'),
                offSet = input.position().top + input.innerHeight();
            $('<ul class="search-results"></ul>').css({
                position: "absolute",
                left: "0px",
                top: offSet
            }).appendTo($(this)).hide(), input.attr("autocomplete", "off").bind("keyup change", function() {
                var term = $(this).val(),
                    form = $(this).closest("form"),
                    searchURL = "/search?type=product&q=" + term,
                    resultsList = form.find(".search-results");
                term.length > 3 && term != $(this).attr("data-old-term") && ($(this).attr("data-old-term", term), currentAjaxRequest != null && currentAjaxRequest.abort(), currentAjaxRequest = $.getJSON(searchURL + "&view=json", function(data) {
                    resultsList.empty(), data.results_count == 0 ? resultsList.hide() : ($.each(data.results, function(index, item) {
                        var link = $("<a></a>").attr("href", item.url);
                        link.append('<span class="thumbnail"><img src="' + item.thumbnail + '" /></span>'), link.append('<span class="type">' + item.type + "</span>"), link.append('<span class="title">' + item.title + "</span>"), link.append('<span class="price">' + item.price + "</span>"), link.wrap("<li></li>"), resultsList.append(link.parent())
                    }), data.results_count > 10 && resultsList.append('<li><span class="title"><a href="' + searchURL + '">See all results (' + data.results_count + ")</a></span></li>"), resultsList.fadeIn(200))
                }))
            })
        });
    $("body").bind("click", function() {
        $(".search-results").hide()
    }), $(document).on("click", ".variants-swatch .color-box", function() {
        var image = this.getAttribute("data-image");
        $(this).parents(".variants-swatch").find(".swatch-label").removeClass("active"), $(this).parents(".swatch-label").addClass("active"), $(this).parents(".card-wrapper").find(".thumbnail .primary-image").attr("src", image), $(this).parents(".card-wrapper").find(".thumbnail .primary-image").attr("srcset", image)
    }), $(document).on("click", ".item-swatch-more .number-showmore", function(event) {
        $(event.target).closest(".variants-swatch").hasClass("show--more") ? $(event.target).closest(".variants-swatch").removeClass("show--more") : $(event.target).closest(".variants-swatch").addClass("show--more")
    })
});
var variantAvailability = [],
    variantFeaturedImg = [],
    variantIndexIdMapping = [],
    currentVariants = {},
    availableVariants = [],
    variantCompareAtPrice = [],
    variantPrice = [];

function loadQuickView(handle, btn) {
    variantAvailability = [], variantFeaturedImg = [], variantIndexIdMapping = [], currentVariants = {}, availableVariants = [], variantCompareAtPrice = [], variantPrice = [], $("#qv-variants").html(""), jQuery.getJSON("/products/" + handle + ".js", function(product) {
        $("#qv-productname").html(product.title), $("#qv-productdescription").html(product.description), product.description.length < 300 ? $(".more-description").css("display", "none") : $(".more-description").css("display", "block"), $("#qv-product-cover img").attr("src", product.featured_image);
        var reviews = $('[data-handle="' + handle + '"]').parents(".card-wrapper").find(".spr-badge").clone();
        if ($("#qv-spr-badge").html(reviews.html()), prepareQvThumbnails(product.images), product.variants.length > 1) {
            var colorNameList = "color,colour,couleur,colore,farbe,\uC0C9,\u8272,f\xE4rg,farve";
            colorNameList = colorNameList.split(","), $(product.options).each(function(i, option) {
                var name = option.name,
                    includesColor = colorNameList.includes(name.toLowerCase()),
                    swatchWrapper = $('<div class="swatch-wrapper" data-index="' + option.position + '"></div>'),
                    optionValues = $('<div class="option-values product-form__input ' + name.toLowerCase() + '"></div>');
                swatchWrapper.append('<div class="option-label"><label>' + name + "</label></div>"), $(option.values).each(function(i2, value) {
                    var checked = "";
                    i2 == 0 && (checked = "checked"), optionValues.append('<input id="' + name + "-" + i2 + '" type="radio" value="' + value + '" name="' + name + '"' + checked + ">");
                    var className = includesColor || value.length < 3 ? "square" : "label";
                    if (includesColor) {
                        var dummyImg = "//choice-ishi.myshopify.com/cdn/shop/files/dummy?46341",
                            dummyImgURL = dummyImg.substr(0, dummyImg.indexOf("dummy")),
                            dummyImgVersion = dummyImg.substr(dummyImg.indexOf("?")),
                            imgURL = "background-color:" + value + "; background-image: url('" + dummyImgURL + value + ".png" + dummyImgVersion + "')";
                        optionValues.append('<label style="' + imgURL + '" for="' + name + "-" + i2 + '" data-color="' + value + '" data-index="' + i2 + '"></label>')
                    } else optionValues.append('<label for="' + name + "-" + i2 + '" class="' + className + '" data-index="' + i2 + '">' + value + "</label>")
                }), swatchWrapper.append(optionValues), $("#qv-variants").append(swatchWrapper)
            }), $(product.options).each(function(i, option) {
                var name = option.name,
                    selectWrapper = $('<div class="dropdown-wrapper"></div>'),
                    optionValues = $('<div class="option-values product-form__input"></div>'),
                    selectBoxWrapper = $('<div class="select"></div>'),
                    selectBox = $('<select id="select-option' + option.position + '" name="options[' + option.position + ']" class="select__select"></select>');
                selectWrapper.append('<div class="option-label"><label>' + name + "</label></div>"), $(option.values).each(function(i2, value) {
                    var selected = "";
                    i2 == 0 && (selected = "selected"), selectBox.append('<option value="' + value + '" ' + selected + ">" + value + "</option>")
                }), selectBoxWrapper.append(selectBox), optionValues.append(selectBoxWrapper), selectWrapper.append(optionValues), $("#qv-variants").append(selectWrapper)
            }), $(product.variants).each(function(index, variant2) {
                for (var variantsList = variant2.title.split("/"), variantsKeyVal = {}, i = 0; i < variantsList.length; i++) variantsKeyVal["select-option" + (i + 1)] = variantsList[i].trim();
                variantIndexIdMapping.push(variant2.id), availableVariants.push(variantsKeyVal), variantAvailability.push(variant2.available), variantFeaturedImg.push(variant2.featured_image.src), variantCompareAtPrice.push(variant2.compare_at_price), variantPrice.push(variant2.price)
            }), loadCurrentQvVariants(), updateQvVariantDetails()
        } else {
            var variant = product.variants[0];
            $("#qv-variantid").val(variant.id), variant.available ? $("#qv-add-to-cart").removeClass("sold-out") : $("#qv-add-to-cart").addClass("sold-out"), variant.compare_at_price != null && variant.compare_at_price > variant.price ? ($("#qv-compareatprice").html(convertToMoney(variant.compare_at_price)), $("#qv-price").html(convertToMoney(variant.price))) : ($("#qv-compareatprice").html(""), $("#qv-price").html(convertToMoney(variant.price)))
        }
        $(".qv-wrapper").removeClass("loading")
    })
}

function prepareQvThumbnails(images) {
    var rtlFlag = !!$("body").hasClass("lang-rtl"),
        thumbnailContainer = $("#qv-thumbnails"),
        thumbnailSliderWrapper = $('<div class="owl-carousel"></div>');
    $(images).each(function(i, src) {
        thumbnailSliderWrapper.append('<div class="thumb-item item"><img data-src="' + src + '" alt="qv-img" class="lazyload"></div>')
    }), thumbnailContainer.html(thumbnailSliderWrapper), thumbnailSliderWrapper.owlCarousel({
        nav: !0,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        dots: !1,
        loop: !1,
        margin: 15,
        rtl: rtlFlag,
        rewind: !0,
        responsive: {
            0: {
                items: 3
            },
            544: {
                items: 4
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    })
}

function loadCurrentQvVariants() {
    $("#qv-variants .dropdown-wrapper").each(function(index) {
        currentVariants["select-option" + (index + 1)] = $(this).find("select.select__select").val()
    })
}

function updateQvVariantDetails() {
    for (var index = 0, available = !1, i = 0; i < availableVariants.length;) {
        if (matchArray(availableVariants[i], currentVariants) && (index = i), matchArray(availableVariants[i], currentVariants) && variantAvailability[i]) {
            available = !0;
            break
        }
        i++
    }
    $("#qv-vaiantid").val(variantIndexIdMapping[index]), available ? $("#qv-add-to-cart").removeClass("sold-out") : $("#qv-add-to-cart").addClass("sold-out"), $("#qv-product-cover img").attr("src", variantFeaturedImg[index]);
    var price = variantPrice[index],
        compare_at_price = variantCompareAtPrice[index];
    compare_at_price != null && compare_at_price > price ? ($("#qv-compareatprice").html(convertToMoney(compare_at_price)), $("#qv-price").html(convertToMoney(price))) : ($("#qv-compareatprice").html(""), $("#qv-price").html(convertToMoney(price)))
}

function matchArray(a, b) {
    var match = !0;
    for (var key in a) a[key] != b[key] && (match = !1);
    return match
}
$(document).on("change", "#qv-variants .select__select", function() {
    loadCurrentQvVariants(), updateQvVariantDetails()
}), $(document).on("click", ".swatch-wrapper label", function() {
    var selectorIndex = $(this).parents(".swatch-wrapper").data("index"),
        selector = "#select-option" + selectorIndex + " option",
        index = $(this).data("index");
    $(selector).eq(index).prop("selected", !0).trigger("change")
}), $(document).on("click", ".thumb-item", function() {
    $("#qv-product-cover img").attr("src", $(this).find("img").attr("src"))
}), $(document).on("click", "#qv-add-to-cart", function() {
    if ($(this).hasClass("sold-out")) return !1;
    var variantId = $("#qv-variantid").val(),
        qty = $("#qv-quantity-selector input").val();
    $(this).addClass("loading"), addToCartJS(qty, variantId, this), $("#ModalClose-quick-view").trigger("click")
}), window.matchMedia("(max-width: 991px)").matches && $(window).scroll(function() {
    $(this).scrollTop() > 1e3 ? $(".sticky-cartbtn").fadeIn(500) : $(".sticky-cartbtn").fadeOut(500)
}), $(document).on("click", ".stickyaddtocart", function() {
    $(".product-form__submit").trigger("click")
});