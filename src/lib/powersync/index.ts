import { PowerSyncDatabase } from "@powersync/web";
import { AppSchema } from "./AppScheme";
import { SupabaseConnector } from "./SupabaseConnector";

export const db = new PowerSyncDatabase({
  schema: AppSchema,
  database: {
    dbFilename: "powersync.db",
  },
});

export const connect = async () => {
  const connector = new SupabaseConnector();
  await db.connect(connector);
};
