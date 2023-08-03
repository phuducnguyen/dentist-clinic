# Dentist Clinic Management System - Backend

This is the backend part of the Dentist Clinic Management System. It is built using Node.js and Express.js. The backend is responsible for handling API requests from the frontend and interacting with the database to manage the dentist clinic, including appointments, patient records, treatments, and more.

## Getting Started

To run the backend locally, you need to have Node.js and npm (Node Package Manager) installed on your machine.

### Prerequisites

- Node.js: https://nodejs.org/
- npm: Comes bundled with Node.js

### Installation

1. Clone the repository:

```
git clone <repository-url>
cd dentist-clinic-management/backend
```

2. Install the dependencies:

```
npm install
```

### Configuration

Before running the backend, you may need to configure the database connection and other settings in the `.env` file. You can find a sample `.env.example` file that you can rename to `.env` and modify accordingly.

### Running the Server

To start the backend server, run:

```
npm start
```

The server will start running at the specified port in the `.env` file or at the default port `3000`.

## Folder Structure

The main source code of the backend is located in the `src` folder. The structure of the `src` folder is as follows:

```
src/
  |- controllers/
  |   |- appointments.js
  |   |- patients.js
  |   |- treatments.js
  |   |- ...
  |
  |- models/
  |   |- appointment.js
  |   |- patient.js
  |   |- treatment.js
  |   |- ...
  |
  |- routes/
  |   |- appointments.js
  |   |- patients.js
  |   |- treatments.js
  |   |- ...
  |
  |- index.js
  |- config.js
  |- ...
```

- `controllers/`: Contains the controller functions that handle the logic for each route.
- `models/`: Contains the Mongoose models for each entity in the database.
- `routes/`: Contains the route definitions for each endpoint.
- `index.js`: The entry point for the backend server.
- `config.js`: Configuration file for storing constants and configurations.

## Database

The backend uses MongoDB as the database. You need to have MongoDB installed and running locally or provide the connection string in the `.env` file.

## API Endpoints

The backend provides the following API endpoints:

- `/api/appointments`: Endpoints for managing appointments.
- `/api/patients`: Endpoints for managing patients.
- `/api/treatments`: Endpoints for managing treatments.

## Contributing

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.