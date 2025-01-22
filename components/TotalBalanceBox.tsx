"use client"
import { useEffect, useState } from "react";
import AnimatedCounter from "../components/AnimatedCounter";
import DoughnutChart from "../components/DoughnutChart";

// Corrected prop type name
const TotalBalanceBox = ({ 
  accounts = [], 
  totalBanks, 
  totalCurrentBalance 
}: TotlaBalanceBoxProps) => {  // Corrected here
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures client-side rendering
  }, []);

  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        {/* DoughnutChart */}
        <DoughnutChart accounts={accounts} />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2">Bank Accounts: {totalBanks}</h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current Balance</p>
          <p className="total-balance-amount flex-center gap-2">
            {isClient ? (
              <AnimatedCounter amount={totalCurrentBalance} />
            ) : (
              "Loading..."
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
