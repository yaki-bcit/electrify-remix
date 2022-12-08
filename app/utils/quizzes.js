export const quizzes = {
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
}
