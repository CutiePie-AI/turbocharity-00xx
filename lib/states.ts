export interface StateInfo {
  name: string;
  slug: string;
  abbreviation: string;
  filingFee: string;
  processingTime: string;
  requiresRegistration: boolean;
  notes: string;
}

const states: StateInfo[] = [
  { name: "Alabama", slug: "alabama", abbreviation: "AL", filingFee: "$25", processingTime: "2-4 weeks", requiresRegistration: true, notes: "File with the Alabama Attorney General's office." },
  { name: "Alaska", slug: "alaska", abbreviation: "AK", filingFee: "$0", processingTime: "2-3 weeks", requiresRegistration: false, notes: "No state income tax; no charitable solicitation registration required." },
  { name: "Arizona", slug: "arizona", abbreviation: "AZ", filingFee: "$10", processingTime: "3-5 weeks", requiresRegistration: true, notes: "Register with the Arizona Secretary of State." },
  { name: "Arkansas", slug: "arkansas", abbreviation: "AR", filingFee: "$50", processingTime: "2-4 weeks", requiresRegistration: true, notes: "File with the Arkansas Secretary of State." },
  { name: "California", slug: "california", abbreviation: "CA", filingFee: "$30", processingTime: "4-8 weeks", requiresRegistration: true, notes: "Register with the California Attorney General's Registry of Charitable Trusts." },
  { name: "Colorado", slug: "colorado", abbreviation: "CO", filingFee: "$10", processingTime: "2-3 weeks", requiresRegistration: true, notes: "File with the Colorado Secretary of State." },
  { name: "Connecticut", slug: "connecticut", abbreviation: "CT", filingFee: "$50", processingTime: "3-6 weeks", requiresRegistration: true, notes: "Register with the Department of Consumer Protection." },
  { name: "Delaware", slug: "delaware", abbreviation: "DE", filingFee: "$0", processingTime: "2-3 weeks", requiresRegistration: false, notes: "No charitable solicitation registration required." },
  { name: "Florida", slug: "florida", abbreviation: "FL", filingFee: "$10", processingTime: "3-5 weeks", requiresRegistration: true, notes: "Register with the Florida Department of Agriculture and Consumer Services." },
  { name: "Georgia", slug: "georgia", abbreviation: "GA", filingFee: "$35", processingTime: "3-5 weeks", requiresRegistration: true, notes: "Register with the Georgia Secretary of State." },
  { name: "Hawaii", slug: "hawaii", abbreviation: "HI", filingFee: "$10", processingTime: "3-5 weeks", requiresRegistration: true, notes: "Register with the Hawaii Attorney General." },
  { name: "Idaho", slug: "idaho", abbreviation: "ID", filingFee: "$0", processingTime: "2-3 weeks", requiresRegistration: false, notes: "No charitable solicitation registration required." },
  { name: "Illinois", slug: "illinois", abbreviation: "IL", filingFee: "$15", processingTime: "4-6 weeks", requiresRegistration: true, notes: "Register with the Illinois Attorney General's Charitable Trust Bureau." },
  { name: "Indiana", slug: "indiana", abbreviation: "IN", filingFee: "$0", processingTime: "2-3 weeks", requiresRegistration: false, notes: "No charitable solicitation registration required." },
  { name: "Iowa", slug: "iowa", abbreviation: "IA", filingFee: "$5", processingTime: "2-4 weeks", requiresRegistration: true, notes: "Register with the Iowa Secretary of State." },
  { name: "Kansas", slug: "kansas", abbreviation: "KS", filingFee: "$35", processingTime: "3-5 weeks", requiresRegistration: true, notes: "Register with the Kansas Secretary of State." },
  { name: "Kentucky", slug: "kentucky", abbreviation: "KY", filingFee: "$8", processingTime: "3-5 weeks", requiresRegistration: true, notes: "Register with the Kentucky Attorney General." },
  { name: "Louisiana", slug: "louisiana", abbreviation: "LA", filingFee: "$25", processingTime: "3-5 weeks", requiresRegistration: true, notes: "Register with the Louisiana Attorney General." },
  { name: "Maine", slug: "maine", abbreviation: "ME", filingFee: "$25", processingTime: "2-4 weeks", requiresRegistration: true, notes: "Register with the Maine Department of Professional and Financial Regulation." },
  { name: "Maryland", slug: "maryland", abbreviation: "MD", filingFee: "$50", processingTime: "4-6 weeks", requiresRegistration: true, notes: "Register with the Maryland Secretary of State." },
  { name: "Massachusetts", slug: "massachusetts", abbreviation: "MA", filingFee: "$150", processingTime: "4-8 weeks", requiresRegistration: true, notes: "Register with the Massachusetts Attorney General's Non-Profit Organizations/Public Charities Division." },
  { name: "Michigan", slug: "michigan", abbreviation: "MI", filingFee: "$10", processingTime: "3-5 weeks", requiresRegistration: true, notes: "Register with the Michigan Attorney General's Charitable Trust Section." },
  { name: "Minnesota", slug: "minnesota", abbreviation: "MN", filingFee: "$25", processingTime: "3-5 weeks", requiresRegistration: true, notes: "Register with the Minnesota Attorney General." },
  { name: "Mississippi", slug: "mississippi", abbreviation: "MS", filingFee: "$25", processingTime: "2-4 weeks", requiresRegistration: true, notes: "Register with the Mississippi Secretary of State." },
  { name: "Missouri", slug: "missouri", abbreviation: "MO", filingFee: "$15", processingTime: "3-5 weeks", requiresRegistration: true, notes: "Register with the Missouri Attorney General." },
  { name: "Montana", slug: "montana", abbreviation: "MT", filingFee: "$0", processingTime: "2-3 weeks", requiresRegistration: false, notes: "No charitable solicitation registration required." },
  { name: "Nebraska", slug: "nebraska", abbreviation: "NE", filingFee: "$10", processingTime: "2-4 weeks", requiresRegistration: true, notes: "Register with the Nebraska Secretary of State." },
  { name: "Nevada", slug: "nevada", abbreviation: "NV", filingFee: "$25", processingTime: "2-4 weeks", requiresRegistration: true, notes: "Register with the Nevada Secretary of State." },
  { name: "New Hampshire", slug: "new-hampshire", abbreviation: "NH", filingFee: "$25", processingTime: "3-5 weeks", requiresRegistration: true, notes: "Register with the New Hampshire Attorney General's Charitable Trusts Unit." },
  { name: "New Jersey", slug: "new-jersey", abbreviation: "NJ", filingFee: "$30", processingTime: "4-6 weeks", requiresRegistration: true, notes: "Register with the New Jersey Division of Consumer Affairs." },
  { name: "New Mexico", slug: "new-mexico", abbreviation: "NM", filingFee: "$25", processingTime: "2-4 weeks", requiresRegistration: true, notes: "Register with the New Mexico Attorney General." },
  { name: "New York", slug: "new-york", abbreviation: "NY", filingFee: "$25", processingTime: "6-10 weeks", requiresRegistration: true, notes: "Register with the New York Attorney General's Charities Bureau." },
  { name: "North Carolina", slug: "north-carolina", abbreviation: "NC", filingFee: "$10", processingTime: "3-5 weeks", requiresRegistration: true, notes: "Register with the North Carolina Secretary of State." },
  { name: "North Dakota", slug: "north-dakota", abbreviation: "ND", filingFee: "$25", processingTime: "2-4 weeks", requiresRegistration: true, notes: "Register with the North Dakota Secretary of State." },
  { name: "Ohio", slug: "ohio", abbreviation: "OH", filingFee: "$50", processingTime: "3-5 weeks", requiresRegistration: true, notes: "Register with the Ohio Attorney General's Charitable Law Section." },
  { name: "Oklahoma", slug: "oklahoma", abbreviation: "OK", filingFee: "$15", processingTime: "3-5 weeks", requiresRegistration: true, notes: "Register with the Oklahoma Secretary of State." },
  { name: "Oregon", slug: "oregon", abbreviation: "OR", filingFee: "$10", processingTime: "3-5 weeks", requiresRegistration: true, notes: "Register with the Oregon Department of Justice." },
  { name: "Pennsylvania", slug: "pennsylvania", abbreviation: "PA", filingFee: "$15", processingTime: "4-6 weeks", requiresRegistration: true, notes: "Register with the Pennsylvania Bureau of Charitable Organizations." },
  { name: "Rhode Island", slug: "rhode-island", abbreviation: "RI", filingFee: "$90", processingTime: "3-5 weeks", requiresRegistration: true, notes: "Register with the Rhode Island Department of Business Regulation." },
  { name: "South Carolina", slug: "south-carolina", abbreviation: "SC", filingFee: "$50", processingTime: "3-5 weeks", requiresRegistration: true, notes: "Register with the South Carolina Secretary of State." },
  { name: "South Dakota", slug: "south-dakota", abbreviation: "SD", filingFee: "$0", processingTime: "2-3 weeks", requiresRegistration: false, notes: "No charitable solicitation registration required." },
  { name: "Tennessee", slug: "tennessee", abbreviation: "TN", filingFee: "$50", processingTime: "3-5 weeks", requiresRegistration: true, notes: "Register with the Tennessee Secretary of State, Division of Charitable Solicitations." },
  { name: "Texas", slug: "texas", abbreviation: "TX", filingFee: "$25", processingTime: "3-5 weeks", requiresRegistration: true, notes: "No general registration but must file with the Texas Secretary of State." },
  { name: "Utah", slug: "utah", abbreviation: "UT", filingFee: "$100", processingTime: "3-5 weeks", requiresRegistration: true, notes: "Register with the Utah Division of Consumer Protection." },
  { name: "Vermont", slug: "vermont", abbreviation: "VT", filingFee: "$20", processingTime: "2-4 weeks", requiresRegistration: true, notes: "Register with the Vermont Attorney General." },
  { name: "Virginia", slug: "virginia", abbreviation: "VA", filingFee: "$100", processingTime: "4-6 weeks", requiresRegistration: true, notes: "Register with the Virginia Department of Agriculture and Consumer Services." },
  { name: "Washington", slug: "washington", abbreviation: "WA", filingFee: "$60", processingTime: "3-5 weeks", requiresRegistration: true, notes: "Register with the Washington Secretary of State, Charities Program." },
  { name: "West Virginia", slug: "west-virginia", abbreviation: "WV", filingFee: "$15", processingTime: "2-4 weeks", requiresRegistration: true, notes: "Register with the West Virginia Secretary of State." },
  { name: "Wisconsin", slug: "wisconsin", abbreviation: "WI", filingFee: "$15", processingTime: "3-5 weeks", requiresRegistration: true, notes: "Register with the Wisconsin Department of Financial Institutions." },
  { name: "Wyoming", slug: "wyoming", abbreviation: "WY", filingFee: "$0", processingTime: "2-3 weeks", requiresRegistration: false, notes: "No charitable solicitation registration required." },
];

/**
 * Returns all 50 US states with nonprofit filing information.
 */
export function getAllStates(): StateInfo[] {
  return states;
}

/**
 * Finds a single state by its URL slug.
 * Returns undefined if no matching state is found.
 */
export function getStateBySlug(slug: string): StateInfo | undefined {
  return states.find((s) => s.slug === slug.toLowerCase());
}
