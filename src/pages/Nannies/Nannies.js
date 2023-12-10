import React from 'react'
import { collection, getDocs, doc, setDoc } from 'firebase/firestore/lite';
import ListNennies from '../../shared/ListNennies';
import { db } from '../../firebase/firebase-config';

const Nannies = () => {

  const getdata= async () => {
    const listNennies = collection(db, 'nennies');
    const nenniesCollection = await getDocs(listNennies);
    const nennies = nenniesCollection.docs.map(doc => doc.data());
    console.log(nennies)
  }
  return (
    <div>
      <button onClick={getdata}>Get data</button>
      <ListNennies/>
    </div>
    
  )
}

export default Nannies