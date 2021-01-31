console.log('absolute - load');


console.log('---- fetch from /api/ ----');

fetch('/api/some-api').then(res => res.text()).then(console.log);
