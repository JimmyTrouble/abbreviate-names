function abbrevName(name){
    
    let first = name.charAt(0);
    let second = name.charAt(name.indexOf(" ") + 1);
    let inetials = first.concat(".",second).toUpperCase();
 
    return inetials;
    
}