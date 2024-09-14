import k6JSX from './k6JSX.js';
import { sleep, check } from 'k6';
import { Options } from 'k6/options';
import http from 'k6/http';

export let options: Options = {
  vus: 50,
  duration: '10s'
};

export default () => {
  return <HomePage name="BEHNAM 1" />
};

function HomePage({ name }: { name: string }) {
  const res = http.get('https://test-api.k6.io');

  console.log(name, res.status);

  check(res, {
    'status is 200': () => res.status === 200,
  });
  sleep(1);
}
