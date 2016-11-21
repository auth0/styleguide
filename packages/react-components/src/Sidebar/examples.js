import React from 'react';
import Sidebar from './';

const codeExample =
`
<Sidebar
  items={
		[
			{
				text: 'Getting started',
				iconCode: 464,
				children: [{ text: 'From CDN' }, { text: 'Installing from Github' }]
			},
			{
				text: 'Design',
				iconCode: 258,
				children: [
					{ text: 'Typography' },
					{ text: 'Colors' }
				]
			},
			{
				text: 'Components',
				iconCode: 690,
				children: [
					{ text: 'Alert' },
					{ text: 'Buttons' },
					{ text: 'Try Banner' }
				]
			}
		]
	} />
`;

const examples = [
  {
    component: <Sidebar
      items={
      [
        {
          text: 'Getting started',
          iconCode: 464,
          children: [{ text: 'From CDN' }, { text: 'Installing from Github' }]
        },
        {
          text: 'Design',
          iconCode: 258,
          children: [
						{ text: 'Typography' },
            { text: 'Colors' }
          ]
        },
        {
          text: 'Components',
          iconCode: 690,
          children: [
            { text: 'Alert' },
            { text: 'Buttons' },
            { text: 'Try Banner' }
          ]
        }
      ]
      }
    />,
    code: codeExample,
    title: 'Styleguide (Plain components)',
    url: 'styleguide-html-css'
  }
];

export default examples;
