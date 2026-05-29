import SubscriptionComponent from "../components/SubscriptionComponent.tsx";
import { mockState } from "../mock-state.ts";

export default function Home() {
  return (
    <>
      <h1>Welcome</h1>
      <SubscriptionComponent
        subscription={mockState.subscriptions[0]}
      />    </>
  )
}