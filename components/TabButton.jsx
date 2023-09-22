

export default function TabButton({ active, selecTab, children }) {

  const buttonClasses = active ? 'text-cyan-700 border-b border-b-sky-700' : 'px-3 py-1'

  return (
    <button onClick={ selecTab }>
      <p className={`px-3 py-1 font-bold ${ buttonClasses }`}>
        { children }
      </p>
    </button>
  )
}
