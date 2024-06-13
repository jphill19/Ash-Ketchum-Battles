# Pokémon Search API

This project provides an API to search for Pokémon and check if Ash Ketchum has battled them in the Pokémon series. The project uses Express.js, the PokéAPI, and OpenAI's ChatGPT for fetching Pokémon data and answering user queries.

Checkout the live session here: 
[Checkout the live session here](https://ashbattles.com)

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features

- Fetches data from the PokéAPI.
- Checks if a Pokémon is part of the Hisui or Gen 9 region.
- Uses OpenAI's ChatGPT to answer if Ash has battled the specified Pokémon.
- Autocompletes Pokémon names for search suggestions.
- Provides details to Ash Battle History
- Site is resizable to adjust to different forms of media
  

## Prerequisites

- Node.js and npm installed.
- An OpenAI API key.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pokemon-search-api.git


2. Install the dependencies:
   ```bash
    npm install

3. Create a .env file in the root directory and add your OpenAI API key:
 ```
   OPENAI_API_KEY=your-openai-api-key

```


## Usage
Start the server:

  ```bash
  npm start
```
## Environment-Variables
Create a .env file in the root directory with the following content:
```
  OPENAI_API_KEY=your-openai-api-key

```
## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.


License
This project is licensed under the MIT License.
