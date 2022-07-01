"use strict";

// Importando dependencias.
import { Client, Collection, Intents } from "discord.js";
import fs from "fs";
import dotenv from "dotenv";
import path from "path";

// activando dotenv
dotenv.config();

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,

    Intents.FLAGS.GUILD_MEMBERS,

    Intents.FLAGS.GUILD_MESSAGES,

    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
});

// Event handler
import handler_events from "./handlers/events.cjs";
handler_events(client);

// Client login
client.login(process.env.TOKEN);
