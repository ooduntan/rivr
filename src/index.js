export const analytics = {
  URL: "https://tracker.simplaex-code-challenge.com",
  enableAnalytics() {
    console.log(
      "SIMPLAEX CODE CHALLENGE LOG rivraddon analytics.enableAnalytics"
    );
  },
  trackPbjsEvent(event) {
    if (!event || !event.eventType) {
      throw new Error("Invalid event");
    }
    window.fetch(this.URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ eventType: event.eventType }),
    })
      .then((response) => {
        return response.json();
      })
      .then((responseBody) => {
        console.log({ responseBody });
      })
      .catch((error) => {
        throw error;
      });
  },
};
