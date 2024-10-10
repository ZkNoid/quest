import { useClickedLinks } from "@/lib/stores/clickedLinks";
import { useNetworkStore } from "@/lib/stores/network";
import { delay } from "@/lib/utils";
import { api } from "@/trpc/react";
import { useSession } from "next-auth/react";
import { useCallback, useEffect } from "react";

export default function TasksWatcher() {
  const network = useNetworkStore();
  const progress = api.progress.setSolvedQuests.useMutation();
  const checkDiscord = api.progress.checkDiscordSubscription.useMutation();
  const checkTwitter = api.progress.checkTwitterSubscription.useMutation();
  const clickedLinks = useClickedLinks();

  const { data: session } = useSession();

  useEffect(() => {
    if (clickedLinks.clickedLinks.length == 0) return;

    console.log("Clicked links", clickedLinks);
    const clickedLink =
      clickedLinks.clickedLinks[clickedLinks.clickedLinks.length - 1];

    console.log("Clicked link", clickedLink);

    if (clickedLink) {
      console.log("Waiting");

      delay(10 * 1000).then((x) => {
        console.log("Mutating ", {
          userAddress: network.address!,
          section: "SOCIAL TASKS",
          id: clickedLink.id,
        });

        progress.mutate({
          userAddress: network.address!,
          section: "SOCIAL TASKS",
          id: clickedLink.id,
        });
      });
    }
  }, [clickedLinks]);

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
    console.log("Session", session);
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
        subscribeRequested: false,
      });
    }
  }, [session, network.address]);

  return <></>;
}
