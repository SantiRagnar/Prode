import '../../assets/styles/partidos/input.scss'
function Input({ value, onChange, name, editar, readOnly }) {

  return (
    <div className='cont-inp'>
      {readOnly
        ?
        <input
          type="text"
          className='no-editable'
          value={value === "" ? "?" : value}
          readOnly
        />
        :
        <input
          type={value === "" && !editar ? "text" : "number"}
          name={name}
          min={0}
          max={99}
          value={value === "" ? "?" : value}
          onChange={onChange}
        />
      }
    </div>
  )
}

export default Input