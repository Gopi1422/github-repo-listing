# GitHub Repositories Listing

There are 2 parts to the assignment: 

* Frontend 
  * Angular single-page application (SPA) that takes a GitHub username as input and displays the public Github repositories belonging to the user. 
  * If the username is invalid, should show an error page indicating an invalid GitHub username.
* Backend
  * REST API service (NodeJS)
  * Each endpoint has to internally call Github’s APIs to fetch the data required for the frontend application to work.
  
## Run Locally

1. Clone the project

```bash
  git clone https://github.com/Gopi1422/github-repo-listing.git
```

2. Go to the project directory

```bash
  cd github-repo-listing
```

3. Install dependencies

> Install Server dependencies
```bash
  cd backend/
  npm install
```

> Install Client dependencies
```bash
  cd frontend/ 
  npm install –g @angular/cli
  npm install
```

4. Start the server

```bash
  cd backend/
  npm start
```

5. Start the client

```bash
  cd frontend/
  ng serve
```

## Screenshots

Home Page
![Output-1](https://github.com/Gopi1422/github-repo-listing/blob/43ba9e2e902575d63e5089384c71db70de02d333/screenshots/1.png)

Search Valid GitHub Username
![Output-2](https://github.com/Gopi1422/github-repo-listing/blob/43ba9e2e902575d63e5089384c71db70de02d333/screenshots/2.png)
![Output-3](https://github.com/Gopi1422/github-repo-listing/blob/43ba9e2e902575d63e5089384c71db70de02d333/screenshots/3.png)
![Output-4](https://github.com/Gopi1422/github-repo-listing/blob/43ba9e2e902575d63e5089384c71db70de02d333/screenshots/4.png)
![Output-5](https://github.com/Gopi1422/github-repo-listing/blob/43ba9e2e902575d63e5089384c71db70de02d333/screenshots/5.png)

Search Invalid GitHub Username
![Output-6](https://github.com/Gopi1422/github-repo-listing/blob/43ba9e2e902575d63e5089384c71db70de02d333/screenshots/6.png)

GitHub API Limit Exceed
![Output-7](https://github.com/Gopi1422/github-repo-listing/blob/43ba9e2e902575d63e5089384c71db70de02d333/screenshots/7.png)

