import { analytics } from "../index";
import sinon from "sinon";
import { expect } from "chai";

global.window.fetch = function () {};

describe("analytics suit", () => {
  describe("enableAnalytics", () => {
    let stub;
    beforeEach(() => {
      stub = sinon.stub(console, "log");
    });

    afterEach(() => {
      stub.restore();
    });

    it("should log message when enableAnalytics is called", () => {
      // Prepare
      const message =
        "SIMPLAEX CODE CHALLENGE LOG rivraddon analytics.enableAnalytics";

      // Act
      analytics.enableAnalytics();

      // Assert
      expect(stub.called).equal(true);
      expect(stub.callCount).equal(1);
      expect(stub.calledWith(message)).equal(true);
    });
  });

  describe("trackPbjsEvent", () => {
    let stub;
    beforeEach(() => {
      stub = sinon.stub(window, "fetch").resolves({ json: function () {} });
    });

    afterEach(() => {
      stub.restore();
    });
    it("should call Fetch with appropriate argument when trackPbjsEvent is called", () => {
      // Prepare
      const event = { eventType: "track" };
      const calledWith = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(event),
      }

      // Act
      analytics.trackPbjsEvent(event);

      // Assert
      expect(stub.called).equal(true);
      expect(stub.callCount).equal(1);
      expect(stub.calledWith(analytics.URL, calledWith)).equal(true);
    });

    it("should should throw and error with invalid request body", () => {
      // Prepare
      const event = { type: 'Invalid' }

      // Assert
      expect(analytics.trackPbjsEvent.bind(analytics, event)).to.throw('Invalid event');
    });

    it("should should throw and error with invalid request event", () => {
      // Assert
      expect(analytics.trackPbjsEvent.bind(analytics)).to.throw('Invalid event');
    });
  });
});
