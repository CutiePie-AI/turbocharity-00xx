/**
 * US state data for TurboCharity state-by-state nonprofit guides.
 */

export interface StateData {
  name: string;
  slug: string;
  abbreviation: string;
  capitalCity: string;
  filingAgency: string;
  filingFee: string;
  processingTime: string;
  onlineFiling: boolean;
  notes: string;
}

const states: StateData[] = [
  { name: "Alabama", slug: "alabama", abbreviation: "AL", capitalCity: "Montgomery", filingAgency: "Secretary of State", filingFee: "$25", processingTime: "5-10 business days", onlineFiling: true, notes: "Alabama requires filing Certificate of Formation with the Secretary of State." },
  { name: "Alaska", slug: "alaska", abbreviation: "AK", capitalCity: "Juneau", filingAgency: "Department of Commerce", filingFee: "$25", processingTime: "10-15 business days", onlineFiling: true, notes: "Alaska has no state income tax, simplifying nonprofit compliance." },
  { name: "Arizona", slug: "arizona", abbreviation: "AZ", capitalCity: "Phoenix", filingAgency: "Arizona Corporation Commission", filingFee: "$10", processingTime: "5-10 business days", onlineFiling: true, notes: "Arizona has one of the lowest filing fees in the nation." },
  { name: "Arkansas", slug: "arkansas", abbreviation: "AR", capitalCity: "Little Rock", filingAgency: "Secretary of State", filingFee: "$45", processingTime: "7-10 business days", onlineFiling: true, notes: "Arkansas requires annual franchise tax reports for nonprofits." },
  { name: "California", slug: "california", abbreviation: "CA", capitalCity: "Sacramento", filingAgency: "Secretary of State", filingFee: "$30", processingTime: "5-10 business days", onlineFiling: true, notes: "California requires additional registration with the Attorney General's Registry of Charitable Trusts." },
  { name: "Colorado", slug: "colorado", abbreviation: "CO", capitalCity: "Denver", filingAgency: "Secretary of State", filingFee: "$20", processingTime: "3-5 business days", onlineFiling: true, notes: "Colorado offers fast online processing for nonprofit formation." },
  { name: "Connecticut", slug: "connecticut", abbreviation: "CT", capitalCity: "Hartford", filingAgency: "Secretary of State", filingFee: "$50", processingTime: "5-7 business days", onlineFiling: true, notes: "Connecticut requires a Certificate of Incorporation for nonprofits." },
  { name: "Delaware", slug: "delaware", abbreviation: "DE", capitalCity: "Dover", filingAgency: "Division of Corporations", filingFee: "$89", processingTime: "3-5 business days", onlineFiling: true, notes: "Delaware is popular for incorporation due to its well-developed corporate law." },
  { name: "Florida", slug: "florida", abbreviation: "FL", capitalCity: "Tallahassee", filingAgency: "Division of Corporations", filingFee: "$35", processingTime: "5-7 business days", onlineFiling: true, notes: "Florida has no state income tax, which simplifies nonprofit operations." },
  { name: "Georgia", slug: "georgia", abbreviation: "GA", capitalCity: "Atlanta", filingAgency: "Secretary of State", filingFee: "$100", processingTime: "7-10 business days", onlineFiling: true, notes: "Georgia requires nonprofits to register with the Securities Division for charitable solicitation." },
  { name: "Hawaii", slug: "hawaii", abbreviation: "HI", capitalCity: "Honolulu", filingAgency: "Department of Commerce", filingFee: "$25", processingTime: "10-15 business days", onlineFiling: true, notes: "Hawaii requires annual reports for all registered nonprofits." },
  { name: "Idaho", slug: "idaho", abbreviation: "ID", capitalCity: "Boise", filingAgency: "Secretary of State", filingFee: "$30", processingTime: "5-7 business days", onlineFiling: true, notes: "Idaho offers streamlined online filing for nonprofit articles." },
  { name: "Illinois", slug: "illinois", abbreviation: "IL", capitalCity: "Springfield", filingAgency: "Secretary of State", filingFee: "$50", processingTime: "5-10 business days", onlineFiling: true, notes: "Illinois requires filing Articles of Incorporation with the Secretary of State." },
  { name: "Indiana", slug: "indiana", abbreviation: "IN", capitalCity: "Indianapolis", filingAgency: "Secretary of State", filingFee: "$30", processingTime: "5-7 business days", onlineFiling: true, notes: "Indiana has a straightforward online nonprofit filing process." },
  { name: "Iowa", slug: "iowa", abbreviation: "IA", capitalCity: "Des Moines", filingAgency: "Secretary of State", filingFee: "$20", processingTime: "5-10 business days", onlineFiling: true, notes: "Iowa requires biennial reports for nonprofits." },
  { name: "Kansas", slug: "kansas", abbreviation: "KS", capitalCity: "Topeka", filingAgency: "Secretary of State", filingFee: "$20", processingTime: "3-5 business days", onlineFiling: true, notes: "Kansas offers low-cost nonprofit formation with quick processing." },
  { name: "Kentucky", slug: "kentucky", abbreviation: "KY", capitalCity: "Frankfort", filingAgency: "Secretary of State", filingFee: "$8", processingTime: "3-5 business days", onlineFiling: true, notes: "Kentucky has one of the lowest nonprofit filing fees in the US." },
  { name: "Louisiana", slug: "louisiana", abbreviation: "LA", capitalCity: "Baton Rouge", filingAgency: "Secretary of State", filingFee: "$75", processingTime: "5-10 business days", onlineFiling: true, notes: "Louisiana requires filing Articles of Incorporation with the Secretary of State." },
  { name: "Maine", slug: "maine", abbreviation: "ME", capitalCity: "Augusta", filingAgency: "Secretary of State", filingFee: "$40", processingTime: "5-10 business days", onlineFiling: true, notes: "Maine requires annual reports for all domestic nonprofits." },
  { name: "Maryland", slug: "maryland", abbreviation: "MD", capitalCity: "Annapolis", filingAgency: "Department of Assessments and Taxation", filingFee: "$100", processingTime: "7-10 business days", onlineFiling: true, notes: "Maryland requires filing Articles of Incorporation with SDAT." },
  { name: "Massachusetts", slug: "massachusetts", abbreviation: "MA", capitalCity: "Boston", filingAgency: "Secretary of the Commonwealth", filingFee: "$35", processingTime: "5-10 business days", onlineFiling: true, notes: "Massachusetts requires nonprofits to file annual reports." },
  { name: "Michigan", slug: "michigan", abbreviation: "MI", capitalCity: "Lansing", filingAgency: "Department of Licensing and Regulatory Affairs", filingFee: "$20", processingTime: "5-7 business days", onlineFiling: true, notes: "Michigan requires filing Articles of Incorporation with LARA." },
  { name: "Minnesota", slug: "minnesota", abbreviation: "MN", capitalCity: "Saint Paul", filingAgency: "Secretary of State", filingFee: "$35", processingTime: "5-10 business days", onlineFiling: true, notes: "Minnesota requires nonprofits to register for charitable solicitation." },
  { name: "Mississippi", slug: "mississippi", abbreviation: "MS", capitalCity: "Jackson", filingAgency: "Secretary of State", filingFee: "$50", processingTime: "5-10 business days", onlineFiling: true, notes: "Mississippi requires filing a Certificate of Incorporation." },
  { name: "Missouri", slug: "missouri", abbreviation: "MO", capitalCity: "Jefferson City", filingAgency: "Secretary of State", filingFee: "$25", processingTime: "5-7 business days", onlineFiling: true, notes: "Missouri requires filing Articles of Incorporation for nonprofits." },
  { name: "Montana", slug: "montana", abbreviation: "MT", capitalCity: "Helena", filingAgency: "Secretary of State", filingFee: "$20", processingTime: "3-5 business days", onlineFiling: true, notes: "Montana has no sales tax, benefiting nonprofit operations." },
  { name: "Nebraska", slug: "nebraska", abbreviation: "NE", capitalCity: "Lincoln", filingAgency: "Secretary of State", filingFee: "$10", processingTime: "3-5 business days", onlineFiling: true, notes: "Nebraska has very affordable nonprofit formation filing." },
  { name: "Nevada", slug: "nevada", abbreviation: "NV", capitalCity: "Carson City", filingAgency: "Secretary of State", filingFee: "$50", processingTime: "3-5 business days", onlineFiling: true, notes: "Nevada has no state income tax, simplifying nonprofit compliance." },
  { name: "New Hampshire", slug: "new-hampshire", abbreviation: "NH", capitalCity: "Concord", filingAgency: "Secretary of State", filingFee: "$25", processingTime: "5-7 business days", onlineFiling: true, notes: "New Hampshire requires voluntary incorporation for nonprofits." },
  { name: "New Jersey", slug: "new-jersey", abbreviation: "NJ", capitalCity: "Trenton", filingAgency: "Division of Revenue", filingFee: "$75", processingTime: "5-10 business days", onlineFiling: true, notes: "New Jersey requires filing a Certificate of Incorporation." },
  { name: "New Mexico", slug: "new-mexico", abbreviation: "NM", capitalCity: "Santa Fe", filingAgency: "Secretary of State", filingFee: "$25", processingTime: "5-7 business days", onlineFiling: true, notes: "New Mexico offers a simple nonprofit filing process." },
  { name: "New York", slug: "new-york", abbreviation: "NY", capitalCity: "Albany", filingAgency: "Department of State", filingFee: "$75", processingTime: "7-14 business days", onlineFiling: true, notes: "New York requires nonprofit Certificate of Incorporation and Attorney General registration." },
  { name: "North Carolina", slug: "north-carolina", abbreviation: "NC", capitalCity: "Raleigh", filingAgency: "Secretary of State", filingFee: "$60", processingTime: "5-10 business days", onlineFiling: true, notes: "North Carolina requires filing Articles of Incorporation and annual reports." },
  { name: "North Dakota", slug: "north-dakota", abbreviation: "ND", capitalCity: "Bismarck", filingAgency: "Secretary of State", filingFee: "$40", processingTime: "5-7 business days", onlineFiling: true, notes: "North Dakota has streamlined nonprofit formation procedures." },
  { name: "Ohio", slug: "ohio", abbreviation: "OH", capitalCity: "Columbus", filingAgency: "Secretary of State", filingFee: "$99", processingTime: "3-5 business days", onlineFiling: true, notes: "Ohio requires filing Articles of Incorporation with the Secretary of State." },
  { name: "Oklahoma", slug: "oklahoma", abbreviation: "OK", capitalCity: "Oklahoma City", filingAgency: "Secretary of State", filingFee: "$25", processingTime: "5-7 business days", onlineFiling: true, notes: "Oklahoma requires filing a Certificate of Incorporation for nonprofits." },
  { name: "Oregon", slug: "oregon", abbreviation: "OR", capitalCity: "Salem", filingAgency: "Secretary of State", filingFee: "$50", processingTime: "5-10 business days", onlineFiling: true, notes: "Oregon has no sales tax, which benefits nonprofit fundraising events." },
  { name: "Pennsylvania", slug: "pennsylvania", abbreviation: "PA", capitalCity: "Harrisburg", filingAgency: "Department of State", filingFee: "$125", processingTime: "7-10 business days", onlineFiling: true, notes: "Pennsylvania requires filing Articles of Incorporation and charitable registration." },
  { name: "Rhode Island", slug: "rhode-island", abbreviation: "RI", capitalCity: "Providence", filingAgency: "Secretary of State", filingFee: "$35", processingTime: "5-7 business days", onlineFiling: true, notes: "Rhode Island requires filing Articles of Incorporation for nonprofits." },
  { name: "South Carolina", slug: "south-carolina", abbreviation: "SC", capitalCity: "Columbia", filingAgency: "Secretary of State", filingFee: "$25", processingTime: "5-10 business days", onlineFiling: true, notes: "South Carolina requires charitable solicitation registration." },
  { name: "South Dakota", slug: "south-dakota", abbreviation: "SD", capitalCity: "Pierre", filingAgency: "Secretary of State", filingFee: "$30", processingTime: "3-5 business days", onlineFiling: true, notes: "South Dakota has no state income tax for nonprofits." },
  { name: "Tennessee", slug: "tennessee", abbreviation: "TN", capitalCity: "Nashville", filingAgency: "Secretary of State", filingFee: "$100", processingTime: "5-7 business days", onlineFiling: true, notes: "Tennessee requires filing a Charter for nonprofits with the Secretary of State." },
  { name: "Texas", slug: "texas", abbreviation: "TX", capitalCity: "Austin", filingAgency: "Secretary of State", filingFee: "$25", processingTime: "5-7 business days", onlineFiling: true, notes: "Texas has no state income tax and low filing fees for nonprofits." },
  { name: "Utah", slug: "utah", abbreviation: "UT", capitalCity: "Salt Lake City", filingAgency: "Division of Corporations", filingFee: "$30", processingTime: "3-5 business days", onlineFiling: true, notes: "Utah requires filing Articles of Incorporation through the Division of Corporations." },
  { name: "Vermont", slug: "vermont", abbreviation: "VT", capitalCity: "Montpelier", filingAgency: "Secretary of State", filingFee: "$125", processingTime: "5-10 business days", onlineFiling: true, notes: "Vermont requires filing Articles of Association for nonprofits." },
  { name: "Virginia", slug: "virginia", abbreviation: "VA", capitalCity: "Richmond", filingAgency: "State Corporation Commission", filingFee: "$75", processingTime: "3-5 business days", onlineFiling: true, notes: "Virginia requires filing Articles of Incorporation with the SCC." },
  { name: "Washington", slug: "washington", abbreviation: "WA", capitalCity: "Olympia", filingAgency: "Secretary of State", filingFee: "$30", processingTime: "3-5 business days", onlineFiling: true, notes: "Washington has no state income tax and offers fast online filing." },
  { name: "West Virginia", slug: "west-virginia", abbreviation: "WV", capitalCity: "Charleston", filingAgency: "Secretary of State", filingFee: "$25", processingTime: "5-7 business days", onlineFiling: true, notes: "West Virginia requires filing Articles of Incorporation for nonprofits." },
  { name: "Wisconsin", slug: "wisconsin", abbreviation: "WI", capitalCity: "Madison", filingAgency: "Department of Financial Institutions", filingFee: "$35", processingTime: "5-10 business days", onlineFiling: true, notes: "Wisconsin requires filing Articles of Incorporation with DFI." },
  { name: "Wyoming", slug: "wyoming", abbreviation: "WY", capitalCity: "Cheyenne", filingAgency: "Secretary of State", filingFee: "$25", processingTime: "3-5 business days", onlineFiling: true, notes: "Wyoming has no state income tax and low nonprofit filing fees." },
  { name: "District of Columbia", slug: "district-of-columbia", abbreviation: "DC", capitalCity: "Washington", filingAgency: "Department of Consumer and Regulatory Affairs", filingFee: "$80", processingTime: "5-10 business days", onlineFiling: true, notes: "DC requires filing Articles of Incorporation and charitable solicitation license." },
];

/**
 * Returns all US states and DC.
 */
export function getAllStates(): StateData[] {
  return states;
}

/**
 * Finds a single state by its URL slug.
 * Returns undefined if no matching state is found.
 */
export function getStateBySlug(slug: string): StateData | undefined {
  return states.find((s) => s.slug === slug.toLowerCase());
}
