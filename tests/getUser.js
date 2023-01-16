// 1. if there is no id provided then we should return an error message which says that you have to provide a user_id

// 2. if there is a id provided and that id is not a valid id then we will send an error which says please provide a valid user_id

// 3. if there is a valid id then api should return a message which says that user id deleted successfully

import chai from "chai";
import request from "request";
import { TESTING_URL } from "../constants/tests.js";

const expect = chai.expect;

describe("Get User Details API", () => {
  describe("Valid user_id provided", () => {
    const username = "validusername";
    const dummyUser = {
      name: "test-user",
      profile_image: "test-user-profile-image-link",
      bio: "test-user-bio",
      location: "test-user-location",
      github_link: "test-user-github-link",
      twitter_link: "test-user-twitter-link",
      message: undefined,
      repos: [
        {
          name: "test-user-repo",
          description: "test-user-repo-description",
          repo_link: "test-user-repo-link",
          languages: ["repo-lang1", "repo-lang2"],
        },
      ],
    };

    it("Status & Content", (done) => {
      request.get(`${TESTING_URL}/api/${username}`, {}, (_, response) => {
        const body = JSON.parse(response.body);
        expect(response.statusCode).to.equal(200);
        expect(body.message).to.equal(dummyUser.message);
        done();
      });
    });
  });

  describe("Invalid UserId Provided and server returns error 404", () => {
    const errorDetails = {
      message: "Given Username not found!!",
      code: "User Not Found",
    };
    const username = "test1212test";

    it("Status & Content", (done) => {
      request.get(`${TESTING_URL}/api/demo/${username}`, {}, (_, response) => {
        const body = JSON.parse(response.body);
        expect(response.statusCode).to.equal(404);
        expect(body.code).to.equal(errorDetails.code);
        done();
      });
    });
  });
});
