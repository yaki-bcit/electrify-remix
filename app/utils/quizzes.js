export const quizzes = {
  openning: {
    title: 'Is an Electric Vehicle (EV)a good choice for you?',
    questions: [
      {
        title: 'Question 1', // title can be more descriptive, like the topic of the question
        text: 'what would you use your car for?',
        multiple: true, // does the question have several correct answers? if yes, checkboxes will be used. if not, radio buttons will be used.
        options: [
          {
            text: 'Work or school',
            value: 'Work or school', // value is a shorter version of text if text is very long
            correct: true,
            checked: false,
          },
          {
            text: 'Long distance travel',
            value: 'Long distance travel',
            correct: true,
            checked: false,
          },
          {
            text: 'Uber driving',
            value: 'Uber driving',
            correct: true,
            checked: false
          },
          {
            text:'Groceries and Activityes',
            value: 'Groceries and Activityes',
            correct: true,
            checked: false,
          },
          {
            text:'Others',
            value: 'Others',
            correct: true,
            checked: false,
          },
        ],
      },
      {
        title: 'Question 2',
        text: 'Have you ever used a Electric Car?',
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
            correct: true,
            checked: false,
          
          },
        ],
      },
      {
        title: 'Question 3',
        text: 'How many hours do you drive Weekly?',
        multiple: false,
        options: [
          {
            text: 'Less Than 5 hours',
            value: 'Less Than 5 hours',
            correct: false,
            checked: false,
          },
          {
            Text:'Around 10 hours',
            value: 'Around 10 hours',
            correct: false,
            checked: false,
          },
          {
            text: 'Around 15 hours',
            value: 'Around 15 hours',
            correct: false,
            checked: false,
          },
          {
            text: 'Around 20 hours',
            value: 'Around 20 hours',
            correct: true,
            checked: false,
          },
          {
            text: 'More thank 30 hours',
            value: 'More thank 30 hours',
            correct: true,
            checked: false,
          },

        ],
      },
      {
        title: 'Question 4',
        text: 'What type of road do you drive you car?',
        multiple: true,
        options: [
          {
            text: 'Pavement',
            value: 'Pavement',
            correct: true,
            checked: false,
          },
          {
            text: 'Mud Road',
            value: 'Mud Road',
            correct: true,
            checked: false,
          },
          {
            text: 'Dirt Road',
            value: 'Dirt Road',
            correct: true,
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
        multiple: true,
        options: [
          {
            text: 'No passengers',
            value: 'No passengers',
            correct: true,
            checked: false,
          },
          {
            text: '1 -2  Passengers',
            value: '1 -2  Passengers',
            correct: true,
            checked: false,
          },
          {
            text: '3-4  Passengers',
            value: '3-4  Passengers',
            correct: true,
            checked: false,
          },
          {
            text: '5-6 Passengers',
            value: '5-6 Passengers',
            correct: false,
            checked: false,
          },
          {
            text: 'More than 6 Passengers',
            value: 'More than 6 Passengers',
            correct: true,
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
        title: 'Question 1', // title can be more descriptive, like the topic of the question
        text: 'What is the maximum charging rate for a Level 1 charger?',
        multiple: false, // does the question have several correct answers? if yes, checkboxes will be used. if not, radio buttons will be used.
        options: [
          {
            text: '12 kW',
            value: '12 kW', // value is a shorter version of text if text is very long
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
            text: 'Carbon Zinc Batteries ',
            value: 'Carbon Zinc Batteries', // value is a shorter version of text if text is very long
            correct: false,
            checked: false,
          },
          {
            text: 'Lithium - ion battery',
            value: 'Lithium - ion battery',
            correct: true,
            checked: false,
          },
          {
            text: 'Zinc Air Batteries',
            value: 'Zinc Air Batteries',
            correct: false,
            checked: false
          },
          {
            text:'Silver Oxide Batteries',
            value: 'Silver Oxide Batteries',
            correct: false,
            checked: false,
          },
        ],
      },
      {
        title: 'Question 2',
        text: 'lithium - ion batteries have a much lower risk of fire explosions than gasoline in conventional vehicles.',
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
        text: 'Thermal runaway is an unstoppable chain reaction causing a fire at temperatures of _____ and above',
        multiple: false,
        options: [
          {
            text: '30 degree',
            value: '30 degree',
            correct: false,
            checked: false,
          },
          {
            Text:'40 degree',
            value: '40 degree',
            correct: false,
            checked: false,
          },
          {
            text: '50 degree',
            value: '50 degree',
            correct: false,
            checked: false,
          },
          {
            text: '60 degree',
            value: '60 degree',
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
            value: 'Cell-to-cell protection',
            correct: true,
            checked: false,
          },
          {
            text: 'Module-to-module protection',
            value: 'Module-to-module protection',
            correct: true,
            checked: false,
          },
          {
            text: 'Pack level protection',
            value: 'Pack level protection',
            correct: true,
            checked: false,
          },
          {
            text: 'Checking by yourself',
            value: 'Checking by yourself',
            correct: false,
            checked: false,
          },

        ],
      },
    ]
  },
}
