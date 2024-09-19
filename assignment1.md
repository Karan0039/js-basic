# Assignment: Basic Express App

**Objective:**

- Create a simple Express application.
- Use multiple GET and POST routes.\*\*
- Practice sending responses and handling data in the request body.

**Instructions:**

1.  **Create an Express App:**
    - Set up a basic Express application.
    - Ensure the app listens on port `3000`.

**Routes:**

1. **GET Route:**
   - Create a GET route at the path `/hello` that responds with the message: `"Hello, World!"`.
2. **POST Route:**

   - Create a POST route at the path `/submit` that accepts a JSON object with a name field in the request body and responds with: "`Hello, [name]!`".

3. **GET Route with Static Data:**

   - Create a GET route at the path `/about` that returns a JSON object containing some static information like the app name and version (e.g., `{ "appName": "My Express App", "version": "1.0.0" }`).

4. **POST Route with JSON Response:**
   - Create a POST route at `/feedback` that accepts a JSON object with a message field from the request body and responds with:

```bash
    {
        "status": "Success",
        "message": "Feedback received: [message]"
    }
```

5. **Handling Empty Fields:**

   - For the `/submit` POST route, if the user does not provide a name, respond with a status code of `400` (Bad Request) and the message: `"Name is required"`.
   - For the `/feedback` POST route, if the message field is missing or empty, respond with a status code of `400` and the message: `"Feedback message is required"`.

6. **Bonus Task:**
   - Add a `/status` route that responds with a simple message `"Server is running"` in JSON format, with a timestamp of the current time (hint: use `new Date()`).

**Example Input and Output:**

- **GET** `/hello`:
  - Response: "Hello, World!"
- **POST** `/submit`:

  - Request body: `{ "name": "Alice" }`
  - Response: `"Hello, Alice!"`
  - If the request body is empty, response: `"Name is required"`, status code `400`.

- **GET** `/about`:
  - **Response:**

```bash
    {
    	"appName": "My Express App",
    	"version": "1.0.0"
    }
```

- **POST** `/feedback`:
  - **Request body:** `{ "message": "Great app!" }`
  - If the request body is empty, response: `"Feedback message is required",` status code `400`.
  - **Response:**

```bash

    {
    	"status": "Success",
    	"message": "Feedback received: Great app!"
    }

```

- **GET** `/status`:
  - **Response:**

```bash

    {
	    "message": "Server is running",
	    "timestamp": "2024-09-19T12:00:00Z"
    }

```

**Submission:**
Share a GitHub repository link.
