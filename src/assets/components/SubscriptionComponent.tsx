import type { Subscription } from "react-redux";

export default function SubscriptionComponent(subscription: Subscription) {
  return (
    <div>
      <h1>Manage Your Subscriptions</h1>
    </div>
  );
}

type SubscriptionComponentProps = {
  subscription: Subscription;
  // onEdit: (id: string) => void;
  // onDelete: (id: string) => void;
  // onMoveToCancelled: (id: string) => void;
};