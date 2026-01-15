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

## Development

To add new devices or update data, modify the JSON files within `public/api/v1/`.
Changes pushed to the `main` branch are automatically deployed.
