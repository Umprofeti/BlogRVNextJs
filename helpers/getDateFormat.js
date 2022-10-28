export const formatDate = (time)=>{
    const months = ["Enero", "Febrero", "Marzo","Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let formatted_date = time.getDate() + " De " + months[time.getMonth()] + " Del " + time.getFullYear()
    return formatted_date;
}