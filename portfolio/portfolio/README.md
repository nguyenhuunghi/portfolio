# Portfolio Project

## Overview
This project is a portfolio website that includes a contact form for users to reach out. The contact form submission is handled through an API that validates and sanitizes input, checks for rate limiting, and sends emails using a dedicated email service.

## File Structure
```
portfolio
├── src
│   ├── app
│   │   └── api
│   │       └── contact
│   │           └── route.ts
│   ├── lib
│   │   ├── emailService.ts
│   │   ├── models
│   │   │   └── EmailLog.ts
│   │   ├── mongodb.ts
│   │   └── util.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Key Files

- **src/app/api/contact/route.ts**: Handles the contact form submission, including input validation, sanitization, rate limiting, and email sending.
  
- **src/lib/emailService.ts**: Implements the email service used for sending emails and verifying connections.

- **src/lib/models/EmailLog.ts**: Defines the EmailLog model for logging email sending attempts, including their status and error messages.

- **src/lib/mongodb.ts**: Contains the logic for connecting to the MongoDB database.

- **src/lib/util.ts**: Contains utility functions for email validation, input sanitization, and retrieving client information.

## Installation
To get started with this project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd portfolio
npm install
```

## Usage
To run the project, use the following command:

```bash
npm run dev
```

This will start the development server, and you can access the portfolio at `http://localhost:3000`.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.