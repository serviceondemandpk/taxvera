export const SERVICE_CATEGORIES = {
  resolution: "Tax Resolution",
  accounting: "Tax & Accounting",
};

export const services = [
  { slug: "installment-agreements", category: "resolution", title: "Installment Agreements", summary: "Spread what you owe into monthly payments you can actually afford.", help: "We negotiate the payment amount and terms with the IRS or your state, and keep your account in good standing." },
  { slug: "offers-in-compromise", category: "resolution", title: "Offers in Compromise", summary: "Explore whether you may qualify to settle tax debt for less than the full amount.", help: "We review your situation, prepare financial disclosures, and help you understand the offer process." },
  { slug: "bank-levies", category: "resolution", title: "Bank Levies", summary: "Understand your options if the IRS has levied your bank account.", help: "We review your situation and help you request an appropriate resolution, which may include a levy release." },
  { slug: "wage-garnishments", category: "resolution", title: "Wage Garnishments", summary: "Explore options if the IRS or a state agency is garnishing your wages.", help: "We review possible relief and help you pursue a resolution based on your case." },
  { slug: "audit-representation", category: "resolution", title: "Audit Representation", summary: "A qualified professional handles the audit so you do not have to face it alone.", help: "We communicate with the auditor, organize your records, and make sure every valid deduction is counted." },
  { slug: "penalty-abatement", category: "resolution", title: "Penalty Abatement", summary: "Reduce or remove penalties that have inflated your balance.", help: "We review your history for reasonable cause or first-time relief and file the request." },
  { slug: "currently-not-collectible", category: "resolution", title: "Currently Not Collectible", summary: "Pause IRS collection if paying would leave you unable to cover basic living costs.", help: "We document your hardship and request that collection be placed on hold." },
  { slug: "lien-assistance", category: "resolution", title: "Lien Assistance", summary: "Clear tax liens that block you from selling property or getting a loan.", help: "We pursue release, withdrawal, or subordination depending on your situation." },
  { slug: "innocent-spouse-relief", category: "resolution", title: "Innocent Spouse Relief", summary: "Seek relief from tax a current or former spouse caused.", help: "We evaluate eligibility and prepare the filing that supports your claim." },
  { slug: "payroll-tax-representation", category: "resolution", title: "Payroll Tax Representation", summary: "Resolve unpaid payroll taxes before they put your business at risk.", help: "We represent your business and protect owners from personal liability where possible." },
  { slug: "revenue-officer-representation", category: "resolution", title: "Revenue Officer Representation", summary: "Have an expert deal directly with the assigned revenue officer.", help: "We take over all communication and negotiate a realistic outcome." },
  { slug: "tax-return-preparation", category: "accounting", title: "Tax Return Preparation", summary: "Individual and business tax return preparation based on your records and eligible deductions.", help: "We review your income, deductions, credits, and supporting documents to prepare your returns." },
  { slug: "small-business-accounting", category: "accounting", title: "Small Business Accounting", summary: "Monthly books, payroll and sales tax reporting you can rely on.", help: "You get clear financials and a team that knows your numbers." },
  { slug: "advanced-tax-planning", category: "accounting", title: "Advanced Tax Planning", summary: "Structure your business and finances to legally pay less tax.", help: "We build a forward-looking plan and review it as your business grows." },
  { slug: "bookkeeping", category: "accounting", title: "Bookkeeping", summary: "Organized, compliant records so tax season is never a scramble.", help: "We reconcile accounts and keep your books audit-ready all year." },
];

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug);
