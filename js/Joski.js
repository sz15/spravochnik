var pics = new Array(
  'adv1.png',
  'adv2.png',
  'adv3.png',
  'adv4.png',
  'adv5.png',
  'adv6.png',
  'adv7.png',
  'adv8.png',
  'adv9.png',
);
var cur = -1;
function BgButton() {
  cur++;
  if (cur>4) cur=-1;
  document.getElementById('kartinka').src=pics[cur];
  }