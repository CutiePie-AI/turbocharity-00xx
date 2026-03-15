export interface State {
  slug: string;
  name: string;
  abbreviation: string;
  filingFee: number;
  processingTime: string;
  requiresPublicationNotice: boolean;
  hasStateTaxExemption: boolean;
  description: string;
}

export const states: State[] = [
  {
    slug: 'california',
    name: 'California',
    abbreviation: 'CA',
    filingFee: 30,
    processingTime: '2-5 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'California requires filing Articles of Incorporation with the Secretary of State and obtaining state tax-exempt status through the Franchise Tax Board (Form 3500). The state has a separate exemption process from the federal IRS application, but the filing fee is among the lowest in the country.',
  },
  {
    slug: 'texas',
    name: 'Texas',
    abbreviation: 'TX',
    filingFee: 25,
    processingTime: '5-7 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'Texas nonprofits file a Certificate of Formation with the Secretary of State. The state offers franchise tax exemption for qualifying 501(c)(3) organizations. Texas is known for its business-friendly regulations and straightforward nonprofit formation process.',
  },
  {
    slug: 'new-york',
    name: 'New York',
    abbreviation: 'NY',
    filingFee: 75,
    processingTime: '7-14 business days',
    requiresPublicationNotice: true,
    hasStateTaxExemption: true,
    description:
      'New York requires filing a Certificate of Incorporation with the Department of State, and charitable organizations must also register with the Charities Bureau of the Attorney General. The state requires court approval for certain nonprofit types, making the process more complex than most states.',
  },
  {
    slug: 'florida',
    name: 'Florida',
    abbreviation: 'FL',
    filingFee: 35,
    processingTime: '3-5 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'Florida nonprofits file Articles of Incorporation with the Division of Corporations. The state has no personal income tax and offers sales tax exemptions for qualifying nonprofits. Florida provides a relatively fast turnaround for incorporation filings.',
  },
  {
    slug: 'illinois',
    name: 'Illinois',
    abbreviation: 'IL',
    filingFee: 50,
    processingTime: '5-10 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'Illinois requires filing Articles of Incorporation with the Secretary of State and registering with the Attorney General for charitable solicitation. The state offers property tax and sales tax exemptions for qualifying nonprofits through separate application processes.',
  },
  {
    slug: 'pennsylvania',
    name: 'Pennsylvania',
    abbreviation: 'PA',
    filingFee: 125,
    processingTime: '7-10 business days',
    requiresPublicationNotice: true,
    hasStateTaxExemption: true,
    description:
      'Pennsylvania requires filing Articles of Incorporation with the Department of State and publishing a notice of incorporation in two newspapers. The state offers sales tax exemption for qualifying nonprofits through the Department of Revenue. Pennsylvania has one of the higher filing fees among US states.',
  },
  {
    slug: 'ohio',
    name: 'Ohio',
    abbreviation: 'OH',
    filingFee: 99,
    processingTime: '3-5 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'Ohio nonprofits file Articles of Incorporation with the Secretary of State. The state provides tax exemptions including property, sales, and commercial activity tax exemptions for qualifying organizations. Ohio offers both standard and expedited processing for nonprofit filings.',
  },
  {
    slug: 'georgia',
    name: 'Georgia',
    abbreviation: 'GA',
    filingFee: 100,
    processingTime: '5-7 business days',
    requiresPublicationNotice: true,
    hasStateTaxExemption: true,
    description:
      'Georgia requires filing Articles of Incorporation with the Secretary of State and publishing a notice of intent to incorporate in the county legal organ. The state offers sales tax exemption for qualifying nonprofits. Georgia also requires an annual registration with the Secretary of State.',
  },
  {
    slug: 'north-carolina',
    name: 'North Carolina',
    abbreviation: 'NC',
    filingFee: 60,
    processingTime: '5-10 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'North Carolina nonprofits file Articles of Incorporation with the Secretary of State. The state offers income tax and property tax exemptions for qualifying organizations. North Carolina requires charitable organizations soliciting donations to register with the Solicitation Licensing Branch.',
  },
  {
    slug: 'michigan',
    name: 'Michigan',
    abbreviation: 'MI',
    filingFee: 20,
    processingTime: '5-7 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'Michigan requires filing Articles of Incorporation with the Department of Licensing and Regulatory Affairs. The state offers property tax and sales tax exemptions for qualifying nonprofits. Michigan has one of the lowest filing fees in the country, making it affordable to incorporate.',
  },
  // Remaining 40 states with reasonable defaults
  {
    slug: 'alabama',
    name: 'Alabama',
    abbreviation: 'AL',
    filingFee: 100,
    processingTime: '5-7 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'Alabama nonprofits file a Certificate of Formation with the Secretary of State. The state provides income tax exemption for qualifying organizations.',
  },
  {
    slug: 'alaska',
    name: 'Alaska',
    abbreviation: 'AK',
    filingFee: 50,
    processingTime: '10-15 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: false,
    description:
      'Alaska requires filing Articles of Incorporation with the Division of Corporations. The state has no state income tax or sales tax.',
  },
  {
    slug: 'arizona',
    name: 'Arizona',
    abbreviation: 'AZ',
    filingFee: 40,
    processingTime: '5-7 business days',
    requiresPublicationNotice: true,
    hasStateTaxExemption: true,
    description:
      'Arizona requires filing Articles of Incorporation with the Corporation Commission and publishing a notice in a local newspaper. The state provides income tax exemption for qualifying organizations.',
  },
  {
    slug: 'arkansas',
    name: 'Arkansas',
    abbreviation: 'AR',
    filingFee: 45,
    processingTime: '5-7 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'Arkansas nonprofits file Articles of Incorporation with the Secretary of State. The state offers income and sales tax exemptions for qualifying nonprofits.',
  },
  {
    slug: 'colorado',
    name: 'Colorado',
    abbreviation: 'CO',
    filingFee: 50,
    processingTime: '3-5 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'Colorado requires filing Articles of Incorporation online with the Secretary of State. The state offers sales tax exemption for qualifying nonprofits.',
  },
  {
    slug: 'connecticut',
    name: 'Connecticut',
    abbreviation: 'CT',
    filingFee: 50,
    processingTime: '5-7 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'Connecticut nonprofits file a Certificate of Incorporation with the Secretary of State. The state provides income and sales tax exemptions for qualifying organizations.',
  },
  {
    slug: 'delaware',
    name: 'Delaware',
    abbreviation: 'DE',
    filingFee: 89,
    processingTime: '3-5 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'Delaware requires filing a Certificate of Incorporation with the Division of Corporations. The state is known for its flexible corporate laws and business-friendly environment.',
  },
  {
    slug: 'hawaii',
    name: 'Hawaii',
    abbreviation: 'HI',
    filingFee: 50,
    processingTime: '5-10 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'Hawaii nonprofits file Articles of Incorporation with the Department of Commerce and Consumer Affairs. The state offers income tax exemption for qualifying organizations.',
  },
  {
    slug: 'idaho',
    name: 'Idaho',
    abbreviation: 'ID',
    filingFee: 30,
    processingTime: '5-7 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'Idaho requires filing Articles of Incorporation with the Secretary of State. The state offers income tax exemption for qualifying nonprofit organizations.',
  },
  {
    slug: 'indiana',
    name: 'Indiana',
    abbreviation: 'IN',
    filingFee: 30,
    processingTime: '5-7 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'Indiana nonprofits file Articles of Incorporation with the Secretary of State. The state provides sales and property tax exemptions for qualifying nonprofits.',
  },
  {
    slug: 'iowa',
    name: 'Iowa',
    abbreviation: 'IA',
    filingFee: 20,
    processingTime: '5-7 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'Iowa requires filing Articles of Incorporation with the Secretary of State. The state offers income and sales tax exemptions for qualifying organizations.',
  },
  {
    slug: 'kansas',
    name: 'Kansas',
    abbreviation: 'KS',
    filingFee: 20,
    processingTime: '3-5 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'Kansas nonprofits file Articles of Incorporation with the Secretary of State. The state provides sales tax exemption for qualifying nonprofit organizations.',
  },
  {
    slug: 'kentucky',
    name: 'Kentucky',
    abbreviation: 'KY',
    filingFee: 8,
    processingTime: '3-5 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'Kentucky requires filing Articles of Incorporation with the Secretary of State. The state has one of the lowest filing fees in the nation.',
  },
  {
    slug: 'louisiana',
    name: 'Louisiana',
    abbreviation: 'LA',
    filingFee: 75,
    processingTime: '5-7 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'Louisiana nonprofits file Articles of Incorporation with the Secretary of State. The state offers income and sales tax exemptions for qualifying organizations.',
  },
  {
    slug: 'maine',
    name: 'Maine',
    abbreviation: 'ME',
    filingFee: 40,
    processingTime: '5-10 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'Maine requires filing Articles of Incorporation with the Secretary of State. The state provides sales tax exemption for qualifying nonprofit organizations.',
  },
  {
    slug: 'maryland',
    name: 'Maryland',
    abbreviation: 'MD',
    filingFee: 100,
    processingTime: '5-7 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'Maryland nonprofits file Articles of Incorporation with the State Department of Assessments and Taxation. The state offers income and property tax exemptions for qualifying organizations.',
  },
  {
    slug: 'massachusetts',
    name: 'Massachusetts',
    abbreviation: 'MA',
    filingFee: 35,
    processingTime: '5-10 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'Massachusetts requires filing Articles of Organization with the Secretary of the Commonwealth. The state provides income and sales tax exemptions for qualifying nonprofits.',
  },
  {
    slug: 'minnesota',
    name: 'Minnesota',
    abbreviation: 'MN',
    filingFee: 70,
    processingTime: '5-7 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'Minnesota nonprofits file Articles of Incorporation with the Secretary of State. The state offers sales and property tax exemptions for qualifying organizations.',
  },
  {
    slug: 'mississippi',
    name: 'Mississippi',
    abbreviation: 'MS',
    filingFee: 50,
    processingTime: '5-7 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'Mississippi requires filing Articles of Incorporation with the Secretary of State. The state offers income tax exemption for qualifying nonprofit organizations.',
  },
  {
    slug: 'missouri',
    name: 'Missouri',
    abbreviation: 'MO',
    filingFee: 25,
    processingTime: '5-7 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'Missouri nonprofits file Articles of Incorporation with the Secretary of State. The state provides sales tax exemption for qualifying organizations.',
  },
  {
    slug: 'montana',
    name: 'Montana',
    abbreviation: 'MT',
    filingFee: 20,
    processingTime: '5-7 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: false,
    description:
      'Montana requires filing Articles of Incorporation with the Secretary of State. The state has no sales tax and offers property tax exemptions for qualifying nonprofits.',
  },
  {
    slug: 'nebraska',
    name: 'Nebraska',
    abbreviation: 'NE',
    filingFee: 10,
    processingTime: '3-5 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'Nebraska nonprofits file Articles of Incorporation with the Secretary of State. The state offers sales and income tax exemptions for qualifying organizations.',
  },
  {
    slug: 'nevada',
    name: 'Nevada',
    abbreviation: 'NV',
    filingFee: 50,
    processingTime: '3-5 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: false,
    description:
      'Nevada requires filing Articles of Incorporation with the Secretary of State. The state has no income tax and offers a business-friendly regulatory environment.',
  },
  {
    slug: 'new-hampshire',
    name: 'New Hampshire',
    abbreviation: 'NH',
    filingFee: 25,
    processingTime: '5-10 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: false,
    description:
      'New Hampshire nonprofits file Articles of Agreement with the Secretary of State. The state has no income tax or sales tax.',
  },
  {
    slug: 'new-jersey',
    name: 'New Jersey',
    abbreviation: 'NJ',
    filingFee: 75,
    processingTime: '5-7 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'New Jersey requires filing a Certificate of Incorporation with the Division of Revenue. The state provides sales tax exemption for qualifying nonprofits.',
  },
  {
    slug: 'new-mexico',
    name: 'New Mexico',
    abbreviation: 'NM',
    filingFee: 25,
    processingTime: '5-7 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'New Mexico nonprofits file Articles of Incorporation with the Secretary of State. The state offers income tax exemption for qualifying organizations.',
  },
  {
    slug: 'north-dakota',
    name: 'North Dakota',
    abbreviation: 'ND',
    filingFee: 40,
    processingTime: '5-10 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'North Dakota requires filing Articles of Incorporation with the Secretary of State. The state provides income and sales tax exemptions for qualifying nonprofits.',
  },
  {
    slug: 'oklahoma',
    name: 'Oklahoma',
    abbreviation: 'OK',
    filingFee: 25,
    processingTime: '5-7 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'Oklahoma nonprofits file a Certificate of Incorporation with the Secretary of State. The state offers sales tax exemption for qualifying organizations.',
  },
  {
    slug: 'oregon',
    name: 'Oregon',
    abbreviation: 'OR',
    filingFee: 50,
    processingTime: '5-7 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'Oregon requires filing Articles of Incorporation with the Secretary of State. The state has no sales tax and provides property tax exemptions for qualifying nonprofits.',
  },
  {
    slug: 'rhode-island',
    name: 'Rhode Island',
    abbreviation: 'RI',
    filingFee: 35,
    processingTime: '5-7 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'Rhode Island nonprofits file Articles of Incorporation with the Secretary of State. The state offers sales and income tax exemptions for qualifying organizations.',
  },
  {
    slug: 'south-carolina',
    name: 'South Carolina',
    abbreviation: 'SC',
    filingFee: 25,
    processingTime: '5-7 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'South Carolina requires filing Articles of Incorporation with the Secretary of State. The state offers income and property tax exemptions for qualifying nonprofits.',
  },
  {
    slug: 'south-dakota',
    name: 'South Dakota',
    abbreviation: 'SD',
    filingFee: 30,
    processingTime: '5-7 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: false,
    description:
      'South Dakota nonprofits file Articles of Incorporation with the Secretary of State. The state has no income tax and offers a simple incorporation process.',
  },
  {
    slug: 'tennessee',
    name: 'Tennessee',
    abbreviation: 'TN',
    filingFee: 100,
    processingTime: '5-7 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'Tennessee requires filing a Charter with the Secretary of State. The state offers sales and franchise tax exemptions for qualifying nonprofit organizations.',
  },
  {
    slug: 'utah',
    name: 'Utah',
    abbreviation: 'UT',
    filingFee: 30,
    processingTime: '3-5 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'Utah nonprofits file Articles of Incorporation with the Division of Corporations. The state offers sales tax exemption for qualifying organizations.',
  },
  {
    slug: 'vermont',
    name: 'Vermont',
    abbreviation: 'VT',
    filingFee: 75,
    processingTime: '5-10 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'Vermont requires filing Articles of Incorporation with the Secretary of State. The state offers income tax exemption for qualifying nonprofit organizations.',
  },
  {
    slug: 'virginia',
    name: 'Virginia',
    abbreviation: 'VA',
    filingFee: 75,
    processingTime: '3-5 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'Virginia nonprofits file Articles of Incorporation with the State Corporation Commission. The state provides income and sales tax exemptions for qualifying organizations.',
  },
  {
    slug: 'washington',
    name: 'Washington',
    abbreviation: 'WA',
    filingFee: 30,
    processingTime: '5-7 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: false,
    description:
      'Washington requires filing Articles of Incorporation with the Secretary of State. The state has no income tax and offers sales tax exemptions through a separate process.',
  },
  {
    slug: 'west-virginia',
    name: 'West Virginia',
    abbreviation: 'WV',
    filingFee: 15,
    processingTime: '5-7 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'West Virginia nonprofits file Articles of Incorporation with the Secretary of State. The state offers sales and income tax exemptions for qualifying organizations.',
  },
  {
    slug: 'wisconsin',
    name: 'Wisconsin',
    abbreviation: 'WI',
    filingFee: 35,
    processingTime: '5-7 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: true,
    description:
      'Wisconsin requires filing Articles of Incorporation with the Department of Financial Institutions. The state provides sales and property tax exemptions for qualifying nonprofits.',
  },
  {
    slug: 'wyoming',
    name: 'Wyoming',
    abbreviation: 'WY',
    filingFee: 25,
    processingTime: '5-10 business days',
    requiresPublicationNotice: false,
    hasStateTaxExemption: false,
    description:
      'Wyoming nonprofits file Articles of Incorporation with the Secretary of State. The state has no income tax and provides a streamlined incorporation process.',
  },
];

export function getStateBySlug(slug: string): State | undefined {
  return states.find((s) => s.slug === slug);
}

export function getRelatedStates(slug: string, count = 4): State[] {
  const current = states.find((s) => s.slug === slug);
  if (!current) return states.slice(0, count);

  const index = states.indexOf(current);
  const related: State[] = [];

  // Pick nearby states in the array (alphabetically adjacent) that aren't the current state
  for (let i = 1; related.length < count; i++) {
    if (index + i < states.length) {
      related.push(states[index + i]);
    }
    if (related.length < count && index - i >= 0) {
      related.push(states[index - i]);
    }
    if (index + i >= states.length && index - i < 0) break;
  }

  return related.slice(0, count);
}
