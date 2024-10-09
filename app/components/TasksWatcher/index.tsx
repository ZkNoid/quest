import { useNetworkStore } from "@/lib/stores/network";
import { api } from "@/trpc/react";
import { useCallback, useEffect } from "react";

export default function TasksWatcher() {
  const tickInterval = 2000;
  const network = useNetworkStore();
  const progress = api.progress.setSolvedQuests.useMutation();

  useEffect(() => {
    if (network.address) {
      progress.mutate({
        userAddress: network.address!,
        section: "SOCIAL TASKS",
        id: 1,
      });
    }

  }, [network.address]);

  return <></>;
}
