

let nombre =  prompt ("Ingrese su nombre y apellido");
let opcion;
let turno = 0;

const sacaTurno = () => {
    for (let i = 0; opcion != "N"; i++){
        opcion = prompt ("Querés sacar otro turno? (S=Si, N = NO)");
        if (opcion == "S") 
        {alert ("Turno sacado con éxito.");
         turno++;}
        else if (opcion =="N"){alert ("Gracias por usar nuestro sistema de turnos");
        break;}
    }
    return turno;
}

alert ( `${nombre} usted tiene por delante ${sacaTurno(turno)} turnos.` )
console.log ("Usted tiene por delante:" +" " + sacaTurno (turno) +  " " + "turnos.");

