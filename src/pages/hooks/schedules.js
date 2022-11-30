import { collection, getDocs, query, where } from "firebase/firestore"
import React from "react"
import { db } from "../../firebase/firebase.utils"


export const useScheduleData = async () => {
    const date = new Date();
    console.log("date", date.getDate()+6)
    const q = query(collection(db, "events"), where("startDate", ">=", date.getDate()), where("startDate", "<", date.getDate() + 7))
    const querySnapshot = await getDocs(q);
    console.log("len", querySnapshot.docs.length)
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });

    const returnvalue = querySnapshot.docs.map((doc) => doc.data());
    return {
        days: returnvalue
    }
}