export const quizzes = {
  charging: {
    title: 'EV Charging',
    questions: [
      {
        title: 'Question 1', // title can be more descriptive, like the topic of the question
        text: 'What is the maximum charging rate for a Level 2 charger?',
        multiple: false, // does the question have several correct answers? if yes, checkboxes will be used. if not, radio buttons will be used.
        options: [
          {
            text: '6.6 kW',
            value: '6.6 kW', // value is a shorter version of text if text is very long
            correct: false,
          },
          {
            text: '3.3 kW',
            value: '3.3 kW',
            correct: false,
          },
          {
            text: '11 kW',
            value: '11 kW',
            correct: false,
          },
          {
            text: '7.2 kW',
            value: '7.2 kW',
            correct: true,
          },
        ],
      },
      {
        title: 'Question 2',
        text: 'What is the maximum charging rate for a Level 3 charger?',
        multiple: false,
        options: [
          {
            text: '6.6 kW',
            value: '6.6 kW',
            correct: false,
          },
          {
            text: '11 kW',
            value: '11 kW',
            correct: true,
          },
          {
            text: '7.2 kW',
            value: '7.2 kW',
            correct: false,
          },
          {
            text: '3.3 kW',
            value: '3.3 kW',
            correct: false,
          },
        ],
      },
      {
        title: 'Question 3',
        text: 'What is the maximum charging rate for a Level 1 charger?',
        multiple: false,
        options: [
          {
            text: '7.2 kW',
            value: '7.2 kW',
            correct: false,
          },
          {
            text: '3.3 kW',
            value: '3.3 kW',
            correct: true,
          },
          {
            text: '11 kW',
            value: '11 kW',
            correct: false,
          },
          {
            text: '6.6 kW',
            value: '6.6 kW',
            correct: false,
          },
        ],
      },
      {
        title: 'Question 4',
        text: 'What is the maximum charging rate for a Level 4 charger?',
        multiple: false,
        options: [
          {
            text: '11 kW',
            value: '11 kW',
            correct: false,
          },
          {
            text: '3.3 kW',
            value: '3.3 kW',
            correct: false,
          },
          {
            text: '7.2 kW',
            value: '7.2 kW',
            correct: false,
          },
          {
            text: '6.6 kW',
            value: '6.6 kW',
            correct: false,
          },
        ],
      },
    ]
  },
}
