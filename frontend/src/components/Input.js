export const Input = props => {
  return (
    <input className="form-control" type={props.type} placeholder={props.placeholder} name={props.name} required></input>
  )
}