export const quizzes = {
  welcome: {
    title: 'Is an Electric Vehicle (EV)a good choice for you?',
    questions: [
      {
        title: 'Question 1',
        text: 'What would you use your car for most of the time?',
        multiple: true,
        options: [
          {
            text: 'Work or school',
            value: 'Work or school',
            correct: true,
            checked: false,
          },
          {
            text: 'Long distance travel',
            value: 'Long distance travel',
            correct: false,
            checked: false,
          },
          {
            text: 'Uber driving',
            value: 'Uber driving',
            correct: false,
            checked: false
          },
          {
            text:'Groceries and occasional activities',
            value: 'Groceries and activities',
            correct: true,
            checked: false,
          },
        ],
      },
      {
        title: 'Question 2',
        text: 'How many hours do you drive Weekly?',
        multiple: false,
        options: [
          {
            text: 'Less Than 5 hours',
            value: '5 hours',
            correct: true,
            checked: false,
          },
          {
            text:'Around 10 hours',
            value: '10 hours',
            correct: true,
            checked: false,
          },
          {
            text: 'Around 15 hours',
            value: '15 hours',
            correct: true,
            checked: false,
          },
          {
            text: 'Around 20 hours',
            value: '20 hours',
            correct: true,
            checked: false,
          },
          {
            text: 'More thank 30 hours',
            value: '30 hours',
            correct: false,
            checked: false,
          },

        ],
      },
      {
        title: 'Question 3',
        text: 'What type of road do you drive you car?',
        multiple: true,
        options: [
          {
            text: 'Paved',
            value: 'Paved',
            correct: true,
            checked: false,
          },
          {
            text: 'Mud Road',
            value: 'Mud Road',
            correct: false,
            checked: false,
          },
          {
            text: 'Dirt Road',
            value: 'Dirt Road',
            correct: false,
            checked: false,
          },
          {
            text: 'Desert',
            value: 'Desert',
            correct: false,
            checked: false,
          },
          {
            text: 'Snowy road',
            value: 'Snowy road',
            correct: true,
            checked: false,
          },

        ],
      },
      {
        title: 'Question 4',
        text: 'How many passengers do you usually take when you drive?',
        multiple: false,
        options: [
          {
            text: 'No passengers',
            value: 'No passengers',
            correct: true,
            checked: false,
          },
          {
            text: '1 -2 Passengers',
            value: '1 -2',
            correct: true,
            checked: false,
          },
          {
            text: '3-4  Passengers',
            value: '3-4',
            correct: true,
            checked: false,
          },
          {
            text: '5-6 Passengers',
            value: '5-6',
            correct: true,
            checked: false,
          },
          {
            text: 'More than 6 Passengers',
            value: 'More than 6',
            correct: false,
            checked: false,
          },
        ],
      },
    ]
  },
  charging: {
    title: 'EV Charging',
    questions: [
      {
        title: 'Question 1',
        text: 'What is the maximum charging rate for a Level 1 charger?',
        multiple: false,
        options: [
          {
            text: '12 kW',
            value: '12 kW',
            correct: false,
            checked: false,
          },
          {
            text: '2.4 kW',
            value: '2.4 kW',
            correct: true,
            checked: false,
          },
          {
            text: '50 kW',
            value: '50 kW',
            correct: false,
            checked: false
          },
          {
            text: '300 kW',
            value: '300 kW',
            correct: false,
            checked: false,
          },
        ],
      },
      {
        title: 'Question 2',
        text: 'What charging rates do different Level 3 chargers support?',
        multiple: true,
        options: [
          {
            text: '12 kW',
            value: '12 kW',
            correct: false,
            checked: false,
          },
          {
            text: '2.4 kW',
            value: '2.4 kW',
            correct: false,
            checked: false,
          },
          {
            text: '50 kW',
            value: '50 kW',
            correct: true,
            checked: false
          },
          {
            text: '300 kW',
            value: '300 kW',
            correct: true,
            checked: false,
          },
        ],
      },
      {
        title: 'Question 3',
        text: 'What outlet voltage do Level 2 chargers need?',
        multiple: false,
        options: [
          {
            text: '120 V',
            value: '120 V',
            correct: false,
            checked: false,
          },
          {
            text: '240 V',
            value: '240 V',
            correct: true,
            checked: false,
          },
          {
            text: '480 V',
            value: '480 V',
            correct: false,
            checked: false,
          },
        ],
      },
      {
        title: 'Question 4',
        text: 'Can you have a level 3 charger at home?',
        multiple: false,
        options: [
          {
            text: 'Yes',
            value: 'Yes',
            correct: false,
            checked: false,
          },
          {
            text: 'No',
            value: 'No',
            correct: true,
            checked: false,
          },
        ],
      },
    ]
  },
  safety: {
    title: 'EV Safety',
    questions: [
      {
        title: 'Question 1', // title can be more descriptive, like the topic of the question
        text: 'What type of battery is used in EV cars?',
        multiple: false, // does the question have several correct answers? if yes, checkboxes will be used. if not, radio buttons will be used.
        options: [
          {
            text: 'Carbon-zinc ',
            value: 'Carbon-zinc', // value is a shorter version of text if text is very long
            correct: false,
            checked: false,
          },
          {
            text: 'Lithium-ion',
            value: 'Lithium-ion',
            correct: true,
            checked: false,
          },
          {
            text: 'Zinc-air',
            value: 'Zinc-air',
            correct: false,
            checked: false
          },
          {
            text:'Silver-oxide',
            value: 'Silver-oxide',
            correct: false,
            checked: false,
          },
        ],
      },
      {
        title: 'Question 2',
        text: 'Lithium-ion batteries have a much lower risk of fire explosions than gasoline in conventional vehicles.',
        multiple: false,
        options: [
          {
            text:'Yes',
            value: 'Yes',
            correct: true,
            checked: false,
          },
          {
            text: 'No',
            value: 'No',
            correct: false,
            checked: false,
          
          },
        ],
      },
      {
        title: 'Question 3',
        text: 'Thermal runaway is an unstoppable chain reaction causing a fire at temperatures of _____ and above.',
        multiple: false,
        options: [
          {
            text: '30 degrees',
            value: '30-degrees',
            correct: false,
            checked: false,
          },
          {
            text: '40 degrees',
            value: '40-degrees',
            correct: false,
            checked: false,
          },
          {
            text: '50 degrees',
            value: '50-degrees',
            correct: false,
            checked: false,
          },
          {
            text: '60 degrees',
            value: '60-degrees',
            correct: true,
            checked: false,
          },
        ],
      },
      {
        title: 'Question 4',
        text: 'What are the ways to prevent and reduce the impact of thermal runaway in electric cars?',
        multiple: true,
        options: [
          {
            text: 'Cell-to-cell protection',
            value: 'Cell',
            correct: true,
            checked: false,
          },
          {
            text: 'Module-to-module protection',
            value: 'Module',
            correct: true,
            checked: false,
          },
          {
            text: 'Pack level protection',
            value: 'Pack',
            correct: true,
            checked: false,
          },
          {
            text: 'Checking by yourself',
            value: 'yourself',
            correct: false,
            checked: false,
          },

        ],
      },
    ]
  },
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
						value: '1832-Scotland',
						correct: true,
            checked: false,
					},
					{
						text: '1900 in the US',
						value: '1900',
						correct: false,
            checked: false,
					},
					{
						text: '1832 in Germany',
						value: '1832-Germany',
						correct: false,
            checked: false,
					},
					{
						text: '2000 in China',
						value: '2000',
						correct: false,
            checked: false,
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
						value: 'government',
						correct: false,
            checked: false,
					},
					{
						text: 'safety concerns',
						value: 'safety',
						correct: false,
            checked: false,
					},
					{
						text: 'advancements in internal-combustion engines, and mass production of cheaper gasoline',
						value: 'advancements',
						correct: true,
            checked: false,
					},
					{
						text: 'lack of lithium reserves',
						value: 'lack',
						correct: false,
            checked: false,
					},
				]
			},
			{
				title: 'Question 3',
				text: 'What is currently the most popular electric car?',
				multiple: false,
				options: [
					{
						text: 'Nissan Leaf',
						value: 'Nissan-Leaf',
						correct: false,
            checked: false,
					},
					{
						text: 'Tesla Model S',
						value: 'Tesla-Model-S',
						correct: true,
            checked: false,
					},
					{
						text: 'Tesla Model 3',
						value: 'Tesla-Model-3',
						correct: false,
            checked: false,
					},
					{
						text: 'BMW i3',
						value: 'BMW-i3',
						correct: false,
            checked: false,
					},

				],
			},
			{
				title: 'Question 4',
				text: 'When did electric cars become popular again?',
				multiple: false,
				options: [
					{
						text: 'Starting in 2008, a renaissance in electric vehicle manufacturing occurred due to advances in batteries, and the desire to reduce greenhouse-gas emissions.',
						value: '2008',
						correct: true,
            checked: false,
					},
					{
						text: 'Starting in 1947, after world war II, the US government began to subsidize the development of electric vehicles.',
						value: '1947',
						correct: false,
            checked: false,
					},
					{
						text: 'Starting in 2019, after the creation of the company Tesla, electric cars became popular again.',
						value: '2019',
						correct: false,
            checked: false,
					},
					{
						text: 'Starting in the late 1990, when a trade war with the middle east caused gas prices to rise',
						value: '1990',
						correct: false,
            checked: false,
					},
				],
			}
		]
	},
  savingGas: {
    title: `Saving Gas`,
    questions: [
      {
        title: 'Question 1',
        text: "Electric vehicles are cheaper to fuel",
        multiple: false,
        options: [
          {
            text: "True",
            value: "True",
            correct: true,
            checked: false
          }, 
          {
            text: "False",
            value: "False",
            correct: false,
            checked: false
          }
        ]
      },
      {
        title: 'Question 2',
        text: 'All EVs cost the same to fuel',
        multiple: false,
        options: [
          {
            text: "True",
            value: "True",
            correct: false,
            checked: false
          }, 
          {
            text: "False",
            value: "False",
            correct: true,
            checked: false
          }
        ]
      },
      {
        title: 'Question 3',
        text: 'Kia EV6 cost more then 1000 dollar less then a Honda Accord Sport over 1500 miles',
        multiple: false,
        options: [
          {
            text: "True",
            value: "True",
            correct: true,
            checked: false
          }, 
          {
            text: "False",
            value: "False",
            correct: false,
            checked: false
          }
        ]
      },
      {
        title: 'Question 4',
        text: 'Where is it cheaper to charge your EV?',
        multiple: false,
        options: [
          {
            text: "Home",
            value: "Home",
            correct: true,
            checked: false
          }, 
          {
            text: "Charging stations",
            value: "Charging-stations",
            correct: false,
            checked: false
          }
        ]
      },
      {
        title: 'Question 5',
        text: 'When should you plug your car at home to save money on electricity?',
        multiple: false,
        options: [
          {
            text: "Day time",
            value: "Day",
            correct: false,
            checked: false
          }, 
          {
            text: "Night time",
            value: "Night",
            correct: true,
            checked: false
          }
        ]
      }
    ]
  }
}
