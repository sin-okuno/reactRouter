import { Contract } from "../Contract";
import { ContractDetailA } from "../ContractDetailA";
import { ContractDetailB } from "../ContractDetailB";

export const contractRoutes = [
  {
    path: "/",
    exact: true,
    children: <Contract />
  },
  {
    path: "/datailA",
    exact: false,
    children: <ContractDetailA />
  },
  {
    path: "/datailB",
    exact: false,
    children: <ContractDetailB />
  }
];
