"use server";

import { dbAdmin } from "@/lib/firebase-admin";
import { DocumentData, QuerySnapshot } from 'firebase-admin/firestore';

// Function to simulate fetching user data
export const searchUserByEmail = async (domain: string, email: string): Promise<DocumentData | null | undefined> => {
  try {
      const collectionRef = dbAdmin.collection(`domain/${domain}/users`);
      const emailQuery = collectionRef.where('email', '==', email);
      const emailSnap: QuerySnapshot = await emailQuery.get();

      if (!emailSnap.empty) {
        const userData = emailSnap.docs[0].data();
        return {
          id: emailSnap.docs[0].id,
          ...userData,
        };
      } 
  } catch (error) {
    console.error('search-user-by-email.ts Error getting user document:', error);
    return null;
  }
};