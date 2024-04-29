import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export interface NetworkState {
  address: string | undefined;
  walletConnected: boolean;
  onWalletConnected: (address: string | undefined) => Promise<void>;
  connectWallet: () => Promise<void>;
  walletInstalled: () => boolean;
}

export const useNetworkStore = create<NetworkState, [["zustand/immer", never]]>(
  immer((set) => ({
    walletConnected: false,
    protokitClientStarted: false,
    minaNetwork: undefined,
    address: undefined,
    async onWalletConnected(address: string | undefined) {
      set((state) => {
        state.address = address;
        state.walletConnected = true;
      });
    },
    async connectWallet() {
      const accounts = await (window as any).mina.requestAccounts();
      this.onWalletConnected(accounts[0]);
    },
    walletInstalled() {
      return typeof mina !== "undefined";
    },
  }))
);
