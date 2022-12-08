export const quizzes = {
	history: {
		title: 'EV History',
		questions: [
			{
				title: 'Question 1', // title can be more descriptive, like the topic of the question
				text: 'When and where was the first electric car created?',
				multiple: false, // does the question have several correct answers? if yes, checkboxes will be used. if not, radio buttons will be used.
				options: [
					{
						text: '1832 in Scotland',
						value: '1832 in Scotland',
						correct: true,
					},
					{
						text: '1900 in the US',
						value: '1900 in the US',
						correct: false,
					},
					{
						text: '1832 in Germany',
						value: '1832 in Germany',
						correct: false,
					},
					{
						text: '2000 in China',
						value: '2000 in China',
						correct: false,
					},
				],
			},
			{
				title: 'Question 2',
				text: 'Why did the popularity of electric cars die off?',
				multiple: false,
				options: [
					{
						text: 'government regulations made it expensive to produce',
						value: 'government regulations made it expensive to produce',
						correct: false,
					},
					{
						text: 'Safety concerns',
						value: 'Safety concerns',
						correct: false,
					},
					{
						text: 'advancements in internal-combustion engines, and mass production of cheaper gasoline',
						value: 'advancements in internal-combustion engines, and mass production of cheaper gasoline',
						correct: true,
					},
					{
						text: 'lack of lithium reserves',
						value: 'lack of lithium reserves',
						correct: false,
					},
				]
			},
			{
				title: 'Question 3',
				text: 'Why did the popularity of electric cars die off?',
				multiple: false,
				options: [
					{
						text: 'government regulations made it expensive to produce',
						value: 'government regulations made it expensive to produce',
						correct: false,
					},
					{
						text: 'Safety concerns',
						value: 'Safety concerns',
						correct: false,
					},
					{
						text: 'advancements in internal-combustion engines, and mass production of cheaper gasoline',
						value: 'advancements in internal-combustion engines, and mass production of cheaper gasoline',
						correct: true,
					},
					{
						text: 'lack of lithium reserves',
						value: 'lack of lithium reserves',
						correct: false,
					},
				],
			},
			{
				title: 'Question 4',
				text: 'What is currently the most popular electric car?',
				multiple: false,
				options: [
					{
						text: 'Nissan Leaf',
						value: 'Nissan Leaf',
						correct: false,
					},
					{
						text: 'Tesla Model S',
						value: 'Tesla Model S',
						correct: true,
					},
					{
						text: 'Tesla Model 3',
						value: 'Tesla Model 3',
						correct: false,
					},
					{
						text: 'BMW i3',
						value: 'BMW i3',
						correct: false,
					},

				],
			},
			{
				title: 'Question 5',
				text: 'When did electric cars become popular again?',
				multiple: false,
				options: [
					{
						text: 'Starting in 2008, a renaissance in electric vehicle manufacturing occurred due to advances in batteries, and the desire to reduce greenhouse-gas emissions.',
						value: 'Starting in 2008, a renaissance in electric vehicle manufacturing occurred due to advances in batteries, and the desire to reduce greenhouse-gas emissions.',
						correct: true,
					},
					{
						text: 'Starting in 1947, after world war II, the US government began to subsidize the development of electric vehicles.',
						value: 'Starting in 1947, after world war II, the US government began to subsidize the development of electric vehicles.',
						correct: false,
					},
					{
						text: 'Starting in 2019, after the creation of the company Tesla, electric cars became popular again.',
						value: 'Starting in 2019, after the creation of the company Tesla, electric cars became popular again.',
						correct: false,
					},
					{
						text: 'Starting in the late 1990, when a trade war with the middle east caused gas prices to rise',
						value: 'Starting in the late 1990, when a trade war with the middle east caused gas prices to rise',
						correct: false,
					},
				],
			}
		]
	}
}