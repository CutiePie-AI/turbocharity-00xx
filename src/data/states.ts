export interface StateInfo {
  slug: string;
  name: string;
  abbreviation: string;
  filingFee: number;
  processingTime: string;
  requiresPublicationNotice: boolean;
  onlineFilingAvailable: boolean;
  secretaryOfStateUrl: string;
  steps: string[];
  stateTaxExemption: boolean;
  annualReportFee: number;
  annualReportFrequency: string;
  requiresRegisteredAgent: boolean;
  minimumBoardMembers: number;
  specificRequirements: string[];
  description: string;
  metaTitle: string;
  metaDescription: string;
}

const DEFAULT_STEPS: string[] = [
  'Choose a name and verify availability with the Secretary of State',
  'Appoint a registered agent in the state',
  'File Articles of Incorporation with the Secretary of State',
  'Draft bylaws and conflict-of-interest policy',
  'Hold an organizational board meeting and appoint officers',
  'Apply for an EIN from the IRS',
  'File IRS Form 1023-EZ for 501(c)(3) tax-exempt status',
];

const PUBLICATION_STEP =
  'Publish a notice of incorporation in a local newspaper as required by state law';

function stepsFor(requiresPublication: boolean): string[] {
  return requiresPublication
    ? [...DEFAULT_STEPS.slice(0, 3), PUBLICATION_STEP, ...DEFAULT_STEPS.slice(3)]
    : DEFAULT_STEPS;
}

function desc(name: string, abbr: string, fee: number, time: string, online: boolean, pub: boolean): string {
  const onlinePart = online
    ? `${name} offers convenient online filing through the Secretary of State's website, making the process straightforward and efficient.`
    : `${name} currently requires mail-in filing for nonprofit incorporation, so founders should plan for additional mailing and processing time.`;
  const pubPart = pub
    ? ` Additionally, ${name} requires a publication notice in a local newspaper, which may add time and cost.`
    : '';
  return `Starting a nonprofit in ${name} (${abbr}) requires filing Articles of Incorporation with the state and paying a $${fee} filing fee. Processing typically takes ${time}. ${onlinePart}${pubPart} After state incorporation, you can apply for federal 501(c)(3) tax-exempt status with the IRS.`;
}

function metaT(name: string): string {
  return `How to Start a Nonprofit in ${name} (2026 Guide) | TurboCharity`;
}

function metaD(name: string, fee: number, time: string, online: boolean): string {
  return `Complete guide to starting a nonprofit in ${name}. Filing fee: $${fee}. Processing time: ${time}. ${online ? 'Online filing available.' : 'Mail-in filing required.'} Step-by-step ${name} nonprofit incorporation instructions.`;
}

export const STATES: StateInfo[] = [
  {
    slug: 'alabama', name: 'Alabama', abbreviation: 'AL', filingFee: 200,
    processingTime: '5-7 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://www.sos.alabama.gov/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 25,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Must include a specific purpose clause', 'Registered agent must have AL address'],
    description: desc('Alabama', 'AL', 200, '5-7 business days', true, false),
    metaTitle: metaT('Alabama'), metaDescription: metaD('Alabama', 200, '5-7 business days', true),
  },
  {
    slug: 'alaska', name: 'Alaska', abbreviation: 'AK', filingFee: 250,
    processingTime: '10-15 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://www.commerce.alaska.gov/web/cbpl/',
    steps: stepsFor(false), stateTaxExemption: false, annualReportFee: 0,
    annualReportFrequency: 'Biennially', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['No state income tax - no separate exemption needed', 'Biennial report required'],
    description: desc('Alaska', 'AK', 250, '10-15 business days', true, false),
    metaTitle: metaT('Alaska'), metaDescription: metaD('Alaska', 250, '10-15 business days', true),
  },
  {
    slug: 'arizona', name: 'Arizona', abbreviation: 'AZ', filingFee: 40,
    processingTime: '5-10 business days', requiresPublicationNotice: true,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://azsos.gov/',
    steps: stepsFor(true), stateTaxExemption: true, annualReportFee: 0,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 1,
    specificRequirements: ['Publication notice required in a newspaper of general circulation', 'Must file annual report with the Arizona Corporation Commission'],
    description: desc('Arizona', 'AZ', 40, '5-10 business days', true, true),
    metaTitle: metaT('Arizona'), metaDescription: metaD('Arizona', 40, '5-10 business days', true),
  },
  {
    slug: 'arkansas', name: 'Arkansas', abbreviation: 'AR', filingFee: 50,
    processingTime: '5-7 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://www.sos.arkansas.gov/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 0,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Must apply separately for state tax exemption', 'Nonprofits must file annual franchise tax report'],
    description: desc('Arkansas', 'AR', 50, '5-7 business days', true, false),
    metaTitle: metaT('Arkansas'), metaDescription: metaD('Arkansas', 50, '5-7 business days', true),
  },
  {
    slug: 'california', name: 'California', abbreviation: 'CA', filingFee: 30,
    processingTime: '3-5 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://www.sos.ca.gov/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 20,
    annualReportFrequency: 'Biennially', requiresRegisteredAgent: true, minimumBoardMembers: 1,
    specificRequirements: ['Must file Form 3500 or 3500A for California tax exemption', 'Must register with the Attorney General Registry of Charitable Trusts', 'Annual filing of Form 199 or 199N required'],
    description: desc('California', 'CA', 30, '3-5 business days', true, false),
    metaTitle: metaT('California'), metaDescription: metaD('California', 30, '3-5 business days', true),
  },
  {
    slug: 'colorado', name: 'Colorado', abbreviation: 'CO', filingFee: 50,
    processingTime: '5-7 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://www.sos.state.co.us/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 10,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 1,
    specificRequirements: ['Must file periodic report with Secretary of State', 'Must apply for state sales tax exemption separately'],
    description: desc('Colorado', 'CO', 50, '5-7 business days', true, false),
    metaTitle: metaT('Colorado'), metaDescription: metaD('Colorado', 50, '5-7 business days', true),
  },
  {
    slug: 'connecticut', name: 'Connecticut', abbreviation: 'CT', filingFee: 50,
    processingTime: '5-7 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://portal.ct.gov/sots',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 75,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Must register with Department of Consumer Protection for charitable solicitations', 'Annual report required'],
    description: desc('Connecticut', 'CT', 50, '5-7 business days', true, false),
    metaTitle: metaT('Connecticut'), metaDescription: metaD('Connecticut', 50, '5-7 business days', true),
  },
  {
    slug: 'delaware', name: 'Delaware', abbreviation: 'DE', filingFee: 89,
    processingTime: '3-5 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://corp.delaware.gov/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 25,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 1,
    specificRequirements: ['Popular incorporation state due to favorable business laws', 'Must file annual report with Division of Corporations'],
    description: desc('Delaware', 'DE', 89, '3-5 business days', true, false),
    metaTitle: metaT('Delaware'), metaDescription: metaD('Delaware', 89, '3-5 business days', true),
  },
  {
    slug: 'district-of-columbia', name: 'District of Columbia', abbreviation: 'DC', filingFee: 80,
    processingTime: '5-10 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://dcra.dc.gov/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 80,
    annualReportFrequency: 'Biennially', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Must register with DCRA', 'Must file biennial report', 'Must apply for DC tax exemption separately'],
    description: desc('District of Columbia', 'DC', 80, '5-10 business days', true, false),
    metaTitle: metaT('District of Columbia'), metaDescription: metaD('District of Columbia', 80, '5-10 business days', true),
  },
  {
    slug: 'florida', name: 'Florida', abbreviation: 'FL', filingFee: 70,
    processingTime: '3-5 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://dos.fl.gov/sunbiz/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 61,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Must file annual report through Sunbiz', 'Must apply for Florida sales tax exemption with Department of Revenue', 'Must register for charitable solicitations if fundraising'],
    description: desc('Florida', 'FL', 70, '3-5 business days', true, false),
    metaTitle: metaT('Florida'), metaDescription: metaD('Florida', 70, '3-5 business days', true),
  },
  {
    slug: 'georgia', name: 'Georgia', abbreviation: 'GA', filingFee: 100,
    processingTime: '7-10 business days', requiresPublicationNotice: true,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://sos.ga.gov/corporations-division',
    steps: stepsFor(true), stateTaxExemption: true, annualReportFee: 50,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Publication notice required in county newspaper', 'Must file annual registration with Secretary of State', 'Must register for charitable solicitations'],
    description: desc('Georgia', 'GA', 100, '7-10 business days', true, true),
    metaTitle: metaT('Georgia'), metaDescription: metaD('Georgia', 100, '7-10 business days', true),
  },
  {
    slug: 'hawaii', name: 'Hawaii', abbreviation: 'HI', filingFee: 50,
    processingTime: '5-10 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: false, secretaryOfStateUrl: 'https://cca.hawaii.gov/breg/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 5,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Mail-in filing required - no online option', 'Must file annual report with DCCA', 'Must apply for Hawaii GET exemption'],
    description: desc('Hawaii', 'HI', 50, '5-10 business days', false, false),
    metaTitle: metaT('Hawaii'), metaDescription: metaD('Hawaii', 50, '5-10 business days', false),
  },
  {
    slug: 'idaho', name: 'Idaho', abbreviation: 'ID', filingFee: 100,
    processingTime: '5-7 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://sos.idaho.gov/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 0,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Must file annual report (no fee for nonprofits)', 'Must apply for Idaho tax exemption separately'],
    description: desc('Idaho', 'ID', 100, '5-7 business days', true, false),
    metaTitle: metaT('Idaho'), metaDescription: metaD('Idaho', 100, '5-7 business days', true),
  },
  {
    slug: 'illinois', name: 'Illinois', abbreviation: 'IL', filingFee: 50,
    processingTime: '5-10 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://www.ilsos.gov/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 0,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Must file annual report with Secretary of State', 'Must apply for Illinois sales tax exemption', 'Must register with Attorney General for charitable solicitations'],
    description: desc('Illinois', 'IL', 50, '5-10 business days', true, false),
    metaTitle: metaT('Illinois'), metaDescription: metaD('Illinois', 50, '5-10 business days', true),
  },
  {
    slug: 'indiana', name: 'Indiana', abbreviation: 'IN', filingFee: 30,
    processingTime: '5-7 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://www.in.gov/sos/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 10,
    annualReportFrequency: 'Biennially', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Must file biennial business entity report', 'Must apply for Indiana sales tax exemption'],
    description: desc('Indiana', 'IN', 30, '5-7 business days', true, false),
    metaTitle: metaT('Indiana'), metaDescription: metaD('Indiana', 30, '5-7 business days', true),
  },
  {
    slug: 'iowa', name: 'Iowa', abbreviation: 'IA', filingFee: 20,
    processingTime: '5-10 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://sos.iowa.gov/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 0,
    annualReportFrequency: 'Biennially', requiresRegisteredAgent: true, minimumBoardMembers: 1,
    specificRequirements: ['Must file biennial report with Secretary of State', 'Must apply for Iowa sales tax exemption'],
    description: desc('Iowa', 'IA', 20, '5-10 business days', true, false),
    metaTitle: metaT('Iowa'), metaDescription: metaD('Iowa', 20, '5-10 business days', true),
  },
  {
    slug: 'kansas', name: 'Kansas', abbreviation: 'KS', filingFee: 20,
    processingTime: '3-5 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://sos.ks.gov/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 40,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Must file annual report with Secretary of State', 'Must apply for Kansas sales tax exemption separately'],
    description: desc('Kansas', 'KS', 20, '3-5 business days', true, false),
    metaTitle: metaT('Kansas'), metaDescription: metaD('Kansas', 20, '3-5 business days', true),
  },
  {
    slug: 'kentucky', name: 'Kentucky', abbreviation: 'KY', filingFee: 8,
    processingTime: '3-5 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://www.sos.ky.gov/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 15,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Lowest filing fee in the nation', 'Must file annual report with Secretary of State', 'Must apply for Kentucky sales and use tax exemption'],
    description: desc('Kentucky', 'KY', 8, '3-5 business days', true, false),
    metaTitle: metaT('Kentucky'), metaDescription: metaD('Kentucky', 8, '3-5 business days', true),
  },
  {
    slug: 'louisiana', name: 'Louisiana', abbreviation: 'LA', filingFee: 75,
    processingTime: '5-7 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://www.sos.la.gov/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 25,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Must file annual report with Secretary of State', 'Must apply for Louisiana sales tax exemption', 'Must register for charitable solicitations'],
    description: desc('Louisiana', 'LA', 75, '5-7 business days', true, false),
    metaTitle: metaT('Louisiana'), metaDescription: metaD('Louisiana', 75, '5-7 business days', true),
  },
  {
    slug: 'maine', name: 'Maine', abbreviation: 'ME', filingFee: 40,
    processingTime: '5-10 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://www.maine.gov/sos/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 35,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Must file annual report with Secretary of State', 'Must apply for Maine sales tax exemption'],
    description: desc('Maine', 'ME', 40, '5-10 business days', true, false),
    metaTitle: metaT('Maine'), metaDescription: metaD('Maine', 40, '5-10 business days', true),
  },
  {
    slug: 'maryland', name: 'Maryland', abbreviation: 'MD', filingFee: 100,
    processingTime: '7-10 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://sos.maryland.gov/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 0,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 1,
    specificRequirements: ['Must file annual personal property return', 'Must register with the Secretary of State for charitable solicitations'],
    description: desc('Maryland', 'MD', 100, '7-10 business days', true, false),
    metaTitle: metaT('Maryland'), metaDescription: metaD('Maryland', 100, '7-10 business days', true),
  },
  {
    slug: 'massachusetts', name: 'Massachusetts', abbreviation: 'MA', filingFee: 35,
    processingTime: '5-10 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://www.sec.state.ma.us/cor/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 18,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Must file annual report with Secretary of Commonwealth', 'Must register with Attorney General for charitable solicitations', 'Must apply for state tax exemption separately'],
    description: desc('Massachusetts', 'MA', 35, '5-10 business days', true, false),
    metaTitle: metaT('Massachusetts'), metaDescription: metaD('Massachusetts', 35, '5-10 business days', true),
  },
  {
    slug: 'michigan', name: 'Michigan', abbreviation: 'MI', filingFee: 20,
    processingTime: '5-7 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://www.michigan.gov/lara/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 20,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Must file annual report with LARA', 'Must apply for Michigan sales tax exemption', 'Must register for charitable solicitations if fundraising'],
    description: desc('Michigan', 'MI', 20, '5-7 business days', true, false),
    metaTitle: metaT('Michigan'), metaDescription: metaD('Michigan', 20, '5-7 business days', true),
  },
  {
    slug: 'minnesota', name: 'Minnesota', abbreviation: 'MN', filingFee: 70,
    processingTime: '5-10 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://www.sos.state.mn.us/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 0,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Must file annual renewal with Secretary of State', 'Must register with Attorney General for charitable solicitations'],
    description: desc('Minnesota', 'MN', 70, '5-10 business days', true, false),
    metaTitle: metaT('Minnesota'), metaDescription: metaD('Minnesota', 70, '5-10 business days', true),
  },
  {
    slug: 'mississippi', name: 'Mississippi', abbreviation: 'MS', filingFee: 50,
    processingTime: '5-7 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: false, secretaryOfStateUrl: 'https://www.sos.ms.gov/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 25,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Mail-in filing required', 'Must file annual report', 'Must apply for Mississippi sales tax exemption'],
    description: desc('Mississippi', 'MS', 50, '5-7 business days', false, false),
    metaTitle: metaT('Mississippi'), metaDescription: metaD('Mississippi', 50, '5-7 business days', false),
  },
  {
    slug: 'missouri', name: 'Missouri', abbreviation: 'MO', filingFee: 25,
    processingTime: '3-5 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://www.sos.mo.gov/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 0,
    annualReportFrequency: 'No annual report required', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['No annual report filing required for nonprofits', 'Must apply for Missouri sales tax exemption separately'],
    description: desc('Missouri', 'MO', 25, '3-5 business days', true, false),
    metaTitle: metaT('Missouri'), metaDescription: metaD('Missouri', 25, '3-5 business days', true),
  },
  {
    slug: 'montana', name: 'Montana', abbreviation: 'MT', filingFee: 20,
    processingTime: '5-7 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://sosmt.gov/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 20,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Must file annual report with Secretary of State', 'No sales tax in Montana'],
    description: desc('Montana', 'MT', 20, '5-7 business days', true, false),
    metaTitle: metaT('Montana'), metaDescription: metaD('Montana', 20, '5-7 business days', true),
  },
  {
    slug: 'nebraska', name: 'Nebraska', abbreviation: 'NE', filingFee: 10,
    processingTime: '3-5 business days', requiresPublicationNotice: true,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://sos.nebraska.gov/',
    steps: stepsFor(true), stateTaxExemption: true, annualReportFee: 20,
    annualReportFrequency: 'Biennially', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Publication notice required in local newspaper', 'Must file biennial occupation tax report', 'Must apply for Nebraska sales tax exemption'],
    description: desc('Nebraska', 'NE', 10, '3-5 business days', true, true),
    metaTitle: metaT('Nebraska'), metaDescription: metaD('Nebraska', 10, '3-5 business days', true),
  },
  {
    slug: 'nevada', name: 'Nevada', abbreviation: 'NV', filingFee: 50,
    processingTime: '3-5 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://www.nvsos.gov/',
    steps: stepsFor(false), stateTaxExemption: false, annualReportFee: 50,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['No state income tax - no separate income tax exemption needed', 'Must file annual list of officers with Secretary of State', 'Must apply for Nevada sales tax exemption'],
    description: desc('Nevada', 'NV', 50, '3-5 business days', true, false),
    metaTitle: metaT('Nevada'), metaDescription: metaD('Nevada', 50, '3-5 business days', true),
  },
  {
    slug: 'new-hampshire', name: 'New Hampshire', abbreviation: 'NH', filingFee: 25,
    processingTime: '5-7 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://www.sos.nh.gov/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 25,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Must file annual report with Secretary of State', 'Must register for charitable solicitations with Attorney General'],
    description: desc('New Hampshire', 'NH', 25, '5-7 business days', true, false),
    metaTitle: metaT('New Hampshire'), metaDescription: metaD('New Hampshire', 25, '5-7 business days', true),
  },
  {
    slug: 'new-jersey', name: 'New Jersey', abbreviation: 'NJ', filingFee: 75,
    processingTime: '5-10 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://www.njportal.com/DOR/BusinessFormation',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 25,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Must file annual report with Division of Revenue', 'Must register for charitable solicitations with the Charities Registration Section'],
    description: desc('New Jersey', 'NJ', 75, '5-10 business days', true, false),
    metaTitle: metaT('New Jersey'), metaDescription: metaD('New Jersey', 75, '5-10 business days', true),
  },
  {
    slug: 'new-mexico', name: 'New Mexico', abbreviation: 'NM', filingFee: 25,
    processingTime: '5-10 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://www.sos.nm.gov/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 10,
    annualReportFrequency: 'Biennially', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Must file biennial report with Secretary of State', 'Must apply for New Mexico gross receipts tax exemption'],
    description: desc('New Mexico', 'NM', 25, '5-10 business days', true, false),
    metaTitle: metaT('New Mexico'), metaDescription: metaD('New Mexico', 25, '5-10 business days', true),
  },
  {
    slug: 'new-york', name: 'New York', abbreviation: 'NY', filingFee: 75,
    processingTime: '7-14 business days', requiresPublicationNotice: true,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://www.dos.ny.gov/',
    steps: stepsFor(true), stateTaxExemption: true, annualReportFee: 0,
    annualReportFrequency: 'Biennially', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Publication notice required in two newspapers (one daily, one weekly)', 'Must file biennial statement with Department of State', 'Must register with Attorney General Charities Bureau', 'Must obtain Attorney General approval before filing certificate of incorporation'],
    description: desc('New York', 'NY', 75, '7-14 business days', true, true),
    metaTitle: metaT('New York'), metaDescription: metaD('New York', 75, '7-14 business days', true),
  },
  {
    slug: 'north-carolina', name: 'North Carolina', abbreviation: 'NC', filingFee: 60,
    processingTime: '5-7 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://www.sosnc.gov/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 25,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Must file annual report with Secretary of State', 'Must apply for NC sales tax exemption', 'Must register for charitable solicitations'],
    description: desc('North Carolina', 'NC', 60, '5-7 business days', true, false),
    metaTitle: metaT('North Carolina'), metaDescription: metaD('North Carolina', 60, '5-7 business days', true),
  },
  {
    slug: 'north-dakota', name: 'North Dakota', abbreviation: 'ND', filingFee: 40,
    processingTime: '5-10 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://sos.nd.gov/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 25,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Must file annual report with Secretary of State', 'Must apply for ND sales tax exemption'],
    description: desc('North Dakota', 'ND', 40, '5-10 business days', true, false),
    metaTitle: metaT('North Dakota'), metaDescription: metaD('North Dakota', 40, '5-10 business days', true),
  },
  {
    slug: 'ohio', name: 'Ohio', abbreviation: 'OH', filingFee: 99,
    processingTime: '3-5 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://www.ohiosos.gov/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 0,
    annualReportFrequency: 'No annual report required', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['No annual report required for nonprofits', 'Must apply for Ohio sales tax exemption', 'Must register for charitable solicitations with Attorney General'],
    description: desc('Ohio', 'OH', 99, '3-5 business days', true, false),
    metaTitle: metaT('Ohio'), metaDescription: metaD('Ohio', 99, '3-5 business days', true),
  },
  {
    slug: 'oklahoma', name: 'Oklahoma', abbreviation: 'OK', filingFee: 25,
    processingTime: '5-7 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://www.sos.ok.gov/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 25,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Must file annual certificate with Secretary of State', 'Must apply for Oklahoma sales tax exemption'],
    description: desc('Oklahoma', 'OK', 25, '5-7 business days', true, false),
    metaTitle: metaT('Oklahoma'), metaDescription: metaD('Oklahoma', 25, '5-7 business days', true),
  },
  {
    slug: 'oregon', name: 'Oregon', abbreviation: 'OR', filingFee: 50,
    processingTime: '5-10 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://sos.oregon.gov/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 0,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Must file annual report with Secretary of State', 'No sales tax in Oregon', 'Must register with Department of Justice for charitable solicitations'],
    description: desc('Oregon', 'OR', 50, '5-10 business days', true, false),
    metaTitle: metaT('Oregon'), metaDescription: metaD('Oregon', 50, '5-10 business days', true),
  },
  {
    slug: 'pennsylvania', name: 'Pennsylvania', abbreviation: 'PA', filingFee: 125,
    processingTime: '7-10 business days', requiresPublicationNotice: true,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://www.dos.pa.gov/',
    steps: stepsFor(true), stateTaxExemption: true, annualReportFee: 0,
    annualReportFrequency: 'No annual report required', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Publication notice required in two newspapers', 'No annual report required', 'Must register with Bureau of Charitable Organizations'],
    description: desc('Pennsylvania', 'PA', 125, '7-10 business days', true, true),
    metaTitle: metaT('Pennsylvania'), metaDescription: metaD('Pennsylvania', 125, '7-10 business days', true),
  },
  {
    slug: 'rhode-island', name: 'Rhode Island', abbreviation: 'RI', filingFee: 35,
    processingTime: '5-7 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://www.sos.ri.gov/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 50,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Must file annual report with Secretary of State', 'Must apply for Rhode Island sales tax exemption'],
    description: desc('Rhode Island', 'RI', 35, '5-7 business days', true, false),
    metaTitle: metaT('Rhode Island'), metaDescription: metaD('Rhode Island', 35, '5-7 business days', true),
  },
  {
    slug: 'south-carolina', name: 'South Carolina', abbreviation: 'SC', filingFee: 25,
    processingTime: '5-7 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://sos.sc.gov/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 0,
    annualReportFrequency: 'No annual report required', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['No annual report required for nonprofits', 'Must apply for SC sales tax exemption', 'Must register for charitable solicitations with Secretary of State'],
    description: desc('South Carolina', 'SC', 25, '5-7 business days', true, false),
    metaTitle: metaT('South Carolina'), metaDescription: metaD('South Carolina', 25, '5-7 business days', true),
  },
  {
    slug: 'south-dakota', name: 'South Dakota', abbreviation: 'SD', filingFee: 30,
    processingTime: '5-10 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: false, secretaryOfStateUrl: 'https://sdsos.gov/',
    steps: stepsFor(false), stateTaxExemption: false, annualReportFee: 10,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Mail-in filing required', 'No state income tax', 'Must file annual report with Secretary of State'],
    description: desc('South Dakota', 'SD', 30, '5-10 business days', false, false),
    metaTitle: metaT('South Dakota'), metaDescription: metaD('South Dakota', 30, '5-10 business days', false),
  },
  {
    slug: 'tennessee', name: 'Tennessee', abbreviation: 'TN', filingFee: 100,
    processingTime: '5-7 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://sos.tn.gov/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 20,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Must file annual report with Secretary of State', 'Must apply for Tennessee sales tax exemption', 'Must register for charitable solicitations'],
    description: desc('Tennessee', 'TN', 100, '5-7 business days', true, false),
    metaTitle: metaT('Tennessee'), metaDescription: metaD('Tennessee', 100, '5-7 business days', true),
  },
  {
    slug: 'texas', name: 'Texas', abbreviation: 'TX', filingFee: 25,
    processingTime: '3-5 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://www.sos.texas.gov/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 0,
    annualReportFrequency: 'No annual report required', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Must file Certificate of Formation', 'No annual report required for nonprofits', 'Must apply for Texas sales tax exemption with Comptroller'],
    description: desc('Texas', 'TX', 25, '3-5 business days', true, false),
    metaTitle: metaT('Texas'), metaDescription: metaD('Texas', 25, '3-5 business days', true),
  },
  {
    slug: 'utah', name: 'Utah', abbreviation: 'UT', filingFee: 30,
    processingTime: '3-5 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://corporations.utah.gov/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 15,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Must file annual renewal with Division of Corporations', 'Must apply for Utah sales tax exemption', 'Must register for charitable solicitations'],
    description: desc('Utah', 'UT', 30, '3-5 business days', true, false),
    metaTitle: metaT('Utah'), metaDescription: metaD('Utah', 30, '3-5 business days', true),
  },
  {
    slug: 'vermont', name: 'Vermont', abbreviation: 'VT', filingFee: 125,
    processingTime: '5-10 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://sos.vermont.gov/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 45,
    annualReportFrequency: 'Biennially', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Must file biennial report with Secretary of State', 'Must apply for Vermont sales tax exemption'],
    description: desc('Vermont', 'VT', 125, '5-10 business days', true, false),
    metaTitle: metaT('Vermont'), metaDescription: metaD('Vermont', 125, '5-10 business days', true),
  },
  {
    slug: 'virginia', name: 'Virginia', abbreviation: 'VA', filingFee: 75,
    processingTime: '3-5 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://www.scc.virginia.gov/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 25,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Must file annual report with State Corporation Commission', 'Must apply for Virginia sales tax exemption'],
    description: desc('Virginia', 'VA', 75, '3-5 business days', true, false),
    metaTitle: metaT('Virginia'), metaDescription: metaD('Virginia', 75, '3-5 business days', true),
  },
  {
    slug: 'washington', name: 'Washington', abbreviation: 'WA', filingFee: 30,
    processingTime: '5-7 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://www.sos.wa.gov/',
    steps: stepsFor(false), stateTaxExemption: false, annualReportFee: 10,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['No state income tax', 'Must file annual report with Secretary of State', 'Must apply for Washington B&O tax exemption'],
    description: desc('Washington', 'WA', 30, '5-7 business days', true, false),
    metaTitle: metaT('Washington'), metaDescription: metaD('Washington', 30, '5-7 business days', true),
  },
  {
    slug: 'west-virginia', name: 'West Virginia', abbreviation: 'WV', filingFee: 25,
    processingTime: '5-7 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://sos.wv.gov/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 25,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Must file annual report with Secretary of State', 'Must apply for WV sales tax exemption'],
    description: desc('West Virginia', 'WV', 25, '5-7 business days', true, false),
    metaTitle: metaT('West Virginia'), metaDescription: metaD('West Virginia', 25, '5-7 business days', true),
  },
  {
    slug: 'wisconsin', name: 'Wisconsin', abbreviation: 'WI', filingFee: 35,
    processingTime: '5-10 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://www.wdfi.org/',
    steps: stepsFor(false), stateTaxExemption: true, annualReportFee: 10,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['Must file annual report with Department of Financial Institutions', 'Must apply for Wisconsin sales tax exemption'],
    description: desc('Wisconsin', 'WI', 35, '5-10 business days', true, false),
    metaTitle: metaT('Wisconsin'), metaDescription: metaD('Wisconsin', 35, '5-10 business days', true),
  },
  {
    slug: 'wyoming', name: 'Wyoming', abbreviation: 'WY', filingFee: 25,
    processingTime: '5-7 business days', requiresPublicationNotice: false,
    onlineFilingAvailable: true, secretaryOfStateUrl: 'https://sos.wyo.gov/',
    steps: stepsFor(false), stateTaxExemption: false, annualReportFee: 25,
    annualReportFrequency: 'Annually', requiresRegisteredAgent: true, minimumBoardMembers: 3,
    specificRequirements: ['No state income tax', 'Must file annual report with Secretary of State', 'Must apply for Wyoming sales tax exemption'],
    description: desc('Wyoming', 'WY', 25, '5-7 business days', true, false),
    metaTitle: metaT('Wyoming'), metaDescription: metaD('Wyoming', 25, '5-7 business days', true),
  },
];

/** @deprecated Use STATES instead */
export const states = STATES;

/** Return all slugs for static param generation. */
export function getAllStateSlugs(): string[] {
  return STATES.map((s) => s.slug);
}

/** Look up a single state by slug, or undefined if not found. */
export function getStateBySlug(slug: string): StateInfo | undefined {
  return STATES.find((s) => s.slug === slug);
}

/** Region mapping for grouping states. */
export type Region = 'Northeast' | 'Southeast' | 'Midwest' | 'Southwest' | 'West';

const REGION_MAP: Record<string, Region> = {
  connecticut: 'Northeast', delaware: 'Northeast', maine: 'Northeast',
  maryland: 'Northeast', massachusetts: 'Northeast', 'new-hampshire': 'Northeast',
  'new-jersey': 'Northeast', 'new-york': 'Northeast', pennsylvania: 'Northeast',
  'rhode-island': 'Northeast', vermont: 'Northeast',
  alabama: 'Southeast', arkansas: 'Southeast', florida: 'Southeast',
  georgia: 'Southeast', kentucky: 'Southeast', louisiana: 'Southeast',
  mississippi: 'Southeast', 'north-carolina': 'Southeast', 'south-carolina': 'Southeast',
  tennessee: 'Southeast', virginia: 'Southeast', 'west-virginia': 'Southeast',
  'district-of-columbia': 'Southeast',
  illinois: 'Midwest', indiana: 'Midwest', iowa: 'Midwest',
  kansas: 'Midwest', michigan: 'Midwest', minnesota: 'Midwest',
  missouri: 'Midwest', nebraska: 'Midwest', 'north-dakota': 'Midwest',
  ohio: 'Midwest', 'south-dakota': 'Midwest', wisconsin: 'Midwest',
  arizona: 'Southwest', 'new-mexico': 'Southwest', oklahoma: 'Southwest',
  texas: 'Southwest',
  alaska: 'West', california: 'West', colorado: 'West',
  hawaii: 'West', idaho: 'West', montana: 'West',
  nevada: 'West', oregon: 'West', utah: 'West',
  washington: 'West', wyoming: 'West',
};

/** Get the region a state belongs to. */
export function getStateRegion(slug: string): Region {
  return REGION_MAP[slug] ?? 'West';
}
