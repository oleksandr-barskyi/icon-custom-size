import type { ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Icon } from '../src/components/ui/Icon/Icon';

const cases: [string, ReactElement][] = [
  ['default', <Icon name="Bell" />],
  ['size="lg"', <Icon name="Bell" size="lg" />],
  ['customSize={40}', <Icon name="Bell" customSize={40} />],
  ['size="lg" customSize={40}', <Icon name="Bell" size="lg" customSize={40} />],
  ['customSize={40} color="error" className="ml-2"', <Icon name="Bell" customSize={40} color="error" className="ml-2" />],
];

for (const [label, element] of cases) {
  const svg = renderToStaticMarkup(element);
  const attr = (name: string) => svg.match(new RegExp(` ${name}="([^"]*)"`))?.[1] ?? '-';
  console.log(`${label.padEnd(48)} width=${attr('width')} height=${attr('height')} class="${attr('class')}"`);
}
