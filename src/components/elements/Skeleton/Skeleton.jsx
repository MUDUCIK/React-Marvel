const Skeleton = () => {
  return (
    <>
      <p className='char-select'>Please select a character to see information</p>
      <div className='skeleton'>
        <div className='pulse skeleton__header'>
          <div className='pulse skeleton__circle' />
          <div className='pulse skeleton__mini' />
        </div>
        <div className='pulse skeleton__block' />
        <div className='pulse skeleton__block' />
        <div className='pulse skeleton__block' />
      </div>
    </>
  )
}

export default Skeleton
