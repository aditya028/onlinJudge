# Online Judge

[![Build Status](https://img.shields.io/travis/{username}/{repository}?style=flat-square)](https://travis-ci.org/{username}/{repository})
[![License](https://img.shields.io/github/license/{username}/{repository}?style=flat-square)](https://github.com/aditya028/onlineJudge/blob/master/LICENSE)

## YouTube Video
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/sHLP9z4lS5Q/0.jpg)](http://www.youtube.com/watch?v=sHLP9z4lS5Q)

## Description

Online Judge is a web application that allows users to solve programming problems and get instant feedback on their solutions. It provides a platform for practicing coding skills, preparing for coding interviews, and hosting coding competitions.

## Features

- User registration and authentication
- Problem submission and evaluation
- Leaderboard for tracking user progress
- Admin panel for managing problems and users

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/aditya028/onlinJudge.git
    ```

2. Run Docker command:

    ```bash
    docker-compose up --build
    ```

3. Configure the environment variables in backend:

    ```bash
    cp .env.example .env
    ```

    Update the `.env` file with your own configuration.

4. Start the application:

    ```bash
    docker compose up 
    ```

5. Open your browser and visit `http://localhost:3000` to access the application.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://github.com/{username}/{repository}/blob/master/LICENSE).
