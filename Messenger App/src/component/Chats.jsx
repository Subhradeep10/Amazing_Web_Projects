import { onSnapshot } from 'firebase/firestore';
import React from 'react'
import { db } from '../firebase';

const Chats = () => {

  const [chats,setChats] = useState([])

  useEffect(()=>{
    const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
      console.log("Current data: ", doc.data());
  });
  
  },[])
  return (
    <div className='chats'>
      <div className="userChat">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOL-QsACtKYTeFUrPj3OGMr_jDB4B1F76wtQ&usqp=CAU" alt="" />
        <div className="userChatInfo">
          <span>Prince</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOL-QsACtKYTeFUrPj3OGMr_jDB4B1F76wtQ&usqp=CAU" alt="" />
        <div className="userChatInfo">
          <span>Prince</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOL-QsACtKYTeFUrPj3OGMr_jDB4B1F76wtQ&usqp=CAU" alt="" />
        <div className="userChatInfo">
          <span>Prince</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats