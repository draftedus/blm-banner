/**
 * Method used to keep track of the domain
 */
export async function trackDomain(name: string, metricsUrl: string) {
  if (!('fetch' in window)) return;
  return fetch(metricsUrl, {
    mode: 'cors',
    cache: 'no-cache',
    method: 'HEAD',
    headers: { 'x-blm-tech-website-name': name },
  });
}
