export async function dbRemovePremiumFromUser(
  mongoose: any,
  customerId: string
) {
  const User = mongoose.model("User");
  console.log("deleting subscription from user");

  try {
    return User.updateOne(
      { customerId },
      {
        customerId: null,
        purchaseId: null,
        purchasePlan: null,
        subscriptionId: null,
        subscriptionRenewalDate: null,
        cancelOnNextRenewal: null,
      }
    );

    return;
  } catch (error) {
    throw error;
  }
}
