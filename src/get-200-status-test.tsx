import k6JSX, { Fragment } from './k6JSX.js';
import { sleep, check } from 'k6';
import { Options } from 'k6/options';
import http from 'k6/http';

export let options: Options = {
  vus: 50,
  duration: '10s'
};

export default () => {

  return <HomePage name="BEHNAM 1" >
    {true &&
      <Fragment>
        <HomePage name="BEHNAM 2" ></HomePage>
        <HomePage name="BEHNAM 3" ></HomePage>
        <HomePage name="BEHNAM 4" ></HomePage>
      </Fragment>
    }
    <HomePage name="BEHNAM 5" ></HomePage>
    <HomePage name="BEHNAM 6" ></HomePage>
    <HomePage name="BEHNAM 7" >
      <HomePage name="BEHNAM 8" ></HomePage>
      <HomePage name="BEHNAM 9" ></HomePage>
    </HomePage>
  </HomePage>
};

function HomePage({ name }: { name: string }) {
  const res = http.get('https://test-api.k6.io');

  console.log(name, res.status);

  check(res, {
    'status is 200': () => res.status === 200,
  });
  sleep(1);
}
