/* eslint-disable no-param-reassign */
import { faker } from '@faker-js/faker';
import { RANDOMIZE } from '../app/constants.ts';
import type { Products } from '../types/entities.ts';

import productsStaticJSON from '../../data/products.json' assert { type: 'json' };

const productsStaticData: Products = productsStaticJSON;

export async function GET({params, request}) {
	return new Response(
	  JSON.stringify([
		{
			"name": "Education Dashboard",
			"category": "Html templates",
			"technology": "Angular",
			"id": 194556,
			"description": "Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.",
			"price": "$149",
			"discount": "No"
		},
		{
			"name": "React UI Kit",
			"category": "Html templates",
			"technology": "React JS",
			"id": 623232,
			"description": "Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.",
			"price": "$129",
			"discount": "10%"
		}
	])
	)
  }

// export function getProducts(randomize = RANDOMIZE) {
// 	console.log('getProducts');

// 	const result = randomize
// 		? productsStaticData.map((p) => {
// 				p.price = faker.commerce.price();
// 				p.technology = faker.commerce.productName();
// 				p.description = faker.commerce.productDescription();
// 				return p;
// 		  })
// 		: productsStaticData;

// 	return result;
// }
