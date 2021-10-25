

const paymentImages = [
  {id: 1, src: '/assets/img/depositPage/visa.svg', name: "visa logo"},
  {id: 2, src: '/assets/img/depositPage/skrill.svg', name: "skrill logo"},
  {id: 3, src: '/assets/img/depositPage/eco_payz.svg', name: "eco_payz logo"},
  {id: 4, src: '/assets/img/depositPage/bitcoin.svg', name: "bitcoin logo"},
]

export const DepositImages = () => {


  return (
    <div className={styles.depositPaymentsImages}>
      {
        paymentImages.map((el) => {
          return (
            <img className={styles.paymantLogo} key={el.id} src={el.src} alt={el.name}/>
          )
        })
      }
    </div>
  )
}