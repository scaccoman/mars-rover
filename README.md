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
  "rovers": [
    {
      "id": "5e02c719-de22-4458-a521-3653b686f550",
      "movementId": "f8b31b77-71ea-4d20-885f-8d2f06fb6244",
      "position": "1 3 N"
      "errors": []
    },
    {
      "id": "b1f2af44-8d80-4031-86d8-f48968e44250",
      "movementId": "afc151bc-a59b-4780-9770-8d73657609dc",
      "position": "5 1 E"
      "errors": []
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