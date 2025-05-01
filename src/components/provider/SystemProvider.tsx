import { AppSchema } from "@/lib/powersync/AppScheme";
import { SupabaseConnector } from "@/lib/powersync/SupabaseConnector";
import { Progress } from "@/components/ui/progress";
import { PowerSyncContext } from "@powersync/react";
import { PowerSyncDatabase, SyncStreamConnectionMethod } from "@powersync/web";
import React, { Suspense } from "react";

const SupabaseContext = React.createContext<SupabaseConnector | null>(null);
export const useSupabase = () => React.useContext(SupabaseContext);

export const db = new PowerSyncDatabase({
  schema: AppSchema,
  database: {
    dbFilename: "powersync.db",
  },
});

export const SystemProvider = ({ children }: { children: React.ReactNode }) => {
  const [connector] = React.useState(new SupabaseConnector());
  const [powerSync] = React.useState(db);

  React.useEffect(() => {
    powerSync.init();
    const l = connector.registerListener({
      initialized: () => {},
      sessionStarted: () => {
        powerSync.connect(connector, {
          connectionMethod: SyncStreamConnectionMethod.WEB_SOCKET,
        });
      },
    });

    connector.init();

    return () => l?.();
  }, [powerSync, connector]);

  return (
    <Suspense fallback={<Progress />}>
      <PowerSyncContext.Provider value={powerSync}>
        <SupabaseContext.Provider value={connector}>
            {children}
        </SupabaseContext.Provider>
      </PowerSyncContext.Provider>
    </Suspense>
  );
};

export default SystemProvider;
