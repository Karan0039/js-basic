# Mini Project: URL Shortener in Express.js

## Objective

Build a URL shortening service using Express.js, where users can convert long URLs into short, unique links, use the short URL to redirect to the original URL, and implement Redis caching to improve performance.

---

## Project Overview

The goal of this project is to implement a basic **URL Shortener**. You will be able to:

1. Submit a long URL and receive a shortened version of it.
2. Use the short URL to redirect to the original long URL.
3. Maintain a database where both the original and short URLs are stored.
4. Use Redis to cache the short URL lookups for quick access.

---

## Features

1. **Shorten URL**:

   - Users should be able to input a long URL.
   - The system will generate a shortened URL that is unique.
   - The shortened URL will be returned to the user.

2. **Redirect from Short URL**:

   - When users visit the shortened URL, they should be redirected to the original long URL.

3. **Database Integration**:

   - Store the original and shortened URLs in a database.

4. **Redis Caching**:
   - Implement Redis to cache frequently accessed short URLs.
   - Improve performance by avoiding frequent database lookups.

---

## API Endpoints

### 1. Shorten URL

- **Method**: `POST`
- **Endpoint**: `/api/url/shorten`
- **Request Body**:

  - `originalUrl` (string): The original long URL the user wants to shorten.

- **Expected Response**:
  - **Success** (HTTP 201 Created):
    ```json
    {
      "shortUrl": "http://localhost:5000/abc123",
      "originalUrl": "http://www.example.com",
      "urlCode": "abc123"
    }
    ```
  - **Error** (HTTP 400 Bad Request):
    ```json
    {
      "error": "Invalid URL"
    }
    ```

### 2. Redirect to Original URL

- **Method**: `GET`
- **Endpoint**: `/:urlCode`
- **Path Parameter**:

  - `urlCode` (string): The unique code representing the shortened URL.

- **Expected Response**:
  - **Success** (HTTP 301 Moved Permanently):
    - **Redirects** to the original URL. (res.redirect)
  - **Error** (HTTP 404 Not Found):
    ```json
    {
      "error": "URL not found"
    }
    ```

---

## Error Handling

- **Invalid URL Submission**:
  - If a user submits a malformed or invalid URL, respond with a `400 Bad Request` and an error message.
- **Short URL Not Found**:
  - If a user tries to access a short URL that doesn't exist in the database or cache, return a `404 Not Found` error.

---

## Suggested Database Fields

- **originalUrl**: The original long URL submitted by the user.
- **shortUrl**: The complete short URL, including the base URL and the unique code.
- **urlCode**: A unique code used to identify the short URL.
- **createdAt**: The date when the URL was shortened.

---

## Task: Implement Redis Caching

### Objective

Integrate **Redis** to store short URLs temporarily in memory, reducing database queries and improving performance for frequently accessed URLs.

### Steps to Implement Redis

1. **Set Up Redis**:

   - Install Redis on your local machine or use a Redis cloud service.
   - Install the required Redis package for Node.js (`redis`).
   - Connect your Express.js application to Redis.

2. **Caching Logic**:

   - **Short URL Lookup**:
     - When a user tries to access a short URL (`/:urlCode`), first check Redis if the URL is cached.
     - If the short URL is found in Redis, use the cached value to redirect the user.
     - If not found, query the database for the original URL, redirect the user, and cache the result in Redis for future requests.

3. **Expire Cached Data**:

   - Set an expiration time for cached short URLs (e.g., 24 hours). This ensures that the cache remains fresh and doesn't take up unnecessary memory for too long.

4. **Basic Redis Workflow**:
   - **Check Cache**: On URL lookup (`GET /:urlCode`), first check if the short URL is in Redis.
   - **Return Cached Result**: If found in Redis, return the cached URL and redirect the user.
   - **Fetch and Cache**: If not found, fetch the original URL from the database, redirect the user, and store the result in Redis for future access.

---

## Bonus Tasks (Optional)

1. **URL Expiration**:

   - Add an expiration feature to remove short URLs from the database after a specific duration (e.g., 30 days).

2. **Custom URL Codes**:
   - Allow users to specify their own custom URL codes (e.g., `http://localhost:5000/mycustomcode`).
