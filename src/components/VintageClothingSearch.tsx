"use client";

import React, { useState } from "react";
import Select from "react-select";
import { STATES } from "../data/states";
import Image from "next/image";

// Facebook Marketplace region codes by state
const FACEBOOK_REGION_CODES: Record<string, string> = {
  AZ: "109546952404225", NM: "109546952404225", NV: "109546952404225", UT: "109546952404225", CA: "109546952404225",
  WA: "113093802034968", OR: "113093802034968", ID: "113093802034968", AK: "113093802034968",
  TX: "105590109474550",
  CO: "106084172755635", MT: "106084172755635", WY: "106084172755635",
  AL: "105701396129318", AR: "105701396129318", GA: "105701396129318", KY: "105701396129318", LA: "105701396129318",
  MS: "105701396129318", NC: "105701396129318", SC: "105701396129318", TN: "105701396129318", VA: "105701396129318", WV: "105701396129318",
  IL: "108018822553353", IN: "108018822553353", IA: "108018822553353", KS: "108018822553353", MI: "108018822553353",
  MN: "108018822553353", MO: "108018822553353", NE: "108018822553353", ND: "108018822553353", OH: "108018822553353",
  SD: "108018822553353", WI: "108018822553353",
  FL: "113541638659587",
  DE: "107524245944156", MD: "107524245944156", NJ: "107524245944156", NY: "107524245944156", PA: "107524245944156",
  CT: "107524245944156", ME: "107524245944156", MA: "107524245944156", NH: "107524245944156", RI: "107524245944156",
  VT: "107524245944156", DC: "107524245944156",
};

const STATE_OPTIONS = STATES.map(s => ({
  value: s.abbr,
  label: s.name
}));

function makeEbayUrl({
  searchQuery,
  minPrice,
  maxPrice,
}: {
  searchQuery: string;
  minPrice: string;
  maxPrice: string;
}) {
  const searchTerms = searchQuery ? `${searchQuery} vintage` : "vintage clothing";
  let url = `https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(searchTerms)}`;
  url += "&_sacat=1059"; // Men's Clothing category
  if (minPrice) url += `&_udlo=${encodeURIComponent(minPrice)}`;
  if (maxPrice) url += `&_udhi=${encodeURIComponent(maxPrice)}`;
  url += "&LH_ItemCondition=3000"; // Used condition
  return url;
}

function makeVintedUrl({
  searchQuery,
  minPrice,
  maxPrice,
}: {
  searchQuery: string;
  minPrice: string;
  maxPrice: string;
}) {
  const searchTerms = searchQuery || "vintage clothing";
  let url = `https://www.vinted.com/vetements?search_text=${encodeURIComponent(searchTerms)}`;
  if (minPrice) url += `&price_from=${encodeURIComponent(minPrice)}`;
  if (maxPrice) url += `&price_to=${encodeURIComponent(maxPrice)}`;
  return url;
}

function makeDepopUrl({
  searchQuery,
}: {
  searchQuery: string;
}) {
  const searchTerms = searchQuery ? `${searchQuery} vintage` : "vintage clothing";
  return `https://www.depop.com/search/?q=${encodeURIComponent(searchTerms)}`;
}

function makePoshmarkUrl({
  searchQuery,
  minPrice,
  maxPrice,
}: {
  searchQuery: string;
  minPrice: string;
  maxPrice: string;
}) {
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

function makeEtsyUrl({
  searchQuery,
  minPrice,
  maxPrice,
}: {
  searchQuery: string;
  minPrice: string;
  maxPrice: string;
}) {
  const searchTerms = searchQuery ? `${searchQuery} vintage` : "vintage clothing";
  let url = `https://www.etsy.com/search?q=${encodeURIComponent(searchTerms)}`;
  if (minPrice) url += `&min_price=${encodeURIComponent(minPrice)}`;
  if (maxPrice) url += `&max_price=${encodeURIComponent(maxPrice)}`;
  url += "&explicit=1&is_vintage=true";
  return url;
}

function makeGrailedUrl({
  searchQuery,
  minPrice,
  maxPrice,
}: {
  searchQuery: string;
  minPrice: string;
  maxPrice: string;
}) {
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

function makeVescaUrl({
  searchQuery,
}: {
  searchQuery: string;
}) {
  const searchTerms = searchQuery || "vintage";
  return `https://vestiairecollective.com/search/?q=${encodeURIComponent(searchTerms)}`;
}

function makeFacebookMarketplaceUrl({
  regionCode,
  searchQuery,
  minPrice,
  maxPrice,
}: {
  regionCode: string;
  searchQuery: string;
  minPrice?: string;
  maxPrice?: string;
}) {
  const searchTerms = searchQuery ? `${searchQuery} vintage` : "vintage clothing";
  const query = encodeURIComponent(searchTerms);
  let url = `https://www.facebook.com/marketplace/${regionCode}/search?query=${query}&exact=false`;
  if (minPrice) url += `&minPrice=${encodeURIComponent(minPrice)}`;
  if (maxPrice) url += `&maxPrice=${encodeURIComponent(maxPrice)}`;
  return url;
}

function makeOfferUpUrl({
  searchQuery,
  minPrice,
  maxPrice,
  stateAbbr,
}: {
  searchQuery: string;
  minPrice: string;
  maxPrice: string;
  stateAbbr: string;
}) {
  const searchTerms = searchQuery ? `${searchQuery} vintage` : "vintage clothing";
  let url = `https://offerup.com/search/?q=${encodeURIComponent(searchTerms)}`;
  if (minPrice) url += `&price_min=${encodeURIComponent(minPrice)}`;
  if (maxPrice) url += `&price_max=${encodeURIComponent(maxPrice)}`;
  if (stateAbbr) url += `&location=${encodeURIComponent(stateAbbr)}`;
  return url;
}

function makeMercariUrl({
  searchQuery,
  minPrice,
  maxPrice,
}: {
  searchQuery: string;
  minPrice: string;
  maxPrice: string;
}) {
  const searchTerms = searchQuery ? `${searchQuery} vintage` : "vintage clothing";
  let url = `https://www.mercari.com/search/?keyword=${encodeURIComponent(searchTerms)}`;
  if (minPrice && maxPrice) {
    url += `&price_min=${encodeURIComponent(minPrice)}&price_max=${encodeURIComponent(maxPrice)}`;
  } else if (minPrice) {
    url += `&price_min=${encodeURIComponent(minPrice)}`;
  } else if (maxPrice) {
    url += `&price_max=${encodeURIComponent(maxPrice)}`;
  }
  url += "&status=on_sale";
  return url;
}

function buildSearchLinks({
  searchQuery,
  minPrice,
  maxPrice,
  selectedStateAbbrs,
}: {
  searchQuery: string;
  minPrice: string;
  maxPrice: string;
  selectedStateAbbrs: string[];
}): { name: string; url: string; note?: string }[] {
  const abbrToName = Object.fromEntries(STATES.map(s => [s.abbr, s.name]));
  
  const links = [];

  // Vinted - nationwide
  links.push({
    name: "Vinted",
    url: makeVintedUrl({ searchQuery, minPrice, maxPrice }),
  });

  // Depop - nationwide
  links.push({
    name: "Depop",
    url: makeDepopUrl({ searchQuery }),
  });

  // Poshmark - nationwide
  links.push({
    name: "Poshmark",
    url: makePoshmarkUrl({ searchQuery, minPrice, maxPrice }),
  });

  // Etsy - nationwide
  links.push({
    name: "Etsy",
    url: makeEtsyUrl({ searchQuery, minPrice, maxPrice }),
  });

  // Grailed - nationwide (men's streetwear focus)
  links.push({
    name: "Grailed",
    url: makeGrailedUrl({ searchQuery, minPrice, maxPrice }),
  });

  // Vestiaire Collective - worldwide luxury
  links.push({
    name: "Vestiaire Collective",
    url: makeVescaUrl({ searchQuery }),
  });

  // Mercari - nationwide
  links.push({
    name: "Mercari",
    url: makeMercariUrl({ searchQuery, minPrice, maxPrice }),
  });

  // OfferUp - nationwide (with shipping)
  links.push({
    name: "OfferUp",
    url: makeOfferUpUrl({ searchQuery, minPrice, maxPrice, stateAbbr: "" }),
  });

  // eBay - nationwide
  links.push({
    name: "eBay",
    url: makeEbayUrl({ searchQuery, minPrice, maxPrice }),
  });



  // Facebook Marketplace: one link per selected state (by region)
  const facebookLinks = selectedStateAbbrs
    .filter(abbr => FACEBOOK_REGION_CODES[abbr])
    .map(abbr => ({
      name: `Facebook Marketplace (${abbrToName[abbr]})`,
      url: makeFacebookMarketplaceUrl({
        regionCode: FACEBOOK_REGION_CODES[abbr],
        searchQuery,
        minPrice,
        maxPrice,
      }),
    }));

  // OfferUp: one link per selected state (for local deals)
  const offerUpLinks = selectedStateAbbrs.map(abbr => ({
    name: `OfferUp Local (${abbrToName[abbr]})`,
    url: makeOfferUpUrl({
      searchQuery,
      minPrice,
      maxPrice,
      stateAbbr: abbr,
    }),
  }));

  return [...links, ...facebookLinks, ...offerUpLinks];
}

export default function VintageClothingSearch() {
  const [brand, setBrand] = useState(""); // Now represents the full search query
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedStates, setSelectedStates] = useState<{ value: string; label: string }[]>([]);
  const [showLinks, setShowLinks] = useState(false);
  const [lastClickedUrl, setLastClickedUrl] = useState<string | null>(null);

  const handleSearch = () => setShowLinks(true);
  const handleReset = () => {
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
    selectedStateAbbrs: selectedStates.map(s => s.value),
  });

  return (
    <div className="min-h-screen bg-black p-4">
      {/* Remove the entire header section - logo is now in layout */}
      
      {/* Filter/Search Section */}
      <div className="flex flex-col items-center">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-600 rounded-xl shadow-xl p-8 w-full max-w-md mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">
            Find Vintage Treasures
          </h2>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block font-semibold mb-2 text-gray-200">What are you looking for?</label>
              <input
                className="border-2 border-gray-600 rounded-lg px-3 py-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400 bg-gray-700 text-white placeholder-gray-400"
                value={brand}
                onChange={e => setBrand(e.target.value)}
                placeholder="e.g. Kiss band shirt, Levi's jeans, vintage Nike"
              />
              <p className="text-xs text-gray-300 mt-1">💡 <strong>Search Strategy:</strong> For rare/specific items, be detailed (e.g., "1995 Nirvana tour shirt size L"). For browsing what's available, keep it simple (e.g., "band shirts" or "vintage Nike")</p>
            </div>
            
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="block font-semibold mb-2 text-gray-200">Min Price</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                  <input
                    className="border-2 border-gray-600 rounded-lg pl-7 pr-3 py-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400 bg-gray-700 text-white"
                    value={minPrice}
                    onChange={e => setMinPrice(e.target.value)}
                    type="number"
                    min="0"
                    placeholder="0"
                  />
                </div>
              </div>
              <div className="flex-1">
                <label className="block font-semibold mb-2 text-gray-200">Max Price</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                  <input
                    className="border-2 border-gray-600 rounded-lg pl-7 pr-3 py-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400 bg-gray-700 text-white"
                    value={maxPrice}
                    onChange={e => setMaxPrice(e.target.value)}
                    type="number"
                    min="0"
                    placeholder="500"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <label className="block font-semibold mb-2 text-gray-200">State(s) for local searches (optional):</label>
              <Select
                options={STATE_OPTIONS}
                value={selectedStates}
                onChange={opts => setSelectedStates(opts as { value: string; label: string }[])}
                isMulti
                isSearchable
                placeholder="Select state(s)..."
                className="w-full"
                classNamePrefix="react-select"
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                styles={{
                  control: (base) => ({
                    ...base,
                    borderColor: '#fed7aa',
                    '&:hover': { borderColor: '#fb923c' },
                    boxShadow: 'none',
                    backgroundColor: '#fffbeb',
                    minHeight: '48px'
                  }),
                  option: (base, state) => ({
                    ...base,
                    backgroundColor: state.isFocused ? '#fed7aa' : '#fffbeb',
                    color: '#92400e'
                  }),
                  multiValue: (base) => ({
                    ...base,
                    backgroundColor: '#f59e0b',
                    color: '#92400e'
                  }),
                  multiValueLabel: (base) => ({
                    ...base,
                    color: '#fffbeb'
                  })
                }}
              />
              {selectedStates.length === 0 ? (
                <div className="text-xs text-orange-700 mt-2 bg-orange-100 p-2 rounded border border-orange-200">
                  💡 <strong>Tip:</strong> Select states to search OfferUp & Facebook Marketplace for local deals
                </div>
              ) : (
                <div className="text-xs text-amber-700 mt-1">
                  Searching {selectedStates.length} state{selectedStates.length > 1 ? 's' : ''} for local listings
                </div>
              )}
            </div>
            
            <div className="flex gap-3 justify-center mt-6">
              <button
                onClick={handleReset}
                className="bg-gradient-to-r from-amber-200 to-orange-200 hover:from-amber-300 hover:to-orange-300 text-amber-900 px-6 py-3 rounded-lg font-bold transition-all border-2 border-amber-400 shadow-md hover:shadow-lg"
                type="button"
              >
                Reset
              </button>
              <button
                onClick={handleSearch}
                className="bg-gradient-to-r from-orange-600 to-amber-700 hover:from-orange-700 hover:to-amber-800 text-cream px-10 py-3 rounded-lg text-lg font-bold shadow-lg transition-all border-2 border-orange-800 hover:shadow-xl"
                style={{ minWidth: "180px" }}
                type="button"
              >
                💣 Bomb Away!
              </button>
            </div>
          </div>
        </div>
        
        {/* Search Links */}
        {showLinks && (
          <section className="mt-8 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-orange-300 rounded-xl shadow-xl p-6 w-full max-w-lg">
            <h3 className="text-xl font-bold mb-4 text-center text-amber-900">
              Search Results
            </h3>
            <ul className="space-y-3 max-h-[600px] overflow-y-auto">
              {searchLinks.map((link, idx) => (
                <React.Fragment key={link.url}>
                  <li>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block rounded-lg px-4 py-3 font-semibold text-center transition-all border-2
                        ${lastClickedUrl === link.url
                          ? "bg-gradient-to-r from-orange-600 to-amber-700 text-cream ring-2 ring-orange-400 border-orange-800"
                          : "bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-cream shadow-md border-orange-700 hover:shadow-lg"}
                      `}
                      onClick={() => setLastClickedUrl(link.url)}
                    >
                      {link.name}
                    </a>
                    {link.note && link.note !== "" && (
                      <div className="text-xs text-red-700 mt-1 text-center bg-red-100 p-2 rounded border border-red-300">
                        {link.note}
                      </div>
                    )}
                  </li>
                </React.Fragment>
              ))}
            </ul>
            <div className="text-sm text-amber-800 mt-4 text-center bg-amber-100 p-3 rounded border border-amber-300">
              💡 <strong>Pro Tip:</strong> Set a minimum price to filter out fast fashion and find authentic vintage pieces
            </div>
          </section>
        )}
      </div>

      {/* Disclaimer */}
      <div className="text-sm text-amber-800 mt-12 text-center bg-gradient-to-r from-amber-100 to-orange-100 p-4 rounded-lg border border-amber-300 max-w-md mx-auto">
        ThreadBomb isn't affiliated with any marketplace—we just help you discover vintage treasures across the web.
      </div>
    </div>
  );
}
