let binary, octal, hexa, HTO, OcToDe;

const from = document.querySelectorAll('.from');
const con = document.querySelector('.con');
const to = document.querySelectorAll('.to');
const input = document.querySelector('.Input');
const out = document.querySelector('.answer');

////.......................................... Toward Decimal /////////////////////////
/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
//////////////////////////////////
//////////////////////////////
// Binary to Decimal
const BinaryToDeci = function(){
    let BTD = [];
    [...binary] = input.value;
    binary.reverse().forEach((num, i) => BTD.push(num * 2**i));
    const outBTB = BTD.reduce((acc, currVal) => acc + currVal, 0);
    out.textContent = outBTB;
}

/////////////////////////
// Octal to Decimal
const OctalToDeci = function(octal){
    let OTD = [];
    octal.reverse().forEach((num, i) => OTD.push(num * 8**i));
    const outOTD = OTD.reduce((acc, currVal) => acc + currVal, 0);
    out.textContent = outOTD;
    OcToDe = outOTD;
};

/////////////////////////////
// Hexa to Decimal
const HexaToDeci = function(hex){
    let HTD = [];
    console.log(hex);
    hex.reverse().forEach((num, i) => {
        if(num === 'A' || num === 'a') num = 10;
        else if(num === 'B' || num === 'b') num = 11;
        else if(num === 'C' || num === 'c') num = 12;
        else if(num === 'D' || num === 'd') num = 13;
        else if(num === 'E' || num === 'e') num = 14;
        else if(num === 'F' || num === 'f') num = 15;      
        HTD.push(num * 16**i);
    });
    const outHTD = HTD.reduce((acc, currVal) => acc + currVal, 0);
    out.textContent = outHTD;
    HTO = outHTD;
}

//////////////////........................ Toward Binary ////////////////////////////////////////
/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////////         
// Octal to binary
let OTBcombined = [];
const OTB = function(number) {
    let bi = [];
    console.log(number);
    while (number >= 0) {
        bi.push(number % 2);
        number = Math.floor(number / 2);
        if (number === 0) {
            break;
        }
    }
    if(bi.length === 1) bi.push(0, 0);
    else if(bi.length === 2) bi.push(0);
    else if(bi.length === 0) bi.push(0, 0, 0);
    bi.reverse();
    bi.forEach(num => OTBcombined.push(num));
};
const octalToBin = function(){
    [...binary] = input.value;
    binary.forEach(num => {
        OTB(num);
    });
    console.log(OTBcombined);
    out.textContent = OTBcombined.join('');
};


////////////////////////////////////
//  Deci to Binary
let combined = [];
const bin = function(number) {
    let bi = [];
    while (number >= 0) {
        bi.push(number % 2);
        number = Math.floor(number / 2);
        if (number === 0) {
            break;
        }
    }    
    bi.reverse();
    return bi;
};                
console.log(bin(binary));

const DeciToBin = function(){    
    binary = input.value;
    OTB(binary);
    console.log(OTBcombined);
    out.textContent = OTBcombined.join('');
};                

///////////////////////////////////////////////
// Hexa to Binary
let HTBCombined = [];
const htb = function(number) {
    let bi = [];
    while (number > 0) {
        bi.push(number % 2); 
        number = Math.floor(number / 2);
        // if (number === 0) break;
    }
    if(bi.length === 1) bi.push(0, 0, 0);
    else if(bi.length === 2) bi.push(0, 0);
    else if(bi.length === 3) bi.push(0);
    else if(bi.length === 0) bi.push(0, 0, 0, 0);
    bi.reverse();
    bi.forEach(num => HTBCombined.push(num));
};

const hexatobin = function(){
    [...binary] = input.value;
    console.log(binary);
    binary.forEach(num => {
        if(num === 'A' || num === 'a') num = 10;
        else if(num === 'B' || num === 'b') num = 11;
        else if(num === 'C' || num === 'c') num = 12;
        else if(num === 'D' || num === 'd') num = 13;
        else if(num === 'E' || num === 'e') num = 14;
        else if(num === 'F' || num === 'f') num = 15;
        htb(num);
    });
    console.log(HTBCombined);
    out.textContent = HTBCombined.join('');
};


//////////////////................................... Toward Octal ////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

//////////////////////////////////////
// Binary to Octal
let grArr = [];
let output = [];
const binaryToOctal = function(){
    const [...hea] = input.value;
    grArr = [];
    output = [];
    const data = new Map([
        ['000', 0],
        ['001', 1],
        ['010', 2],
        ['011', 3],
        ['100', 4],
        ['101', 5],
        ['110', 6],
        ['111', 7]
    ])
    while(hea.length %3 !== 0){
        hea.unshift(0);   
    }
    
    for(let i=0; i<hea.length; i += 3){
        const group = hea.slice(i, (i+3)).join('');   
        grArr.push(group);
    }
console.log(grArr);
grArr.forEach(gr => {
    console.log(data.get(gr));
    output.push(data.get(gr));
    })
    console.log(output);
    out.textContent = output.join('');
}


////////////////////////////////////////////
// Decimal  to Octal
const DeciToOctal = function(deci){
    let rem = [];
    console.log(deci);
    while(deci > 0){
        // console.log(deci);
        rem.push(deci%8);
        deci = Math.floor(deci/8);
        if (deci === 0){
            break;
        }    
    }    
    rem.reverse();
    out.textContent = rem.join('');
}        
        
//////////////////////////////////////////////
//Hexa-Decimal to octal
// First hexa to deci then deci to octal


///////////////////////////////////.................. Toward Hexa-Decimal //////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
////////////////////////////////////
// Binary To Hexa
let gArr = [];
let outputs = [];
const binaryToHexa = function(){
    [...binary] = input.value;
    gArr = [];
    const data = new Map([
        ['0000', 0],
        ['0001', 1],
        ['0010', 2],
        ['0011', 3],
        ['0100', 4],
        ['0101', 5],
        ['0110', 6],
        ['0111', 7],
        ['1000', 8],
        ['1001', 9],
        ['1010', 'A'],
        ['1011', 'B'],
        ['1100', 'C'],
        ['1101', 'D'],
        ['1110', 'E'],
        ['1111', 'F']
    ])
    while(binary.length %4 !== 0){
        binary.unshift(0);
    }  
    
    for(let i=0; i<binary.length; i += 4){
        const group = binary.slice(i, (i+4)).join(''); 
        gArr.push(group);
    }  
    outputs = [];     
    gArr.forEach(gr => {
        outputs.push(data.get(gr));
    })
    out.textContent = outputs.join('');
}

//////////////////////////////
// Octal to Hexa
// First octal to deci..
const DeciToHexa = function(deci){
    let rem = [];
    while(deci > 0){
        console.log(deci);
        let num = deci%16;
        deci = Math.floor(deci/16);
        if(num === 10) num = 'A';
        else if(num === 11) num = 'B';
        else if(num === 12) num = 'C';
        else if(num === 13) num = 'D';
        else if(num === 14) num = 'E';
        else if(num === 15) num = 'F';
        rem.push(num);
    if (deci === 0){
        break;
    }    
    }    
    rem.reverse();
    out.textContent = rem.join('');
}  




///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////
/////////////////////////////////
///////////////////
///////  
//  Converter function   
con.addEventListener("click", function(){
    [...hexa] = input.value;
    binary = input.value;
    to.forEach(To => {
        from.forEach(fr =>{
            const toOption = To.options[To.selectedIndex];
            const froption = fr.options[fr.selectedIndex];
            //////////// Toward binary
            if(froption.value === 'Hexa' && toOption.value === 'Binary') hexatobin();
            else if(froption.value === 'Octal' && toOption.value === 'Binary') octalToBin();
            else if(froption.value === 'Decimal' && toOption.value === 'Binary') DeciToBin();
            
            //////////// Toward Decimal
            else if(froption.value === 'Binary' && toOption.value === 'Decimal') BinaryToDeci();
            else if(froption.value === 'Octal' && toOption.value === 'Decimal') OctalToDeci(hexa);
            else if(froption.value === 'Hexa' && toOption.value === 'Decimal')  HexaToDeci(hexa);

            /////////// Toward Octal
            else if(froption.value === 'Binary' && toOption.value === 'Octal') binaryToOctal();
            else if(froption.value === 'Decimal' && toOption.value === 'Octal') DeciToOctal(binary);
            else if(froption.value === 'Hexa' && toOption.value === 'Octal'){
                HexaToDeci(hexa);
                DeciToOctal(HTO);
            }

            ////////// Toward Hexa
            else if(froption.value === 'Binary' && toOption.value === 'Hexa') binaryToHexa();
            else if(froption.value === 'Decimal' && toOption.value === 'Hexa') DeciToHexa(binary);
            else if(froption.value === 'Octal' && toOption.value === 'Hexa'){
                OctalToDeci(hexa);
                DeciToHexa(OcToDe);
            }
        })
    })    
})
   
   
