import { render, screen } from '@testing-library/react';
import StateCard from '@/components/StateCard';
import type { StateInfo } from '@/data/states';

const mockState: StateInfo = {
  slug: 'california',
  name: 'California',
  abbreviation: 'CA',
  filingFee: 30,
  processingTime: '3-5 business days',
  requiresPublicationNotice: false,
  onlineFilingAvailable: true,
  secretaryOfStateUrl: 'https://www.sos.ca.gov/',
  steps: [
    'Choose a name and verify availability',
    'Appoint a registered agent',
    'File Articles of Incorporation',
    'Draft bylaws and conflict-of-interest policy',
    'Hold an organizational board meeting',
    'Apply for an EIN from the IRS',
    'File IRS Form 1023-EZ for 501(c)(3) status',
  ],
  stateTaxExemption: true,
  annualReportFee: 20,
  annualReportFrequency: 'Biennially',
  requiresRegisteredAgent: true,
  minimumBoardMembers: 1,
  specificRequirements: ['Must file Form 3500 or 3500A for California tax exemption'],
  description: 'Starting a nonprofit in California (CA) requires filing Articles of Incorporation.',
  metaTitle: 'How to Start a Nonprofit in California (2026 Guide) | TurboCharity',
  metaDescription: 'Complete guide to starting a nonprofit in California.',
};

describe('StateCard', () => {
  it('renders state name', () => {
    render(<StateCard state={mockState} />);
    expect(screen.getByText('California')).toBeInTheDocument();
  });

  it('renders filing fee', () => {
    render(<StateCard state={mockState} />);
    expect(screen.getByText('$30')).toBeInTheDocument();
  });

  it('renders state abbreviation', () => {
    render(<StateCard state={mockState} />);
    expect(screen.getByText('CA')).toBeInTheDocument();
  });

  it('renders processing time', () => {
    render(<StateCard state={mockState} />);
    expect(screen.getByText('3-5 business days')).toBeInTheDocument();
  });

  it('links to correct /states/[slug] URL', () => {
    render(<StateCard state={mockState} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/states/california');
  });

  it('shows "Online Filing Available" when online filing is available', () => {
    render(<StateCard state={mockState} />);
    expect(screen.getByText('Online Filing Available')).toBeInTheDocument();
  });

  it('shows "Mail-In Filing Only" when online filing is not available', () => {
    const offlineState: StateInfo = {
      ...mockState,
      slug: 'hawaii',
      name: 'Hawaii',
      abbreviation: 'HI',
      onlineFilingAvailable: false,
    };
    render(<StateCard state={offlineState} />);
    expect(screen.getByText('Mail-In Filing Only')).toBeInTheDocument();
  });
});
