import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export interface NetworkState {
  address: string | undefined;
  walletConnected: boolean;
  onWalletConnected: (address: string | undefined) => Promise<void>;
  connectWallet: (soft?: boolean) => Promise<void>;
  walletInstalled: () => boolean;
}


export function walletInstalled() {
  return typeof (window as any).mina !== 'undefined';
}

async function requestAccounts() {
  if ((window as any).mina?.isPallad) {
    return await (window as any).mina
      ?.request({ method: 'mina_accounts' })
      .then((resp: any) => resp.result);
  } else {
    return await (window as any).mina?.requestAccounts();
  }
}

export const useNetworkStore = create<NetworkState, [["zustand/immer", never]]>(
  immer((set) => ({
    walletConnected: false,
    protokitClientStarted: false,
    minaNetwork: undefined,
    address: undefined,
    async onWalletConnected(address: string | undefined) {
      if (address) {
        localStorage.minaAdderess = address;
      } else {
        localStorage.minaAdderess = "";
      }
      set((state) => {
        state.address = address;
        state.walletConnected = !!address;
      });
    },
    async connectWallet(soft: boolean | undefined) {
      if (soft) {
        if (localStorage.minaAdderess) {
          this.onWalletConnected(localStorage.minaAdderess);
          return this.onWalletConnected(localStorage.minaAdderess);
        }
      } else {
        const accounts = await requestAccounts();
        this.onWalletConnected(accounts[0]);
      }
    },
    walletInstalled() {
      return typeof mina !== "undefined";
    },
  }))
);
