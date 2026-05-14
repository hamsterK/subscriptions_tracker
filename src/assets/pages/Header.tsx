import { mockState } from "../mock-state";

export default function Header() {
  return (
    <header className="navbar bg-base-300 shadow-sm gap-5 flex justify-between py-5 px-14">
      <div className="flex items-center gap-10">
        <img src='logo.png' alt='logo piggy' className='w-20 rounded-full' />
      </div>
      <h1 className="text-2xl font-extrabold">Subscriptions Tracker</h1>
      <button className="btn btn-primary btn-lg">{mockState.authState.isAuthenticated ? 'My account' : 'Login'}</button>
    </header>
  )
}