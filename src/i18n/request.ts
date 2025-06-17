import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  if (!locale) {
    locale = 'vi'; // Default to Vietnamese
  }
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
}); 