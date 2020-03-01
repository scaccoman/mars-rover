# Mars Rover API

## Configuration

- Built using the [Serverless](https://serverless.com/) framework
- Deployed into [AWS Lambda](https://aws.amazon.com/api-gateway/)
- Surfaced via the [AWS API Gateway](https://aws.amazon.com/api-gateway/)

## Context

This API is for management of Mars Rovers.

## Endpoints Summary

| Methods | Endpoint                    | Summary                           |
| ------- | --------------------------- | --------------------------------- |
| POST    | /calculate-position         | Calculate position of Mars Rovers |

## Endpoint Requests & Responses

### POST - /calculate-position

This endpoint calculates the position of Mars Rovers. It returns a list of coordinates and the cardinal orientation.

```
// Example request:

{
  "plateau": {
    "gridSize": [ 5, 5 ]
  },
  "rovers": [
    {
      "position": "1 2 N",
      "instructions": "LMLMLMLMM"
    },
    { 
      "position": "3 3 E",
      "instructions": "MMRMMRMRRM"
    }
  ]
}
```

```
// Example response:

{
    "id": "67531bd0-5bcb-11ea-87f2-1f6031af5bc7",
    "rovers": [
        {
            "roverId": "67531bd1-5bcb-11ea-87f2-1f6031af5bc7",
            "position": "1 3 N"
        },
        {
            "roverId": "675342e0-5bcb-11ea-87f2-1f6031af5bc7",
            "position": "5 1 E"
        }
    ]
}
```

## Installation & Running Locally

```
npm install
```

Navigate into the root of the project and run 'npm install' to install all dependencies

```
npm run dev
```

Then run 'npm run dev' which will deploy the endpoint on your localhost on port 3000.
You will now be able to test the API on http://localhost:3000

## Testing

```
npm run test
```

The 'npm run test' command will run all unit tests within the spec/unit folder showing which tests passed or failed.
This command will not display the coverage percentage

```
npm run cover
```

The 'npm run cover' command will run all unit tests within the spec/unit folder and display the coverage percentage.

```
npm run unit-test-coverage
```

The 'npm run unit-test-coverage' command will run all unit tests within the spec/unit folder, displaying which tests passed/failed and the total coverage. Additionally, an error will be thrown if the threshold coverage is not met for any tests. The threshold can be changed within the package.json file on the 'check-coverage' command.