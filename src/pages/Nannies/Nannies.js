import React, { useState } from 'react'
import { collection, getDocs, doc, setDoc } from 'firebase/firestore/lite';
import ListNennies from '../../shared/ListNennies';
import { db } from '../../firebase/firebase-config';

const Nannies = () => {
const [nennies, setNennies] = useState(null)
  const getdata= async () => {
    const listNennies = collection(db, 'nennies');
    const nenniesCollection = await getDocs(listNennies);
    setNennies(nenniesCollection.docs.map(doc => doc.data()));
    console.log(nennies)
  }

  return (
    <div>
      <ListNennies/>
    </div>
    
  )
}

export default Nannies