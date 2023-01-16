# GitHub Repositories Listing

There are 2 parts to the project: 

* Frontend 
  * Angular single-page application (SPA) that takes a GitHub username as input and displays the public Github repositories belonging to the user. 
  * If the username is invalid, should show an error page indicating an invalid GitHub username.
* Backend
  * REST API service (NodeJS)
  * Each endpoint has to internally call Github’s APIs to fetch the data required for the frontend application to work.
  
**Deployed Project Link:** https://busy-lime-rooster-fez.cyclic.app


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
  npm start
```

5. Start the client

```bash
  cd frontend/
  ng serve
```

## Screenshots

Home Page
![Output-1](https://github.com/Gopi1422/github-repo-listing/blob/c1e1154baebcae62a2002b3334ca2dc48dcfd8bf/screenshots/1.png)

Search Valid GitHub Username
![Output-2](https://github.com/Gopi1422/github-repo-listing/blob/c1e1154baebcae62a2002b3334ca2dc48dcfd8bf/screenshots/2.png)
![Output-3](https://github.com/Gopi1422/github-repo-listing/blob/c1e1154baebcae62a2002b3334ca2dc48dcfd8bf/screenshots/3.png)
![Output-4](https://github.com/Gopi1422/github-repo-listing/blob/a993383acf6b8f16813ce181d9887e4714b5a9c3/screenshots/4.png)
![Output-5](https://github.com/Gopi1422/github-repo-listing/blob/c1e1154baebcae62a2002b3334ca2dc48dcfd8bf/screenshots/5.png)

Search Invalid GitHub Username
![Output-6](https://github.com/Gopi1422/github-repo-listing/blob/c1e1154baebcae62a2002b3334ca2dc48dcfd8bf/screenshots/6.png)

GitHub API Limit Exceed
![Output-7](https://github.com/Gopi1422/github-repo-listing/blob/43ba9e2e902575d63e5089384c71db70de02d333/screenshots/7.png)

Angular Test Cases
![Output-8](https://github.com/Gopi1422/github-repo-listing/blob/7716e0edf22b7e50792a6fafc8ae66bf33b35c80/screenshots/8.png)

NodeJS Test Cases
![Output-9](https://github.com/Gopi1422/github-repo-listing/blob/7716e0edf22b7e50792a6fafc8ae66bf33b35c80/screenshots/9.png)


