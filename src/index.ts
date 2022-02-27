import { ServiceBroker } from "moleculer";
import ApiService, { ApiSettingsSchema } from "moleculer-web";

const broker = new ServiceBroker();

broker.createService({
  name: "api-service",
  mixins: [ApiService],
  settings: {
    routes: [
      {
        path: "/api",
        whitelist: ["**"],
        autoAliases: true,
      },
    ],
  } as ApiSettingsSchema,
});

broker.createService({
  name: "teste",
  actions: {
    list: {
      // Expose as "/api/v2/posts/"
      rest: "GET /",
      handler() {
        return "Hello world";
      },
    },
  },
});

broker.start();
