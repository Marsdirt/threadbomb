export type Region = {
  name: string;
  states: string[];
  facebookCities: string[]; // Major city for FB search
};

export const REGIONS: Region[] = [
  {
    name: "Pacific Northwest",
    states: ["WA", "OR", "ID"],
    facebookCities: ["Seattle, WA", "Portland, OR"],
  },
  {
    name: "Southwest",
    states: ["CA", "NV", "AZ", "NM"],
    facebookCities: ["Los Angeles, CA", "Phoenix, AZ"],
  },
  {
    name: "Rocky Mountains",
    states: ["CO", "UT", "MT", "WY"],
    facebookCities: ["Denver, CO", "Salt Lake City, UT"],
  },
  {
    name: "Midwest",
    states: ["IL", "IN", "IA", "KS", "MI", "MN", "MO", "NE", "ND", "OH", "SD", "WI"],
    facebookCities: ["Chicago, IL", "Minneapolis, MN"],
  },
  {
    name: "Northeast",
    states: ["NY", "NJ", "PA", "CT", "MA", "ME", "NH", "RI", "VT"],
    facebookCities: ["New York, NY", "Boston, MA"],
  },
  {
    name: "Southeast",
    states: ["FL", "GA", "NC", "SC", "VA", "WV", "AL", "TN", "KY", "MS", "LA", "AR"],
    facebookCities: ["Atlanta, GA", "Miami, FL"],
  },
  {
    name: "South Central/Texas",
    states: ["TX", "OK"],
    facebookCities: ["Dallas, TX", "Houston, TX"],
  },
  {
    name: "Alaska/Hawaii",
    states: ["AK", "HI"],
    facebookCities: ["Anchorage, AK", "Honolulu, HI"],
  },
];
