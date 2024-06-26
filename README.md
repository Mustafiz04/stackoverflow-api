![Stackoverflow-Clone-Backend](https://socialify.git.ci/Mustafiz04/stackoverflow-api/image?font=Source%20Code%20Pro&forks=1&issues=1&language=1&owner=1&pattern=Charlie%20Brown&pulls=1&stargazers=1&theme=Dark)

As the name suggests, this project is a clone of a famous Q/A website for professional and enthusiast programmers built solely by me using a completely different stack.

## My Tech Stack (MERN)

#### Back-end

- For handling index requests: `Node.js with Express.js Framework`
- As Database: `MySQL with Sequelize`
- API tested using: `POSTMAN`

## Guidelines to setup

There are two ways to setup the project: manually or using the Dockerfile. Read below for more details:

### Manual Setup

1. Open your local CLI -

   ```
   mkdir stackoverflow-api
   cd stackoverflow-api
   ```

2. Setup the backend code -

   - Create a `.env` file and the format should be as given in `.env.example`.
   - Clone the code & install the modules-

     ```
     git clone https://github.com/Mustafiz04/stackoverflow-api.git
     cd stackoverflow-api

     npm install
     ```

   - Open your MySQL Client -

     ```
     CREATE DATABASE stack_overflow;
     ```
     NOTE: Don't forget to keep the database name same in the `.env` and here.

   - Run the index `npm start`.

3. Open a new CLI terminal and goto the root `stackoverflow-api` folder you created in the first step.

### Docker Setup

The back-end has support for Docker. So if you want to run the back-end in a container, you need do:

- Setup environment variables in `.env` file. Note when you use Docker setup and run the database in localhost (host machine), you need to setup the environment variables for use correct IP of MySQL Database. Please, read [here](https://docs.docker.com/compose/environment-variables/) and [here](https://docs.docker.com/desktop/windows/networking/) for more details.

- Build the Docker image:
  ```
  docker build -t stackoverflowapi .
  ```
- Run the container. For example, if you want to run the container in a new terminal, you can do:
  ```
  docker run -d -p 5000:5000 stackoverflowapi
  ```

The default port of api is 5000. After running the container, you can access the api by typing:

    http://localhost:5000/api/<endpoint that you request - see next section>

_Follow the steps properly (manual or Docker) and you are good to go._

## API Endpoints

You want use Postman to test the API in local machine, you need to follow the steps below:

- Get the Postman app from [here](https://www.getpostman.com/downloads/).
- Download the Postman collection file in folder "/data/postman_collection"
- Import the collection file in Postman
- **Important:** will be necessary to setup the enviroment with the "VARIABLE"=urlAPI and "INITIAL VALUE"=http://localhost:5000, for example.
- **Remember**: keep the Postman collection updated with the latest API endpoints.

#### Base Url - `{API_URL}/api`

#### Users

- `GET /auth`
- `POST /auth`
- `POST /users/:id`
- `GET /users`
- `GET /users/:id`

#### Posts

- `GET /posts`
- `GET /posts/top`
- `GET /posts/tag/:tagname`
- `GET /posts/:id`
- `POST /posts/`
- `DELETE /posts/:id`

#### Answers

- `GET /posts/answers/:id`
- `POST /posts/answers/:id`
- `DELETE /posts/answers/:id`

#### Comments

- `GET /posts/comments/:id`
- `POST /posts/comments/:id`
- `DELETE /posts/comments/:id`

#### Tags

- `GET /tags`
- `GET /tags/:tag_name`

## ER Diagram
<img src="/demo/images/ERDiagram.png"/>