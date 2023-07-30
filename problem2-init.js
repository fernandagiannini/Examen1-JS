
const humanizeDate = () => {
  const DATE_OF_TRIUNPH = new Date("2022-12-18T00:00:00"); //Creo una constante tipo Date con la fecha del enunciado
  //console.log(dateOfTriunf)
  const NUMBER_OF_DAY = DATE_OF_TRIUNPH.getUTCDay(); //extraigo el dia de la semana de la fecha
  const DAY_NAMES = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
  const DAY_NAME = DAY_NAMES[NUMBER_OF_DAY]
  const DAY_NUMBER = DATE_OF_TRIUNPH.getDate(); //extraigo el dia (del mes) de la fecha
  const MONTH_NUMBER = DATE_OF_TRIUNPH.getMonth(); //extraigo el mes de la fecha
  const MONTH_NAMES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
  const MONTH_NAME = MONTH_NAMES[MONTH_NUMBER]
  const YEAR = DATE_OF_TRIUNPH.getFullYear(); //extraigo el año de la fecha

  const DATE_OF_TRIUNPH_HUMANIZED = `${DAY_NAME}, ${DAY_NUMBER} de ${MONTH_NAME} de ${YEAR}`  //concateno como pide el enunciado
  return DATE_OF_TRIUNPH_HUMANIZED
}
console.log(humanizeDate())
