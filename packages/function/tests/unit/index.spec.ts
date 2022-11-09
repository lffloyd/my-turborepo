import { APIGatewayProxyEvent } from "aws-lambda";
import { HttpResponse } from "utils";
import { handler } from "../../src/index";

describe('Unit tests for "function" package', () => {
  test("handler call returns expected success response", async () => {
    const expected: HttpResponse = {
      statusCode: 200,
      message: '{"text":"Message","body":{"result":123,"size":256}}',
      timestamp: expect.any(Number),
    };
    const result = await handler({
      something: "someone",
    } as unknown as APIGatewayProxyEvent);
    expect(result).toStrictEqual(expected);
  });

  test("handler call returns expected error response as event object is empty", async () => {
    const result = await handler({} as APIGatewayProxyEvent);
    expect(result.statusCode).toBe(500);
    expect(result.message).toMatch('"error":"Empty event received!"');
  });
});
