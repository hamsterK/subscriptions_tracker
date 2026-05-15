export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-4xl font-bold pointer-events-none">404 Not Found</h2>
      <button className="btn btn-primary mt-4 w-32" onClick={() => window.history.back()}>Go Back</button>
    </div>
  )
}