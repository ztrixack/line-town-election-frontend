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
- Uses Stomp and WebSocket to make full-duplex communication between the server and the client.

<!-- ROADMAP -->
## Roadmap

- [ ] Setup Project
  - [*] Initial Preact + TypeScript by Vite.js
  - [*] Install & config code verification dependency
  - [*] Install project dependency
  - [ ] Install CSS/style framework dependency
  - [ ] Setup project folder structure
  - [ ] Review project

- [ ] Features/Mockup View
  - [ ] Create Candidate list layout
  - [ ] Create Candidate card with mockup data
  - [ ] Create Vote and Already voted card
  - [ ] Review the Mockup View

- [ ] Features/RESTful API
  - [ ] Create GET Candidates API Calling
  - [ ] Create Vote Candidate and Check Vote API Calling
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

