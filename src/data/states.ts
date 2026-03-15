export interface State {
  slug: string;
  name: string;
  abbreviation: string;
  filingFee: number;
  processingTime: string;
}

export const states: State[] = [
  {
    slug: "alabama",
    name: "Alabama",
    abbreviation: "AL",
    filingFee: 200,
    processingTime: "5-7 business days",
  },
  {
    slug: "alaska",
    name: "Alaska",
    abbreviation: "AK",
    filingFee: 250,
    processingTime: "10-15 business days",
  },
  {
    slug: "arizona",
    name: "Arizona",
    abbreviation: "AZ",
    filingFee: 40,
    processingTime: "5-10 business days",
  },
  {
    slug: "california",
    name: "California",
    abbreviation: "CA",
    filingFee: 30,
    processingTime: "3-5 business days",
  },
  {
    slug: "colorado",
    name: "Colorado",
    abbreviation: "CO",
    filingFee: 50,
    processingTime: "5-7 business days",
  },
  {
    slug: "florida",
    name: "Florida",
    abbreviation: "FL",
    filingFee: 70,
    processingTime: "3-5 business days",
  },
  {
    slug: "georgia",
    name: "Georgia",
    abbreviation: "GA",
    filingFee: 100,
    processingTime: "7-10 business days",
  },
  {
    slug: "illinois",
    name: "Illinois",
    abbreviation: "IL",
    filingFee: 50,
    processingTime: "5-10 business days",
  },
  {
    slug: "new-york",
    name: "New York",
    abbreviation: "NY",
    filingFee: 75,
    processingTime: "7-14 business days",
  },
  {
    slug: "texas",
    name: "Texas",
    abbreviation: "TX",
    filingFee: 25,
    processingTime: "3-5 business days",
  },
  {
    slug: "washington",
    name: "Washington",
    abbreviation: "WA",
    filingFee: 30,
    processingTime: "5-7 business days",
  },
  {
    slug: "oregon",
    name: "Oregon",
    abbreviation: "OR",
    filingFee: 50,
    processingTime: "5-10 business days",
  },
];
