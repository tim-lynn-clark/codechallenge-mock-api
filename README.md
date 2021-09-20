# Code Challenge: Mock RESTful API
__Mock backend for use with all code challenges requiring integration with a RESTful API__

## Use with Code Challenges
This RESTful API is to be used `AS IS` with all code challenges for which it is required. You are not to make modifications to this API. Any defects found within the data supplied by the API are intentional and are to be handled/corrected/addressed client-side. The client is the application consuming this API and that is being written by the candidate as part of a prescribed code challenge.

Once the candidate has cloned this repository, they only need to start the API server in order to begin consuming the data provided by its endpoints.

## Setup
Clone this repository to your local machine using the following command:

    git clone git@github.com:tim-lynn-clark/codechallenge-mock-api.git

Switch to the newly cloned repository:

    cd codechallenge-mock-api

Install the required node packages from NPM:

    npm install

## Starting the Server
To start the server and begin accessing the API endpoints, simply run the start command from the root of the application (repository):

    npm start

The server will start up and can be reached locally using: http://localhost:8888

## Endpoints

### Cancer Types

__HTTP Verb__: GET

__Route__: /cancer_types

__Description__: Provides a list containing the names of various cancer types. To be used as a list of cancers for display and potentially selection by an active user.

__Format__: Array of Objects

    [
        {
            "name": string,
            "link": "http://localhost:8888/cancers/[string]"
        },
        ...
    ]

### Breast Cancer

__HTTP Verb__: GET

__Route__: /cancers/breast

__Description__: Provides detailed information on Breast cancers.

__Format__: Objects

    {
        "name": string,
        "source": string,
        "overview": string,
        "treatments": [
            {
            "title": string,
            "url": string
            },
            ...
        ],
        "causes & preventions": [
            {
            "title": string,
            "url": string,
            },
            ...
        ],
        "screening": [
            {
            "title": string,
            "url": string
            },
            ...
        ]
    }

### Leukemia

__HTTP Verb__: GET

__Route__: /cancers/leukemia

__Description__: Provides detailed information on Leukemia cancers.

__Format__: Object

    {
        "name": string,
        "source": string,
        "overview": string,
        "treatments": [
            {
            "title": string,
            "url": string
            },
            ...
        ],
        "causes & preventions": [
            {
            "title": string,
            "url": string,
            },
            ...
        ],
        "screening": [
            {
            "title": string,
            "url": string
            },
            ...
        ]
    }

### Lymphoma

__HTTP Verb__: GET

__Route__: /cancers/lymphoma

__Description__: Provides detailed information on Lymphoma cancers.

__Format__: Object

    {
        "name": string,
        "source": string,
        "overview": string,
        "treatments": [
            {
            "title": string,
            "url": string
            },
            ...
        ],
        "causes & preventions": [
            {
            "title": string,
            "url": string,
            },
            ...
        ],
        "screening": [
            {
            "title": string,
            "url": string
            },
            ...
        ]
    }

### Coping with Cancer

__HTTP Verb__: GET

__Route__: /coping_with_cancer

__Description__: Provides a list of resources that provide detailed methods and additional resources for coping with cancer.

__Format__: Array of Objects

    [
        {
            "title": string,
            "url": string
        },
        ...
    ]