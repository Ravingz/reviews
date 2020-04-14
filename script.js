import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = { 
    stages: [
        { duration: '120s', target: 500 },
        { duration: '60s', target: 1000 }, 
        { duration: '60s', target: 1500 }, 
        { duration: '120s', target: 2000 }, 
        { duration: '60s', target: 3000 },
        { duration: '30s', target: 4000 } 
        
      ],
};

let randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export default function() {
  let res = http.get(`http://localhost:3003/api/restaurants/${randomInt(1, 10000000)}/reviews`);
  check(res, {
    'status was 200': r => r.status == 200,
    'transaction time OK': r => r.timings.duration < 200,
  });
  sleep(1);
}