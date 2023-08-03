# Dentist Clinic Management System - Frontend

This is the frontend part of the Dentist Clinic Management System. 
It is built using React.js, HTML, CSS, and JavaScript. 
The frontend is responsible for providing a user-friendly interface for managing the dentist clinic, including appointments, patient records, treatments, and more.

## Getting Started

To run the frontend locally, you need to have Node.js and npm (Node Package Manager) installed on your machine.

### Prerequisites

- Node.js: https://nodejs.org/
- npm: Comes bundled with Node.js

### Installation

1. Clone the repository:

```
git clone <repository-url>
cd dentist-clinic-management/frontend
```

2. Install the dependencies:

```
npm install
```

### Configuration

Before running the frontend, you may need to configure the backend API endpoint in the `src/config.js` file. Update the `API_ENDPOINT` variable with the URL of your backend server.

### Running the Development Server

To start the development server, run:

```
npm start
```

This will launch the application in your default web browser. The development server supports hot-reloading, so any changes made to the code will automatically be reflected in the browser.

### Building for Production

To build the application for production, run:

```
npm run build
```

This will create an optimized production build in the `build` folder.

## Folder Structure

The main source code of the frontend is located in the `src` folder. The structure of the `src` folder is as follows:

```
src/
  |- components/
  |   |- Header.js
  |   |- Footer.js
  |   |- ...
  |
  |- pages/
  |   |- Dashboard.js
  |   |- Appointments.js
  |   |- Patients.js
  |   |- Treatments.js
  |   |- ...
  |
  |- styles/
  |   |- main.css
  |   |- ...
  |
  |- App.js
  |- index.js
  |- config.js
  |- ...
```

- `components/`: Contains reusable UI components used across multiple pages.
- `pages/`: Contains main page components for different sections of the application.
- `styles/`: Contains CSS files for styling.
- `App.js`: The main component of the application, serving as the entry point to the React app.
- `index.js`: The entry point for React rendering.
- `config.js`: Configuration file for storing constants and configurations.

## Features

The frontend of the Dentist Clinic Management System includes the following features:

- User authentication and login/logout functionality.
- Dashboard to display an overview of appointments, patients, and treatments.
- Appointment management, including scheduling, updating, and canceling appointments.
- Patient management, including adding new patients and viewing their records.
- Treatment management, including adding new treatments and updating treatment details.

## Contributing

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.