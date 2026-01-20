# Apple Specs API

This repository hosts a static API for Apple device specifications.

## API Usage

The API is served via GitHub Pages.

**Base URL:** `https://olehhrechyn.github.io/apple-specs/`

### Endpoints

- **Get All Devices (v1)**
  - URL: `/api/v1/devices.json`
  - Example: `https://olehhrechyn.github.io/apple-specs/api/v1/devices.json`

## Project Structure

- `public/`: Contains the files served on the website.
  - `api/v1/`: API version 1 data.
- `.github/workflows/`: CI/CD configurations.

## Running Locally

To preview the landing page and test the API locally, you need to run a local web server. Opening `index.html` directly in the browser will result in errors due to CORS security policies.

You can use Python's built-in server:

```bash
cd public
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

## Development

To add new devices or update data, modify the JSON files within `public/api/v1/`.
Changes pushed to the `main` branch are automatically deployed.
