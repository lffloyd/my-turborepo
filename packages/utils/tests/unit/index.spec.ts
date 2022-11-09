import { HttpResponse, ResponseCreator } from "../../src";

describe('Unit tests for "utils" package', () => {
  test("send method returns object composed of statusCode and message", () => {
    const result = ResponseCreator.send(200, { singer: "Someone" });
    const expected: HttpResponse = {
      statusCode: 200,
      message: '{"singer":"Someone"}',
      timestamp: expect.any(Number),
    };
    expect(result).toStrictEqual(expected);
  });

  test("sendStatus method returns object composed of statusCode", () => {
    const result = ResponseCreator.sendStatus(204);
    const expected: Partial<HttpResponse> = {
      statusCode: 204,
    };
    expect(result).toStrictEqual(expected);
  });
});
