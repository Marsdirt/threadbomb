(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/data/states.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "STATES": (()=>STATES)
});
const STATES = [
    {
        name: "Alabama",
        abbr: "AL"
    },
    {
        name: "Alaska",
        abbr: "AK"
    },
    {
        name: "Arizona",
        abbr: "AZ"
    },
    {
        name: "Arkansas",
        abbr: "AR"
    },
    {
        name: "California",
        abbr: "CA"
    },
    {
        name: "Colorado",
        abbr: "CO"
    },
    {
        name: "Connecticut",
        abbr: "CT"
    },
    {
        name: "Delaware",
        abbr: "DE"
    },
    {
        name: "Florida",
        abbr: "FL"
    },
    {
        name: "Georgia",
        abbr: "GA"
    },
    {
        name: "Hawaii",
        abbr: "HI"
    },
    {
        name: "Idaho",
        abbr: "ID"
    },
    {
        name: "Illinois",
        abbr: "IL"
    },
    {
        name: "Indiana",
        abbr: "IN"
    },
    {
        name: "Iowa",
        abbr: "IA"
    },
    {
        name: "Kansas",
        abbr: "KS"
    },
    {
        name: "Kentucky",
        abbr: "KY"
    },
    {
        name: "Louisiana",
        abbr: "LA"
    },
    {
        name: "Maine",
        abbr: "ME"
    },
    {
        name: "Maryland",
        abbr: "MD"
    },
    {
        name: "Massachusetts",
        abbr: "MA"
    },
    {
        name: "Michigan",
        abbr: "MI"
    },
    {
        name: "Minnesota",
        abbr: "MN"
    },
    {
        name: "Mississippi",
        abbr: "MS"
    },
    {
        name: "Missouri",
        abbr: "MO"
    },
    {
        name: "Montana",
        abbr: "MT"
    },
    {
        name: "Nebraska",
        abbr: "NE"
    },
    {
        name: "Nevada",
        abbr: "NV"
    },
    {
        name: "New Hampshire",
        abbr: "NH"
    },
    {
        name: "New Jersey",
        abbr: "NJ"
    },
    {
        name: "New Mexico",
        abbr: "NM"
    },
    {
        name: "New York",
        abbr: "NY"
    },
    {
        name: "North Carolina",
        abbr: "NC"
    },
    {
        name: "North Dakota",
        abbr: "ND"
    },
    {
        name: "Ohio",
        abbr: "OH"
    },
    {
        name: "Oklahoma",
        abbr: "OK"
    },
    {
        name: "Oregon",
        abbr: "OR"
    },
    {
        name: "Pennsylvania",
        abbr: "PA"
    },
    {
        name: "Rhode Island",
        abbr: "RI"
    },
    {
        name: "South Carolina",
        abbr: "SC"
    },
    {
        name: "South Dakota",
        abbr: "SD"
    },
    {
        name: "Tennessee",
        abbr: "TN"
    },
    {
        name: "Texas",
        abbr: "TX"
    },
    {
        name: "Utah",
        abbr: "UT"
    },
    {
        name: "Vermont",
        abbr: "VT"
    },
    {
        name: "Virginia",
        abbr: "VA"
    },
    {
        name: "Washington",
        abbr: "WA"
    },
    {
        name: "West Virginia",
        abbr: "WV"
    },
    {
        name: "Wisconsin",
        abbr: "WI"
    },
    {
        name: "Wyoming",
        abbr: "WY"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/VintageClothingSearch.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>VintageClothingSearch)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-select/dist/react-select.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$states$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/states.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// State to Craigslist city/zip mapping (reuse existing data)
const CRAIGSLIST_STATE_CITIES = {
    AL: {
        city: "clanton",
        zip: "35045",
        subdomain: "bham"
    },
    AK: {
        city: "fairbanks",
        zip: "99701",
        subdomain: "fairbanks"
    },
    AZ: {
        city: "phoenix",
        zip: "85003",
        subdomain: "phoenix"
    },
    AR: {
        city: "littlerock",
        zip: "72201",
        subdomain: "littlerock"
    },
    CA: {
        city: "madera",
        zip: "93637",
        subdomain: "fresno"
    },
    CO: {
        city: "coloradosprings",
        zip: "80903",
        subdomain: "cosprings"
    },
    CT: {
        city: "middletown",
        zip: "06457",
        subdomain: "newhaven"
    },
    DE: {
        city: "dover",
        zip: "19901",
        subdomain: "delaware"
    },
    FL: {
        city: "ocala",
        zip: "34470",
        subdomain: "ocala"
    },
    GA: {
        city: "macon",
        zip: "31201",
        subdomain: "macon"
    },
    HI: {
        city: "hilo",
        zip: "96720",
        subdomain: "hawaii"
    },
    ID: {
        city: "boise",
        zip: "83702",
        subdomain: "boise"
    },
    IL: {
        city: "springfield",
        zip: "62701",
        subdomain: "springfieldil"
    },
    IN: {
        city: "indianapolis",
        zip: "46201",
        subdomain: "indianapolis"
    },
    IA: {
        city: "desmoines",
        zip: "50309",
        subdomain: "desmoines"
    },
    KS: {
        city: "salina",
        zip: "67401",
        subdomain: "salina"
    },
    KY: {
        city: "lexington",
        zip: "40502",
        subdomain: "lexington"
    },
    LA: {
        city: "alexandria",
        zip: "71301",
        subdomain: "cenla"
    },
    ME: {
        city: "bangor",
        zip: "04401",
        subdomain: "maine"
    },
    MD: {
        city: "frederick",
        zip: "21701",
        subdomain: "frederick"
    },
    MA: {
        city: "worcester",
        zip: "01608",
        subdomain: "worcester"
    },
    MI: {
        city: "lansing",
        zip: "48915",
        subdomain: "lansing"
    },
    MN: {
        city: "stcloud",
        zip: "56301",
        subdomain: "stcloud"
    },
    MS: {
        city: "jackson",
        zip: "39201",
        subdomain: "jackson"
    },
    MO: {
        city: "columbia",
        zip: "65201",
        subdomain: "columbiamo"
    },
    MT: {
        city: "lewistown",
        zip: "59457",
        subdomain: "montana"
    },
    NE: {
        city: "grandisland",
        zip: "68801",
        subdomain: "grandisland"
    },
    NV: {
        city: "ely",
        zip: "89301",
        subdomain: "elko"
    },
    NH: {
        city: "concord",
        zip: "03301",
        subdomain: "nh"
    },
    NJ: {
        city: "trenton",
        zip: "08608",
        subdomain: "cnj"
    },
    NM: {
        city: "albuquerque",
        zip: "87102",
        subdomain: "albuquerque"
    },
    NY: {
        city: "utica",
        zip: "13501",
        subdomain: "utica"
    },
    NC: {
        city: "greensboro",
        zip: "27401",
        subdomain: "greensboro"
    },
    ND: {
        city: "bismarck",
        zip: "58501",
        subdomain: "bismarck"
    },
    OH: {
        city: "columbus",
        zip: "43215",
        subdomain: "columbus"
    },
    OK: {
        city: "oklahomacity",
        zip: "73102",
        subdomain: "oklahomocity"
    },
    OR: {
        city: "bend",
        zip: "97701",
        subdomain: "bend"
    },
    PA: {
        city: "harrisburg",
        zip: "17101",
        subdomain: "harrisburg"
    },
    RI: {
        city: "providence",
        zip: "02903",
        subdomain: "providence"
    },
    SC: {
        city: "columbia",
        zip: "29201",
        subdomain: "columbia"
    },
    SD: {
        city: "pierre",
        zip: "57501",
        subdomain: "sd"
    },
    TN: {
        city: "cookeville",
        zip: "38501",
        subdomain: "nashville"
    },
    TX: {
        city: "abilene",
        zip: "79601",
        subdomain: "abilene"
    },
    UT: {
        city: "saltlakecity",
        zip: "84111",
        subdomain: "saltlakecity"
    },
    VT: {
        city: "montpelier",
        zip: "05602",
        subdomain: "vermont"
    },
    VA: {
        city: "richmond",
        zip: "23219",
        subdomain: "richmond"
    },
    WA: {
        city: "ellensburg",
        zip: "98926",
        subdomain: "kpr"
    },
    WV: {
        city: "charleston",
        zip: "25301",
        subdomain: "charlestonwv"
    },
    WI: {
        city: "stevenspoint",
        zip: "54481",
        subdomain: "wausau"
    },
    WY: {
        city: "casper",
        zip: "82601",
        subdomain: "wyoming"
    }
};
// Facebook Marketplace region codes by state
const FACEBOOK_REGION_CODES = {
    AZ: "109546952404225",
    NM: "109546952404225",
    NV: "109546952404225",
    UT: "109546952404225",
    CA: "109546952404225",
    WA: "113093802034968",
    OR: "113093802034968",
    ID: "113093802034968",
    AK: "113093802034968",
    TX: "105590109474550",
    CO: "106084172755635",
    MT: "106084172755635",
    WY: "106084172755635",
    AL: "105701396129318",
    AR: "105701396129318",
    GA: "105701396129318",
    KY: "105701396129318",
    LA: "105701396129318",
    MS: "105701396129318",
    NC: "105701396129318",
    SC: "105701396129318",
    TN: "105701396129318",
    VA: "105701396129318",
    WV: "105701396129318",
    IL: "108018822553353",
    IN: "108018822553353",
    IA: "108018822553353",
    KS: "108018822553353",
    MI: "108018822553353",
    MN: "108018822553353",
    MO: "108018822553353",
    NE: "108018822553353",
    ND: "108018822553353",
    OH: "108018822553353",
    SD: "108018822553353",
    WI: "108018822553353",
    FL: "113541638659587",
    DE: "107524245944156",
    MD: "107524245944156",
    NJ: "107524245944156",
    NY: "107524245944156",
    PA: "107524245944156",
    CT: "107524245944156",
    ME: "107524245944156",
    MA: "107524245944156",
    NH: "107524245944156",
    RI: "107524245944156",
    VT: "107524245944156",
    DC: "107524245944156"
};
const STATE_OPTIONS = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$states$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATES"].map(_c = (s)=>({
        value: s.abbr,
        label: s.name
    }));
_c1 = STATE_OPTIONS;
function makeEbayUrl({ searchQuery, minPrice, maxPrice }) {
    const searchTerms = searchQuery ? `${searchQuery} vintage` : "vintage clothing";
    let url = `https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(searchTerms)}`;
    url += "&_sacat=1059"; // Men's Clothing category
    if (minPrice) url += `&_udlo=${encodeURIComponent(minPrice)}`;
    if (maxPrice) url += `&_udhi=${encodeURIComponent(maxPrice)}`;
    url += "&LH_ItemCondition=3000"; // Used condition
    return url;
}
function makeVintedUrl({ searchQuery, minPrice, maxPrice }) {
    const searchTerms = searchQuery || "vintage clothing";
    let url = `https://www.vinted.com/vetements?search_text=${encodeURIComponent(searchTerms)}`;
    if (minPrice) url += `&price_from=${encodeURIComponent(minPrice)}`;
    if (maxPrice) url += `&price_to=${encodeURIComponent(maxPrice)}`;
    return url;
}
function makeDepopUrl({ searchQuery }) {
    const searchTerms = searchQuery ? `${searchQuery} vintage` : "vintage clothing";
    return `https://www.depop.com/search/?q=${encodeURIComponent(searchTerms)}`;
}
function makePoshmarkUrl({ searchQuery, minPrice, maxPrice }) {
    const searchTerms = searchQuery || "vintage clothing";
    let url = `https://poshmark.com/search?query=${encodeURIComponent(searchTerms)}&type=listings&src=dir`;
    if (minPrice && maxPrice) {
        url += `&price=${encodeURIComponent(minPrice)}-${encodeURIComponent(maxPrice)}`;
    } else if (minPrice) {
        url += `&price=${encodeURIComponent(minPrice)}-`;
    } else if (maxPrice) {
        url += `&price=0-${encodeURIComponent(maxPrice)}`;
    }
    return url;
}
function makeEtsyUrl({ searchQuery, minPrice, maxPrice }) {
    const searchTerms = searchQuery ? `${searchQuery} vintage` : "vintage clothing";
    let url = `https://www.etsy.com/search?q=${encodeURIComponent(searchTerms)}`;
    if (minPrice) url += `&min_price=${encodeURIComponent(minPrice)}`;
    if (maxPrice) url += `&max_price=${encodeURIComponent(maxPrice)}`;
    url += "&explicit=1&is_vintage=true";
    return url;
}
function makeGrailedUrl({ searchQuery, minPrice, maxPrice }) {
    const searchTerms = searchQuery || "vintage";
    let url = `https://www.grailed.com/shop?query=${encodeURIComponent(searchTerms)}`;
    if (minPrice && maxPrice) {
        url += `&price_from=${encodeURIComponent(minPrice)}&price_to=${encodeURIComponent(maxPrice)}`;
    } else if (minPrice) {
        url += `&price_from=${encodeURIComponent(minPrice)}`;
    } else if (maxPrice) {
        url += `&price_to=${encodeURIComponent(maxPrice)}`;
    }
    return url;
}
function makeVescaUrl({ searchQuery }) {
    const searchTerms = searchQuery || "vintage";
    return `https://vestiairecollective.com/search/?q=${encodeURIComponent(searchTerms)}`;
}
function makeCraigslistUrl({ subdomain, minPrice, maxPrice, zip, searchQuery }) {
    let url = `https://${subdomain}.craigslist.org/search/clo?bundleDuplicates=1`;
    if (maxPrice) url += `&max_price=${encodeURIComponent(maxPrice)}`;
    if (minPrice) url += `&min_price=${encodeURIComponent(minPrice)}`;
    if (zip) url += `&postal=${encodeURIComponent(zip)}`;
    const searchTerms = searchQuery ? `${searchQuery} vintage` : "vintage clothing";
    url += `&query=${encodeURIComponent(searchTerms)}`;
    url += `&search_distance=50&sort=date`;
    return url;
}
function makeFacebookMarketplaceUrl({ regionCode, searchQuery, minPrice, maxPrice }) {
    const searchTerms = searchQuery ? `${searchQuery} vintage` : "vintage clothing";
    const query = encodeURIComponent(searchTerms);
    let url = `https://www.facebook.com/marketplace/${regionCode}/search?query=${query}&exact=false`;
    if (minPrice) url += `&minPrice=${encodeURIComponent(minPrice)}`;
    if (maxPrice) url += `&maxPrice=${encodeURIComponent(maxPrice)}`;
    return url;
}
function buildSearchLinks({ searchQuery, minPrice, maxPrice, selectedStateAbbrs }) {
    const abbrToName = Object.fromEntries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$states$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATES"].map((s)=>[
            s.abbr,
            s.name
        ]));
    const links = [];
    // Vinted - nationwide
    links.push({
        name: "Vinted",
        url: makeVintedUrl({
            searchQuery,
            minPrice,
            maxPrice
        })
    });
    // Depop - nationwide
    links.push({
        name: "Depop",
        url: makeDepopUrl({
            searchQuery
        })
    });
    // Poshmark - nationwide
    links.push({
        name: "Poshmark",
        url: makePoshmarkUrl({
            searchQuery,
            minPrice,
            maxPrice
        })
    });
    // Etsy - nationwide
    links.push({
        name: "Etsy",
        url: makeEtsyUrl({
            searchQuery,
            minPrice,
            maxPrice
        })
    });
    // Grailed - nationwide (men's streetwear focus)
    links.push({
        name: "Grailed",
        url: makeGrailedUrl({
            searchQuery,
            minPrice,
            maxPrice
        })
    });
    // Vestiaire Collective - worldwide luxury
    links.push({
        name: "Vestiaire Collective",
        url: makeVescaUrl({
            searchQuery
        })
    });
    // eBay - nationwide
    links.push({
        name: "eBay",
        url: makeEbayUrl({
            searchQuery,
            minPrice,
            maxPrice
        })
    });
    // Craigslist: one link per selected state
    const craigslistLinks = selectedStateAbbrs.filter((abbr)=>CRAIGSLIST_STATE_CITIES[abbr]).map((abbr)=>{
        const { zip, subdomain } = CRAIGSLIST_STATE_CITIES[abbr];
        return {
            name: `Craigslist (${abbrToName[abbr]})`,
            url: makeCraigslistUrl({
                subdomain,
                minPrice,
                maxPrice,
                zip,
                searchQuery
            })
        };
    });
    // Facebook Marketplace: one link per selected state (by region)
    const facebookLinks = selectedStateAbbrs.filter((abbr)=>FACEBOOK_REGION_CODES[abbr]).map((abbr)=>({
            name: `Facebook Marketplace (${abbrToName[abbr]})`,
            url: makeFacebookMarketplaceUrl({
                regionCode: FACEBOOK_REGION_CODES[abbr],
                searchQuery,
                minPrice,
                maxPrice
            })
        }));
    return [
        ...links,
        ...craigslistLinks,
        ...facebookLinks
    ];
}
function VintageClothingSearch() {
    _s();
    const [brand, setBrand] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // Now represents the full search query
    const [minPrice, setMinPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [maxPrice, setMaxPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedStates, setSelectedStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showLinks, setShowLinks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastClickedUrl, setLastClickedUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSearch = ()=>setShowLinks(true);
    const handleReset = ()=>{
        setBrand("");
        setMinPrice("");
        setMaxPrice("");
        setSelectedStates([]);
        setShowLinks(false);
    };
    const searchLinks = buildSearchLinks({
        searchQuery: brand,
        minPrice,
        maxPrice,
        selectedStateAbbrs: selectedStates.map((s)=>s.value)
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex flex-col items-center justify-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-r from-orange-600 to-amber-700 text-cream px-8 py-4 rounded-lg shadow-lg border-2 border-orange-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-4xl mr-3",
                                    children: "💣"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                    lineNumber: 356,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-4xl font-extrabold tracking-wide",
                                    children: "ThreadBomb"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                    lineNumber: 357,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-4xl ml-3",
                                    children: "👕"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                    lineNumber: 360,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/VintageClothingSearch.tsx",
                            lineNumber: 355,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/VintageClothingSearch.tsx",
                        lineNumber: 354,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-amber-800 text-lg font-semibold mt-3 text-center",
                        children: "Explode Your Wardrobe with Retro Finds"
                    }, void 0, false, {
                        fileName: "[project]/src/components/VintageClothingSearch.tsx",
                        lineNumber: 363,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/VintageClothingSearch.tsx",
                lineNumber: 353,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-orange-300 rounded-xl shadow-xl p-8 w-full max-w-md mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold mb-6 text-center text-amber-900",
                                children: "Find Vintage Treasures"
                            }, void 0, false, {
                                fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                lineNumber: 371,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block font-semibold mb-2 text-amber-800",
                                                children: "What are you looking for?"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                                lineNumber: 376,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "border-2 border-orange-200 rounded-lg px-3 py-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-cream text-amber-900 placeholder-amber-600",
                                                value: brand,
                                                onChange: (e)=>setBrand(e.target.value),
                                                placeholder: "e.g. Kiss band shirt, Levi's jeans, vintage Nike"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                                lineNumber: 377,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-amber-700 mt-1",
                                                children: "Keep it simple! Try brand names, band names, or clothing types for best results"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                                lineNumber: 383,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                        lineNumber: 375,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block font-semibold mb-2 text-amber-800",
                                                        children: "Min Price"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                                        lineNumber: 388,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute left-3 top-1/2 -translate-y-1/2 text-amber-600",
                                                                children: "$"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                                                lineNumber: 390,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                className: "border-2 border-orange-200 rounded-lg pl-7 pr-3 py-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-cream text-amber-900",
                                                                value: minPrice,
                                                                onChange: (e)=>setMinPrice(e.target.value),
                                                                type: "number",
                                                                min: "0",
                                                                placeholder: "0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                                                lineNumber: 391,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                                        lineNumber: 389,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                                lineNumber: 387,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block font-semibold mb-2 text-amber-800",
                                                        children: "Max Price"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                                        lineNumber: 402,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute left-3 top-1/2 -translate-y-1/2 text-amber-600",
                                                                children: "$"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                                                lineNumber: 404,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                className: "border-2 border-orange-200 rounded-lg pl-7 pr-3 py-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-cream text-amber-900",
                                                                value: maxPrice,
                                                                onChange: (e)=>setMaxPrice(e.target.value),
                                                                type: "number",
                                                                min: "0",
                                                                placeholder: "500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                                                lineNumber: 405,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                                lineNumber: 401,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                        lineNumber: 386,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block font-semibold mb-2 text-amber-800",
                                                children: "State(s) for local searches (optional):"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                                lineNumber: 418,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                                                options: STATE_OPTIONS,
                                                value: selectedStates,
                                                onChange: (opts)=>setSelectedStates(opts),
                                                isMulti: true,
                                                isSearchable: true,
                                                placeholder: "Select state(s)...",
                                                className: "w-full",
                                                classNamePrefix: "react-select",
                                                closeMenuOnSelect: false,
                                                hideSelectedOptions: false,
                                                styles: {
                                                    control: (base)=>({
                                                            ...base,
                                                            borderColor: '#fed7aa',
                                                            '&:hover': {
                                                                borderColor: '#fb923c'
                                                            },
                                                            boxShadow: 'none',
                                                            backgroundColor: '#fffbeb',
                                                            minHeight: '48px'
                                                        }),
                                                    option: (base, state)=>({
                                                            ...base,
                                                            backgroundColor: state.isFocused ? '#fed7aa' : '#fffbeb',
                                                            color: '#92400e'
                                                        }),
                                                    multiValue: (base)=>({
                                                            ...base,
                                                            backgroundColor: '#f59e0b',
                                                            color: '#92400e'
                                                        }),
                                                    multiValueLabel: (base)=>({
                                                            ...base,
                                                            color: '#fffbeb'
                                                        })
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                                lineNumber: 419,
                                                columnNumber: 15
                                            }, this),
                                            selectedStates.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-orange-700 mt-2 bg-orange-100 p-2 rounded border border-orange-200",
                                                children: [
                                                    "💡 ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Tip:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                                        lineNumber: 457,
                                                        columnNumber: 22
                                                    }, this),
                                                    " Select states to search Craigslist & Facebook Marketplace for local deals"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                                lineNumber: 456,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-amber-700 mt-1",
                                                children: [
                                                    "Searching ",
                                                    selectedStates.length,
                                                    " state",
                                                    selectedStates.length > 1 ? 's' : '',
                                                    " for local listings"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                                lineNumber: 460,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                        lineNumber: 417,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3 justify-center mt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleReset,
                                                className: "bg-gradient-to-r from-amber-200 to-orange-200 hover:from-amber-300 hover:to-orange-300 text-amber-900 px-6 py-3 rounded-lg font-bold transition-all border-2 border-amber-400 shadow-md hover:shadow-lg",
                                                type: "button",
                                                children: "Reset"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                                lineNumber: 467,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleSearch,
                                                className: "bg-gradient-to-r from-orange-600 to-amber-700 hover:from-orange-700 hover:to-amber-800 text-cream px-10 py-3 rounded-lg text-lg font-bold shadow-lg transition-all border-2 border-orange-800 hover:shadow-xl",
                                                style: {
                                                    minWidth: "180px"
                                                },
                                                type: "button",
                                                children: "💣 Bomb Away!"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                                lineNumber: 474,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                        lineNumber: 466,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                lineNumber: 374,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/VintageClothingSearch.tsx",
                        lineNumber: 370,
                        columnNumber: 9
                    }, this),
                    showLinks && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-8 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-orange-300 rounded-xl shadow-xl p-6 w-full max-w-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold mb-4 text-center text-amber-900",
                                children: "Search Results"
                            }, void 0, false, {
                                fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                lineNumber: 489,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-3 max-h-[600px] overflow-y-auto",
                                children: searchLinks.map((link, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: link.url,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: `block rounded-lg px-4 py-3 font-semibold text-center transition-all border-2
                        ${lastClickedUrl === link.url ? "bg-gradient-to-r from-orange-600 to-amber-700 text-cream ring-2 ring-orange-400 border-orange-800" : "bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-cream shadow-md border-orange-700 hover:shadow-lg"}
                      `,
                                                    onClick: ()=>setLastClickedUrl(link.url),
                                                    children: link.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                                    lineNumber: 496,
                                                    columnNumber: 21
                                                }, this),
                                                link.note && link.note !== "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-red-700 mt-1 text-center bg-red-100 p-2 rounded border border-red-300",
                                                    children: link.note
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                                    lineNumber: 510,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                            lineNumber: 495,
                                            columnNumber: 19
                                        }, this)
                                    }, link.url, false, {
                                        fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                        lineNumber: 494,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                lineNumber: 492,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-amber-800 mt-4 text-center bg-amber-100 p-3 rounded border border-amber-300",
                                children: [
                                    "💡 ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Pro Tip:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                        lineNumber: 519,
                                        columnNumber: 18
                                    }, this),
                                    " Set a minimum price to filter out fast fashion and find authentic vintage pieces"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/VintageClothingSearch.tsx",
                                lineNumber: 518,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/VintageClothingSearch.tsx",
                        lineNumber: 488,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/VintageClothingSearch.tsx",
                lineNumber: 369,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-amber-800 mt-12 text-center bg-gradient-to-r from-amber-100 to-orange-100 p-4 rounded-lg border border-amber-300 max-w-md mx-auto",
                children: "ThreadBomb isn't affiliated with any marketplace—we just help you discover vintage treasures across the web."
            }, void 0, false, {
                fileName: "[project]/src/components/VintageClothingSearch.tsx",
                lineNumber: 526,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/VintageClothingSearch.tsx",
        lineNumber: 351,
        columnNumber: 5
    }, this);
}
_s(VintageClothingSearch, "zSAUm6OYgiEcQBXA2H5MeHWV5ss=");
_c2 = VintageClothingSearch;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "STATE_OPTIONS$STATES.map");
__turbopack_context__.k.register(_c1, "STATE_OPTIONS");
__turbopack_context__.k.register(_c2, "VintageClothingSearch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_15a720b9._.js.map