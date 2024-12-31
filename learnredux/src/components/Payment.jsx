import React from 'react'

export default function Payment({user}) {
  return (
    <div>
        <h1>Payment Component</h1>
        <h3>{user.username}, ₹{user.balance}</h3>
        <button>Pay</button>
        <h3>Remaing Balance, ₹{user.balance}</h3>
    </div>
  )
}
