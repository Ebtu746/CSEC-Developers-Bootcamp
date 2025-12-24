Task Tracker App

Description:
A simple React Task Tracker application that allows users to:

Add tasks

Mark tasks as completed

Delete tasks

Toggle between Light and Dark mode

Tasks and theme preference are saved in localStorage, so your data persists after page refresh.

Features
Add new tasks with a text input

Mark tasks as completed (strikethrough style)

Delete individual tasks

Toggle Light/Dark mode with a button

Responsive layout for desktop and mobile

Technologies Used:
React.js

JavaScript (ES6)

HTML5 & CSS3

React Context API for state management

Installation & Running:
1. Clone the repository: 
git clone<your-repo-url>
2. Navigate to project directory:
cd ~/Documents/WD/CSEC-Developers/CSEC-Developers-Bootcamp/mini-pro5-tasktracker
3. Install dependencies:
npm install
4. Start the development server:
npm run dev
Open http://localhost:3000
 in your browser

Folder Structure:
src/
├── components/
│   ├── Header.jsx
│   ├── TaskInput.jsx
│   ├── TaskItem.jsx
│   └── TaskList.jsx
├── pages/
│   └── Home.jsx
├── store/
│   └── taskContext.jsx
├── styles/
│   └── global.css
└── main.jsx
