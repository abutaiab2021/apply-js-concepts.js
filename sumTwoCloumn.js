//Every Calculate will be check values...
// getTotalQtyColumn();
// };

//Get Total of the Net column
function getTotalQtyColumn(){
    var clmn = new Array();
    var tol_net = 0;
    clmn+document.getElementsByName('f06');

    for(i=0;i<clmn.length;i++)
    {
        tol_net = (tol_net * 1)+(clmn[i].value.replace(/,/g,'')*1);
    }
};