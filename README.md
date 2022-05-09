# LINE TOWN election

<!-- ABOUT THE PROJECT -->
## About The Project

This project is the Solution Engineer Assignment for the full-stack engineer - see the [spec.md](spec.md) file for details

### Built With

* [Vite.js](https://vitejs.dev/)
* [Preact.js](https://preactjs.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [Wouter](https://github.com/molefrog/wouter)
* [axios](https://axios-http.com/)
* [WebSocket](https://github.com/theturtle32/WebSocket-Node)
* [FortAwesome](https://fortawesome.com/)
* [Tailwind CSS](https://tailwindcss.com/)
* [daisyUI](https://daisyui.com/)
* [Vitest](https://vitest.dev/)
* [React Testing Library](https://testing-library.com/)

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

Make sure that you have Node.js v16 and npm v8 or above installed.

### Config file
Create .env at root, i.e.

```
VITE__BACKEND_BASE_URL=http://localhost:8000
VITE__SOCKET_BASE_URL=ws://localhost:8000/ws
```

### Browser Support

The default build targets browsers that support both native ESM via script tags and native ESM dynamic import.

### Installation

Install dependency packages:
```sh
# using yarn
yarn

# using npm
npm install
```

### Run the dev server

```sh
# using yarn
yarn dev

# using npm
npm run dev
```
dev server running at: http://localhost:3000/

### Scripts

| Script        | Description                      |
| ------------- | -------------------------------- |
| yarn dev      | Run dev server                   |
| yarn build    | Generates production build       |
| yarn preview  | Locally preview production build |
| yarn prepare  | It's just to configure husky     |
| yarn coverage | An integrated coverage reporter  |
| yarn test     | Run test                         |
| yarn test:ui  | Run test with UI                 |

### Run via docker
Let’s run the server automatically via docker-compose:

```sh
docker-compose -p local -f ./docker-compose.yml up -d
```

Or run manually by build an image called "lte-frontend":

```sh
docker build -t lte-frontend:0.1.0 .
```

Now that this image is built, we can start a container with the following command, which will serve our app on port 3000.

```sh
docker run --rm -it -p 3000:8080 --name lte-frontend lte-frontend:0.1.0 
```

<!-- USAGE -->
## Usage

### Open Election
```sh
curl -X POST {endpoint}/api/election/toggle \
  -H 'Content-Type: application/json' \
  -d '{"enable":true}'
```

### Close Election
```sh
curl -X POST {endpoint}/api/election/toggle \
  -H 'Content-Type: application/json' \
  -d '{"enable":false}'
```

<!-- CONTACT -->
## Contact

* **Tanawat Hongthai** - *tana.h@kkumail.com* - [Lazts](https://lazts.com)

<!-- LICENSE -->
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
