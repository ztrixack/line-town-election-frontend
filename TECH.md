# LINE TOWN election

Welcome to LINE Town. Hi, you must be the new solution engineer TH-HQ sent to
help us. You are in one of the meaningful events in the town. We are about to have a
new mayor! Previously, we handled this event manually, but this time our population
has increased significantly, and also, there are a lot of candidates, as never
happened before. We know some technologies can help, so that's why you come
here to help us figure it out.

After you and LINE Town discussed, You were assigned to build a web application
for citizens (users) to vote for their new mayor. Coming to the first page, it will show
all the candidates. Users can browse and learn about their interested candidates.
And when the time comes, LINE Town's secretariat will open the vote via the new
system. Then, citizens can vote for their choice, a single one and only. Everyone can
see points going to each candidate during the vote in real-time. LINE Town's
secretariat will close the vote following the planned schedule (on their clock) via the
same system. Nobody can submit from now on. Vote's result will be summarized and
replaced on the current vote page. At that moment, all citizens will know who be the
new mayor of LINE town. By having the new system, this chaotic situation will be in
control and make everyone in town happy.

However, this job has three different roles depending on which you were assigned at
first from the TH-HQ. Each one has its own requirements. Therefore, these are the
detailed requirements if you are;

## A solution full-stack engineer

You are the one who mainly focuses on solving the problem without boundaries of
which part you are working on.

1. Implement a page showing the candidate list, voting, and seeing the result.
2. Retrieve and send data through your implemented API.
3. We will allow citizens to vote right on the page when the vote is opened.
4. Implement a voting mechanism, and the vote can be opened or closed by API.
5. Voters can not vote again. We must check their identity by citizen ID both on the
client and the API.
6. The number of votes can be seen in real-time for each candidate on the page.
7. Handle large traffic after opening the vote. You have to make your system
support throughput at least ~100 RPS.
8. When the vote is closed, no one can vote. The current page will calculate the
score from the server-side and sum up who is the new mayor.
9. Unit tests are required both on the front end and the back end.

<!-- ARCHITECTURE -->
## Architecture

The frontend architecture for LINE TOWN election project
- Written frontend in Preact.JS (TypeScript)
- Uses ESLint and Prettier to verify code 
- Uses Husky and Lint-staged to ensure the code always follows ruleset
- Uses Axios to make http requests
- Uses Stomp and WebSocket to make full-duplex communication between the server and the client
- Uses Tailwind.css to develop UI component and FontAwesome for icons

<!-- FOLDER STRUCTURE -->
declarations                // the type declaration files for all of the standardized built-in APIs available in JavaScript runtimes. 
src
├── api                     // api
├── assets                  // static resources and CSS style, which will be packaged and optimized
│   ├── icons               // icon files e.g., ico, png, webp 
│   ├── images              // image files e.g., png, jpg, webp 
│   └── styles              // global CSS style
│   └── svgs                // vector image
├── common                  // public logic code encapsulation
│   ├── config              // configuration file directory
│   ├── hooks               // custom hooks
│   ├── interfaces          // type or interfaces
│   ├── lib                 // third party libraries are usually prevented here, such as jweixin js、jsBridge. js
│   └── providers           // context providers
├── containers              // core UI components
│   ├── components          // global components, divided into business components or UI components
│   ├── layouts             // templates. Different templates can be configured for different routes
│   ├── pages               // page storage location
│   │   └── home            
│   │       └── components  // components at page level
│   └── routes              // route configuration
├── models                  // models type
├── utils                   // tool method
├── app.tsx                 // add the global management
└── main.tsx                // root project

<!-- ROADMAP -->
## Roadmap

- [*] Setup Project
  - [*] Initial Preact + TypeScript by Vite.js
  - [*] Install & config code verification dependency
  - [*] Install project dependency
  - [*] Install CSS/style framework dependency
  - [*] Setup project folder structure
  - [*] Review project

- [*] Features/Mockup View
  - [*] Create election layout and mockup candidate list
  - [*] Create Candidate card with mockup data
  - [*] Add vitest for unit test
  - [*] Create Vote and Already voted card
  - [*] Review the Mockup View

- [ ] Features/RESTful API
  - [*] Create GET Candidates API
  - [ ] Create Vote Candidate and Check Vote API
  - [ ] Create Election actions API 
  - [ ] Review the RESTful API

- [ ] Features/Web Socket
  - [ ] Create Web Socket stream for real-time vote count
  - [ ] Review the Web Socket

- [ ] Features/Logic
  - [ ] Add Election state and process flow
  - [ ] Check the identitiy ID by THAI ID
  - [ ] Add vote condition
  - [ ] Check and manage error and fail condition
  - [ ] Review the Business Logic

- [ ] Features/Integration
  - [ ] Complete the system to connect backend
  - [ ] Mockup token from identitiy ID
  - [ ] Create Dockerfile and docker-compose
  - [ ] Review the Integration

