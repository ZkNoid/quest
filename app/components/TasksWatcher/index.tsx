import { useNetworkStore } from "@/lib/stores/network";
import { api } from "@/trpc/react";
import { useSession } from "next-auth/react";
import { useCallback, useEffect } from "react";

export default function TasksWatcher() {
  const tickInterval = 2000;
  const network = useNetworkStore();
  const progress = api.progress.setSolvedQuests.useMutation();
  const checkDiscord = api.progress.checkDiscordSubscription.useMutation();

  const { data: session } = useSession();

  useEffect(() => {
    if (network.address) {
      progress.mutate({
        userAddress: network.address!,
        section: "SOCIAL TASKS",
        id: 1,
      });
    }
  }, [network.address]);
  

  useEffect(() => {
    if (!session || !network.address) return
    console.log('Discord data', session);
    checkDiscord.mutate({
      userAddress: network.address!
    })
  }, [session, network.address]);

  return <></>;
}
