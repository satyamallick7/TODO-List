exports.getDate = getDate

function getDate(){
    let date = new Date()
    let option = {weekday:"long", day:"numeric", month:"long"}
    let day = date.toLocaleDateString("en-US", option)

    return day

}