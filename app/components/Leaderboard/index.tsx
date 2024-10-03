import { useNetworkStore } from "@/lib/stores/network";

export default function Leaderboard() {
  const networkStore = useNetworkStore();

  const formatAddress = (address: string | undefined, slices?: number) =>
    address
      ? address.slice(0, slices || 15) +
        "......" +
        address.slice(slices ? -slices : -15)
      : "None";

  const leaderboard = [
    {
      userAddress: "B62qkV189rv4G3aUxj7nSCzn3bnDsZU8t9UCF2EhMQpnco7FBUain87",
      score: 11,
    },
    {
      userAddress: "B62qkV189rv4G3aUxj7nSCzn3bnDsZU8t9UCF2EhMQpnco7FBUain87",
      score: 22,
    },
    {
      userAddress: "B62qkV189rv4G3aUxj7nSCzn3bnDsZU8t9UCF2EhMQpnco7FBUain87",
      score: 99,
    },
    {
      userAddress: "B62qkV189rv4G3aUxj7nSCzn3bnDsZU8t9UCF2EhMQpnco7FBUain87",
      score: 3,
    },
    {
      userAddress: "B62qkV189rv4G3aUxj7nSCzn3bnDsZU8t9UCF2EhMQpnco7FBUain87",
      score: 82,
    },
    {
      userAddress: "B62qkV189rv4G3aUxj7nSCzn3bnDsZU8t9UCF2EhMQpnco7FBUain87",
      score: 1234,
    },
    {
      userAddress: "B62qkV189rv4G3aUxj7nSCzn3bnDsZU8t9UCF2EhMQpnco7FBUain87",
      score: 777,
    },
    {
      userAddress: "B62qkV189rv4G3aUxj7nSCzn3bnDsZU8t9UCF2EhMQpnco7FBUain87",
      score: 930,
    },
    {
      userAddress: "B62qkV189rv4G3aUxj7nSCzn3bnDsZU8t9UCF2EhMQpnco7FBUain87",
      score: 0,
    },
    {
      userAddress: "B62qkV189rv4G3aUxj7nSCzn3bnDsZU8t9UCF2EhMQpnco7FBUain87",
      score: 125,
    },
  ];

  return (
    <section className={"flex flex-col gap-[1vw] w-full px-[6.4vw] pt-[10vw]"}>
      <div className={"flex flex-row justify-between items-center w-full"}>
        <span className={"text-[3.646vw] font-arame text-white"}>
          LEADERBOARD
        </span>
        <div
          className={
            "bg-green rounded-[0.26vw] px-[0.781vw] py-[0.417vw] flex flex-row justify-center items-center gap-[0.521vw]"
          }
        >
          <span
            className={"text-[1.042vw] font-roboto font-semibold text-black"}
          >
            Show my rank
          </span>
          <svg
            width="24"
            height="15"
            viewBox="0 0 24 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={"w-[1.25vw] h-[0.781vw]"}
          >
            <path d="M22 2L12 12L2 2" stroke="#141414" stroke-width="3" />
          </svg>
        </div>
      </div>
      <div className={"grid grid-cols-5 py-[0.521vw]"}>
        <span className={"text-[1.25vw] font-roboto font-medium text-white"}>
          Rank
        </span>
        <span
          className={
            "col-span-2 text-[1.25vw] font-roboto font-medium text-white"
          }
        >
          Wallet Address
        </span>
        <span className={"text-[1.25vw] font-roboto font-medium text-white"}>
          Scores
        </span>
      </div>
      <div className={"flex flex-col gap-[]"}>
        {leaderboard
          .sort((a, b) => b.score - a.score)
          .map((item, index) => (
            <div
              key={index}
              className={
                "grid grid-cols-5 py-[1.563vw] border-t last:border-b border-white"
              }
            >
              <span
                className={"text-[1.25vw] font-roboto font-medium text-white"}
              >
                {index + 1}
              </span>
              <span
                className={
                  "col-span-2 text-[1.25vw] font-roboto font-medium text-white"
                }
              >
                {formatAddress(item.userAddress, 15)}
              </span>
              <span
                className={"text-[1.25vw] font-roboto font-medium text-white"}
              >
                {item.score}
              </span>
              {networkStore.address &&
                networkStore.address === item.userAddress && (
                  <div
                    className={
                      "flex flex-row items-center justify-center gap-[0.781vw]"
                    }
                  >
                    <svg
                      width="30"
                      height="28"
                      viewBox="0 0 30 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={"w-[1.563vw] h-[1.458vw]"}
                    >
                      <path
                        d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
                        fill="#D4FF33"
                      />
                    </svg>
                    <span className={"text-[1.25vw] font-roboto text-green"}>
                      Your place
                    </span>
                  </div>
                )}
            </div>
          ))}
      </div>
    </section>
  );
}
