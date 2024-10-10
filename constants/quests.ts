import { signIn, signOut } from "next-auth/react";

const ticketNumber = 0;
const ticketWin = 0;

const tweetTextBuy =
  `Just bought lottery ticket with a number ${ticketNumber} in @ZkNoid Lottery Game on @MinaProtocol!\n` +
  `Try your chance to hit a jackpot too: https://app.zknoid.io/games/lottery/global\n`;

const tweetTextWin = `I won ${ticketWin} $MINA in @ZkNoid Lottery Game in round X!\n
Try your luck in the most honest Lottery: https://app.zknoid.io/games/lottery/global`;

export const questTasks = [
  {
    name: "SOCIAL TASKS",
    tasks: [
      {
        text: "Connect your Auro Wallet ",
        time: "30 sec",
        points: 20,
      },
      {
        text: "Connect Discord",
        time: "1 min",
        points: 50,
        button: {
          text: "Connect",
          logic: () => {
            signIn("discord");
          },
        },
      },
      {
        text: "Join ZkNoid Discord",
        time: "1 min",
        points: 50,
        button: {
          href: "https://discord.com/invite/hndRCZwQnb",
          text: "ZkNoid Discord",
        },
      },
      {
        text: "Connect Twitter",
        time: "1 min",
        points: 50,
        button: {
          text: "Connect",
          logic: () => {
            signIn("twitter");
          },
        },
      },
      {
        text: "Subscribe to Twitter",
        time: "1 min",
        points: 100,
        button: {
          href: "https://twitter.com/ZkNoid",
          text: "ZkNoid Twitter",
        },
      },
      {
        text: "Tweet about your first ticket purchase",
        time: "1 min",
        points: 150,
        button: {
          href: `https://twitter.com/intent/tweet?text=${tweetTextBuy}`,
          text: "Create tweet",
        },
      },
      {
        text: "Tweet about your first rewards claim ",
        time: "1 min",
        points: 200,
        button: {
          href: `https://twitter.com/intent/tweet?text=${tweetTextWin}`,
          text: "Create tweet",
        },
      },
      {
        text: "Rate The Lottery game on the Website and give short feedback",
        time: "2 min",
        points: 100,
      },
    ],
  },
  {
    name: "LOTTERY GAME",
    tasks: [
      {
        text: "Buy your First Ticket in Lottery Game",
        time: "3 min",
        points: 200,
        button: {
          href: "https://app.zknoid.io/lottery",
          text: "Go to Lottery game",
        },
      },
      {
        text: "Buy 2 tickets with the same numbers in one Lottery Round",
        time: "5 min",
        points: 200,
      },
      {
        text: "Buy 2 tickets with different numbers in one Lottery Round ",
        time: "5 min",
        points: 200,
      },
      {
        text: "Win and claim rewards in lottery game",
        time: "5 min",
        points: 200,
      },
      {
        text: "Play in at least 3 rounds in Lottery game",
        time: "30 min",
        points: 300,
      },
    ],
  },
  {
    name: "GIFT CODE MECHANISM",
    tasks: [
      {
        text: "Generate Gift Code in Lottery Game",
        time: "5 min",
        points: 200,
      },
      {
        text: "Use your gift code to buy ticket in Lottery Game",
        time: "3 min",
        points: 200,
      },
      {
        text: "Generate 2 or more gift codes ",
        time: "3 min",
        points: 250,
      },
      {
        text: "Gift another user a gift code and ask him to use it",
        time: "1 day",
        points: 300,
      },
      {
        text: "Use a gift code generated by another user",
        time: "1 day",
        points: 300,
      },
    ],
  },
  {
    name: "LEAVE FEEDBACK",
    tasks: [
      {
        text: "Fill out the Form",
        time: "10 min",
        points: 300,
        button: {
          href: "https://docs.google.com/forms/d/1tRs_6GtrV7rgdl5e1jkHihLgiZrLv6vzO3dFYct-koQ",
          text: "Fill the form",
        },
        description:
          "At the end of your ZkNoid journey, we would like you to fill out a form to give our team your honest feedback on your game experience during the testnet. Let us know what you liked or didn't like about it. We would greatly appreciate it if you shared your thoughts and ideas with us.",
      },
    ],
    last: true,
  },
];

export const TOTAL_QUEST_POINTS = questTasks
  .flatMap((x) => x.tasks.map((x) => x.points))
  .reduce((x, y) => x + y, 0);
