import { useNetworkStore } from "@/lib/stores/network";
import { api } from "@/trpc/react";
import { useSession } from "next-auth/react";
import { useCallback, useEffect } from "react";

export default function TasksWatcher() {
  const tickInterval = 2000;
  const network = useNetworkStore();
  const progress = api.progress.setSolvedQuests.useMutation();
  const checkDiscord = api.progress.checkDiscordSubscription.useMutation();
  const checkTwitter = api.progress.checkTwitterSubscription.useMutation();

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
    console.log('Session', session)
    if (!session || !network.address) return;
    if ((session as any).discord_access_token) {
      console.log("Discord data", session);
      checkDiscord.mutate({
        userAddress: network.address!,
      });
    }

    if ((session as any).twitter_access_token) {
      console.log("Twitter data", session);
      checkTwitter.mutate({
        userAddress: network.address!,
        subscribeRequested: false
      });
    }

  }, [session, network.address]);

  return <></>;
}
