import qs from 'query-string';

export const routes = {
  // Technical
  root: '/',
  redirectFromWallet: '/redirect-from-wallet',
  // Pages
  connectWallet: '/connect-wallet',
  createAccount: '/create-account',
  restoreAccess: '/restore-access',
  campaigns: '/campaigns',
  settings: '/settings',
  createCampaign: '/create-campaign',
  campaign: '/campaigns/:campaignId',
};

export const getRoute = {
  campaign: (campaignId) => `/campaigns/${campaignId}`,
  callbackUrl: (params) => `${window.location.origin}/redirect-from-wallet?${qs.stringify(params)}`,
};
