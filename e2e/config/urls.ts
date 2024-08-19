let host: string;
let protocol: string = 'https';
const fullUrl = 'https://demo.guru99.com/v4/';
const { hostname, port } = new URL(fullUrl);
host = `${hostname}${port ? `:${port}` : ''}`;
const urls = {
  domain: host,
  baseUrl: `${protocol}://${host}`,
  docPage: `${protocol}://${host}/docs/intro`,
  apiPage: `${protocol}://${host}/docs/api/class-playwright`,
};

export default urls;
