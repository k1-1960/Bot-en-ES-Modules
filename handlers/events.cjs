const fs = require("fs");
const path = require("path");

const event_files = fs
  .readdirSync(path.join(process.cwd(), "events"))
  .filter((file) => file.endsWith(".cjs"));

module.exports = function (client) {
  for (const file of event_files) {
    const event = require(path.join(process.cwd(), `events/${file}`));

    if (event.once)
      try {
        client.once(event.name, (...args) => event.run(client, ...args));
      } catch (error) {
        console.log(error);
      }

    if (!event.once)
      try {
        client.on(event.name, (...args) => event.run(client, ...args));
      } catch (error) {
        console.log(error);
      }
  }
};
