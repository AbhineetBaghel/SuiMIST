"use client";
import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const account = useCurrentAccount();
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (account) {
      setAddress(account.address);
    } else {
      setAddress("");
    }
  }, [account]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <div className="connectwalletbtn m-10">
        <ConnectButton />
      </div>

      <div className="flex flex-col items-center justify-center">
        {/* <h1 className="text-3xl font-bold">Hello There Lets Play</h1> */}
        <p className="text-lg">
          {account ? (
            <>
              {/* Your account: {account.address} <br /> */}
              {/* <h2 >Let,s Fuking Play</h2> */}
              <a href="https://sui-mist2.vercel.app/">
                <Image src="/start.png" height={100} width={900} alt="MIST" />
              </a>
              <p></p>
            </>
          ) : (
            <>No Wallet Connected</>
          )}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mt-4"></div>
    </main>
  );
}
